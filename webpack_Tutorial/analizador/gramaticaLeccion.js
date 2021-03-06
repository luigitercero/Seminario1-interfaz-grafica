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
var gramaticaLeccion = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[5,7],$V2=[1,10],$V3=[8,11],$V4=[1,14],$V5=[1,24],$V6=[1,18],$V7=[1,19],$V8=[1,20],$V9=[1,21],$Va=[1,22],$Vb=[1,23],$Vc=[1,25],$Vd=[1,27],$Ve=[1,28],$Vf=[1,29],$Vg=[1,30],$Vh=[1,31],$Vi=[1,32],$Vj=[1,33],$Vk=[1,34],$Vl=[1,35],$Vm=[1,36],$Vn=[1,37],$Vo=[1,38],$Vp=[1,39],$Vq=[1,40],$Vr=[1,41],$Vs=[1,42],$Vt=[1,43],$Vu=[1,44],$Vv=[1,45],$Vw=[1,46],$Vx=[1,47],$Vy=[1,48],$Vz=[1,49],$VA=[1,50],$VB=[1,51],$VC=[1,52],$VD=[1,53],$VE=[1,54],$VF=[1,55],$VG=[1,56],$VH=[1,57],$VI=[1,58],$VJ=[1,59],$VK=[1,60],$VL=[1,61],$VM=[11,14,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"inicio":3,"Encabezado":4,"EOF":5,"Leccion":6,"{%":7,"%}":8,"Atrubutos":9,"Atributo":10,"ID":11,"ll1":12,"Cuerpo":13,"}":14,"Lexico":15,"{":16,"COMENTARIO1":17,"COMENTARIO":18,"SOBREESCRIBIR":19,"STRINGLIST":20,"NUMBERLIST2":21,"NUMBERLIST":22,"CARACTER":23,"OP":24,"FIN":25,"++":26,"--":27,"*=":28,"/=":29,"+=":30,"->":31,"(":32,")":33,"!":34,"*":35,"/":36,"-":37,"+":38,"^":39,"<=":40,">=":41,"==":42,"!=":43,"<":44,">":45,"??":46,"&&":47,"||":48,"|&":49,"&?":50,"|?":51,"=":52,",":53,"[":54,"]":55,".":56,"ERROR":57,":":58,";":59,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"{%",8:"%}",11:"ID",14:"}",16:"{",17:"COMENTARIO1",18:"COMENTARIO",19:"SOBREESCRIBIR",20:"STRINGLIST",21:"NUMBERLIST2",22:"NUMBERLIST",23:"CARACTER",25:"FIN",26:"++",27:"--",28:"*=",29:"/=",30:"+=",31:"->",32:"(",33:")",34:"!",35:"*",36:"/",37:"-",38:"+",39:"^",40:"<=",41:">=",42:"==",43:"!=",44:"<",45:">",46:"??",47:"&&",48:"||",49:"|&",50:"&?",51:"|?",52:"=",53:",",54:"[",55:"]",56:".",57:"ERROR",58:":",59:";"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,3],[9,2],[9,1],[10,4],[13,2],[13,1],[12,1],[15,3],[15,2],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 this.$ = parser.treeparser.leccion; return parser.treeparser.leccion 
break;
case 2: case 3:
this.$ = parser.treeparser.leccion
break;
case 5:
parser.treeparser.leccion.push($$[$0-1]);
break;
case 6:
atrubuto.push($$[$0]); this.$ = atrubuto;
break;
case 7:
atrubuto = []; atrubuto.push($$[$0]); this.$ = atrubuto;
break;
case 8:

            parser.treeparser.contador--; 
 			tab = ""; 
			for (var i = 0; i < parser.treeparser.contador; i++) {
				tab = tab + "    " ;
			}
			valor =$$[$0-3] + $$[$0-2]+ "\n"+ tab+$$[$0-1] +"\n" +tab+$$[$0] 
			nodo = new Nodo($$[$0-3],$$[$0-1] ); 
 		 this.$ =nodo;
 	
break;
case 9:
this.$ = $$[$0-1] + ""+$$[$0];
break;
case 10:
tab = ""; 
			for (var i = 0; i < parser.treeparser.contador; i++) {
				tab = tab + "    " ;
			} this.$ = " " + tab +$$[$0];
break;
case 11:
parser.treeparser.contador ++;  tab = ""; 
			for (var i = 0; i < parser.treeparser.contador; i++) {
				tab = tab + "    " ;
			}   this.$ = $$[$0] ;
break;
case 12:
tab = ""; 
			for (var i = 0; i < parser.treeparser.contador; i++) {
				tab = tab + "    " ;
			}parser.treeparser.contador--; this.$ = $$[$0-2] +"\n"+ $$[$0-1]+ "\n"+tab +$$[$0] ;
break;
case 13:
parser.treeparser.contador--; this.$ = $$[$0-1] +"\n"+ $$[$0]+ "\n" +tab+$$[$01] ;
break;
case 14: case 15:
this.$ = $$[$0]+"\n" ;
break;
case 16: case 17: case 21: case 22: case 23: case 32: case 52:
this.$ = $$[$0] ;
break;
case 18: case 19: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31:
this.$ = $$[$0]+" " ;
break;
case 20:
this.$ = $$[$0]+" ";
break;
case 33: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49:
this.$ = "" + $$[$0] +" " ;
break;
case 34:
this.$ = "" + $$[$0] +"" ;
break;
case 50:
this.$ = "" +$$[$0] + " " ;
break;
case 51:
this.$ = $$[$0] +" " ;
break;
case 53:
this.$ = $$[$0] +" ";
break;
case 55:
this.$ = "//"+$$[$0]+"\n" ;
break;
case 56:
 
		 tab = ""; 
		for (var i = 0; i < parser.treeparser.contador; i++) {
		tab = tab + "    " ;
		} 
		this.$ = $$[$0] +"\n" +tab;
break;
case 57:

			 tab = ""; 
			for (var i = 0; i < parser.treeparser.contador; i++) {
				tab = tab + "    " ;
			} 
		this.$ = $$[$0] +"\n" +tab;
		
break;
}
},
table: [{3:1,4:2,6:3,7:$V0},{1:[3]},{5:[1,5],6:6,7:$V0},o($V1,[2,3]),{8:[1,7],9:8,10:9,11:$V2},{1:[2,1]},o($V1,[2,2]),o($V1,[2,4]),{8:[1,11],10:12,11:$V2},o($V3,[2,7]),{12:13,16:$V4},o($V1,[2,5]),o($V3,[2,6]),{11:$V5,12:17,13:15,15:16,16:$V4,17:$V6,18:$V7,19:$V8,20:$V9,21:$Va,22:$Vb,23:$Vc,24:26,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,31:$Vj,32:$Vk,33:$Vl,34:$Vm,35:$Vn,36:$Vo,37:$Vp,38:$Vq,39:$Vr,40:$Vs,41:$Vt,42:$Vu,43:$Vv,44:$Vw,45:$Vx,46:$Vy,47:$Vz,48:$VA,49:$VB,50:$VC,51:$VD,52:$VE,53:$VF,54:$VG,55:$VH,56:$VI,57:$VJ,58:$VK,59:$VL},o($VM,[2,11]),{11:$V5,12:17,14:[1,62],15:63,16:$V4,17:$V6,18:$V7,19:$V8,20:$V9,21:$Va,22:$Vb,23:$Vc,24:26,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,31:$Vj,32:$Vk,33:$Vl,34:$Vm,35:$Vn,36:$Vo,37:$Vp,38:$Vq,39:$Vr,40:$Vs,41:$Vt,42:$Vu,43:$Vv,44:$Vw,45:$Vx,46:$Vy,47:$Vz,48:$VA,49:$VB,50:$VC,51:$VD,52:$VE,53:$VF,54:$VG,55:$VH,56:$VI,57:$VJ,58:$VK,59:$VL},o($VM,[2,10]),{11:$V5,12:17,13:64,14:[1,65],15:16,16:$V4,17:$V6,18:$V7,19:$V8,20:$V9,21:$Va,22:$Vb,23:$Vc,24:26,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,31:$Vj,32:$Vk,33:$Vl,34:$Vm,35:$Vn,36:$Vo,37:$Vp,38:$Vq,39:$Vr,40:$Vs,41:$Vt,42:$Vu,43:$Vv,44:$Vw,45:$Vx,46:$Vy,47:$Vz,48:$VA,49:$VB,50:$VC,51:$VD,52:$VE,53:$VF,54:$VG,55:$VH,56:$VI,57:$VJ,58:$VK,59:$VL},o($VM,[2,14]),o($VM,[2,15]),o($VM,[2,16]),o($VM,[2,17]),o($VM,[2,18]),o($VM,[2,19]),o($VM,[2,20]),o($VM,[2,21]),o($VM,[2,22]),o($VM,[2,23]),o($VM,[2,24]),o($VM,[2,25]),o($VM,[2,26]),o($VM,[2,27]),o($VM,[2,28]),o($VM,[2,29]),o($VM,[2,30]),o($VM,[2,31]),o($VM,[2,32]),o($VM,[2,33]),o($VM,[2,34]),o($VM,[2,35]),o($VM,[2,36]),o($VM,[2,37]),o($VM,[2,38]),o($VM,[2,39]),o($VM,[2,40]),o($VM,[2,41]),o($VM,[2,42]),o($VM,[2,43]),o($VM,[2,44]),o($VM,[2,45]),o($VM,[2,46]),o($VM,[2,47]),o($VM,[2,48]),o($VM,[2,49]),o($VM,[2,50]),o($VM,[2,51]),o($VM,[2,52]),o($VM,[2,53]),o($VM,[2,54]),o($VM,[2,55]),o($VM,[2,56]),o($VM,[2,57]),o($V3,[2,8]),o($VM,[2,9]),{11:$V5,12:17,14:[1,66],15:63,16:$V4,17:$V6,18:$V7,19:$V8,20:$V9,21:$Va,22:$Vb,23:$Vc,24:26,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,31:$Vj,32:$Vk,33:$Vl,34:$Vm,35:$Vn,36:$Vo,37:$Vp,38:$Vq,39:$Vr,40:$Vs,41:$Vt,42:$Vu,43:$Vv,44:$Vw,45:$Vx,46:$Vy,47:$Vz,48:$VA,49:$VB,50:$VC,51:$VD,52:$VE,53:$VF,54:$VG,55:$VH,56:$VI,57:$VJ,58:$VK,59:$VL},o($VM,[2,13]),o($VM,[2,12])],
defaultActions: {5:[2,1]},
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



parser.treeparser  = {
 raiz : null,
 contador: 0,
 leccion : []
};



function Nodo ( nombre, cuerpo) {
  this.nombre =nombre;
  this.cuerpo = cuerpo;
} 
/* generated by jison-lex 0.3.4 */
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
case 1:/* skip comment */return 17
break;
case 2:/*ignore */return 18
break;
case 3:return 25
break;
case 4:return 7
break;
case 5:return 8
break;
case 6:return 30
break;
case 7:return 26
break;
case 8:return 27
break;
case 9:return 28
break;
case 10:return 29
break;
case 11:return 30
break;
case 12:return 31
break;
case 13:return 35
break;
case 14:return 36
break;
case 15:return 37
break;
case 16:return 38
break;
case 17:return 39
break;
case 18:return 32
break;
case 19:return 33
break;
case 20:return '%'
break;
case 21:return 40
break;
case 22:return 41
break;
case 23:return 42
break;
case 24:return 43
break;
case 25:return 44
break;
case 26:return 45
break;
case 27:return 46     
break;
case 28:return 47
break;
case 29:return 48
break;
case 30:return 49
break;
case 31:return 50
break;
case 32:return 51
break;
case 33:return 34             
break;
case 34:return 59
break;
case 35:return 53
break;
case 36:return 16
break;
case 37:return 14
break;
case 38:return 54
break;
case 39:return 55                                                         
break;
case 40:return 58
break;
case 41:return 19
break;
case 42:return 20;
break;
case 43:return 21;
break;
case 44:return 22;
break;
case 45:return 23
break;
case 46:return 'NULO'
break;
case 47:return 56
break;
case 48:return 52
break;
case 49:return 11;
break;
case 50:return 'REGEX'
break;
case 51:return 5
break;
case 52:return 57
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/[^\n]*)/i,/^(?:\/\*[^"*\/"]*\*\/)/i,/^(?:fin-si\b)/i,/^(?:\{%)/i,/^(?:%\})/i,/^(?:\+=)/i,/^(?:\+\+)/i,/^(?:--)/i,/^(?:\*=)/i,/^(?:\/=)/i,/^(?:\+=)/i,/^(?:->)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:\^)/i,/^(?:\()/i,/^(?:\))/i,/^(?:%)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:\?\?)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:\|&)/i,/^(?:&\?)/i,/^(?:\|\?)/i,/^(?:!)/i,/^(?:;)/i,/^(?:,)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\[)/i,/^(?:\])/i,/^(?::)/i,/^(?:@sobreescribir\b)/i,/^(?:"[^\"]*")/i,/^(?:(-?(?:[0-9]|[1-9][0-9]+))((?:\.[0-9]+))((?:[eE][-+]?[0-9]+))?\b)/i,/^(?:(-?(?:[0-9]|[1-9][0-9]+))((?:[eE][-+]?[0-9]+))?\b)/i,/^(?:['][^\n]['])/i,/^(?:['][\\][0]['])/i,/^(?:\.)/i,/^(?:=)/i,/^(?:[A-Za-z_0-9_]+)/i,/^(?:\/(?:[^\/]|\\\/)*\/)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"inclusive":true}}
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
exports.parser = gramaticaLeccion;
exports.Parser = gramaticaLeccion.Parser;
exports.parse = function () { return gramaticaLeccion.parse.apply(gramaticaLeccion, arguments); };
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