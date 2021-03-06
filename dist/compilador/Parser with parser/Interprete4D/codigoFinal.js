/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var codigoFinal = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[17,20],$V1=[1,58],$V2=[1,62],$V3=[1,61],$V4=[1,60],$V5=[1,59],$V6=[5,20,47];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"inicio":3,"Op4D":4,"EOF":5,"Op":6,"Asignacion":7,"Salto":8,"SaltoP":9,"Metodo":10,"LlamarMetodo":11,"GuardarARR":12,"ObtenerARR":13,"Print":14,"Lectura":15,"Etiqueta":16,":":17,"ReMetodo":18,"+":19,",":20,"Dato":21,"TEMPORAL":22,"-":23,"*":24,"/":25,"PTR":26,"HEAP":27,"=":28,"JMP":29,"ETIQUETA":30,"JE":31,"JNE":32,"JG":33,"JGE":34,"JL":35,"JLE":36,"BEGIN":37,"ID":38,"END":39,"CALL":40,"<=":41,"STACK":42,"=>":43,"PRINT":44,"(":45,"CARA":46,")":47,";":48,"DIGITO":49,"FLOAT":50,"INVALUE":51,"NUMBERLIST":52,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",17:":",19:"+",20:",",22:"TEMPORAL",23:"-",24:"*",25:"/",26:"PTR",27:"HEAP",28:"=",29:"JMP",30:"ETIQUETA",31:"JE",32:"JNE",33:"JG",34:"JGE",35:"JL",36:"JLE",37:"BEGIN",38:"ID",39:"END",40:"CALL",41:"<=",42:"STACK",43:"=>",44:"PRINT",45:"(",46:"CARA",47:")",48:";",49:"DIGITO",50:"FLOAT",51:"INVALUE",52:"NUMBERLIST"},
productions_: [0,[3,2],[3,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,2],[4,1],[6,7],[6,7],[6,7],[6,7],[6,7],[6,7],[6,7],[7,6],[7,6],[8,5],[9,7],[9,7],[9,7],[9,7],[9,7],[9,7],[10,5],[18,5],[11,5],[12,7],[12,7],[13,7],[13,7],[14,7],[14,7],[14,7],[15,5],[21,1],[21,1],[21,1],[21,1],[21,1],[16,1],[16,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 15:
parser.struct.op.sumar($$[$0-4],$$[$0-2],$$[$0]);
break;
case 16:
parser.struct.op.restar($$[$0-4],$$[$0-2],$$[$0]);
break;
case 17:
parser.struct.op.multiplicar($$[$0-4],$$[$0-2],$$[$0]);
break;
case 18:
parser.struct.op.dividir($$[$0-4],$$[$0-2],$$[$0]);
break;
case 19:
parser.struct.op.aumetarptr  ($$[$0-4],$$[$0-2]);
break;
case 20:
parser.struct.op.aumentarpth  ($$[$0-4],$$[$0-2]);
break;
case 21:
parser.struct.op.disminuirptr ($$[$0-4],$$[$0-2]);
break;
case 22:
parser.struct.op.setValTemp($$[$0],$$[$0-3]); console.log("Asignacion");
break;
case 23:
parser.struct.op.Dato($$[$0],$$[$0-3]); console.log("Asignacion");
break;
case 24:
parser.indice.valor = parser.struct.op.eitqueta($$[$0]);
break;
case 25:
parser.indice.valor = parser.struct.op.igual($$[$0-4],$$[$0],$$[$0-2],parser.indice.valor);
break;
case 26:
parser.indice.valor = parser.struct.op.noigual($$[$0-4],$$[$0],$$[$0-2],parser.indice.valor);
break;
case 27:
parser.indice.valor = parser.struct.op.mayorque($$[$0-4],$$[$0],$$[$0-2],parser.indice.valor);
break;
case 28:
parser.indice.valor = parser.struct.op.mayorIgual($$[$0-4],$$[$0],$$[$0-2],parser.indice.valor);
break;
case 29:
parser.indice.valor = parser.struct.op.menorque($$[$0-4],$$[$0],$$[$0-2],parser.indice.valor);
break;
case 30:
parser.indice.valor = parser.struct.op.menorIgual($$[$0-4],$$[$0],$$[$0-2],parser.indice.valor);
break;
case 31:
(parser.struct.op.begin($$[$0]));
break;
case 32:
parser.indice.valor = parser.struct.op.endMetodo($$[$0]);
break;
case 33:
parser.indice.valor = parser.struct.op.callMetodo($$[$0]);
break;
case 34:
parser.struct.op.setSTACK($$[$0-4],$$[$0-2]);
break;
case 35:
parser.struct.op.setHEAP ($$[$0-4],$$[$0-2]);
break;
case 36:
parser.struct.op.getSTACK($$[$0-4],$$[$0-2]);
break;
case 37:
parser.struct.op.getHEAP ($$[$0-4],$$[$0-2]);
break;
case 38:
parser.struct.op.printC ($$[$0-2]);
break;
case 39: case 40:
parser.struct.op.printD ($$[$0-2]);
break;
case 41:
parser.struct.op.leer ($$[$0]);
break;
case 42:
this.$ = parser.struct.op.getValtemp($$[$0]);
break;
case 43:
this.$ = parser.struct.op.convertiNumero($$[$0]);
break;
case 44: case 46:
this.$ = parser.struct.op.ptr; 
break;
case 45:
this.$ = parser.struct.op.pth; 
break;
}
},
table: [{3:1,4:2,5:[1,3],6:4,7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:12,15:13,16:14,18:15,19:[1,16],23:[1,17],24:[1,18],25:[1,19],28:[1,20],29:[1,21],30:[1,33],31:[1,22],32:[1,23],33:[1,24],34:[1,25],35:[1,26],36:[1,27],37:[1,28],39:[1,34],40:[1,29],41:[1,30],43:[1,31],44:[1,32]},{1:[3]},{5:[1,35]},{1:[2,2]},{5:[2,3]},{5:[2,4]},{5:[2,5]},{5:[2,6]},{5:[2,7]},{5:[2,8]},{5:[2,9]},{5:[2,10]},{5:[2,11]},{5:[2,12]},{17:[1,36],20:[1,37]},{5:[2,14]},{20:[1,38]},{20:[1,39]},{20:[1,40]},{20:[1,41]},{20:[1,42]},{20:[1,43]},{20:[1,44]},{20:[1,45]},{20:[1,46]},{20:[1,47]},{20:[1,48]},{20:[1,49]},{20:[1,50]},{20:[1,51]},{20:[1,52]},{20:[1,53]},{45:[1,54]},o($V0,[2,47]),{20:[1,55]},{1:[2,1]},{5:[2,13]},{30:[1,56]},{21:57,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:63,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:64,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:65,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:66,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{20:[1,67]},{21:68,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:69,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:70,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:71,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:72,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:73,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{20:[1,74]},{20:[1,75]},{21:76,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:77,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{46:[1,78],49:[1,79],50:[1,80]},{20:[1,81]},o($V0,[2,48]),{20:[1,82]},o([20,47],[2,42]),o($V6,[2,43]),o($V6,[2,44]),o($V6,[2,45]),o($V6,[2,46]),{20:[1,83]},{20:[1,84]},{20:[1,85]},{20:[1,86]},{20:[1,87]},{20:[1,88]},{20:[1,89]},{20:[1,90]},{20:[1,91]},{20:[1,92]},{20:[1,93]},{20:[1,94]},{20:[1,95]},{20:[1,96]},{20:[1,97]},{20:[1,98]},{20:[1,99]},{20:[1,100]},{20:[1,101]},{21:102,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:103,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:104,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:105,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{20:[1,106]},{30:[1,107]},{21:108,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:109,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:110,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:111,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:112,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:113,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{38:[1,114]},{38:[1,115],51:[1,116]},{21:117,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{22:[1,118]},{21:119,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:120,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{21:121,22:$V1,26:$V2,27:$V3,42:$V4,52:$V5},{38:[1,122]},{20:[1,123]},{20:[1,124]},{20:[1,125]},{20:[1,126]},{21:128,22:[1,127],26:$V2,27:$V3,42:$V4,52:$V5},{5:[2,24]},{20:[1,129]},{20:[1,130]},{20:[1,131]},{20:[1,132]},{20:[1,133]},{20:[1,134]},{5:[2,31]},{5:[2,33]},{5:[2,41]},{20:[1,135]},{20:[1,136]},{47:[1,137]},{47:[1,138]},{47:[1,139]},{5:[2,32]},{22:[1,140],26:[1,141],27:[1,142]},{22:[1,143],26:[1,144]},{22:[1,145]},{22:[1,146]},{5:[2,22]},{5:[2,23]},{30:[1,147]},{30:[1,148]},{30:[1,149]},{30:[1,150]},{30:[1,151]},{30:[1,152]},{27:[1,154],42:[1,153]},{27:[1,156],42:[1,155]},{48:[1,157]},{48:[1,158]},{48:[1,159]},{5:[2,15]},{5:[2,19]},{5:[2,20]},{5:[2,16]},{5:[2,21]},{5:[2,17]},{5:[2,18]},{5:[2,25]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[2,29]},{5:[2,30]},{5:[2,34]},{5:[2,35]},{5:[2,36]},{5:[2,37]},{5:[2,38]},{5:[2,39]},{5:[2,40]}],
defaultActions: {3:[2,2],4:[2,3],5:[2,4],6:[2,5],7:[2,6],8:[2,7],9:[2,8],10:[2,9],11:[2,10],12:[2,11],13:[2,12],15:[2,14],35:[2,1],36:[2,13],107:[2,24],114:[2,31],115:[2,33],116:[2,41],122:[2,32],127:[2,22],128:[2,23],140:[2,15],141:[2,19],142:[2,20],143:[2,16],144:[2,21],145:[2,17],146:[2,18],147:[2,25],148:[2,26],149:[2,27],150:[2,28],151:[2,29],152:[2,30],153:[2,34],154:[2,35],155:[2,36],156:[2,37],157:[2,38],158:[2,39],159:[2,40]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
 
function Nodo ( term, location, token , childNode) {
  this.term =term;
  this.location = location;
  this.token = token;
  this.childNode = childNode;
}

parser.interprete = {interprete:null}
parser.struct = {
    stack:[],
    heap:[],
    codigo:[],
    etiqueta:[],
    metodo:[],
    temporal:null,
    ptr:0,
    pth:0,
    op:null,
    leer:null
};

parser.indice = {
    valor:0,
};
 parser.treeparser  = {
 raiz : null
};

 parser.error ={
  error:[]

};/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* skip comment */
break;
case 2:/*ignore */
break;
case 3:return 24
break;
case 4:return 25
break;
case 5:return 48
break;
case 6:return 19
break;
case 7:return 20
break;
case 8:return 43
break;
case 9:return 41
break;
case 10:return 45
break;
case 11:return 47
break;
case 12:return 17
break;
case 13:return 37
break;
case 14:return 39
break;
case 15:return 40
break;
case 16:return 42
break;
case 17:return 27
break;
case 18:return 26
break;
case 19:return 51
break;
case 20:return 46
break;
case 21:return 49
break;
case 22:return 50
break;
case 23:return 31
break;
case 24:return 32
break;
case 25:return 33
break;
case 26:return 34
break;
case 27:return 35
break;
case 28:return 36
break;
case 29:return 29
break;
case 30:return 44
break;
case 31:return 22
break;
case 32:return 30
break;
case 33:return 28
break;
case 34:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 'STRINGLIST';
break;
case 35:return 52
break;
case 36:return 23
break;
case 37:return 38;
break;
case 38:return 'REGEX'
break;
case 39:return 5
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/[^\n]*)/i,/^(?:\/\*[^"*\/"]*\*\/)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:;)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=>)/i,/^(?:<=)/i,/^(?:\()/i,/^(?:\))/i,/^(?::)/i,/^(?:Begin\b)/i,/^(?:end\b)/i,/^(?:call\b)/i,/^(?:stack\b)/i,/^(?:heap\b)/i,/^(?:ptr\b)/i,/^(?:\$_in_value\b)/i,/^(?:"%c")/i,/^(?:"%d")/i,/^(?:"%f")/i,/^(?:je\b)/i,/^(?:jne\b)/i,/^(?:jg\b)/i,/^(?:jge\b)/i,/^(?:jl\b)/i,/^(?:jle\b)/i,/^(?:JMP\b)/i,/^(?:Print\b)/i,/^(?:T(-?(?:[0-9]|[1-9][0-9]+))+)/i,/^(?:L(-?(?:[0-9]|[1-9][0-9]+))+)/i,/^(?:=)/i,/^(?:"(?:(\\)["bfnrt\/(\\)]|(\\)u[a-fA-F0-9]{4}|[^"(\\)])*")/i,/^(?:(-?(?:[0-9]|[1-9][0-9]+))((?:\.[0-9]+))?((?:[eE][-+]?[0-9]+))?\b)/i,/^(?:-)/i,/^(?:[A-Za-z_0-9_]+)/i,/^(?:\/(?:[^\/]|\\\/)*\/)/i,/^(?:$)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = codigoFinal;
exports.Parser = codigoFinal.Parser;
exports.parse = function () { return codigoFinal.parse.apply(codigoFinal, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}