#include <tree_sitter/parser.h>

#if defined(__GNUC__) || defined(__clang__)
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wmissing-field-initializers"
#endif

#define LANGUAGE_VERSION 14
#define STATE_COUNT 4
#define LARGE_STATE_COUNT 2
#define SYMBOL_COUNT 54
#define ALIAS_COUNT 0
#define TOKEN_COUNT 53
#define EXTERNAL_TOKEN_COUNT 0
#define FIELD_COUNT 0
#define MAX_ALIAS_SEQUENCE_LENGTH 1
#define PRODUCTION_ID_COUNT 1

enum {
  anon_sym_hello = 1,
  anon_sym_a = 2,
  anon_sym_A = 3,
  anon_sym_b = 4,
  anon_sym_B = 5,
  anon_sym_o = 6,
  anon_sym_O = 7,
  anon_sym_r = 8,
  anon_sym_R = 9,
  anon_sym_t = 10,
  anon_sym_T = 11,
  anon_sym_s = 12,
  anon_sym_S = 13,
  anon_sym_c = 14,
  anon_sym_C = 15,
  anon_sym_i = 16,
  anon_sym_I = 17,
  anon_sym_e = 18,
  anon_sym_E = 19,
  anon_sym_d = 20,
  anon_sym_D = 21,
  anon_sym_DASH = 22,
  anon_sym_l = 23,
  anon_sym_L = 24,
  anon_sym_n = 25,
  anon_sym_N = 26,
  anon_sym_g = 27,
  anon_sym_G = 28,
  anon_sym_h = 29,
  anon_sym_H = 30,
  anon_sym_u = 31,
  anon_sym_U = 32,
  anon_sym_k = 33,
  anon_sym_K = 34,
  anon_sym_p = 35,
  anon_sym_P = 36,
  anon_sym_y = 37,
  anon_sym_Y = 38,
  anon_sym_v = 39,
  anon_sym_V = 40,
  anon_sym_m = 41,
  anon_sym_M = 42,
  anon_sym_f = 43,
  anon_sym_F = 44,
  anon_sym_x = 45,
  anon_sym_X = 46,
  anon_sym_w = 47,
  anon_sym_W = 48,
  anon_sym_q = 49,
  anon_sym_Q = 50,
  anon_sym_z = 51,
  anon_sym_Z = 52,
  sym_source_file = 53,
};

static const char * const ts_symbol_names[] = {
  [ts_builtin_sym_end] = "end",
  [anon_sym_hello] = "hello",
  [anon_sym_a] = "a",
  [anon_sym_A] = "A",
  [anon_sym_b] = "b",
  [anon_sym_B] = "B",
  [anon_sym_o] = "o",
  [anon_sym_O] = "O",
  [anon_sym_r] = "r",
  [anon_sym_R] = "R",
  [anon_sym_t] = "t",
  [anon_sym_T] = "T",
  [anon_sym_s] = "s",
  [anon_sym_S] = "S",
  [anon_sym_c] = "c",
  [anon_sym_C] = "C",
  [anon_sym_i] = "i",
  [anon_sym_I] = "I",
  [anon_sym_e] = "e",
  [anon_sym_E] = "E",
  [anon_sym_d] = "d",
  [anon_sym_D] = "D",
  [anon_sym_DASH] = "-",
  [anon_sym_l] = "l",
  [anon_sym_L] = "L",
  [anon_sym_n] = "n",
  [anon_sym_N] = "N",
  [anon_sym_g] = "g",
  [anon_sym_G] = "G",
  [anon_sym_h] = "h",
  [anon_sym_H] = "H",
  [anon_sym_u] = "u",
  [anon_sym_U] = "U",
  [anon_sym_k] = "k",
  [anon_sym_K] = "K",
  [anon_sym_p] = "p",
  [anon_sym_P] = "P",
  [anon_sym_y] = "y",
  [anon_sym_Y] = "Y",
  [anon_sym_v] = "v",
  [anon_sym_V] = "V",
  [anon_sym_m] = "m",
  [anon_sym_M] = "M",
  [anon_sym_f] = "f",
  [anon_sym_F] = "F",
  [anon_sym_x] = "x",
  [anon_sym_X] = "X",
  [anon_sym_w] = "w",
  [anon_sym_W] = "W",
  [anon_sym_q] = "q",
  [anon_sym_Q] = "Q",
  [anon_sym_z] = "z",
  [anon_sym_Z] = "Z",
  [sym_source_file] = "source_file",
};

static const TSSymbol ts_symbol_map[] = {
  [ts_builtin_sym_end] = ts_builtin_sym_end,
  [anon_sym_hello] = anon_sym_hello,
  [anon_sym_a] = anon_sym_a,
  [anon_sym_A] = anon_sym_A,
  [anon_sym_b] = anon_sym_b,
  [anon_sym_B] = anon_sym_B,
  [anon_sym_o] = anon_sym_o,
  [anon_sym_O] = anon_sym_O,
  [anon_sym_r] = anon_sym_r,
  [anon_sym_R] = anon_sym_R,
  [anon_sym_t] = anon_sym_t,
  [anon_sym_T] = anon_sym_T,
  [anon_sym_s] = anon_sym_s,
  [anon_sym_S] = anon_sym_S,
  [anon_sym_c] = anon_sym_c,
  [anon_sym_C] = anon_sym_C,
  [anon_sym_i] = anon_sym_i,
  [anon_sym_I] = anon_sym_I,
  [anon_sym_e] = anon_sym_e,
  [anon_sym_E] = anon_sym_E,
  [anon_sym_d] = anon_sym_d,
  [anon_sym_D] = anon_sym_D,
  [anon_sym_DASH] = anon_sym_DASH,
  [anon_sym_l] = anon_sym_l,
  [anon_sym_L] = anon_sym_L,
  [anon_sym_n] = anon_sym_n,
  [anon_sym_N] = anon_sym_N,
  [anon_sym_g] = anon_sym_g,
  [anon_sym_G] = anon_sym_G,
  [anon_sym_h] = anon_sym_h,
  [anon_sym_H] = anon_sym_H,
  [anon_sym_u] = anon_sym_u,
  [anon_sym_U] = anon_sym_U,
  [anon_sym_k] = anon_sym_k,
  [anon_sym_K] = anon_sym_K,
  [anon_sym_p] = anon_sym_p,
  [anon_sym_P] = anon_sym_P,
  [anon_sym_y] = anon_sym_y,
  [anon_sym_Y] = anon_sym_Y,
  [anon_sym_v] = anon_sym_v,
  [anon_sym_V] = anon_sym_V,
  [anon_sym_m] = anon_sym_m,
  [anon_sym_M] = anon_sym_M,
  [anon_sym_f] = anon_sym_f,
  [anon_sym_F] = anon_sym_F,
  [anon_sym_x] = anon_sym_x,
  [anon_sym_X] = anon_sym_X,
  [anon_sym_w] = anon_sym_w,
  [anon_sym_W] = anon_sym_W,
  [anon_sym_q] = anon_sym_q,
  [anon_sym_Q] = anon_sym_Q,
  [anon_sym_z] = anon_sym_z,
  [anon_sym_Z] = anon_sym_Z,
  [sym_source_file] = sym_source_file,
};

static const TSSymbolMetadata ts_symbol_metadata[] = {
  [ts_builtin_sym_end] = {
    .visible = false,
    .named = true,
  },
  [anon_sym_hello] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_a] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_A] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_b] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_B] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_o] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_O] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_r] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_R] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_t] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_T] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_s] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_S] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_c] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_C] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_i] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_I] = {
    .visible = true,
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
  [anon_sym_d] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_D] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_DASH] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_l] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_L] = {
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
  [anon_sym_g] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_G] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_h] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_H] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_u] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_U] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_k] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_K] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_p] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_P] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_y] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_Y] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_v] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_V] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_m] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_M] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_f] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_F] = {
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
  [anon_sym_w] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_W] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_q] = {
    .visible = true,
    .named = false,
  },
  [anon_sym_Q] = {
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
  [sym_source_file] = {
    .visible = true,
    .named = true,
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
};

static bool ts_lex(TSLexer *lexer, TSStateId state) {
  START_LEXER();
  eof = lexer->eof(lexer);
  switch (state) {
    case 0:
      if (eof) ADVANCE(6);
      if (lookahead == '-') ADVANCE(28);
      if (lookahead == 'A') ADVANCE(9);
      if (lookahead == 'B') ADVANCE(11);
      if (lookahead == 'C') ADVANCE(21);
      if (lookahead == 'D') ADVANCE(27);
      if (lookahead == 'E') ADVANCE(25);
      if (lookahead == 'F') ADVANCE(50);
      if (lookahead == 'G') ADVANCE(34);
      if (lookahead == 'H') ADVANCE(36);
      if (lookahead == 'I') ADVANCE(23);
      if (lookahead == 'K') ADVANCE(40);
      if (lookahead == 'L') ADVANCE(30);
      if (lookahead == 'M') ADVANCE(48);
      if (lookahead == 'N') ADVANCE(32);
      if (lookahead == 'O') ADVANCE(13);
      if (lookahead == 'P') ADVANCE(42);
      if (lookahead == 'Q') ADVANCE(56);
      if (lookahead == 'R') ADVANCE(15);
      if (lookahead == 'S') ADVANCE(19);
      if (lookahead == 'T') ADVANCE(17);
      if (lookahead == 'U') ADVANCE(38);
      if (lookahead == 'V') ADVANCE(46);
      if (lookahead == 'W') ADVANCE(54);
      if (lookahead == 'X') ADVANCE(52);
      if (lookahead == 'Y') ADVANCE(44);
      if (lookahead == 'Z') ADVANCE(58);
      if (lookahead == 'a') ADVANCE(8);
      if (lookahead == 'b') ADVANCE(10);
      if (lookahead == 'c') ADVANCE(20);
      if (lookahead == 'd') ADVANCE(26);
      if (lookahead == 'e') ADVANCE(24);
      if (lookahead == 'f') ADVANCE(49);
      if (lookahead == 'g') ADVANCE(33);
      if (lookahead == 'h') ADVANCE(35);
      if (lookahead == 'i') ADVANCE(22);
      if (lookahead == 'k') ADVANCE(39);
      if (lookahead == 'l') ADVANCE(29);
      if (lookahead == 'm') ADVANCE(47);
      if (lookahead == 'n') ADVANCE(31);
      if (lookahead == 'o') ADVANCE(12);
      if (lookahead == 'p') ADVANCE(41);
      if (lookahead == 'q') ADVANCE(55);
      if (lookahead == 'r') ADVANCE(14);
      if (lookahead == 's') ADVANCE(18);
      if (lookahead == 't') ADVANCE(16);
      if (lookahead == 'u') ADVANCE(37);
      if (lookahead == 'v') ADVANCE(45);
      if (lookahead == 'w') ADVANCE(53);
      if (lookahead == 'x') ADVANCE(51);
      if (lookahead == 'y') ADVANCE(43);
      if (lookahead == 'z') ADVANCE(57);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(0)
      END_STATE();
    case 1:
      if (lookahead == 'e') ADVANCE(4);
      END_STATE();
    case 2:
      if (lookahead == 'h') ADVANCE(1);
      if (lookahead == '\t' ||
          lookahead == '\n' ||
          lookahead == '\r' ||
          lookahead == ' ') SKIP(2)
      END_STATE();
    case 3:
      if (lookahead == 'l') ADVANCE(5);
      END_STATE();
    case 4:
      if (lookahead == 'l') ADVANCE(3);
      END_STATE();
    case 5:
      if (lookahead == 'o') ADVANCE(7);
      END_STATE();
    case 6:
      ACCEPT_TOKEN(ts_builtin_sym_end);
      END_STATE();
    case 7:
      ACCEPT_TOKEN(anon_sym_hello);
      END_STATE();
    case 8:
      ACCEPT_TOKEN(anon_sym_a);
      END_STATE();
    case 9:
      ACCEPT_TOKEN(anon_sym_A);
      END_STATE();
    case 10:
      ACCEPT_TOKEN(anon_sym_b);
      END_STATE();
    case 11:
      ACCEPT_TOKEN(anon_sym_B);
      END_STATE();
    case 12:
      ACCEPT_TOKEN(anon_sym_o);
      END_STATE();
    case 13:
      ACCEPT_TOKEN(anon_sym_O);
      END_STATE();
    case 14:
      ACCEPT_TOKEN(anon_sym_r);
      END_STATE();
    case 15:
      ACCEPT_TOKEN(anon_sym_R);
      END_STATE();
    case 16:
      ACCEPT_TOKEN(anon_sym_t);
      END_STATE();
    case 17:
      ACCEPT_TOKEN(anon_sym_T);
      END_STATE();
    case 18:
      ACCEPT_TOKEN(anon_sym_s);
      END_STATE();
    case 19:
      ACCEPT_TOKEN(anon_sym_S);
      END_STATE();
    case 20:
      ACCEPT_TOKEN(anon_sym_c);
      END_STATE();
    case 21:
      ACCEPT_TOKEN(anon_sym_C);
      END_STATE();
    case 22:
      ACCEPT_TOKEN(anon_sym_i);
      END_STATE();
    case 23:
      ACCEPT_TOKEN(anon_sym_I);
      END_STATE();
    case 24:
      ACCEPT_TOKEN(anon_sym_e);
      END_STATE();
    case 25:
      ACCEPT_TOKEN(anon_sym_E);
      END_STATE();
    case 26:
      ACCEPT_TOKEN(anon_sym_d);
      END_STATE();
    case 27:
      ACCEPT_TOKEN(anon_sym_D);
      END_STATE();
    case 28:
      ACCEPT_TOKEN(anon_sym_DASH);
      END_STATE();
    case 29:
      ACCEPT_TOKEN(anon_sym_l);
      END_STATE();
    case 30:
      ACCEPT_TOKEN(anon_sym_L);
      END_STATE();
    case 31:
      ACCEPT_TOKEN(anon_sym_n);
      END_STATE();
    case 32:
      ACCEPT_TOKEN(anon_sym_N);
      END_STATE();
    case 33:
      ACCEPT_TOKEN(anon_sym_g);
      END_STATE();
    case 34:
      ACCEPT_TOKEN(anon_sym_G);
      END_STATE();
    case 35:
      ACCEPT_TOKEN(anon_sym_h);
      END_STATE();
    case 36:
      ACCEPT_TOKEN(anon_sym_H);
      END_STATE();
    case 37:
      ACCEPT_TOKEN(anon_sym_u);
      END_STATE();
    case 38:
      ACCEPT_TOKEN(anon_sym_U);
      END_STATE();
    case 39:
      ACCEPT_TOKEN(anon_sym_k);
      END_STATE();
    case 40:
      ACCEPT_TOKEN(anon_sym_K);
      END_STATE();
    case 41:
      ACCEPT_TOKEN(anon_sym_p);
      END_STATE();
    case 42:
      ACCEPT_TOKEN(anon_sym_P);
      END_STATE();
    case 43:
      ACCEPT_TOKEN(anon_sym_y);
      END_STATE();
    case 44:
      ACCEPT_TOKEN(anon_sym_Y);
      END_STATE();
    case 45:
      ACCEPT_TOKEN(anon_sym_v);
      END_STATE();
    case 46:
      ACCEPT_TOKEN(anon_sym_V);
      END_STATE();
    case 47:
      ACCEPT_TOKEN(anon_sym_m);
      END_STATE();
    case 48:
      ACCEPT_TOKEN(anon_sym_M);
      END_STATE();
    case 49:
      ACCEPT_TOKEN(anon_sym_f);
      END_STATE();
    case 50:
      ACCEPT_TOKEN(anon_sym_F);
      END_STATE();
    case 51:
      ACCEPT_TOKEN(anon_sym_x);
      END_STATE();
    case 52:
      ACCEPT_TOKEN(anon_sym_X);
      END_STATE();
    case 53:
      ACCEPT_TOKEN(anon_sym_w);
      END_STATE();
    case 54:
      ACCEPT_TOKEN(anon_sym_W);
      END_STATE();
    case 55:
      ACCEPT_TOKEN(anon_sym_q);
      END_STATE();
    case 56:
      ACCEPT_TOKEN(anon_sym_Q);
      END_STATE();
    case 57:
      ACCEPT_TOKEN(anon_sym_z);
      END_STATE();
    case 58:
      ACCEPT_TOKEN(anon_sym_Z);
      END_STATE();
    default:
      return false;
  }
}

static const TSLexMode ts_lex_modes[STATE_COUNT] = {
  [0] = {.lex_state = 0},
  [1] = {.lex_state = 2},
  [2] = {.lex_state = 0},
  [3] = {.lex_state = 0},
};

static const uint16_t ts_parse_table[LARGE_STATE_COUNT][SYMBOL_COUNT] = {
  [0] = {
    [ts_builtin_sym_end] = ACTIONS(1),
    [anon_sym_a] = ACTIONS(1),
    [anon_sym_A] = ACTIONS(1),
    [anon_sym_b] = ACTIONS(1),
    [anon_sym_B] = ACTIONS(1),
    [anon_sym_o] = ACTIONS(1),
    [anon_sym_O] = ACTIONS(1),
    [anon_sym_r] = ACTIONS(1),
    [anon_sym_R] = ACTIONS(1),
    [anon_sym_t] = ACTIONS(1),
    [anon_sym_T] = ACTIONS(1),
    [anon_sym_s] = ACTIONS(1),
    [anon_sym_S] = ACTIONS(1),
    [anon_sym_c] = ACTIONS(1),
    [anon_sym_C] = ACTIONS(1),
    [anon_sym_i] = ACTIONS(1),
    [anon_sym_I] = ACTIONS(1),
    [anon_sym_e] = ACTIONS(1),
    [anon_sym_E] = ACTIONS(1),
    [anon_sym_d] = ACTIONS(1),
    [anon_sym_D] = ACTIONS(1),
    [anon_sym_DASH] = ACTIONS(1),
    [anon_sym_l] = ACTIONS(1),
    [anon_sym_L] = ACTIONS(1),
    [anon_sym_n] = ACTIONS(1),
    [anon_sym_N] = ACTIONS(1),
    [anon_sym_g] = ACTIONS(1),
    [anon_sym_G] = ACTIONS(1),
    [anon_sym_h] = ACTIONS(1),
    [anon_sym_H] = ACTIONS(1),
    [anon_sym_u] = ACTIONS(1),
    [anon_sym_U] = ACTIONS(1),
    [anon_sym_k] = ACTIONS(1),
    [anon_sym_K] = ACTIONS(1),
    [anon_sym_p] = ACTIONS(1),
    [anon_sym_P] = ACTIONS(1),
    [anon_sym_y] = ACTIONS(1),
    [anon_sym_Y] = ACTIONS(1),
    [anon_sym_v] = ACTIONS(1),
    [anon_sym_V] = ACTIONS(1),
    [anon_sym_m] = ACTIONS(1),
    [anon_sym_M] = ACTIONS(1),
    [anon_sym_f] = ACTIONS(1),
    [anon_sym_F] = ACTIONS(1),
    [anon_sym_x] = ACTIONS(1),
    [anon_sym_X] = ACTIONS(1),
    [anon_sym_w] = ACTIONS(1),
    [anon_sym_W] = ACTIONS(1),
    [anon_sym_q] = ACTIONS(1),
    [anon_sym_Q] = ACTIONS(1),
    [anon_sym_z] = ACTIONS(1),
    [anon_sym_Z] = ACTIONS(1),
  },
  [1] = {
    [sym_source_file] = STATE(3),
    [anon_sym_hello] = ACTIONS(3),
  },
};

static const uint16_t ts_small_parse_table[] = {
  [0] = 1,
    ACTIONS(5), 1,
      ts_builtin_sym_end,
  [4] = 1,
    ACTIONS(7), 1,
      ts_builtin_sym_end,
};

static const uint32_t ts_small_parse_table_map[] = {
  [SMALL_STATE(2)] = 0,
  [SMALL_STATE(3)] = 4,
};

static const TSParseActionEntry ts_parse_actions[] = {
  [0] = {.entry = {.count = 0, .reusable = false}},
  [1] = {.entry = {.count = 1, .reusable = false}}, RECOVER(),
  [3] = {.entry = {.count = 1, .reusable = true}}, SHIFT(2),
  [5] = {.entry = {.count = 1, .reusable = true}}, REDUCE(sym_source_file, 1),
  [7] = {.entry = {.count = 1, .reusable = true}},  ACCEPT_INPUT(),
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
