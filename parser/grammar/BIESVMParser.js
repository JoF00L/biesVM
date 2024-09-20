// Generated from BIESVM.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import BIESVMListener from './BIESVMListener.js';
import BIESVMVisitor from './BIESVMVisitor.js';

const serializedATN = [4,1,21,54,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
4,0,11,8,0,11,0,12,0,12,1,0,1,0,1,1,1,1,1,1,1,1,3,1,21,8,1,1,1,1,1,3,1,25,
8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,34,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,50,8,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,18,
19,67,0,10,1,0,0,0,2,24,1,0,0,0,4,49,1,0,0,0,6,51,1,0,0,0,8,11,3,2,1,0,9,
11,3,4,2,0,10,8,1,0,0,0,10,9,1,0,0,0,11,12,1,0,0,0,12,10,1,0,0,0,12,13,1,
0,0,0,13,14,1,0,0,0,14,15,5,0,0,1,15,1,1,0,0,0,16,17,5,1,0,0,17,18,5,17,
0,0,18,20,5,18,0,0,19,21,5,17,0,0,20,19,1,0,0,0,20,21,1,0,0,0,21,25,1,0,
0,0,22,23,5,2,0,0,23,25,5,17,0,0,24,16,1,0,0,0,24,22,1,0,0,0,25,3,1,0,0,
0,26,50,5,3,0,0,27,28,5,4,0,0,28,29,5,18,0,0,29,50,5,18,0,0,30,31,5,5,0,
0,31,33,5,18,0,0,32,34,5,18,0,0,33,32,1,0,0,0,33,34,1,0,0,0,34,50,1,0,0,
0,35,36,5,6,0,0,36,50,5,18,0,0,37,38,5,7,0,0,38,50,5,17,0,0,39,40,5,8,0,
0,40,50,3,6,3,0,41,50,5,9,0,0,42,50,5,10,0,0,43,50,5,11,0,0,44,50,5,12,0,
0,45,50,5,13,0,0,46,50,5,14,0,0,47,50,5,15,0,0,48,50,5,16,0,0,49,26,1,0,
0,0,49,27,1,0,0,0,49,30,1,0,0,0,49,35,1,0,0,0,49,37,1,0,0,0,49,39,1,0,0,
0,49,41,1,0,0,0,49,42,1,0,0,0,49,43,1,0,0,0,49,44,1,0,0,0,49,45,1,0,0,0,
49,46,1,0,0,0,49,47,1,0,0,0,49,48,1,0,0,0,50,5,1,0,0,0,51,52,7,0,0,0,52,
7,1,0,0,0,6,10,12,20,24,33,49];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BIESVMParser extends antlr4.Parser {

    static grammarFileName = "BIESVM.g4";
    static literalNames = [ null, "'$FUN'", "'$END'", "'POP'", "'BLD'", 
                            "'BST'", "'LDV'", "'LDF'", "'LDC'", "'ADD'", 
                            "'MUL'", "'DIV'", "'SUB'", "'APP'", "'PRN'", 
                            "'RET'", "'HLT'" ];
    static symbolicNames = [ null, "FUN", "END", "POP", "BLD", "BST", "LDV", 
                             "LDF", "LDC", "ADD", "MUL", "DIV", "SUB", "APP", 
                             "PRN", "RET", "HLT", "ID", "INT", "STRING", 
                             "WS", "COMMENT" ];
    static ruleNames = [ "program", "directive", "instruction", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BIESVMParser.ruleNames;
        this.literalNames = BIESVMParser.literalNames;
        this.symbolicNames = BIESVMParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BIESVMParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 2:
	                this.state = 8;
	                this.directive();
	                break;
	            case 3:
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	            case 9:
	            case 10:
	            case 11:
	            case 12:
	            case 13:
	            case 14:
	            case 15:
	            case 16:
	                this.state = 9;
	                this.instruction();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 12; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131070) !== 0));
	        this.state = 14;
	        this.match(BIESVMParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BIESVMParser.RULE_directive);
	    var _la = 0;
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new FunDirectiveContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 16;
	            this.match(BIESVMParser.FUN);
	            this.state = 17;
	            this.match(BIESVMParser.ID);
	            this.state = 18;
	            this.match(BIESVMParser.INT);
	            this.state = 20;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 19;
	                this.match(BIESVMParser.ID);
	            }

	            break;
	        case 2:
	            localctx = new EndDirectiveContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.match(BIESVMParser.END);
	            this.state = 23;
	            this.match(BIESVMParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BIESVMParser.RULE_instruction);
	    var _la = 0;
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            localctx = new PopInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.match(BIESVMParser.POP);
	            break;
	        case 4:
	            localctx = new BldInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.match(BIESVMParser.BLD);
	            this.state = 28;
	            this.match(BIESVMParser.INT);
	            this.state = 29;
	            this.match(BIESVMParser.INT);
	            break;
	        case 5:
	            localctx = new BstInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.match(BIESVMParser.BST);
	            this.state = 31;
	            this.match(BIESVMParser.INT);
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 32;
	                this.match(BIESVMParser.INT);
	            }

	            break;
	        case 6:
	            localctx = new LdvInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 35;
	            this.match(BIESVMParser.LDV);
	            this.state = 36;
	            this.match(BIESVMParser.INT);
	            break;
	        case 7:
	            localctx = new LdfInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 37;
	            this.match(BIESVMParser.LDF);
	            this.state = 38;
	            this.match(BIESVMParser.ID);
	            break;
	        case 8:
	            localctx = new LdcInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 39;
	            this.match(BIESVMParser.LDC);
	            this.state = 40;
	            this.value();
	            break;
	        case 9:
	            localctx = new AddInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 41;
	            this.match(BIESVMParser.ADD);
	            break;
	        case 10:
	            localctx = new MulInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 42;
	            this.match(BIESVMParser.MUL);
	            break;
	        case 11:
	            localctx = new DivInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 43;
	            this.match(BIESVMParser.DIV);
	            break;
	        case 12:
	            localctx = new SubInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 44;
	            this.match(BIESVMParser.SUB);
	            break;
	        case 13:
	            localctx = new AppInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 45;
	            this.match(BIESVMParser.APP);
	            break;
	        case 14:
	            localctx = new PrnInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 46;
	            this.match(BIESVMParser.PRN);
	            break;
	        case 15:
	            localctx = new RetInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 47;
	            this.match(BIESVMParser.RET);
	            break;
	        case 16:
	            localctx = new HltInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 48;
	            this.match(BIESVMParser.HLT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BIESVMParser.RULE_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===19)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

BIESVMParser.EOF = antlr4.Token.EOF;
BIESVMParser.FUN = 1;
BIESVMParser.END = 2;
BIESVMParser.POP = 3;
BIESVMParser.BLD = 4;
BIESVMParser.BST = 5;
BIESVMParser.LDV = 6;
BIESVMParser.LDF = 7;
BIESVMParser.LDC = 8;
BIESVMParser.ADD = 9;
BIESVMParser.MUL = 10;
BIESVMParser.DIV = 11;
BIESVMParser.SUB = 12;
BIESVMParser.APP = 13;
BIESVMParser.PRN = 14;
BIESVMParser.RET = 15;
BIESVMParser.HLT = 16;
BIESVMParser.ID = 17;
BIESVMParser.INT = 18;
BIESVMParser.STRING = 19;
BIESVMParser.WS = 20;
BIESVMParser.COMMENT = 21;

BIESVMParser.RULE_program = 0;
BIESVMParser.RULE_directive = 1;
BIESVMParser.RULE_instruction = 2;
BIESVMParser.RULE_value = 3;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BIESVMParser.RULE_program;
    }

	EOF() {
	    return this.getToken(BIESVMParser.EOF, 0);
	};

	directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DirectiveContext);
	    } else {
	        return this.getTypedRuleContext(DirectiveContext,i);
	    }
	};

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BIESVMParser.RULE_directive;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FunDirectiveContext extends DirectiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FUN() {
	    return this.getToken(BIESVMParser.FUN, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BIESVMParser.ID);
	    } else {
	        return this.getToken(BIESVMParser.ID, i);
	    }
	};


	INT() {
	    return this.getToken(BIESVMParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterFunDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitFunDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitFunDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.FunDirectiveContext = FunDirectiveContext;

class EndDirectiveContext extends DirectiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	END() {
	    return this.getToken(BIESVMParser.END, 0);
	};

	ID() {
	    return this.getToken(BIESVMParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterEndDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitEndDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitEndDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.EndDirectiveContext = EndDirectiveContext;

class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BIESVMParser.RULE_instruction;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BstInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BST() {
	    return this.getToken(BIESVMParser.BST, 0);
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BIESVMParser.INT);
	    } else {
	        return this.getToken(BIESVMParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterBstInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitBstInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitBstInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.BstInstructionContext = BstInstructionContext;

class SubInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SUB() {
	    return this.getToken(BIESVMParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterSubInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitSubInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitSubInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.SubInstructionContext = SubInstructionContext;

class MulInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MUL() {
	    return this.getToken(BIESVMParser.MUL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterMulInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitMulInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitMulInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.MulInstructionContext = MulInstructionContext;

class PopInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	POP() {
	    return this.getToken(BIESVMParser.POP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterPopInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitPopInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitPopInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.PopInstructionContext = PopInstructionContext;

class AddInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ADD() {
	    return this.getToken(BIESVMParser.ADD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterAddInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitAddInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitAddInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.AddInstructionContext = AddInstructionContext;

class BldInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BLD() {
	    return this.getToken(BIESVMParser.BLD, 0);
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BIESVMParser.INT);
	    } else {
	        return this.getToken(BIESVMParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterBldInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitBldInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitBldInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.BldInstructionContext = BldInstructionContext;

class LdfInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LDF() {
	    return this.getToken(BIESVMParser.LDF, 0);
	};

	ID() {
	    return this.getToken(BIESVMParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterLdfInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitLdfInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitLdfInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.LdfInstructionContext = LdfInstructionContext;

class AppInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	APP() {
	    return this.getToken(BIESVMParser.APP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterAppInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitAppInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitAppInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.AppInstructionContext = AppInstructionContext;

class RetInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	RET() {
	    return this.getToken(BIESVMParser.RET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterRetInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitRetInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitRetInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.RetInstructionContext = RetInstructionContext;

class DivInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DIV() {
	    return this.getToken(BIESVMParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterDivInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitDivInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitDivInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.DivInstructionContext = DivInstructionContext;

class HltInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	HLT() {
	    return this.getToken(BIESVMParser.HLT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterHltInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitHltInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitHltInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.HltInstructionContext = HltInstructionContext;

class LdcInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LDC() {
	    return this.getToken(BIESVMParser.LDC, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterLdcInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitLdcInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitLdcInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.LdcInstructionContext = LdcInstructionContext;

class LdvInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LDV() {
	    return this.getToken(BIESVMParser.LDV, 0);
	};

	INT() {
	    return this.getToken(BIESVMParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterLdvInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitLdvInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitLdvInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.LdvInstructionContext = LdvInstructionContext;

class PrnInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PRN() {
	    return this.getToken(BIESVMParser.PRN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterPrnInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitPrnInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitPrnInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

BIESVMParser.PrnInstructionContext = PrnInstructionContext;

class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BIESVMParser.RULE_value;
    }

	INT() {
	    return this.getToken(BIESVMParser.INT, 0);
	};

	STRING() {
	    return this.getToken(BIESVMParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BIESVMListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BIESVMVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




BIESVMParser.ProgramContext = ProgramContext; 
BIESVMParser.DirectiveContext = DirectiveContext; 
BIESVMParser.InstructionContext = InstructionContext; 
BIESVMParser.ValueContext = ValueContext; 
