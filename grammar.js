const
  // symbols
  AMPCHAR = '&',
  ASTERISKCHAR = '*',
  DOUBLEASTERISKCHAR = '**',
  COLONCHAR = '=',
  COMMACHAR = ',',
  COMMENTENTRYTAG = '*>CE',
  COMMENTTAG = '*>',
  DOLLARCHAR = '$',
  DOUBLEQUOTE = '"',
  // period full stop
  DOT_FS = choice(seq('.', repeat1(choice('\r', '\n', '\f', '\t', ' '))), '.'), // . EOF
  DOT = '.',
  EQUALCHAR = '=',
  EXECCICSTAG = '*>EXECCICS',
  EXECSQLTAG = '*>EXECSQL',
  EXECSQLIMSTAG = '*>EXECSQLIMS',
  LESSTHANCHAR = '<',
  LESSTHANOREQUAL = '<=',
  LPARENCHAR = '(',
  MINUSCHAR = '-',
  MORETHANCHAR = '>',
  MORETHANOREQUAL = '>=',
  NOTEQUALCHAR = '<>',
  PLUSCHAR = '+',
  SINGLEQUOTE = '\'',
  RPARENCHAR = ')',
  SLASHCHAR = '/',
  // keywords
  ABORT = "ABORT",
  ACCEPT = "ACCEPT",
  ACCESS = "ACCESS",
  ADD = "ADD",
  ADDRESS = "ADDRESS",
  ADVANCING = "ADVANCING",
  AFTER = "AFTER",
  ALIGNED = "ALIGNED",
  ALL = "ALL",
  ALPHABET = "ALPHABET",
  ALPHABETIC = "ALPHABETIC",
  ALPHABETIC_LOWER = "ALPHABETIC-LOWER",
  ALPHABETIC_UPPER = "ALPHABETIC-UPPER",
  ALPHANUMERIC = "ALPHANUMERIC",
  ALPHANUMERIC_EDITED = "ALPHANUMERIC-EDITED",
  ALSO = "ALSO",
  ALTER = "ALTER",
  ALTERNATE = "ALTERNATE",
  AND = "AND",
  ANY = "ANY",
  ARE = "ARE",
  AREA = "AREA",
  AREAS = "AREAS",
  AS = "AS",
  ASCENDING = "ASCENDING",
  ASCII = "ASCII",
  ASSIGN = "ASSIGN",
  ASSOCIATED_DATA = "ASSOCIATED-DATA",
  ASSOCIATED_DATA_LENGTH = "ASSOCIATED-DATA-LENGTH",
  AT = "AT",
  ATTRIBUTE = "ATTRIBUTE",
  AUTHOR = "AUTHOR",
  AUTO = "AUTO",
  AUTO_SKIP = "AUTO-SKIP",
  BACKGROUND_COLOR = "BACKGROUND-COLOR",
  BACKGROUND_COLOUR = "BACKGROUND-COLOUR",
  BASIS = "BASIS",
  BEEP = "BEEP",
  BEFORE = "BEFORE",
  BEGINNING = "BEGINNING",
  BELL = "BELL",
  BINARY = "BINARY",
  BIT = "BIT",
  BLANK = "BLANK",
  BLINK = "BLINK",
  BLOB = "BLOB",
  BLOCK = "BLOCK",
  BOUNDS = "BOUNDS",
  BOTTOM = "BOTTOM",
  BY = "BY",
  BYFUNCTION = "BYFUNCTION",
  BYTITLE = "BYTITLE",
  CALL = "CALL",
  CANCEL = "CANCEL",
  CAPABLE = "CAPABLE",
  CCSVERSION = "CCSVERSION",
  CD = "CD",
  CF = "CF",
  CH = "CH",
  CHAINING = "CHAINING",
  CHANGED = "CHANGED",
  CHANNEL = "CHANNEL",
  CHARACTER = "CHARACTER",
  CHARACTERS = "CHARACTERS",
  CLASS = "CLASS",
  CLASS_ID = "CLASS-ID",
  CLOB = "CLOB",
  CLOCK_UNITS = "CLOCK-UNITS",
  CLOSE = "CLOSE",
  CLOSE_DISPOSITION = "CLOSE-DISPOSITION",
  COBOL = "COBOL",
  CODE = "CODE",
  CODE_SET = "CODE-SET",
  COLLATING = "COLLATING",
  COL = "COL",
  COLUMN = "COLUMN",
  COM_REG = "COM-REG",
  COMMA = "COMMA",
  COMMITMENT = "COMMITMENT",
  COMMON = "COMMON",
  COMMUNICATION = "COMMUNICATION",
  COMP = "COMP",
  COMP_1 = "COMP-1",
  COMP_2 = "COMP-2",
  COMP_3 = "COMP-3",
  COMP_4 = "COMP-4",
  COMP_5 = "COMP-5",
  COMPUTATIONAL = "COMPUTATIONAL",
  COMPUTATIONAL_1 = "COMPUTATIONAL-1",
  COMPUTATIONAL_2 = "COMPUTATIONAL-2",
  COMPUTATIONAL_3 = "COMPUTATIONAL-3",
  COMPUTATIONAL_4 = "COMPUTATIONAL-4",
  COMPUTATIONAL_5 = "COMPUTATIONAL-5",
  COMPUTE = "COMPUTE",
  CONFIGURATION = "CONFIGURATION",
  CONTAINS = "CONTAINS",
  CONTENT = "CONTENT",
  CONTINUE = "CONTINUE",
  CONTROL = "CONTROL",
  CONTROL_POINT = "CONTROL-POINT",
  CONTROLS = "CONTROLS",
  CONVENTION = "CONVENTION",
  CONVERTING = "CONVERTING",
  COPY = "COPY",
  CORR = "CORR",
  CORRESPONDING = "CORRESPONDING",
  COUNT = "COUNT",
  CRUNCH = "CRUNCH",
  CURRENCY = "CURRENCY",
  CURSOR = "CURSOR",
  DATA = "DATA",
  DATA_BASE = "DATA-BASE",
  DATE = "DATE",
  DATE_COMPILED = "DATE-COMPILED",
  DATE_WRITTEN = "DATE-WRITTEN",
  DAY = "DAY",
  DAY_OF_WEEK = "DAY-OF-WEEK",
  DBCS = "DBCS",
  DBCLOB = "DBCLOB",
  DE = "DE",
  DEBUG_CONTENTS = "DEBUG-CONTENTS",
  DEBUG_ITEM = "DEBUG-ITEM",
  DEBUG_LINE = "DEBUG-LINE",
  DEBUG_NAME = "DEBUG-NAME",
  DEBUG_SUB_1 = "DEBUG-SUB-1",
  DEBUG_SUB_2 = "DEBUG-SUB-2",
  DEBUG_SUB_3 = "DEBUG-SUB-3",
  DEBUGGING = "DEBUGGING",
  DECIMAL_POINT = "DECIMAL-POINT",
  DECLARATIVES = "DECLARATIVES",
  DEFAULT = "DEFAULT",
  DEFAULT_DISPLAY = "DEFAULT-DISPLAY",
  DEFINITION = "DEFINITION",
  DELETE = "DELETE",
  DELIMITED = "DELIMITED",
  DELIMITER = "DELIMITER",
  DEPENDING = "DEPENDING",
  DESCENDING = "DESCENDING",
  DESTINATION = "DESTINATION",
  DETAIL = "DETAIL",
  DFHRESP = "DFHRESP",
  DFHVALUE = "DFHVALUE",
  DISABLE = "DISABLE",
  DISK = "DISK",
  DISPLAY = "DISPLAY",
  DISPLAY_1 = "DISPLAY-1",
  DIVIDE = "DIVIDE",
  DIVISION = "DIVISION",
  DONTCARE = "DONTCARE",
  DOUBLE = "DOUBLE",
  DOWN = "DOWN",
  DUPLICATES = "DUPLICATES",
  DYNAMIC = "DYNAMIC",
  EBCDIC = "EBCDIC",
  EGCS = "EGCS",// E X T E N S I O N
  EGI = "EGI",
  ELSE = "ELSE",
  EMI = "EMI",
  EMPTY_CHECK = "EMPTY-CHECK",
  ENABLE = "ENABLE",
  END = "END",
  END_ACCEPT = "END-ACCEPT",
  END_ADD = "END-ADD",
  END_CALL = "END-CALL",
  END_COMPUTE = "END-COMPUTE",
  END_DELETE = "END-DELETE",
  END_DISPLAY = "END-DISPLAY",
  END_DIVIDE = "END-DIVIDE",
  END_EVALUATE = "END-EVALUATE",
  END_IF = "END-IF",
  END_MULTIPLY = "END-MULTIPLY",
  END_OF_PAGE = "END-OF-PAGE",
  END_PERFORM = "END-PERFORM",
  END_READ = "END-READ",
  END_RECEIVE = "END-RECEIVE",
  END_REMARKS = "END-REMARKS",
  END_RETURN = "END-RETURN",
  END_REWRITE = "END-REWRITE",
  END_SEARCH = "END-SEARCH",
  END_START = "END-START",
  END_STRING = "END-STRING",
  END_SUBTRACT = "END-SUBTRACT",
  END_UNSTRING = "END-UNSTRING",
  END_WRITE = "END-WRITE",
  ENDING = "ENDINF",
  ENTER = "ENTER",
  ENTRY = "ENTRY",
  ENTRY_PROCEDURE = "ENTRY-PROCEDURE",
  ENVIRONMENT = "ENVIRONMENT",
  EOP = "EOP",
  EQUAL = "EQUAL",
  ERASE = "ERASE",
  ERROR = "ERROR",
  EOL = "EOL",
  EOS = "EOS",
  ESCAPE = "ESCAPE",
  ESI = "ESI",
  EVALUATE = "EVALUATE",
  EVENT = "EVENT",
  EVERY = "EVERY",
  EXCEPTION = "EXCEPTION",
  EXCLUSIVE = "EXCLUSIVE",
  EXHIBIT = "EXHIBIT",
  EXIT = "EXIT",
  EXPORT = "EXPORT",
  EXTEND = "EXTEND",
  EXTENDED = "EXTENDED",
  EXTERNAL = "EXTERNAL",
  FALSE = "FALSE",
  FD = "FD",
  FILE = "FILE",
  FILE_CONTROL = "FILE-CONTROL",
  FILLER = "FILLER",
  FINAL = "FINAL",
  FIRST = "FIRST",
  FOOTING = "FOOTING",
  FOR = "FOR",
  FOREGROUND_COLOR = "FOREGROUND-COLOR",
  FOREGROUND_COLOUR = "FOREGROUND-COLOUR",
  FROM = "FROM",
  FULL = "FULL",
  FUNCTION = "FUNCTION",
  FUNCTIONNAME = "FUNCTIONNAME",
  FUNCTION_POINTER = "FUNCTION-POINTER",
  GENERATE = "GENERATE",
  GOBACK = "GOBACK",
  GIVING = "GIVING",
  GLOBAL = "GLOBAL",
  GO = "GO",
  GREATER = "GREATER",
  GRID = "GRID",
  GROUP = "GROUP",
  HEADING = "HEADING",
  HIGHLIGHT = "HIGHLIGHT",
  HIGH_VALUE = "HIGH-VALUE",
  HIGH_VALUES = "HIGH-VALUES",
  I_O = "I-O",
  I_O_CONTROL = "I-O-CONTROL",
  ID = "ID",
  IDENTIFICATION = "IDENTIFICATION",
  IF = "IF",
  IMPLICIT = "IMPLICIT",
  IMPORT = "IMPORT",
  IN = "IN",
  INDEX = "INDEX",
  INDEXED = "INDEXED",
  INDICATE = "INDICATE",
  INITIAL = "INITIAL",
  INITIALIZE = "INITIALIZE",
  INITIATE = "INITIATE",
  INPUT = "INPUT",
  INPUT_OUTPUT = "INPUT-OUTPUT",
  INSPECT = "INSPECT",
  INSTALLATION = "INSTALLATION",
  INTEGER = "INTEGER",
  INTO = "INTO",
  INVALID = "INVALID",
  INVOKE = "INVOKE",
  IS = "IS",
  JUST = "JUST",
  JUSTIFIED = "JUSTIFIED",
  KANJI = "KANJI",
  KEPT = "KEPT",
  KEY = "KEY",
  KEYBOARD = "KEYBOARD",
  LABEL = "LABEL",
  LANGUAGE = "LANGUAGE",
  LAST = "LAST",
  LB = "LB",
  LD = "LD",
  LEADING = "LEADING",
  LEFT = "LEFT",
  LEFTLINE = "LEFTLINE",
  LENGTH = "LENGTH",
  LENGTH_CHECK = "LENGTH-CHECK",
  LESS = "LESS",
  LIBACCESS = "LIBACCESS",
  LIBPARAMETER = "LIBPARAMETER",
  LIBRARY = "LIBRARY",
  LIMIT = "LIMIT",
  LIMITS = "LIMITS",
  LINAGE = "LINAGE",
  LINAGE_COUNTER = "LINAGE-COUNTER",
  LINE = "LINE",
  LINES = "LINES",
  LINE_COUNTER = "LINE-COUNTER",
  LINKAGE = "LINKAGE",
  LIST = "LIST",
  LOCAL = "LOCAL",
  LOCAL_STORAGE = "LOCAL-STORAGE",
  LOCK = "LOCK",
  LONG_DATE = "LONG-DATE",
  LONG_TIME = "LONG-TIME",
  LOWER = "LOWER",
  LOWLIGHT = "LOWLIGHT",
  LOW_VALUE = "LOW-VALUE",
  LOW_VALUES = "LOW-VALUES",
  MEMORY = "MEMORY",
  MERGE = "MERGE",
  MESSAGE = "MESSAGE",
  MMDDYYYY = "MMDDYYYY",
  MODE = "MODE",
  MODULES = "MODULES",
  MORE_LABELS = "MORE-LABELS",
  MOVE = "MOVE",
  MULTIPLE = "MULTIPLE",
  MULTIPLY = "MULTIPLY",
  NAMED = "NAMED",
  NATIONAL = "NATIONAL",
  NATIONAL_EDITED = "NATIONAL-EDITED",
  NATIVE = "NATIVE",
  NEGATIVE = "NEGATIVE",
  NETWORK = "NETWORK",
  NEXT = "NEXT",
  NO = "NO",
  NO_ECHO = "NO-ECHO",
  NOT = "NOT",
  NULL = "NULL",
  NULLS = "NULLS",
  NUMBER = "NUMBER",
  NUMERIC = "NUMERIC",
  NUMERIC_DATE = "NUMERIC-DATE",
  NUMERIC_EDITED = "NUMERIC-EDITED",
  NUMERIC_TIME = "NUMERIC-TIME",
  OBJECT_COMPUTER = "OBJECT-COMPUTER",
  OCCURS = "OCCURS",
  ODT = "ODT",
  OF = "OF",
  OFF = "OFF",
  OMITTED = "OMITTED",
  ON = "ON",
  OPEN = "OPEN",
  OPTIONAL = "OPTIONAL",
  OR = "OR",
  ORDER = "ORDER",
  ORDERLY = "ORDERLY",
  ORGANIZATION = "ORGANIZATION",
  OTHER = "OTHER",
  OUTPUT = "OUTPUT",
  OVERFLOW = "OVERFLOW",
  OVERLINE = "OVERLINE",
  OWN = "OWN",
  PACKED_DECIMAL = "PACKED-DECIMAL",
  PADDING = "PADDING",
  PAGE = "PAGE",
  PAGE_COUNTER = "PAGE-COUNTER",
  PASSWORD = "PASSWORD",
  PERFORM = "PERFORM",
  PF = "PF",
  PH = "PH",
  PIC = "PIC",
  PICTURE = "PICTURE",
  PLUS = "PLUS",
  POINTER = "POINTER",
  POSITION = "POSITION",
  POSITIVE = "POSITIVE",
  PORT = "PORT",
  PRINTER = "PRINTER",
  PRINTING = "PRINTING",
  PRIVATE = "PRIVATE",
  PROCEDURE = "PROCEDURE",
  PROCEDURE_POINTER = "PROCEDURE-POINTER",
  PROCEDURES = "PROCEDURES",
  PROCEED = "PROCEED",
  PROCESS = "PROCESS",
  PROGRAM = "PROGRAM",
  PROGRAM_ID = "PROGRAM-ID",
  PROGRAM_LIBRARY = "PROGRAM-LIBRARY",
  PROMPT = "PROMPT",
  PURGE = "PURGE",
  QUEUE = "QUEUE",
  QUOTE = "QUOTE",
  QUOTES = "QUOTES",
  RANDOM = "RANDOM",
  READER = "READER",
  REMOTE = "REMOTE",
  RD = "RD",
  REAL = "REAL",
  READ = "READ",
  RECEIVE = "RECEIVE",
  RECEIVED = "RECEIVED",
  RECORD = "RECORD",
  RECORDING = "RECORDING",
  RECORDS = "RECORDS",
  RECURSIVE = "RECURSIVE",
  REDEFINES = "REDEFINES",
  REEL = "REEL",
  REF = "REF",
  REFERENCE = "REFERENCE",
  REFERENCES = "REFERENCES",
  RELATIVE = "RELATIVE",
  RELEASE = "RELEASE",
  REMAINDER = "REMAINDER",
  REMARKS = "REMARKS",
  REMOVAL = "REMOVAL",
  REMOVE = "REMOVE",
  RENAMES = "RENAMES",
  REPLACE = "REPLACE",
  REPLACING = "REPLACING",
  REPORT = "REPORT",
  REPORTING = "REPORTING",
  REPORTS = "REPORTS",
  REQUIRED = "REQUIRED",
  RERUN = "RERUN",
  RESERVE = "RESERVE",
  REVERSE_VIDEO = "RESERVE-VIDEO",
  RESET = "RESET",
  RETURN = "RETURN",
  RETURN_CODE = "RETURN-CODE",
  RETURNING = "RETURNING",
  REVERSED = "REVERSED",
  REWIND = "REWIND",
  REWRITE = "REWRITE",
  RF = "RF",
  RH = "RH",
  RIGHT = "RIGHT",
  ROUNDED = "ROUNDED",
  RUN = "RUN",
  SAME = "SAME",
  SAVE = "SAVE",
  SCREEN = "SCREEN",
  SD = "SD",
  SEARCH = "SEARCH",
  SECTION = "SECTION",
  SECURE = "SECURE",
  SECURITY = "SECURITY",
  SEGMENT = "SEGMENT",
  SEGMENT_LIMIT = "SEGMENT-LIMIT",
  SELECT = "SELECT",
  SEND = "SEND",
  SENTENCE = "SENTENCE",
  SEPARATE = "SEPARATE",
  SEQUENCE = "SEQUENCE",
  SEQUENTIAL = "SEQUENTIAL",
  SET = "SET",
  SHARED = "SHARED",
  SHAREDBYALL = "SHAREDBYALL",
  SHAREDBYRUNUNIT = "SHAREDBYRUNUNIT",
  SHARING = "SHARING",
  SHIFT_IN = "SHIFT-IN",
  SHIFT_OUT = "SHIFT-OUT",
  SHORT_DATE = "SHORT-DATE",
  SIGN = "SIGN",
  SIZE = "SIZE",
  SORT = "SORT",
  SORT_CONTROL = "SORT-CONTROL",
  SORT_CORE_SIZE = "SORT-CORE-SIZE",
  SORT_FILE_SIZE = "SORT-FILE-SIZE",
  SORT_MERGE = "SORT-MERGE",
  SORT_MESSAGE = "SORT-MESSAGE",
  SORT_MODE_SIZE = "SORT-MODE-SIZE",
  SORT_RETURN = "SORT-RETURN",
  SOURCE = "SOURCE",
  SOURCE_COMPUTER = "SOURCE-COMPUTER",
  SPACE = "SPACE",
  SPACES = "SPACES",
  SPECIAL_NAMES = "SPECIAL-NAMES",
  SQL = "SQL",
  STANDARD = "STANDARD",
  STANDARD_1 = "STANDARD-1",
  STANDARD_2 = "STANDARD-2",
  START = "START",
  STATUS = "STATUS",
  STOP = "STOP",
  STRING = "STRING",
  SUB_QUEUE_1 = "SUB-QUEUE-1",
  SUB_QUEUE_2 = "SUB-QUEUE-2",
  SUB_QUEUE_3 = "SUB-QUEUE-3",
  SUBTRACT = "SUBTRACT",
  SUM = "SUM",
  SUPPRESS = "SUPPRESS",
  SYMBOL = "SYMBOL",
  SYMBOLIC = "SYMBOLIC",
  SYNC = "SYNC",
  SYNCHRONIZED = "SYNCHRONIZED",
  TABLE = "TABLE",
  TALLY = "TALLY",
  TALLYING = "TALLYING",
  TASK = "TASK",
  TAPE = "TAPE",
  TERMINAL = "TERMINAL",
  TERMINATE = "TERMINATE",
  TEST = "TEST",
  TEXT = "TEXT",
  THAN = "THAN",
  THEN = "THEN",
  THREAD = "THREAD",
  THREAD_LOCAL = "THREAD-LOCAL",
  THROUGH = "THROUGH",
  THRU = "THRU",
  TIME = "TIME",
  TIMER = "TIMER",
  TIMES = "TIMES",
  TITLE = "TITLE",
  TO = "TO",
  TODAYS_DATE = "TODAYS-DATE",
  TODAYS_NAME = "TODAYS-NAME",
  TOP = "TOP",
  TRAILING = "TRAILING",
  TRUE = "TRUE",
  TRUNCATED = "TRUNCATED",
  TYPE = "TYPE",
  TYPEDEF = "TYPEDEF",
  UNDERLINE = "UNDERLINE",
  UNIT = "UNIT",
  UNSTRING = "UNSTRING",
  UNTIL = "UNTIL",
  UP = "UP",
  UPON = "UPON",
  USAGE = "USAGE",
  USE = "USE",
  USING = "USING",
  VALUE = "VALUE",
  VALUES = "VALUES",
  VARYING = "VARYING",
  VIRTUAL = "VIRTUAL",
  WAIT = "WAIT",
  WHEN = "WHEN",
  WHEN_COMPILED = "WHEN-COMPILED",
  WITH = "WITH",
  WORDS = "WORDS",
  WORKING_STORAGE = "WORKING-STORAGE",
  WRITE = "WRITE",
  YEAR = "YEAR",
  YYYYMMDD = "YYYYMMDD",
  YYYYDDD = "YYYYDDD",
  ZERO = "ZERO",
  ZERO_FILL = "ZERO-FILL",
  ZEROS = "ZEROS",
  ZEROES = "ZEROES",

  // literals
  HEXNUMBER = token(choice(seq(/xX/, '"', /[0-9A-F]+/, '"'), seq(/xX/, '\'', /[0-9A-F]+/, '\''))),
  NULLTERMINATED = token(choice(seq(/zZ/, '"', /(~["\n\r] | '""' | '\'')*/, '"'), seq(/zZ/, '\'', /(~['\n\r] | '\'\'' | '"')*/, '\''))),
  STRINGLITERAL = token(choice(seq('"', /(~["\n\r] | '""' | '\'')*/, '"'), seq('\'', /(~['\n\r] | '\'\'' | '"')*/, '\''))),
  DBCSLITERAL = token(choice(seq(/[gGnN]/, '"', /(~["\n\r] | '""' | '\'')*/, '"'), seq(/[gGnN]/, '\'', /(~['\n\r] | '\'\'' | '"')*/, '\''))),
  INTEGERLITERAL = token(seq(optional(choice(PLUSCHAR, MINUSCHAR)), /[0-9]+/)),
  NUMERICLITERAL = token(seq(optional(choice(PLUSCHAR, MINUSCHAR)), /[0-9]*/, choice(DOT, COMMACHAR), /[0-9]+/, optional(seq(/eE/, optional(choice(PLUSCHAR, MINUSCHAR)), /[0-9]+/)))),

  IDENTIFIER = token(seq(/[a-zA-Z0-9]+/, repeat(seq(/[-_]+/, /[a-zA-Z0-9]+/)))),

  NONNUMERICLITERAL = token(choice(STRINGLITERAL, DBCSLITERAL, HEXNUMBER, NULLTERMINATED)),

  LEVEL_NUMBER_66 = '66',
  LEVEL_NUMBER_77 = '77',
  LEVEL_NUMBER_88 = '88',

  // whitespace, line breaks, comments, ...;\n
  NEWLINE = seq(optional('\r'), '\n'),
  WS = /[ \t\f;]+/,
  EXECCICSLINE = seq(EXECCICSTAG, WS, /~('\n' | '\r' | '}')*/, /('\n' | '\r' | '}')/),
  EXECSQLIMSLINE = seq(EXECSQLIMSTAG, WS, /~('\n' | '\r' | '}')*/, /('\n' | '\r' | '}')/),
  EXECSQLLINE = seq(EXECSQLTAG, WS, /~('\n' | '\r' | '}')*/, /('\n' | '\r' | '}')/),
  COMMENTENTRYLINE = seq(COMMENTENTRYTAG, WS, /~('\n' | '\r')*/),
  COMMENTLINE = seq(COMMENTTAG, WS, /~('\n' | '\r')*/),
  SEPARATOR = ', '

module.exports = grammar({
  name: "cobol",

  extras: $ => [
    $.commentEntry,
  ],

  word: $ => $.cobolWord,

  conflicts: $ => [
    [$.identifier, $.tableCall],
    [$.identifier, $.tableCall, $.argument],
    [$.numericLiteral, $.figurativeConstant],
    [$.conditionNameReference, $.qualifiedDataNameFormat1],
    [$.paragraph, $.sentence],
    [$.qualifiedInData, $.conditionNameReference],
    [$.moveToSendingArea, $.figurativeConstant],
    [$.subscript, $.figurativeConstant],
    [$.subscript, $.tableCall],
    [$.qualifiedDataNameFormat1, $.inData],
    [$.addToGiving, $.addTo],
    [$.divideIntoGivingStatement, $.divideInto],
    [$.evaluateCondition, $.literal],
    [$.ifThen, $.nextSentenceStatement],
    [$.unstringDelimitedByPhrase, $.figurativeConstant],
    [$.reportGroupDescriptionEntryFormat2, $.reportGroupDescriptionEntryFormat3],
    [$.pictureString],
    [$.callByReference, $.specialRegister],
    [$.ifElse, $.nextSentenceStatement],
    [$.searchWhen, $.nextSentenceStatement],
    [$.unstringOrAllPhrase, $.figurativeConstant],
    [$.evaluateValue, $.relationSignCondition],
    [$.evaluateValue, $.classCondition],
    [$.callByValue, $.specialRegister],
    [$.relationArithmeticComparison, $.abbreviation],
    [$.callByContent, $.specialRegister],
  ],
  rules: {
    source_file: $ => $.compilationUnit,

    compilationUnit: $ => repeat1($.programUnit),

    programUnit: $ => prec.left(seq(
      $.identificationDivision, optional($.environmentDivision), optional($.dataDivision), optional($.procedureDivision), repeat($.programUnit), optional($.endProgramStatement),
    )),

    endProgramStatement: $ => seq(END, PROGRAM, $.programName, DOT_FS),

    // --- identification division --------------------------------------------------------------------

    identificationDivision: $ => seq(choice(IDENTIFICATION, ID), DIVISION, DOT_FS, $.programIdParagraph
      , repeat($.identificationDivisionBody)),

    identificationDivisionBody: $ => seq(
      $.authorParagraph,
      $.installationParagraph,
      $.dateWrittenParagraph,
      $.dateCompiledParagraph,
      $.securityParagraph,
      $.remarksParagraph,
    ),

    // - program id $.paragraph ----------------------------------

    programIdParagraph: $ => seq(
      PROGRAM_ID, DOT_FS, $.programName, optional(seq(
        optional(IS), choice(COMMON, INITIAL, LIBRARY, DEFINITION, RECURSIVE), optional(PROGRAM)
      )), optional(DOT_FS), optional($.commentEntry)),

    // - author $.paragraph ----------------------------------

    authorParagraph: $ => seq(AUTHOR, DOT_FS, optional($.commentEntry)),

    // - installation $.paragraph ----------------------------------

    installationParagraph: $ => seq(INSTALLATION, DOT_FS, optional($.commentEntry)),

    // - date written $.paragraph ----------------------------------

    dateWrittenParagraph: $ => seq(DATE_WRITTEN, DOT_FS, optional($.commentEntry)),

    // - date compiled $.paragraph ----------------------------------

    dateCompiledParagraph: $ => seq(DATE_COMPILED, DOT_FS, optional($.commentEntry)),

    // - security $.paragraph ----------------------------------

    securityParagraph: $ => seq(SECURITY, DOT_FS, optional($.commentEntry)),

    // - remarks $.paragraph ----------------------------------

    remarksParagraph: $ => seq(
      REMARKS, DOT_FS, optional($.commentEntry), optional(END_REMARKS), optional(DOT_FS)),

    // --- environment division --------------------------------------------------------------------

    environmentDivision: $ => seq(
      ENVIRONMENT, DIVISION, DOT_FS, repeat($.environmentDivisionBody)),

    environmentDivisionBody: $ => choice(
      $.configurationSection,
      $.specialNamesParagraph,
      $.inputOutputSection,
    ),

    // -- configuration section ----------------------------------

    configurationSection: $ => prec.left(seq(
      CONFIGURATION, SECTION, DOT_FS, repeat($.configurationSectionParagraph)
    )),

    // - configuration section $.paragraph ----------------------------------

    configurationSectionParagraph: $ => choice(
      $.sourceComputerParagraph,
      $.objectComputerParagraph,
      $.specialNamesParagraph
    ),
    // strictly, $.specialNamesParagraph does not belong into $.configurationSectionParagraph, but IBM-COBOL allows this

    // - source computer $.paragraph ----------------------------------

    sourceComputerParagraph: $ => seq(
      SOURCE_COMPUTER, DOT_FS, optional(seq(
        $.computerName, optional(seq(optional(WITH), DEBUGGING, MODE)), DOT_FS
      ))),

    // - object computer $.paragraph ----------------------------------

    objectComputerParagraph: $ => seq(
      OBJECT_COMPUTER, DOT_FS, optional(seq(
        $.computerName, repeat($.objectComputerClause), DOT_FS
      ))),

    objectComputerClause: $ => choice(
      $.memorySizeClause,
      $.diskSizeClause,
      $.collatingSequenceClause,
      $.segmentLimitClause,
      $.characterSetClause,
    ),

    memorySizeClause: $ => seq(
      MEMORY, optional(SIZE), choice($.integerLiteral, $.cobolWord), optional(choice(
        WORDS,
        CHARACTERS,
        MODULES,
      )),
    ),

    diskSizeClause: $ => seq(
      DISK, optional(SIZE), optional(IS), choice($.integerLiteral, $.cobolWord), optional(choice(WORDS, MODULES))),

    collatingSequenceClause: $ => seq(
      optional(PROGRAM), optional(COLLATING), SEQUENCE, seq(optional(IS), repeat1($.alphabetName)), optional($.collatingSequenceClauseAlphanumeric)
      , optional($.collatingSequenceClauseNational)),

    collatingSequenceClauseAlphanumeric: $ => seq(
      optional(FOR), ALPHANUMERIC, optional(IS), $.alphabetName),

    collatingSequenceClauseNational: $ => seq(optional(FOR), NATIONAL, optional(IS), $.alphabetName),

    segmentLimitClause: $ => seq(SEGMENT_LIMIT, optional(IS), $.integerLiteral),

    characterSetClause: $ => token(seq(CHARACTER, SET, DOT_FS)),

    // - special names $.paragraph ----------------------------------

    specialNamesParagraph: $ => seq(
      SPECIAL_NAMES, DOT_FS, optional(seq(repeat1($.specialNameClause), DOT_FS))),

    specialNameClause: $ => choice(
      $.channelClause,
      $.odtClause,
      $.alphabetClause,
      $.classClause,
      $.currencySignClause,
      $.decimalPointClause,
      $.symbolicCharactersClause,
      $.environmentSwitchNameClause,
      $.defaultDisplaySignClause,
      $.defaultComputationalSignClause,
      $.reserveNetworkClause,
    ),

    alphabetClause: $ => choice($.alphabetClauseFormat1, $.alphabetClauseFormat2),

    alphabetClauseFormat1: $ => seq(
      ALPHABET, $.alphabetName, optional(seq(FOR, ALPHANUMERIC)), optional(IS), choice(
        EBCDIC,
        ASCII,
        STANDARD_1,
        STANDARD_2,
        NATIVE,
        $.cobolWord,
        repeat1($.alphabetLiterals)
      )),

    alphabetLiterals: $ => seq($.literal, optional(choice($.alphabetThrough, repeat1($.alphabetAlso)))),

    alphabetThrough: $ => seq(choice(THROUGH, THRU), $.literal),

    alphabetAlso: $ => prec.left(seq(ALSO, repeat1($.literal))),

    alphabetClauseFormat2: $ => seq(
      ALPHABET, $.alphabetName, optional(FOR), NATIONAL, optional(IS), choice(
        NATIVE,
        seq(CCSVERSION, $.literal),
      )),

    channelClause: $ => seq(CHANNEL, $.integerLiteral, optional(IS), $.mnemonicName),

    classClause: $ => prec.left(seq(
      CLASS, $.className, optional(seq(optional(FOR), choice(ALPHANUMERIC, NATIONAL))), optional(IS), repeat1($.classClauseThrough),
    )),

    classClauseThrough: $ => seq(
      $.classClauseFrom, optional(seq(choice(THROUGH, THRU), $.classClauseTo))),

    classClauseFrom: $ => choice($.identifier, $.literal),

    classClauseTo: $ => choice($.identifier, $.literal),

    currencySignClause: $ => seq(
      CURRENCY, optional(SIGN), optional(IS), $.literal, optional(seq(optional(WITH), PICTURE, SYMBOL, $.literal))),

    decimalPointClause: $ => token(seq(DECIMAL_POINT, optional(IS), COMMA)),

    defaultComputationalSignClause: $ => token(seq(
      DEFAULT, optional(choice(COMPUTATIONAL, COMP)), optional(seq(SIGN, optional(IS))), optional(choice(
        LEADING,
        TRAILING
      )), seq(SEPARATE, optional(CHARACTER)))),

    defaultDisplaySignClause: $ => token(seq(
      DEFAULT_DISPLAY, optional(seq(SIGN, optional(IS))), choice(LEADING, TRAILING), optional(seq(
        SEPARATE, optional(CHARACTER)
      )))),

    environmentSwitchNameClause: $ => prec.left(choice(
      seq($.environmentName, optional(IS), $.mnemonicName, optional($.environmentSwitchNameSpecialNamesStatusPhrase)),
      $.environmentSwitchNameSpecialNamesStatusPhrase,
    )),

    environmentSwitchNameSpecialNamesStatusPhrase: $ => choice(
      seq(ON, optional(STATUS), optional(IS), $.condition, seq(OFF, optional(STATUS), optional(IS), $.condition)),
      seq(OFF, optional(STATUS), optional(IS), $.condition, seq(ON, optional(STATUS), optional(IS), $.condition))),

    odtClause: $ => seq(ODT, optional(IS), $.mnemonicName),

    reserveNetworkClause: $ => token(seq(RESERVE, optional(WORDS), optional(LIST), optional(IS), NETWORK, optional(CAPABLE))),

    symbolicCharactersClause: $ => prec.left(seq(
      SYMBOLIC, optional(CHARACTERS), optional(seq(optional(FOR), choice(ALPHANUMERIC, NATIONAL))), repeat1($.symbolicCharacters), optional(seq(
        IN, $.alphabetName
      )),
    )),

    symbolicCharacters: $ => seq(
      repeat1($.symbolicCharacter), optional(choice(IS, ARE)), repeat1($.integerLiteral)),

    // -- input output section ----------------------------------

    inputOutputSection: $ => seq(
      INPUT_OUTPUT, SECTION, DOT_FS, repeat($.inputOutputSectionParagraph)),

    // - input output section $.paragraph ----------------------------------

    inputOutputSectionParagraph: $ => choice(
      $.fileControlParagraph,
      $.ioControlParagraph),

    // - file control $.paragraph ----------------------------------

    fileControlParagraph: $ => prec.left(seq(
      optional(FILE_CONTROL), repeat(seq(optional(DOT_FS), $.fileControlEntry)), DOT_FS,
    )),

    fileControlEntry: $ => seq($.selectClause, repeat($.fileControlClause)),

    selectClause: $ => seq(SELECT, optional(OPTIONAL), $.fileName),

    fileControlClause: $ => choice(
      $.assignClause,
      $.reserveClause,
      $.organizationClause,
      $.paddingCharacterClause,
      $.recordDelimiterClause,
      $.accessModeClause,
      $.recordKeyClause,
      $.alternateRecordKeyClause,
      $.fileStatusClause,
      $.passwordClause,
      $.relativeKeyClause),

    assignClause: $ => seq(
      ASSIGN, optional(TO), choice(
        DISK,
        DISPLAY,
        KEYBOARD,
        PORT,
        PRINTER,
        READER,
        REMOTE,
        TAPE,
        VIRTUAL,
        seq(optional(choice(DYNAMIC, EXTERNAL)), $.assignmentName),
        $.literal
      )),

    reserveClause: $ => prec.left(seq(
      RESERVE, choice(NO, $.integerLiteral), optional(ALTERNATE), optional(choice(AREA, AREAS)),
    )),

    organizationClause: $ => token(seq(optional(seq(ORGANIZATION, optional(IS))), optional(choice(
      LINE,
      seq(RECORD, BINARY),
      RECORD,
      BINARY
    )), choice(SEQUENTIAL, RELATIVE, INDEXED))),

    paddingCharacterClause: $ => seq(
      PADDING, optional(CHARACTER), optional(IS), choice($.qualifiedDataName, $.literal)),

    recordDelimiterClause: $ => seq(
      RECORD, DELIMITER, optional(IS), choice(STANDARD_1, IMPLICIT, $.assignmentName)),

    accessModeClause: $ => token(seq(
      ACCESS, optional(MODE), optional(IS), choice(SEQUENTIAL, RANDOM, DYNAMIC, EXCLUSIVE))),

    recordKeyClause: $ => prec.left(seq(
      RECORD, optional(KEY), optional(IS), $.qualifiedDataName, optional($.passwordClause), optional(seq(
        optional(WITH), DUPLICATES
      )),
    )),

    alternateRecordKeyClause: $ => prec.left(seq(
      ALTERNATE, RECORD, optional(KEY), optional(IS), $.qualifiedDataName, optional($.passwordClause), optional(seq(
        optional(WITH), DUPLICATES
      )),
    )),

    passwordClause: $ => seq(PASSWORD, optional(IS), $.dataName),

    fileStatusClause: $ => seq(
      optional(FILE), STATUS, optional(IS), $.qualifiedDataName, optional($.qualifiedDataName)),

    relativeKeyClause: $ => seq(RELATIVE, optional(KEY), optional(IS), $.qualifiedDataName),

    // - io control $.paragraph ----------------------------------

    ioControlParagraph: $ => prec.left(seq(
      I_O_CONTROL, DOT_FS, optional(seq($.fileName, DOT_FS)), optional(seq(
        repeat($.ioControlClause), DOT_FS
      )),
    )),

    ioControlClause: $ => choice(
      $.rerunClause,
      $.sameClause,
      $.multipleFileClause,
      $.commitmentControlClause,
    ),

    rerunClause: $ => seq(
      RERUN, optional(seq(ON, choice($.assignmentName, $.fileName))), EVERY, choice(
        $.rerunEveryRecords,
        $.rerunEveryOf,
        $.rerunEveryClock
      )),

    rerunEveryRecords: $ => seq($.integerLiteral, RECORDS),

    rerunEveryOf: $ => seq(optional(END), optional(OF), choice(REEL, UNIT), OF, $.fileName),

    rerunEveryClock: $ => seq($.integerLiteral, optional(CLOCK_UNITS)),

    sameClause: $ => seq(
      SAME, optional(choice(RECORD, SORT, SORT_MERGE)), optional(AREA), optional(FOR), repeat1($.fileName)),

    multipleFileClause: $ => seq(
      MULTIPLE, FILE, optional(TAPE), optional(CONTAINS), repeat1($.multipleFilePosition)),

    multipleFilePosition: $ => seq($.fileName, optional(seq(POSITION, $.integerLiteral))),

    commitmentControlClause: $ => seq(COMMITMENT, CONTROL, optional(FOR), $.fileName),

    // --- data division --------------------------------------------------------------------

    dataDivision: $ => seq(DATA, DIVISION, DOT_FS, repeat($.dataDivisionSection)),

    dataDivisionSection: $ => choice(
      $.fileSection,
      $.dataBaseSection,
      $.workingStorageSection,
      $.linkageSection,
      $.communicationSection,
      $.localStorageSection,
      $.screenSection,
      $.reportSection,
      $.programLibrarySection),

    // -- file section ----------------------------------

    fileSection: $ => seq(FILE, SECTION, DOT_FS, repeat($.fileDescriptionEntry)),

    fileDescriptionEntry: $ => prec.left(seq(
      choice(FD, SD), $.fileName, repeat(seq(
        optional(DOT_FS), $.fileDescriptionEntryClause
      )), DOT_FS, repeat($.dataDescriptionEntry),
    )),

    fileDescriptionEntryClause: $ => choice(
      $.externalClause,
      $.globalClause,
      $.blockContainsClause,
      $.recordContainsClause,
      $.labelRecordsClause,
      $.valueOfClause,
      $.dataRecordsClause,
      $.linageClause,
      $.codeSetClause,
      $.reportClause,
      $.recordingModeClause,
    ),

    externalClause: $ => token(seq(optional(IS), EXTERNAL)),

    globalClause: $ => token(seq(optional(IS), GLOBAL)),

    blockContainsClause: $ => seq(
      BLOCK, optional(CONTAINS), $.integerLiteral, optional($.blockContainsTo), optional(choice(
        RECORDS,
        CHARACTERS,
      ))),

    blockContainsTo: $ => seq(TO, $.integerLiteral),

    recordContainsClause: $ => seq(
      RECORD, choice(
        $.recordContainsClauseFormat1,
        $.recordContainsClauseFormat2,
        $.recordContainsClauseFormat3
      )),

    recordContainsClauseFormat1: $ => seq(
      optional(CONTAINS), $.integerLiteral, optional(CHARACTERS)),

    recordContainsClauseFormat2: $ => seq(
      optional(IS), VARYING, optional(IN), optional(SIZE), optional(seq(
        optional(FROM), $.integerLiteral, optional($.recordContainsTo), optional(CHARACTERS)
      )), optional(seq(DEPENDING, optional(ON), $.qualifiedDataName))),

    recordContainsClauseFormat3: $ => seq(
      optional(CONTAINS), $.integerLiteral, $.recordContainsTo, optional(CHARACTERS)),

    recordContainsTo: $ => seq(TO, $.integerLiteral),

    labelRecordsClause: $ => seq(
      LABEL, choice(seq(RECORD, optional(IS)), seq(RECORDS, optional(ARE))), choice(
        OMITTED,
        STANDARD,
        repeat1($.dataName),
      )),

    valueOfClause: $ => seq(VALUE, OF, repeat1($.valuePair)),

    valuePair: $ => seq($.systemName, optional(IS), choice($.qualifiedDataName, $.literal)),

    dataRecordsClause: $ => seq(DATA, choice(seq(RECORD, optional(IS)), seq(RECORDS, optional(ARE))), repeat1($.dataName)),

    linageClause: $ => seq(
      LINAGE, optional(IS), choice($.dataName, $.integerLiteral), optional(LINES), repeat($.linageAt)),

    linageAt: $ => choice(
      $.linageFootingAt,
      $.linageLinesAtTop,
      $.linageLinesAtBottom),

    linageFootingAt: $ => seq(optional(WITH), FOOTING, optional(AT), choice($.dataName, $.integerLiteral)),

    linageLinesAtTop: $ => seq(optional(LINES), optional(AT), TOP, choice($.dataName, $.integerLiteral)),

    linageLinesAtBottom: $ => seq(
      optional(LINES), optional(AT), BOTTOM, choice($.dataName, $.integerLiteral)),

    recordingModeClause: $ => seq(RECORDING, optional(MODE), optional(IS,), $.modeStatement),

    modeStatement: $ => seq($.cobolWord),

    codeSetClause: $ => seq(CODE_SET, optional(IS), $.alphabetName),

    reportClause: $ => seq(choice(seq(REPORT, optional(IS)), seq(REPORTS, optional(ARE))), repeat1($.reportName)),

    // -- data base section ----------------------------------

    dataBaseSection: $ => seq(DATA_BASE, SECTION, DOT_FS, repeat($.dataBaseSectionEntry)),

    dataBaseSectionEntry: $ => seq($.integerLiteral, $.literal, INVOKE, $.literal),

    // -- working storage section ----------------------------------

    workingStorageSection: $ => seq(
      WORKING_STORAGE, SECTION, DOT_FS, repeat($.dataDescriptionEntry)),

    // -- linkage section ----------------------------------

    linkageSection: $ => seq(LINKAGE, SECTION, DOT_FS, repeat($.dataDescriptionEntry)),

    // -- communication section ----------------------------------

    communicationSection: $ => seq(
      COMMUNICATION, SECTION, DOT_FS, repeat(choice(
        $.communicationDescriptionEntry,
        $.dataDescriptionEntry
      ))),

    communicationDescriptionEntry: $ => choice(
      $.communicationDescriptionEntryFormat1,
      $.communicationDescriptionEntryFormat2,
      $.communicationDescriptionEntryFormat3,
    ),

    communicationDescriptionEntryFormat1: $ => seq(
      CD, $.cdName, optional(FOR), optional(INITIAL), INPUT, repeat(choice(
        choice(
          $.symbolicQueueClause,
          $.symbolicSubQueueClause,
          $.messageDateClause,
          $.messageTimeClause,
          $.symbolicSourceClause,
          $.textLengthClause,
          $.endKeyClause,
          $.statusKeyClause,
          $.messageCountClause
        ),
        $.dataDescName,
      )), DOT_FS),

    communicationDescriptionEntryFormat2: $ => seq(
      CD, $.cdName, optional(FOR), OUTPUT, repeat(choice(
        $.destinationCountClause,
        $.textLengthClause,
        $.statusKeyClause,
        $.destinationTableClause,
        $.errorKeyClause,
        $.symbolicDestinationClause
      )), DOT_FS),

    communicationDescriptionEntryFormat3: $ => seq(
      CD, $.cdName, optional(FOR), INITIAL, I_O, repeat(choice(
        choice(
          $.messageDateClause,
          $.messageTimeClause,
          $.symbolicTerminalClause,
          $.textLengthClause,
          $.endKeyClause,
          $.statusKeyClause
        ),
        $.dataDescName,
      )), DOT_FS),

    destinationCountClause: $ => seq(DESTINATION, COUNT, optional(IS), $.dataDescName),

    destinationTableClause: $ => seq(
      DESTINATION, TABLE, OCCURS, $.integerLiteral, TIMES, optional(seq(
        INDEXED, BY, repeat1($.indexName)
      ))),

    endKeyClause: $ => seq(END, KEY, optional(IS), $.dataDescName),

    errorKeyClause: $ => seq(ERROR, KEY, optional(IS), $.dataDescName),

    messageCountClause: $ => seq(optional(MESSAGE), COUNT, optional(IS), $.dataDescName),

    messageDateClause: $ => seq(MESSAGE, DATE, optional(IS), $.dataDescName),

    messageTimeClause: $ => seq(MESSAGE, TIME, optional(IS), $.dataDescName),

    statusKeyClause: $ => seq(STATUS, KEY, optional(IS), $.dataDescName),

    symbolicDestinationClause: $ => seq(
      optional(SYMBOLIC), DESTINATION, optional(IS), $.dataDescName),

    symbolicQueueClause: $ => seq(optional(SYMBOLIC), QUEUE, optional(IS), $.dataDescName),

    symbolicSourceClause: $ => seq(optional(SYMBOLIC), SOURCE, optional(IS), $.dataDescName),

    symbolicTerminalClause: $ => seq(optional(SYMBOLIC), TERMINAL, optional(IS), $.dataDescName),

    symbolicSubQueueClause: $ => seq(
      optional(SYMBOLIC), choice(SUB_QUEUE_1, SUB_QUEUE_2, SUB_QUEUE_3), optional(IS), $.dataDescName),

    textLengthClause: $ => seq(TEXT, LENGTH, optional(IS), $.dataDescName),

    // -- local storage section ----------------------------------

    localStorageSection: $ => seq(
      LOCAL_STORAGE, SECTION, DOT_FS, optional(seq(LD, $.localName, DOT_FS)), repeat($.dataDescriptionEntry)),

    // -- screen section ----------------------------------

    screenSection: $ => seq(SCREEN, SECTION, DOT_FS, repeat($.screenDescriptionEntry)),

    screenDescriptionEntry: $ => seq(
      $.integerLiteral, optional(choice(FILLER, $.screenName)), repeat(choice(
        $.screenDescriptionBlankClause,
        $.screenDescriptionBellClause,
        $.screenDescriptionBlinkClause,
        $.screenDescriptionEraseClause,
        $.screenDescriptionLightClause,
        $.screenDescriptionGridClause,
        $.screenDescriptionReverseVideoClause,
        $.screenDescriptionUnderlineClause,
        $.screenDescriptionSizeClause,
        $.screenDescriptionLineClause,
        $.screenDescriptionColumnClause,
        $.screenDescriptionForegroundColorClause,
        $.screenDescriptionBackgroundColorClause,
        $.screenDescriptionControlClause,
        $.screenDescriptionValueClause,
        $.screenDescriptionPictureClause,
        choice(
          $.screenDescriptionFromClause,
          $.screenDescriptionUsingClause
        ),
        $.screenDescriptionUsageClause,
        $.screenDescriptionBlankWhenZeroClause,
        $.screenDescriptionJustifiedClause,
        $.screenDescriptionSignClause,
        $.screenDescriptionAutoClause,
        $.screenDescriptionSecureClause,
        $.screenDescriptionRequiredClause,
        $.screenDescriptionPromptClause,
        $.screenDescriptionFullClause,
        $.screenDescriptionZeroFillClause
      )), DOT_FS),

    screenDescriptionBlankClause: $ => token(seq(BLANK, choice(SCREEN, LINE))),

    screenDescriptionBellClause: $ => token(choice(BELL, BEEP)),

    screenDescriptionBlinkClause: $ => token(BLINK),

    screenDescriptionEraseClause: $ => token(seq(ERASE, choice(EOL, EOS))),

    screenDescriptionLightClause: $ => token(choice(HIGHLIGHT, LOWLIGHT)),

    screenDescriptionGridClause: $ => token(choice(GRID, LEFTLINE, OVERLINE)),

    screenDescriptionReverseVideoClause: $ => token(REVERSE_VIDEO),

    screenDescriptionUnderlineClause: $ => token(UNDERLINE),

    screenDescriptionSizeClause: $ => seq(
      SIZE, optional(IS), choice($.identifier, $.integerLiteral)),

    screenDescriptionLineClause: $ => seq(
      LINE, seq(optional(NUMBER), optional(IS), optional(choice(PLUS, PLUSCHAR, MINUSCHAR)), choice(
        $.identifier,
        $.integerLiteral,
      ))),

    screenDescriptionColumnClause: $ => seq(choice(COLUMN, COL), optional(seq(
      optional(NUMBER), optional(IS), choice(PLUS, PLUSCHAR, MINUSCHAR)
    )), choice($.identifier, $.integerLiteral)),

    screenDescriptionForegroundColorClause: $ => seq(choice(
      FOREGROUND_COLOR,
      FOREGROUND_COLOUR
    ), optional(IS), choice($.identifier, $.integerLiteral)),

    screenDescriptionBackgroundColorClause: $ => seq(choice(
      BACKGROUND_COLOR,
      BACKGROUND_COLOUR
    ), optional(IS), choice($.identifier, $.integerLiteral)),

    screenDescriptionControlClause: $ => seq(CONTROL, optional(IS), $.identifier),

    screenDescriptionValueClause: $ => seq(VALUE, optional(IS), $.literal),

    screenDescriptionPictureClause: $ => seq(choice(PICTURE, PIC), optional(IS), $.pictureString),

    screenDescriptionFromClause: $ => seq(
      FROM, choice($.identifier, $.literal), optional($.screenDescriptionToClause)),

    screenDescriptionToClause: $ => seq(TO, $.identifier),

    screenDescriptionUsingClause: $ => seq(USING, $.identifier),

    screenDescriptionUsageClause: $ => token(seq((USAGE, optional(IS)), choice(DISPLAY, DISPLAY_1))),

    screenDescriptionBlankWhenZeroClause: $ => token(seq(BLANK, optional(WHEN), ZERO)),

    screenDescriptionJustifiedClause: $ => token(seq(choice(JUSTIFIED, JUST), optional(RIGHT))),

    screenDescriptionSignClause: $ => token(seq(optional(seq(SIGN, optional(IS))), choice(LEADING, TRAILING), optional(seq(
      SEPARATE, optional(CHARACTER)
    )))),

    screenDescriptionAutoClause: $ => token(choice(AUTO, AUTO_SKIP)),

    screenDescriptionSecureClause: $ => token(choice(SECURE, NO_ECHO)),

    screenDescriptionRequiredClause: $ => token(choice(REQUIRED, EMPTY_CHECK)),

    screenDescriptionPromptClause: $ => seq(
      PROMPT, optional(CHARACTER), optional(IS), choice($.identifier, $.literal), optional($.screenDescriptionPromptOccursClause)),

    screenDescriptionPromptOccursClause: $ => seq(
      OCCURS, $.integerLiteral, optional(TIMES)),

    screenDescriptionFullClause: $ => token(choice(FULL, LENGTH_CHECK)),

    screenDescriptionZeroFillClause: $ => token(ZERO_FILL),

    // -- report section ----------------------------------

    reportSection: $ => seq(REPORT, SECTION, DOT_FS, repeat($.reportDescription)),

    reportDescription: $ => seq(
      $.reportDescriptionEntry, repeat1($.reportGroupDescriptionEntry)),

    reportDescriptionEntry: $ => seq(
      RD, $.reportName, optional($.reportDescriptionGlobalClause), optional(seq(
        $.reportDescriptionPageLimitClause, optional($.reportDescriptionHeadingClause), optional($.reportDescriptionFirstDetailClause), optional($.reportDescriptionLastDetailClause), optional($.reportDescriptionFootingClause)
      )), DOT_FS),

    reportDescriptionGlobalClause: $ => token(seq(optional(IS), GLOBAL)),

    reportDescriptionPageLimitClause: $ => seq(
      PAGE,
      optional(
        seq(
          choice(seq(LIMIT, optional(IS)), seq(LIMITS, optional(ARE))),
          $.integerLiteral,
          optional(choice(LINE, LINES)),
        ),
      ),
    ),

    reportDescriptionHeadingClause: $ => seq(HEADING, $.integerLiteral),

    reportDescriptionFirstDetailClause: $ => seq(FIRST, DETAIL, $.integerLiteral),

    reportDescriptionLastDetailClause: $ => seq(LAST, DETAIL, $.integerLiteral),

    reportDescriptionFootingClause: $ => seq(FOOTING, $.integerLiteral),

    reportGroupDescriptionEntry: $ => choice(
      $.reportGroupDescriptionEntryFormat1,
      $.reportGroupDescriptionEntryFormat2,
      $.reportGroupDescriptionEntryFormat3),

    reportGroupDescriptionEntryFormat1: $ => seq(
      $.integerLiteral, $.dataName, optional($.reportGroupLineNumberClause), optional($.reportGroupNextGroupClause),
      $.reportGroupTypeClause, optional($.reportGroupUsageClause), DOT_FS),

    reportGroupDescriptionEntryFormat2: $ => seq(
      $.integerLiteral, optional($.dataName), optional($.reportGroupLineNumberClause), $.reportGroupUsageClause, DOT_FS),

    reportGroupDescriptionEntryFormat3: $ => seq(
      $.integerLiteral, optional($.dataName), repeat(choice(
        $.reportGroupPictureClause,
        $.reportGroupUsageClause,
        $.reportGroupSignClause,
        $.reportGroupJustifiedClause,
        $.reportGroupBlankWhenZeroClause,
        $.reportGroupLineNumberClause,
        $.reportGroupColumnNumberClause,
        choice(
          $.reportGroupSourceClause,
          $.reportGroupValueClause,
          $.reportGroupSumClause,
          $.reportGroupResetClause
        ),
        $.reportGroupIndicateClause
      )), DOT_FS),

    reportGroupBlankWhenZeroClause: $ => token(seq(BLANK, optional(WHEN), ZERO)),

    reportGroupColumnNumberClause: $ => seq(
      COLUMN, optional(NUMBER), optional(IS), $.integerLiteral),

    reportGroupIndicateClause: $ => token(seq(GROUP, optional(INDICATE))),

    reportGroupJustifiedClause: $ => token(seq(choice(JUSTIFIED, JUST), optional(RIGHT))),

    reportGroupLineNumberClause: $ => seq(
      optional(LINE), optional(NUMBER), optional(IS), choice(
        $.reportGroupLineNumberNextPage,
        $.reportGroupLineNumberPlus
      )),

    reportGroupLineNumberNextPage: $ => seq($.integerLiteral, optional((optional(ON), NEXT, PAGE))),

    reportGroupLineNumberPlus: $ => seq(PLUS, $.integerLiteral),

    reportGroupNextGroupClause: $ => seq(
      NEXT, GROUP, optional(IS), choice(
        $.integerLiteral,
        $.reportGroupNextGroupNextPage,
        $.reportGroupNextGroupPlus
      )),

    reportGroupNextGroupPlus: $ => seq(PLUS, $.integerLiteral),

    reportGroupNextGroupNextPage: $ => token(seq(NEXT, PAGE)),

    reportGroupPictureClause: $ => seq(choice(PICTURE, PIC), optional(IS), $.pictureString),

    reportGroupResetClause: $ => seq(RESET, optional(ON), choice(FINAL, $.dataName)),

    reportGroupSignClause: $ => token(seq(
      SIGN, optional(IS), choice(LEADING, TRAILING), SEPARATE, optional(CHARACTER))),

    reportGroupSourceClause: $ => seq(SOURCE, optional(IS), $.identifier),

    reportGroupSumClause: $ => prec.left(seq(
      SUM, $.identifier, repeat(seq(optional(COMMACHAR), $.identifier)), optional(seq(
        UPON, $.dataName, repeat(seq(optional(COMMACHAR), $.dataName)),
      )),
    )),

    reportGroupTypeClause: $ => seq(
      TYPE, optional(IS), choice(
        $.reportGroupTypeReportHeading,
        $.reportGroupTypePageHeading,
        $.reportGroupTypeControlHeading,
        $.reportGroupTypeDetail,
        $.reportGroupTypeControlFooting,
        $.reportGroupTypePageFooting,
        $.reportGroupTypeReportFooting
      )),

    reportGroupTypeReportHeading: $ => token(choice(seq(REPORT, HEADING), RH)),

    reportGroupTypePageHeading: $ => token(choice(seq(PAGE, HEADING), PH)),

    reportGroupTypeControlHeading: $ => seq(choice(seq(CONTROL, HEADING), CH), choice(
      FINAL,
      $.dataName
    )),

    reportGroupTypeDetail: $ => token(choice(DETAIL, DE)),

    reportGroupTypeControlFooting: $ => seq(choice(seq(CONTROL, FOOTING), CF), choice(
      FINAL,
      $.dataName
    )),

    reportGroupUsageClause: $ => token(seq(optional(seq(USAGE, optional(IS))), choice(DISPLAY, DISPLAY_1))),

    reportGroupTypePageFooting: $ => token(choice(seq(PAGE, FOOTING), PF)),

    reportGroupTypeReportFooting: $ => token(choice(seq(REPORT, FOOTING), RF)),

    reportGroupValueClause: $ => seq(VALUE, optional(IS), $.literal),

    // -- program library section ----------------------------------

    programLibrarySection: $ => seq(
      PROGRAM_LIBRARY, SECTION, DOT_FS, repeat($.libraryDescriptionEntry)),

    libraryDescriptionEntry: $ => choice(
      $.libraryDescriptionEntryFormat1,
      $.libraryDescriptionEntryFormat2),

    libraryDescriptionEntryFormat1: $ => seq(
      LD, $.libraryName, EXPORT, optional($.libraryAttributeClauseFormat1), optional($.libraryEntryProcedureClauseFormat1)),

    libraryDescriptionEntryFormat2: $ => seq(
      LB, $.libraryName, IMPORT, optional($.libraryIsGlobalClause), optional($.libraryIsCommonClause), repeat(choice(
        $.libraryAttributeClauseFormat2,
        $.libraryEntryProcedureClauseFormat2,
      ))),

    libraryAttributeClauseFormat1: $ => token(seq(
      ATTRIBUTE, optional(seq(
        SHARING, optional(IS), choice(
          DONTCARE,
          PRIVATE,
          SHAREDBYRUNUNIT,
          SHAREDBYALL
        ),
      )))),

    libraryAttributeClauseFormat2: $ => seq(
      ATTRIBUTE, optional($.libraryAttributeFunction), optional(seq(
        LIBACCESS, optional(IS), choice(BYFUNCTION, BYTITLE)
      )), optional($.libraryAttributeParameter), optional($.libraryAttributeTitle)),

    libraryAttributeFunction: $ => seq(FUNCTIONNAME, $.literal),

    libraryAttributeParameter: $ => seq(LIBPARAMETER, optional(IS), $.literal),

    libraryAttributeTitle: $ => seq(TITLE, optional(IS), $.literal),

    libraryEntryProcedureClauseFormat1: $ => seq(
      ENTRY_PROCEDURE, $.programName, optional($.libraryEntryProcedureForClause)),

    libraryEntryProcedureClauseFormat2: $ => seq(
      ENTRY_PROCEDURE, $.programName, optional($.libraryEntryProcedureForClause), optional($.libraryEntryProcedureWithClause),
      optional($.libraryEntryProcedureUsingClause), optional($.libraryEntryProcedureGivingClause)),

    libraryEntryProcedureForClause: $ => seq(FOR, $.literal),

    libraryEntryProcedureGivingClause: $ => seq(GIVING, $.dataName),

    libraryEntryProcedureUsingClause: $ => seq(
      USING, repeat1($.libraryEntryProcedureUsingName)),

    libraryEntryProcedureUsingName: $ => choice($.dataName, $.fileName),

    libraryEntryProcedureWithClause: $ => seq(
      WITH, repeat1($.libraryEntryProcedureWithName)),

    libraryEntryProcedureWithName: $ => choice($.localName, $.fileName),

    libraryIsCommonClause: $ => token(seq(optional(IS), COMMON)),

    libraryIsGlobalClause: $ => token(seq(optional(IS), GLOBAL)),

    // data description entry ----------------------------------

    dataDescriptionEntry: $ => choice(
      $.dataDescriptionEntryFormat1,
      $.dataDescriptionEntryFormat2,
      $.dataDescriptionEntryFormat3,
      $.dataDescriptionEntryExecSql,
    ),

    dataDescriptionEntryFormat1: $ => seq(choice($.integerLiteral, LEVEL_NUMBER_77), optional(choice(
      FILLER,
      $.dataName
    )), repeat(choice(
      $.dataRedefinesClause,
      $.dataIntegerStringClause,
      $.dataExternalClause,
      $.dataGlobalClause,
      $.dataTypeDefClause,
      $.dataThreadLocalClause,
      $.dataPictureClause,
      $.dataCommonOwnLocalClause,
      $.dataTypeClause,
      $.dataUsingClause,
      $.dataUsageClause,
      $.dataValueClause,
      $.dataReceivedByClause,
      $.dataOccursClause,
      $.dataSignClause,
      $.dataSynchronizedClause,
      $.dataJustifiedClause,
      $.dataBlankWhenZeroClause,
      $.dataWithLowerBoundsClause,
      $.dataAlignedClause,
      $.dataRecordAreaClause
    )), DOT_FS),

    dataDescriptionEntryFormat2: $ => seq(
      LEVEL_NUMBER_66, $.dataName, $.dataRenamesClause, DOT_FS),

    dataDescriptionEntryFormat3: $ => seq(
      LEVEL_NUMBER_88, $.conditionName, $.dataValueClause, DOT_FS),

    dataDescriptionEntryExecSql: $ => prec.left(token(seq(repeat1(EXECSQLLINE), optional(DOT_FS)))),

    dataAlignedClause: $ => token(ALIGNED),

    dataBlankWhenZeroClause: $ => token(seq(BLANK, optional(WHEN), choice(ZERO, ZEROS, ZEROES))),

    dataCommonOwnLocalClause: $ => token(choice(COMMON, OWN, LOCAL)),

    dataExternalClause: $ => prec.left(seq(optional(IS), EXTERNAL, optional(seq(BY, $.literal)))),

    dataGlobalClause: $ => token(seq(optional(IS), GLOBAL)),

    dataIntegerStringClause: $ => token(choice(INTEGER, STRING)),

    dataJustifiedClause: $ => token(seq(choice(JUSTIFIED, JUST), optional(RIGHT))),

    dataOccursClause: $ => seq(
      OCCURS, choice($.identifier, $.integerLiteral), optional($.dataOccursTo), optional(TIMES), optional($.dataOccursDepending), repeat(choice(
        $.dataOccursSort,
        $.dataOccursIndexed,
      ))),

    dataOccursTo: $ => seq(TO, $.integerLiteral),

    dataOccursDepending: $ => seq(DEPENDING, optional(ON), $.qualifiedDataName),

    dataOccursSort: $ => prec.left(seq(choice(ASCENDING, DESCENDING), optional(KEY), optional(IS), repeat1($.qualifiedDataName))),

    dataOccursIndexed: $ => prec.left(seq(INDEXED, optional(BY), optional(LOCAL), repeat1($.indexName))),

    dataPictureClause: $ => seq(choice(PICTURE, PIC), optional(IS), $.pictureString),

    pictureString: $ => repeat1(seq(repeat1($.pictureChars), optional($.pictureCardinality))),

    pictureChars: $ => prec.left(choice(
      DOLLARCHAR,
      $.identifier,
      NUMERICLITERAL,
      SLASHCHAR,
      COMMACHAR,
      DOT,
      COLONCHAR,
      ASTERISKCHAR,
      DOUBLEASTERISKCHAR,
      LPARENCHAR,
      RPARENCHAR,
      PLUSCHAR,
      MINUSCHAR,
      LESSTHANCHAR,
      MORETHANCHAR,
      $.integerLiteral,
    )),

    pictureCardinality: $ => seq(LPARENCHAR, $.integerLiteral, RPARENCHAR),

    dataReceivedByClause: $ => token(seq(optional(RECEIVED), optional(BY), choice(CONTENT, REFERENCE, REF))),

    dataRecordAreaClause: $ => token(seq(RECORD, AREA)),

    dataRedefinesClause: $ => seq(REDEFINES, $.dataName),

    dataRenamesClause: $ => seq(
      RENAMES, $.qualifiedDataName, optional(seq(
        choice(THROUGH, THRU), $.qualifiedDataName
      ))),

    dataSignClause: $ => token(seq(optional(seq(SIGN, optional(IS))), choice(LEADING, TRAILING), optional(seq(
      SEPARATE, optional(CHARACTER)
    )))),

    dataSynchronizedClause: $ => token(seq(choice(SYNCHRONIZED, SYNC), optional(choice(LEFT, RIGHT)))),

    dataThreadLocalClause: $ => token(seq(optional(IS), THREAD_LOCAL)),

    dataTypeClause: $ => seq(
      TYPE, optional(IS), choice(
        SHORT_DATE,
        LONG_DATE,
        NUMERIC_DATE,
        NUMERIC_TIME,
        LONG_TIME,
        seq(choice(CLOB, BLOB, DBCLOB), LPARENCHAR, $.integerLiteral, RPARENCHAR)
      )),

    dataTypeDefClause: $ => token(seq(optional(IS), TYPEDEF)),

    dataUsageClause: $ => token(seq(optional(seq(USAGE, optional(IS))), choice(
      seq(BINARY, optional(choice(TRUNCATED, EXTENDED))),
      BIT,
      COMP,
      COMP_1,
      COMP_2,
      COMP_3,
      COMP_4,
      COMP_5,
      COMPUTATIONAL,
      COMPUTATIONAL_1,
      COMPUTATIONAL_2,
      COMPUTATIONAL_3,
      COMPUTATIONAL_4,
      COMPUTATIONAL_5,
      CONTROL_POINT,
      DATE,
      DISPLAY,
      DISPLAY_1,
      DOUBLE,
      EVENT,
      FUNCTION_POINTER,
      INDEX,
      KANJI,
      LOCK,
      NATIONAL,
      PACKED_DECIMAL,
      POINTER,
      PROCEDURE_POINTER,
      REAL,
      SQL,
      TASK
    ))),

    dataUsingClause: $ => seq(
      USING, choice(LANGUAGE, CONVENTION), optional(OF), choice($.cobolWord, $.dataName)),

    dataValueClause: $ => prec.left(seq(optional(seq(choice(VALUE, VALUES), optional(choice(IS, ARE)))), $.dataValueInterval, repeat(seq(
      optional(COMMACHAR), $.dataValueInterval
    )))),

    dataValueInterval: $ => seq($.dataValueIntervalFrom, optional($.dataValueIntervalTo)),

    dataValueIntervalFrom: $ => choice($.literal, $.cobolWord),

    dataValueIntervalTo: $ => seq(choice(THROUGH, THRU), $.literal),

    dataWithLowerBoundsClause: $ => seq(optional(WITH), LOWER, BOUNDS),

    // --- procedure division --------------------------------------------------------------------

    procedureDivision: $ => seq(
      PROCEDURE, DIVISION, optional($.procedureDivisionUsingClause), optional($.procedureDivisionGivingClause), DOT_FS
      , optional($.procedureDeclaratives), $.procedureDivisionBody),

    procedureDivisionUsingClause: $ => seq(choice(USING, CHAINING), repeat1($.procedureDivisionUsingParameter)),

    procedureDivisionGivingClause: $ => seq(choice(GIVING, RETURNING), $.dataName),

    procedureDivisionUsingParameter: $ => choice(
      $.procedureDivisionByReferencePhrase,
      $.procedureDivisionByValuePhrase),

    procedureDivisionByReferencePhrase: $ => prec.left(seq(optional(seq(optional(BY), REFERENCE)), repeat1($.procedureDivisionByReference))),

    procedureDivisionByReference: $ => choice(seq(optional(OPTIONAL), choice($.identifier, $.fileName)), ANY),

    procedureDivisionByValuePhrase: $ => prec.left(seq(
      optional(BY), VALUE, repeat1($.procedureDivisionByValue)
    )),

    procedureDivisionByValue: $ => choice($.identifier, $.literal, ANY),

    procedureDeclaratives: $ => seq(
      DECLARATIVES, DOT_FS, repeat1($.procedureDeclarative), END, DECLARATIVES, DOT_FS),

    procedureDeclarative: $ => seq(
      $.procedureSectionHeader, DOT_FS, $.useStatement, DOT_FS, $.paragraphs),

    procedureSectionHeader: $ => seq($.sectionName, SECTION, optional($.integerLiteral)),

    procedureDivisionBody: $ => seq($.paragraphs, repeat($.procedureSection)),

    // -- procedure section ----------------------------------

    procedureSection: $ => seq($.procedureSectionHeader, DOT_FS, $.paragraphs),

    paragraphs: $ => prec.left(repeat1(choice($.sentence, $.paragraph))),

    paragraph: $ => prec.left(seq($.paragraphName, optional(DOT_FS), choice($.alteredGoTo, repeat($.sentence)))),

    sentence: $ => seq(repeat($.statement), DOT_FS),

    statement: $ => choice(
      $.acceptStatement,
      $.addStatement,
      $.alterStatement,
      $.callStatement,
      $.cancelStatement,
      $.closeStatement,
      $.computeStatement,
      $.continueStatement,
      $.deleteStatement,
      $.disableStatement,
      $.displayStatement,
      $.divideStatement,
      $.enableStatement,
      $.entryStatement,
      $.evaluateStatement,
      $.exhibitStatement,
      $.execCicsStatement,
      $.execSqlStatement,
      $.execSqlImsStatement,
      $.exitStatement,
      $.generateStatement,
      $.gobackStatement,
      $.goToStatement,
      $.ifStatement,
      $.initializeStatement,
      $.initiateStatement,
      $.inspectStatement,
      $.mergeStatement,
      $.moveStatement,
      $.multiplyStatement,
      $.nextSentenceStatement,
      $.openStatement,
      $.performStatement,
      $.purgeStatement,
      $.readStatement,
      $.receiveStatement,
      $.releaseStatement,
      $.returnStatement,
      $.rewriteStatement,
      $.searchStatement,
      $.sendStatement,
      $.setStatement,
      $.sortStatement,
      $.startStatement,
      $.stopStatement,
      $.stringStatement,
      $.subtractStatement,
      $.terminateStatement,
      $.unstringStatement,
      $.writeStatement
    ),

    // accept $.statement
    acceptStatement: $ => prec.left(seq(
      ACCEPT, $.identifier, optional(choice(
        $.acceptFromDateStatement,
        $.acceptFromEscapeKeyStatement,
        $.acceptFromMnemonicStatement,
        $.acceptMessageCountStatement
      )), optional($.onExceptionClause), optional($.notOnExceptionClause), optional(END_ACCEPT),
    )),
    acceptFromDateStatement: $ => token(seq(
      FROM, choice(
        seq(DATE, optional(YYYYMMDD)),
        seq(DAY, optional(YYYYDDD)),
        DAY_OF_WEEK,
        TIME,
        TIMER,
        seq(TODAYS_DATE, optional(MMDDYYYY)),
        TODAYS_NAME,
        YEAR,
        YYYYMMDD,
        YYYYDDD
      ),
    )),
    acceptFromMnemonicStatement: $ => seq(FROM, $.mnemonicName),
    acceptFromEscapeKeyStatement: $ => token(seq(FROM, ESCAPE, KEY)),
    acceptMessageCountStatement: $ => token(seq(optional(MESSAGE), COUNT)),

    // add $.statement
    addStatement: $ => prec.left(seq(
      ADD, choice(
        $.addToStatement,
        $.addToGivingStatement,
        $.addCorrespondingStatement
      ), optional($.onSizeErrorPhrase), optional($.notOnSizeErrorPhrase), optional(END_ADD),
    )),
    addToStatement: $ => seq(repeat1($.addFrom), TO, repeat1($.addTo)),
    addToGivingStatement: $ => seq(
      repeat1($.addFrom), optional(seq(TO, repeat1($.addToGiving))), GIVING, repeat1($.addGiving),
    ),
    addCorrespondingStatement: $ => seq(choice(CORRESPONDING, CORR), $.identifier, TO, $.addTo),
    addFrom: $ => choice($.identifier, $.literal),
    addTo: $ => seq($.identifier, optional(ROUNDED)),
    addToGiving: $ => choice($.identifier, $.literal),
    addGiving: $ => seq($.identifier, optional(ROUNDED)),

    // altered go to $.statement
    alteredGoTo: $ => seq(GO, optional(TO), DOT_FS),

    // alter $.statement
    alterStatement: $ => seq(ALTER, repeat1($.alterProceedTo)),
    alterProceedTo: $ => seq($.procedureName, TO, optional(seq(PROCEED, TO)), $.procedureName),

    // call $.statement
    callStatement: $ => prec.left(seq(
      CALL, choice($.identifier, $.literal), optional($.callUsingPhrase), optional($.callGivingPhrase), optional($.onOverflowPhrase),
      optional($.onExceptionClause), optional($.notOnExceptionClause), optional(END_CALL),
    )),
    callUsingPhrase: $ => prec.left(seq(USING, repeat1($.callUsingParameter))),
    callUsingParameter: $ => seq(
      $.callByReferencePhrase,
      $.callByValuePhrase,
      $.callByContentPhrase,
    ),
    callByReferencePhrase: $ => seq(optional(seq(optional(BY), REFERENCE)), repeat1($.callByReference)),
    callByReference: $ => seq(
      choice(
        choice(
          seq(optional(choice(seq(ADDRESS, OF), INTEGER, STRING)), $.identifier),
          $.literal,
          $.fileName,
        ),
        OMITTED,
      ),
    ),
    callByValuePhrase: $ => seq(optional(BY), VALUE, repeat1($.callByValue)),
    callByValue: $ => seq(optional(seq(choice(seq(ADDRESS, OF), LENGTH), optional(OF))), choice($.identifier, $.literal)),
    callByContentPhrase: $ => prec.left(seq(optional(BY), CONTENT, repeat1($.callByContent))),
    callByContent: $ => choice(
      seq(optional(seq(choice(seq(ADDRESS, OF), LENGTH), optional(OF))), $.identifier),
      $.literal,
      OMITTED,
    ),
    callGivingPhrase: $ => seq(choice(GIVING, RETURNING), $.identifier),

    // cancel $.statement
    cancelStatement: $ => seq(CANCEL, repeat1($.cancelCall)),
    cancelCall: $ => choice(
      seq($.libraryName, choice(BYTITLE, BYFUNCTION)),
      $.identifier,
      $.literal,
    ),

    // close $.statement
    closeStatement: $ => seq(CLOSE, repeat1($.closeFile)),
    closeFile: $ => prec.left(seq(
      $.fileName, optional(choice(
        $.closeReelUnitStatement,
        $.closeRelativeStatement,
        $.closePortFileIOStatement
      )),
    )),
    closeReelUnitStatement: $ => token(seq(choice(REEL, UNIT), optional(seq(optional(FOR), REMOVAL)), optional(seq(
      optional(WITH), choice(seq(NO, REWIND), LOCK)
    )))),
    closeRelativeStatement: $ => token(seq(optional(WITH), choice(seq(NO, REWIND), LOCK))),
    closePortFileIOStatement: $ => seq(choice(seq(optional(WITH), NO, WAIT), seq(WITH, WAIT)), optional(seq(
      USING, repeat1($.closePortFileIOUsing)
    ))),
    closePortFileIOUsing: $ => choice(
      $.closePortFileIOUsingCloseDisposition,
      $.closePortFileIOUsingAssociatedData,
      $.closePortFileIOUsingAssociatedDataLength,
    ),
    closePortFileIOUsingCloseDisposition: $ => token(seq(
      CLOSE_DISPOSITION, optional(OF), choice(ABORT, ORDERLY),
    )),
    closePortFileIOUsingAssociatedData: $ => seq(
      ASSOCIATED_DATA, choice($.identifier, $.integerLiteral)),
    closePortFileIOUsingAssociatedDataLength: $ => seq(
      ASSOCIATED_DATA_LENGTH, optional(OF), choice($.identifier, $.integerLiteral)),

    // compute $.statement
    computeStatement: $ => prec.left(seq(
      COMPUTE, repeat1($.computeStore), choice(EQUALCHAR, EQUAL), $.arithmeticExpression, optional($.onSizeErrorPhrase),
      optional($.notOnSizeErrorPhrase), optional(END_COMPUTE),
    )),
    computeStore: $ => seq($.identifier, optional(ROUNDED)),

    // continue $.statement
    continueStatement: $ => token(CONTINUE),

    // delete $.statement
    deleteStatement: $ => prec.left(seq(
      DELETE, $.fileName, optional(RECORD), optional($.invalidKeyPhrase), optional($.notInvalidKeyPhrase), optional(END_DELETE),
    )),

    // disable $.statement
    disableStatement: $ => seq(
      DISABLE, choice(seq(INPUT, optional(TERMINAL)), seq(I_O, TERMINAL), OUTPUT), $.cdName, optional(WITH), KEY, choice(
        $.identifier,
        $.literal
      )),

    // display $.statement
    displayStatement: $ => prec.left(seq(
      DISPLAY, repeat1($.displayOperand), optional($.displayAt), optional($.displayUpon), optional($.displayWith), optional($.onExceptionClause), optional($.notOnExceptionClause), optional(END_DISPLAY),
    )),
    displayOperand: $ => choice($.identifier, $.literal),
    displayAt: $ => seq(AT, choice($.identifier, $.literal)),
    displayUpon: $ => seq(UPON, choice($.mnemonicName, $.environmentName)),
    displayWith: $ => token(seq(optional(WITH), NO, ADVANCING)),

    // divide $.statement
    divideStatement: $ => prec.left(seq(
      DIVIDE, choice($.identifier, $.literal), choice(
        $.divideIntoStatement,
        $.divideIntoGivingStatement,
        $.divideByGivingStatement
      ), optional($.divideRemainder), optional($.onSizeErrorPhrase), optional($.notOnSizeErrorPhrase), optional(END_DIVIDE),
    )),
    divideIntoStatement: $ => seq(INTO, repeat1($.divideInto)),
    divideIntoGivingStatement: $ => seq(
      INTO, choice($.identifier, $.literal), optional($.divideGivingPhrase)),
    divideByGivingStatement: $ => seq(
      BY, choice($.identifier, $.literal), optional($.divideGivingPhrase)),
    divideGivingPhrase: $ => seq(GIVING, repeat1($.divideGiving)),
    divideInto: $ => seq($.identifier, optional(ROUNDED)),
    divideGiving: $ => seq($.identifier, optional(ROUNDED)),
    divideRemainder: $ => seq(REMAINDER, $.identifier),

    // enable $.statement
    enableStatement: $ => seq(
      ENABLE, choice(seq(INPUT, optional(TERMINAL)), seq(I_O, TERMINAL), OUTPUT), $.cdName, optional(WITH), KEY, choice(
        $.literal,
        $.identifier
      )),

    // entry $.statement
    entryStatement: $ => seq(ENTRY, $.literal, optional(seq(USING, repeat1($.identifier)))),

    // evaluate $.statement
    evaluateStatement: $ => prec.left(seq(
      EVALUATE, $.evaluateSelect, repeat($.evaluateAlsoSelect), repeat($.evaluateWhenPhrase), optional($.evaluateWhenOther), optional(END_EVALUATE)
    )),
    evaluateSelect: $ => prec.left(choice(
      $.identifier,
      $.literal,
      $.arithmeticExpression,
      $.condition,
    )),
    evaluateAlsoSelect: $ => seq(ALSO, $.evaluateSelect),
    evaluateWhenPhrase: $ => prec.left(seq(repeat1($.evaluateWhen), repeat($.statement))),
    evaluateWhen: $ => seq(WHEN, $.evaluateCondition, repeat($.evaluateAlsoCondition)),
    evaluateCondition: $ => choice(
      ANY,
      seq(optional(NOT), $.evaluateValue, optional($.evaluateThrough)),
      $.condition,
      $.booleanLiteral),
    evaluateThrough: $ => seq(choice(THROUGH, THRU), $.evaluateValue),
    evaluateAlsoCondition: $ => seq(ALSO, $.evaluateCondition),
    evaluateWhenOther: $ => prec.left(seq(WHEN, OTHER, repeat($.statement))),
    evaluateValue: $ => choice($.identifier, $.literal, $.arithmeticExpression),

    // exec cics $.statement
    execCicsStatement: $ => prec.left(repeat1(EXECCICSLINE)),

    // exec sql $.statement
    execSqlStatement: $ => prec.left(repeat1(EXECSQLLINE)),

    // exec sql ims $.statement
    execSqlImsStatement: $ => prec.left(repeat1(EXECSQLIMSLINE)),

    // exhibit $.statement
    exhibitStatement: $ => seq(EXHIBIT, optional(NAMED), optional(CHANGED), repeat1($.exhibitOperand)),
    exhibitOperand: $ => seq($.identifier, $.literal),

    // exit $.statement
    exitStatement: $ => token(seq(EXIT, optional(PROGRAM))),

    // generate $.statement
    generateStatement: $ => seq(GENERATE, $.reportName),

    // goback $.statement
    gobackStatement: $ => token(GOBACK),

    // goto $.statement
    goToStatement: $ => seq(
      GO, optional(TO), choice($.goToStatementSimple, $.goToDependingOnStatement),
    ),
    goToStatementSimple: $ => $.procedureName,
    goToDependingOnStatement: $ => seq(
      MORE_LABELS,
      repeat1($.procedureName), optional(seq((DEPENDING, optional(ON), $.identifier)))
    ),

    // if $.statement
    ifStatement: $ => prec.left(seq(IF, $.condition, $.ifThen, optional($.ifElse), optional(END_IF))),
    ifThen: $ => prec.left(seq(optional(THEN), choice(seq(NEXT, SENTENCE), repeat1($.statement)))),
    ifElse: $ => prec.left(seq(ELSE, choice(seq(NEXT, SENTENCE), repeat($.statement)))),

    // initialize $.statement
    initializeStatement: $ => seq(
      INITIALIZE, repeat1($.identifier), optional($.initializeReplacingPhrase)),
    initializeReplacingPhrase: $ => seq(REPLACING, repeat1($.initializeReplacingBy)),
    initializeReplacingBy: $ => seq(choice(
      ALPHABETIC,
      ALPHANUMERIC,
      ALPHANUMERIC_EDITED,
      NATIONAL,
      NATIONAL_EDITED,
      NUMERIC,
      NUMERIC_EDITED,
      DBCS,
      EGCS
    ), optional(DATA), BY, choice($.identifier, $.literal)),

    // initiate $.statement
    initiateStatement: $ => seq(INITIATE, repeat1($.reportName)),

    // inspect $.statement
    inspectStatement: $ => seq(
      INSPECT, $.identifier, choice(
        $.inspectTallyingPhrase,
        $.inspectReplacingPhrase,
        $.inspectTallyingReplacingPhrase,
        $.inspectConvertingPhrase
      )),
    inspectTallyingPhrase: $ => seq(TALLYING, repeat1($.inspectFor)),
    inspectReplacingPhrase: $ => seq(
      REPLACING, repeat1(choice(
        $.inspectReplacingCharacters,
        $.inspectReplacingAllLeadings
      ))),
    inspectTallyingReplacingPhrase: $ => seq(
      TALLYING, repeat1($.inspectFor), repeat1($.inspectReplacingPhrase)),
    inspectConvertingPhrase: $ => seq(
      CONVERTING, choice($.identifier, $.literal), $.inspectTo, repeat($.inspectBeforeAfter)),
    inspectFor: $ => seq(
      $.identifier, FOR, repeat1(choice($.inspectCharacters, $.inspectAllLeadings))),
    inspectCharacters: $ => seq(choice(CHARACTER, CHARACTERS), repeat($.inspectBeforeAfter)),
    inspectReplacingCharacters: $ => seq(choice(CHARACTER, CHARACTERS), $.inspectBy, repeat($.inspectBeforeAfter)),
    inspectAllLeadings: $ => prec.left(seq(choice(ALL, LEADING), repeat1($.inspectAllLeading))),
    inspectReplacingAllLeadings: $ => prec.left(seq(choice(ALL, LEADING, FIRST), repeat1($.inspectReplacingAllLeading))),
    inspectAllLeading: $ => seq(choice($.identifier, $.literal), repeat($.inspectBeforeAfter)),
    inspectReplacingAllLeading: $ => seq(choice($.identifier, $.literal), $.inspectBy, repeat($.inspectBeforeAfter)),
    inspectBy: $ => seq(BY, choice($.identifier, $.literal)),
    inspectTo: $ => seq(TO, choice($.identifier, $.literal)),
    inspectBeforeAfter: $ => seq(choice(BEFORE, AFTER), optional(INITIAL), choice(
      $.identifier,
      $.literal
    )),

    // merge $.statement
    mergeStatement: $ => prec.left(seq(
      MERGE, $.fileName, repeat1($.mergeOnKeyClause), optional($.mergeCollatingSequencePhrase), repeat($.mergeUsing),
      optional($.mergeOutputProcedurePhrase), repeat($.mergeGivingPhrase),
    )),
    mergeOnKeyClause: $ => seq(
      optional(ON), choice(ASCENDING, DESCENDING), optional(KEY), repeat1($.qualifiedDataName)),
    mergeCollatingSequencePhrase: $ => seq(
      optional(COLLATING), SEQUENCE, optional(IS), repeat1($.alphabetName), optional($.mergeCollatingAlphanumeric), optional($.mergeCollatingNational)),
    mergeCollatingAlphanumeric: $ => seq(optional(FOR), ALPHANUMERIC, IS, $.alphabetName),
    mergeCollatingNational: $ => seq(optional(FOR), NATIONAL, optional(IS), $.alphabetName),
    mergeUsing: $ => seq(USING, repeat1($.fileName)),
    mergeOutputProcedurePhrase: $ => seq(
      OUTPUT, PROCEDURE, optional(IS), $.procedureName, optional($.mergeOutputThrough)),
    mergeOutputThrough: $ => seq(choice(THROUGH, THRU), $.procedureName),
    mergeGivingPhrase: $ => seq(GIVING, repeat1($.mergeGiving)),
    mergeGiving: $ => prec.left(seq(
      $.fileName, optional(choice(
        LOCK,
        SAVE,
        seq(NO, REWIND),
        CRUNCH,
        RELEASE,
        seq(WITH, REMOVE, CRUNCH),
      )),
    )),

    // move $.statement
    moveStatement: $ => seq(
      MOVE, optional(ALL), choice($.moveToStatement, $.moveCorrespondingToStatement)),
    moveToStatement: $ => seq($.moveToSendingArea, TO, repeat1($.identifier)),
    moveToSendingArea: $ => choice($.identifier, $.literal),
    moveCorrespondingToStatement: $ => seq(choice(CORRESPONDING, CORR), $.moveCorrespondingToSendingArea, TO, repeat1($.identifier)),
    moveCorrespondingToSendingArea: $ => $.identifier,

    // multiply $.statement
    multiplyStatement: $ => prec.left(seq(
      MULTIPLY, choice($.identifier, $.literal), BY, choice(
        $.multiplyRegular,
        $.multiplyGiving
      ), optional($.onSizeErrorPhrase), optional($.notOnSizeErrorPhrase), optional(END_MULTIPLY),
    )),
    multiplyRegular: $ => repeat1($.multiplyRegularOperand),
    multiplyRegularOperand: $ => seq($.identifier, optional(ROUNDED)),
    multiplyGiving: $ => seq(
      $.multiplyGivingOperand, GIVING, repeat1($.multiplyGivingResult)),
    multiplyGivingOperand: $ => choice($.identifier, $.literal),
    multiplyGivingResult: $ => seq($.identifier, optional(ROUNDED)),

    // next sentence
    nextSentenceStatement: $ => token(seq(NEXT, SENTENCE)),

    // open $.statement
    openStatement: $ => seq(
      OPEN, repeat1(choice(
        $.openInputStatement,
        $.openOutputStatement,
        $.openIOStatement,
        $.openExtendStatement
      ))),
    openInputStatement: $ => seq(INPUT, repeat1($.openInput)),
    openInput: $ => prec.left(seq($.fileName, optional(choice(REVERSED, seq(optional(WITH), NO, REWIND))))),
    openOutputStatement: $ => seq(OUTPUT, repeat1($.openOutput)),
    openOutput: $ => prec.left(seq($.fileName, optional(seq(optional(WITH), NO, REWIND)))),
    openIOStatement: $ => seq(I_O, repeat1($.fileName)),
    openExtendStatement: $ => seq(EXTEND, repeat1($.fileName)),

    // perform $.statement
    performStatement: $ => seq(
      PERFORM, choice($.performInlineStatement, $.performProcedureStatement)),
    performInlineStatement: $ => seq(optional($.performType), repeat($.statement), END_PERFORM),
    performProcedureStatement: $ => prec.left(seq(
      $.procedureName, optional(seq(choice(THROUGH, THRU), $.procedureName)), optional($.performType),
    )),
    performType: $ => choice($.performTimes, $.performUntil, $.performVarying),
    performTimes: $ => seq(choice($.identifier, $.integerLiteral), TIMES),
    performUntil: $ => seq(optional($.performTestClause), UNTIL, $.condition),
    performVarying: $ => choice(
      seq($.performTestClause, $.performVaryingClause),
      seq($.performVaryingClause, optional($.performTestClause))),
    performVaryingClause: $ => seq(
      VARYING, $.performVaryingPhrase, repeat($.performAfter)),
    performVaryingPhrase: $ => seq(choice($.identifier, $.literal), $.performFrom, $.performBy, $.performUntil),
    performAfter: $ => seq(AFTER, $.performVaryingPhrase),
    performFrom: $ => seq(FROM, choice($.identifier, $.literal, $.arithmeticExpression)),
    performBy: $ => seq(BY, choice($.identifier, $.literal, $.arithmeticExpression)),
    performTestClause: $ => token(seq(optional(WITH), TEST, choice(BEFORE, AFTER))),

    // purge $.statement
    purgeStatement: $ => seq(PURGE, repeat1($.cdName)),

    // read $.statement
    readStatement: $ => prec.left(seq(
      READ, $.fileName, optional(NEXT), optional(RECORD), optional($.readInto), optional($.readWith), optional($.readKey), optional($.invalidKeyPhrase), optional($.notInvalidKeyPhrase),
      optional($.atEndPhrase), optional($.notAtEndPhrase), optional(END_READ))),
    readInto: $ => seq(INTO, $.identifier),
    readWith: $ => token(seq(optional(WITH), choice(seq(choice(KEPT, NO), LOCK), WAIT))),
    readKey: $ => seq(KEY, optional(IS), $.qualifiedDataName),

    // receive $.statement
    receiveStatement: $ => prec.left(seq(
      RECEIVE, choice($.receiveFromStatement, $.receiveIntoStatement), optional($.onExceptionClause), optional($.notOnExceptionClause), optional(END_RECEIVE),
    )),
    receiveFromStatement: $ => seq(
      $.dataName, FROM, $.receiveFrom, repeat(choice(
        $.receiveBefore,
        $.receiveWith,
        $.receiveThread,
        $.receiveSize,
        $.receiveStatus
      ))),
    receiveFrom: $ => choice(seq(THREAD, $.dataName), seq(LAST, THREAD), seq(ANY, THREAD)),
    receiveIntoStatement: $ => seq(
      $.cdName, choice(MESSAGE, SEGMENT), optional(INTO), $.identifier, optional($.receiveNoData), optional($.receiveWithData)),
    receiveNoData: $ => prec.left(seq(NO, DATA, repeat($.statement))),
    receiveWithData: $ => prec.left(seq(WITH, DATA, repeat($.statement))),
    receiveBefore: $ => seq(BEFORE, optional(TIME), choice($.numericLiteral, $.identifier)),
    receiveWith: $ => token(seq(optional(WITH), NO, WAIT)),
    receiveThread: $ => seq(THREAD, optional(IN), $.dataName),
    receiveSize: $ => seq(SIZE, optional(IN), choice($.numericLiteral, $.identifier)),
    receiveStatus: $ => seq(STATUS, optional(IN), $.identifier),

    // release $.statement
    releaseStatement: $ => seq(RELEASE, $.recordName, optional(seq(FROM, $.qualifiedDataName))),

    // return $.statement
    returnStatement: $ => prec.left(seq(
      RETURN, $.fileName, optional(RECORD), optional($.returnInto), $.atEndPhrase, optional($.notAtEndPhrase), optional(END_RETURN),
    )),
    returnInto: $ => seq(INTO, $.qualifiedDataName),

    // rewrite $.statement
    rewriteStatement: $ => prec.left(seq(
      REWRITE, $.recordName, optional($.rewriteFrom), optional($.invalidKeyPhrase), optional($.notInvalidKeyPhrase), optional(END_REWRITE),
    )),
    rewriteFrom: $ => seq(FROM, $.identifier),

    // search $.statement
    searchStatement: $ => prec.left(seq(
      SEARCH, optional(ALL), $.qualifiedDataName, optional($.searchVarying), optional($.atEndPhrase), repeat1($.searchWhen), optional(END_SEARCH),
    )),
    searchVarying: $ => seq(VARYING, $.qualifiedDataName),
    searchWhen: $ => prec.left(seq(WHEN, $.condition, choice(seq(NEXT, SENTENCE), repeat($.statement)))),

    // send $.statement
    sendStatement: $ => prec.left(seq(
      SEND, choice($.sendStatementSync, $.sendStatementAsync), optional($.onExceptionClause), optional($.notOnExceptionClause),
    )),
    sendStatementSync: $ => prec.left(seq(choice($.identifier, $.literal), optional($.sendFromPhrase), optional($.sendWithPhrase), optional($.sendReplacingPhrase), optional($.sendAdvancingPhrase))),
    sendStatementAsync: $ => seq(TO, choice(TOP, BOTTOM), $.identifier),
    sendFromPhrase: $ => seq(FROM, $.identifier),
    sendWithPhrase: $ => seq(WITH, choice(EGI, EMI, ESI, $.identifier)),
    sendReplacingPhrase: $ => token(seq(REPLACING, optional(LINE))),
    sendAdvancingPhrase: $ => seq(choice(BEFORE, AFTER), optional(ADVANCING), choice(
      $.sendAdvancingPage,
      $.sendAdvancingLines,
      $.sendAdvancingMnemonic
    )),
    sendAdvancingPage: $ => token(PAGE),
    sendAdvancingLines: $ => seq(choice($.identifier, $.literal), optional(choice(LINE, LINES))),
    sendAdvancingMnemonic: $ => $.mnemonicName,

    // set $.statement
    setStatement: $ => seq(SET, choice(repeat1($.setToStatement), $.setUpDownByStatement)),
    setToStatement: $ => prec.left(seq(repeat1($.setTo), TO, repeat1($.setToValue))),
    setUpDownByStatement: $ => seq(repeat1($.setTo), choice(seq(UP, BY), seq(DOWN, BY)), $.setByValue),
    setTo: $ => $.identifier,
    setToValue: $ => choice(
      ON,
      OFF,
      seq(ENTRY, choice($.identifier, $.literal)),
      $.identifier,
      $.literal),
    setByValue: $ => choice($.identifier, $.literal),

    // sort $.statement
    sortStatement: $ => prec.left(seq(
      SORT, $.fileName, repeat1($.sortOnKeyClause), optional($.sortDuplicatesPhrase), optional($.sortCollatingSequencePhrase),
      optional($.sortInputProcedurePhrase), repeat($.sortUsing), optional($.sortOutputProcedurePhrase), repeat($.sortGivingPhrase),
    )),
    sortOnKeyClause: $ => seq(
      optional(ON), choice(ASCENDING, DESCENDING), optional(KEY), repeat1($.qualifiedDataName)),
    sortDuplicatesPhrase: $ => token(seq(optional(WITH), DUPLICATES, optional(IN), optional(ORDER))),
    sortCollatingSequencePhrase: $ => seq(
      optional(COLLATING), SEQUENCE, optional(IS), repeat1($.alphabetName), optional($.sortCollatingAlphanumeric), optional($.sortCollatingNational)),
    sortCollatingAlphanumeric: $ => seq(optional(FOR), ALPHANUMERIC, IS, $.alphabetName),
    sortCollatingNational: $ => seq(optional(FOR), NATIONAL, optional(IS), $.alphabetName),
    sortInputProcedurePhrase: $ => seq(
      INPUT, PROCEDURE, optional(IS), $.procedureName, optional($.sortInputThrough)),
    sortInputThrough: $ => seq(choice(THROUGH, THRU), $.procedureName),
    sortUsing: $ => seq(USING, repeat1($.fileName)),
    sortOutputProcedurePhrase: $ => seq(
      OUTPUT, PROCEDURE, optional(IS), $.procedureName, optional($.sortOutputThrough)),
    sortOutputThrough: $ => seq(choice(THROUGH, THRU), $.procedureName),
    sortGivingPhrase: $ => seq(GIVING, repeat1($.sortGiving)),
    sortGiving: $ => prec.left(seq(
      $.fileName, optional(choice(
        LOCK,
        SAVE,
        seq(NO, REWIND),
        CRUNCH,
        RELEASE,
        seq(WITH, REMOVE, CRUNCH)
      )),
    )),

    // start $.statement
    startStatement: $ => prec.left(seq(
      START, $.fileName, optional($.startKey), optional($.invalidKeyPhrase), optional($.notInvalidKeyPhrase), optional(END_START),
    )),
    startKey: $ => seq(
      KEY, optional(IS), choice(
        seq(EQUAL, optional(TO)),
        EQUALCHAR,
        seq(GREATER, optional(THAN)),
        MORETHANCHAR,
        seq(NOT, LESS, optional(THAN)),
        seq(NOT, LESSTHANCHAR),
        seq(GREATER, optional(THAN), OR, EQUAL, optional(TO)),
        MORETHANOREQUAL,
      ), $.qualifiedDataName),

    // stop $.statement
    stopStatement: $ => seq(STOP, choice(RUN, $.literal, $.stopStatementGiving)),
    stopStatementGiving: $ => seq(
      RUN, choice(GIVING, RETURNING), choice($.identifier, $.integerLiteral)),

    // string statement
    stringStatement: $ => prec.left(seq(
      STRING, repeat1($.stringSendingPhrase), $.stringIntoPhrase, optional($.stringWithPointerPhrase), optional($.onOverflowPhrase),
      optional($.notOnOverflowPhrase), optional(END_STRING),
    )),
    stringSendingPhrase: $ => seq(
      $.stringSending, repeat(seq(optional(COMMACHAR), $.stringSending)), choice(
        $.stringDelimitedByPhrase,
        $.stringForPhrase
      ),
    ),
    stringSending: $ => choice($.identifier, $.literal),
    stringDelimitedByPhrase: $ => seq(
      DELIMITED, optional(BY), choice(SIZE, $.identifier, $.literal),
    ),
    stringForPhrase: $ => seq(FOR, choice($.identifier, $.literal)),
    stringIntoPhrase: $ => seq(INTO, $.identifier),
    stringWithPointerPhrase: $ => seq(optional(WITH), POINTER, $.qualifiedDataName),

    // subtract statement
    subtractStatement: $ => prec.left(seq(
      SUBTRACT, choice(
        $.subtractFromStatement,
        $.subtractFromGivingStatement,
        $.subtractCorrespondingStatement
      ), optional($.onSizeErrorPhrase), optional($.notOnSizeErrorPhrase), optional(END_SUBTRACT),
    )),
    subtractFromStatement: $ => seq(
      repeat1($.subtractSubtrahend), FROM, repeat1($.subtractMinuend),
    ),
    subtractFromGivingStatement: $ => seq(
      repeat1($.subtractSubtrahend), FROM, $.subtractMinuendGiving, GIVING, repeat1($.subtractGiving),
    ),
    subtractCorrespondingStatement: $ => seq(
      choice(CORRESPONDING, CORR), $.qualifiedDataName, FROM, $.subtractMinuendCorresponding,
    ),
    subtractSubtrahend: $ => choice($.identifier, $.literal),
    subtractMinuend: $ => seq($.identifier, optional(ROUNDED)),
    subtractMinuendGiving: $ => choice($.identifier, $.literal),
    subtractGiving: $ => seq($.identifier, optional(ROUNDED)),
    subtractMinuendCorresponding: $ => seq($.qualifiedDataName, optional(ROUNDED)),

    // terminate statement
    terminateStatement: $ => seq(TERMINATE, $.reportName),

    // unstring statement
    unstringStatement: $ => prec.left(seq(
      UNSTRING, $.unstringSendingPhrase, $.unstringIntoPhrase, optional($.unstringWithPointerPhrase),
      optional($.unstringTallyingPhrase), optional($.onOverflowPhrase), optional($.notOnOverflowPhrase), optional(END_UNSTRING),
    )),
    unstringSendingPhrase: $ => seq(
      $.identifier, optional(seq($.unstringDelimitedByPhrase, repeat($.unstringOrAllPhrase))),
    ),
    unstringDelimitedByPhrase: $ => seq(
      DELIMITED, optional(BY), optional(ALL), choice($.identifier, $.literal),
    ),
    unstringOrAllPhrase: $ => seq(OR, optional(ALL), choice($.identifier, $.literal)),
    unstringIntoPhrase: $ => seq(INTO, repeat1($.unstringInto)),
    unstringInto: $ => seq($.identifier, optional($.unstringDelimiterIn), optional($.unstringCountIn)),
    unstringDelimiterIn: $ => seq(DELIMITER, optional(IN), $.identifier),
    unstringCountIn: $ => seq(COUNT, optional(IN), $.identifier),
    unstringWithPointerPhrase: $ => seq(optional(WITH), POINTER, $.qualifiedDataName),
    unstringTallyingPhrase: $ => seq(TALLYING, optional(IN), $.qualifiedDataName),

    // use statement
    useStatement: $ => seq(USE, choice($.useAfterClause, $.useDebugClause)),
    useAfterClause: $ => seq(
      optional(GLOBAL), AFTER, optional(STANDARD), choice(EXCEPTION, ERROR), PROCEDURE, optional(ON), $.useAfterOn,
    ),
    useAfterOn: $ => choice(INPUT, OUTPUT, I_O, EXTEND, repeat1($.fileName)),
    useDebugClause: $ => seq(optional(FOR), DEBUGGING, optional(ON), repeat1($.useDebugOn)),
    useDebugOn: $ => choice(
      seq(ALL, PROCEDURES),
      seq(ALL, optional(REFERENCES), optional(OF), $.identifier),
      $.procedureName,
      $.fileName,
    ),

    // write statement
    writeStatement: $ => prec.left(seq(
      WRITE, $.recordName, optional($.writeFromPhrase), optional($.writeAdvancingPhrase), optional($.writeAtEndOfPagePhrase),
      optional($.writeNotAtEndOfPagePhrase), optional($.invalidKeyPhrase), optional($.notInvalidKeyPhrase), optional(END_WRITE),
    )),
    writeFromPhrase: $ => seq(FROM, choice($.identifier, $.literal)),
    writeAdvancingPhrase: $ => seq(choice(BEFORE, AFTER), optional(ADVANCING), choice(
      $.writeAdvancingPage,
      $.writeAdvancingLines,
      $.writeAdvancingMnemonic
    )),
    writeAdvancingPage: $ => token(PAGE),
    writeAdvancingLines: $ => seq(choice($.identifier, $.literal), optional(choice(LINE, LINES))),
    writeAdvancingMnemonic: $ => $.mnemonicName,
    writeAtEndOfPagePhrase: $ => prec.left(seq(optional(AT), choice(END_OF_PAGE, EOP), repeat($.statement))),
    writeNotAtEndOfPagePhrase: $ => prec.left(seq(
      NOT, optional(AT), choice(END_OF_PAGE, EOP), repeat($.statement),
    )),

    // statement phrases ----------------------------------
    atEndPhrase: $ => prec.left(seq(optional(AT), END, repeat($.statement))),
    notAtEndPhrase: $ => prec.left(seq(NOT, optional(AT), END, repeat($.statement))),
    invalidKeyPhrase: $ => prec.left(seq(INVALID, optional(KEY), repeat($.statement))),
    notInvalidKeyPhrase: $ => prec.left(seq(NOT, INVALID, optional(KEY), repeat($.statement))),
    onOverflowPhrase: $ => prec.left(seq(optional(ON), OVERFLOW, repeat($.statement))),
    notOnOverflowPhrase: $ => prec.left(seq(NOT, optional(ON), OVERFLOW, repeat($.statement))),
    onSizeErrorPhrase: $ => prec.left(seq(optional(ON), SIZE, ERROR, repeat($.statement))),
    notOnSizeErrorPhrase: $ => prec.left(seq(NOT, optional(ON), SIZE, ERROR, repeat($.statement))),

    // statement clauses ----------------------------------
    onExceptionClause: $ => prec.left(seq(optional(ON), EXCEPTION, repeat($.statement))),
    notOnExceptionClause: $ => prec.left(seq(NOT, optional(ON), EXCEPTION, repeat($.statement))),

    // arithmetic expression ----------------------------------
    arithmeticExpression: $ => prec.left(seq($.multDivs, repeat($.plusMinus))),
    plusMinus: $ => seq(choice(PLUSCHAR, MINUSCHAR), $.multDivs),
    multDivs: $ => seq($.powers, repeat($.multDiv)),
    multDiv: $ => seq(choice(ASTERISKCHAR, SLASHCHAR), $.powers),
    powers: $ => seq(optional(choice(PLUSCHAR, MINUSCHAR)), $.basis, $.power),
    power: $ => seq(DOUBLEASTERISKCHAR, $.basis),
    basis: $ => choice(
      seq(LPARENCHAR, $.arithmeticExpression, RPARENCHAR),
      $.identifier,
      $.literal,
    ),
    // condition ----------------------------------
    condition: $ => seq($.combinableCondition, repeat($.andOrCondition)),
    andOrCondition: $ => prec.left(seq(choice(AND, OR), choice($.combinableCondition, repeat1($.abbreviation)))),
    combinableCondition: $ => seq(optional(NOT), $.simpleCondition),
    simpleCondition: $ => choice(
      seq(LPARENCHAR, $.condition, RPARENCHAR),
      $.relationCondition,
      $.classCondition,
      $.conditionNameReference
    ),
    classCondition: $ => seq(
      $.identifier, optional(IS), optional(NOT), choice(
        NUMERIC,
        ALPHABETIC,
        ALPHABETIC_LOWER,
        ALPHABETIC_UPPER,
        DBCS,
        KANJI,
        $.className
      )
    ),
    conditionNameReference: $ => seq(
      $.conditionName, choice(
        seq(repeat($.inData), optional($.inFile), repeat($.conditionNameSubscriptReference)),
        repeat($.inMnemonic),
      )
    ),
    conditionNameSubscriptReference: $ => seq(
      LPARENCHAR, $.subscript, repeat((optional(COMMACHAR), $.subscript)), RPARENCHAR,
    ),

    // relation ----------------------------------
    relationCondition: $ => choice(
      $.relationSignCondition,
      $.relationArithmeticComparison,
      $.relationCombinedComparison,
    ),

    relationSignCondition: $ =>
      seq($.arithmeticExpression, optional(IS), optional(NOT), choice(POSITIVE, NEGATIVE, ZERO)),

    relationArithmeticComparison: $ =>
      seq($.arithmeticExpression, $.relationalOperator, $.arithmeticExpression),

    relationCombinedComparison: $ =>
      seq($.arithmeticExpression, $.relationalOperator, LPARENCHAR, $.relationCombinedCondition, RPARENCHAR),

    relationCombinedCondition: $ =>
      seq($.arithmeticExpression, repeat1(seq(choice(AND, OR), $.arithmeticExpression))),

    relationalOperator: $ => token(seq(
      optional(choice(IS, ARE)),
      choice(
        seq(optional(NOT), choice(
          seq(GREATER, optional(THAN)),
          MORETHANCHAR,
          seq(LESS, optional(THAN)),
          LESSTHANCHAR,
          seq(EQUAL, optional(TO)),
          EQUALCHAR,
        )),
        NOTEQUALCHAR,
        seq(GREATER, optional(THAN), OR, EQUAL, optional(TO)),
        MORETHANOREQUAL,
        seq(LESS, optional(THAN), OR, EQUAL, optional(TO)),
        LESSTHANOREQUAL,
      ),
    )),
    abbreviation: $ => prec.left(
      seq(optional(NOT), optional($.relationalOperator), choice(
        $.arithmeticExpression,
        seq(LPARENCHAR, $.arithmeticExpression, $.abbreviation, RPARENCHAR),
      )),
    ),

    // identifier ----------------------------------
    identifier: $ => choice($.qualifiedDataName, $.tableCall, $.functionCall, $.specialRegister),
    tableCall: $ => prec.left(seq(
      $.qualifiedDataName,
      repeat(
        seq(LPARENCHAR, $.subscript, repeat(seq(optional(COMMACHAR), $.subscript)), RPARENCHAR),
      ),
      optional($.referenceModifier),
    )),
    functionCall: $ => prec.left(seq(
      FUNCTION,
      $.functionName,
      repeat(
        seq(LPARENCHAR, $.argument, repeat(seq(optional(COMMACHAR), $.argument)), RPARENCHAR),
      ),
      optional($.referenceModifier),
    )),
    referenceModifier: $ => seq(LPARENCHAR, $.characterPosition, COLONCHAR, optional($.length), RPARENCHAR),
    characterPosition: $ => $.arithmeticExpression,
    length: $ => $.arithmeticExpression,
    subscript: $ => prec.left(choice(
      ALL,
      $.integerLiteral,
      seq($.qualifiedDataName, optional($.integerLiteral)),
      seq($.indexName, optional($.integerLiteral)),
      $.arithmeticExpression
    )),
    argument: $ => prec.left(choice(
      $.literal,
      $.identifier,
      seq($.qualifiedDataName, optional($.integerLiteral)),
      seq($.indexName, optional($.integerLiteral)),
      $.arithmeticExpression,
    )),
    // qualified data name ----------------------------------
    qualifiedDataName: $ => choice(
      $.qualifiedDataNameFormat1,
      $.qualifiedDataNameFormat2,
      $.qualifiedDataNameFormat3,
      $.qualifiedDataNameFormat4
    ),
    qualifiedDataNameFormat1: $ => prec.left(seq(
      choice($.dataName, $.conditionName),
      optional(
        choice(
          seq(repeat1($.qualifiedInData), optional($.inFile)),
          $.inFile
        ),
      ),
    )),
    qualifiedDataNameFormat2: $ => prec(6, seq($.paragraphName, $.inSection)),
    qualifiedDataNameFormat3: $ => seq($.textName, $.inLibrary),
    qualifiedDataNameFormat4: $ => seq(LINAGE_COUNTER, $.inFile),
    qualifiedInData: $ => choice($.inData, $.inTable),
    // in ----------------------------------
    inData: $ => seq(choice(IN, OF), $.dataName),
    inFile: $ => seq(choice(IN, OF), $.fileName),
    inMnemonic: $ => seq(choice(IN, OF), $.mnemonicName),
    inSection: $ => seq(choice(IN, OF), $.sectionName),
    inLibrary: $ => seq(choice(IN, OF), $.libraryName),
    inTable: $ => seq(choice(IN, OF), $.tableCall),
    // names ----------------------------------
    alphabetName: $ => $.cobolWord,
    assignmentName: $ => $.systemName,
    basisName: $ => $.programName,
    cdName: $ => $.cobolWord,
    className: $ => $.cobolWord,
    computerName: $ => $.systemName,
    conditionName: $ => prec(1, $.cobolWord),
    dataName: $ => prec(2, $.cobolWord),
    dataDescName: $ => choice(FILLER, CURSOR, $.dataName),
    environmentName: $ => $.systemName,
    fileName: $ => prec(8, $.cobolWord),
    functionName: $ => choice(INTEGER, LENGTH, RANDOM, SUM, WHEN_COMPILED, $.cobolWord),
    indexName: $ => prec(4, $.cobolWord),
    languageName: $ => $.systemName,
    libraryName: $ => prec(7, $.cobolWord),
    localName: $ => $.cobolWord,
    mnemonicName: $ => prec(3, $.cobolWord),
    paragraphName: $ => prec(10, choice($.cobolWord, $.integerLiteral)),
    procedureName: $ => choice(seq($.paragraphName, optional($.inSection)), $.sectionName),
    programName: $ => prec(9, choice(NONNUMERICLITERAL, $.cobolWord)),
    recordName: $ => $.qualifiedDataName,
    reportName: $ => prec(6, $.qualifiedDataName),
    routineName: $ => $.cobolWord,
    screenName: $ => $.cobolWord,
    sectionName: $ => choice($.cobolWord, $.integerLiteral),
    systemName: $ => $.cobolWord,
    symbolicCharacter: $ => $.cobolWord,
    textName: $ => prec(-1, $.cobolWord),
    // literal ----------------------------------
    cobolWord: $ => token(choice(IDENTIFIER, ABORT, AS, ASCII, ASSOCIATED_DATA, ASSOCIATED_DATA_LENGTH, ATTRIBUTE, AUTO, AUTO_SKIP, BACKGROUND_COLOR, BACKGROUND_COLOUR, BEEP, BELL, BINARY, BIT, BLINK, BLOB, BOUNDS, CAPABLE, CCSVERSION, CHANGED, CHANNEL, CLOB, CLOSE_DISPOSITION, COBOL, COMMITMENT, CONTROL_POINT, CONVENTION, CRUNCH, CURSOR, DBCLOB, DEFAULT, DEFAULT_DISPLAY, DEFINITION, DFHRESP, DFHVALUE, DISK, DONTCARE, DOUBLE, EBCDIC, EMPTY_CHECK, ENTER, ENTRY_PROCEDURE, EOL, EOS, ERASE, ESCAPE, EVENT, EXCLUSIVE, EXPORT, EXTENDED, FOREGROUND_COLOR, FOREGROUND_COLOUR, FULL, FUNCTIONNAME, FUNCTION_POINTER, GRID, HIGHLIGHT, IMPLICIT, IMPORT, INTEGER, KEPT, KEYBOARD, LANGUAGE, LB, LD, LEFTLINE, LENGTH_CHECK, LIBACCESS, LIBPARAMETER, LIBRARY, LIST, LOCAL, LONG_DATE, LONG_TIME, LOWER, LOWLIGHT, MMDDYYYY, NAMED, NATIONAL, NATIONAL_EDITED, NETWORK, NO_ECHO, NUMERIC_DATE, NUMERIC_TIME, ODT, ORDERLY, OVERLINE, OWN, PASSWORD, PORT, PRINTER, PRIVATE, PROCESS, PROGRAM, PROMPT, READER, REAL, RECEIVED, RECURSIVE, REF, REMOTE, REMOVE, REQUIRED, REVERSE_VIDEO, SAVE, SECURE, SHARED, SHAREDBYALL, SHAREDBYRUNUNIT, SHARING, SHORT_DATE, SQL, SYMBOL, TASK, THREAD, THREAD_LOCAL, TIMER, TODAYS_DATE, TODAYS_NAME, TRUNCATED, TYPEDEF, UNDERLINE, VIRTUAL, WAIT, YEAR, YYYYMMDD, YYYYDDD, ZERO_FILL)),
    booleanLiteral: $ => token(choice(TRUE, FALSE)),
    integerLiteral: $ => token(choice(INTEGERLITERAL, LEVEL_NUMBER_66, LEVEL_NUMBER_77, LEVEL_NUMBER_88)),
    numericLiteral: $ => choice(NUMERICLITERAL, ZERO, $.integerLiteral),
    literal: $ => choice(NONNUMERICLITERAL, $.figurativeConstant, $.numericLiteral, $.booleanLiteral, $.cicsDfhRespLiteral, $.cicsDfhValueLiteral),
    cicsDfhRespLiteral: $ => seq(DFHRESP, LPARENCHAR, choice($.cobolWord, $.literal), RPARENCHAR),
    cicsDfhValueLiteral: $ => seq(DFHVALUE, LPARENCHAR, choice($.cobolWord, $.literal), RPARENCHAR),
    // keywords ----------------------------------
    figurativeConstant: $ => choice(seq(ALL, $.literal), HIGH_VALUE, HIGH_VALUES, LOW_VALUE, LOW_VALUES, NULL, NULLS, QUOTE, QUOTES, SPACE, SPACES, ZERO, ZEROS, ZEROES),
    specialRegister: $ => choice(seq(ADDRESS, OF, $.identifier), DATE, DAY, DAY_OF_WEEK, DEBUG_CONTENTS, DEBUG_ITEM, DEBUG_LINE, DEBUG_NAME, DEBUG_SUB_1, DEBUG_SUB_2, DEBUG_SUB_3, seq(LENGTH, optional(OF), $.identifier), LINAGE_COUNTER, LINE_COUNTER, PAGE_COUNTER, RETURN_CODE, SHIFT_IN, SHIFT_OUT, SORT_CONTROL, SORT_CORE_SIZE, SORT_FILE_SIZE, SORT_MESSAGE, SORT_MODE_SIZE, SORT_RETURN, TALLY, TIME, WHEN_COMPILED),
    // comment entry
    commentEntry: $ => repeat1(COMMENTENTRYLINE),
  }
})