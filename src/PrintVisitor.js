import fs from 'fs';
import antlr4 from 'antlr4';

import BIESVMLexer from '../parser/grammar/BIESVMLexer.js';
import BIESVMParser from '../parser/grammar/BIESVMParser.js';
import BIESVMVisitor from '../parser/grammar/BIESVMVisitor.js';  // Usaremos el Visitor en lugar del Listener
import { VM } from '../src/VM.js';

class PrintVisitor extends BIESVMVisitor {
    constructor() {
        super();
        this.instructions = []; // Almacenamos las instrucciones
    }

    // Visita el nodo de programa (punto de entrada)
    visitProgram(ctx) {
        this.visitChildren(ctx); // Recorrer todos los nodos hijos del programa
        return this.instructions; // Devolver las instrucciones recogidas
    }

    visitFunDirective(ctx) {
        const functionName = ctx.ID(0).getText();
        const numArgs = ctx.INT() ? ctx.INT().getText() : null;
        const maybeMain = ctx.ID(1) ? ctx.ID(1).getText() : null;
        console.log(`$FUN ${functionName} ${numArgs || ''} ${maybeMain || ''}`); // Depuración
        this.instructions.push(`FUN ${functionName} ${numArgs || ''} ${maybeMain || ''}`);
        return null;
    }

    visitEndDirective(ctx) {
        const functionName = ctx.ID().getText();
        console.log(`$END ${functionName}`);  // Depuración
        this.instructions.push(`END ${functionName}`);
        return null;
    }

    visitPopInstruction(ctx) {
        console.log("POP");  // Depuración
        this.instructions.push("POP");
        return null;
    }

    visitBldInstruction(ctx) {
        const arg1 = ctx.INT(0).getText();
        const arg2 = ctx.INT(1).getText();
        console.log(`BLD ${arg1} ${arg2}`);  // Depuración
        this.instructions.push(`BLD ${arg1} ${arg2}`);
        return null;
    }

    visitBstInstruction(ctx) {
        const arg1 = ctx.INT(0).getText();  // Siempre habrá al menos un INT
        const arg2 = ctx.INT(1) ? ctx.INT(1).getText() : null;  // Puede que haya un segundo INT o no
        
        if (arg2) {
            console.log(`BST ${arg1} ${arg2}`);  // Depuración cuando hay dos argumentos
            this.instructions.push(`BST ${arg1} ${arg2}`);
        } else {
            console.log(`BST ${arg1}`);  // Depuración cuando hay solo un argumento
            this.instructions.push(`BST ${arg1}`);
        }
        return null;
    }

    visitLdvInstruction(ctx) {
        const value = ctx.INT().getText();
        console.log(`LDV ${value}`);  // Depuración
        this.instructions.push(`LDV ${value}`);
        return null;
    }

    visitLdfInstruction(ctx) {
        const functionName = ctx.ID().getText();
        console.log(`LDF ${functionName}`);  // Depuración
        this.instructions.push(`LDF ${functionName}`);
        return null;
    }

    visitLdcInstruction(ctx) {
        if (ctx.INT()) {
            const value = ctx.INT().getText();
            console.log(`LDC ${value}`);  // Depuración
            this.instructions.push(`LDC ${value}`);
        } else {
            const value = ctx.STRING().getText();
            console.log(`LDC ${value}`);  // Depuración
            this.instructions.push(`LDC ${value}`);
        }
        return null;
    }

    visitAddInstruction(ctx) {
        console.log("ADD");  // Depuración
        this.instructions.push("ADD");
        return null;
    }

    visitMulInstruction(ctx) {
        console.log("MUL");  // Depuración
        this.instructions.push("MUL");
        return null;
    }

    visitDivInstruction(ctx) {
        console.log("DIV");  // Depuración
        this.instructions.push("DIV");
        return null;
    }

    visitSubInstruction(ctx) {
        console.log("SUB");  // Depuración
        this.instructions.push("SUB");
        return null;
    }

    visitPrnInstruction(ctx) {
        console.log("PRN");  // Depuración
        this.instructions.push("PRN");
        return null;
    }

    visitRetInstruction(ctx) {
        console.log("RET");  // Depuración
        this.instructions.push("RET");
        return null;
    }

    visitHltInstruction(ctx) {
        console.log("HLT");  // Depuración
        this.instructions.push("HLT");
        return null;
    }
    visitVariableDeclaration(ctx) {
        const varName = ctx.ID().getText();  // Nombre de la variable
        const value = ctx.INT().getText();   // Valor de la variable
        this.instructions.push(`LDV ${value}`);  // Cargar el valor en el registro
        this.instructions.push(`BST 0 0`);       // Guardar en el entorno de nivel 0
        this.instructions.push(`BLD 0 0`);       // Restaurar el entorno
        console.log(`Variable '${varName}' declarada con valor ${value}`);
        return null;
    }
    visitChildren(ctx) {
        if (!ctx) return;

        // Recorre los hijos del nodo actual y visita cada uno
        for (let i = 0; i < ctx.getChildCount(); i++) {
            this.visit(ctx.getChild(i));
        }
        return null;
    }
}

function test_parser(input_file = './test/input.txt') {
    console.log(`>>> Reading ${input_file}`);
    
    const input = fs.readFileSync(input_file, 'utf-8');
    
    // Configurar ANTLR4
    const chars = new antlr4.InputStream(input);
    const lexer = new BIESVMLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new BIESVMParser(tokens);
    parser.buildParseTrees = true;

    // Parsear la entrada y crear el AST
    const ast = parser.program();
    
    // Recorrer el AST con el visitante
    const visitor = new PrintVisitor();
    const instructions = visitor.visit(ast);

    console.log(`\n>>> Processing ${input_file} done`);
    console.log(`Instructions: ${instructions.join(', ')}`);  // Depuración

    // Ejecutar las instrucciones en la VM
    const vm = new VM();
    vm.run(instructions);
}

// Exportar el parser para ser utilizado en otros archivos
export default test_parser;
