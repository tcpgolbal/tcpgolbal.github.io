"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6415],{67389:function(e,t,r){r.d(t,{Ps:function(){return gql}});var i,n,s,a,o,l=r(50044);let h=/\r\n|[\n\r]/g;function getLocation(e,t){let r=0,i=1;for(let n of e.body.matchAll(h)){if("number"==typeof n.index||function(e,t){if(!e)throw Error(null!=t?t:"Unexpected invariant triggered.")}(!1),n.index>=t)break;r=n.index+n[0].length,i+=1}return{line:i,column:t+1-r}}function printSourceLocation(e,t){let r=e.locationOffset.column-1,i="".padStart(r)+e.body,n=t.line-1,s=e.locationOffset.line-1,a=t.line+s,o=1===t.line?r:0,l=t.column+o,h=`${e.name}:${a}:${l}
`,c=i.split(/\r\n|[\n\r]/g),u=c[n];if(u.length>120){let e=Math.floor(l/80),t=l%80,r=[];for(let e=0;e<u.length;e+=80)r.push(u.slice(e,e+80));return h+printPrefixedLines([[`${a} |`,r[0]],...r.slice(1,e+1).map(e=>["|",e]),["|","^".padStart(t)],["|",r[e+1]]])}return h+printPrefixedLines([[`${a-1} |`,c[n-1]],[`${a} |`,u],["|","^".padStart(l)],[`${a+1} |`,c[n+1]]])}function printPrefixedLines(e){let t=e.filter(([e,t])=>void 0!==t),r=Math.max(...t.map(([e])=>e.length));return t.map(([e,t])=>e.padStart(r)+(t?" "+t:"")).join("\n")}let GraphQLError=class GraphQLError extends Error{constructor(e,...t){var r,i,n,s;let{nodes:a,source:o,positions:l,path:h,originalError:c,extensions:u}=function(e){let t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!=h?h:void 0,this.originalError=null!=c?c:void 0,this.nodes=undefinedIfEmpty(Array.isArray(a)?a:a?[a]:void 0);let p=undefinedIfEmpty(null===(r=this.nodes)||void 0===r?void 0:r.map(e=>e.loc).filter(e=>null!=e));this.source=null!=o?o:null==p?void 0:null===(i=p[0])||void 0===i?void 0:i.source,this.positions=null!=l?l:null==p?void 0:p.map(e=>e.start),this.locations=l&&o?l.map(e=>getLocation(o,e)):null==p?void 0:p.map(e=>getLocation(e.source,e.start));let d="object"==typeof(s=null==c?void 0:c.extensions)&&null!==s?null==c?void 0:c.extensions:void 0;this.extensions=null!==(n=null!=u?u:d)&&void 0!==n?n:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=c&&c.stack?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,GraphQLError):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes){for(let r of this.nodes)if(r.loc){var t;e+="\n\n"+printSourceLocation((t=r.loc).source,getLocation(t.source,t.start))}}else if(this.source&&this.locations)for(let t of this.locations)e+="\n\n"+printSourceLocation(this.source,t);return e}toJSON(){let e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}};function undefinedIfEmpty(e){return void 0===e||0===e.length?void 0:e}function syntaxError(e,t,r){return new GraphQLError(`Syntax Error: ${r}`,{source:e,positions:[t]})}var c=r(5064);(i=a||(a={})).QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION";var u=r(55459),p=r(37063),d=r(10185);(n=o||(o={})).SOF="<SOF>",n.EOF="<EOF>",n.BANG="!",n.DOLLAR="$",n.AMP="&",n.PAREN_L="(",n.PAREN_R=")",n.SPREAD="...",n.COLON=":",n.EQUALS="=",n.AT="@",n.BRACKET_L="[",n.BRACKET_R="]",n.BRACE_L="{",n.PIPE="|",n.BRACE_R="}",n.NAME="Name",n.INT="Int",n.FLOAT="Float",n.STRING="String",n.BLOCK_STRING="BlockString",n.COMMENT="Comment";let Lexer=class Lexer{constructor(e){let t=new c.WU(o.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){this.lastToken=this.token;let e=this.token=this.lookahead();return e}lookahead(){let e=this.token;if(e.kind!==o.EOF)do if(e.next)e=e.next;else{let t=function(e,t){let r=e.source.body,i=r.length,n=t;for(;n<i;){let t=r.charCodeAt(n);switch(t){case 65279:case 9:case 32:case 44:++n;continue;case 10:++n,++e.line,e.lineStart=n;continue;case 13:10===r.charCodeAt(n+1)?n+=2:++n,++e.line,e.lineStart=n;continue;case 35:return function(e,t){let r=e.source.body,i=r.length,n=t+1;for(;n<i;){let e=r.charCodeAt(n);if(10===e||13===e)break;if(isUnicodeScalarValue(e))++n;else if(isSupplementaryCodePoint(r,n))n+=2;else break}return createToken(e,o.COMMENT,t,n,r.slice(t+1,n))}(e,n);case 33:return createToken(e,o.BANG,n,n+1);case 36:return createToken(e,o.DOLLAR,n,n+1);case 38:return createToken(e,o.AMP,n,n+1);case 40:return createToken(e,o.PAREN_L,n,n+1);case 41:return createToken(e,o.PAREN_R,n,n+1);case 46:if(46===r.charCodeAt(n+1)&&46===r.charCodeAt(n+2))return createToken(e,o.SPREAD,n,n+3);break;case 58:return createToken(e,o.COLON,n,n+1);case 61:return createToken(e,o.EQUALS,n,n+1);case 64:return createToken(e,o.AT,n,n+1);case 91:return createToken(e,o.BRACKET_L,n,n+1);case 93:return createToken(e,o.BRACKET_R,n,n+1);case 123:return createToken(e,o.BRACE_L,n,n+1);case 124:return createToken(e,o.PIPE,n,n+1);case 125:return createToken(e,o.BRACE_R,n,n+1);case 34:if(34===r.charCodeAt(n+1)&&34===r.charCodeAt(n+2))return function(e,t){let r=e.source.body,i=r.length,n=e.lineStart,s=t+3,a=s,l="",h=[];for(;s<i;){let i=r.charCodeAt(s);if(34===i&&34===r.charCodeAt(s+1)&&34===r.charCodeAt(s+2)){l+=r.slice(a,s),h.push(l);let i=createToken(e,o.BLOCK_STRING,t,s+3,(0,p.wv)(h).join("\n"));return e.line+=h.length-1,e.lineStart=n,i}if(92===i&&34===r.charCodeAt(s+1)&&34===r.charCodeAt(s+2)&&34===r.charCodeAt(s+3)){l+=r.slice(a,s),a=s+1,s+=4;continue}if(10===i||13===i){l+=r.slice(a,s),h.push(l),13===i&&10===r.charCodeAt(s+1)?s+=2:++s,l="",a=s,n=s;continue}if(isUnicodeScalarValue(i))++s;else if(isSupplementaryCodePoint(r,s))s+=2;else throw syntaxError(e.source,s,`Invalid character within String: ${printCodePointAt(e,s)}.`)}throw syntaxError(e.source,s,"Unterminated string.")}(e,n);return function(e,t){let r=e.source.body,i=r.length,n=t+1,s=n,a="";for(;n<i;){let i=r.charCodeAt(n);if(34===i)return a+=r.slice(s,n),createToken(e,o.STRING,t,n+1,a);if(92===i){a+=r.slice(s,n);let t=117===r.charCodeAt(n+1)?123===r.charCodeAt(n+2)?function(e,t){let r=e.source.body,i=0,n=3;for(;n<12;){let e=r.charCodeAt(t+n++);if(125===e){if(n<5||!isUnicodeScalarValue(i))break;return{value:String.fromCodePoint(i),size:n}}if((i=i<<4|readHexDigit(e))<0)break}throw syntaxError(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+n)}".`)}(e,n):function(e,t){let r=e.source.body,i=read16BitHexCode(r,t+2);if(isUnicodeScalarValue(i))return{value:String.fromCodePoint(i),size:6};if(isLeadingSurrogate(i)&&92===r.charCodeAt(t+6)&&117===r.charCodeAt(t+7)){let e=read16BitHexCode(r,t+8);if(isTrailingSurrogate(e))return{value:String.fromCodePoint(i,e),size:12}}throw syntaxError(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}(e,n):function(e,t){let r=e.source.body,i=r.charCodeAt(t+1);switch(i){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw syntaxError(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}(e,n);a+=t.value,n+=t.size,s=n;continue}if(10===i||13===i)break;if(isUnicodeScalarValue(i))++n;else if(isSupplementaryCodePoint(r,n))n+=2;else throw syntaxError(e.source,n,`Invalid character within String: ${printCodePointAt(e,n)}.`)}throw syntaxError(e.source,n,"Unterminated string.")}(e,n)}if((0,d.X1)(t)||45===t)return function(e,t,r){let i=e.source.body,n=t,s=r,a=!1;if(45===s&&(s=i.charCodeAt(++n)),48===s){if(s=i.charCodeAt(++n),(0,d.X1)(s))throw syntaxError(e.source,n,`Invalid number, unexpected digit after 0: ${printCodePointAt(e,n)}.`)}else n=readDigits(e,n,s),s=i.charCodeAt(n);if(46===s&&(a=!0,s=i.charCodeAt(++n),n=readDigits(e,n,s),s=i.charCodeAt(n)),(69===s||101===s)&&(a=!0,(43===(s=i.charCodeAt(++n))||45===s)&&(s=i.charCodeAt(++n)),n=readDigits(e,n,s),s=i.charCodeAt(n)),46===s||(0,d.LQ)(s))throw syntaxError(e.source,n,`Invalid number, expected digit but got: ${printCodePointAt(e,n)}.`);return createToken(e,a?o.FLOAT:o.INT,t,n,i.slice(t,n))}(e,n,t);if((0,d.LQ)(t))return function(e,t){let r=e.source.body,i=r.length,n=t+1;for(;n<i;){let e=r.charCodeAt(n);if((0,d.HQ)(e))++n;else break}return createToken(e,o.NAME,t,n,r.slice(t,n))}(e,n);throw syntaxError(e.source,n,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":isUnicodeScalarValue(t)||isSupplementaryCodePoint(r,n)?`Unexpected character: ${printCodePointAt(e,n)}.`:`Invalid character: ${printCodePointAt(e,n)}.`)}return createToken(e,o.EOF,i,i)}(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===o.COMMENT);return e}};function isUnicodeScalarValue(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function isSupplementaryCodePoint(e,t){return isLeadingSurrogate(e.charCodeAt(t))&&isTrailingSurrogate(e.charCodeAt(t+1))}function isLeadingSurrogate(e){return e>=55296&&e<=56319}function isTrailingSurrogate(e){return e>=56320&&e<=57343}function printCodePointAt(e,t){let r=e.source.body.codePointAt(t);if(void 0===r)return o.EOF;if(r>=32&&r<=126){let e=String.fromCodePoint(r);return'"'===e?"'\"'":`"${e}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function createToken(e,t,r,i,n){let s=e.line,a=1+r-e.lineStart;return new c.WU(t,r,i,s,a,n)}function readDigits(e,t,r){if(!(0,d.X1)(r))throw syntaxError(e.source,t,`Invalid number, expected digit but got: ${printCodePointAt(e,t)}.`);let i=e.source.body,n=t+1;for(;(0,d.X1)(i.charCodeAt(n));)++n;return n}function read16BitHexCode(e,t){return readHexDigit(e.charCodeAt(t))<<12|readHexDigit(e.charCodeAt(t+1))<<8|readHexDigit(e.charCodeAt(t+2))<<4|readHexDigit(e.charCodeAt(t+3))}function readHexDigit(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}var f=r(86771),E=r(94775);let y=globalThis.process&&"production"===globalThis.process.env.NODE_ENV?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if("object"==typeof e&&null!==e){var r;let i=t.prototype[Symbol.toStringTag],n=Symbol.toStringTag in e?e[Symbol.toStringTag]:null===(r=e.constructor)||void 0===r?void 0:r.name;if(i===n){let t=(0,E.X)(e);throw Error(`Cannot use ${i} "${t}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};let Source=class Source{constructor(e,t="GraphQL request",r={line:1,column:1}){"string"==typeof e||(0,f.a)(!1,`Body must be a string. Received: ${(0,E.X)(e)}.`),this.body=e,this.name=t,this.locationOffset=r,this.locationOffset.line>0||(0,f.a)(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||(0,f.a)(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};let Parser=class Parser{constructor(e,t={}){let r=y(e,Source)?e:new Source(e);this._lexer=new Lexer(r),this._options=t,this._tokenCounter=0}parseName(){let e=this.expectToken(o.NAME);return this.node(e,{kind:u.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:u.h.DOCUMENT,definitions:this.many(o.SOF,this.parseDefinition,o.EOF)})}parseDefinition(){if(this.peek(o.BRACE_L))return this.parseOperationDefinition();let e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===o.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw syntaxError(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){let e;let t=this._lexer.token;if(this.peek(o.BRACE_L))return this.node(t,{kind:u.h.OPERATION_DEFINITION,operation:c.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let r=this.parseOperationType();return this.peek(o.NAME)&&(e=this.parseName()),this.node(t,{kind:u.h.OPERATION_DEFINITION,operation:r,name:e,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let e=this.expectToken(o.NAME);switch(e.value){case"query":return c.ku.QUERY;case"mutation":return c.ku.MUTATION;case"subscription":return c.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(o.PAREN_L,this.parseVariableDefinition,o.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:u.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(o.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(o.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let e=this._lexer.token;return this.expectToken(o.DOLLAR),this.node(e,{kind:u.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:u.h.SELECTION_SET,selections:this.many(o.BRACE_L,this.parseSelection,o.BRACE_R)})}parseSelection(){return this.peek(o.SPREAD)?this.parseFragment():this.parseField()}parseField(){let e,t;let r=this._lexer.token,i=this.parseName();return this.expectOptionalToken(o.COLON)?(e=i,t=this.parseName()):t=i,this.node(r,{kind:u.h.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(o.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){let t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(o.PAREN_L,t,o.PAREN_R)}parseArgument(e=!1){let t=this._lexer.token,r=this.parseName();return this.expectToken(o.COLON),this.node(t,{kind:u.h.ARGUMENT,name:r,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let e=this._lexer.token;this.expectToken(o.SPREAD);let t=this.expectOptionalKeyword("on");return!t&&this.peek(o.NAME)?this.node(e,{kind:u.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:u.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let e=this._lexer.token;return(this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables)?this.node(e,{kind:u.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:u.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){let t=this._lexer.token;switch(t.kind){case o.BRACKET_L:return this.parseList(e);case o.BRACE_L:return this.parseObject(e);case o.INT:return this.advanceLexer(),this.node(t,{kind:u.h.INT,value:t.value});case o.FLOAT:return this.advanceLexer(),this.node(t,{kind:u.h.FLOAT,value:t.value});case o.STRING:case o.BLOCK_STRING:return this.parseStringLiteral();case o.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:u.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:u.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:u.h.NULL});default:return this.node(t,{kind:u.h.ENUM,value:t.value})}case o.DOLLAR:if(e){if(this.expectToken(o.DOLLAR),this._lexer.token.kind===o.NAME){let e=this._lexer.token.value;throw syntaxError(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:u.h.STRING,value:e.value,block:e.kind===o.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:u.h.LIST,values:this.any(o.BRACKET_L,()=>this.parseValueLiteral(e),o.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:u.h.OBJECT,fields:this.any(o.BRACE_L,()=>this.parseObjectField(e),o.BRACE_R)})}parseObjectField(e){let t=this._lexer.token,r=this.parseName();return this.expectToken(o.COLON),this.node(t,{kind:u.h.OBJECT_FIELD,name:r,value:this.parseValueLiteral(e)})}parseDirectives(e){let t=[];for(;this.peek(o.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){let t=this._lexer.token;return this.expectToken(o.AT),this.node(t,{kind:u.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){let e;let t=this._lexer.token;if(this.expectOptionalToken(o.BRACKET_L)){let r=this.parseTypeReference();this.expectToken(o.BRACKET_R),e=this.node(t,{kind:u.h.LIST_TYPE,type:r})}else e=this.parseNamedType();return this.expectOptionalToken(o.BANG)?this.node(t,{kind:u.h.NON_NULL_TYPE,type:e}):e}parseNamedType(){return this.node(this._lexer.token,{kind:u.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(o.STRING)||this.peek(o.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");let r=this.parseConstDirectives(),i=this.many(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);return this.node(e,{kind:u.h.SCHEMA_DEFINITION,description:t,directives:r,operationTypes:i})}parseOperationTypeDefinition(){let e=this._lexer.token,t=this.parseOperationType();this.expectToken(o.COLON);let r=this.parseNamedType();return this.node(e,{kind:u.h.OPERATION_TYPE_DEFINITION,operation:t,type:r})}parseScalarTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");let r=this.parseName(),i=this.parseConstDirectives();return this.node(e,{kind:u.h.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:i})}parseObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");let r=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:u.h.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:i,directives:n,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(o.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseFieldDefinition,o.BRACE_R)}parseFieldDefinition(){let e=this._lexer.token,t=this.parseDescription(),r=this.parseName(),i=this.parseArgumentDefs();this.expectToken(o.COLON);let n=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:u.h.FIELD_DEFINITION,description:t,name:r,arguments:i,type:n,directives:s})}parseArgumentDefs(){return this.optionalMany(o.PAREN_L,this.parseInputValueDef,o.PAREN_R)}parseInputValueDef(){let e;let t=this._lexer.token,r=this.parseDescription(),i=this.parseName();this.expectToken(o.COLON);let n=this.parseTypeReference();this.expectOptionalToken(o.EQUALS)&&(e=this.parseConstValueLiteral());let s=this.parseConstDirectives();return this.node(t,{kind:u.h.INPUT_VALUE_DEFINITION,description:r,name:i,type:n,defaultValue:e,directives:s})}parseInterfaceTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");let r=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:u.h.INTERFACE_TYPE_DEFINITION,description:t,name:r,interfaces:i,directives:n,fields:s})}parseUnionTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");let r=this.parseName(),i=this.parseConstDirectives(),n=this.parseUnionMemberTypes();return this.node(e,{kind:u.h.UNION_TYPE_DEFINITION,description:t,name:r,directives:i,types:n})}parseUnionMemberTypes(){return this.expectOptionalToken(o.EQUALS)?this.delimitedMany(o.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");let r=this.parseName(),i=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();return this.node(e,{kind:u.h.ENUM_TYPE_DEFINITION,description:t,name:r,directives:i,values:n})}parseEnumValuesDefinition(){return this.optionalMany(o.BRACE_L,this.parseEnumValueDefinition,o.BRACE_R)}parseEnumValueDefinition(){let e=this._lexer.token,t=this.parseDescription(),r=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(e,{kind:u.h.ENUM_VALUE_DEFINITION,description:t,name:r,directives:i})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw syntaxError(this._lexer.source,this._lexer.token.start,`${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");let r=this.parseName(),i=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();return this.node(e,{kind:u.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:i,fields:n})}parseInputFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseInputValueDef,o.BRACE_R)}parseTypeSystemExtension(){let e=this._lexer.lookahead();if(e.kind===o.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let t=this.parseConstDirectives(),r=this.optionalMany(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);if(0===t.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:u.h.SCHEMA_EXTENSION,directives:t,operationTypes:r})}parseScalarTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let t=this.parseName(),r=this.parseConstDirectives();if(0===r.length)throw this.unexpected();return this.node(e,{kind:u.h.SCALAR_TYPE_EXTENSION,name:t,directives:r})}parseObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let t=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),n=this.parseFieldsDefinition();if(0===r.length&&0===i.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:u.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:i,fields:n})}parseInterfaceTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let t=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),n=this.parseFieldsDefinition();if(0===r.length&&0===i.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:u.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:r,directives:i,fields:n})}parseUnionTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let t=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(0===r.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:u.h.UNION_TYPE_EXTENSION,name:t,directives:r,types:i})}parseEnumTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let t=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(0===r.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:u.h.ENUM_TYPE_EXTENSION,name:t,directives:r,values:i})}parseInputObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let t=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(0===r.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:u.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:i})}parseDirectiveDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(o.AT);let r=this.parseName(),i=this.parseArgumentDefs(),n=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let s=this.parseDirectiveLocations();return this.node(e,{kind:u.h.DIRECTIVE_DEFINITION,description:t,name:r,arguments:i,repeatable:n,locations:s})}parseDirectiveLocations(){return this.delimitedMany(o.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(a,t.value))return t;throw this.unexpected(e)}node(e,t){return!0!==this._options.noLocation&&(t.loc=new c.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){let t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw syntaxError(this._lexer.source,t.start,`Expected ${getTokenKindDesc(e)}, found ${getTokenDesc(t)}.`)}expectOptionalToken(e){let t=this._lexer.token;return t.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){let t=this._lexer.token;if(t.kind===o.NAME&&t.value===e)this.advanceLexer();else throw syntaxError(this._lexer.source,t.start,`Expected "${e}", found ${getTokenDesc(t)}.`)}expectOptionalKeyword(e){let t=this._lexer.token;return t.kind===o.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){let t=null!=e?e:this._lexer.token;return syntaxError(this._lexer.source,t.start,`Unexpected ${getTokenDesc(t)}.`)}any(e,t,r){this.expectToken(e);let i=[];for(;!this.expectOptionalToken(r);)i.push(t.call(this));return i}optionalMany(e,t,r){if(this.expectOptionalToken(e)){let e=[];do e.push(t.call(this));while(!this.expectOptionalToken(r));return e}return[]}many(e,t,r){this.expectToken(e);let i=[];do i.push(t.call(this));while(!this.expectOptionalToken(r));return i}delimitedMany(e,t){this.expectOptionalToken(e);let r=[];do r.push(t.call(this));while(this.expectOptionalToken(e));return r}advanceLexer(){let{maxTokens:e}=this._options,t=this._lexer.advance();if(void 0!==e&&t.kind!==o.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw syntaxError(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}};function getTokenDesc(e){let t=e.value;return getTokenKindDesc(e.kind)+(null!=t?` "${t}"`:"")}function getTokenKindDesc(e){return e===o.BANG||e===o.DOLLAR||e===o.AMP||e===o.PAREN_L||e===o.PAREN_R||e===o.SPREAD||e===o.COLON||e===o.EQUALS||e===o.AT||e===o.BRACKET_L||e===o.BRACKET_R||e===o.BRACE_L||e===o.PIPE||e===o.BRACE_R?`"${e}"`:e}var k=new Map,v=new Map,m=!0,T=!1;function normalize(e){return e.replace(/[\s,]+/g," ").trim()}function gql(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];"string"==typeof e&&(e=[e]);var i=e[0];return t.forEach(function(t,r){t&&"Document"===t.kind?i+=t.loc.source.body:i+=t,i+=e[r+1]}),function(e){var t=normalize(e);if(!k.has(t)){var r,i,n,s,a,o=function(e,t){let r=new Parser(e,t);return r.parseDocument()}(e,{experimentalFragmentVariables:T,allowLegacyFragmentVariables:T});if(!o||"Document"!==o.kind)throw Error("Not a valid GraphQL document.");k.set(t,(r=new Set,i=[],o.definitions.forEach(function(e){if("FragmentDefinition"===e.kind){var t,n=e.name.value,s=normalize((t=e.loc).source.body.substring(t.start,t.end)),a=v.get(n);a&&!a.has(s)?m&&console.warn("Warning: fragment with name "+n+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):a||v.set(n,a=new Set),a.add(s),r.has(s)||(r.add(s),i.push(e))}else i.push(e)}),n=(0,l.__assign)((0,l.__assign)({},o),{definitions:i}),(s=new Set(n.definitions)).forEach(function(e){e.loc&&delete e.loc,Object.keys(e).forEach(function(t){var r=e[t];r&&"object"==typeof r&&s.add(r)})}),(a=n.loc)&&(delete a.startToken,delete a.endToken),n))}return k.get(t)}(i)}var g={gql:gql,resetCaches:function(){k.clear(),v.clear()},disableFragmentWarnings:function(){m=!1},enableExperimentalFragmentVariables:function(){T=!0},disableExperimentalFragmentVariables:function(){T=!1}};(s=gql||(gql={})).gql=g.gql,s.resetCaches=g.resetCaches,s.disableFragmentWarnings=g.disableFragmentWarnings,s.enableExperimentalFragmentVariables=g.enableExperimentalFragmentVariables,s.disableExperimentalFragmentVariables=g.disableExperimentalFragmentVariables,gql.default=gql},50392:function(e,t,r){r.d(t,{a:function(){return useQuery}});var i,n,s=r(50044),a=r(17143),o=r(2265),l=r.t(o,2),h=r(38191),c=!1,u=l.useSyncExternalStore||function(e,t,r){var i=t();!1===globalThis.__DEV__||c||i===t()||(c=!0,!1!==globalThis.__DEV__&&a.kG.error(58));var n=o.useState({inst:{value:i,getSnapshot:t}}),s=n[0].inst,l=n[1];return h.JC?o.useLayoutEffect(function(){Object.assign(s,{value:i,getSnapshot:t}),checkIfSnapshotChanged(s)&&l({inst:s})},[e,i,t]):Object.assign(s,{value:i,getSnapshot:t}),o.useEffect(function(){return checkIfSnapshotChanged(s)&&l({inst:s}),e(function(){checkIfSnapshotChanged(s)&&l({inst:s})})},[e]),i};function checkIfSnapshotChanged(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch(e){return!0}}var p=r(36510),d=r(17466),f=r(54312),E=r(17205),y=r(12274);(i=n||(n={}))[i.Query=0]="Query",i[i.Mutation=1]="Mutation",i[i.Subscription=2]="Subscription";var k=new Map;function operationName(e){var t;switch(e){case n.Query:t="Query";break;case n.Mutation:t="Mutation";break;case n.Subscription:t="Subscription"}return t}var v=r(68859),m=r(18865),T=r(28607),g=Object.prototype.hasOwnProperty;function useQuery(e,t){var r,i,n,s,l;return void 0===t&&(t=Object.create(null)),(r=t.client,i=o.useContext((0,f.K)()),n=r||i.client,(0,a.kG)(!!n,49),(s=o.useRef()).current&&n===s.current.client&&e===s.current.query||(s.current=new x(n,e,s.current)),(l=s.current).forceUpdateState=o.useReducer(function(e){return e+1},0)[1],l).useQuery(t)}var x=function(){function InternalState(e,t,r){var i,s,o,l,c=this;this.client=e,this.query=t,this.forceUpdate=function(){return c.forceUpdateState()},this.ssrDisabledResult=(0,v.J)({loading:!0,data:void 0,error:void 0,networkStatus:y.Ie.loading}),this.skipStandbyResult=(0,v.J)({loading:!1,data:void 0,error:void 0,networkStatus:y.Ie.ready}),this.toQueryResultCache=new(h.mr?WeakMap:Map),i=n.Query,s=function(e){var t,r,i=k.get(e);if(i)return i;(0,a.kG)(!!e&&!!e.kind,59,e);for(var s=[],o=[],l=[],h=[],c=0,u=e.definitions;c<u.length;c++){var p=u[c];if("FragmentDefinition"===p.kind){s.push(p);continue}if("OperationDefinition"===p.kind)switch(p.operation){case"query":o.push(p);break;case"mutation":l.push(p);break;case"subscription":h.push(p)}}(0,a.kG)(!s.length||o.length||l.length||h.length,60),(0,a.kG)(o.length+l.length+h.length<=1,61,e,o.length,h.length,l.length),r=o.length?n.Query:n.Mutation,o.length||l.length||(r=n.Subscription);var d=o.length?o:l.length?l:h;(0,a.kG)(1===d.length,62,e,d.length);var f=d[0];t=f.variableDefinitions||[];var E={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:r,variables:t};return k.set(e,E),E}(t),o=operationName(i),l=operationName(s.type),(0,a.kG)(s.type===i,63,o,o,l);var u=r&&r.result,p=u&&u.data;p&&(this.previousData=p)}return InternalState.prototype.forceUpdateState=function(){!1!==globalThis.__DEV__&&a.kG.warn(50)},InternalState.prototype.executeQuery=function(e){var t,r=this;e.query&&Object.assign(this,{query:e.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=e);var i=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=(null===(t=this.result)||void 0===t?void 0:t.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(e){var t;i.subscribe({next:function(e){t=e},error:function(){e(r.toQueryResult(r.observable.getCurrentResult()))},complete:function(){e(r.toQueryResult(t))}})})},InternalState.prototype.useQuery=function(e){var t=this;this.renderPromises=o.useContext((0,f.K)()).renderPromises,this.useOptions(e);var r=this.useObservableQuery(),i=u(o.useCallback(function(e){if(t.renderPromises)return function(){};t.forceUpdate=e;var onNext=function(){var e=t.result,i=r.getCurrentResult();e&&e.loading===i.loading&&e.networkStatus===i.networkStatus&&(0,p.D)(e.data,i.data)||t.setResult(i)},onError=function(e){if(i.unsubscribe(),i=r.resubscribeAfterError(onNext,onError),!g.call(e,"graphQLErrors"))throw e;var n=t.result;(!n||n&&n.loading||!(0,p.D)(e,n.error))&&t.setResult({data:n&&n.data,error:e,loading:!1,networkStatus:y.Ie.error})},i=r.subscribe(onNext,onError);return function(){setTimeout(function(){return i.unsubscribe()}),t.forceUpdate=function(){return t.forceUpdateState()}}},[r,this.renderPromises,this.client.disableNetworkFetches]),function(){return t.getCurrentResult()},function(){return t.getCurrentResult()});return this.unsafeHandlePartialRefetch(i),this.toQueryResult(i)},InternalState.prototype.useOptions=function(e){var t,r=this.createWatchQueryOptions(this.queryHookOptions=e),i=this.watchQueryOptions;!(0,p.D)(r,i)&&(this.watchQueryOptions=r,i&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(t=this.result)||void 0===t?void 0:t.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||InternalState.prototype.onCompleted,this.onError=e.onError||InternalState.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&!1===this.queryHookOptions.ssr&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},InternalState.prototype.getObsQueryOptions=function(){var e=[],t=this.client.defaultOptions.watchQuery;return t&&e.push(t),this.queryHookOptions.defaultOptions&&e.push(this.queryHookOptions.defaultOptions),e.push((0,m.o)(this.observable&&this.observable.options,this.watchQueryOptions)),e.reduce(d.J)},InternalState.prototype.createWatchQueryOptions=function(e){void 0===e&&(e={});var t,r=e.skip,i=Object.assign((e.ssr,e.onCompleted,e.onError,e.defaultOptions,(0,s.__rest)(e,["skip","ssr","onCompleted","onError","defaultOptions"])),{query:this.query});if(this.renderPromises&&("network-only"===i.fetchPolicy||"cache-and-network"===i.fetchPolicy)&&(i.fetchPolicy="cache-first"),i.variables||(i.variables={}),r){var n=i.fetchPolicy,a=void 0===n?this.getDefaultFetchPolicy():n,o=i.initialFetchPolicy;Object.assign(i,{initialFetchPolicy:void 0===o?a:o,fetchPolicy:"standby"})}else i.fetchPolicy||(i.fetchPolicy=(null===(t=this.observable)||void 0===t?void 0:t.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return i},InternalState.prototype.getDefaultFetchPolicy=function(){var e,t;return(null===(e=this.queryHookOptions.defaultOptions)||void 0===e?void 0:e.fetchPolicy)||(null===(t=this.client.defaultOptions.watchQuery)||void 0===t?void 0:t.fetchPolicy)||"cache-first"},InternalState.prototype.onCompleted=function(e){},InternalState.prototype.onError=function(e){},InternalState.prototype.useObservableQuery=function(){var e=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=o.useMemo(function(){return{refetch:e.refetch.bind(e),reobserve:e.reobserve.bind(e),fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}},[e]);var t=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&t&&(this.renderPromises.registerSSRObservable(e),e.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(e)),e},InternalState.prototype.setResult=function(e){var t=this.result;t&&t.data&&(this.previousData=t.data),this.result=e,this.forceUpdate(),this.handleErrorOrCompleted(e,t)},InternalState.prototype.handleErrorOrCompleted=function(e,t){var r=this;if(!e.loading){var i=this.toApolloError(e);Promise.resolve().then(function(){i?r.onError(i):e.data&&(null==t?void 0:t.networkStatus)!==e.networkStatus&&e.networkStatus===y.Ie.ready&&r.onCompleted(e.data)}).catch(function(e){!1!==globalThis.__DEV__&&a.kG.warn(e)})}},InternalState.prototype.toApolloError=function(e){return(0,T.O)(e.errors)?new E.cA({graphQLErrors:e.errors}):e.error},InternalState.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},InternalState.prototype.toQueryResult=function(e){var t=this.toQueryResultCache.get(e);if(t)return t;var r=e.data,i=(e.partial,(0,s.__rest)(e,["data","partial"]));return this.toQueryResultCache.set(e,t=(0,s.__assign)((0,s.__assign)((0,s.__assign)({data:r},i),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!t.error&&(0,T.O)(e.errors)&&(t.error=new E.cA({graphQLErrors:e.errors})),t},InternalState.prototype.unsafeHandlePartialRefetch=function(e){e.partial&&this.queryHookOptions.partialRefetch&&!e.loading&&(!e.data||0===Object.keys(e.data).length)&&"cache-only"!==this.observable.options.fetchPolicy&&(Object.assign(e,{loading:!0,networkStatus:y.Ie.refetch}),this.observable.refetch())},InternalState}()},60230:function(e,t,r){r.d(t,{_:function(){return _tagged_template_literal}});function _tagged_template_literal(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}}}]);