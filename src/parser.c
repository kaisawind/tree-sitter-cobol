#include <tree_sitter/parser.h>

#if defined(__GNUC__) || defined(__clang__)
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
#endif

#ifdef _MSC_VER
#pragma optimize("", off)
#elif defined(__clang__)
#pragma clang optimize off
#elif defined(__GNUC__)
#pragma GCC optimize ("O0")
#endif

#define LANGUAGE_VERSION 14
#define STATE_COUNT 9
#define LARGE_STATE_COUNT 2
#define SYMBOL_COUNT 96
#define ALIAS_COUNT 0
#define TOKEN_COUNT 93
#define EXTERNAL_TOKEN_COUNT 0
#define FIELD_COUNT 0
#define MAX_ALIAS_SEQUENCE_LENGTH 3
#define PRODUCTION_ID_COUNT 1

enum {
  anon_sym_PLUS = 1,
  anon_sym_DASH = 2,
  anon_sym_STAR = 3,
  anon_sym_SLASH = 4,
  anon_sym_STAR_STAR = 5,
  anon_sym_LPAREN = 6,
  anon_sym_RPAREN = 7,
  aux_sym_andOrCondition_token1 = 8,
  aux_sym_andOrCondition_token2 = 9,
  aux_sym_combinableCondition_token1 = 10,
  aux_sym_classCondition_token1 = 11,
  aux_sym_classCondition_token2 = 12,
  aux_sym_classCondition_token3 = 13,
  aux_sym_classCondition_token4 = 14,
  aux_sym_classCondition_token5 = 15,
  aux_sym_classCondition_token6 = 16,
  aux_sym_classCondition_token7 = 17,
  aux_sym_relationSignCondition_token1 = 18,
  aux_sym_relationSignCondition_token2 = 19,
  aux_sym_relationSignCondition_token3 = 20,
  aux_sym_relationalOperator_token1 = 21,
  aux_sym_relationalOperator_token2 = 22,
  aux_sym_relationalOperator_token3 = 23,
  anon_sym_GT = 24,
  aux_sym_relationalOperator_token4 = 25,
  anon_sym_LT = 26,
  aux_sym_relationalOperator_token5 = 27,
  aux_sym_relationalOperator_token6 = 28,
  anon_sym_EQ = 29,
  anon_sym_LT_GT = 30,
  anon_sym_GT_EQ = 31,
  anon_sym_LT_EQ = 32,
  anon_sym_COMMA = 33,
  aux_sym_functionCall_token1 = 34,
  aux_sym_subscript_token1 = 35,
  aux_sym_qualifiedDataNameFormat4_token1 = 36,
  aux_sym_inData_token1 = 37,
  aux_sym_inData_token2 = 38,
  aux_sym_dataDescName_token1 = 39,
  aux_sym_dataDescName_token2 = 40,
  aux_sym_functionName_token2 = 41,
  aux_sym_functionName_token3 = 42,
  aux_sym_functionName_token4 = 43,
  aux_sym_functionName_token5 = 44,
  anon_sym_DQUOTE = 45,
  anon_sym_SQUOTE = 46,
  anon_sym_g = 47,
  anon_sym_G = 48,
  anon_sym_n = 49,
  anon_sym_N = 50,
  anon_sym_x = 51,
  anon_sym_X = 52,
  anon_sym_z = 53,
  anon_sym_Z = 54,
  sym_booleanLiteral = 55,
  anon_sym_DOT = 56,
  aux_sym_numericLiteral_token2 = 57,
  anon_sym_e = 58,
  anon_sym_E = 59,
  aux_sym_cicsDfhRespLiteral_token1 = 60,
  aux_sym_cicsDfhValueLiteral_token1 = 61,
  aux_sym_figurativeConstant_token1 = 62,
  aux_sym_figurativeConstant_token3 = 63,
  aux_sym_figurativeConstant_token5 = 64,
  aux_sym_figurativeConstant_token7 = 65,
  aux_sym_figurativeConstant_token9 = 66,
  aux_sym_specialRegister_token1 = 67,
  aux_sym_specialRegister_token2 = 68,
  aux_sym_specialRegister_token3 = 69,
  aux_sym_specialRegister_token5 = 70,
  aux_sym_specialRegister_token6 = 71,
  aux_sym_specialRegister_token7 = 72,
  aux_sym_specialRegister_token8 = 73,
  aux_sym_specialRegister_token9 = 74,
  aux_sym_specialRegister_token10 = 75,
  aux_sym_specialRegister_token11 = 76,
  aux_sym_specialRegister_token12 = 77,
  aux_sym_specialRegister_token13 = 78,
  aux_sym_specialRegister_token14 = 79,
  aux_sym_specialRegister_token15 = 80,
  aux_sym_specialRegister_token16 = 81,
  aux_sym_specialRegister_token17 = 82,
  aux_sym_specialRegister_token18 = 83,
  aux_sym_specialRegister_token19 = 84,
  aux_sym_specialRegister_token20 = 85,
  aux_sym_specialRegister_token21 = 86,
  aux_sym_specialRegister_token22 = 87,
  aux_sym_specialRegister_token23 = 88,
  aux_sym_specialRegister_token24 = 89,
  anon_sym_STAR_GTCE = 90,
  aux_sym_commentEntry_token1 = 91,
  aux_sym_commentEntry_token2 = 92,
  sym_source_file = 93,
  sym_commentEntry = 94,
  aux_sym_commentEntry_repeat1 = 95,
};

static const char * const ts_symbol_names[] = {
  [ts_builtin_sym_end] = "end",
  [anon_sym_PLUS] = "+",
  [anon_sym_DASH] = "-",
  [anon_sym_STAR] = "*",
  [anon_sym_SLASH] = "/",
  [anon_sym_STAR_STAR] = "**",
  [anon_sym_LPAREN] = "(",
  [anon_sym_RPAREN] = ")",
  [aux_sym_andOrCondition_token1] = "andOrCondition_token1",
  [aux_sym_andOrCondition_token2] = "andOrCondition_token2",
  [aux_sym_combinableCondition_token1] = "combinableCondition_token1",
  [aux_sym_classCondition_token1] = "classCondition_token1",
  [aux_sym_classCondition_token2] = "classCondition_token2",
  [aux_sym_classCondition_token3] = "classCondition_token3",
  [aux_sym_classCondition_token4] = "classCondition_token4",
  [aux_sym_classCondition_token5] = "classCondition_token5",
  [aux_sym_classCondition_token6] = "classCondition_token6",
  [aux_sym_classCondition_token7] = "classCondition_token7",
  [aux_sym_relationSignCondition_token1] = "relationSignCondition_token1",
  [aux_sym_relationSignCondition_token2] = "relationSignCondition_token2",
  [aux_sym_relationSignCondition_token3] = "relationSignCondition_token3",
  [aux_sym_relationalOperator_token1] = "relationalOperator_token1",
  [aux_sym_relationalOperator_token2] = "relationalOperator_token2",
  [aux_sym_relationalOperator_token3] = "relationalOperator_token3",
  [anon_sym_GT] = ">",
  [aux_sym_relationalOperator_token4] = "relationalOperator_token4",
  [anon_sym_LT] = "<",
  [aux_sym_relationalOperator_token5] = "relationalOperator_token5",
  [aux_sym_relationalOperator_token6] = "relationalOperator_token6",
  [anon_sym_EQ] = "=",
  [anon_sym_LT_GT] = "<>",
  [anon_sym_GT_EQ] = ">=",
  [anon_sym_LT_EQ] = "<=",
  [anon_sym_COMMA] = ",",
  [aux_sym_functionCall_token1] = "functionCall_token1",
  [aux_sym_subscript_token1] = "subscript_token1",
  [aux_sym_qualifiedDataNameFormat4_token1] = "qualifiedDataNameFormat4_token1",
  [aux_sym_inData_token1] = "inData_token1",
  [aux_sym_inData_token2] = "inData_token2",
  [aux_sym_dataDescName_token1] = "dataDescName_token1",
  [aux_sym_dataDescName_token2] = "dataDescName_token2",
  [aux_sym_functionName_token2] = "functionName_token2",
  [aux_sym_functionName_token3] = "functionName_token3",
  [aux_sym_functionName_token4] = "functionName_token4",
  [aux_sym_functionName_token5] = "functionName_token5",
  [anon_sym_DQUOTE] = "\"",
  [anon_sym_SQUOTE] = "'",
  [anon_sym_g] = "g",
  [anon_sym_G] = "G",
  [anon_sym_n] = "n",
  [anon_sym_N] = "N",
  [anon_sym_x] = "x",
  [anon_sym_X] = "X",
  [anon_sym_z] = "z",
  [anon_sym_Z] = "Z",
  [sym_booleanLiteral] = "booleanLiteral",
  [anon_sym_DOT] = ".",
  [aux_sym_numericLiteral_token2] = "numericLiteral_token2",
  [anon_sym_e] = "e",
  [anon_sym_E] = "E",
  [aux_sym_cicsDfhRespLiteral_token1] = "cicsDfhRespLiteral_token1",
  [aux_sym_cicsDfhValueLiteral_token1] = "cicsDfhValueLiteral_token1",
  [aux_sym_figurativeConstant_token1] = "figurativeConstant_token1",
  [aux_sym_figurativeConstant_token3] = "figurativeConstant_token3",
  [aux_sym_figurativeConstant_token5] = "figurativeConstant_token5",
  [aux_sym_figurativeConstant_token7] = "figurativeConstant_token7",
  [aux_sym_figurativeConstant_token9] = "figurativeConstant_token9",
  [aux_sym_specialRegister_token1] = "specialRegister_token1",
  [aux_sym_specialRegister_token2] = "specialRegister_token2",
  [aux_sym_specialRegister_token3] = "specialRegister_token3",
  [aux_sym_specialRegister_token5] = "specialRegister_token5",
  [aux_sym_specialRegister_token6] = "specialRegister_token6",
  [aux_sym_specialRegister_token7] = "specialRegister_token7",
  [aux_sym_specialRegister_token8] = "specialRegister_token8",
  [aux_sym_specialRegister_token9] = "specialRegister_token9",
  [aux_sym_specialRegister_token10] = "specialRegister_token10",
  [aux_sym_specialRegister_token11] = "specialRegister_token11",
  [aux_sym_specialRegister_token12] = "specialRegister_token12",
  [aux_sym_specialRegister_token13] = "specialRegister_token13",
  [aux_sym_specialRegister_token14] = "specialRegister_token14",
  [aux_sym_specialRegister_token15] = "specialRegister_token15",
  [aux_sym_specialRegister_token16] = "specialRegister_token16",
  [aux_sym_specialRegister_token17] = "specialRegister_token17",
  [aux_sym_specialRegister_token18] = "specialRegister_token18",
  [aux_sym_specialRegister_token19] = "specialRegister_token19",
  [aux_sym_specialRegister_token20] = "specialRegister_token20",
  [aux_sym_specialRegister_token21] = "specialRegister_token21",
  [aux_sym_specialRegister_token22] = "specialRegister_token22",
  [aux_sym_specialRegister_token23] = "specialRegister_token23",
  [aux_sym_specialRegister_token24] = "specialRegister_token24",
  [anon_sym_STAR_GTCE] = "*>CE",
  [aux_sym_commentEntry_token1] = "commentEntry_token1",
  [aux_sym_commentEntry_token2] = "commentEntry_token2",
  [sym_source_file] = "source_file",
  [sym_commentEntry] = "commentEntry",
  [aux_sym_commentEntry_repeat1] = "commentEntry_repeat1",
};

static const TSSymbol ts_symbol_map[] = {
  [ts_builtin_sym_end] = ts_builtin_sym_end,
  [anon_sym_PLUS] = anon_sym_PLUS,
  [anon_sym_DASH] = anon_sym_DASH,
  [anon_sym_STAR] = anon_sym_STAR,
  [anon_sym_SLASH] = anon_sym_SLASH,
  [anon_sym_STAR_STAR] = anon_sym_STAR_STAR,
  [anon_sym_LPAREN] = anon_sym_LPAREN,
  [anon_sym_RPAREN] = anon_sym_RPAREN,
  [aux_sym_andOrCondition_token1] = aux_sym_andOrCondition_token1,
  [aux_sym_andOrCondition_token2] = aux_sym_andOrCondition_token2,
  [aux_sym_combinableCondition_token1] = aux_sym_combinableCondition_token1,
  [aux_sym_classCondition_token1] = aux_sym_classCondition_token1,
  [aux_sym_classCondition_token2] = aux_sym_classCondition_token2,
  [aux_sym_classCondition_token3] = aux_sym_classCondition_token3,
  [aux_sym_classCondition_token4] = aux_sym_classCondition_token4,
  [aux_sym_classCondition_token5] = aux_sym_classCondition_token5,
  [aux_sym_classCondition_token6] = aux_sym_classCondition_token6,
  [aux_sym_classCondition_token7] = aux_sym_classCondition_token7,
  [aux_sym_relationSignCondition_token1] = aux_sym_relationSignCondition_token1,
  [aux_sym_relationSignCondition_token2] = aux_sym_relationSignCondition_token2,
  [aux_sym_relationSignCondition_token3] = aux_sym_relationSignCondition_token3,
  [aux_sym_relationalOperator_token1] = aux_sym_relationalOperator_token1,
  [aux_sym_relationalOperator_token2] = aux_sym_relationalOperator_token2,
  [aux_sym_relationalOperator_token3] = aux_sym_relationalOperator_token3,
  [anon_sym_GT] = anon_sym_GT,
  [aux_sym_relationalOperator_token4] = aux_sym_relationalOperator_token4,
  [anon_sym_LT] = anon_sym_LT,
  [aux_sym_relationalOperator_token5] = aux_sym_relationalOperator_token5,
  [aux_sym_relationalOperator_token6] = aux_sym_relationalOperator_token6,
  [anon_sym_EQ] = anon_sym_EQ,
  [anon_sym_LT_GT] = anon_sym_LT_GT,
  [anon_sym_GT_EQ] = anon_sym_GT_EQ,
  [anon_sym_LT_EQ] = anon_sym_LT_EQ,
  [anon_sym_COMMA] = anon_sym_COMMA,
  [aux_sym_functionCall_token1] = aux_sym_functionCall_token1,
  [aux_sym_subscript_token1] = aux_sym_subscript_token1,
  [aux_sym_qualifiedDataNameFormat4_token1] = aux_sym_qualifiedDataNameFormat4_token1,
  [aux_sym_inData_token1] = aux_sym_inData_token1,
  [aux_sym_inData_token2] = aux_sym_inData_token2,
  [aux_sym_dataDescName_token1] = aux_sym_dataDescName_token1,
  [aux_sym_dataDescName_token2] = aux_sym_dataDescName_token2,
  [aux_sym_functionName_token2] = aux_sym_functionName_token2,
  [aux_sym_functionName_token3] = aux_sym_functionName_token3,
  [aux_sym_functionName_token4] = aux_sym_functionName_token4,
  [aux_sym_functionName_token5] = aux_sym_functionName_token5,
  [anon_sym_DQUOTE] = anon_sym_DQUOTE,
  [anon_sym_SQUOTE] = anon_sym_SQUOTE,
  [anon_sym_g] = anon_sym_g,
  [anon_sym_G] = anon_sym_G,
  [anon_sym_n] = anon_sym_n,
  [anon_sym_N] = anon_sym_N,
  [anon_sym_x] = anon_sym_x,
  [anon_sym_X] = anon_sym_X,
  [anon_sym_z] = anon_sym_z,
  [anon_sym_Z] = anon_sym_Z,
  [sym_booleanLiteral] = sym_booleanLiteral,
  [anon_sym_DOT] = anon_sym_DOT,
  [aux_sym_numericLiteral_token2] = aux_sym_numericLiteral_token2,
  [anon_sym_e] = anon_sym_e,
  [anon_sym_E] = anon_sym_E,
  [aux_sym_cicsDfhRespLiteral_token1] = aux_sym_cicsDfhRespLiteral_token1,
  [aux_sym_cicsDfhValueLiteral_token1] = aux_sym_cicsDfhValueLiteral_token1,
  [aux_sym_figurativeConstant_token1] = aux_sym_figurativeConstant_token1,
  [aux_sym_figurativeConstant_token3] = aux_sym_figurativeConstant_token3,
  [aux_sym_figurativeConstant_token5] = aux_sym_figurativeConstant_token5,
  [aux_sym_figurativeConstant_token7] = aux_sym_figurativeConstant_token7,
  [aux_sym_figurativeConstant_token9] = aux_sym_figurativeConstant_token9,
  [aux_sym_specialRegister_token1] = aux_sym_specialRegister_token1,
  [aux_sym_specialRegister_token2] = aux_sym_specialRegister_token2,
  [aux_sym_specialRegister_token3] = aux_sym_specialRegister_token3,
  [aux_sym_specialRegister_token5] = aux_sym_specialRegister_token5,
  [aux_sym_specialRegister_token6] = aux_sym_specialRegister_token6,
  [aux_sym_specialRegister_token7] = aux_sym_specialRegister_token7,
  [aux_sym_specialRegister_token8] = aux_sym_specialRegister_token8,
  [aux_sym_specialRegister_token9] = aux_sym_specialRegister_token9,
  [aux_sym_specialRegister_token10] = aux_sym_specialRegister_token10,
  [aux_sym_specialRegister_token11] = aux_sym_specialRegister_token11,
  [aux_sym_specialRegister_token12] = aux_sym_specialRegister_token12,
  [aux_sym_specialRegister_token13] = aux_sym_specialRegister_token13,
  [aux_sym_specialRegister_token14] = aux_sym_specialRegister_token14,
  [aux_sym_specialRegister_token15] = aux_sym_specialRegister_token15,
  [aux_sym_specialRegister_token16] = aux_sym_specialRegister_token16,
  [aux_sym_specialRegister_token17] = aux_sym_specialRegister_token17,
  [aux_sym_specialRegister_token18] = aux_sym_specialRegister_token18,
  [aux_sym_specialRegister_token19] = aux_sym_specialRegister_token19,
  [aux_sym_specialRegister_token20] = aux_sym_specialRegister_token20,
  [aux_sym_specialRegister_token21] = aux_sym_specialRegister_token21,
  [aux_sym_specialRegister_token22] = aux_sym_specialRegister_token22,
  [aux_sym_specialRegister_token23] = aux_sym_specialRegister_token23,
  [aux_sym_specialRegister_token24] = aux_sym_specialRegister_token24,
  [anon_sym_STAR_GTCE] = anon_sym_STAR_GTCE,
  [aux_sym_commentEntry_token1] = aux_sym_commentEntry_token1,
  [aux_sym_commentEntry_token2] = aux_sym_commentEntry_token2,
  [sym_source_file] = sym_source_file,
  [sym_commentEntry] = sym_commentEntry,
  [aux_sym_commentEntry_repeat1] = aux_sym_commentEntry_repeat1,
};

static const TSSymbolMetadata ts_symbol_metadata[] = {
  [ts_builtin_sym_end] = {
    .visible = false,
    .named = true,
  },
  [anon_sym_PLUS] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_STAR] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_SLASH] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_STAR_STAR] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_LPAREN] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_RPAREN] = {
    .visible = true,
    .named = false,
  },
  [aux_sym_andOrCondition_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_andOrCondition_token2] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_combinableCondition_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_classCondition_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_classCondition_token2] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_classCondition_token3] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_classCondition_token4] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_classCondition_token5] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_classCondition_token6] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_classCondition_token7] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_relationSignCondition_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_relationSignCondition_token2] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_relationSignCondition_token3] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_relationalOperator_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_relationalOperator_token2] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_relationalOperator_token3] = {
    .visible = false,
    .named = false,
  },
  [anon_sym_GT] = {
    .visible = true,
    .named = false,
  },
  [aux_sym_relationalOperator_token4] = {
    .visible = false,
    .named = false,
  },
  [anon_sym_LT] = {
    .visible = true,
    .named = false,
  },
  [aux_sym_relationalOperator_token5] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_relationalOperator_token6] = {
    .visible = false,
    .named = false,
  },
  [anon_sym_EQ] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_LT_GT] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_GT_EQ] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_LT_EQ] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_COMMA] = {
    .visible = true,
    .named = false,
  },
  [aux_sym_functionCall_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_subscript_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_qualifiedDataNameFormat4_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_inData_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_inData_token2] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_dataDescName_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_dataDescName_token2] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_functionName_token2] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_functionName_token3] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_functionName_token4] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_functionName_token5] = {
    .visible = false,
    .named = false,
  },
  [anon_sym_DQUOTE] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_SQUOTE] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_g] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_G] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_n] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_N] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_x] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_X] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_z] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_Z] = {
    .visible = true,
    .named = false,
  },
  [sym_booleanLiteral] = {
    .visible = true,
    .named = true,
  },
  [anon_sym_DOT] = {
    .visible = true,
    .named = false,
  },
  [aux_sym_numericLiteral_token2] = {
    .visible = false,
    .named = false,
  },
  [anon_sym_e] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_E] = {
    .visible = true,
    .named = false,
  },
  [aux_sym_cicsDfhRespLiteral_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_cicsDfhValueLiteral_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_figurativeConstant_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_figurativeConstant_token3] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_figurativeConstant_token5] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_figurativeConstant_token7] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_figurativeConstant_token9] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token2] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token3] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token5] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token6] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token7] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token8] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token9] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token10] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token11] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token12] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token13] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token14] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token15] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token16] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token17] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token18] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token19] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token20] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token21] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token22] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token23] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_specialRegister_token24] = {
    .visible = false,
    .named = false,
  },
  [anon_sym_STAR_GTCE] = {
    .visible = true,
    .named = false,
  },
  [aux_sym_commentEntry_token1] = {
    .visible = false,
    .named = false,
  },
  [aux_sym_commentEntry_token2] = {
    .visible = false,
    .named = false,
  },
  [sym_source_file] = {
    .visible = true,
    .named = true,
  },
  [sym_commentEntry] = {
    .visible = true,
    .named = true,
  },
  [aux_sym_commentEntry_repeat1] = {
    .visible = false,
    .named = false,
  },
};

static const TSSymbol ts_alias_sequences[PRODUCTION_ID_COUNT][MAX_ALIAS_SEQUENCE_LENGTH] = {
  [0] = {0},
};

static const uint16_t ts_non_terminal_alias_map[] = {
  0,
};

static const TSStateId ts_primary_state_ids[STATE_COUNT] = {
  [0] = 0,
  [1] = 1,
  [2] = 2,
  [3] = 3,
  [4] = 4,
  [5] = 5,
  [6] = 6,
  [7] = 7,
  [8] = 8,
};

static bool ts_lex(TSLexer *lexer, TSStateId state) {
  START_LEXER();
  eof = lexer->eof(lexer);
  switch (state) {
    case 0:
      if (eof) ADVANCE(277);
      if (lookahead == '"') ADVANCE(322);
      if (lookahead == '\'') ADVANCE(323);
      if (lookahead == '(') ADVANCE(283);
      if (lookahead == ')') ADVANCE(284);
      if (lookahead == '*') ADVANCE(280);
      if (lookahead == '+') ADVANCE(278);
      if (lookahead == ',') ADVANCE(310);
      if (lookahead == '-') ADVANCE(279);
      if (lookahead == '.') ADVANCE(333);
      if (lookahead == '/') ADVANCE(281);
      if (lookahead == '<') ADVANCE(303);
      if (lookahead == '=') ADVANCE(306);
      if (lookahead == '>') ADVANCE(301);
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(59);
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(251);
      if (lookahead == 'D' ||
          lookahead == 'd') ADVANCE(26);
      if (lookahead == 'E') ADVANCE(336);
      if (lookahead == 'F' ||
          lookahead == 'f') ADVANCE(27);
      if (lookahead == 'G') ADVANCE(325);
      if (lookahead == 'H' ||
          lookahead == 'h') ADVANCE(123);
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(162);
      if (lookahead == 'K' ||
          lookahead == 'k') ADVANCE(29);
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(84);
      if (lookahead == 'N') ADVANCE(327);
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(108);
      if (lookahead == 'P' ||
          lookahead == 'p') ADVANCE(31);
      if (lookahead == 'Q' ||
          lookahead == 'q') ADVANCE(252);
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(32);
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(119);
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(37);
      if (lookahead == 'W' ||
          lookahead == 'w') ADVANCE(120);
      if (lookahead == 'X') ADVANCE(329);
      if (lookahead == 'Z') ADVANCE(331);
      if (lookahead == 'e') ADVANCE(335);
      if (lookahead == 'g') ADVANCE(324);
      if (lookahead == 'n') ADVANCE(326);
      if (lookahead == 'x') ADVANCE(328);
      if (lookahead == 'z') ADVANCE(330);
      if (lookahead == '~') ADVANCE(370);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(0)
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(334);
      END_STATE();
    case 1:
      if (lookahead == '\n') ADVANCE(6);
      END_STATE();
    case 2:
      if (lookahead == '\r') ADVANCE(4);
      END_STATE();
    case 3:
      if (lookahead == ' ') ADVANCE(370);
      END_STATE();
    case 4:
      if (lookahead == '\'') ADVANCE(370);
      END_STATE();
    case 5:
      if (lookahead == '\'') ADVANCE(2);
      END_STATE();
    case 6:
      if (lookahead == '\'') ADVANCE(3);
      END_STATE();
    case 7:
      if (lookahead == '-') ADVANCE(268);
      END_STATE();
    case 8:
      if (lookahead == '-') ADVANCE(52);
      END_STATE();
    case 9:
      if (lookahead == '-') ADVANCE(56);
      END_STATE();
    case 10:
      if (lookahead == '-') ADVANCE(131);
      END_STATE();
    case 11:
      if (lookahead == '-') ADVANCE(21);
      END_STATE();
    case 12:
      if (lookahead == '-') ADVANCE(51);
      END_STATE();
    case 13:
      if (lookahead == '-') ADVANCE(227);
      END_STATE();
    case 14:
      if (lookahead == '-') ADVANCE(53);
      END_STATE();
    case 15:
      if (lookahead == '-') ADVANCE(228);
      END_STATE();
    case 16:
      if (lookahead == '-') ADVANCE(54);
      END_STATE();
    case 17:
      if (lookahead == '-') ADVANCE(229);
      END_STATE();
    case 18:
      if (lookahead == '-') ADVANCE(269);
      END_STATE();
    case 19:
      if (lookahead == '-') ADVANCE(57);
      END_STATE();
    case 20:
      if (lookahead == '-') ADVANCE(58);
      END_STATE();
    case 21:
      if (lookahead == '1') ADVANCE(351);
      if (lookahead == '2') ADVANCE(352);
      if (lookahead == '3') ADVANCE(353);
      END_STATE();
    case 22:
      if (lookahead == '>') ADVANCE(23);
      END_STATE();
    case 23:
      if (lookahead == 'C') ADVANCE(24);
      END_STATE();
    case 24:
      if (lookahead == 'E') ADVANCE(367);
      END_STATE();
    case 25:
      if (lookahead == '\t' ||
          lookahead == ' ') ADVANCE(368);
      if (lookahead == '\n' ||
          lookahead == '\r') SKIP(25)
      if (lookahead == '\f' ||
          lookahead == ';') ADVANCE(369);
      END_STATE();
    case 26:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(233);
      if (lookahead == 'B' ||
          lookahead == 'b') ADVANCE(49);
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(44);
      if (lookahead == 'F' ||
          lookahead == 'f') ADVANCE(117);
      END_STATE();
    case 27:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(147);
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(145);
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(169);
      END_STATE();
    case 28:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(46);
      END_STATE();
    case 29:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(163);
      END_STATE();
    case 30:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(55);
      END_STATE();
    case 31:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(113);
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(221);
      END_STATE();
    case 32:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(170);
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(243);
      END_STATE();
    case 33:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(164);
      END_STATE();
    case 34:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(143);
      END_STATE();
    case 35:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(151);
      END_STATE();
    case 36:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(237);
      END_STATE();
    case 37:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(148);
      if (lookahead == 'H' ||
          lookahead == 'h') ADVANCE(33);
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(160);
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(305);
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(257);
      END_STATE();
    case 38:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(161);
      END_STATE();
    case 39:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(115);
      END_STATE();
    case 40:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(247);
      END_STATE();
    case 41:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(153);
      END_STATE();
    case 42:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(154);
      END_STATE();
    case 43:
      if (lookahead == 'A' ||
          lookahead == 'a') ADVANCE(116);
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(12);
      END_STATE();
    case 44:
      if (lookahead == 'B' ||
          lookahead == 'b') ADVANCE(255);
      END_STATE();
    case 45:
      if (lookahead == 'B' ||
          lookahead == 'b') ADVANCE(11);
      END_STATE();
    case 46:
      if (lookahead == 'B' ||
          lookahead == 'b') ADVANCE(95);
      END_STATE();
    case 47:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(289);
      END_STATE();
    case 48:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(290);
      END_STATE();
    case 49:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(216);
      END_STATE();
    case 50:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(234);
      END_STATE();
    case 51:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(187);
      END_STATE();
    case 52:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(182);
      if (lookahead == 'F' ||
          lookahead == 'f') ADVANCE(135);
      if (lookahead == 'M' ||
          lookahead == 'm') ADVANCE(101);
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(103);
      END_STATE();
    case 53:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(186);
      END_STATE();
    case 54:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(192);
      END_STATE();
    case 55:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(71);
      END_STATE();
    case 56:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(191);
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(242);
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(132);
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(38);
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(254);
      END_STATE();
    case 57:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(193);
      END_STATE();
    case 58:
      if (lookahead == 'C' ||
          lookahead == 'c') ADVANCE(194);
      END_STATE();
    case 59:
      if (lookahead == 'D' ||
          lookahead == 'd') ADVANCE(62);
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(140);
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(60);
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(66);
      END_STATE();
    case 60:
      if (lookahead == 'D' ||
          lookahead == 'd') ADVANCE(285);
      END_STATE();
    case 61:
      if (lookahead == 'D' ||
          lookahead == 'd') ADVANCE(321);
      END_STATE();
    case 62:
      if (lookahead == 'D' ||
          lookahead == 'd') ADVANCE(211);
      END_STATE();
    case 63:
      if (lookahead == 'D' ||
          lookahead == 'd') ADVANCE(185);
      END_STATE();
    case 64:
      if (lookahead == 'D' ||
          lookahead == 'd') ADVANCE(79);
      END_STATE();
    case 65:
      if (lookahead == 'D' ||
          lookahead == 'd') ADVANCE(105);
      END_STATE();
    case 66:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(298);
      END_STATE();
    case 67:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(345);
      END_STATE();
    case 68:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(366);
      END_STATE();
    case 69:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(332);
      END_STATE();
    case 70:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(342);
      END_STATE();
    case 71:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(343);
      END_STATE();
    case 72:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(338);
      END_STATE();
    case 73:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(296);
      END_STATE();
    case 74:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(295);
      END_STATE();
    case 75:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(340);
      END_STATE();
    case 76:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(349);
      END_STATE();
    case 77:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(350);
      END_STATE();
    case 78:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(339);
      END_STATE();
    case 79:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(356);
      END_STATE();
    case 80:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(362);
      END_STATE();
    case 81:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(360);
      END_STATE();
    case 82:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(361);
      END_STATE();
    case 83:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(363);
      END_STATE();
    case 84:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(171);
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(168);
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(270);
      END_STATE();
    case 85:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(40);
      END_STATE();
    case 86:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(61);
      END_STATE();
    case 87:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(210);
      END_STATE();
    case 88:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(158);
      END_STATE();
    case 89:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(176);
      END_STATE();
    case 90:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(225);
      END_STATE();
    case 91:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(218);
      END_STATE();
    case 92:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(13);
      END_STATE();
    case 93:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(200);
      END_STATE();
    case 94:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(201);
      END_STATE();
    case 95:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(238);
      END_STATE();
    case 96:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(202);
      END_STATE();
    case 97:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(203);
      END_STATE();
    case 98:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(204);
      END_STATE();
    case 99:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(205);
      END_STATE();
    case 100:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(206);
      END_STATE();
    case 101:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(226);
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(65);
      END_STATE();
    case 102:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(174);
      END_STATE();
    case 103:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(246);
      END_STATE();
    case 104:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(15);
      END_STATE();
    case 105:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(17);
      END_STATE();
    case 106:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(19);
      END_STATE();
    case 107:
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(20);
      END_STATE();
    case 108:
      if (lookahead == 'F' ||
          lookahead == 'f') ADVANCE(315);
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(286);
      END_STATE();
    case 109:
      if (lookahead == 'F' ||
          lookahead == 'f') ADVANCE(236);
      END_STATE();
    case 110:
      if (lookahead == 'G' ||
          lookahead == 'g') ADVANCE(122);
      END_STATE();
    case 111:
      if (lookahead == 'G' ||
          lookahead == 'g') ADVANCE(9);
      END_STATE();
    case 112:
      if (lookahead == 'G' ||
          lookahead == 'g') ADVANCE(36);
      END_STATE();
    case 113:
      if (lookahead == 'G' ||
          lookahead == 'g') ADVANCE(106);
      END_STATE();
    case 114:
      if (lookahead == 'G' ||
          lookahead == 'g') ADVANCE(235);
      END_STATE();
    case 115:
      if (lookahead == 'G' ||
          lookahead == 'g') ADVANCE(80);
      END_STATE();
    case 116:
      if (lookahead == 'G' ||
          lookahead == 'g') ADVANCE(107);
      END_STATE();
    case 117:
      if (lookahead == 'H' ||
          lookahead == 'h') ADVANCE(212);
      END_STATE();
    case 118:
      if (lookahead == 'H' ||
          lookahead == 'h') ADVANCE(318);
      END_STATE();
    case 119:
      if (lookahead == 'H' ||
          lookahead == 'h') ADVANCE(124);
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(209);
      if (lookahead == 'P' ||
          lookahead == 'p') ADVANCE(30);
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(156);
      END_STATE();
    case 120:
      if (lookahead == 'H' ||
          lookahead == 'h') ADVANCE(89);
      END_STATE();
    case 121:
      if (lookahead == 'H' ||
          lookahead == 'h') ADVANCE(28);
      END_STATE();
    case 122:
      if (lookahead == 'H' ||
          lookahead == 'h') ADVANCE(18);
      END_STATE();
    case 123:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(110);
      END_STATE();
    case 124:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(109);
      END_STATE();
    case 125:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(294);
      END_STATE();
    case 126:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(273);
      END_STATE();
    case 127:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(266);
      END_STATE();
    case 128:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(47);
      END_STATE();
    case 129:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(189);
      END_STATE();
    case 130:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(48);
      END_STATE();
    case 131:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(166);
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(258);
      END_STATE();
    case 132:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(175);
      END_STATE();
    case 133:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(274);
      END_STATE();
    case 134:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(267);
      END_STATE();
    case 135:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(155);
      END_STATE();
    case 136:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(245);
      END_STATE();
    case 137:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(275);
      END_STATE();
    case 138:
      if (lookahead == 'I' ||
          lookahead == 'i') ADVANCE(150);
      END_STATE();
    case 139:
      if (lookahead == 'J' ||
          lookahead == 'j') ADVANCE(125);
      END_STATE();
    case 140:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(312);
      if (lookahead == 'P' ||
          lookahead == 'p') ADVANCE(121);
      END_STATE();
    case 141:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(341);
      END_STATE();
    case 142:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(272);
      END_STATE();
    case 143:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(304);
      END_STATE();
    case 144:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(359);
      END_STATE();
    case 145:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(152);
      END_STATE();
    case 146:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(141);
      if (lookahead == 'M' ||
          lookahead == 'm') ADVANCE(87);
      END_STATE();
    case 147:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(224);
      END_STATE();
    case 148:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(142);
      END_STATE();
    case 149:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(183);
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(196);
      END_STATE();
    case 150:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(86);
      END_STATE();
    case 151:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(260);
      END_STATE();
    case 152:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(93);
      END_STATE();
    case 153:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(261);
      END_STATE();
    case 154:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(262);
      END_STATE();
    case 155:
      if (lookahead == 'L' ||
          lookahead == 'l') ADVANCE(104);
      END_STATE();
    case 156:
      if (lookahead == 'M' ||
          lookahead == 'm') ADVANCE(320);
      END_STATE();
    case 157:
      if (lookahead == 'M' ||
          lookahead == 'm') ADVANCE(319);
      END_STATE();
    case 158:
      if (lookahead == 'M' ||
          lookahead == 'm') ADVANCE(348);
      END_STATE();
    case 159:
      if (lookahead == 'M' ||
          lookahead == 'm') ADVANCE(198);
      END_STATE();
    case 160:
      if (lookahead == 'M' ||
          lookahead == 'm') ADVANCE(68);
      END_STATE();
    case 161:
      if (lookahead == 'M' ||
          lookahead == 'm') ADVANCE(77);
      END_STATE();
    case 162:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(314);
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(288);
      END_STATE();
    case 163:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(139);
      END_STATE();
    case 164:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(300);
      END_STATE();
    case 165:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(311);
      END_STATE();
    case 166:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(357);
      END_STATE();
    case 167:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(364);
      END_STATE();
    case 168:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(43);
      END_STATE();
    case 169:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(50);
      END_STATE();
    case 170:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(63);
      END_STATE();
    case 171:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(114);
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(217);
      END_STATE();
    case 172:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(239);
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(92);
      END_STATE();
    case 173:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(244);
      END_STATE();
    case 174:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(240);
      END_STATE();
    case 175:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(76);
      END_STATE();
    case 176:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(14);
      END_STATE();
    case 177:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(248);
      END_STATE();
    case 178:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(16);
      END_STATE();
    case 179:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(249);
      END_STATE();
    case 180:
      if (lookahead == 'N' ||
          lookahead == 'n') ADVANCE(250);
      END_STATE();
    case 181:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(297);
      END_STATE();
    case 182:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(172);
      END_STATE();
    case 183:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(271);
      END_STATE();
    case 184:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(241);
      END_STATE();
    case 185:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(157);
      END_STATE();
    case 186:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(159);
      END_STATE();
    case 187:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(259);
      END_STATE();
    case 188:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(199);
      END_STATE();
    case 189:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(165);
      END_STATE();
    case 190:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(144);
      END_STATE();
    case 191:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(173);
      END_STATE();
    case 192:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(64);
      END_STATE();
    case 193:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(264);
      END_STATE();
    case 194:
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(265);
      END_STATE();
    case 195:
      if (lookahead == 'P' ||
          lookahead == 'p') ADVANCE(337);
      END_STATE();
    case 196:
      if (lookahead == 'P' ||
          lookahead == 'p') ADVANCE(197);
      END_STATE();
    case 197:
      if (lookahead == 'P' ||
          lookahead == 'p') ADVANCE(100);
      END_STATE();
    case 198:
      if (lookahead == 'P' ||
          lookahead == 'p') ADVANCE(138);
      END_STATE();
    case 199:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(317);
      END_STATE();
    case 200:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(316);
      END_STATE();
    case 201:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(299);
      END_STATE();
    case 202:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(354);
      END_STATE();
    case 203:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(355);
      END_STATE();
    case 204:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(313);
      END_STATE();
    case 205:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(291);
      END_STATE();
    case 206:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(292);
      END_STATE();
    case 207:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(222);
      END_STATE();
    case 208:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(181);
      END_STATE();
    case 209:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(232);
      END_STATE();
    case 210:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(128);
      END_STATE();
    case 211:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(90);
      END_STATE();
    case 212:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(91);
      if (lookahead == 'V' ||
          lookahead == 'v') ADVANCE(35);
      END_STATE();
    case 213:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(190);
      END_STATE();
    case 214:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(167);
      END_STATE();
    case 215:
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(178);
      END_STATE();
    case 216:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(293);
      END_STATE();
    case 217:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(302);
      END_STATE();
    case 218:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(195);
      END_STATE();
    case 219:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(344);
      END_STATE();
    case 220:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(347);
      END_STATE();
    case 221:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(136);
      END_STATE();
    case 222:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(188);
      END_STATE();
    case 223:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(39);
      END_STATE();
    case 224:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(69);
      END_STATE();
    case 225:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(219);
      END_STATE();
    case 226:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(223);
      END_STATE();
    case 227:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(126);
      END_STATE();
    case 228:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(133);
      END_STATE();
    case 229:
      if (lookahead == 'S' ||
          lookahead == 's') ADVANCE(137);
      END_STATE();
    case 230:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(287);
      END_STATE();
    case 231:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(358);
      END_STATE();
    case 232:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(8);
      END_STATE();
    case 233:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(67);
      if (lookahead == 'Y' ||
          lookahead == 'y') ADVANCE(346);
      END_STATE();
    case 234:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(129);
      END_STATE();
    case 235:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(118);
      END_STATE();
    case 236:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(10);
      END_STATE();
    case 237:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(127);
      END_STATE();
    case 238:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(130);
      END_STATE();
    case 239:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(213);
      END_STATE();
    case 240:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(220);
      END_STATE();
    case 241:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(70);
      END_STATE();
    case 242:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(88);
      END_STATE();
    case 243:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(256);
      END_STATE();
    case 244:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(102);
      END_STATE();
    case 245:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(134);
      END_STATE();
    case 246:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(263);
      END_STATE();
    case 247:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(94);
      END_STATE();
    case 248:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(96);
      END_STATE();
    case 249:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(97);
      END_STATE();
    case 250:
      if (lookahead == 'T' ||
          lookahead == 't') ADVANCE(98);
      END_STATE();
    case 251:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(207);
      END_STATE();
    case 252:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(184);
      END_STATE();
    case 253:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(34);
      END_STATE();
    case 254:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(45);
      END_STATE();
    case 255:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(111);
      END_STATE();
    case 256:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(215);
      END_STATE();
    case 257:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(69);
      END_STATE();
    case 258:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(231);
      END_STATE();
    case 259:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(177);
      END_STATE();
    case 260:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(72);
      END_STATE();
    case 261:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(75);
      END_STATE();
    case 262:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(78);
      END_STATE();
    case 263:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(214);
      END_STATE();
    case 264:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(179);
      END_STATE();
    case 265:
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(180);
      END_STATE();
    case 266:
      if (lookahead == 'V' ||
          lookahead == 'v') ADVANCE(73);
      END_STATE();
    case 267:
      if (lookahead == 'V' ||
          lookahead == 'v') ADVANCE(74);
      END_STATE();
    case 268:
      if (lookahead == 'V' ||
          lookahead == 'v') ADVANCE(41);
      END_STATE();
    case 269:
      if (lookahead == 'V' ||
          lookahead == 'v') ADVANCE(42);
      END_STATE();
    case 270:
      if (lookahead == 'W' ||
          lookahead == 'w') ADVANCE(7);
      END_STATE();
    case 271:
      if (lookahead == 'W' ||
          lookahead == 'w') ADVANCE(99);
      END_STATE();
    case 272:
      if (lookahead == 'Y' ||
          lookahead == 'y') ADVANCE(365);
      END_STATE();
    case 273:
      if (lookahead == 'Z' ||
          lookahead == 'z') ADVANCE(81);
      END_STATE();
    case 274:
      if (lookahead == 'Z' ||
          lookahead == 'z') ADVANCE(82);
      END_STATE();
    case 275:
      if (lookahead == 'Z' ||
          lookahead == 'z') ADVANCE(83);
      END_STATE();
    case 276:
      if (eof) ADVANCE(277);
      if (lookahead == '*') ADVANCE(22);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(276)
      END_STATE();
    case 277:
      ACCEPT_TOKEN(ts_builtin_sym_end);
      END_STATE();
    case 278:
      ACCEPT_TOKEN(anon_sym_PLUS);
      END_STATE();
    case 279:
      ACCEPT_TOKEN(anon_sym_DASH);
      END_STATE();
    case 280:
      ACCEPT_TOKEN(anon_sym_STAR);
      if (lookahead == '*') ADVANCE(282);
      if (lookahead == '>') ADVANCE(23);
      END_STATE();
    case 281:
      ACCEPT_TOKEN(anon_sym_SLASH);
      END_STATE();
    case 282:
      ACCEPT_TOKEN(anon_sym_STAR_STAR);
      END_STATE();
    case 283:
      ACCEPT_TOKEN(anon_sym_LPAREN);
      END_STATE();
    case 284:
      ACCEPT_TOKEN(anon_sym_RPAREN);
      END_STATE();
    case 285:
      ACCEPT_TOKEN(aux_sym_andOrCondition_token1);
      END_STATE();
    case 286:
      ACCEPT_TOKEN(aux_sym_andOrCondition_token2);
      END_STATE();
    case 287:
      ACCEPT_TOKEN(aux_sym_combinableCondition_token1);
      END_STATE();
    case 288:
      ACCEPT_TOKEN(aux_sym_classCondition_token1);
      END_STATE();
    case 289:
      ACCEPT_TOKEN(aux_sym_classCondition_token2);
      END_STATE();
    case 290:
      ACCEPT_TOKEN(aux_sym_classCondition_token3);
      if (lookahead == '-') ADVANCE(149);
      END_STATE();
    case 291:
      ACCEPT_TOKEN(aux_sym_classCondition_token4);
      END_STATE();
    case 292:
      ACCEPT_TOKEN(aux_sym_classCondition_token5);
      END_STATE();
    case 293:
      ACCEPT_TOKEN(aux_sym_classCondition_token6);
      END_STATE();
    case 294:
      ACCEPT_TOKEN(aux_sym_classCondition_token7);
      END_STATE();
    case 295:
      ACCEPT_TOKEN(aux_sym_relationSignCondition_token1);
      END_STATE();
    case 296:
      ACCEPT_TOKEN(aux_sym_relationSignCondition_token2);
      END_STATE();
    case 297:
      ACCEPT_TOKEN(aux_sym_relationSignCondition_token3);
      END_STATE();
    case 298:
      ACCEPT_TOKEN(aux_sym_relationalOperator_token1);
      END_STATE();
    case 299:
      ACCEPT_TOKEN(aux_sym_relationalOperator_token2);
      END_STATE();
    case 300:
      ACCEPT_TOKEN(aux_sym_relationalOperator_token3);
      END_STATE();
    case 301:
      ACCEPT_TOKEN(anon_sym_GT);
      if (lookahead == '=') ADVANCE(308);
      END_STATE();
    case 302:
      ACCEPT_TOKEN(aux_sym_relationalOperator_token4);
      END_STATE();
    case 303:
      ACCEPT_TOKEN(anon_sym_LT);
      if (lookahead == '=') ADVANCE(309);
      if (lookahead == '>') ADVANCE(307);
      END_STATE();
    case 304:
      ACCEPT_TOKEN(aux_sym_relationalOperator_token5);
      END_STATE();
    case 305:
      ACCEPT_TOKEN(aux_sym_relationalOperator_token6);
      END_STATE();
    case 306:
      ACCEPT_TOKEN(anon_sym_EQ);
      END_STATE();
    case 307:
      ACCEPT_TOKEN(anon_sym_LT_GT);
      END_STATE();
    case 308:
      ACCEPT_TOKEN(anon_sym_GT_EQ);
      END_STATE();
    case 309:
      ACCEPT_TOKEN(anon_sym_LT_EQ);
      END_STATE();
    case 310:
      ACCEPT_TOKEN(anon_sym_COMMA);
      END_STATE();
    case 311:
      ACCEPT_TOKEN(aux_sym_functionCall_token1);
      END_STATE();
    case 312:
      ACCEPT_TOKEN(aux_sym_subscript_token1);
      END_STATE();
    case 313:
      ACCEPT_TOKEN(aux_sym_qualifiedDataNameFormat4_token1);
      END_STATE();
    case 314:
      ACCEPT_TOKEN(aux_sym_inData_token1);
      END_STATE();
    case 315:
      ACCEPT_TOKEN(aux_sym_inData_token2);
      END_STATE();
    case 316:
      ACCEPT_TOKEN(aux_sym_dataDescName_token1);
      END_STATE();
    case 317:
      ACCEPT_TOKEN(aux_sym_dataDescName_token2);
      END_STATE();
    case 318:
      ACCEPT_TOKEN(aux_sym_functionName_token2);
      END_STATE();
    case 319:
      ACCEPT_TOKEN(aux_sym_functionName_token3);
      END_STATE();
    case 320:
      ACCEPT_TOKEN(aux_sym_functionName_token4);
      END_STATE();
    case 321:
      ACCEPT_TOKEN(aux_sym_functionName_token5);
      END_STATE();
    case 322:
      ACCEPT_TOKEN(anon_sym_DQUOTE);
      END_STATE();
    case 323:
      ACCEPT_TOKEN(anon_sym_SQUOTE);
      END_STATE();
    case 324:
      ACCEPT_TOKEN(anon_sym_g);
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(85);
      END_STATE();
    case 325:
      ACCEPT_TOKEN(anon_sym_G);
      if (lookahead == 'R' ||
          lookahead == 'r') ADVANCE(85);
      END_STATE();
    case 326:
      ACCEPT_TOKEN(anon_sym_n);
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(112);
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(230);
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(146);
      END_STATE();
    case 327:
      ACCEPT_TOKEN(anon_sym_N);
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(112);
      if (lookahead == 'O' ||
          lookahead == 'o') ADVANCE(230);
      if (lookahead == 'U' ||
          lookahead == 'u') ADVANCE(146);
      END_STATE();
    case 328:
      ACCEPT_TOKEN(anon_sym_x);
      END_STATE();
    case 329:
      ACCEPT_TOKEN(anon_sym_X);
      END_STATE();
    case 330:
      ACCEPT_TOKEN(anon_sym_z);
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(208);
      END_STATE();
    case 331:
      ACCEPT_TOKEN(anon_sym_Z);
      if (lookahead == 'E' ||
          lookahead == 'e') ADVANCE(208);
      END_STATE();
    case 332:
      ACCEPT_TOKEN(sym_booleanLiteral);
      END_STATE();
    case 333:
      ACCEPT_TOKEN(anon_sym_DOT);
      END_STATE();
    case 334:
      ACCEPT_TOKEN(aux_sym_numericLiteral_token2);
      if (('0' <= lookahead && lookahead <= '9')) ADVANCE(334);
      END_STATE();
    case 335:
      ACCEPT_TOKEN(anon_sym_e);
      if (lookahead == 'Q' ||
          lookahead == 'q') ADVANCE(253);
      END_STATE();
    case 336:
      ACCEPT_TOKEN(anon_sym_E);
      if (lookahead == 'Q' ||
          lookahead == 'q') ADVANCE(253);
      END_STATE();
    case 337:
      ACCEPT_TOKEN(aux_sym_cicsDfhRespLiteral_token1);
      END_STATE();
    case 338:
      ACCEPT_TOKEN(aux_sym_cicsDfhValueLiteral_token1);
      END_STATE();
    case 339:
      ACCEPT_TOKEN(aux_sym_figurativeConstant_token1);
      END_STATE();
    case 340:
      ACCEPT_TOKEN(aux_sym_figurativeConstant_token3);
      END_STATE();
    case 341:
      ACCEPT_TOKEN(aux_sym_figurativeConstant_token5);
      END_STATE();
    case 342:
      ACCEPT_TOKEN(aux_sym_figurativeConstant_token7);
      END_STATE();
    case 343:
      ACCEPT_TOKEN(aux_sym_figurativeConstant_token9);
      END_STATE();
    case 344:
      ACCEPT_TOKEN(aux_sym_specialRegister_token1);
      END_STATE();
    case 345:
      ACCEPT_TOKEN(aux_sym_specialRegister_token2);
      END_STATE();
    case 346:
      ACCEPT_TOKEN(aux_sym_specialRegister_token3);
      END_STATE();
    case 347:
      ACCEPT_TOKEN(aux_sym_specialRegister_token5);
      END_STATE();
    case 348:
      ACCEPT_TOKEN(aux_sym_specialRegister_token6);
      END_STATE();
    case 349:
      ACCEPT_TOKEN(aux_sym_specialRegister_token7);
      END_STATE();
    case 350:
      ACCEPT_TOKEN(aux_sym_specialRegister_token8);
      END_STATE();
    case 351:
      ACCEPT_TOKEN(aux_sym_specialRegister_token9);
      END_STATE();
    case 352:
      ACCEPT_TOKEN(aux_sym_specialRegister_token10);
      END_STATE();
    case 353:
      ACCEPT_TOKEN(aux_sym_specialRegister_token11);
      END_STATE();
    case 354:
      ACCEPT_TOKEN(aux_sym_specialRegister_token12);
      END_STATE();
    case 355:
      ACCEPT_TOKEN(aux_sym_specialRegister_token13);
      END_STATE();
    case 356:
      ACCEPT_TOKEN(aux_sym_specialRegister_token14);
      END_STATE();
    case 357:
      ACCEPT_TOKEN(aux_sym_specialRegister_token15);
      END_STATE();
    case 358:
      ACCEPT_TOKEN(aux_sym_specialRegister_token16);
      END_STATE();
    case 359:
      ACCEPT_TOKEN(aux_sym_specialRegister_token17);
      END_STATE();
    case 360:
      ACCEPT_TOKEN(aux_sym_specialRegister_token18);
      END_STATE();
    case 361:
      ACCEPT_TOKEN(aux_sym_specialRegister_token19);
      END_STATE();
    case 362:
      ACCEPT_TOKEN(aux_sym_specialRegister_token20);
      END_STATE();
    case 363:
      ACCEPT_TOKEN(aux_sym_specialRegister_token21);
      END_STATE();
    case 364:
      ACCEPT_TOKEN(aux_sym_specialRegister_token22);
      END_STATE();
    case 365:
      ACCEPT_TOKEN(aux_sym_specialRegister_token23);
      END_STATE();
    case 366:
      ACCEPT_TOKEN(aux_sym_specialRegister_token24);
      END_STATE();
    case 367:
      ACCEPT_TOKEN(anon_sym_STAR_GTCE);
      END_STATE();
    case 368:
      ACCEPT_TOKEN(aux_sym_commentEntry_token1);
      if (lookahead == '\t' ||
          lookahead == ' ') ADVANCE(368);
      if (lookahead == '\f' ||
          lookahead == ';') ADVANCE(369);
      END_STATE();
    case 369:
      ACCEPT_TOKEN(aux_sym_commentEntry_token1);
      if (lookahead == '\t' ||
          lookahead == '\f' ||
          lookahead == ' ' ||
          lookahead == ';') ADVANCE(369);
      END_STATE();
    case 370:
      ACCEPT_TOKEN(aux_sym_commentEntry_token2);
      if (lookahead == ' ') ADVANCE(5);
      if (lookahead == '\'') ADVANCE(1);
      END_STATE();
    default:
      return false;
  }
}

static const TSLexMode ts_lex_modes[STATE_COUNT] = {
  [0] = {.lex_state = 0},
  [1] = {.lex_state = 276},
  [2] = {.lex_state = 276},
  [3] = {.lex_state = 276},
  [4] = {.lex_state = 276},
  [5] = {.lex_state = 25},
  [6] = {.lex_state = 0},
  [7] = {.lex_state = 0},
  [8] = {.lex_state = 0},
};

static const uint16_t ts_parse_table[LARGE_STATE_COUNT][SYMBOL_COUNT] = {
  [0] = {
    [ts_builtin_sym_end] = ACTIONS(1),
    [anon_sym_PLUS] = ACTIONS(1),
    [anon_sym_DASH] = ACTIONS(1),
    [anon_sym_STAR] = ACTIONS(1),
    [anon_sym_SLASH] = ACTIONS(1),
    [anon_sym_STAR_STAR] = ACTIONS(1),
    [anon_sym_LPAREN] = ACTIONS(1),
    [anon_sym_RPAREN] = ACTIONS(1),
    [aux_sym_andOrCondition_token1] = ACTIONS(1),
    [aux_sym_andOrCondition_token2] = ACTIONS(1),
    [aux_sym_combinableCondition_token1] = ACTIONS(1),
    [aux_sym_classCondition_token1] = ACTIONS(1),
    [aux_sym_classCondition_token2] = ACTIONS(1),
    [aux_sym_classCondition_token3] = ACTIONS(1),
    [aux_sym_classCondition_token4] = ACTIONS(1),
    [aux_sym_classCondition_token5] = ACTIONS(1),
    [aux_sym_classCondition_token6] = ACTIONS(1),
    [aux_sym_classCondition_token7] = ACTIONS(1),
    [aux_sym_relationSignCondition_token1] = ACTIONS(1),
    [aux_sym_relationSignCondition_token2] = ACTIONS(1),
    [aux_sym_relationSignCondition_token3] = ACTIONS(1),
    [aux_sym_relationalOperator_token1] = ACTIONS(1),
    [aux_sym_relationalOperator_token2] = ACTIONS(1),
    [aux_sym_relationalOperator_token3] = ACTIONS(1),
    [anon_sym_GT] = ACTIONS(1),
    [aux_sym_relationalOperator_token4] = ACTIONS(1),
    [anon_sym_LT] = ACTIONS(1),
    [aux_sym_relationalOperator_token5] = ACTIONS(1),
    [aux_sym_relationalOperator_token6] = ACTIONS(1),
    [anon_sym_EQ] = ACTIONS(1),
    [anon_sym_LT_GT] = ACTIONS(1),
    [anon_sym_GT_EQ] = ACTIONS(1),
    [anon_sym_LT_EQ] = ACTIONS(1),
    [anon_sym_COMMA] = ACTIONS(1),
    [aux_sym_functionCall_token1] = ACTIONS(1),
    [aux_sym_subscript_token1] = ACTIONS(1),
    [aux_sym_qualifiedDataNameFormat4_token1] = ACTIONS(1),
    [aux_sym_inData_token1] = ACTIONS(1),
    [aux_sym_inData_token2] = ACTIONS(1),
    [aux_sym_dataDescName_token1] = ACTIONS(1),
    [aux_sym_dataDescName_token2] = ACTIONS(1),
    [aux_sym_functionName_token2] = ACTIONS(1),
    [aux_sym_functionName_token3] = ACTIONS(1),
    [aux_sym_functionName_token4] = ACTIONS(1),
    [aux_sym_functionName_token5] = ACTIONS(1),
    [anon_sym_DQUOTE] = ACTIONS(1),
    [anon_sym_SQUOTE] = ACTIONS(1),
    [anon_sym_g] = ACTIONS(1),
    [anon_sym_G] = ACTIONS(1),
    [anon_sym_n] = ACTIONS(1),
    [anon_sym_N] = ACTIONS(1),
    [anon_sym_x] = ACTIONS(1),
    [anon_sym_X] = ACTIONS(1),
    [anon_sym_z] = ACTIONS(1),
    [anon_sym_Z] = ACTIONS(1),
    [sym_booleanLiteral] = ACTIONS(1),
    [anon_sym_DOT] = ACTIONS(1),
    [aux_sym_numericLiteral_token2] = ACTIONS(1),
    [anon_sym_e] = ACTIONS(1),
    [anon_sym_E] = ACTIONS(1),
    [aux_sym_cicsDfhRespLiteral_token1] = ACTIONS(1),
    [aux_sym_cicsDfhValueLiteral_token1] = ACTIONS(1),
    [aux_sym_figurativeConstant_token1] = ACTIONS(1),
    [aux_sym_figurativeConstant_token3] = ACTIONS(1),
    [aux_sym_figurativeConstant_token5] = ACTIONS(1),
    [aux_sym_figurativeConstant_token7] = ACTIONS(1),
    [aux_sym_figurativeConstant_token9] = ACTIONS(1),
    [aux_sym_specialRegister_token1] = ACTIONS(1),
    [aux_sym_specialRegister_token2] = ACTIONS(1),
    [aux_sym_specialRegister_token3] = ACTIONS(1),
    [aux_sym_specialRegister_token5] = ACTIONS(1),
    [aux_sym_specialRegister_token6] = ACTIONS(1),
    [aux_sym_specialRegister_token7] = ACTIONS(1),
    [aux_sym_specialRegister_token8] = ACTIONS(1),
    [aux_sym_specialRegister_token9] = ACTIONS(1),
    [aux_sym_specialRegister_token10] = ACTIONS(1),
    [aux_sym_specialRegister_token11] = ACTIONS(1),
    [aux_sym_specialRegister_token12] = ACTIONS(1),
    [aux_sym_specialRegister_token13] = ACTIONS(1),
    [aux_sym_specialRegister_token14] = ACTIONS(1),
    [aux_sym_specialRegister_token15] = ACTIONS(1),
    [aux_sym_specialRegister_token16] = ACTIONS(1),
    [aux_sym_specialRegister_token17] = ACTIONS(1),
    [aux_sym_specialRegister_token18] = ACTIONS(1),
    [aux_sym_specialRegister_token19] = ACTIONS(1),
    [aux_sym_specialRegister_token20] = ACTIONS(1),
    [aux_sym_specialRegister_token21] = ACTIONS(1),
    [aux_sym_specialRegister_token22] = ACTIONS(1),
    [aux_sym_specialRegister_token23] = ACTIONS(1),
    [aux_sym_specialRegister_token24] = ACTIONS(1),
    [anon_sym_STAR_GTCE] = ACTIONS(1),
    [aux_sym_commentEntry_token2] = ACTIONS(1),
  },
  [1] = {
    [sym_source_file] = STATE(6),
    [sym_commentEntry] = STATE(7),
    [aux_sym_commentEntry_repeat1] = STATE(2),
    [anon_sym_STAR_GTCE] = ACTIONS(3),
  },
};

static const uint16_t ts_small_parse_table[] = {
  [0] = 3,
    ACTIONS(3), 1,
      anon_sym_STAR_GTCE,
    ACTIONS(5), 1,
      ts_builtin_sym_end,
    STATE(3), 1,
      aux_sym_commentEntry_repeat1,
  [10] = 3,
    ACTIONS(7), 1,
      ts_builtin_sym_end,
    ACTIONS(9), 1,
      anon_sym_STAR_GTCE,
    STATE(3), 1,
      aux_sym_commentEntry_repeat1,
  [20] = 1,
    ACTIONS(12), 2,
      ts_builtin_sym_end,
      anon_sym_STAR_GTCE,
  [25] = 1,
    ACTIONS(14), 1,
      aux_sym_commentEntry_token1,
  [29] = 1,
    ACTIONS(16), 1,
      ts_builtin_sym_end,
  [33] = 1,
    ACTIONS(18), 1,
      ts_builtin_sym_end,
  [37] = 1,
    ACTIONS(20), 1,
      aux_sym_commentEntry_token2,
};

static const uint32_t ts_small_parse_table_map[] = {
  [SMALL_STATE(2)] = 0,
  [SMALL_STATE(3)] = 10,
  [SMALL_STATE(4)] = 20,
  [SMALL_STATE(5)] = 25,
  [SMALL_STATE(6)] = 29,
  [SMALL_STATE(7)] = 33,
  [SMALL_STATE(8)] = 37,
};

static const TSParseActionEntry ts_parse_actions[] = {
  [0] = {.entry = {.count = 0, .reusable = false}},
  [1] = {.entry = {.count = 1, .reusable = false}}, RECOVER(),
  [3] = {.entry = {.count = 1, .reusable = true}}, SHIFT(5),
  [5] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_commentEntry, 1),
  [7] = {.entry = {.count = 1, .reusable = true}}, REDUCE(aux_sym_commentEntry_repeat1, 2),
  [9] = {.entry = {.count = 2, .reusable = true}}, REDUCE(aux_sym_commentEntry_repeat1, 2), SHIFT_REPEAT(5),
  [12] = {.entry = {.count = 1, .reusable = true}}, REDUCE(aux_sym_commentEntry_repeat1, 3),
  [14] = {.entry = {.count = 1, .reusable = true}}, SHIFT(8),
  [16] = {.entry = {.count = 1, .reusable = true}},  ACCEPT_INPUT(),
  [18] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_source_file, 1),
  [20] = {.entry = {.count = 1, .reusable = true}}, SHIFT(4),
};

#ifdef __cplusplus
extern "C" {
#endif
#ifdef _WIN32
#define extern __declspec(dllexport)
#endif

extern const TSLanguage *tree_sitter_cobol(void) {
  static const TSLanguage language = {
    .version = LANGUAGE_VERSION,
    .symbol_count = SYMBOL_COUNT,
    .alias_count = ALIAS_COUNT,
    .token_count = TOKEN_COUNT,
    .external_token_count = EXTERNAL_TOKEN_COUNT,
    .state_count = STATE_COUNT,
    .large_state_count = LARGE_STATE_COUNT,
    .production_id_count = PRODUCTION_ID_COUNT,
    .field_count = FIELD_COUNT,
    .max_alias_sequence_length = MAX_ALIAS_SEQUENCE_LENGTH,
    .parse_table = &ts_parse_table[0][0],
    .small_parse_table = ts_small_parse_table,
    .small_parse_table_map = ts_small_parse_table_map,
    .parse_actions = ts_parse_actions,
    .symbol_names = ts_symbol_names,
    .symbol_metadata = ts_symbol_metadata,
    .public_symbol_map = ts_symbol_map,
    .alias_map = ts_non_terminal_alias_map,
    .alias_sequences = &ts_alias_sequences[0][0],
    .lex_modes = ts_lex_modes,
    .lex_fn = ts_lex,
    .primary_state_ids = ts_primary_state_ids,
  };
  return &language;
}
#ifdef __cplusplus
}
#endif
