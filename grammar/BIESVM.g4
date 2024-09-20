grammar BIESVM;

// Definir la entrada del parser
program : (directive | instruction)+ EOF;

// Definir las directivas
directive
    : FUN ID INT ID?  # FunDirective
    | END ID          # EndDirective
    ;

// Definir las instrucciones con la cantidad y tipo de argumentos
instruction
    : POP                    # PopInstruction
    | BLD INT INT            # BldInstruction
    | BST INT (INT)?         # BstInstruction  // Acepta 1 o 2 INT
    | LDV INT                # LdvInstruction  
    | LDF ID                 # LdfInstruction   
    | LDC value              # LdcInstruction
    | ADD                    # AddInstruction
    | MUL                    # MulInstruction
    | DIV                    # DivInstruction
    | SUB                    # SubInstruction
    | APP                    # AppInstruction   
    | PRN                    # PrnInstruction
    | RET                    # RetInstruction
    | HLT                    # HltInstruction
    ;

// Definir los valores
value : INT | STRING;

// Directivas del linker/loader
FUN  : '$FUN';
END  : '$END';

// Definir tokens para las instrucciones
POP  : 'POP';
BLD  : 'BLD';
BST  : 'BST';  
LDV  : 'LDV';  
LDF  : 'LDF';  
LDC  : 'LDC';
ADD  : 'ADD';
MUL  : 'MUL';
DIV  : 'DIV';
SUB  : 'SUB';
APP  : 'APP';  
PRN  : 'PRN';
RET  : 'RET';
HLT  : 'HLT';

// Definir los token básicos
ID      : [a-zA-Z_$][a-zA-Z_$0-9]*;
INT     : [0-9]+;
STRING  : '"' .*? '"';
WS      : [ \t\r\n]+ -> skip;

// Comentarios de una línea (inician con ; y terminan con newline)
COMMENT : ';' .*? '\n' -> channel(HIDDEN);
