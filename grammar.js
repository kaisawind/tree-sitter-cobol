const
  PREC = {
    OR: 10,
    XOR: 11,
    AND: 12,
    NOT: 13,
    COMPARE: 14,
    PLUS: 15,
    TIMES: 16,
    UNARY: 17,
    POWER: 18,
    UNARY: 19,
    CALL: 21,
    parenthesized_expression: 1,
  },
  op = (...xs) => seq(...xs.map((x) => optional(x))),
  or = choice

module.exports = grammar({
  name: "cobol",

  /** 
   * an array of tokens that may appear anywhere in the language. 
   * This is often used for whitespace and comments.
   * The default value of extras is to accept whitespace.
   */
  extras: $ => [
    $.copy_statement,
    $.line_comment,
    $.sql_statement,
    /[\s\f\uFEFF\u2060\u200B]|\\\r?\n/,
    "."
  ],

  externals: $ => [
    $._string_start,
    $._string_content,
    $._string_end,
  ],

  /**
   * an array of hidden rule names which should be considered to be ‘supertypes’ 
   * in the generated node types file 
   */
  supertypes: $ => [
    $._statement,
    $.expression,
    $.primary_expression,
    $.perform_statement,
    $.set_statement,
  ],

  inline: $ => [
    $._statement,
    $._left_hand_side,
  ],

  /**
   * an array of arrays of rule names. Each inner array represents a set of rules 
   * that’s involved in an LR(1) conflict that is intended to exist in the grammar. 
   * When these conflicts occur at runtime, Tree-sitter will use the GLR algorithm 
   * to explore all of the possible interpretations 
   */
  conflicts: $ => [],

  word: $ => $.identifier,

  rules: {
    source_file: $ => repeat(seq(
      $.identification_division,
      op($.environment_division, $.data_division, $.procedure_division)
    )),

    // identification division
    identification_division: $ => seq(
      optional(seq(or("IDENTIFICATION", "ID"), "DIVISION", ".")),
      or(
        $._program_id_paragraph,
        $._function_id_paragraph,
        $._class_id_paragraph,
        $._factory_paragraph,
        $._object_paragraph,
        $._method_id_paragraph,
        $._interface_id_paragraph,
      ),
      repeat(or(
        seq("AUTHOR", ".", optional(seq(field("author", $.comment_entry), optional(".")))),
        seq("DATE-COMPILED", ".", optional(seq(field("compiled_date", $.comment_entry), optional(".")))),
        seq("DATE-MODIFIED", ".", optional(seq(field("modified_date", $.comment_entry), optional(".")))),
        seq("DATE-WRITTEN", ".", optional(seq(field("written_date", $.comment_entry), optional(".")))),
        seq("INSTALLATION", ".", optional(seq(field("installation", $.comment_entry), optional(".")))),
        seq("REMARKS", ".", optional(seq(field("remarks", $.comment_entry), optional(".")))),
        seq("SECURITY", ".", optional(seq(field("security", $.comment_entry), optional(".")))),
      )),
      optional($._identification_options_paragraph)
    ),

    _program_id_paragraph: $ => seq(
      "PROGRAM-ID", ".",
      field("program_name", $.identifier),
      optional(seq("AS", field("program_alias_name", or($.alphanumeric_literal, $.national_literal)))),
      op(
        seq(optional("IS"), or("COMMON", "INITIAL", "RECURSIVE"), optional("PROGRAM")),
        seq(optional("IS"), "PROTOTYPE")
      ),
      "."
    ),

    _function_id_paragraph: $ => seq(
      "FUNCTION-ID", ".",
      field("function_name", $.identifier),
      op(
        seq("AS", field("function_alias_name", or($.alphanumeric_literal, $.national_literal))),
        seq(optional("IS"), "PROTOTYPE")
      ),
      "."
    ),

    _class_id_paragraph: $ => seq(
      "CLASS-ID", ".",
      field("class_name", $.identifier),
      op(
        seq("AS", field("class_alias_name", or($.alphanumeric_literal, $.national_literal))),
        seq(optional("IS"), "FINAL"),
        seq("INHERITS", optional("FROM "), repeat(field("inherits_class_name", $.identifier))),
        seq("USING", repeat(field("parameter_name", $.identifier))),
      ),
      "."
    ),

    _factory_paragraph: $ => seq(
      "FACTORY", ".", optional(seq("IMPLEMENTS", repeat(field("interface_name", $.identifier)), "."))
    ),

    _object_paragraph: $ => seq(
      "OBJECT", ".", optional(seq("IMPLEMENTS", repeat(field("interface_name", $.identifier)), "."))
    ),

    _method_id_paragraph: $ => seq(
      "METHOD-ID", ".",
      or(
        seq(field("method_name", $.identifier), optional(seq("AS", field("method_alias_name", or($.alphanumeric_literal, $.national_literal))))),
        seq(or("GET", "SET"), "PROPERTY", field("property_name", $.identifier))
      ),
      op("OVERRIDE", seq(optional("IS"), "FINAL")),
      "."
    ),

    _interface_id_paragraph: $ => seq(
      "INTERFACE-ID", ".", field("interface_name", $.identifier),
      op(
        seq("AS", field("interface_alias_name", or($.alphanumeric_literal, $.national_literal))),
        seq("INHERITS", optional("FROM"), repeat(field("inherits_interface_name", $.identifier))),
        seq("USING", repeat(field("parameter_name", $.identifier)))
      ),
      "."
    ),

    _identification_options_paragraph: $ => seq(
      "OPTIONS", ".",
      op(
        seq("ARITHMETIC", optional("IS"), or("NATIVE", "STANDARD")),
        seq("ENTRY-CONVENTION", optional("IS"), or("COBOL", field("entry_convention_name", $.identifier))),
        "."
      ),
    ),

    // environment division
    environment_division: $ => seq(
      seq("ENVIRONMENT", "DIVISION", "."),
      op(
        $.configuration_section,
        $.input_output_section
      )
    ),

    // environment division configuration section.
    configuration_section: $ => seq(
      seq("CONFIGURATION", "SECTION", "."),
      op(
        $.source_computer,
        $.object_computer,
        $.special_names,
        $._repository
      )
    ),

    source_computer: $ => seq(
      "SOURCE-COMPUTER", ".",
      op(
        field("computer_name", $.identifier),
        seq(optional("WITH"), "DEBUGGING MODE"),
        "."
      )
    ),

    memory_size: $ => seq("MEMORY", "SIZE", optional("IS"), $.integer, or("WORDS", "CHARACTERS")),
    program_collating_sequence: $ => seq(optional("PROGRAM"), "COLLATING", optional("SEQUENCE"), optional("IS"), field("alphabet_name", $.identifier)),
    segment_limit: $ => seq("SEGMENT-LIMIT", optional("IS"), $.integer),
    character_classification: $ => seq(optional("CHARACTER"), "CLASSIFICATION", optional("IS"), or(
      field("locale_name", $.identifier),
      "LOCALE", "USER-DEFAULT", "SYSTEM-DEFAULT"
    )),
    object_computer: $ => seq(
      "OBJECT-COMPUTER", ".",
      optional(field("computer_name", $.identifier)),
      repeat(or(
        $.memory_size,
        $.program_collating_sequence,
        $.segment_limit,
        $.character_classification,
      )),
      "."
    ),

    special_names: $ => seq(
      "SPECIAL-NAMES", ".",
      repeat(or(
        seq("CALL-CONVENTION", $.integer, optional("IS"), field("call_convention_mnemonic_name", $.identifier)),
        seq("CONSOLE", optional("IS"), "CRT"),
        seq("CRT", "STATUS", optional("IS"), field("crt_statues", $.identifier)),
        seq("CURRENCY", "SIGN", optional("IS"), field("currency_sign", $._literal)),
        seq("CURSOR", optional("IS"), field("cursor", $.identifier)),
        seq("DECIMAL-POINT", optional("IS"), "COMMA"),
        seq("EVENT", "STATUS", optional("IS"), field("event_statues", $.identifier)),
        prec.left(repeat1(seq("LOCALE", field("local_name", $.identifier), optional("IS"), $._literal))),
        seq("NUMERIC", "SIGN", optional("IS"), "TRAILING", "SEPARATE"),
        seq("SCREEN", "CONTROL", optional("IS"), field("screen_control", $.identifier)),
        prec.left(repeat1(seq(field("device_name", $.identifier), optional("IS"), field("mnemonic_name", $.identifier)))),
        prec.left(repeat1(seq("ALPHABET", field("alphabet_name", $.identifier), optional("IS"), or(
          "ASCII", "EBCDIC", "NATIVE", "STANDARD-1", "STANDARD-2",
          repeat1(seq($._literal, optional(or(seq(or("THRU", "THROUGH"), $._literal),
            repeat1(seq("ALSO", $._literal))
          ))))
        )))),
        prec.left(repeat1(seq("CLASS", field("class_name", $.identifier), optional("IS"),
          repeat1(seq($._literal, optional(seq(or("THRU", "THROUGH"), $._literal))))
        ))),
        prec.left(repeat1(seq(field("switch_name", $.identifier), optional(seq(optional("IS"), field("mnemonic_name", $.identifier))),
          seq(or("ON", "OFF"), optional("STATUS"), optional("IS"), field("condition_name", $.identifier)), // todo: this clause should optional.
        ))),
        prec.left(repeat1(seq(
          "SYMBOLIC", optional("CHARACTERS"),
          repeat1(seq(repeat1(field("symbolic_character", $.identifier)), optional(or("IS", "ARE")), repeat1($.integer))),
          seq("IN", field("alphabet_name", $.identifier)) // todo: this clause should optional.
        ))),
      )),
      "."
    ),

    _repository: $ => seq(
      "REPOSITORY.",
      repeat(or(
        $.class_repository,
        $.interface_repository,
        $.function_repository,
        $.program_repository,
        $.property_repository
      )),
      optional(".")
    ),

    class_repository: $ => seq(
      "CLASS",
      field("class_name", $.identifier),
      op(
        seq("AS", $._literal),
        seq("EXPANDS", field("expand_class_name", $.identifier), "USING", repeat1(field("using_class_name", $.identifier)))
      ),
    ),

    interface_repository: $ => seq(
      "INTERFACE",
      field("interface_name", $.identifier),
      op(
        seq("AS", $._literal),
        seq("EXPANDS", field("expand_interface_name", $.identifier), "USING", repeat1(field("using_interface_name", $.identifier)))
      )
    ),

    function_repository: $ => seq(
      "FUNCTION",
      or(
        seq(field("function_prototype_name", $.identifier), optional(seq("AS", $._literal))),
        seq(or("ALL", repeat1(field("intrinsic_function_name", $.identifier))), "INTRINSIC")
      )
    ),

    program_repository: $ => seq("PROGRAM", field("program_prototype_name", $.identifier), optional(seq("AS", $._literal))),

    property_repository: $ => seq("PROPERTY", field("property_name", $.identifier), optional(seq("AS", $._literal))),

    // environment division input/output section.
    input_output_section: $ => seq(
      seq("INPUT-OUTPUT", "SECTION", "."),
      op(
        $.file_control,
        $.io_control,
      )
    ),

    organization_clause: $ => prec.right(seq(
      optional(seq(or("ORGANIZATION", "ORGANISATION"), optional("IS"))),
      or(
        seq(optional("RECORD"), optional("BINARY"), "SEQUENTIAL"),
        seq("LINE", "SEQUENTIAL"),
        "RELATIVE",
        "INDEXED"
      ),
      repeat(or(
        seq("ACCESS", optional("MODE"), optional("IS"), or("SEQUENTIAL", "DYNAMIC", "RANDOM")),
        seq("PADDING", optional("CHARACTER"), optional("IS"), or($.identifier, $._literal)),
        seq("RELATIVE", optional("KEY"), optional("IS"), $.identifier),
        seq("RECORD", optional("KEY"), optional("IS"), or(
          field("data_name", $.identifier),
          seq(field("record_key_name", $.identifier), or("=", seq("SOURCE", optional("IS"))), repeat1(field("data_name", $.identifier)))
        )),
        seq("ALTERNATE", "RECORD", optional("KEY"), optional("IS"),
          or(
            field("data_name", $.identifier),
            seq(field("record_key_name", $.identifier), or("=", seq("SOURCE", optional("IS"))), repeat1(field("data_name", $.identifier)))
          ),
          optional(seq(optional("WITH"), "DUPLICATES")),
          optional(seq("SUPPRESS", "WHEN", or(
            seq("ALL", $._literal),
            or("SPACES", "ZEROES")
          ))),
        )
      )),
    )),
    select_statement: $ => seq(
      "SELECT", optional(seq(optional("NOT"), "OPTIONAL")), field("file_name", $.identifier),
      repeat(or(
        seq(
          "ASSIGN", optional(or("TO", "USING")),
          optional(or("EXTERNAL", "DYNAMIC")),
          optional(or(or("DISC", "DISK"), "DISPLAY", "KEYBOARD", seq("LINE", "ADVANCING"), "PRINTER", "RANDOM", "TAPE")),
          optional(or($.identifier, $._literal))
        ),
        seq("COLLATING", optional("SEQUENCE"), optional("IS"), field("alphabet_name", $.identifier)),
        seq(optional(or("FILE", "SORT")), "STATUS", optional("IS"), $.identifier, optional($.identifier)),
        seq("LOCK", optional("MODE"), optional("IS"), or(
          or("MANUAL", "AUTOMATIC"),
          seq("EXCLUSIVE", optional(seq(optional("WITH"), or(
            seq("LOCK", "ON", optional("MULTIPLE"), or("RECORD", "RECORDS")),
            "ROLLBACK"
          ))))
        )),
        $.organization_clause,
        seq("RECORD", "DELIMITER", optional("IS"), "STANDARD-1"),
        seq("RESERVE", $.integer, optional("AREAS")),
        seq("SHARING", optional("WITH"), or(
          seq(or("ALL", "NO"), optional("OTHER")),
          seq("READ", "ONLY")
        )),
      )),
      optional(".")
    ),
    file_control: $ => seq(
      "FILE-CONTROL", ".",
      repeat($.select_statement)
    ),

    multiple_file_statement: $ => seq("MULTIPLE", optional("FILE"), optional("TAPE"), optional("CONTAINS"),
      repeat1(seq(field("file_name", $.identifier), optional(seq("POSITION", $.integer))))
    ),
    same_record_statement: $ => seq("SAME", or("SORT-MERGE", "SORT", "RECORD"), optional("AREA"), optional("FOR"), repeat1(field("file_name", $.identifier))),
    io_control: $ => seq(
      "I-O-CONTROL", ".",
      repeat(or($.multiple_file_statement, $.same_record_statement)),
      optional(".")
    ),

    // data division
    data_division: $ => seq(
      "DATA",
      "DIVISION",
      ".",
      op(
        $.file_section,
        $.working_storage_section,
        $.local_storage_section,
        $.linkage_section,
        $.report_section,
        $.screen_section
      ),
    ),

    // data division file section.
    file_section: $ => seq(
      "FILE", "SECTION", ".",
      repeat($.file_description_entry)
    ),

    // data division working-storage section.
    working_storage_section: $ => seq(
      "WORKING-STORAGE",
      "SECTION",
      ".",
      repeat($.data_description_entry),
    ),

    // data division local-storage section.
    local_storage_section: $ => seq(
      "LOCAL-STORAGE",
      "SECTION",
      ".",
      repeat($.data_description_entry)
    ),

    // data division linkage section.
    linkage_section: $ => seq(
      "LINKAGE",
      "SECTION",
      ".",
      repeat($.data_description_entry),
    ),

    // data division report section.
    report_section: $ => seq(
      "REPORT",
      "SECTION",
      ".",
      repeat($.report_description_entry),
    ),

    // data division screen section.
    screen_section: $ => seq(
      "SCREEN",
      "SECTION",
      ".",
      repeat($.screen_description_entry),
    ),

    // file description entry define.
    block_contains_clause: $ => seq(
      "BLOCK", optional("CONTAINS"), optional(seq($.integer, "TO")), $.integer, or("CHARACTERS", "RECORDS")
    ),
    code_set_clause: $ => seq(
      "CODE-SET", optional("IS"), field("alphabet_name", $.identifier)
    ),
    data_records_clause: $ => seq(
      "DATA", seq(or("RECORD", "RECORDS"), optional(or("IS", "ARE"))), repeat1($.identifier)
    ),
    label_records_clause: $ => seq(
      "LABEL", seq(or("RECORD", "RECORDS"), optional(or("IS", "ARE"))), or("OMITTED", "STANDARD", repeat1($.identifier))
    ),
    linage_clause: $ => seq(
      "LINAGE", optional("IS"), or($.integer, $.identifier), optional("LINES"),
      optional(seq(optional("LINES"), optional("AT"), "BOTTOM", or($.integer, $.identifier))),
      optional(seq(optional("LINES"), optional("AT"), "TOP", or($.integer, $.identifier))),
      optional(seq(optional("WITH"), "FOOTING", optional("AT"), or($.integer, $.identifier)))
    ),
    record_clause: $ => seq("RECORD", or(
      seq(optional("CONTAINS"), optional(seq($.integer, "TO")), $.integer, optional("CHARACTERS")),
      seq(optional("IS"), "VARYING", optional("IN"), optional("SIZE"), optional(seq(
        optional("FROM"), optional(seq($.integer, "TO")), $.integer, optional("CHARACTERS"), "DEPENDING", optional("ON"), $.identifier
      )))
    )),
    recording_mode_clause: $ => seq(
      "RECORDING", optional("MODE"), optional("IS"), field("recording_mode", $.identifier)
    ),
    reports_clause: $ => seq(
      or("REPORT", "REPORTS"), optional(or("IS", "ARE")), repeat1(field("report_name", $.identifier))
    ),
    value_of_clause: $ => seq(
      "VALUE", "OF", field("implementor_name", $.identifier), optional("IS"), or($._literal, $.identifier)
    ),

    file_description_entry: $ => seq(
      or("FD", "SD"), field("file_name", $.identifier), optional(seq(optional("IS"), or("EXTERNAL", "GLOBAL"))),
      repeat(or(
        $.block_contains_clause,
        $.code_set_clause,
        $.data_records_clause,
        $.label_records_clause,
        $.linage_clause,
        $.record_clause,
        $.recording_mode_clause,
        $.reports_clause,
        $.value_of_clause,
      )),
      ".",
      repeat($.data_description_entry)
    ),

    // data description entry define.
    data_any_length_clause: $ => seq("ANY", "LENGTH"),
    data_blank_when_zero_clause: $ => seq("BLANK", optional("WHEN"), "ZERO"),
    data_just_right_clause: $ => seq(or("JUSTIFIED", "JUST"), optional("RIGHT")),
    data_occurs_clause: $ => seq(
      "OCCURS", optional(seq($.integer, "TO")), $.integer, optional("TIMES"),
      optional(seq("DEPENDING", optional("ON"), field("depending_on", $.identifier))),
      optional(seq(optional("STEP"), field("step", $.identifier))),
      optional(seq(or("ASCENDING", "DESCENDING"), optional("KEY"), optional("IS"), field("order_key", $.identifier))),
      optional(seq("INDEXED", optional("BY"), field("index_by", $.identifier)))
    ),
    data_picture_clause: $ => seq(
      or("PICTURE", "PIC"), optional("IS"),
      prec.left(repeat1(
        prec(1, seq(
          repeat1(or("$", $.identifier, "/", ",", ".", ":", "*", "**", "+", "-", "<", ">", $._numeric_literals)),
          optional(seq("(", $.integer, ")"))
        ))
      ))
    ),
    data_redefines_clause: $ => seq("REDEFINES", field("redefines", $.identifier)),
    data_sign_clause: $ => seq(
      "SIGN", optional("IS"), or("LEADING", "TRAILING"), optional(seq("SEPARATE", optional("CHARACTER")))
    ),
    data_sync_clause: $ => seq(or("SYNC", "SYNCRONIZED", "SYNCHRONISED"), optional(or("LEFT", "RIGHT"))),
    data_usage_clause: $ => seq(
      "USAGE", optional("IS"),
      or(
        "BINARY",
        seq("BINARY-C-LONG", optional("SIGNED")),
        seq("BINARY-C-LONG", "UNSIGNED"),
        seq("BINARY-CHAR", optional("SIGNED")),
        seq("BINARY-CHAR", "UNSIGNED"),
        seq("BINARY-DOUBLE", optional("SIGNED")),
        seq("BINARY-DOUBLE", "UNSIGNED"),
        seq("BINARY-INT"),
        seq("BINARY-LONG", optional("SIGNED")),
        seq("BINARY-LONG", "UNSIGNED"),
        "BINARY-LONG-LONG",
        seq("BINARY-SHORT", optional("SIGNED")),
        seq("BINARY-SHORT", "UNSIGNED"),
        "COMPUTATIONAL",
        "COMP",
        "COMPUTATIONAL-1",
        "COMP-1",
        "COMPUTATIONAL-2",
        "COMP-2",
        "COMPUTATIONAL-3",
        "COMP-3",
        "COMPUTATIONAL-4",
        "COMP-4",
        "COMPUTATIONAL-5",
        "COMP-5",
        "COMPUTATIONAL-6",
        "COMP-6",
        "COMPUTATIONAL-X",
        "COMP-X",
        "DISPLAY",
        "FLOAT-DECIMAL-16",
        "FLOAT-DECIMAL-34",
        "FLOAT-LONG",
        "FLOAT-SHORT",
        "INDEX",
        "NATIONAL",
        "PACKED-DECIMAL",
        "POINTER",
        "PROCEDURE-POINTER",
        "PROGRAM-POINTER",
        "SIGNED-INT",
        "SIGNED-LONG",
        "SIGNED-SHORT",
        "UNSIGNED-INT",
        "UNSIGNED-LONG",
        "UNSIGNED-SHORT",
        "TYPEDEF"
      )
    ),
    data_value_clause: $ => seq("VALUE", optional("IS"), or(field("data_value", $._literal), field("data_value", $.identifier))),
    data_renames_clause: $ => seq(
      "RENAMES", field("renamed_name", $.identifier),
      optional(seq(or("THROUGH", "THRU"), field("through_name", $.identifier)))
    ),

    data_description_entry: $ => or(
      seq(
        or(field("level_number", $.integer), $.level_number_77), optional(or($.identifier, "FILLER")),
        optional(seq(optional("IS"), or("GLOBAL", "EXTERNAL"))),
        repeat(or(
          $.data_any_length_clause,
          "BASED",
          $.data_blank_when_zero_clause,
          $.data_just_right_clause,
          $.data_occurs_clause,
          $.data_picture_clause,
          $.data_redefines_clause,
          $.data_sign_clause,
          $.data_sync_clause,
          $.data_usage_clause,
          $.data_value_clause,
        )),
        "."
      ),
      seq(
        $.integer, field("constant_name", $.identifier), "CONSTANT", optional(seq(optional("IS"), "GLOBAL")),
        or(
          seq(optional("AS"), or($._literal, seq(or("BYTE-LENGTH", "LENGTH"), optional("OF"), $.identifier))),
          seq("FROM", field("CDF_variable_name", $.identifier))
        ),
        "."
      ),
      seq($.level_number_66, field("data_name", $.identifier), $.data_renames_clause, "."),
      seq($.level_number_78, field("constant_name", $.identifier), $.data_value_clause, "."),
      seq(
        $.level_number_88, field("condition_name", $.identifier), or("VALUE", "VALUES"), optional(or("IS", "ARE")),
        repeat1(seq($._literal, optional(seq(or("THRU", "THROUGH"), $._literal)))),
        optional(seq(optional("WHEN"), optional("SET"), optional("TO"), "FALSE", optional("IS"), $._literal)),
        "."
      ),
    ),

    // report description entry define.
    report_description_entry: $ => seq(
      "RD", field("report_name", $.identifier), optional(seq(optional("IS"), "GLOBAL")),
      repeat(or(
        seq("CODE", optional("IS"), or($._literal, $.identifier)),
        seq(or("CONTROL", "CONTROLS"), optional(or("IS", "ARE")), repeat1(or("FINAL", $.identifier))),
        seq(
          "PAGE", optional(seq(or("LIMIT", "LIMITS"), optional(or("IS", "ARE")))), optional(seq(or($._literal, $.identifier), "LINES")),
          repeat(or(
            seq(or($._literal, $.identifier), or("COLUMNS", "COLS")),
            seq("HEADING", optional("IS"), or($.identifier, $._literal)),
            seq("FIRST", or("DE", "DETAIL"), optional("IS"), or($._literal, $.identifier)),
            seq("LAST", or("CH", seq("CONTROL", "HEADING")), optional("IS"), or($._literal, $.identifier)),
            seq("LAST", or("DE", "DETAIL"), optional("IS"), or($._literal, $.identifier)),
            seq("FOOTING", optional("IS"), or($._literal, $.identifier)),
          ))
        )
      )),
      ".",
      repeat(or($.report_group_description, $.data_description_entry))
    ),

    report_group_description: $ => seq(
      "01", optional(field("level_01_data", $.identifier)),
      repeat(or(
        seq("LINE", optional("NUMBER"), optional("IS"), or(
          seq($.integer, optional(seq(optional("ON"), "NEXT", "PAGE"))),
          seq(or("+", "PLUS"), $.integer),
          seq(optional("ON"), "NEXT", "PAGE")
        )),
        seq("NEXT", "GROUP", optional("IS"), or(
          seq(or("+", "PLUS"), $.integer),
          or("NEXT", seq("NEXT", "PAGE"), "PAGE")
        )),
        seq("TYPE", optional("IS"), or(
          or("RH", seq("REPORT", "HEADING")),
          or("PH", seq("PAGE", "HEADING")),
          seq(or("CH", seq("CONTROL", "HEADING")), or("FINAL", $.identifier)),
          or("DE", "DETAIL"),
          seq(or("CF", seq("CONTROL", "FOOTING")), or("FINAL", $.identifier)),
          or("PF", seq("PAGE", "FOOTING")),
          or("RF", seq("REPORT", "FOOTING"))
        ))
      )),
      "."
    ),

    screen_background_color_clause: $ => seq(or("BACKGROUND-COLOR", "BACKGROUND-COLOUR"), optional("IS"), or($.integer, $.identifier)),
    screen_blank_clause: $ => seq("BLANK", or("LINE", "SCREEN")),
    screen_erase_clause: $ => seq("ERASE", or("EOL", "EOS")),
    screen_column_number_clause: $ => seq("COLUMN", optional("NUMBER"), optional("IS"), optional(or("+", "PLUS")), or($.integer, $.identifier)),
    screen_foreground_color_clause: $ => seq(or("FOREGROUND-COLOR", "FOREGROUND-COLOUR"), optional("IS"), or($.integer, $.identifier)),
    screen_line_number_clause: $ => seq("LINE", optional("NUMBER"), optional("IS"), optional(or("+", "PLUS")), or($.integer, $.identifier)),
    screen_occurs_clause: $ => seq("OCCURS", $.integer, optional("TIMES")),
    screen_prompt_clause: $ => seq("PROMPT", "CHARACTER", optional("IS"), or($._literal, $.identifier)),
    // screen description entry
    screen_description_entry: $ => seq(
      field("level_number", $.integer), optional(or(field("screen_name", $.identifier), "FILLER")),
      repeat(or(
        or("AUTO", "AUTO-SKIP", "AUTOTERMINATE"),
        or("BELL", "BEEP"),
        $.screen_background_color_clause,
        $.screen_blank_clause,
        $.screen_erase_clause,
        $.data_blank_when_zero_clause,
        $.data_just_right_clause,
        "BLINK",
        or("HIGHLIGHT", "LOWLIGHT"),
        "REVERSE-VIDEO",
        $.screen_column_number_clause,
        $.screen_foreground_color_clause,
        or(
          seq("FROM", or($.identifier, $._literal)),
          seq("TO", $.identifier),
          seq("USING", $.identifier),
          seq("VALUE", optional("IS"), $._literal)
        ),
        or("FULL", "LENGTH-CHECK"),
        or("REQUIRED", "EMPTY-CHECK"),
        or("SECURE", "NO-ECHO"),
        "LEFTLINE",
        "OVERLINE",
        "UNDERLINE",
        $.screen_line_number_clause,
        $.screen_occurs_clause,
        $.data_picture_clause,
        $.screen_prompt_clause,
        $.data_sign_clause
      )),
      ".",
    ),

    // procedure division
    procedure_division: $ => seq(
      seq("PROCEDURE", "DIVISION"),
      optional(or(
        seq("USING", repeat1($.subprogram_argument)),
        seq("CHAINING", repeat1($.main_program_argument)),
      )),
      optional(seq("RETURNING", $._identifier)),
      ".",
      optional($.procedure_declaratives),
      $.procedure_body,
      optional(or(
        $.end_class,
        $.end_factory,
        $.end_function,
        $.end_interface,
        $.end_method,
        $.end_object,
        $.end_program
      ))
    ),

    subprogram_argument: $ => seq(
      optional(seq(
        optional("BY"), or(
          seq("REFERENCE", optional("OPTIONAL")),
          seq("VALUE", optional(seq(optional("UNSIGNED"), "SIZE", optional("IS"), or("AUTO", "DEFAULT", $.integer))))
        )
      )),
      $.identifier, optional(",")
    ),

    main_program_argument: $ => seq(optional(seq(optional("BY"), "REFERENCE")), optional("OPTIONAL"), $.identifier, optional(",")),

    end_class: $ => seq("END", "CLASS", field("class_name", $.identifier), "."),
    end_factory: $ => seq("END", "FACTORY", "."),
    end_function: $ => seq("END", "FUNCTION", field("function_name", $.identifier), "."),
    end_interface: $ => seq("END", "INTERFACE", field("interface_name", $.identifier), "."),
    end_method: $ => seq("END", "METHOD", field("method_name", $.identifier), "."),
    end_object: $ => seq("END", "OBJECT", "."),
    end_program: $ => seq("END", "PROGRAM", field("program_name", $.identifier), "."),

    procedure_declaratives: $ => seq(
      "DECLARATIVES", ".",
      repeat1(seq(
        field("section_name", $.identifier), "SECTION", ".",
        $.use_statement,
        $.paragraphs,
        "."
      )),
      "END", "DECLARATIVES", "."
    ),

    procedure_body: $ => repeat1(or(
      seq(
        optional(seq(field("section_name", $.identifier), "SECTION", ".")),
        or(repeat1($._statement), $.paragraphs),
        "."
      ),
      seq($.paragraphs, ".")
    )),

    paragraphs: $ => prec.right(seq(
      field("paragraph_name", $.identifier), ".",
      repeat1($._statement),
    )),

    use_statement: $ => seq(
      "USE",
      or(
        seq(
          optional("GLOBAL"), op("AFTER", "STANDARD"), or("EXCEPTION", "ERROR"),
          op("PROCEDURE", "ON"), or("INPUT", "OUTPUT", "I-O", "EXTEND", field("file_name", $.identifier))
        ),
        seq(optional("FOR"), "DEBUGGING", optional("ON"), or(
          field("procedure_name", $.identifier),
          seq("ALL", "PROCEDURES"),
          seq("REFERENCES", optional("OF"), $.identifier),
        )),
        seq(optional("GLOBAL"), "BEFORE", "REPORTING", $.identifier),
        seq(optional("AFTER"), or("EC", seq("EXCEPTION", "CONDITION")))
      ),
      "."
    ),

    // procedure statement 
    _statement: $ => or(
      $.accept_statement,   // todo, on exception
      $.add_statement,      // todo, on size error
      $.allocate_statement,
      $.alter_statement,
      $.call_statement,     // todo, on overflow & exception
      $.cancel_statement,
      $.close_statement,
      $.commit_statement,
      $.compute_statement,  // todo, on size error
      $.continue_statement,
      $.delete_statement,   // todo, invalid key
      $.display_statement,  // todo, on exception
      $.divide_statement,   // todo, on size error
      $.entry_statement,
      $.evaluate_statement,
      $.exit_statement,
      $.free_statement,
      $.generate_statement,
      $.go_back_statement,
      $.goto_statement,
      $.if_statement,
      $.initialize_statement,
      $.initiate_statement,
      $.inspect_statement,
      $.merge_statement,
      $.move_statement,
      $.multiply_statement,   // todo, on size error
      $.open_statement,
      $.perform_statement,
      $.raise_statement,
      $.read_statement,       // todo, invalid key & at end
      $.ready_trace_statement,
      $.release_statement,
      $.reset_trace_statement,
      $.return_statement,     // todo, at end
      $.rewrite_statement,    // todo, invalid key
      $.rollback_statement,
      $.search_statement,     // todo, at end
      $.set_statement,
      $.sort_statement,
      $.start_statement,      // todo, invalid key
      $.stop_statement,
      $.string_statement,     // todo, on overflow
      $.subtract_statement,   // todo, on size error
      $.suppress_statement,
      $.terminate_statement,
      $.transform_statement,
      $.unlock_statement,
      $.unstring_statement,   // todo, on overflow
      $.write_statement       // todo, invalid key
    ),

    at_end: $ => prec.right(seq(optional("AT"), "END", repeat($._statement))),
    not_at_end: $ => prec.right(seq("NOT", optional("AT"), "END", repeat($._statement))),

    invalid_key: $ => prec.right(seq("INVALID", optional("KEY"), repeat($._statement))),
    not_invalid_key: $ => prec.right(seq("NOT", "INVALID", optional("KEY"), repeat($._statement))),

    at_end_of_page: $ => prec.right(seq(optional("AT"), or("END-OF-PAGE", "EOP"), repeat($._statement))),
    not_at_end_of_page: $ => prec.right(seq("NOT", optional("AT"), or("END-OF-PAGE", "EOP"), repeat($._statement))),

    on_exception: $ => prec.right(seq(optional("ON"), "EXCEPTION", repeat($._statement))),
    not_on_exception: $ => prec.right(seq("NOT", optional("ON"), "EXCEPTION", repeat($._statement))),

    on_size_error: $ => prec.right(seq(optional("ON"), "SIZE", "ERROR", repeat($._statement))),
    not_on_size_error: $ => prec.right(seq("NOT", optional("ON"), "SIZE", "ERROR", repeat($._statement))),

    on_overflow: $ => prec.right(seq(optional("ON"), "OVERFLOW", repeat($._statement))),
    not_on_overflow: $ => prec.right(seq("NOT", optional("ON"), "OVERFLOW", repeat($._statement))),

    accept_statement: $ => seq(
      "ACCEPT", or($._identifier, "OMITTED"),
      optional(seq("FROM", or(
        field("mnemonic_name", $.identifier),
        "COMMAND-LINE",
        "ARGUMENT-NUMBER",
        "ARGUMENT-VALUE",
        "ENVIRONMENT-VALUE",
        seq("ENVIRONMENT", $.primary_expression),
        "EXCEPTION-STATUS",
        "CRT",
        seq("DATE", optional("YYYYMMDD")),
        seq("DAY", optional("YYYYDDD")),
        "DAY-OF-WEEK",
        "TIME",
        "LINES",
        "LINE-NUMBER",
        "COLS",
        "COLUMNS",
        seq("ESCAPE", "KEY"),
        seq("EXCEPTION", "STATUS"),
        seq("USER", "NAME"),
      ))),
      optional(seq(
        "AT",
        optional(seq(or("LINE", "COLUMN", "COL", "POSITION", "POS"), optional("NUMBER"))),
        $.primary_expression
      )),
      // optional($.on_exception),
      // optional($.not_on_exception),
      optional("END-ACCEPT")
    ),

    add_statement: $ => seq(
      "ADD", repeat1($.primary_expression),
      "TO",
      or(
        repeat1(seq($.identifier, optional($.rounded_clause))),
        seq($.primary_expression, "GIVING", repeat1(seq($.identifier, optional("ROUNDED"))))
      ),
      // optional($.on_size_error),
      // optional($.not_on_size_error),
      optional("END-ADD")
    ),

    rounded_clause: $ => seq(
      "ROUNDED",
      optional(seq("MODE", optional("IS"), or(
        "AWAY-FROM-ZERO", "NEAREST-AWAY-FROM-ZERO", "NEAREST-EVEN",
        "NEAREST-TOWARD-ZERO", "PROHIBITED", "TOWARD-GREATER", "TOWARD-LESSER", "TRUNCATION"
      )))
    ),

    allocate_statement: $ => seq(
      "ALLOCATE",
      $.primary_expression,
      optional("CHARACTERS"),
      optional(or("INITIALIZED", "INITIALISED")),
      optional(seq("TO", or($._identifier, $._literal))),
      optional(seq("RETURNING", $._identifier))
    ),

    alter_statement: $ => seq(
      "ALTER",
      field("procedure_name", $.identifier),
      "TO",
      op("PROCEED", "TO"),
      field("procedure_name_2", $.identifier)
    ),

    call_statement: $ => seq(
      "CALL", $.primary_expression,
      optional(
        seq(
          "USING",
          repeat1(
            seq(
              optional(seq(optional("BY"), or("REFERENCE", "CONTENT", "VALUE"))),
              or(
                "OMITTED",
                seq(optional("UNSIGNED"), optional(seq("SIZE", optional("IS"), or("AUTO", "DEFAULT", $.integer))), $.primary_expression, optional(","))
              )
            )
          )
        )
      ),
      optional(seq(or("RETURNING", "GIVING"), $.primary_expression)),
      // optional($.on_overflow),
      // optional($.not_on_overflow),
      // optional($.on_exception),
      // optional($.not_on_exception),
      optional("END-CALL")
    ),

    cancel_statement: $ => seq("CANCEL", repeat1($.primary_expression)),

    close_statement: $ => seq(
      "CLOSE",
      repeat1(seq(
        field("file_name", $.identifier), optional(or(
          seq(or("REEL", "UNIT"), op("FOR", "REMOVAL")), seq(optional("WITH"), "LOCK"), seq(optional("WITH"), "NO", "REWIND"),
        ))
      ))
    ),

    commit_statement: $ => "COMMIT",

    compute_statement: $ => seq(
      "COMPUTE",
      $.expression_statement,
      // optional($.on_size_error),
      // optional($.not_on_size_error),
      optional("END-COMPUTE")
    ),

    continue_statement: $ => seq("CONTINUE", optional(seq("AFTER", $.primary_expression, "SECONDS"))),

    delete_statement: $ => seq(
      "DELETE",
      field("file_name", $.identifier),
      optional("RECORD"),
      // optional($.invalid_key),
      // optional($.not_invalid_key),
      optional("END-DELETE")
    ),

    display_statement: $ => seq(
      "DISPLAY",
      repeat1($.primary_expression),
      optional(seq("UPON", or(field("mnemonic_name", $.identifier), "ARGUMENT-NUMBER", "COMMAND-LINE", "ENVIRONMENT-VALUE", "ENVIRONMENT-NAME"))),
      optional(seq(optional("WITH"), "NO", "ADVANCING")),
      // optional($.on_exception),
      // optional($.not_on_exception),
      optional("END-DISPLAY")
    ),

    divide_statement: $ => seq(
      "DIVIDE", $.primary_expression,
      or("INTO", "BY"),
      or(
        repeat1(seq($._identifier, optional($.rounded_clause))),
        seq($.primary_expression, "GIVING", repeat1(seq($._identifier, optional($.rounded_clause))))
      ),
      optional(seq("REMAINDER", $.identifier)),
      // optional($.on_size_error),
      // optional($.not_on_size_error),
      optional("END-DIVIDE")
    ),

    entry_statement: $ => or(
      seq("ENTRY", $._literal, optional(seq(
        "USING",
        repeat1(
          seq(optional("BY"), or("REFERENCE", "CONTENT", "VALUE"), or("OMITTED", $._identifier, $._literal))
        ),
        "."
      ))),
      seq("ENTRY", "FOR", "GO", "TO", $._literal, ".")
    ),

    evaluate_statement: $ => prec.right(seq(
      "EVALUATE", $.selection_subject, repeat(seq("ALSO", $.selection_subject)),
      repeat1($.evaluate_when),
      optional($.evaluate_when_other),
      optional("END-EVALUATE")
    )),

    // TODO: selection object should be repeat statement, not optional
    evaluate_when: $ => prec.right(seq(
      "WHEN", $.selection_object, optional(seq("ALSO", $.selection_object)), repeat($._statement)
    )),

    evaluate_when_other: $ => prec.right(seq(seq("WHEN", "OTHER", repeat1($._statement)))),

    selection_subject: $ => or(
      "TRUE",
      "FALSE",
      $.primary_expression
    ),

    selection_object: $ => or(
      "ANY",
      "TRUE",
      "FALSE",
      seq($.expression, optional(seq(or("THRU", "THROUGH"), $.expression)))
    ),


    exit_statement: $ => prec.right(seq(
      "EXIT",
      optional(or("PROGRAM", "FUNCTION", seq("PERFORM", optional("CYCLE")), "SECTION", "PARAGRAPH", "METHOD")),
      optional(seq(or("RETURNING", "GIVING"), $.primary_expression))
    )),

    free_statement: $ => seq(
      "FREE",
      repeat1(seq(optional(seq("ADDRESS", optional("OF"))), $._identifier))
    ),

    generate_statement: $ => seq("GENERATE", $._identifier),

    go_back_statement: $ => seq(
      "GOBACK",
      optional(seq(or("RETURNING", "GIVING"), $.primary_expression))
    ),

    goto_statement: $ => seq(
      "GO", optional("TO"),
      or(field("procedure_name", $.identifier), seq("ENTRY", $._literal)),
      optional(seq("DEPENDING", optional("ON"), field("depending_name", $.identifier)))
    ),

    // if statement
    if_statement: $ => prec.right(seq(
      "IF", field("condition", $.expression),
      optional("THEN"),
      repeat1($._statement),
      optional(field('alternative', $.else_clause)),
      optional("END-IF")
    )),

    else_clause: $ => prec.right(seq("ELSE", repeat($._statement))),

    // initialize statement
    initialize_statement: $ => seq(
      or("INITIALIZE", "INITIALISE"), repeat1($.primary_expression),
      optional(seq(optional("WITH"), "FILLER")),
      optional(seq(or("ALL", field("category_name", $.initialize_category_name)), optional("TO"), "VALUE")),
      optional(or(
        seq(
          optional("THEN"), "REPLACING",
          repeat1(seq(field("category_name", $.initialize_category_name), optional("DATA"), "BY", optional(seq("LENGTH", optional("OF"))), $.primary_expression))
        ),
        seq(optional("THEN"), optional("TO"), "DEFAULT")
      ))
    ),

    initialize_category_name: $ => or(
      "ALPHABETIC",
      "ALPHANUMERIC",
      "ALPHANUMERIC-EDITED",
      "NUMERIC",
      "NUMERIC-EDITED",
      "NATIONAL",
      "NATIONAL-EDITED"
    ),

    initiate_statement: $ => seq("INITIATE", field("report_name", $.identifier)),

    inspect_statement: $ => seq(
      "INSPECT",
      or($.identifier, $._literal),
      optional(seq(
        "TALLYING",
        repeat1(seq(
          $.identifier, "FOR", or(seq(or("ALL", "LEADING", "TRAILING "), $.primary_expression), "CHARACTERS"),
          optional(seq(or("AFTER", "BEFORE"), optional("INITIAL"), $.primary_expression))
        ))
      )),
      optional(seq(
        "REPLACING",
        repeat1(seq(
          or(seq(or("ALL", "FIRST", "LEADING", "TRAILING"), $.primary_expression), "CHARACTERS"),
          "BY", or($._literal, $.identifier),
          optional(seq(or("AFTER", "BEFORE"), optional("INITIAL"), $.primary_expression))
        ))
      )),
      optional(seq(
        "CONVERTING",
        $.primary_expression, "TO", $.primary_expression,
        optional(seq(or("AFTER", "BEFORE"), optional("INITIAL"), $.primary_expression))
      ))
    ),

    merge_statement: $ => seq(
      "MERGE",
      field("file_name", $.identifier),
      repeat1(seq(optional("ON"), or("ASCENDING", "DESCENDING"), optional("KEY"), repeat1($.primary_expression))),
      optional(seq(optional("WITH"), "DUPLICATES", optional("IN"), optional("ORDER"))),
      optional(seq("COLLATING", optional("SEQUENCE"), optional("IS"), field("alphabet_name", $.identifier))),
      "USING", repeat1(field("file_name", $.identifier)),
      or(
        seq("OUTPUT", "PROCEDURE", optional("IS"), field("procedure_name", $.identifier), optional(seq(or("THRU", "THROUGH"), field("procedure_name2", $.identifier)))),
        seq("GIVING", repeat1(field("file_name", $.identifier)))
      )
    ),

    move_statement: $ => seq(
      "MOVE",
      or(
        seq($.primary_expression, "TO", repeat1($.primary_expression)),
        seq(or("CORRESPONDING", "CORR"), $._identifier, "TO", $._identifier)
      )
    ),

    multiply_statement: $ => seq(
      "MULTIPLY", $.primary_expression,
      "BY",
      or(
        seq($._identifier, optional($.rounded_clause)),
        seq($.primary_expression, "GIVING", repeat1(seq($._identifier, optional($.rounded_clause))))
      ),
      // optional($.on_size_error),
      // optional($.not_on_size_error),
      optional("END-MULTIPLY")
    ),

    open_statement: $ => seq(
      "OPEN", or("INPUT", "OUTPUT", "I-O", "EXTEND"),
      repeat1(seq(
        optional(seq("SHARING", optional("WITH"), or(seq(or("ALL", "NO"), optional("OTHER")), seq("READ", "ONLY")))),
        field("file_name", $.identifier),
        optional(or("REVERSED", seq(optional("WITH"), or(seq("NO", "REWIND"), "LOCK"))))
      ))
    ),

    // perform statement
    perform_statement: $ => or($.perform_procedural_statement, $.perform_inline_statement),

    perform_procedural_statement: $ => seq(
      "PERFORM", field("procedure_name", $.identifier), optional(seq(or("THRU", "THROUGH"), field("procedure_name", $.identifier))),
      optional(or(
        seq(optional(seq(optional("WITH"), "TEST", or("BEFORE", "AFTER"))), or($.perform_varying, seq("UNTIL", $.expression))),
        seq("UNTIL", or("EXIT", "FOREVER")),
        seq(or($._identifier, $._literal), "TIMES"),
      ))
    ),

    perform_inline_statement: $ => seq(
      "PERFORM",
      optional(or(
        seq(optional(seq(optional("WITH"), "TEST", or("BEFORE", "AFTER"))), or($.perform_varying, seq("UNTIL", $.expression))),
        seq("UNTIL", or("EXIT", "FOREVER")),
        seq(or($._identifier, $._literal), "TIMES"),
      )),
      repeat1($._statement),
      "END-PERFORM"
    ),

    perform_varying: $ => seq(
      "VARYING", $.identifier, "FROM", $.primary_expression,
      optional(seq("BY", $.primary_expression)),
      optional(seq("UNTIL", $.expression)),
      repeat(seq(
        "AFTER", $.identifier, "FROM", $.primary_expression,
        optional(seq("BY", $.primary_expression)),
        optional(seq("UNTIL", $.expression))
      ))
    ),

    // raise statement
    raise_statement: $ => seq("RAISE", or("EXCEPTION", $._identifier), field("exception_name", $.identifier)),

    read_statement: $ => seq(
      "READ", field("file_name", $.identifier), optional(or("NEXT", "PREVIOUS")), optional("RECORD"), optional(seq("INTO", $.identifier)),
      optional(seq(optional("WITH"), optional(or("NO", "KEPT", "IGNORE")), or("LOCK", "WAIT"))),
      optional(seq("KEY", optional("IS"), $._identifier)),
      // optional($.invalid_key),
      // optional($.not_invalid_key),
      // optional($.at_end),
      // optional($.not_at_end),
      optional("END-READ")
    ),

    ready_trace_statement: $ => seq("READY", "TRACE"),

    release_statement: $ => seq(
      "RELEASE",
      field("record_name", $.identifier),
      optional(seq("FROM", $.primary_expression))
    ),

    reset_trace_statement: $ => seq("RESET", "TRACE"),

    return_statement: $ => seq(
      "RETURN",
      field("sort_file_name", $.identifier),
      optional("RECORD"),
      optional(seq("INTO", $._identifier)),
      // $.at_end,
      // optional($.not_at_end),
      optional("END-RETURN")
    ),

    rewrite_statement: $ => seq(
      "REWRITE",
      field("record_name", $.identifier),
      op(
        seq("FROM", $.primary_expression),
        seq(optional("WITH"), optional("NO"), "LOCK"),
        // $.invalid_key,
        // $.not_invalid_key,
        "END-REWRITE"
      )
    ),

    rollback_statement: $ => "ROLLBACK",

    search_statement: $ => prec.right(seq(
      "SEARCH", optional("ALL"), field("table_name", $.identifier),
      optional(seq("VARYING", field("index_name", $.identifier))),
      // optional($.at_end),
      repeat1(prec.right(seq("WHEN", $.expression, repeat1($._statement)))),
      optional("END-SEARCH")
    )),

    set_to: $ => seq(
      "SET",
      optional(seq("ADDRESS", "OF")),
      repeat1($._identifier),
      "TO",
      optional(seq("ADDRESS", "OF")),
      or(
        seq("ENTRY", $.primary_expression),
        $._identifier, $._literal,
        "TRUE", "FALSE",
        "ON", "OFF"
      )
    ),
    set_environment: $ => seq("SET", "ENVIRONMENT", $.primary_expression, "TO", $.primary_expression),
    set_up_down: $ => seq("SET", $._identifier, or("UP", "DOWN"), "BY", optional(seq("LENGTH", "OF")), $.primary_expression),
    set_attribute: $ => seq(
      "SET", $._identifier, "ATTRIBUTE",
      seq(
        or("BELL", "BLINK", "HIGHLIGHT", "LEFTLINE", "LOWLIGHT", "OVERLINE", "REVERSE-VIDEO", "UNDERLINE"),
        or("ON", "OFF")
      )
    ),
    set_last_exception: $ => seq("SET", "LAST", "EXCEPTION", "TO", "OFF"),
    set_statement: $ => or(
      $.set_environment,
      $.set_to,
      $.set_up_down,
      $.set_attribute,
      $.set_last_exception
    ),

    sort_statement: $ => seq(
      "SORT",
      field("file_name", $.identifier),
      repeat1(seq(optional("ON"), or("ASCENDING", "DESCENDING"), optional("KEY"), repeat1($.primary_expression))),
      optional(seq(optional("WITH"), "DUPLICATES", optional("IN"), optional("ORDER"))),
      optional(seq("COLLATING", optional("SEQUENCE"), optional("IS"), field("alphabet_name", $.identifier))),
      repeat(or(
        seq(or("INPUT", "OUTPUT"), "PROCEDURE", optional("IS"), field("procedure_name", $.identifier), optional(seq(or("THRU", "THROUGH"), field("procedure_name", $.identifier)))),
        seq(or("USING", "GIVING"), repeat1(field("filename", $.identifier))),
      ))
    ),

    start_statement: $ => seq(
      "START",
      field("file_name", $.identifier),
      optional(or(
        "FIRST",
        "LAST",
        seq("KEY", or(
          seq(optional("IS"), or(seq("EQUAL", optional("TO")), optional(seq(optional("IS"), "=")), "EQUALS")),
          seq(optional("IS"), or(seq("GREATER", optional("THAN")), seq(optional("IS"), ">"))),
          seq(optional("IS"), or(seq("GREATER", optional("THAN"), "OR", "EQUAL", optional("TO")), seq(optional("IS"), ">="))),
          seq(optional("IS"), "NOT", "LESS", optional("THAN")),
          seq(optional("IS"), or(seq("LESS", optional("THAN")), seq(optional("IS"), "<"))),
          seq(optional("IS"), or(seq("LESS", optional("THAN"), "OR", "EQUAL", optional("TO")), seq(optional("IS"), "<="))),
          seq(optional("IS"), "NOT", "GREATER", optional("THAN"))
        ), $._identifier)
      )),
      optional(seq(optional("WITH"), or("SIZE", "LENGTH"), $.expression)),
      // optional($.invalid_key),
      // optional($.not_invalid_key),
      optional("END-START")
    ),

    stop_statement: $ => seq(
      "STOP",
      or(
        seq("RUN", optional(or(
          seq(or("RETURNING", "GIVING "), $.primary_expression),
          seq(optional("WITH"), or("ERROR", "NORMAL"), optional("STATUS"), optional($.primary_expression))
        ))),
        $._literal
      )
    ),

    string_statement: $ => seq(
      "STRING",
      repeat1(
        seq(
          $.primary_expression,
          optional(seq("DELIMITED", optional("BY"), or("SIZE", $._identifier, $._literal)))
        )
      ),
      "INTO", $.primary_expression,
      optional(seq(optional("WITH"), "POINTER", $._identifier)),
      // optional(seq(optional("ON"), "OVERFLOW", repeat($._statement))),
      // optional(seq("NOT", optional("ON"), "OVERFLOW", repeat($._statement))),
      optional("END-STRING")
    ),

    subtract_statement: $ => seq(
      "SUBTRACT", optional("CORRESPONDING"), repeat1($.primary_expression),
      "FROM",
      or(
        repeat1(seq($._identifier, optional($.rounded_clause))),
        seq($.primary_expression, "GIVING", repeat1(seq($._identifier, optional($.rounded_clause))))
      ),
      // optional($.on_size_error),
      // optional($.not_on_size_error),
      optional("END-SUBTRACT")
    ),

    suppress_statement: $ => seq("SUPPRESS", "PRINTING"),

    terminate_statement: $ => seq("TERMINATE", repeat1(field("report_name", $.identifier))),

    transform_statement: $ => seq(
      "TRANSFORM", $._identifier, optional("CHARACTERS"), "FROM",
      $.primary_expression, "TO", $.primary_expression
    ),

    unlock_statement: $ => seq("UNLOCK", field("file_name", $.identifier, optional(or("RECORD", "RECORDS")))),

    unstring_statement: $ => seq(
      "UNSTRING", $._identifier,
      "DELIMITED", optional("BY"), optional("ALL"), or($.identifier, $.alphanumeric_literal, $.numeric_literal),
      repeat(seq("OR", optional("ALL"), or($.identifier, $.alphanumeric_literal, $.numeric_literal))),
      "INTO", repeat1(seq($._identifier, op(seq("DELIMITER", optional("IN"), $._identifier), seq("COUNT", optional("IN"), $._identifier)), optional(","))),
      optional(seq(optional("WITH"), "POINTER", $._identifier)),
      optional(seq("TALLYING", optional("IN"), $._identifier)),
      // optional($.on_overflow),
      // optional($.not_on_overflow),
      optional("END-UNSTRING")
    ),

    write_statement: $ => seq(
      "WRITE", field("record_name", $.identifier),
      optional(seq("FROM", $.primary_expression)),
      optional(seq(optional("WITH"), optional("NO"), "LOCK")),
      optional(seq(or("BEFORE", "AFTER"), optional("ADVANCING"), or(seq($.primary_expression, or("LINE", "LINES")), "PAGE", field("mnemonic_name", $.identifier)))),
      // optional($.at_end_of_page),
      // optional($.not_at_end_of_page),
      // optional($.invalid_key),
      // optional($.not_invalid_key),
      optional("END-WRITE")
    ),

    _cdf_phrase_clause: $ => seq(or($.identifier, $._literal, field("pseudo_text", $.copy_word)), "BY", or($.identifier, $._literal, field("pseudo_text", $.copy_word))),
    _cdf_string_clause: $ => prec(1, seq(optional(or("LEADING", "TRAILING")), field("partial_word", $.copy_word), "BY", field("partial_word", $.copy_word))),
    copy_word: $ => or(/==[a-zA-Z0-9]*([\-_]*[a-zA-Z0-9]+)*==/, /\/\/[a-zA-Z0-9]*([\-_]*[a-zA-Z0-9]+)*\/\//),
    prefixing_data: $ => token(seq(/[a-zA-Z0-9]+([\-_]+[a-zA-Z0-9]+)*\-/)),
    copy_statement: $ => seq(
      "COPY",
      field("copybook_name", or($.identifier, $._literal)),
      op(
        seq(or("IN", "OF"), field("library_name", $.identifier)),
        seq("SUPPRESS", optional("PRINTING")),
        seq("REPLACING", repeat1(or($._cdf_phrase_clause, $._cdf_string_clause)))
      ),
      optional(seq("PREFIXING", $.prefixing_data)),
      "."
    ),

    replace_statement: $ => seq(
      "REPLACE",
      or(
        seq(optional("LAST"), "OFF"),
        seq(optional("ALSO"), repeat1(or($._cdf_phrase_clause, $._cdf_string_clause)))
      )
    ),

    expression_statement: $ => or(
      $.primary_expression,
      $.assignment,
    ),

    assignment: $ => seq(
      repeat1(seq(field("left", $.identifier), optional($.rounded_clause))),
      seq(or("=", "EQUAL"), field("right", $._right_hand_side))
    ),

    _left_hand_side: $ => or(
      $.identifier,
      $.subscript,
    ),

    _right_hand_side: $ => or(
      $.primary_expression,
      $.assignment
    ),

    class_name: $ => or("NUMERIC", "ALPHABETIC", "ALPHABETIC-LOWER", "ALPHABETIC-UPPER", "BOOLEAN"),
    sign_name: $ => or("POSITIVE", "NEGATIVE"),
    comparison_condition: $ => prec.left(PREC.COMPARE, seq(
      $.primary_expression,
      optional("IS"),
      repeat1(seq(
        field("operators", or(
          seq(optional("NOT"), "EQUAL", optional("TO")),
          seq(optional("NOT"), "EQUALS"),
          seq(optional("NOT"), "GREATER", optional("THAN")),
          seq(optional("NOT"), "GREATER", optional("THAN"), "OR", "EQUAL", optional("TO")),
          seq(optional("NOT"), "LESS", optional("THAN")),
          seq(optional("NOT"), "LESS", optional("THAN"), "OR", "EQUAL", optional("TO")),
          seq(optional("NOT"), "="),
          seq(optional("NOT"), ">"),
          seq(optional("NOT"), ">="),
          seq(optional("NOT"), "<"),
          seq(optional("NOT"), "<="),
          optional("NOT")
        )),
        or($.primary_expression, $.class_name, $.sign_name)
      ))
    )),

    not_operator: $ => prec(PREC.NOT, seq(
      'NOT',
      field('boolean_expression', $.expression)
    )),

    complex_condition: $ => or(
      prec.left(PREC.AND, seq(
        field("left", $.expression),
        seq(field("operator", "AND"), field("right", $.expression))
      )),
      prec.left(PREC.OR, seq(
        field("left", $.expression),
        seq(field("operator", "OR"), field("right", $.expression))
      ))
    ),

    expression: $ => or(
      $.comparison_condition,
      $.not_operator,
      $.complex_condition,
      $.primary_expression
    ),

    primary_expression: $ => choice(
      $.binary_operator,
      $._identifier,
      $._literal,
      $.subscript,
      $.unary_operator,
      $.parenthesized_expression
    ),

    binary_operator: $ => {
      const table = [
        [prec.left, '+', PREC.PLUS],
        [prec.left, '-', PREC.PLUS],
        [prec.left, '*', PREC.TIMES],
        [prec.left, '/', PREC.TIMES],
        [prec.left, '**', PREC.POWER],
      ];

      return choice(...table.map(([fn, operator, precedence]) => fn(precedence, seq(
        field("left", $.primary_expression),
        field("operator", operator),
        field("right", $.primary_expression)
      ))));
    },

    unary_operator: $ => prec(PREC.UNARY, seq(
      field("operator", choice("+", "-")),
      field("argument", $.primary_expression)
    )),

    parenthesized_expression: $ => prec(PREC.parenthesized_expression, seq(
      "(",
      $.expression,
      ")"
    )),

    subscript: $ => prec(PREC.CALL, seq(
      field('value', $.identifier),
      "(",
      field("subscript", $.primary_expression),
      ")"
    )),

    argument_list: $ => seq(
      "(",
      repeat1(seq($.primary_expression, optional(","))),
      ")"
    ),

    inline_method_invocation: $ => seq($.identifier, "::", $._literal, optional(or($.primary_expression, "OMITTED"))),

    // common define
    _identifier: $ => or(
      $.identifier, $.function_identifier, $.reference_modification
    ),
    _literal: $ => or(
      $.alphanumeric_literal, $._numeric_literals, $.boolean_literal, $.national_literal, $.figurative_constant
    ),
    _numeric_literals: $ => or($.numeric_literal, $.integer),
    _string_literal: $ => seq(
      $._string_start,
      repeat($._string_content),
      $._string_end,
    ),

    level_number_66: $ => '66',
    level_number_77: $ => '77',
    level_number_78: $ => '78',
    level_number_88: $ => '88',
    integer: $ => token(/(\+|\-)?[0-9]+/),

    sql_line: $ => /[^\r\n]+/,
    sql_statement: $ => seq(seq("EXEC", "SQL"), repeat1($.sql_line), or("END-EXEC", "END-EXEC.")),
    identifier: $ => token(seq(/[a-zA-Z0-9]+([\-_]+[a-zA-Z0-9]+)*/)),
    function_identifier: $ => prec.right(seq(
      "FUNCTION",
      field("function_name", $.identifier),
      optional(repeat1(or("OMITTED", field("argument", $.argument_list))))
    )),
    reference_modification: $ => prec(PREC.CALL, seq(
      or($.identifier, $.subscript), "(", field("position", $.primary_expression), ":", optional(field("length", $.primary_expression)), ")"
    )),

    alphanumeric_literal: $ => or(
      /"([^"\n\r]|'""'|'\'')*"|'([^'\n\r]|'\'\''|'"')*'/,   // alphanumeric(string_literal)
      /X"[0-9A-Fa-f]+"|X'[0-9A-Fa-f]+'/,                    // hexadecimal-alphanumeric
      $._string_literal,
    ),
    numeric_literal: $ => token(seq(/(\+|\-)?[0-9]*(\.|,)[0-9]+((e|E)(\+|\-)?[0-9]+)?/)),
    boolean_literal: $ => or(
      /B"[0-1]+"|B'[0-1]+'/,
      /BX"[0-9A-F]+"|BX'[0-9A-F]+'/
    ),
    national_literal: $ => or(
      /N"([^"\n\r]|'""'|'\'')*"|N'([^'\n\r]|'\'\''|'"')*'/,
      /NX"[0-9A-Fa-f]+"|NX'[0-9A-Fa-f]+'/,
    ),
    figurative_constant: $ => or(
      seq(optional("ALL"), or(
        "ZERO", "ZEROES", "ZEROS", "SPACE", "SPACES", "HIGH-VALUE", "HIGH-VALUES", "LOW-VALUE", "LOW-VALUES", "QUOTE", "QUOTES"
      )),
      seq("ALL", or($.alphanumeric_literal, $.boolean_literal, $.national_literal))
    ),

    line_comment: $ => token(prec(-1, seq('*', /.*/))),
    // comment_entry: $ => prec.left(-1, repeat1(/[^\n\r]+/)),

    comment_entry: $ => prec.left(-1, /[^\n\r]+/), //TODO: Match multi-line.
  }
})

function ci(keyword, aliasAsWord = true) {
  let result = new RegExp(
    keyword.split('').map(l => l !== l.toUpperCase() ? `[${l}${l.toUpperCase()}]` : l).join('')
  )
  if (aliasAsWord) result = alias(result, keyword)
  return result
}
