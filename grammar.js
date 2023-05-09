const
  // case insensitive chars
  A = /[aA]/,
  B = /[bB]/,
  C = /[cC]/,
  D = /[dD]/,
  E = /[eE]/,
  F = /[fF]/,
  G = /[gG]/,
  H = /[hH]/,
  I = /[iI]/,
  J = /[jJ]/,
  K = /[kK]/,
  L = /[lL]/,
  M = /[mM]/,
  N = /[nN]/,
  O = /[oO]/,
  P = /[pP]/,
  Q = /[qQ]/,
  R = /[rR]/,
  S = /[sS]/,
  T = /[tT]/,
  U = /[uU]/,
  V = /[vV]/,
  W = /[wW]/,
  X = /[xX]/,
  Y = /[yY]/,
  Z = /[zZ]/,
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
  ABORT = /[aA][bB][oO][rR][tT]/,
  ACCEPT = /[aA][cC][cC][eE][pP][tT]/,
  ACCESS = /[aA][cC][cC][eE][sS][sS]/,
  ADD = /[aA][dD][dD]/,
  ADDRESS = /[aA][dD][dD][rR][eE][sS][sS]/,
  ADVANCING = /[aA][dD][vV][aA][nN][cC][iI][nN][gG]/,
  AFTER = /[aA][fF][tT][eE][rR]/,
  ALIGNED = /[aA][lL][iI][gG][nN][eE][dD]/,
  ALL = /[aA][lL][lL]/,
  ALPHABET = /[aA][lL][pP][hH][aA][bB][eE][tT]/,
  ALPHABETIC = /[aA][lL][pP][hH][aA][bB][eE][tT][iI][cC]/,
  ALPHABETIC_LOWER = /[aA][lL][pP][hH][aA][bB][eE][tT][iI][cC]-[rR][lL][oO][wW][eE][rR]/,
  ALPHABETIC_UPPER = /[aA][lL][pP][hH][aA][bB][eE][tT][iI][cC]-[rR][uU][pP][pP][eE][rR]/,
  ALPHANUMERIC = /[aA][lL][pP][hH][aA][nN][uU][mM][eE][rR][iI][cC]/,
  ALPHANUMERIC_EDITED = /[aA][lL][pP][hH][aA][nN][uU][mM][eE][rR][iI][cC]-[rR][eE][dD][iI][tT][eE][dD]/,
  ALSO = /[aA][lL][sS][oO]/,
  ALTER = /[aA][lL][tT][eE][rR]/,
  ALTERNATE = /[aA][lL][tT][eE][rR][nN][aA][tT][eE]/,
  AND = /[aA][nN][dD]/,
  ANY = /[aA][nN][yY]/,
  ARE = /[aA][rR][eE]/,
  AREA = /[aA][rR][eE][aA]/,
  AREAS = /[aA][rR][eE][aA][sS]/,
  AS = /[aA][sS]/,
  ASCENDING = /[aA][sS][cC][eE][nN][dD][iI][nN][gG]/,
  ASCII = /[aA][sS][cC][iI][iI]/,
  ASSIGN = /[aA][sS][sS][iI][gG][nN]/,
  ASSOCIATED_DATA = /[aA][sS][sS][oO][cC][iI][aA][tT][eE][dD]-[rR][dD][aA][tT][aA]/,
  ASSOCIATED_DATA_LENGTH = /[aA][sS][sS][oO][cC][iI][aA][tT][eE][dD]-[rR][dD][aA][tT][aA]-[rR][lL][eE][nN][gG][tT][hH]/,
  AT = /[aA][tT]/,
  ATTRIBUTE = /[aA][tT][tT][rR][iI][bB][uU][tT][eE]/,
  AUTHOR = /[aA][uU][tT][hH][oO][rR]/,
  AUTO = /[aA][uU][tT][oO]/,
  AUTO_SKIP = /[aA][uU][tT][oO]-[rR][sS][kK][iI][pP]/,
  BACKGROUND_COLOR = /[bB][aA][cC][kK][gG][rR][oO][uU][nN][dD]-[rR][cC][oO][lL][oO][rR]/,
  BACKGROUND_COLOUR = /[bB][aA][cC][kK][gG][rR][oO][uU][nN][dD]-[rR][cC][oO][lL][oO][uU][rR]/,
  BASIS = /[bB][aA][sS][iI][sS]/,
  BEEP = /[bB][eE][eE][pP]/,
  BEFORE = /[bB][eE][fF][oO][rR][eE]/,
  BEGINNING = /[bB][eE][gG][iI][nN][nN][iI][nN][gG]/,
  BELL = /[bB][eE][lL][lL]/,
  BINARY = /[bB][iI][nN][aA][rR][yY]/,
  BIT = /[bB][iI][tT]/,
  BLANK = /[bB][lL][aA][nN][kK]/,
  BLINK = /[bB][lL][iI][nN][kK]/,
  BLOB = /[bB][lL][oO][bB]/,
  BLOCK = /[bB][lL][oO][cC][kK]/,
  BOUNDS = /[bB][oO][uU][nN][dD][sS]/,
  BOTTOM = /[bB][oO][tT][tT][oO][mM]/,
  BY = /[bB][yY]/,
  BYFUNCTION = /[bB][yY][fF][uU][nN][cC][tT][iI][oO][nN]/,
  BYTITLE = /[bB][yY][tT][iI][tT][lL][eE]/,
  CALL = /[cC][aA][lL][lL]/,
  CANCEL = /[cC][aA][nN][cC][eE][lL]/,
  CAPABLE = /[cC][aA][pP][aA][bB][lL][eE]/,
  CCSVERSION = /[cC][cC][sS][vV][eE][rR][sS][iI][oO][nN]/,
  CD = /[cC][dD]/,
  CF = /[cC][fF]/,
  CH = /[cC][hH]/,
  CHAINING = /[cC][hH][aA][iI][nN][iI][nN][gG]/,
  CHANGED = /[cC][hH][aA][nN][gG][eE][dD]/,
  CHANNEL = /[cC][hH][aA][nN][nN][eE][lL]/,
  CHARACTER = /[cC][hH][aA][rR][aA][cC][tT][eE][rR]/,
  CHARACTERS = /[cC][hH][aA][rR][aA][cC][tT][eE][rR][sS]/,
  CLASS = /[cC][lL][aA][sS][sS]/,
  CLASS_ID = /[cC][lL][aA][sS][sS]-[rR][iI][dD]/,
  CLOB = /[cC][lL][oO][bB]/,
  CLOCK_UNITS = /[cC][lL][oO][cC][kK]-[rR][uU][nN][iI][tT][sS]/,
  CLOSE = /[cC][lL][oO][sS][eE]/,
  CLOSE_DISPOSITION = /[cC][lL][oO][sS][eE]-[rR][dD][iI][sS][pP][oO][sS][iI][tT][iI][oO][nN]/,
  COBOL = /[cC][oO][bB][oO][lL]/,
  CODE = /[cC][oO][dD][eE]/,
  CODE_SET = /[cC][oO][dD][eE]-[rR][sS][eE][tT]/,
  COLLATING = /[cC][oO][lL][lL][aA][tT][iI][nN][gG]/,
  COL = /[cC][oO][lL]/,
  COLUMN = /[cC][oO][lL][uU][mM][nN]/,
  COM_REG = /[cC][oO][mM]-[rR][rR][eE][gG]/,
  COMMA = /[cC][oO][mM][mM][aA]/,
  COMMITMENT = /[cC][oO][mM][mM][iI][tT][mM][eE][nN][tT]/,
  COMMON = /[cC][oO][mM][mM][oO][nN]/,
  COMMUNICATION = /[cC][oO][mM][mM][uU][nN][iI][cC][aA][tT][iI][oO][nN]/,
  COMP = /[cC][oO][mM][pP]/,
  COMP_1 = /[cC][oO][mM][pP]-[rR]1/,
  COMP_2 = /[cC][oO][mM][pP]-[rR]2/,
  COMP_3 = /[cC][oO][mM][pP]-[rR]3/,
  COMP_4 = /[cC][oO][mM][pP]-[rR]4/,
  COMP_5 = /[cC][oO][mM][pP]-[rR]5/,
  COMPUTATIONAL = /[cC][oO][mM][pP][uU][tT][aA][tT][iI][oO][nN][aA][lL]/,
  COMPUTATIONAL_1 = /[cC][oO][mM][pP][uU][tT][aA][tT][iI][oO][nN][aA][lL]-[rR]1/,
  COMPUTATIONAL_2 = /[cC][oO][mM][pP][uU][tT][aA][tT][iI][oO][nN][aA][lL]-[rR]2/,
  COMPUTATIONAL_3 = /[cC][oO][mM][pP][uU][tT][aA][tT][iI][oO][nN][aA][lL]-[rR]3/,
  COMPUTATIONAL_4 = /[cC][oO][mM][pP][uU][tT][aA][tT][iI][oO][nN][aA][lL]-[rR]4/,
  COMPUTATIONAL_5 = /[cC][oO][mM][pP][uU][tT][aA][tT][iI][oO][nN][aA][lL]-[rR]5/,
  COMPUTE = /[cC][oO][mM][pP][uU][tT][eE]/,
  CONFIGURATION = /[cC][oO][nN][fF][iI][gG][uU][rR][aA][tT][iI][oO][nN]/,
  CONTAINS = /[cC][oO][nN][tT][aA][iI][nN][sS]/,
  CONTENT = /[cC][oO][nN][tT][eE][nN][tT]/,
  CONTINUE = /[cC][oO][nN][tT][iI][nN][uU][eE]/,
  CONTROL = /[cC][oO][nN][tT][rR][oO][lL]/,
  CONTROL_POINT = /[cC][oO][nN][tT][rR][oO][lL]-[rR][pP][oO][iI][nN][tT]/,
  CONTROLS = /[cC][oO][nN][tT][rR][oO][lL][sS]/,
  CONVENTION = /[cC][oO][nN][vV][eE][nN][tT][iI][oO][nN]/,
  CONVERTING = /[cC][oO][nN][vV][eE][rR][tT][iI][nN][gG]/,
  COPY = /[cC][oO][pP][yY]/,
  CORR = /[cC][oO][rR][rR]/,
  CORRESPONDING = /[cC][oO][rR][rR][eE][sS][pP][oO][nN][dD][iI][nN][gG]/,
  COUNT = /[cC][oO][uU][nN][tT]/,
  CRUNCH = /[cC][rR][uU][nN][cC][hH]/,
  CURRENCY = /[cC][uU][rR][rR][eE][nN][cC][yY]/,
  CURSOR = /[cC][uU][rR][sS][oO][rR]/,
  DATA = /[dD][aA][tT][aA]/,
  DATA_BASE = /[dD][aA][tT][aA]-[rR][bB][aA][sS][eE]/,
  DATE = /[dD][aA][tT][eE]/,
  DATE_COMPILED = /[dD][aA][tT][eE]-[rR][cC][oO][mM][pP][iI][lL][eE][dD]/,
  DATE_WRITTEN = /[dD][aA][tT][eE]-[rR][wW][rR][iI][tT][tT][eE][nN]/,
  DAY = /[dD][aA][yY]/,
  DAY_OF_WEEK = /[dD][aA][yY]-[rR][oO][fF]-[rR][wW][eE][eE][kK]/,
  DBCS = /[dD][bB][cC][sS]/,
  DBCLOB = /[dD][bB][cC][lL][oO][bB]/,
  DE = /[dD][eE]/,
  DEBUG_CONTENTS = /[dD][eE][bB][uU][gG]-[rR][cC][oO][nN][tT][eE][nN][tT][sS]/,
  DEBUG_ITEM = /[dD][eE][bB][uU][gG]-[rR][iI][tT][eE][mM]/,
  DEBUG_LINE = /[dD][eE][bB][uU][gG]-[rR][lL][iI][nN][eE]/,
  DEBUG_NAME = /[dD][eE][bB][uU][gG]-[rR][nN][aA][mM][eE]/,
  DEBUG_SUB_1 = /[dD][eE][bB][uU][gG]-[rR][sS][uU][bB]-[rR]1/,
  DEBUG_SUB_2 = /[dD][eE][bB][uU][gG]-[rR][sS][uU][bB]-[rR]2/,
  DEBUG_SUB_3 = /[dD][eE][bB][uU][gG]-[rR][sS][uU][bB]-[rR]3/,
  DEBUGGING = /[dD][eE][bB][uU][gG][gG][iI][nN][gG]/,
  DECIMAL_POINT = /[dD][eE][cC][iI][mM][aA][lL]-[rR][pP][oO][iI][nN][tT]/,
  DECLARATIVES = /[dD][eE][cC][lL][aA][rR][aA][tT][iI][vV][eE][sS]/,
  DEFAULT = /[dD][eE][fF][aA][uU][lL][tT]/,
  DEFAULT_DISPLAY = /[dD][eE][fF][aA][uU][lL][tT]-[rR][dD][iI][sS][pP][lL][aA][yY]/,
  DEFINITION = /[dD][eE][fF][iI][nN][iI][tT][iI][oO][nN]/,
  DELETE = /[dD][eE][lL][eE][tT][eE]/,
  DELIMITED = /[dD][eE][lL][iI][mM][iI][tT][eE][dD]/,
  DELIMITER = /[dD][eE][lL][iI][mM][iI][tT][eE][rR]/,
  DEPENDING = /[dD][eE][pP][eE][nN][dD][iI][nN][gG]/,
  DESCENDING = /[dD][eE][sS][cC][eE][nN][dD][iI][nN][gG]/,
  DESTINATION = /[dD][eE][sS][tT][iI][nN][aA][tT][iI][oO][nN]/,
  DETAIL = /[dD][eE][tT][aA][iI][lL]/,
  DFHRESP = /[dD][fF][hH][rR][eE][sS][pP]/,
  DFHVALUE = /[dD][fF][hH][vV][aA][lL][uU][eE]/,
  DISABLE = /[dD][iI][sS][aA][bB][lL][eE]/,
  DISK = /[dD][iI][sS][kK]/,
  DISPLAY = /[dD][iI][sS][pP][lL][aA][yY]/,
  DISPLAY_1 = /[dD][iI][sS][pP][lL][aA][yY]-[rR]1/,
  DIVIDE = /[dD][iI][vV][iI][dD][eE]/,
  DIVISION = /[dD][iI][vV][iI][sS][iI][oO][nN]/,
  DONTCARE = /[dD][oO][nN][tT][cC][aA][rR][eE]/,
  DOUBLE = /[dD][oO][uU][bB][lL][eE]/,
  DOWN = /[dD][oO][wW][nN]/,
  DUPLICATES = /[dD][uU][pP][lL][iI][cC][aA][tT][eE][sS]/,
  DYNAMIC = /[dD][yY][nN][aA][mM][iI][cC]/,
  EBCDIC = /[eE][bB][cC][dD][iI][cC]/,
  EGCS = /[eE][gG][cC][sS]/,// E X T E N S I O N
  EGI = /[eE][gG][iI]/,
  ELSE = /[eE][lL][sS][eE]/,
  EMI = /[eE][mM][iI]/,
  EMPTY_CHECK = /[eE][mM][pP][tT][yY]-[rR][cC][hH][eE][cC][kK]/,
  ENABLE = /[eE][nN][aA][bB][lL][eE]/,
  END = /[eE][nN][dD]/,
  END_ACCEPT = /[eE][nN][dD]-[rR][aA][cC][cC][eE][pP][tT]/,
  END_ADD = /[eE][nN][dD]-[rR][aA][dD][dD]/,
  END_CALL = /[eE][nN][dD]-[rR][cC][aA][lL][lL]/,
  END_COMPUTE = /[eE][nN][dD]-[rR][cC][oO][mM][pP][uU][tT][eE]/,
  END_DELETE = /[eE][nN][dD]-[rR][dD][eE][lL][eE][tT][eE]/,
  END_DISPLAY = /[eE][nN][dD]-[rR][dD][iI][sS][pP][lL][aA][yY]/,
  END_DIVIDE = /[eE][nN][dD]-[rR][dD][iI][vV][iI][dD][eE]/,
  END_EVALUATE = /[eE][nN][dD]-[rR][eE][vV][aA][lL][uU][aA][tT][eE]/,
  END_IF = /[eE][nN][dD]-[rR][iI][fF]/,
  END_MULTIPLY = /[eE][nN][dD]-[rR][mM][uU][lL][tT][iI][pP][lL][yY]/,
  END_OF_PAGE = /[eE][nN][dD]-[rR][oO][fF]-[rR][pP][aA][gG][eE]/,
  END_PERFORM = /[eE][nN][dD]-[rR][pP][eE][rR][fF][oO][rR][mM]/,
  END_READ = /[eE][nN][dD]-[rR][rR][eE][aA][dD]/,
  END_RECEIVE = /[eE][nN][dD]-[rR][rR][eE][cC][eE][iI][vV][eE]/,
  END_REMARKS = /[eE][nN][dD]-[rR][rR][eE][mM][aA][rR][kK][sS]/,
  END_RETURN = /[eE][nN][dD]-[rR][rR][eE][tT][uU][rR][nN]/,
  END_REWRITE = /[eE][nN][dD]-[rR][rR][eE][wW][rR][iI][tT][eE]/,
  END_SEARCH = /[eE][nN][dD]-[rR][sS][eE][aA][rR][cC][hH]/,
  END_START = /[eE][nN][dD]-[rR][sS][tT][aA][rR][tT]/,
  END_STRING = /[eE][nN][dD]-[rR][sS][tT][rR][iI][nN][gG]/,
  END_SUBTRACT = /[eE][nN][dD]-[rR][sS][uU][bB][tT][rR][aA][cC][tT]/,
  END_UNSTRING = /[eE][nN][dD]-[rR][uU][nN][sS][tT][rR][iI][nN][gG]/,
  END_WRITE = /[eE][nN][dD]-[rR][wW][rR][iI][tT][eE]/,
  ENDING = /[eE][nN][dD][iI][nN][fF]/,
  ENTER = /[eE][nN][tT][eE][rR]/,
  ENTRY = /[eE][nN][tT][rR][yY]/,
  ENTRY_PROCEDURE = /[eE][nN][tT][rR][yY]-[rR][pP][rR][oO][cC][eE][dD][uU][rR][eE]/,
  ENVIRONMENT = /[eE][nN][vV][iI][rR][oO][nN][mM][eE][nN][tT]/,
  EOP = /[eE][oO][pP]/,
  EQUAL = /[eE][qQ][uU][aA][lL]/,
  ERASE = /[eE][rR][aA][sS][eE]/,
  ERROR = /[eE][rR][rR][oO][rR]/,
  EOL = /[eE][oO][lL]/,
  EOS = /[eE][oO][sS]/,
  ESCAPE = /[eE][sS][cC][aA][pP][eE]/,
  ESI = /[eE][sS][iI]/,
  EVALUATE = /[eE][vV][aA][lL][uU][aA][tT][eE]/,
  EVENT = /[eE][vV][eE][nN][tT]/,
  EVERY = /[eE][vV][eE][rR][yY]/,
  EXCEPTION = /[eE][xX][cC][eE][pP][tT][iI][oO][nN]/,
  EXCLUSIVE = /[eE][xX][cC][lL][uU][sS][iI][vV][eE]/,
  EXHIBIT = /[eE][xX][hH][iI][bB][iI][tT]/,
  EXIT = /[eE][xX][iI][tT]/,
  EXPORT = /[eE][xX][pP][oO][rR][tT]/,
  EXTEND = /[eE][xX][tT][eE][nN][dD]/,
  EXTENDED = /[eE][xX][tT][eE][nN][dD][eE][dD]/,
  EXTERNAL = /[eE][xX][tT][eE][rR][nN][aA][lL]/,
  FALSE = /[fF][aA][lL][sS][eE]/,
  FD = /[fF][dD]/,
  FILE = /[fF][iI][lL][eE]/,
  FILE_CONTROL = /[fF][iI][lL][eE]-[rR][cC][oO][nN][tT][rR][oO][lL]/,
  FILLER = /[fF][iI][lL][lL][eE][rR]/,
  FINAL = /[fF][iI][nN][aA][lL]/,
  FIRST = /[fF][iI][rR][sS][tT]/,
  FOOTING = /[fF][oO][oO][tT][iI][nN][gG]/,
  FOR = /[fF][oO][rR]/,
  FOREGROUND_COLOR = /[fF][oO][rR][eE][gG][rR][oO][uU][nN][dD]-[rR][cC][oO][lL][oO][rR]/,
  FOREGROUND_COLOUR = /[fF][oO][rR][eE][gG][rR][oO][uU][nN][dD]-[rR][cC][oO][lL][oO][uU][rR]/,
  FROM = /[fF][rR][oO][mM]/,
  FULL = /[fF][uU][lL][lL]/,
  FUNCTION = /[fF][uU][nN][cC][tT][iI][oO][nN]/,
  FUNCTIONNAME = /[fF][uU][nN][cC][tT][iI][oO][nN][nN][aA][mM][eE]/,
  FUNCTION_POINTER = /[fF][uU][nN][cC][tT][iI][oO][nN]-[rR][pP][oO][iI][nN][tT][eE][rR]/,
  GENERATE = /[gG][eE][nN][eE][rR][aA][tT][eE]/,
  GOBACK = /[gG][oO][bB][aA][cC][kK]/,
  GIVING = /[gG][iI][vV][iI][nN][gG]/,
  GLOBAL = /[gG][lL][oO][bB][aA][lL]/,
  GO = /[gG][oO]/,
  GREATER = /[gG][rR][eE][aA][tT][eE][rR]/,
  GRID = /[gG][rR][iI][dD]/,
  GROUP = /[gG][rR][oO][uU][pP]/,
  HEADING = /[hH][eE][aA][dD][iI][nN][gG]/,
  HIGHLIGHT = /[hH][iI][gG][hH][lL][iI][gG][hH][tT]/,
  HIGH_VALUE = /[hH][iI][gG][hH]-[rR][vV][aA][lL][uU][eE]/,
  HIGH_VALUES = /[hH][iI][gG][hH]-[rR][vV][aA][lL][uU][eE][sS]/,
  I_O = /[iI]-[rR][oO]/,
  I_O_CONTROL = /[iI]-[rR][oO]-[rR][cC][oO][nN][tT][rR][oO][lL]/,
  ID = /[iI][dD]/,
  IDENTIFICATION = /[iI][dD][eE][nN][tT][iI][fF][iI][cC][aA][tT][iI][oO][nN]/,
  IF = /[iI][fF]/,
  IMPLICIT = /[iI][mM][pP][lL][iI][cC][iI][tT]/,
  IMPORT = /[iI][mM][pP][oO][rR][tT]/,
  IN = /[iI][nN]/,
  INDEX = /[iI][nN][dD][eE][xX]/,
  INDEXED = /[iI][nN][dD][eE][xX][eE][dD]/,
  INDICATE = /[iI][nN][dD][iI][cC][aA][tT][eE]/,
  INITIAL = /[iI][nN][iI][tT][iI][aA][lL]/,
  INITIALIZE = /[iI][nN][iI][tT][iI][aA][lL][iI][zZ][eE]/,
  INITIATE = /[iI][nN][iI][tT][iI][aA][tT][eE]/,
  INPUT = /[iI][nN][pP][uU][tT]/,
  INPUT_OUTPUT = /[iI][nN][pP][uU][tT]-[rR][oO][uU][tT][pP][uU][tT]/,
  INSPECT = /[iI][nN][sS][pP][eE][cC][tT]/,
  INSTALLATION = /[iI][nN][sS][tT][aA][lL][lL][aA][tT][iI][oO][nN]/,
  INTEGER = /[iI][nN][tT][eE][gG][eE][rR]/,
  INTO = /[iI][nN][tT][oO]/,
  INVALID = /[iI][nN][vV][aA][lL][iI][dD]/,
  INVOKE = /[iI][nN][vV][oO][kK][eE]/,
  IS = /[iI][sS]/,
  JUST = /[jJ][uU][sS][tT]/,
  JUSTIFIED = /[jJ][uU][sS][tT][iI][fF][iI][eE][dD]/,
  KANJI = /[kK][aA][nN][jJ][iI]/,
  KEPT = /[kK][eE][pP][tT]/,
  KEY = /[kK][eE][yY]/,
  KEYBOARD = /[kK][eE][yY][bB][oO][aA][rR][dD]/,
  LABEL = /[lL][aA][bB][eE][lL]/,
  LANGUAGE = /[lL][aA][nN][gG][uU][aA][gG][eE]/,
  LAST = /[lL][aA][sS][tT]/,
  LB = /[lL][bB]/,
  LD = /[lL][dD]/,
  LEADING = /[lL][eE][aA][dD][iI][nN][gG]/,
  LEFT = /[lL][eE][fF][tT]/,
  LEFTLINE = /[lL][eE][fF][tT][lL][iI][nN][eE]/,
  LENGTH = /[lL][eE][nN][gG][tT][hH]/,
  LENGTH_CHECK = /[lL][eE][nN][gG][tT][hH]-[rR][cC][hH][eE][cC][kK]/,
  LESS = /[lL][eE][sS][sS]/,
  LIBACCESS = /[lL][iI][bB][aA][cC][cC][eE][sS][sS]/,
  LIBPARAMETER = /[lL][iI][bB][pP][aA][rR][aA][mM][eE][tT][eE][rR]/,
  LIBRARY = /[lL][iI][bB][rR][aA][rR][yY]/,
  LIMIT = /[lL][iI][mM][iI][tT]/,
  LIMITS = /[lL][iI][mM][iI][tT][sS]/,
  LINAGE = /[lL][iI][nN][aA][gG][eE]/,
  LINAGE_COUNTER = /[lL][iI][nN][aA][gG][eE]-[rR][cC][oO][uU][nN][tT][eE][rR]/,
  LINE = /[lL][iI][nN][eE]/,
  LINES = /[lL][iI][nN][eE][sS]/,
  LINE_COUNTER = /[lL][iI][nN][eE]-[rR][cC][oO][uU][nN][tT][eE][rR]/,
  LINKAGE = /[lL][iI][nN][kK][aA][gG][eE]/,
  LIST = /[lL][iI][sS][tT]/,
  LOCAL = /[lL][oO][cC][aA][lL]/,
  LOCAL_STORAGE = /[lL][oO][cC][aA][lL]-[rR][sS][tT][oO][rR][aA][gG][eE]/,
  LOCK = /[lL][oO][cC][kK]/,
  LONG_DATE = /[lL][oO][nN][gG]-[rR][dD][aA][tT][eE]/,
  LONG_TIME = /[lL][oO][nN][gG]-[rR][tT][iI][mM][eE]/,
  LOWER = /[lL][oO][wW][eE][rR]/,
  LOWLIGHT = /[lL][oO][wW][lL][iI][gG][hH][tT]/,
  LOW_VALUE = /[lL][oO][wW]-[rR][vV][aA][lL][uU][eE]/,
  LOW_VALUES = /[lL][oO][wW]-[rR][vV][aA][lL][uU][eE][sS]/,
  MEMORY = /[mM][eE][mM][oO][rR][yY]/,
  MERGE = /[mM][eE][rR][gG][eE]/,
  MESSAGE = /[mM][eE][sS][sS][aA][gG][eE]/,
  MMDDYYYY = /[mM][mM][dD][dD][yY][yY][yY][yY]/,
  MODE = /[mM][oO][dD][eE]/,
  MODULES = /[mM][oO][dD][uU][lL][eE][sS]/,
  MORE_LABELS = /[mM][oO][rR][eE]-[rR][lL][aA][bB][eE][lL][sS]/,
  MOVE = /[mM][oO][vV][eE]/,
  MULTIPLE = /[mM][uU][lL][tT][iI][pP][lL][eE]/,
  MULTIPLY = /[mM][uU][lL][tT][iI][pP][lL][yY]/,
  NAMED = /[nN][aA][mM][eE][dD]/,
  NATIONAL = /[nN][aA][tT][iI][oO][nN][aA][lL]/,
  NATIONAL_EDITED = /[nN][aA][tT][iI][oO][nN][aA][lL]-[rR][eE][dD][iI][tT][eE][dD]/,
  NATIVE = /[nN][aA][tT][iI][vV][eE]/,
  NEGATIVE = /[nN][eE][gG][aA][tT][iI][vV][eE]/,
  NETWORK = /[nN][eE][tT][wW][oO][rR][kK]/,
  NEXT = /[nN][eE][xX][tT]/,
  NO = /[nN][oO]/,
  NO_ECHO = /[nN][oO]-[rR][eE][cC][hH][oO]/,
  NOT = /[nN][oO][tT]/,
  NULL = /[nN][uU][lL][lL]/,
  NULLS = /[nN][uU][lL][lL][sS]/,
  NUMBER = /[nN][uU][mM][bB][eE][rR]/,
  NUMERIC = /[nN][uU][mM][eE][rR][iI][cC]/,
  NUMERIC_DATE = /[nN][uU][mM][eE][rR][iI][cC]-[rR][dD][aA][tT][eE]/,
  NUMERIC_EDITED = /[nN][uU][mM][eE][rR][iI][cC]-[rR][eE][dD][iI][tT][eE][dD]/,
  NUMERIC_TIME = /[nN][uU][mM][eE][rR][iI][cC]-[rR][tT][iI][mM][eE]/,
  OBJECT_COMPUTER = /[oO][bB][jJ][eE][cC][tT]-[rR][cC][oO][mM][pP][uU][tT][eE][rR]/,
  OCCURS = /[oO][cC][cC][uU][rR][sS]/,
  ODT = /[oO][dD][tT]/,
  OF = /[oO][fF]/,
  OFF = /[oO][fF][fF]/,
  OMITTED = /[oO][mM][iI][tT][tT][eE][dD]/,
  ON = /[oO][nN]/,
  OPEN = /[oO][pP][eE][nN]/,
  OPTIONAL = /[oO][pP][tT][iI][oO][nN][aA][lL]/,
  OR = /[oO][rR]/,
  ORDER = /[oO][rR][dD][eE][rR]/,
  ORDERLY = /[oO][rR][dD][eE][rR][lL][yY]/,
  ORGANIZATION = /[oO][rR][gG][aA][nN][iI][zZ][aA][tT][iI][oO][nN]/,
  OTHER = /[oO][tT][hH][eE][rR]/,
  OUTPUT = /[oO][uU][tT][pP][uU][tT]/,
  OVERFLOW = /[oO][vV][eE][rR][fF][lL][oO][wW]/,
  OVERLINE = /[oO][vV][eE][rR][lL][iI][nN][eE]/,
  OWN = /[oO][wW][nN]/,
  PACKED_DECIMAL = /[pP][aA][cC][kK][eE][dD]-[rR][dD][eE][cC][iI][mM][aA][lL]/,
  PADDING = /[pP][aA][dD][dD][iI][nN][gG]/,
  PAGE = /[pP][aA][gG][eE]/,
  PAGE_COUNTER = /[pP][aA][gG][eE]-[rR][cC][oO][uU][nN][tT][eE][rR]/,
  PASSWORD = /[pP][aA][sS][sS][wW][oO][rR][dD]/,
  PERFORM = /[pP][eE][rR][fF][oO][rR][mM]/,
  PF = /[pP][fF]/,
  PH = /[pP][hH]/,
  PIC = /[pP][iI][cC]/,
  PICTURE = /[pP][iI][cC][tT][uU][rR][eE]/,
  PLUS = /[pP][lL][uU][sS]/,
  POINTER = /[pP][oO][iI][nN][tT][eE][rR]/,
  POSITION = /[pP][oO][sS][iI][tT][iI][oO][nN]/,
  POSITIVE = /[pP][oO][sS][iI][tT][iI][vV][eE]/,
  PORT = /[pP][oO][rR][tT]/,
  PRINTER = /[pP][rR][iI][nN][tT][eE][rR]/,
  PRINTING = /[pP][rR][iI][nN][tT][iI][nN][gG]/,
  PRIVATE = /[pP][rR][iI][vV][aA][tT][eE]/,
  PROCEDURE = /[pP][rR][oO][cC][eE][dD][uU][rR][eE]/,
  PROCEDURE_POINTER = /[pP][rR][oO][cC][eE][dD][uU][rR][eE]-[rR][pP][oO][iI][nN][tT][eE][rR]/,
  PROCEDURES = /[pP][rR][oO][cC][eE][dD][uU][rR][eE][sS]/,
  PROCEED = /[pP][rR][oO][cC][eE][eE][dD]/,
  PROCESS = /[pP][rR][oO][cC][eE][sS][sS]/,
  PROGRAM = /[pP][rR][oO][gG][rR][aA][mM]/,
  PROGRAM_ID = /[pP][rR][oO][gG][rR][aA][mM]-[rR][iI][dD]/,
  PROGRAM_LIBRARY = /[pP][rR][oO][gG][rR][aA][mM]-[rR][lL][iI][bB][rR][aA][rR][yY]/,
  PROMPT = /[pP][rR][oO][mM][pP][tT]/,
  PURGE = /[pP][uU][rR][gG][eE]/,
  QUEUE = /[qQ][uU][eE][uU][eE]/,
  QUOTE = /[qQ][uU][oO][tT][eE]/,
  QUOTES = /[qQ][uU][oO][tT][eE][sS]/,
  RANDOM = /[rR][aA][nN][dD][oO][mM]/,
  READER = /[rR][eE][aA][dD][eE][rR]/,
  REMOTE = /[rR][eE][mM][oO][tT][eE]/,
  RD = /[rR][dD]/,
  REAL = /[rR][eE][aA][lL]/,
  READ = /[rR][eE][aA][dD]/,
  RECEIVE = /[rR][eE][cC][eE][iI][vV][eE]/,
  RECEIVED = /[rR][eE][cC][eE][iI][vV][eE][dD]/,
  RECORD = /[rR][eE][cC][oO][rR][dD]/,
  RECORDING = /[rR][eE][cC][oO][rR][dD][iI][nN][gG]/,
  RECORDS = /[rR][eE][cC][oO][rR][dD][sS]/,
  RECURSIVE = /[rR][eE][cC][uU][rR][sS][iI][vV][eE]/,
  REDEFINES = /[rR][eE][dD][eE][fF][iI][nN][eE][sS]/,
  REEL = /[rR][eE][eE][lL]/,
  REF = /[rR][eE][fF]/,
  REFERENCE = /[rR][eE][fF][eE][rR][eE][nN][cC][eE]/,
  REFERENCES = /[rR][eE][fF][eE][rR][eE][nN][cC][eE][sS]/,
  RELATIVE = /[rR][eE][lL][aA][tT][iI][vV][eE]/,
  RELEASE = /[rR][eE][lL][eE][aA][sS][eE]/,
  REMAINDER = /[rR][eE][mM][aA][iI][nN][dD][eE][rR]/,
  REMARKS = /[rR][eE][mM][aA][rR][kK][sS]/,
  REMOVAL = /[rR][eE][mM][oO][vV][aA][lL]/,
  REMOVE = /[rR][eE][mM][oO][vV][eE]/,
  RENAMES = /[rR][eE][nN][aA][mM][eE][sS]/,
  REPLACE = /[rR][eE][pP][lL][aA][cC][eE]/,
  REPLACING = /[rR][eE][pP][lL][aA][cC][iI][nN][gG]/,
  REPORT = /[rR][eE][pP][oO][rR][tT]/,
  REPORTING = /[rR][eE][pP][oO][rR][tT][iI][nN][gG]/,
  REPORTS = /[rR][eE][pP][oO][rR][tT][sS]/,
  REQUIRED = /[rR][eE][qQ][uU][iI][rR][eE][dD]/,
  RERUN = /[rR][eE][rR][uU][nN]/,
  RESERVE = /[rR][eE][sS][eE][rR][vV][eE]/,
  REVERSE_VIDEO = /[rR][eE][sS][eE][rR][vV][eE]-[rR][vV][iI][dD][eE][oO]/,
  RESET = /[rR][eE][sS][eE][tT]/,
  RETURN = /[rR][eE][tT][uU][rR][nN]/,
  RETURN_CODE = /[rR][eE][tT][uU][rR][nN]-[rR][cC][oO][dD][eE]/,
  RETURNING = /[rR][eE][tT][uU][rR][nN][iI][nN][gG]/,
  REVERSED = /[rR][eE][vV][eE][rR][sS][eE][dD]/,
  REWIND = /[rR][eE][wW][iI][nN][dD]/,
  REWRITE = /[rR][eE][wW][rR][iI][tT][eE]/,
  RF = /[rR][fF]/,
  RH = /[rR][hH]/,
  RIGHT = /[rR][iI][gG][hH][tT]/,
  ROUNDED = /[rR][oO][uU][nN][dD][eE][dD]/,
  RUN = /[rR][uU][nN]/,
  SAME = /[sS][aA][mM][eE]/,
  SAVE = /[sS][aA][vV][eE]/,
  SCREEN = /[sS][cC][rR][eE][eE][nN]/,
  SD = /[sS][dD]/,
  SEARCH = /[sS][eE][aA][rR][cC][hH]/,
  SECTION = /[sS][eE][cC][tT][iI][oO][nN]/,
  SECURE = /[sS][eE][cC][uU][rR][eE]/,
  SECURITY = /[sS][eE][cC][uU][rR][iI][tT][yY]/,
  SEGMENT = /[sS][eE][gG][mM][eE][nN][tT]/,
  SEGMENT_LIMIT = /[sS][eE][gG][mM][eE][nN][tT]-[rR][lL][iI][mM][iI][tT]/,
  SELECT = /[sS][eE][lL][eE][cC][tT]/,
  SEND = /[sS][eE][nN][dD]/,
  SENTENCE = /[sS][eE][nN][tT][eE][nN][cC][eE]/,
  SEPARATE = /[sS][eE][pP][aA][rR][aA][tT][eE]/,
  SEQUENCE = /[sS][eE][qQ][uU][eE][nN][cC][eE]/,
  SEQUENTIAL = /[sS][eE][qQ][uU][eE][nN][tT][iI][aA][lL]/,
  SET = /[sS][eE][tT]/,
  SHARED = /[sS][hH][aA][rR][eE][dD]/,
  SHAREDBYALL = /[sS][hH][aA][rR][eE][dD][bB][yY][aA][lL][lL]/,
  SHAREDBYRUNUNIT = /[sS][hH][aA][rR][eE][dD][bB][yY][rR][uU][nN][uU][nN][iI][tT]/,
  SHARING = /[sS][hH][aA][rR][iI][nN][gG]/,
  SHIFT_IN = /[sS][hH][iI][fF][tT]-[rR][iI][nN]/,
  SHIFT_OUT = /[sS][hH][iI][fF][tT]-[rR][oO][uU][tT]/,
  SHORT_DATE = /[sS][hH][oO][rR][tT]-[rR][dD][aA][tT][eE]/,
  SIGN = /[sS][iI][gG][nN]/,
  SIZE = /[sS][iI][zZ][eE]/,
  SORT = /[sS][oO][rR][tT]/,
  SORT_CONTROL = /[sS][oO][rR][tT]-[rR][cC][oO][nN][tT][rR][oO][lL]/,
  SORT_CORE_SIZE = /[sS][oO][rR][tT]-[rR][cC][oO][rR][eE]-[rR][sS][iI][zZ][eE]/,
  SORT_FILE_SIZE = /[sS][oO][rR][tT]-[rR][fF][iI][lL][eE]-[rR][sS][iI][zZ][eE]/,
  SORT_MERGE = /[sS][oO][rR][tT]-[rR][mM][eE][rR][gG][eE]/,
  SORT_MESSAGE = /[sS][oO][rR][tT]-[rR][mM][eE][sS][sS][aA][gG][eE]/,
  SORT_MODE_SIZE = /[sS][oO][rR][tT]-[rR][mM][oO][dD][eE]-[rR][sS][iI][zZ][eE]/,
  SORT_RETURN = /[sS][oO][rR][tT]-[rR][rR][eE][tT][uU][rR][nN]/,
  SOURCE = /[sS][oO][uU][rR][cC][eE]/,
  SOURCE_COMPUTER = /[sS][oO][uU][rR][cC][eE]-[rR][cC][oO][mM][pP][uU][tT][eE][rR]/,
  SPACE = /[sS][pP][aA][cC][eE]/,
  SPACES = /[sS][pP][aA][cC][eE][sS]/,
  SPECIAL_NAMES = /[sS][pP][eE][cC][iI][aA][lL]-[rR][nN][aA][mM][eE][sS]/,
  SQL = /[sS][qQ][lL]/,
  STANDARD = /[sS][tT][aA][nN][dD][aA][rR][dD]/,
  STANDARD_1 = /[sS][tT][aA][nN][dD][aA][rR][dD]-[rR]1/,
  STANDARD_2 = /[sS][tT][aA][nN][dD][aA][rR][dD]-[rR]2/,
  START = /[sS][tT][aA][rR][tT]/,
  STATUS = /[sS][tT][aA][tT][uU][sS]/,
  STOP = /[sS][tT][oO][pP]/,
  STRING = /[sS][tT][rR][iI][nN][gG]/,
  SUB_QUEUE_1 = /[sS][uU][bB]-[rR][qQ][uU][eE][uU][eE]-[rR]1/,
  SUB_QUEUE_2 = /[sS][uU][bB]-[rR][qQ][uU][eE][uU][eE]-[rR]2/,
  SUB_QUEUE_3 = /[sS][uU][bB]-[rR][qQ][uU][eE][uU][eE]-[rR]3/,
  SUBTRACT = /[sS][uU][bB][tT][rR][aA][cC][tT]/,
  SUM = /[sS][uU][mM]/,
  SUPPRESS = /[sS][uU][pP][pP][rR][eE][sS][sS]/,
  SYMBOL = /[sS][yY][mM][bB][oO][lL]/,
  SYMBOLIC = /[sS][yY][mM][bB][oO][lL][iI][cC]/,
  SYNC = /[sS][yY][nN][cC]/,
  SYNCHRONIZED = /[sS][yY][nN][cC][hH][rR][oO][nN][iI][zZ][eE][dD]/,
  TABLE = /[tT][aA][bB][lL][eE]/,
  TALLY = /[tT][aA][lL][lL][yY]/,
  TALLYING = /[tT][aA][lL][lL][yY][iI][nN][gG]/,
  TASK = /[tT][aA][sS][kK]/,
  TAPE = /[tT][aA][pP][eE]/,
  TERMINAL = /[tT][eE][rR][mM][iI][nN][aA][lL]/,
  TERMINATE = /[tT][eE][rR][mM][iI][nN][aA][tT][eE]/,
  TEST = /[tT][eE][sS][tT]/,
  TEXT = /[tT][eE][xX][tT]/,
  THAN = /[tT][hH][aA][nN]/,
  THEN = /[tT][hH][eE][nN]/,
  THREAD = /[tT][hH][rR][eE][aA][dD]/,
  THREAD_LOCAL = /[tT][hH][rR][eE][aA][dD]-[rR][lL][oO][cC][aA][lL]/,
  THROUGH = /[tT][hH][rR][oO][uU][gG][hH]/,
  THRU = /[tT][hH][rR][uU]/,
  TIME = /[tT][iI][mM][eE]/,
  TIMER = /[tT][iI][mM][eE][rR]/,
  TIMES = /[tT][iI][mM][eE][sS]/,
  TITLE = /[tT][iI][tT][lL][eE]/,
  TO = /[tT][oO]/,
  TODAYS_DATE = /[tT][oO][dD][aA][yY][sS]-[rR][dD][aA][tT][eE]/,
  TODAYS_NAME = /[tT][oO][dD][aA][yY][sS]-[rR][nN][aA][mM][eE]/,
  TOP = /[tT][oO][pP]/,
  TRAILING = /[tT][rR][aA][iI][lL][iI][nN][gG]/,
  TRUE = /[tT][rR][uU][eE]/,
  TRUNCATED = /[tT][rR][uU][nN][cC][aA][tT][eE][dD]/,
  TYPE = /[tT][yY][pP][eE]/,
  TYPEDEF = /[tT][yY][pP][eE][dD][eE][fF]/,
  UNDERLINE = /[uU][nN][dD][eE][rR][lL][iI][nN][eE]/,
  UNIT = /[uU][nN][iI][tT]/,
  UNSTRING = /[uU][nN][sS][tT][rR][iI][nN][gG]/,
  UNTIL = /[uU][nN][tT][iI][lL]/,
  UP = /[uU][pP]/,
  UPON = /[uU][pP][oO][nN]/,
  USAGE = /[uU][sS][aA][gG][eE]/,
  USE = /[uU][sS][eE]/,
  USING = /[uU][sS][iI][nN][gG]/,
  VALUE = /[vV][aA][lL][uU][eE]/,
  VALUES = /[vV][aA][lL][uU][eE][sS]/,
  VARYING = /[vV][aA][rR][yY][iI][nN][gG]/,
  VIRTUAL = /[vV][iI][rR][tT][uU][aA][lL]/,
  WAIT = /[wW][aA][iI][tT]/,
  WHEN = /[wW][hH][eE][nN]/,
  WHEN_COMPILED = /[wW][hH][eE][nN]-[rR][cC][oO][mM][pP][iI][lL][eE][dD]/,
  WITH = /[wW][iI][tT][hH]/,
  WORDS = /[wW][oO][rR][dD][sS]/,
  WORKING_STORAGE = /[wW][oO][rR][kK][iI][nN][gG]-[rR][sS][tT][oO][rR][aA][gG][eE]/,
  WRITE = /[wW][rR][iI][tT][eE]/,
  YEAR = /[yY][eE][aA][rR]/,
  YYYYMMDD = /[yY][yY][yY][yY][mM][mM][dD][dD]/,
  YYYYDDD = /[yY][yY][yY][yY][dD][dD][dD]/,
  ZERO = /[zZ][eE][rR][oO]/,
  ZERO_FILL = /[zZ][eE][rR][oO]-[rR][fF][iI][lL][lL]/,
  ZEROS = /[zZ][eE][rR][oO][sS]/,
  ZEROES = /[zZ][eE][rR][oO][eE][sS]/,

  // literals
  HEXNUMBER = token(choice(seq(X, '"', /[0-9A-F]+/, '"'), seq(X, '\'', /[0-9A-F]+/, '\''))),
  NULLTERMINATED = token(choice(seq(Z, '"', /(~["\n\r] | '""' | '\'')*/, '"'), seq(Z, '\'', /(~['\n\r] | '\'\'' | '"')*/, '\''))),
  STRINGLITERAL = token(choice(seq('"', /(~["\n\r] | '""' | '\'')*/, '"'), seq('\'', /(~['\n\r] | '\'\'' | '"')*/, '\''))),
  DBCSLITERAL = token(choice(seq(choice(G, N), '"', /(~["\n\r] | '""' | '\'')*/, '"'), seq(choice(G, N), '\'', /(~['\n\r] | '\'\'' | '"')*/, '\''))),
  INTEGERLITERAL = token(seq(optional(choice(PLUSCHAR, MINUSCHAR)), /[0-9]+/)),
  NUMERICLITERAL = token(seq(optional(choice(PLUSCHAR, MINUSCHAR)), /[0-9]*/, choice(DOT, COMMACHAR), /[0-9]+/, optional(seq(E, optional(choice(PLUSCHAR, MINUSCHAR)), /[0-9]+/)))),

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
    acceptFromDateStatement: $ => seq(
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
    ),
    acceptFromMnemonicStatement: $ => seq(FROM, $.mnemonicName),
    acceptFromEscapeKeyStatement: $ => seq(FROM, ESCAPE, KEY),
    acceptMessageCountStatement: $ => seq(optional(MESSAGE), COUNT),

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