/*!
 * Sizzle CSS Selector Engine 3e40b5d
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */

(function(Q,ka){function $(){var a,b=[];return a=function(c,d){b.push(c+=" ")>g.cacheLength&&delete a[b.shift()];return a[c]=d}}function v(a){a[p]=!0;return a}function B(a){var b=u.createElement("div");try{return a(b)}catch(c){return!1}finally{}}function m(a,b,c,d){var h,f,e,k,j;(b?b.ownerDocument||b:F)!==u&&J(b);b=b||u;c=c||[];if(!a||"string"!==typeof a)return c;if(1!==(k=b.nodeType)&&9!==k)return[];if(!x&&!d){if(h=sa.exec(a))if(e=h[1])if(9===k)if((f=b.getElementById(e))&&f.parentNode){if(f.id===e)return c.push(f),c}else return c;else{if(b.ownerDocument&&(f=b.ownerDocument.getElementById(e))&&K(b,f)&&f.id===e)return c.push(f),c}else{if(h[2])return L.apply(c,M.call(b.getElementsByTagName(a),0)),c;if((e=h[3])&&l.getByClassName&&b.getElementsByClassName)return L.apply(c,M.call(b.getElementsByClassName(e),0)),c}if(l.qsa&&!y.test(a)){h=!0;f=p;e=b;j=9===k&&a;if(1===k&&"object"!==b.nodeName.toLowerCase()){k=R(a);(h=b.getAttribute("id"))?f=h.replace(ta,"\\$&"):b.setAttribute("id",f);f="[id='"+f+"'] ";for(e=k.length;e--;)k[e]=f+S(k[e]);e=aa.test(a)&&b.parentNode||b;j=k.join(",")}if(j)try{return L.apply(c,M.call(e.querySelectorAll(j),0)),c}catch(C){}finally{h||b.removeAttribute("id")}}}var q;a:{a=a.replace(T,"$1");f=R(a);if(!d&&1===f.length){h=f[0]=f[0].slice(0);if(2<h.length&&"ID"===(q=h[0]).type&&9===b.nodeType&&!x&&g.relative[h[1].type]){b=g.find.ID(q.matches[0].replace(A,E),b)[0];if(!b){q=c;break a}a=a.slice(h.shift().value.length)}for(k=U.needsContext.test(a)?-1:h.length-1;0<=k;k--){q=h[k];if(g.relative[e=q.type])break;if(e=g.find[e])if(d=e(q.matches[0].replace(A,E),aa.test(h[0].type)&&b.parentNode||b)){h.splice(k,1);a=d.length&&S(h);if(!a){L.apply(c,M.call(d,0));q=c;break a}break}}}ba(a,f)(d,b,x,c,aa.test(a));q=c}return q}function la(a,b){for(var c=a&&b&&a.nextSibling;c;c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ua(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function va(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function G(a){return v(function(b){b=+b;return v(function(c,d){for(var h,f=a([],c.length,b),e=f.length;e--;)if(c[h=f[e]])c[h]=!(d[h]=c[h])})})}function R(a,b){var c,d,h,f,e,k,j;if(e=ma[a+" "])return b?0:e.slice(0);e=a;k=[];for(j=g.preFilter;e;){if(!c||(d=wa.exec(e)))d&&(e=e.slice(d[0].length)||e),k.push(h=[]);c=!1;if(d=xa.exec(e))c=d.shift(),h.push({value:c,type:d[0].replace(T," ")}),e=e.slice(c.length);for(f in g.filter)if((d=U[f].exec(e))&&(!j[f]||(d=j[f](d))))c=d.shift(),h.push({value:c,type:f,matches:d}),e=e.slice(c.length);if(!c)break}return b?e.length:e?m.error(a):ma(a,k).slice(0)}function S(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ca(a,b,c){var d=b.dir,h=c&&"parentNode"===b.dir,f=ya++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||h)return a(b,c,f)}:function(b,c,j){var C,q,g,r=D+" "+f;if(j)for(;b=b[d];){if((1===b.nodeType||h)&&a(b,c,j))return!0}else for(;b=b[d];)if(1===b.nodeType||h)if(g=b[p]||(b[p]={}),(q=g[d])&&q[0]===r){if(!0===(C=q[1])||C===V)return!0===C}else if(q=g[d]=[r],q[1]=a(b,c,j)||V,!0===q[1])return!0}}function da(a){return 1<a.length?function(b,c,d){for(var h=a.length;h--;)if(!a[h](b,c,d))return!1;return!0}:a[0]}function W(a,b,c,d,h){for(var f,e=[],k=0,j=a.length,g=null!=b;k<j;k++)if(f=a[k])if(!c||c(f,d,h))e.push(f),g&&b.push(k);return e}function ea(a,b,c,d,h,f){d&&!d[p]&&(d=ea(d));h&&!h[p]&&(h=ea(h,f));return v(function(f,k,j,g){var q,H,r=[],w=[],p=k.length,s;if(!(s=f)){s=b||"*";for(var n=j.nodeType?[j]:j,l=[],u=0,t=n.length;u<t;u++)m(s,n[u],l);s=l}s=a&&(f||!b)?W(s,r,a,j,g):s;n=c?h||(f?a:p||d)?[]:k:s;c&&c(s,n,j,g);if(d){q=W(n,w);d(q,[],j,g);for(j=q.length;j--;)if(H=q[j])n[w[j]]=!(s[w[j]]=H)}if(f){if(h||a){if(h){q=[];for(j=n.length;j--;)if(H=n[j])q.push(s[j]=H);h(null,n=[],q,g)}for(j=n.length;j--;)if((H=n[j])&&-1<(q=h?fa.call(f,H):r[j]))f[q]=!(k[q]=H)}}else n=W(n===k?n.splice(p,n.length):n),h?h(null,k,n,g):L.apply(k,n)})}function ga(a){var b,c,d,h=a.length,f=g.relative[a[0].type];c=f||g.relative[" "];for(var e=f?1:0,k=ca(function(a){return a===b},c,!0),j=ca(function(a){return-1<fa.call(b,a)},c,!0),C=[function(a,d,c){return!f&&(c||d!==X)||((b=d).nodeType?k(a,d,c):j(a,d,c))}];e<h;e++)if(c=g.relative[a[e].type])C=[ca(da(C),c)];else{c=g.filter[a[e].type].apply(null,a[e].matches);if(c[p]){for(d=++e;d<h&&!g.relative[a[d].type];d++);return ea(1<e&&da(C),1<e&&S(a.slice(0,e-1)).replace(T,"$1"),c,e<d&&ga(a.slice(e,d)),d<h&&ga(a=a.slice(d)),d<h&&S(a))}C.push(c)}return da(C)}function na(){}var N,V,g,Y,oa,ba,O,X,J,u,t,x,y,P,Z,K,ha,p="sizzle"+-new Date,F=Q.document,l={},D=0,ya=0,pa=$(),ma=$(),qa=$(),z=typeof ka,I=[],za=I.pop,L=I.push,M=I.slice,fa=I.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},I="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w","w#"),ra="\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+I+")|)|)[\\x20\\t\\r\\n\\f]*\\]",ia=":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ra.replace(3,8)+")*)|.*)\\)|)",T=RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),wa=/^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,xa=/^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,Aa=RegExp(ia),Ba=RegExp("^"+I+"$"),U={ID:/^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,CLASS:/^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,NAME:/^\[name=['"]?((?:\\.|[\w-]|[^\x00-\xa0])+)['"]?\]/,TAG:RegExp("^("+"(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w","w*")+")"),ATTR:RegExp("^"+ra),PSEUDO:RegExp("^"+ia),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),needsContext:RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},aa=/[\x20\t\r\n\f]*[+~]/,ja=/\{\s*\[native code\]\s*\}/,sa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ca=/^(?:input|select|textarea|button)$/i,Da=/^h\d$/i,ta=/'|\\/g,Ea=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,A=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,E=function(a,b){var c="0x"+b-65536;return c!==c?b:0>c?String.fromCharCode(c+65536):String.fromCharCode(c>>10|55296,c&1023|56320)};try{M.call(t.childNodes,0)[0].nodeType}catch(Fa){M=function(a){for(var b,c=[];b=this[a];a++)c.push(b);return c}}oa=m.isXML=function(a){return(a=a&&(a.ownerDocument||a).documentElement)?"HTML"!==a.nodeName:!1};J=m.setDocument=function(a){var b=a?a.ownerDocument||a:F;if(b===u||9!==b.nodeType||!b.documentElement)return u;u=b;t=b.documentElement;x=oa(b);l.tagNameNoComments=B(function(a){a.appendChild(b.createComment(""));return!a.getElementsByTagName("*").length});l.attributes=B(function(a){a.innerHTML="<select></select>";a=typeof a.lastChild.getAttribute("multiple");return"boolean"!==a&&"string"!==a});l.getByClassName=B(function(a){a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!a.getElementsByClassName||!a.getElementsByClassName("e").length)return!1;a.lastChild.className="e";return 2===a.getElementsByClassName("e").length});l.getByName=B(function(a){a.id=p+0;a.innerHTML="<a name='"+p+"'></a><div name='"+p+"'></div>";t.insertBefore(a,t.firstChild);var c=b.getElementsByName&&b.getElementsByName(p).length===2+b.getElementsByName(p+0).length;l.getIdNotName=!b.getElementById(p);t.removeChild(a);return c});g.attrHandle=B(function(a){a.innerHTML="<a href='#'></a>";return a.firstChild&&typeof a.firstChild.getAttribute!==z&&"#"===a.firstChild.getAttribute("href")})?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}};l.getIdNotName?(g.find.ID=function(a,b){if(typeof b.getElementById!==z&&!x){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},g.filter.ID=function(a){var b=a.replace(A,E);return function(a){return a.getAttribute("id")===b}}):(g.find.ID=function(a,b){if(typeof b.getElementById!==z&&!x){var c=b.getElementById(a);return c?c.id===a||typeof c.getAttributeNode!==z&&c.getAttributeNode("id").value===a?[c]:ka:[]}},g.filter.ID=function(a){var b=a.replace(A,E);return function(a){return(a=typeof a.getAttributeNode!==z&&a.getAttributeNode("id"))&&a.value===b}});g.find.TAG=l.tagNameNoComments?function(a,b){if(typeof b.getElementsByTagName!==z)return b.getElementsByTagName(a)}:function(a,b){var c,e=[],k=0,j=b.getElementsByTagName(a);if("*"===a){for(;c=j[k];k++)1===c.nodeType&&e.push(c);return e}return j};g.find.NAME=l.getByName&&function(a,b){if(typeof b.getElementsByName!==z)return b.getElementsByName(name)};g.find.CLASS=l.getByClassName&&function(a,b){if(typeof b.getElementsByClassName!==z&&!x)return b.getElementsByClassName(a)};P=[];y=[":focus"];if(l.qsa=ja.test(b.querySelectorAll+""))B(function(a){a.innerHTML="<select><option selected=''></option></select>";a.querySelectorAll("[selected]").length||y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");a.querySelectorAll(":checked").length||y.push(":checked")}),B(function(a){a.innerHTML="<input type='hidden' i=''/>";a.querySelectorAll("[i^='']").length&&y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");a.querySelectorAll(":enabled").length||y.push(":enabled",":disabled");a.querySelectorAll("*,:x");y.push(",.*:")});a=l;var c;c=Z=t.matchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector||t.msMatchesSelector;c=ja.test(c+"");(a.matchesSelector=c)&&B(function(a){l.disconnectedMatch=Z.call(a,"div");Z.call(a,"[s!='']:x");P.push("!=",ia)});y=RegExp(y.join("|"));P=RegExp(P.join("|"));K=ja.test(t.contains+"")||t.compareDocumentPosition?function(a,b){var c=9===a.nodeType?a.documentElement:a,e=b&&b.parentNode;return a===e||!(!e||!(1===e.nodeType&&(c.contains?c.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1};ha=t.compareDocumentPosition?function(a,c){var f;return a===c?(O=!0,0):(f=c.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(c))?f&1||a.parentNode&&11===a.parentNode.nodeType?a===b||K(F,a)?-1:c===b||K(F,c)?1:0:f&4?-1:1:a.compareDocumentPosition?-1:1}:function(a,c){var f,e=0;f=a.parentNode;var k=c.parentNode,j=[a],g=[c];if(a===c)return O=!0,0;if(a.sourceIndex&&c.sourceIndex)return(~c.sourceIndex||-2147483648)-(K(F,a)&&~a.sourceIndex||-2147483648);if(!f||!k)return a===b?-1:c===b?1:f?-1:k?1:0;if(f===k)return la(a,c);for(f=a;f=f.parentNode;)j.unshift(f);for(f=c;f=f.parentNode;)g.unshift(f);for(;j[e]===g[e];)e++;return e?la(j[e],g[e]):j[e]===F?-1:g[e]===F?1:0};O=!1;[0,0].sort(ha);l.detectDuplicates=O;return u};m.matches=function(a,b){return m(a,null,null,b)};m.matchesSelector=function(a,b){(a.ownerDocument||a)!==u&&J(a);b=b.replace(Ea,"='$1']");if(l.matchesSelector&&!x&&(!P||!P.test(b))&&!y.test(b))try{var c=Z.call(a,b);if(c||l.disconnectedMatch||a.document&&11!==a.document.nodeType)return c}catch(d){}return 0<m(b,u,null,[a]).length};m.contains=function(a,b){(a.ownerDocument||a)!==u&&J(a);return K(a,b)};m.attr=function(a,b){var c;(a.ownerDocument||a)!==u&&J(a);x||(b=b.toLowerCase());return(c=g.attrHandle[b])?c(a):x||l.attributes?a.getAttribute(b):((c=a.getAttributeNode(b))||a.getAttribute(b))&&!0===a[b]?b:c&&c.specified?c.value:null};m.error=function(a){throw Error("Syntax error, unrecognized expression: "+a);};m.uniqueSort=function(a){var b,c=[],d=1,h=0;O=!l.detectDuplicates;a.sort(ha);if(O){for(;b=a[d];d++)b===a[d-1]&&(h=c.push(d));for(;h--;)a.splice(c[h],1)}return a};Y=m.getText=function(a){var b,c="",d=0;if(b=a.nodeType)if(1===b||9===b||11===b){if("string"===typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=Y(a)}else{if(3===b||4===b)return a.nodeValue}else for(;b=a[d];d++)c+=Y(b);return c};g=m.selectors={cacheLength:50,createPseudo:v,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){a[1]=a[1].replace(A,E);a[3]=(a[4]||a[5]||"").replace(A,E);"~="===a[2]&&(a[3]=" "+a[3]+" ");return a.slice(0,4)},CHILD:function(a){a[1]=a[1].toLowerCase();"nth"===a[1].slice(0,3)?(a[3]||m.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&m.error(a[0]);return a},PSEUDO:function(a){var b,c=!a[5]&&a[2];if(U.CHILD.test(a[0]))return null;if(a[4])a[2]=a[4];else if(c&&Aa.test(c)&&(b=R(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length))a[0]=a[0].slice(0,b),a[2]=c.slice(0,b);return a.slice(0,3)}},filter:{TAG:function(a){if("*"===a)return function(){return!0};a=a.replace(A,E).toLowerCase();return function(b){return b.nodeName&&b.nodeName.toLowerCase()===a}},CLASS:function(a){var b=pa[a+" "];return b||(b=RegExp("(^|[\\x20\\t\\r\\n\\f])"+a+"([\\x20\\t\\r\\n\\f]|$)"))&&pa(a,function(a){return b.test(a.className||typeof a.getAttribute!==z&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){d=m.attr(d,a);if(null==d)return"!="===b;if(!b)return!0;d+="";return"="===b?d===c:"!="===b?d!==c:"^="===b?c&&0===d.indexOf(c):"*="===b?c&&-1<d.indexOf(c):"$="===b?c&&d.substr(d.length-c.length)===c:"~="===b?-1<(" "+d+" ").indexOf(c):"|="===b?d===c||d.substr(0,c.length+1)===c+"-":!1}},CHILD:function(a,b,c,d,h){var f="nth"!==a.slice(0,3),e="last"!==a.slice(-4),k="of-type"===b;return 1===d&&0===h?function(a){return!!a.parentNode}:function(b,c,g){var m,r,w,l,s;c=f!==e?"nextSibling":"previousSibling";var n=b.parentNode,u=k&&b.nodeName.toLowerCase();g=!g&&!k;if(n){if(f){for(;c;){for(r=b;r=r[c];)if(k?r.nodeName.toLowerCase()===u:1===r.nodeType)return!1;s=c="only"===a&&!s&&"nextSibling"}return!0}s=[e?n.firstChild:n.lastChild];if(e&&g){g=n[p]||(n[p]={});m=g[a]||[];l=m[0]===D&&m[1];w=m[0]===D&&m[2];for(r=l&&n.childNodes[l];r=++l&&r&&r[c]||(w=l=0)||s.pop();)if(1===r.nodeType&&++w&&r===b){g[a]=[D,l,w];break}}else if(g&&(m=(b[p]||(b[p]={}))[a])&&m[0]===D)w=m[1];else for(;r=++l&&r&&r[c]||(w=l=0)||s.pop();)if((k?r.nodeName.toLowerCase()===u:1===r.nodeType)&&++w)if(g&&((r[p]||(r[p]={}))[a]=[D,w]),r===b)break;w-=h;return w===d||0===w%d&&0<=w/d}}},PSEUDO:function(a,b){var c,d=g.pseudos[a]||g.setFilters[a.toLowerCase()]||m.error("unsupported pseudo: "+a);return d[p]?d(b):1<d.length?(c=[a,a,"",b],g.setFilters.hasOwnProperty(a.toLowerCase())?v(function(a,c){for(var e,g=d(a,b),j=g.length;j--;)e=fa.call(a,g[j]),a[e]=!(c[e]=g[j])}):function(a){return d(a,0,c)}):d}},pseudos:{not:v(function(a){var b=[],c=[],d=ba(a.replace(T,"$1"));return d[p]?v(function(a,b,c,g){g=d(a,null,g,[]);for(var j=a.length;j--;)if(c=g[j])a[j]=!(b[j]=c)}):function(a,f,e){b[0]=a;d(b,null,e,c);return!c.pop()}}),has:v(function(a){return function(b){return 0<m(a,b).length}}),contains:v(function(a){return function(b){return-1<(b.textContent||b.innerText||Y(b)).indexOf(a)}}),lang:v(function(a){Ba.test(a||"")||m.error("unsupported lang: "+a);a=a.replace(A,E).toLowerCase();return function(b){var c;do if(c=x?b.getAttribute("xml:lang")||b.getAttribute("lang"):b.lang)return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(a){var b=Q.location&&Q.location.hash;return b&&b.slice(1)===a.id},root:function(a){return a===t},focus:function(a){return a===u.activeElement&&(!u.hasFocus||u.hasFocus())&&!(!a.type&&!a.href&&!~a.tabIndex)},enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if("@"<a.nodeName||3===a.nodeType||4===a.nodeType)return!1;return!0},parent:function(a){return!g.pseudos.empty(a)},header:function(a){return Da.test(a.nodeName)},input:function(a){return Ca.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||b.toLowerCase()===a.type)},first:G(function(){return[0]}),last:G(function(a,b){return[b-1]}),eq:G(function(a,b,c){return[0>c?c+b:c]}),even:G(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:G(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:G(function(a,b,c){for(b=0>c?c+b:c;0<=--b;)a.push(b);return a}),gt:G(function(a,b,c){for(c=0>c?c+b:c;++c<b;)a.push(c);return a})}};for(N in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})g.pseudos[N]=ua(N);for(N in{submit:!0,reset:!0})g.pseudos[N]=va(N);ba=m.compile=function(a,b){var c,d=[],h=[],f=qa[a+" "];if(!f){b||(b=R(a));for(c=b.length;c--;)f=ga(b[c]),f[p]?d.push(f):h.push(f);var e=0,k=0<d.length,j=0<h.length;c=function(a,b,c,f,l){var p,s,n=[],t=0,v="0",x=a&&[],y=null!=l,z=X,B=a||j&&g.find.TAG("*",l&&b.parentNode||b),A=D+=null==z?1:Math.E;y&&(X=b!==u&&b,V=e);for(;null!=(l=B[v]);v++){if(j&&l){for(p=0;s=h[p];p++)if(s(l,b,c)){f.push(l);break}y&&(D=A,V=++e)}k&&((l=!s&&l)&&t--,a&&x.push(l))}t+=v;if(k&&v!==t){for(p=0;s=d[p];p++)s(x,n,b,c);if(a){if(0<t)for(;v--;)!x[v]&&!n[v]&&(n[v]=za.call(f));n=W(n)}L.apply(f,n);y&&(!a&&0<n.length&&1<t+d.length)&&m.uniqueSort(f)}y&&(D=A,X=z);return x};c=k?v(c):c;f=qa(a,c)}return f};g.pseudos.nth=g.pseudos.eq;g.filters=na.prototype=g.pseudos;g.setFilters=new na;J();"function"===typeof define&&define.amd?define(function(){return m}):Q.Sizzle=m})(window);

var browser_is_msie = /MSIE/i.test (navigator.userAgent);
var is_ua_mobile = /mobile|android/i.test (navigator.userAgent);
var dialog_width = is_ua_mobile  ? top.innerWidth - 50  : screen.availWidth -  (screen.availWidth  <= 800 ? 50 : 100);
var dialog_height = is_ua_mobile ? top.innerHeight - 50 : screen.availHeight - (screen.availHeight <= 800 ? 50 : 100);
var scrollable_table_ids = [];
var is_dirty = false;
var scrollable_table_is_blocked = false;
var tableSlider = new TableSlider ();
var q_is_focused = false;
var is_interface_is_locked = false;
var left_right_blocked = false;
var last_vert_menu = [];
var subsets_are_visible = 0;
var questions_for_suggest = {};
var clockID = 0;
var clockSeparatorID = 0;
var suggest_clicked = 0;
var suggest_is_visible = 0;
var lastClientHeight = 0;
var lastClientWidth = 0;
var lastKeyDownEvent = {};
var expanded_nodes = {};

var numerofforms = 0;
var numeroftables = 0;
var minutesLastChecked = -1;
var typeAheadInfo = {last:0,
	accumString:"",
	delay:500,
	timeout:null,
	reset:function () {this.last=0; this.accumString=""}
};
var kb_hooks = [{}, {}, {}, {}];

var max_len = 50;

window.__original_alert   = window.alert;
window.alert = function (s) {

	window.__original_alert (s);

	window.setCursor (top);
	window.setCursor (window);

};

window.__original_confirm = window.confirm;
window.confirm = function (s) {

	var r = window.__original_confirm (s);

	window.setCursor (top);
	window.setCursor (window);

	return r;

};


function drop_form_tr_for_this_minus_icon (i) {

	$(i).parent ().parent ().remove ();

}

function clone_form_tr_for_this_plus_icon (i) {

	var tr_old = $(i).parent ().parent ();

	if (i.src.indexOf ('minus.gif') > -1) {

		tr_old.remove ();

		return;

	}

	var id = tr_old.attr ('id');

	var selector = "tr[id^='" + id + "']";

	var n = 0;

	var last = null;

	$(selector, tr_old.parent ()).each (function () {

		n ++;

		last = this;

	});

	var tr_new = tr_old.clone ();

	$('img', tr_new).each (function () {

		var oldId = this.id;

		this.id   += ('_' + n);

	});

	tr_new.attr ('id', id + '_' + n);

	var img = $('img:last', tr_new);

	img.attr ('src', img.attr ('src').replace ('plus', 'minus'));

	var td = $('td:first', tr_new);

	td.text (img.attr ('lowsrc') + ' ' + (parseInt (img.attr ('name')) + n) + ':');

	$(':input', tr_new).each (function () {

		this.id   += ('_' + n);
		this.name += ('_' + n);
		this.value = '';

	});

	tr_new.insertAfter (last);

}

function get_event (e) {

	return browser_is_msie ? window.event : e;

}

function subsets_are_visible_ (value) {

	return;

//alert ('subsets_are_visible_: ' + value);
	subsets_are_visible = value;

	var menu = $('#Menu');
//alert (menu);
	if (subsets_are_visible) {

		var offset = $('#admin').offset ($(document.body));

		menu.css ({
			left : offset.left,
			top  : offset.top + 25
		});

		menu.slideDown ('fast');

	}
	else {

		menu.slideUp ('fast');

	}

}

function select_visibility () {
	if (top.last_vert_menu && top.last_vert_menu [0]) return 'hidden';
	if (last_vert_menu [0]) return 'hidden';
	if (subsets_are_visible) return 'hidden';
	return '';
}

function cell_select_visibility (select, fixed_cols) {

	var td    = select.offsetParent;
	var tr    = td.parentNode;
	var cells = tr.cells;
	var last_fixed_cell_offset_right = 0;

	for (i = 0; i < fixed_cols; i ++) {
		last_fixed_cell_offset_right += cells [i].offsetWidth;
	}

	var table = td.offsetParent;
	var div   = table.offsetParent;
	var select_left = select.offsetLeft + td.offsetLeft - div.scrollLeft;
	var result = select_left < last_fixed_cell_offset_right ? 'hidden' : '';

	return result;

}

function set_suggest_result (sel, id) {

	if (sel.selectedIndex < 0) return;

	var o = sel.options [sel.selectedIndex];

	var qs = questions_for_suggest [sel.name];

	if (qs) {

		var q = qs [o.value];
		if (q && !confirm (q)) return blockEvent ();

	}

	try {
	document.getElementById (id + '__id').value    = o.value;
	document.getElementById (id + '__label').value = o.text;
	} catch (e) {}

	var i = document.getElementById (id);
	i.value = o.text;
	i.focus ();

	sel.style.display = 'none';

	suggest_is_visible = 0;

	return blockEvent ();

}

function dialog_open (href, arg, options) {

	arg.parent = window;

	var result = window.showModalDialog (href, arg, options);

	document.body.style.cursor = 'default';

	return result;

}

function close_multi_select_window (ret) {
	var w = window, i = 0;
	for (;i < 5 && w.name != '_modal_iframe'; i ++)
		w = w.parent;
	if (w.name == '_modal_iframe') {
		w.returnValue = ret;
		w.close ();
	} else {
		top.returnValue = ret;
		top.close ();
	}
}

function encode1251 (str) {

//	var r = /[�-��-�]/g;
//	var r = /[\340-\377\300-\337]/g;
	var r = /[\u0410-\u044f]/g;
	var result = str.replace (r, function (chr) {
		result = chr.charCodeAt(0) - 848;
		return '%' + result.toString(16);
	});
	r = /�/g;
	result = result.replace (r, '%b8');
	r = /�/g;
	result = result.replace (r, '%�8');
	r = / /g;
	result = result.replace (r, '%20');

	return result;

}

function handle_hotkey_focus    (r) {document.form.elements [r.data].focus ()}
function handle_hotkey_focus_id (r) {document.getElementById (r.data).focus ()}
function handle_hotkey_href     (r) {

	if (r.confirm && !confirm (r.confirm)) return blockEvent ();

	if (r.href) {
		nope (r.href + '&__from_table=1&salt=' + Math.random (), '_self');
	}
	else {
		activate_link_by_id (r.data);
	}

}

function nope (url, name, options) {

	var w = window;

	options = options || {};

	if (name == '_self') {

		w.location.href = url;

	}
	else if (options.newtab) {

		top.parent.opentab(url, options.label, options.icon);

	}
	else {

		w.open (url, name, options);

	}

}

function nop () {}

function ancestor_window_with_child (id) {

	var w = window;
	var m = null;
	var tries = 20;

	while (tries && w && !m) {
		w = w.parent;
		m = w.document.getElementById (id);
		tries --;
	}

	if (!m) return null;

	return {
		window: w,
		child:  m
	};

}

function _dumper_href (tail, target) {

	var wf = ancestor_window_with_child ('_body_iframe');

	if (!wf) return alert ('_body_iframe not found :-((');

	var body_iframe    = wf.child.contentWindow;

	var content_iframe = body_iframe.document.getElementById ('_content_iframe');

	var href = content_iframe ? content_iframe.contentWindow.location.href : body_iframe.location.href;

	activate_link (href + tail, target);

}

function check_menu_md5 (menu_md5) {

	try {

		window.parent.subsets_are_visible_ (0);

	} catch (xxx) {}

	if (
		window.parent.menu_md5 == menu_md5
		|| !window.parent.location
		|| window.parent.location.href.indexOf ('dialog.html') > 0
	) return;

	$.getScript (window.location.href + '&__only_menu=1');

}

function code_alt_ctrl (code, alt, ctrl) {
	var e = get_event (lastKeyDownEvent);
	if (e.keyCode != code) return 0;
	if (e.altKey  != alt)  return 0;
	if (e.ctrlKey != ctrl) return 0;
	return 1;
}

function endsWith (str, s){
	var reg = new RegExp (s + "$");
	return reg.test (str);
}

function check_top_window () {
	try {
		if (!endsWith (window.name, '_iframe')) window.location.href = window.location.href + '&__top=1'
	} catch (e) {}
}

function activate_link_by_id (id) {

	var e = get_event (lastKeyDownEvent);

	var a = document.getElementById (id);

	a_click (a)

}

function refresh_radio__div (id) {

	var div = document.getElementById ('radio_div_' + id);

	if (document.getElementById (id).checked) {

		div.style.display = 'block';

	}
	else {

		div.style.display = 'none';

	}

}

function stibqif (stib, qif) {
	scrollable_table_is_blocked = stib;
	q_is_focused                = qif;
}

function a_click (a, e) {

	if (a.onclick) {

		try { e.cancelBubble = false } catch (xxx) {}

		a.onclick ();

	}

	if (e != null && e.cancelBubble) return;

	if (browser_is_msie) {

		a.click ();

	}
	else {

		blockEvent (e);

		var txt = '' + a;

		if (txt.substr (0, 11).toUpperCase() == 'JAVASCRIPT:') {

			var code = decodeURI (txt.substr (11));

			eval (code);

		}
		else {

			var target = a.target;

			if (!target) target = '_self';

			nope (a.href, target);

		}

	}

}

function focus_on_input (__focused_input) {

	var focused_inputs = document.getElementsByName (__focused_input);

	if (focused_inputs != null && focused_inputs.length > 0) {
		var focused_input = focused_inputs [0];
		try {focused_input.focus ();} catch (e) {}
		if (focused_input.type == 'radio') focused_input.select ();
		return;
	}

	var forms = document.forms;

	if (forms != null) {

		var done = 0;

		for (var i = 0; i < forms.length; i++) {

			var elements = forms [i].elements;

			if (elements != null) {

				for (var j = 0; j < elements.length; j++) {

					var element = elements [j];

					if (element.tagName == 'INPUT' && element.name == 'q') break;

					if (
						   (element.tagName == 'INPUT'  && (element.type == 'text' || element.type == 'checkbox' || element.type == 'radio'))
						||  element.tagName == 'TEXTAREA')
					{
						try {element.focus ();} catch (e) { continue; }
						done = 1;
						break;
					}

				}

			}

			if (done) break;

		}

	}

}


function tabOnEnter () {
   if (window.event && window.event.keyCode == 13 && !window.event.ctrlKey && !window.event.altKey) {
   	window.event.keyCode = 9;
   }
}

function subset_on_change (subset_name, href) {

	var subset_tr_id = '_subset_tr_' + subset_name;
	var subset_a_id = '_subset_a_' + subset_name;

	var subset_tr = document.getElementById(subset_tr_id);

	var subset_table = subset_tr.parentNode;

	for (var i = 0; i < subset_table.rows.length; i++) {
		subset_table.rows [i].style.display = '';
	}

	subset_tr.style.display = 'none';

	var subset_label_div = document.getElementById('admin');

	var label = document.getElementById(subset_a_id).innerHTML;

	var subset_label = document.createTextNode(label);

	var subset_label_a = document.createElement("A");

	subset_label_a.appendChild(subset_label);

	subset_label_a.href = '#';

	subset_label_div.replaceChild(subset_label_a, subset_label_div.firstChild);

	var fname = document.getElementById('_body_iframe');
	fname.src = href + '&_salt' + Math.random ();

	subsets_are_visible_ (1 - subsets_are_visible);

	document.getElementById ("_body_iframe").contentWindow.subsets_are_visible_ (subsets_are_visible);

}

function check_edit_mode (a, fallback_href) {

	if (!edit_mode) return false;

	if (edit_mode_args.dialog_url) {

		window.showModelessDialog (

			edit_mode_args.dialog_url,

			{

				href  : a.href ? a.href : fallback_href,

				title : a.innerText

			},

			'resizable:yes;unadorned:yes;status:yes'

		);

		blockEvent ();

	}

	if (edit_mode_args.label) alert (edit_mode_args.label);

	setCursor ();

	return true;

}

function open_vocabulary_from_select (s, options) {

	if ($.browser.webkit || $.browser.safari)
		$.blockUI ({fadeIn: 0, message: '<h1>' + options.message + '</h1>'});

	try {


		if (is_ua_mobile) {

			 $.showModalDialog({
				url             : 'http://' + window.location.host + window.location.pathname + '/i/_skins/Ken/dialog.html?' + Math.random(),
				height          : dialog_height,
				width           : dialog_width,
				resizable       : true,
				scrolling       : 'no',
				dialogArguments : {href: options.href, parent: window},
				onClose: function () {

					var result = this.returnValue || {result : 'close'};

					if (result.result == 'ok') {

						setSelectOption (s, result.id, result.label);

					} else {

						s.selectedIndex = 0;
						window.focus ();
						s.focus ();

						if (s.onchange()) s.onchange();

					}

					if ($.browser.webkit || $.browser.safari)
						$.unblockUI ();

				}
			});


		} else {

			var result = window.showModalDialog (
				'http://' + window.location.host + window.location.pathname + '/i/_skins/Ken/dialog.html?' + Math.random(),
				{href: options.href, parent: window},
				'status:no;resizable:yes;help:no;dialogWidth:' + options.dialog_width + 'px;dialogHeight:' + options.dialog_height + 'px'
			);

			window.focus ();
			s.focus ();

			if (result.result == 'ok') {

				setSelectOption (s, result.id, result.label);

			} else {

				s.selectedIndex = 0;

				$(s).change();

			}

			if ($.browser.webkit || $.browser.safari)
				$.unblockUI ();

		}

	} catch (e) {

		s.selectedIndex = 0;

		if ($.browser.webkit || $.browser.safari)
			$.unblockUI ();
	}

}


function do_kendo_combo_box (id, options) {

	var values = options.values,
		initialized = 0;


	var combo = $('#' + id).kendoComboBox({
		placeholder     : options.empty,
		dataTextField   : 'label',
		dataValueField  : 'id',
		filter          : 'contains',
		highlightFirst  : true,
		suggest         : true,
		minLength       : 3,
		autoBind        : true,
		dataSource: {
			transport: {
				read        : options.href + '&salt=' + Math.random (),
				contentType : 'application/json; charset=utf-8',
				type        : 'POST',
				dataType    : 'json',
				parameterMap: function(data, type) {
					var q;
					if (data.filter && data.filter.filters && data.filter.filters [0] && data.filter.filters [0].value)
						q = data.filter.filters [0].value;

					if (type == 'read') {
						return {
							start   : data.skip,
							portion : data.take,
							ids     : data.ids,
							q       : q
						}
					}
				}
			},
			serverFiltering : true,
			serverPaging    : true,
			pageSize        : options.portion,
			schema   : {
				total : 'cnt',
				data  : function (result) {
schema_loop:
					for(var i = 0; i < values.length; i++) {
						for (var j = 0; j < result.result.length; j ++)
							if (result.result [j].id == values [i].id)
								continue schema_loop;
						result.result.unshift (values [i]);
					}

					return result.result;
				}
			}

		},
		change: function(e) {

			if (this.value() && !this.dataItem()) {

				this.value ('');
				this.dataSource.query ();

			} else {

				var input = this.element [0];

				if (!input.options)
					input.options = [];

				input.selectedIndex = this.selectedIndex;
				input.options [this.selectedIndex] = {};
				input.options [this.selectedIndex].value = this.value ();

				if (!this.value ())
					this.dataSource.query ();


			}
		},

		dataBound: function(e) {

			if (!initialized) {

				for(var i = 0; i < values.length; i++) {
					if (values [i].selected) {
						this.select (i);
						break;
					}
				}

				initialized = 1;

			}
		}

	}).data('kendoComboBox');

	$(combo.input[0]).on ("keyup",
		function (event) {
			if (combo.text () == '' && combo.dataSource.total() < 2) {
				combo.value ('');
				var f = combo.dataSource.filter();
				if (f && f.filters && f.filters [0])
					combo.dataSource.filter().filters [0].value = combo.text();
				combo.dataSource.read ();
			}
		}
	);

	combo.list.width(options.width);

}

function open_vocabulary_from_combo (combo, options) {

	if ($.browser.webkit || $.browser.safari)
		$.blockUI ({fadeIn: 0, message: '<h1>' + options.message + '</h1>'});

	try {

		if (is_ua_mobile) {

			 var me = this;

			 $.showModalDialog({
				url             : 'http://' + window.location.host + window.location.pathname + '/i/_skins/Ken/dialog.html?' + Math.random(),
				height          : dialog_height,
				width           : dialog_width,
				resizable       : true,
				scrolling       : 'no',
				dialogArguments : {href: options.href, parent: window},
				onClose: function () {

					window.focus ();

					var result = this.returnValue;

					if (result.result == 'ok') {

						combo.dataSource.query({
							ids : result.id
						});

					}

					if ($.browser.webkit || $.browser.safari)
						$.unblockUI ();

				}
			});


		} else {

			var result = window.showModalDialog (
				'http://' + window.location.host + window.location.pathname + '/i/_skins/Ken/dialog.html?' + Math.random(),
				{href: options.href, parent: window},
				'status:no;resizable:yes;help:no;dialogWidth:' + options.dialog_width + 'px;dialogHeight:' + options.dialog_height + 'px'
			);

			window.focus ();

			if (result.result == 'ok') {

				combo.dataSource.query({
					ids : result.id
				});

			}
		}

		if ($.browser.webkit || $.browser.safari)
			$.unblockUI ();

	} catch (e) {

		if ($.browser.webkit || $.browser.safari)
			$.unblockUI ();

	}

}

function remove_kendo_widget (w) {

	var popup = w.popup,
		element = popup.wrapper[0] ? popup.wrapper : popup.element;

	element.remove();

	w.element.show().insertBefore(w.wrapper);
	w.wrapper.remove();

	w.element.removeData("kendoComboBox");
	w.element.removeData("kendoDropDownList");
}

function UpdateClock () {

	var tDate = new Date ();

	$('#clock_s').text (clockSeparators [tDate.getSeconds () % 2]);

	var currentMinutes = tDate.getMinutes ();
	if (currentMinutes === minutesLastChecked) {
		return
	}
	minutesLastChecked = currentMinutes;

	$('#clock_d').text (tDate.getDate () + ' ' + window.__month_names [tDate.getMonth ()] + ' ' + tDate.getFullYear ());
	$('#clock_h').text (twoDigits (tDate.getHours ()));
	$('#clock_s').css({visibility : tDate.getSeconds () % 2 ? 'hidden' : 'visible'});
	$('#clock_m').text (twoDigits (currentMinutes));
}

function twoDigits (n) {
   if (n > 9) return n;
   return '0' + n;
}

function __im_schedule (delay) {

	if (__im.timer) {
		clearTimeout (__im.timer);
		__im.timer = 0;
	}

	__im.timer = setTimeout ("__im_check ()", delay);

}

function __im_check () {

	if (!__im.delay) return;

	__im_schedule (__im.delay);

	$.get (__im.idx + '?salt=' + Math.random (), function (data) {

		if (data.length != 32) return;

		$.getJSON (__im.url + '&id=' + data + '&salt=' + Math.random (), function (data) {

			if (!data || !data.code) return;

			try { eval (data.code)} catch (e) {};

			__im_schedule (0);

		});

	});

}

function typeAhead (noChange) { // borrowed from http://www.oreillynet.com/javascript/2003/09/03/examples/jsdhtmlcb_bonus2_example.html

	var event = window.event;

	if (!event || event.ctrlKey || event.altKey) return;

	var keyCode = event.keyCode;

	if (keyCode == 8) return typeAheadInfo.accumString = "";

	if (keyCode == 13) return window.event.keyCode = 9;

	var now = new Date ();

	if (typeAheadInfo.accumString == "" || now - typeAheadInfo.last < typeAheadInfo.delay) {

		var selectElem = event.srcElement;

	 	var newChar = String.fromCharCode (keyCode).toUpperCase ();

		typeAheadInfo.accumString += newChar;

		var selectOptions = selectElem.options;

		var txt;

		var len = typeAheadInfo.accumString.length;

		for (var i = 0; i < selectOptions.length; i++) {

			if (typeAheadInfo.accumString !== selectOptions [i].text.substr (0, len).toUpperCase ()) continue;

			if (selectElem.selectedIndex == i) break;

			selectElem.selectedIndex = i;

			if (noChange) {

				selectElem.onclick = selectElem.onblur = function () {this.form.submit ()}

			}
			else {

				selectElem.onchange ();

			}

			clearTimeout (typeAheadInfo.timeout);

			typeAheadInfo.last = now;

			typeAheadInfo.timeout = setTimeout ("typeAheadInfo.reset()", typeAheadInfo.delay);

			return blockEvent ();

		}

	}
	else {

		clearTimeout (typeAheadInfo.timeout);

	}

	typeAheadInfo.reset ();

	blockEvent ();

	return true;

}

function activate_link (href, target, no_block_event) {

	if (href.indexOf ('javascript:') == 0) {
		var code = href.substr (11).replace (/%20/g, ' ');
		eval (code);
	}
	else {

		href = href + '&salt=' + Math.random ();
		if (target == null || target == '') target = '_self';
		nope (href, target, 'toolbar=no,resizable=yes');

	}

	if (no_block_event) {

		return true;

	} else {

		blockEvent ();

	}

}


var timer;
var delay = 500;  //����� �������� ����� ������������� �������

function hideSubMenus (level) {

	if (level == 0) {
		level = 1;
		if (last_vert_menu [0]) {
			last_vert_menu [0].style.backgroundImage='url(/i/_skins/TurboMilk/menu_bg.gif)';
			last_vert_menu [0] = null;
		}
	}

	for (var i = last_vert_menu.length - 1; i >= level; i--) {
		if (last_vert_menu [i]) {
			if (last_vert_menu [i].td)
				last_vert_menu [i].td.style.backgroundImage='url(/i/_skins/TurboMilk/menu_bg.gif)';
			last_vert_menu [i].div.style.display = 'none';
			last_vert_menu [i] = null;
		}
	}
}

function menuItemOver (td, child, div, level) {


	clearTimeout(timer);

	if (div) {

		var current_submenu = document.getElementById ('vert_menu_' + div);

		if (last_vert_menu [level] && last_vert_menu [level].div) {

			if (last_vert_menu [level].div != current_submenu) {
				hideSubMenus (level + 1);
				last_vert_menu [level].div = current_submenu;
			} else {
				if (last_vert_menu [level].td && last_vert_menu [level].td != td) {
					last_vert_menu [level].td.style.backgroundImage='url(/i/_skins/TurboMilk/menu_bg.gif)';

					hideSubMenus (level + 1);

				}
			}

		}

		for (var i = last_vert_menu.length - 1; i >= level; i--) {
			if (last_vert_menu [i] && last_vert_menu [i].td)
				last_vert_menu [i].td.style.backgroundImage='url(/i/_skins/TurboMilk/menu_bg.gif)';

		}

		if (last_vert_menu [level]) {

			last_vert_menu [level].td = td;
			td.style.backgroundImage='url(/i/_skins/TurboMilk/menu_bg_s.gif)';

		}

		if (child) {
			var submenu = document.getElementById ('vert_menu_' + child);

			last_vert_menu [level + 1] = {
				div:	submenu,
				td:		null
			}

			submenu.style.left = td.offsetLeft + td.offsetWidth;
			submenu.style.top = td.offsetTop;

			submenu.style.display = "block";

		}
	} else {
		td.style.backgroundImage='url(/i/_skins/TurboMilk/menu_bg_s.gif)';

		if (last_vert_menu [0] != td) {
			hideSubMenus (0);
			last_vert_menu [0] = td;
		} else {
			if (last_vert_menu [1] && last_vert_menu [1].td)
				last_vert_menu [1].td.style.backgroundImage='url(/i/_skins/TurboMilk/menu_bg.gif)';
		}

		if (child) {
			var submenu = document.getElementById ('vert_menu_' + child);
			last_vert_menu [1] = {
				div:	submenu,
				td:		null
			}

			submenu.style.left = td.offsetLeft;
			submenu.style.top = td.offsetTop+td.offsetHeight;

			submenu.style.display = "block";

		}
	}
}

function menuItemOut () {
	clearTimeout(timer);
	timer = setTimeout('hideSubMenus(0)',delay);
}

function open_popup_menu (event, type, level) {

	clearTimeout(timer);

	var div = document.getElementById ('vert_menu_' + type);

	if (!div) return;

	if (!level) {
		level = 1;
		hideSubMenus (0);
	} else {
		hideSubMenus (level);
	}

	div.style.top  = event.clientY - 5 + document.body.scrollTop;
	div.style.left = event.clientX - 5 + document.body.scrollLeft;


	last_vert_menu [level] = {
		div:	div,
		td:		null
	}
	div.style.display = 'block';

}


function setVisible (id, isVisible) {
	document.getElementById (id).style.display = isVisible ? 'block' : 'none'
};

function restoreSelectVisibility (name, rewind) {
	setVisible (name + '_select', true);
//	setVisible (name + '_iframe', false);
	setVisible (name + '_div', false);
	document.getElementById (name + '_iframe').src = '/0.html';
	if (rewind) {
		document.getElementById (name + '_select').selectedIndex = 0;
	}
};

function setAndSubmit (name, values) {

	var form = document.forms [name];

	var e = form.elements;

	for (var i in values) e [i].value = values [i];

	form.submit ();

}

function checkMultipleInputs (f) {

	var e = f.elements;

	var formName = f.name;

	for (var j = 0; j < e.length; j ++) {

		var name = e [j].name;

		var inputs = document.getElementsByName (name);

		for (var i = 0; i < inputs.length; i++) {

			var input = inputs [i];

			var n = input.name;

			if (n.charAt (0) != '_') continue;

			var h = e [n];

			if (!h) {

				h = document.createElement('<input type="hidden" name="' + n + '">');

				f.appendChild (h);

			}

			h.value = input.value;

		}

	}

};


function setFormCheckboxes (form, checked) {

	$('input:checkbox:visible', $(document.forms [form])).each (

		function () {this.checked = checked}

	);

	return setCursor ();

}

function setCursor (w, c) {

	if (!w) w = window;
	if (!c) c = 'default';

	if ($.browser.msie && window.event) {

		var e = window.document.elementFromPoint (event.clientX, event.clientY);

		while (e) {

			try { if (e.tagName == 'A' || e.tagName == 'SPAN') e.style.cursor = c } catch (err) {};

			e = e.parentNode;

		}

	}

	var b = w.document.body;

	$(b).css ("cursor", c);

	setTimeout (function () {

		$('a',    b).css ("cursor", c == 'default' ? 'pointer' : c);
		$('span', b).css ("cursor", c);

	}, 0)

	return void (0);

}

function invoke_setSelectOption (a) {

	if (!a.question || window.confirm (a.question)) {
		var ws = ancestor_window_with_child ('__body_iframe');
		if (ws) ws.window._setSelectOption (a.id, a.label);
	}
	else {
		document.body.style.cursor = 'default';
		nop ();
	};

}

function setSelectOption (select, id, label) {

	label = label.length <= max_len ? label : (label.substr (0, max_len - 3) + '...');

	for (var i = 0; i < select.options.length; i++) {
		if (select.options [i].value == id) {
			select.options [i].innerText = label;
			select.selectedIndex = i;
			window.focus ();
			select.focus ();
			$(select).change();
			$(select).kendoDropDownList().data('kendoDropDownList').refresh();
			return;
		}
	}

	var option = document.createElement ("OPTION");
	select.options.add (option);
	option.value = id;

	if ($.browser.mozilla) {
		option.textContent = label;
	}
	else {
		option.innerText = label;
	}

	select.selectedIndex = select.options.length - 1;

	window.focus ();
	select.focus ();
	$(select).change();
	$(select).kendoDropDownList().data('kendoDropDownList').refresh();

	if ($(select).parents('div.dataTables_scrollBody').length) {
		try {
			$($.fn.dataTable.fnTables(true)).dataTable().fnAdjustColumnSizing();
		} catch (e) {}
	}
};

function blur_all_inputs () {

	$('input').each (function () {
		try {
			this.blur  ();
		}
		catch (e) {}
	});

	return 0;

}

function focus_on_first_input (td) {

	if (!td) return blur_all_inputs ();

	last_cell_id = td;

	$('input', td).each (function () {
		try {
			this.focus  ();
			this.select ();
		}
		catch (e) {}
	});

	return 0;

}

function blockEvent (event) {

	if (browser_is_msie) event = window.event;

	try { event.keyCode = 0         } catch (e) {}
	try { event.cancelBubble = true } catch (e) {}
	try { event.returnValue = false } catch (e) {}

	return false;

}

function absTop (element) {

	var result = 0;

	while (element != null) {
		result  += element.offsetTop;
		element = element.offsetParent;
	}

	return result;

}

function handle_basic_navigation_keys () {

	if (code_alt_ctrl (116, 0, 0)) {

		if (is_dirty && !confirm (i18n.F5)) return blockEvent ();

		window.location.reload ();

		return blockEvent ();

	}

	var e = get_event (lastKeyDownEvent);
	if (is_interface_is_locked)
		return;

	var keyCode = e.keyCode;
	var i = 0;

	if (e.altKey ) i += 2;
	if (e.ctrlKey) i ++;

	var kb_hook = kb_hooks [i] [keyCode];

	if (kb_hook) {
		kb_hook [0] (kb_hook [1]);
		return blockEvent ();
	}

	if (keyCode == 8 && !q_is_focused) {
		typeAheadInfo.accumString = "";
		blockEvent ();
		return;
	}

	tableSlider.handle_keyboard (keyCode);

}

function actual_table_height (table, min_height, height, id_toolbar) {

	var real_height       = $(table.firstChild).height ();
	real_height += 18;

	var offset = $(table).offset();
	var max_screen_height = $(window).height () - offset.top;

	if (id_toolbar != '') {
		var toolbar = document.getElementById (id_toolbar);
		if (toolbar) max_screen_height -= toolbar.offsetHeight;
	}

	if (min_height > real_height)       min_height = real_height;

	if (height     > real_height)       height     = real_height;

	if (height     > max_screen_height) height     = max_screen_height;

	if (height     < min_height)        height     = min_height;

	return height;

}

function image_selected(dummy_sid, id, path, width, height, image_name) {
	if (window != opener) {
		if (image_name=="")
		{
			opener.insertImageInDoc(path, width, height)
			self.focus();
			self.close();
		} else {
			opener.insertImage(id, path, width, height, image_name)
			self.focus();
			self.close();
		}
	}
}

function insertImage(id, path, width, height, image_name) {
	if(typeof(path)=="string") {
		id_image = eval('document.forms[0]._'+image_name);
		id_image.value=id;
		image_preview = eval('document.forms[0].'+image_name+'_preview')
		image_preview.src=path;
		image_preview.width=width;
		image_preview.height=height;
	}
}

function new_file_name() {
	if (document.forms[0]._file.value!='') {
		document.forms[0].preview.style.display='';
	}
	else {
		document.forms[0].preview.style.display='none';
		document.forms[0]._width.value='';
		document.forms[0]._height.value='';
	}
	document.forms[0].preview.src=document.forms[0]._file.value;
//		hiddenimg.src=document.imageupload.imagefile.value;
}

function show_size(obj) {
	document.forms[0]._width.value=obj.width;
	document.forms[0]._height.value=obj.height;
	var W=obj.width, H=obj.height;
	if(W>640)
	{
		H=H*((100.0)/W);
		W=100;
	}

	if(H>480)
	{
		W=W*((100.0)/H);
		H=100;
	}


	document.forms[0].preview.width=W;
	document.forms[0].preview.height=H;

}

function closeTab () {
	var id_tab = window.frameElement.getAttribute('data-id-tab');
	top.close_tab (id_tab, 'main');
}

function refresh_table_slider_on_resize () {

	var d = document.body;

	if (lastClientHeight == d.clientHeight && lastClientWidth == d.clientWidth) return;

	tableSlider.cell_on ();

	lastClientHeight = d.clientHeight;
	lastClientWidth  = d.clientWidth;

}

function TableSlider (initial_row) {

	this.rows = [];
	this.row = 0;
	this.col = 0;
	this.last_cell_id = null;

}

TableSlider.prototype.set_row = function (row) {

	$(scrollable_table_ids).each (function (n) {

		var trs = '#' + this + ' > tbody > tr';

		$(trs).each (function (i) {

			tableSlider.rows.push (this);

			$('td', this).each (function (j) {

				this.onclick = td_on_click;
				this.oncontextmenu = td_on_click;

			})

		});

	});

	this.cnt      = this.rows.length;

	if (row < this.cnt) {
		this.row = row;
		if (numeroftables == 1) {

			this.scrollCellToVisibleTop ();

		}
	}

	this.cell_on ();

}

TableSlider.prototype.get_cell = function () {

	if (!this.cnt) return null;

	var the_row = this.rows [Math.min (this.row, this.cnt - 1)];

	if (!the_row) return null;

	var cells = the_row.cells;

	if (!cells) return null;

	var cell = cells [Math.min (this.col, cells.length - 1)];

	if (cell.className == 'dataTables_empty') return null;

	return cell;

}

TableSlider.prototype.cell_off = function (cell) {

	$('#slider').css ('visibility', 'hidden');

	$('#slider_').css ('visibility', 'hidden');

	return cell;

}

TableSlider.prototype.cell_on = function () {

	if (this.isVirgin && this.row == 0 && this.initial_row == 0) return;

	var cell         = this.get_cell ();

	if (!cell) return;

	hideSubMenus (0);

	var c            = $(cell);
	var a            = $('a', c).get (0);
	var checkbox     = $('input:checkbox', c).get (0);

	var table        = c.parents ('table').eq (0);
	var div          = table.parents ('div').eq (0);
	var offset       = div.offset ();
	var thead        = $('thead', table);
	var css          = c.offset ();

	css.width        = c.outerWidth ();

	var overlap      = css.left - offset.left - 1;
	if (overlap < 0) {
		css.left  -= overlap;
		css.width += overlap;
	}

	if (css.width < 1) return this.cell_off (cell);

	var cell_right   = css.left + css.width;
	var div_right    = offset.left + div.outerWidth () - 16;
	var overlap      = cell_right - div_right;
	if (overlap > 0) css.width -= overlap;

	if (css.width < 1) return this.cell_off (cell);

	css.height       = c.outerHeight ();
	css.cursor       = a == null ? 'default' : 'pointer';

	var me = this;

	$('#slider').click (

		checkbox != null ? function (event) {

			if (me.lastClick == event) return;

			me.lastClick = event;

			$('input:checkbox', tableSlider.get_cell ()).each ( function () {

				blockEvent (event);
				this.click ();
				this.focus ();

			})

		} :

		a != null ? function (event) {

			$('a', tableSlider.get_cell ()).each ( function () {

				a_click (this, event);

			})

		} :

		null

	)

	$('#slider').dblclick (function (event) {

		$(tableSlider.get_cell ()).dblclick ();

	})

	if (
		css.top < offset.top + thead.outerHeight ()
		|| css.top + css.height + ((div.scrollHeight > div.offsetHeight - 12) ? 16 : 0) > offset.top + div.outerHeight ()
	) return this.cell_off (cell);

	css.top        --;
	css.left       --;
	css.visibility = 'visible';

	css.width  -= 2;
	css.height -= 2;

	$('#slider_').css ({
		left   : css.left + css.width,
		top    : css.top  + css.height,
		'visibility': 'visible'
	});

	$('#slider').css (css);

	if (this.last_cell_id != cell) focus_on_first_input (cell);

	last_cell_id = cell;

	return cell;

}

function td_on_click (event) {

	event = get_event (event);

	var td = browser_is_msie ? event.srcElement : event.target;

	if (td.tagName != 'TD') return;


	var tr = td;

	while (tr && tr.tagName != 'TR') {
		tr = tr.parentNode;
	};

	tableSlider.col = -1;

	var i = td;

	while (i && i.tagName == 'TD') {
		i = i.previousSibling;
		tableSlider.col ++;
	};

	for (i = 0; i < tableSlider.cnt; i ++) {

		if (tableSlider.rows [i] != tr) continue;

		tableSlider.row = i;

		break;

	}

	var cell = tableSlider.get_cell ();

	tableSlider.cell_on (cell);

	if (tableSlider.last_cell_id != cell) focus_on_first_input (cell);

	tableSlider.last_cell_id = cell;

	return false;

}

TableSlider.prototype.handle_keyboard = function (keyCode) {

	if (scrollable_table_is_blocked || suggest_is_visible) return;

	if (keyCode == 13) {									// Enter key

		var cell = this.get_cell ();

		if (!cell) return;

		var children = cell.getElementsByTagName ('a');

		if (children == null || children.length == 0) {

			while (cell && cell.tagName != 'TR') cell = cell.parentNode;

			children = cell.getElementsByTagName ('a');

		}

		if (children != null && children.length > 0) activate_link (children [0].href, children [0].target);

		return false;

	}

	if (!this.cnt || keyCode < 37 || keyCode > 40) return;

	var cnt = this.cnt;
	var key = 'row';
	var i   = keyCode % 2;

	if (i) {
		if (left_right_blocked) return;
		var cnt = this.rows [this.row].cells.length;
		var key = 'col';
	}

	if (!cnt) return;

	this [key] += (keyCode - 39 + i);
	if (this [key] < 0) this [key]    = 0;
	if (this [key] >= cnt) this [key] = cnt - 1;

	this.scrollCellToVisibleTop ();

	return blockEvent ();

}

TableSlider.prototype.scrollCellToVisibleTop = function (force_top) {

	// hiding the slider

	this.cell_off ();

	// selecting elements

	var td = this.get_cell ();

	if (!td) return;

	var tr = td.parentNode;
	if (tr.tagName == 'A') tr = tr.parentNode;
	var table = tr.parentNode.parentNode;
	var thead = table.tHead;
	var div   = table.parentNode;

	// checking top border

	var delta = div.scrollTop - td.offsetTop + 2;
	if (thead) delta += thead.offsetHeight;
	if (delta > 0) div.scrollTop -= delta;

	// checking bottom border

	var delta = td.offsetTop - div.scrollTop;
	if (force_top) {
		if (thead) delta -= thead.offsetHeight;
		delta -= td.offsetHeight;
		delta += 8;
	}
	else {
		delta -= div.offsetHeight;
		delta += td.offsetHeight;
		if (div.scrollWidth > div.offsetWidth - 12) delta += 18;
	}
	if (delta > 0) div.scrollTop += delta;

	// checking left border

	var delta = div.scrollLeft - td.offsetLeft + 2;
	if (delta > 0) div.scrollLeft -= delta;

	// checking right border

	var delta = td.offsetLeft - div.scrollLeft;
	delta -= div.offsetWidth;
	delta += td.offsetWidth;
	if (div.scrollHeight > div.offsetHeight - 12) delta += 18;
	if (delta > 0) div.scrollLeft += delta;

	// showing the slider

	this.cell_on ();

}















/*  Copyright Mihai Bazon, 2002, 2003  |  http://dynarch.com/mishoo/
 * ------------------------------------------------------------------
 *
 * The DHTML Calendar, version 0.9.5 "Your favorite time, bis"
 *
 * Details and latest version at:
 * http://dynarch.com/mishoo/calendar.epl
 *
 * This script is distributed under the GNU Lesser General Public License.
 * Read the entire license text here: http://www.gnu.org/licenses/lgpl.html
 */

// $Id: calendar.js,v 1.22 2003/11/05 17:30:12 mishoo Exp $

/** The Calendar object constructor. */
Calendar = function (mondayFirst, dateStr, onSelected, onClose) {
	// member variables
	this.activeDiv = null;
	this.currentDateEl = null;
	this.getDateStatus = null;
	this.timeout = null;
	this.onSelected = onSelected || null;
	this.onClose = onClose || null;
	this.dragging = false;
	this.hidden = false;
	this.minYear = 1970;
	this.maxYear = 2050;
	this.dateFormat = Calendar._TT["DEF_DATE_FORMAT"];
	this.ttDateFormat = Calendar._TT["TT_DATE_FORMAT"];
	this.isPopup = true;
	this.weekNumbers = true;
	this.mondayFirst = mondayFirst;
	this.dateStr = dateStr;
	this.ar_days = null;
	this.showsTime = false;
	this.time24 = true;
	// HTML elements
	this.table = null;
	this.element = null;
	this.tbody = null;
	this.firstdayname = null;
	// Combo boxes
	this.monthsCombo = null;
	this.yearsCombo = null;
	this.hilitedMonth = null;
	this.activeMonth = null;
	this.hilitedYear = null;
	this.activeYear = null;
	// Information
	this.dateClicked = false;

	// one-time initializations
	if (typeof Calendar._SDN == "undefined") {
		// table of short day names
		if (typeof Calendar._SDN_len == "undefined")
			Calendar._SDN_len = 3;
		var ar = new Array();
		for (var i = 8; i > 0;) {
			ar[--i] = Calendar._DN[i].substr(0, Calendar._SDN_len);
		}
		Calendar._SDN = ar;
		// table of short month names
		if (typeof Calendar._SMN_len == "undefined")
			Calendar._SMN_len = 3;
		ar = new Array();
		for (var i = 12; i > 0;) {
			ar[--i] = Calendar._MN[i].substr(0, Calendar._SMN_len);
		}
		Calendar._SMN = ar;
	}
};

// ** constants

/// "static", needed for event handlers.
Calendar._C = null;

/// detect a special case of "web browser"
Calendar.is_ie = ( /msie/i.test(navigator.userAgent) &&
		   !/opera/i.test(navigator.userAgent) );

/// detect Opera browser
Calendar.is_opera = /opera/i.test(navigator.userAgent);

/// detect KHTML-based browsers
Calendar.is_khtml = /Konqueror|Safari|KHTML/i.test(navigator.userAgent);

// BEGIN: UTILITY FUNCTIONS; beware that these might be moved into a separate
//        library, at some point.

Calendar.getAbsolutePos = function(el) {
	var SL = 0, ST = 0;
	var is_div = /^div$/i.test(el.tagName);
	if (is_div && el.scrollLeft)
		SL = el.scrollLeft;
	if (is_div && el.scrollTop)
		ST = el.scrollTop;
	var r = { x: el.offsetLeft - SL, y: el.offsetTop - ST };
	if (el.offsetParent) {
		var tmp = Calendar.getAbsolutePos(el.offsetParent);
		r.x += tmp.x;
		r.y += tmp.y;
	}
	return r;
};

Calendar.isRelated = function (el, evt) {
	var related = evt.relatedTarget;
	if (!related) {
		var type = evt.type;
		if (type == "mouseover") {
			related = evt.fromElement;
		} else if (type == "mouseout") {
			related = evt.toElement;
		}
	}
	while (related) {
		if (related == el) {
			return true;
		}
		related = related.parentNode;
	}
	return false;
};

Calendar.removeClass = function(el, className) {
	if (!(el && el.className)) {
		return;
	}
	var cls = el.className.split(" ");
	var ar = new Array();
	for (var i = cls.length; i > 0;) {
		if (cls[--i] != className) {
			ar[ar.length] = cls[i];
		}
	}
	el.className = ar.join(" ");
};

Calendar.addClass = function(el, className) {
	Calendar.removeClass(el, className);
	el.className += " " + className;
};

Calendar.getElement = function(ev) {
	if (Calendar.is_ie) {
		return window.event.srcElement;
	} else {
		return ev.currentTarget;
	}
};

Calendar.getTargetElement = function(ev) {
	if (Calendar.is_ie) {
		return window.event.srcElement;
	} else {
		return ev.target;
	}
};

Calendar.stopEvent = function(ev) {
	ev || (ev = window.event);
	if (Calendar.is_ie) {
		ev.cancelBubble = true;
		ev.returnValue = false;
	} else {
		ev.preventDefault();
		ev.stopPropagation();
	}
	return false;
};

Calendar.addEvent = function(el, evname, func) {
	if (el.attachEvent) { // IE
		el.attachEvent("on" + evname, func);
	} else if (el.addEventListener) { // Gecko / W3C
		el.addEventListener(evname, func, true);
	} else {
		el["on" + evname] = func;
	}
};

Calendar.removeEvent = function(el, evname, func) {
	if (el.detachEvent) { // IE
		el.detachEvent("on" + evname, func);
	} else if (el.removeEventListener) { // Gecko / W3C
		el.removeEventListener(evname, func, true);
	} else {
		el["on" + evname] = null;
	}
};

Calendar.createElement = function(type, parent) {
	var el = null;
	if (document.createElementNS) {
		// use the XHTML namespace; IE won't normally get here unless
		// _they_ "fix" the DOM2 implementation.
		el = document.createElementNS("http://www.w3.org/1999/xhtml", type);
	} else {
		el = document.createElement(type);
	}
	if (typeof parent != "undefined") {
		parent.appendChild(el);
	}
	return el;
};

// END: UTILITY FUNCTIONS

// BEGIN: CALENDAR STATIC FUNCTIONS

/** Internal -- adds a set of events to make some element behave like a button. */
Calendar._add_evs = function(el) {
	with (Calendar) {
		addEvent(el, "mouseover", dayMouseOver);
		addEvent(el, "mousedown", dayMouseDown);
		addEvent(el, "mouseout", dayMouseOut);
		if (is_ie) {
			addEvent(el, "dblclick", dayMouseDblClick);
			el.setAttribute("unselectable", true);
		}
	}
};

Calendar.findMonth = function(el) {
	if (typeof el.month != "undefined") {
		return el;
	} else if (typeof el.parentNode.month != "undefined") {
		return el.parentNode;
	}
	return null;
};

Calendar.findYear = function(el) {
	if (typeof el.year != "undefined") {
		return el;
	} else if (typeof el.parentNode.year != "undefined") {
		return el.parentNode;
	}
	return null;
};

Calendar.showMonthsCombo = function () {
	var cal = Calendar._C;
	if (!cal) {
		return false;
	}
	var cal = cal;
	var cd = cal.activeDiv;
	var mc = cal.monthsCombo;
	if (cal.hilitedMonth) {
		Calendar.removeClass(cal.hilitedMonth, "hilite");
	}
	if (cal.activeMonth) {
		Calendar.removeClass(cal.activeMonth, "active");
	}
	var mon = cal.monthsCombo.getElementsByTagName("div")[cal.date.getMonth()];
	Calendar.addClass(mon, "active");
	cal.activeMonth = mon;
	var s = mc.style;
	s.display = "block";
	if (cd.navtype < 0)
		s.left = cd.offsetLeft + "px";
	else
		s.left = (cd.offsetLeft + cd.offsetWidth - mc.offsetWidth) + "px";
	s.top = (cd.offsetTop + cd.offsetHeight) + "px";
};

Calendar.showYearsCombo = function (fwd) {
	var cal = Calendar._C;
	if (!cal) {
		return false;
	}
	var cal = cal;
	var cd = cal.activeDiv;
	var yc = cal.yearsCombo;
	if (cal.hilitedYear) {
		Calendar.removeClass(cal.hilitedYear, "hilite");
	}
	if (cal.activeYear) {
		Calendar.removeClass(cal.activeYear, "active");
	}
	cal.activeYear = null;
	var Y = cal.date.getFullYear() + (fwd ? 1 : -1);
	var yr = yc.firstChild;
	var show = false;
	for (var i = 12; i > 0; --i) {
		if (Y >= cal.minYear && Y <= cal.maxYear) {
			yr.firstChild.data = Y;
			yr.year = Y;
			yr.style.display = "block";
			show = true;
		} else {
			yr.style.display = "none";
		}
		yr = yr.nextSibling;
		Y += fwd ? 2 : -2;
	}
	if (show) {
		var s = yc.style;
		s.display = "block";
		if (cd.navtype < 0)
			s.left = cd.offsetLeft + "px";
		else
			s.left = (cd.offsetLeft + cd.offsetWidth - yc.offsetWidth) + "px";
		s.top = (cd.offsetTop + cd.offsetHeight) + "px";
	}
};

// event handlers

Calendar.tableMouseUp = function(ev) {
	var cal = Calendar._C;
	if (!cal) {
		return false;
	}
	if (cal.timeout) {
		clearTimeout(cal.timeout);
	}
	var el = cal.activeDiv;
	if (!el) {
		return false;
	}
	var target = Calendar.getTargetElement(ev);
	ev || (ev = window.event);
	Calendar.removeClass(el, "active");
	if (target == el || target.parentNode == el) {
		Calendar.cellClick(el, ev);
	}
	var mon = Calendar.findMonth(target);
	var date = null;
	if (mon) {
		date = new Date(cal.date);
		if (mon.month != date.getMonth()) {
			date.setMonth(mon.month);
			cal.setDate(date);
			cal.dateClicked = false;
			cal.callHandler();
		}
	} else {
		var year = Calendar.findYear(target);
		if (year) {
			date = new Date(cal.date);
			if (year.year != date.getFullYear()) {
				date.setFullYear(year.year);
				cal.setDate(date);
				cal.dateClicked = false;
				cal.callHandler();
			}
		}
	}
	with (Calendar) {
		removeEvent(document, "mouseup", tableMouseUp);
		removeEvent(document, "mouseover", tableMouseOver);
		removeEvent(document, "mousemove", tableMouseOver);
		cal._hideCombos();
		_C = null;
		return stopEvent(ev);
	}
};

Calendar.tableMouseOver = function (ev) {
	var cal = Calendar._C;
	if (!cal) {
		return;
	}
	var el = cal.activeDiv;
	var target = Calendar.getTargetElement(ev);
	if (target == el || target.parentNode == el) {
		Calendar.addClass(el, "hilite active");
		Calendar.addClass(el.parentNode, "rowhilite");
	} else {
		if (typeof el.navtype == "undefined" || (el.navtype != 50 && (el.navtype == 0 || Math.abs(el.navtype) > 2)))
			Calendar.removeClass(el, "active");
		Calendar.removeClass(el, "hilite");
		Calendar.removeClass(el.parentNode, "rowhilite");
	}
	ev || (ev = window.event);
	if (el.navtype == 50 && target != el) {
		var pos = Calendar.getAbsolutePos(el);
		var w = el.offsetWidth;
		var x = ev.clientX;
		var dx;
		var decrease = true;
		if (x > pos.x + w) {
			dx = x - pos.x - w;
			decrease = false;
		} else
			dx = pos.x - x;

		if (dx < 0) dx = 0;
		var range = el._range;
		var current = el._current;
		var count = Math.floor(dx / 10) % range.length;
		for (var i = range.length; --i >= 0;)
			if (range[i] == current)
				break;
		while (count-- > 0)
			if (decrease) {
				if (!(--i in range))
					i = range.length - 1;
			} else if (!(++i in range))
				i = 0;
		var newval = range[i];
		el.firstChild.data = newval;

		cal.onUpdateTime();
	}
	var mon = Calendar.findMonth(target);
	if (mon) {
		if (mon.month != cal.date.getMonth()) {
			if (cal.hilitedMonth) {
				Calendar.removeClass(cal.hilitedMonth, "hilite");
			}
			Calendar.addClass(mon, "hilite");
			cal.hilitedMonth = mon;
		} else if (cal.hilitedMonth) {
			Calendar.removeClass(cal.hilitedMonth, "hilite");
		}
	} else {
		if (cal.hilitedMonth) {
			Calendar.removeClass(cal.hilitedMonth, "hilite");
		}
		var year = Calendar.findYear(target);
		if (year) {
			if (year.year != cal.date.getFullYear()) {
				if (cal.hilitedYear) {
					Calendar.removeClass(cal.hilitedYear, "hilite");
				}
				Calendar.addClass(year, "hilite");
				cal.hilitedYear = year;
			} else if (cal.hilitedYear) {
				Calendar.removeClass(cal.hilitedYear, "hilite");
			}
		} else if (cal.hilitedYear) {
			Calendar.removeClass(cal.hilitedYear, "hilite");
		}
	}
	return Calendar.stopEvent(ev);
};

Calendar.tableMouseDown = function (ev) {
	if (Calendar.getTargetElement(ev) == Calendar.getElement(ev)) {
		return Calendar.stopEvent(ev);
	}
};

Calendar.calDragIt = function (ev) {
	var cal = Calendar._C;
	if (!(cal && cal.dragging)) {
		return false;
	}
	var posX;
	var posY;
	if (Calendar.is_ie) {
		posY = window.event.clientY + document.body.scrollTop;
		posX = window.event.clientX + document.body.scrollLeft;
	} else {
		posX = ev.pageX;
		posY = ev.pageY;
	}
	cal.hideShowCovered();
	var st = cal.element.style;
	st.left = (posX - cal.xOffs) + "px";
	st.top = (posY - cal.yOffs) + "px";
	return Calendar.stopEvent(ev);
};

Calendar.calDragEnd = function (ev) {
	var cal = Calendar._C;
	if (!cal) {
		return false;
	}
	cal.dragging = false;
	with (Calendar) {
		removeEvent(document, "mousemove", calDragIt);
		removeEvent(document, "mouseover", stopEvent);
		removeEvent(document, "mouseup", calDragEnd);
		tableMouseUp(ev);
	}
	cal.hideShowCovered();
};

Calendar.dayMouseDown = function(ev) {
	var el = Calendar.getElement(ev);
	if (el.disabled) {
		return false;
	}
	var cal = el.calendar;
	cal.activeDiv = el;
	Calendar._C = cal;
	if (el.navtype != 300) with (Calendar) {
		if (el.navtype == 50)
			el._current = el.firstChild.data;
		addClass(el, "hilite active");
		addEvent(document, "mouseover", tableMouseOver);
		addEvent(document, "mousemove", tableMouseOver);
		addEvent(document, "mouseup", tableMouseUp);
	} else if (cal.isPopup) {
		cal._dragStart(ev);
	}
	if (el.navtype == -1 || el.navtype == 1) {
		if (cal.timeout) clearTimeout(cal.timeout);
		cal.timeout = setTimeout("Calendar.showMonthsCombo()", 250);
	} else if (el.navtype == -2 || el.navtype == 2) {
		if (cal.timeout) clearTimeout(cal.timeout);
		cal.timeout = setTimeout((el.navtype > 0) ? "Calendar.showYearsCombo(true)" : "Calendar.showYearsCombo(false)", 250);
	} else {
		cal.timeout = null;
	}
	return Calendar.stopEvent(ev);
};

Calendar.dayMouseDblClick = function(ev) {
	Calendar.cellClick(Calendar.getElement(ev), ev || window.event);
	if (Calendar.is_ie) {
		document.selection.empty();
	}
};

Calendar.dayMouseOver = function(ev) {
	var el = Calendar.getElement(ev);
	if (Calendar.isRelated(el, ev) || Calendar._C || el.disabled) {
		return false;
	}
	if (el.ttip) {
		if (el.ttip.substr(0, 1) == "_") {
			var date = null;
			with (el.calendar.date) {
				date = new Date(getFullYear(), getMonth(), el.caldate);
			}
			el.ttip = date.print(el.calendar.ttDateFormat) + el.ttip.substr(1);
		}
		el.calendar.tooltips.firstChild.data = el.ttip;
	}
	if (el.navtype != 300) {
		Calendar.addClass(el, "hilite");
		if (el.caldate) {
			Calendar.addClass(el.parentNode, "rowhilite");
		}
	}
	return Calendar.stopEvent(ev);
};

Calendar.dayMouseOut = function(ev) {
	with (Calendar) {
		var el = getElement(ev);
		if (isRelated(el, ev) || _C || el.disabled) {
			return false;
		}
		removeClass(el, "hilite");
		if (el.caldate) {
			removeClass(el.parentNode, "rowhilite");
		}
		el.calendar.tooltips.firstChild.data = _TT["SEL_DATE"];
		return stopEvent(ev);
	}
};

/**
 *  A generic "click" handler :) handles all types of buttons defined in this
 *  calendar.
 */
Calendar.cellClick = function(el, ev) {
	var cal = el.calendar;
	var closing = false;
	var newdate = false;
	var date = null;
	if (typeof el.navtype == "undefined") {
		Calendar.removeClass(cal.currentDateEl, "selected");
		Calendar.addClass(el, "selected");
		closing = (cal.currentDateEl == el);
		if (!closing) {
			cal.currentDateEl = el;
		}
		cal.date.setDate(el.caldate);
		date = cal.date;
		newdate = true;
		// a date was clicked
		cal.dateClicked = true;
	} else {
		if (el.navtype == 200) {
			Calendar.removeClass(el, "hilite");
			cal.callCloseHandler();
			return;
		}
		date = (el.navtype == 0) ? new Date() : new Date(cal.date);
		// unless "today" was clicked, we assume no date was clicked so
		// the selected handler will know not to close the calenar when
		// in single-click mode.
		// cal.dateClicked = (el.navtype == 0);
		cal.dateClicked = false;
		var year = date.getFullYear();
		var mon = date.getMonth();
		function setMonth(m) {
			var day = date.getDate();
			var max = date.getMonthDays(m);
			if (day > max) {
				date.setDate(max);
			}
			date.setMonth(m);
		};
		switch (el.navtype) {
		    case 400:
/*
			Calendar.removeClass(el, "hilite");
			var text = Calendar._TT["ABOUT"];
			if (typeof text != "undefined") {
				text += cal.showsTime ? Calendar._TT["ABOUT_TIME"] : "";
			} else {
				// FIXME: this should be removed as soon as lang files get updated!
				text = "Help and about box text is not translated into this language.\n" +
					"If you know this language and you feel generous please update\n" +
					"the corresponding file in \"lang\" subdir to match calendar-en.js\n" +
					"and send it back to <mishoo@infoiasi.ro> to get it into the distribution  ;-)\n\n" +
					"Thank you!\n" +
					"http://dynarch.com/mishoo/calendar.epl\n";
			}
			alert(text);
*/
			return;
		    case -2:
			if (year > cal.minYear) {
				date.setFullYear(year - 1);
			}
			break;
		    case -1:
			if (mon > 0) {
				setMonth(mon - 1);
			} else if (year-- > cal.minYear) {
				date.setFullYear(year);
				setMonth(11);
			}
			break;
		    case 1:
			if (mon < 11) {
				setMonth(mon + 1);
			} else if (year < cal.maxYear) {
				date.setFullYear(year + 1);
				setMonth(0);
			}
			break;
		    case 2:
			if (year < cal.maxYear) {
				date.setFullYear(year + 1);
			}
			break;
		    case 100:
			cal.setMondayFirst(!cal.mondayFirst);
			return;
		    case 50:
			var range = el._range;
			var current = el.firstChild.data;
			for (var i = range.length; --i >= 0;)
				if (range[i] == current)
					break;
			if (ev && ev.shiftKey) {
				if (!(--i in range))
					i = range.length - 1;
			} else if (!(++i in range))
				i = 0;
			var newval = range[i];
			el.firstChild.data = newval;
			cal.onUpdateTime();
			return;
		    case 0:
			// TODAY will bring us here
			if ((typeof cal.getDateStatus == "function") && cal.getDateStatus(date, date.getFullYear(), date.getMonth(), date.getDate())) {
				// remember, "date" was previously set to new
				// Date() if TODAY was clicked; thus, it
				// contains today date.
				return false;
			}
			break;
		}
		if (!date.equalsTo(cal.date)) {
			cal.setDate(date);
			newdate = true;
		}
	}
	if (newdate) {
		cal.callHandler();
	}
	if (closing) {
		Calendar.removeClass(el, "hilite");
		cal.callCloseHandler();
	}
};

// END: CALENDAR STATIC FUNCTIONS

// BEGIN: CALENDAR OBJECT FUNCTIONS

/**
 *  This function creates the calendar inside the given parent.  If _par is
 *  null than it creates a popup calendar inside the BODY element.  If _par is
 *  an element, be it BODY, then it creates a non-popup calendar (still
 *  hidden).  Some properties need to be set before calling this function.
 */
Calendar.prototype.create = function (_par) {
	var parent = null;
	if (! _par) {
		// default parent is the document body, in which case we create
		// a popup calendar.
		parent = document.getElementsByTagName("body")[0];
		this.isPopup = true;
	} else {
		parent = _par;
		this.isPopup = false;
	}
	this.date = this.dateStr ? new Date(this.dateStr) : new Date();

	var table = Calendar.createElement("table");
	this.table = table;
	table.cellSpacing = 0;
	table.cellPadding = 0;
	table.calendar = this;
	Calendar.addEvent(table, "mousedown", Calendar.tableMouseDown);

	var div = Calendar.createElement("div");
	this.element = div;
	div.className = "calendar";
	if (this.isPopup) {
		div.style.position = "absolute";
		div.style.display = "none";
	}
	div.appendChild(table);

	var thead = Calendar.createElement("thead", table);
	var cell = null;
	var row = null;

	var cal = this;
	var hh = function (text, cs, navtype) {
		cell = Calendar.createElement("td", row);
		cell.colSpan = cs;
		cell.className = "button";
		if (navtype != 0 && Math.abs(navtype) <= 2)
			cell.className += " nav";
		Calendar._add_evs(cell);
		cell.calendar = cal;
		cell.navtype = navtype;
		if (text.substr(0, 1) != "&") {
			cell.appendChild(document.createTextNode(text));
		}
		else {
			// FIXME: dirty hack for entities
			cell.innerHTML = text;
		}
		return cell;
	};

	row = Calendar.createElement("tr", thead);
	var title_length = 6;
	(this.isPopup) && --title_length;
	(this.weekNumbers) && ++title_length;

	hh("?", 1, 400).ttip = Calendar._TT["INFO"];
	this.title = hh("", title_length, 300);
	this.title.className = "title";
	if (this.isPopup) {
		this.title.ttip = Calendar._TT["DRAG_TO_MOVE"];
		this.title.style.cursor = "move";
		hh("&#x00d7;", 1, 200).ttip = Calendar._TT["CLOSE"];
	}

	row = Calendar.createElement("tr", thead);
	row.className = "headrow";

	this._nav_py = hh("&#x00ab;", 1, -2);
	this._nav_py.ttip = Calendar._TT["PREV_YEAR"];

	this._nav_pm = hh("&#x2039;", 1, -1);
	this._nav_pm.ttip = Calendar._TT["PREV_MONTH"];

	this._nav_now = hh(Calendar._TT["TODAY"], this.weekNumbers ? 4 : 3, 0);
	this._nav_now.ttip = Calendar._TT["GO_TODAY"];

	this._nav_nm = hh("&#x203a;", 1, 1);
	this._nav_nm.ttip = Calendar._TT["NEXT_MONTH"];

	this._nav_ny = hh("&#x00bb;", 1, 2);
	this._nav_ny.ttip = Calendar._TT["NEXT_YEAR"];

	// day names
	row = Calendar.createElement("tr", thead);
	row.className = "daynames";
	if (this.weekNumbers) {
		cell = Calendar.createElement("td", row);
		cell.className = "name wn";
		cell.appendChild(document.createTextNode(Calendar._TT["WK"]));
	}
	for (var i = 7; i > 0; --i) {
		cell = Calendar.createElement("td", row);
		cell.appendChild(document.createTextNode(""));
		if (!i) {
			cell.navtype = 100;
			cell.calendar = this;
			Calendar._add_evs(cell);
		}
	}
	this.firstdayname = (this.weekNumbers) ? row.firstChild.nextSibling : row.firstChild;
	this._displayWeekdays();

	var tbody = Calendar.createElement("tbody", table);
	this.tbody = tbody;

	for (i = 6; i > 0; --i) {
		row = Calendar.createElement("tr", tbody);
		if (this.weekNumbers) {
			cell = Calendar.createElement("td", row);
			cell.appendChild(document.createTextNode(""));
		}
		for (var j = 7; j > 0; --j) {
			cell = Calendar.createElement("td", row);
			cell.appendChild(document.createTextNode(""));
			cell.calendar = this;
			Calendar._add_evs(cell);
		}
	}

	if (this.showsTime) {
		row = Calendar.createElement("tr", tbody);
		row.className = "time";

		cell = Calendar.createElement("td", row);
		cell.className = "time";
		cell.colSpan = 2;
		cell.innerHTML = "&nbsp;";

		cell = Calendar.createElement("td", row);
		cell.className = "time";
		cell.colSpan = this.weekNumbers ? 4 : 3;

		(function(){
			function makeTimePart(className, init, range_start, range_end) {
				var part = Calendar.createElement("span", cell);
				part.className = className;
				part.appendChild(document.createTextNode(init));
				part.calendar = cal;
				part.ttip = Calendar._TT["TIME_PART"];
				part.navtype = 50;
				part._range = [];
				if (typeof range_start != "number")
					part._range = range_start;
				else {
					for (var i = range_start; i <= range_end; ++i) {
						var txt;
						if (i < 10 && range_end >= 10) txt = '0' + i;
						else txt = '' + i;
						part._range[part._range.length] = txt;
					}
				}
				Calendar._add_evs(part);
				return part;
			};
			var hrs = cal.date.getHours();
			var mins = cal.date.getMinutes();
			var t12 = !cal.time24;
			var pm = (hrs > 12);
			if (t12 && pm) hrs -= 12;
			var H = makeTimePart("hour", hrs, t12 ? 1 : 0, t12 ? 12 : 23);
			var span = Calendar.createElement("span", cell);
			span.appendChild(document.createTextNode(":"));
			span.className = "colon";
			var M = makeTimePart("minute", mins, 0, 59);
			var AP = null;
			cell = Calendar.createElement("td", row);
			cell.className = "time";
			cell.colSpan = 2;
			if (t12)
				AP = makeTimePart("ampm", pm ? "pm" : "am", ["am", "pm"]);
			else
				cell.innerHTML = "&nbsp;";

			cal.onSetTime = function() {
				var hrs = this.date.getHours();
				var mins = this.date.getMinutes();
				var pm = (hrs > 12);
				if (pm && t12) hrs -= 12;
				H.firstChild.data = (hrs < 10) ? ("0" + hrs) : hrs;
				M.firstChild.data = (mins < 10) ? ("0" + mins) : mins;
				if (t12)
					AP.firstChild.data = pm ? "pm" : "am";
			};

			cal.onUpdateTime = function() {
				var date = this.date;
				var h = parseInt(H.firstChild.data, 10);
				if (t12) {
					if (/pm/i.test(AP.firstChild.data) && h < 12)
						h += 12;
					else if (/am/i.test(AP.firstChild.data) && h == 12)
						h = 0;
				}
				var d = date.getDate();
				var m = date.getMonth();
				var y = date.getFullYear();
				date.setHours(h);
				date.setMinutes(parseInt(M.firstChild.data, 10));
				date.setFullYear(y);
				date.setMonth(m);
				date.setDate(d);
				this.dateClicked = false;
				this.callHandler();
			};
		})();
	} else {
		this.onSetTime = this.onUpdateTime = function() {};
	}

	var tfoot = Calendar.createElement("tfoot", table);

	row = Calendar.createElement("tr", tfoot);
	row.className = "footrow";

	cell = hh(Calendar._TT["SEL_DATE"], this.weekNumbers ? 8 : 7, 300);
	cell.className = "ttip";
	if (this.isPopup) {
		cell.ttip = Calendar._TT["DRAG_TO_MOVE"];
		cell.style.cursor = "move";
	}
	this.tooltips = cell;

	div = Calendar.createElement("div", this.element);
	this.monthsCombo = div;
	div.className = "combo";
	for (i = 0; i < Calendar._MN.length; ++i) {
		var mn = Calendar.createElement("div");
		mn.className = Calendar.is_ie ? "label-IEfix" : "label";
		mn.month = i;
		mn.appendChild(document.createTextNode(Calendar._SMN[i]));
		div.appendChild(mn);
	}

	div = Calendar.createElement("div", this.element);
	this.yearsCombo = div;
	div.className = "combo";
	for (i = 12; i > 0; --i) {
		var yr = Calendar.createElement("div");
		yr.className = Calendar.is_ie ? "label-IEfix" : "label";
		yr.appendChild(document.createTextNode(""));
		div.appendChild(yr);
	}

	this._init(this.mondayFirst, this.date);
	parent.appendChild(this.element);
};

/** keyboard navigation, only for popup calendars */
Calendar._keyEvent = function(ev) {
	if (!window.calendar) {
		return false;
	}
	(Calendar.is_ie) && (ev = window.event);
	var cal = window.calendar;
	var act = (Calendar.is_ie || ev.type == "keypress");
	if (ev.ctrlKey) {
		switch (ev.keyCode) {
		    case 37: // KEY left
			act && Calendar.cellClick(cal._nav_pm);
			break;
		    case 38: // KEY up
			act && Calendar.cellClick(cal._nav_py);
			break;
		    case 39: // KEY right
			act && Calendar.cellClick(cal._nav_nm);
			break;
		    case 40: // KEY down
			act && Calendar.cellClick(cal._nav_ny);
			break;
		    default:
			return false;
		}
	} else switch (ev.keyCode) {
	    case 32: // KEY space (now)
		Calendar.cellClick(cal._nav_now);
		break;
	    case 27: // KEY esc
		act && cal.hide();
		break;
	    case 37: // KEY left
	    case 38: // KEY up
	    case 39: // KEY right
	    case 40: // KEY down
		if (act) {
			var date = cal.date.getDate() - 1;
			var el = cal.currentDateEl;
			var ne = null;
			var prev = (ev.keyCode == 37) || (ev.keyCode == 38);
			switch (ev.keyCode) {
			    case 37: // KEY left
				(--date >= 0) && (ne = cal.ar_days[date]);
				break;
			    case 38: // KEY up
				date -= 7;
				(date >= 0) && (ne = cal.ar_days[date]);
				break;
			    case 39: // KEY right
				(++date < cal.ar_days.length) && (ne = cal.ar_days[date]);
				break;
			    case 40: // KEY down
				date += 7;
				(date < cal.ar_days.length) && (ne = cal.ar_days[date]);
				break;
			}
			if (!ne) {
				if (prev) {
					Calendar.cellClick(cal._nav_pm);
				} else {
					Calendar.cellClick(cal._nav_nm);
				}
				date = (prev) ? cal.date.getMonthDays() : 1;
				el = cal.currentDateEl;
				ne = cal.ar_days[date - 1];
			}
			Calendar.removeClass(el, "selected");
			Calendar.addClass(ne, "selected");
			cal.date.setDate(ne.caldate);
			cal.callHandler();
			cal.currentDateEl = ne;
		}
		break;
	    case 13: // KEY enter
		if (act) {
			cal.callHandler();
			cal.hide();
		}
		break;
	    default:
		return false;
	}
	return Calendar.stopEvent(ev);
};

/**
 *  (RE)Initializes the calendar to the given date and style (if mondayFirst is
 *  true it makes Monday the first day of week, otherwise the weeks start on
 *  Sunday.
 */
Calendar.prototype._init = function (mondayFirst, date) {
	var today = new Date();
	var year = date.getFullYear();
	if (year < this.minYear) {
		year = this.minYear;
		date.setFullYear(year);
	} else if (year > this.maxYear) {
		year = this.maxYear;
		date.setFullYear(year);
	}
	this.mondayFirst = mondayFirst;
	this.date = new Date(date);
	var month = date.getMonth();
	var mday = date.getDate();
	var no_days = date.getMonthDays();
	date.setDate(1);
	var wday = date.getDay();
	var MON = mondayFirst ? 1 : 0;
	var SAT = mondayFirst ? 5 : 6;
	var SUN = mondayFirst ? 6 : 0;
	if (mondayFirst) {
		wday = (wday > 0) ? (wday - 1) : 6;
	}
	var iday = 1;
	var row = this.tbody.firstChild;
	var MN = Calendar._SMN[month];
	var hasToday = ((today.getFullYear() == year) && (today.getMonth() == month));
	var todayDate = today.getDate();
	var week_number = date.getWeekNumber();
	var ar_days = new Array();
	for (var i = 0; i < 6; ++i) {
		if (iday > no_days) {
			row.className = "emptyrow";
			row = row.nextSibling;
			continue;
		}
		var cell = row.firstChild;
		if (this.weekNumbers) {
			cell.className = "day wn";
			cell.firstChild.data = week_number;
			cell = cell.nextSibling;
		}
		++week_number;
		row.className = "daysrow";
		for (var j = 0; j < 7; ++j) {
			cell.className = "day";
			if ((!i && j < wday) || iday > no_days) {
				// cell.className = "emptycell";
				cell.innerHTML = "&nbsp;";
				cell.disabled = true;
				cell = cell.nextSibling;
				continue;
			}
			cell.disabled = false;
			cell.firstChild.data = iday;
			if (typeof this.getDateStatus == "function") {
				date.setDate(iday);
				var status = this.getDateStatus(date, year, month, iday);
				if (status === true) {
					cell.className += " disabled";
					cell.disabled = true;
				} else {
					if (/disabled/i.test(status))
						cell.disabled = true;
					cell.className += " " + status;
				}
			}
			if (!cell.disabled) {
				ar_days[ar_days.length] = cell;
				cell.caldate = iday;
				cell.ttip = "_";
				if (iday == mday) {
					cell.className += " selected";
					this.currentDateEl = cell;
				}
				if (hasToday && (iday == todayDate)) {
					cell.className += " today";
					cell.ttip += Calendar._TT["PART_TODAY"];
				}
				if (wday == SAT || wday == SUN) {
					cell.className += " weekend";
				}
			}
			++iday;
			((++wday) ^ 7) || (wday = 0);
			cell = cell.nextSibling;
		}
		row = row.nextSibling;
	}
	this.ar_days = ar_days;
	this.title.firstChild.data = Calendar._MN[month] + ", " + year;
	this.onSetTime();
	// PROFILE
	// this.tooltips.firstChild.data = "Generated in " + ((new Date()) - today) + " ms";
};

/**
 *  Calls _init function above for going to a certain date (but only if the
 *  date is different than the currently selected one).
 */
Calendar.prototype.setDate = function (date) {
	if (!date.equalsTo(this.date)) {
		this._init(this.mondayFirst, date);
	}
};

/**
 *  Refreshes the calendar.  Useful if the "disabledHandler" function is
 *  dynamic, meaning that the list of disabled date can change at runtime.
 *  Just * call this function if you think that the list of disabled dates
 *  should * change.
 */
Calendar.prototype.refresh = function () {
	this._init(this.mondayFirst, this.date);
};

/** Modifies the "mondayFirst" parameter (EU/US style). */
Calendar.prototype.setMondayFirst = function (mondayFirst) {
	this._init(mondayFirst, this.date);
	this._displayWeekdays();
};

/**
 *  Allows customization of what dates are enabled.  The "unaryFunction"
 *  parameter must be a function object that receives the date (as a JS Date
 *  object) and returns a boolean value.  If the returned value is true then
 *  the passed date will be marked as disabled.
 */
Calendar.prototype.setDateStatusHandler = Calendar.prototype.setDisabledHandler = function (unaryFunction) {
	this.getDateStatus = unaryFunction;
};

/** Customization of allowed year range for the calendar. */
Calendar.prototype.setRange = function (a, z) {
	this.minYear = a;
	this.maxYear = z;
};

/** Calls the first user handler (selectedHandler). */
Calendar.prototype.callHandler = function () {
	if (this.onSelected) {
		this.onSelected(this, this.date.print(this.dateFormat));
	}
};

/** Calls the second user handler (closeHandler). */
Calendar.prototype.callCloseHandler = function () {
	if (this.onClose) {
		this.onClose(this);
	}
	this.hideShowCovered();
};

/** Removes the calendar object from the DOM tree and destroys it. */
Calendar.prototype.destroy = function () {
	var el = this.element.parentNode;
	el.removeChild(this.element);
	Calendar._C = null;
	window.calendar = null;
};

/**
 *  Moves the calendar element to a different section in the DOM tree (changes
 *  its parent).
 */
Calendar.prototype.reparent = function (new_parent) {
	var el = this.element;
	el.parentNode.removeChild(el);
	new_parent.appendChild(el);
};

// This gets called when the user presses a mouse button anywhere in the
// document, if the calendar is shown.  If the click was outside the open
// calendar this function closes it.
Calendar._checkCalendar = function(ev) {
	if (!window.calendar) {
		return false;
	}
	var el = Calendar.is_ie ? Calendar.getElement(ev) : Calendar.getTargetElement(ev);
	for (; el != null && el != calendar.element; el = el.parentNode);
	if (el == null) {
		// calls closeHandler which should hide the calendar.
		window.calendar.callCloseHandler();
		return Calendar.stopEvent(ev);
	}
};

/** Shows the calendar. */
Calendar.prototype.show = function () {
	var rows = this.table.getElementsByTagName("tr");
	for (var i = rows.length; i > 0;) {
		var row = rows[--i];
		Calendar.removeClass(row, "rowhilite");
		var cells = row.getElementsByTagName("td");
		for (var j = cells.length; j > 0;) {
			var cell = cells[--j];
			Calendar.removeClass(cell, "hilite");
			Calendar.removeClass(cell, "active");
		}
	}
	this.element.style.display = "block";
	this.hidden = false;
	if (this.isPopup) {
		window.calendar = this;
		Calendar.addEvent(document, "keydown", Calendar._keyEvent);
		Calendar.addEvent(document, "keypress", Calendar._keyEvent);
		Calendar.addEvent(document, "mousedown", Calendar._checkCalendar);
	}
	this.hideShowCovered();
};

/**
 *  Hides the calendar.  Also removes any "hilite" from the class of any TD
 *  element.
 */
Calendar.prototype.hide = function () {
	if (this.isPopup) {
		Calendar.removeEvent(document, "keydown", Calendar._keyEvent);
		Calendar.removeEvent(document, "keypress", Calendar._keyEvent);
		Calendar.removeEvent(document, "mousedown", Calendar._checkCalendar);
	}
	this.element.style.display = "none";
	this.hidden = true;
	this.hideShowCovered();
};

/**
 *  Shows the calendar at a given absolute position (beware that, depending on
 *  the calendar element style -- position property -- this might be relative
 *  to the parent's containing rectangle).
 */
Calendar.prototype.showAt = function (x, y) {
	var s = this.element.style;
	var calendarWidth = 228;
	var gap = x + calendarWidth - window.parent.document.body.offsetWidth;
	if (gap > 0) x -= gap;
	s.left = x + "px";
	s.top = y + "px";
	this.show();
};

/** Shows the calendar near a given element. */
Calendar.prototype.showAtElement = function (el, opts) {
	var self = this;
	var p = Calendar.getAbsolutePos(el);
	if (!opts || typeof opts != "string") {
		this.showAt(p.x, p.y + el.offsetHeight);
		return true;
	}
	this.element.style.display = "block";
	Calendar.continuation_for_the_fucking_khtml_browser = function() {
		var w = self.element.offsetWidth;
		var h = self.element.offsetHeight;
		self.element.style.display = "none";
		var valign = opts.substr(0, 1);
		var halign = "l";
		if (opts.length > 1) {
			halign = opts.substr(1, 1);
		}
		// vertical alignment
		switch (valign) {
		    case "T": p.y -= h; break;
		    case "B": p.y += el.offsetHeight; break;
		    case "C": p.y += (el.offsetHeight - h) / 2; break;
		    case "t": p.y += el.offsetHeight - h; break;
		    case "b": break; // already there
		}
		// horizontal alignment
		switch (halign) {
		    case "L": p.x -= w; break;
		    case "R": p.x += el.offsetWidth; break;
		    case "C": p.x += (el.offsetWidth - w) / 2; break;
		    case "r": p.x += el.offsetWidth - w; break;
		    case "l": break; // already there
		}
		self.showAt(p.x, p.y);
	};
	if (Calendar.is_khtml)
		setTimeout("Calendar.continuation_for_the_fucking_khtml_browser()", 10);
	else
		Calendar.continuation_for_the_fucking_khtml_browser();
};

/** Customizes the date format. */
Calendar.prototype.setDateFormat = function (str) {
	this.dateFormat = str;
};

/** Customizes the tooltip date format. */
Calendar.prototype.setTtDateFormat = function (str) {
	this.ttDateFormat = str;
};

/**
 *  Tries to identify the date represented in a string.  If successful it also
 *  calls this.setDate which moves the calendar to the given date.
 */
Calendar.prototype.parseDate = function (str, fmt) {
	var y = 0;
	var m = -1;
	var d = 0;
	var a = str.split(/\W+/);
	if (!fmt) {
		fmt = this.dateFormat;
	}
	var b = [];
	fmt.replace(/(%.)/g, function(str, par) {
		return b[b.length] = par;
	});
	var i = 0, j = 0;
	var hr = 0;
	var min = 0;
	for (i = 0; i < a.length; ++i) {
		if (b[i] == "%a" || b[i] == "%A") {
			continue;
		}
		if (b[i] == "%d" || b[i] == "%e") {
			d = parseInt(a[i], 10);
		}
		if (b[i] == "%m") {
			m = parseInt(a[i], 10) - 1;
		}
		if (b[i] == "%Y" || b[i] == "%y") {
			y = parseInt(a[i], 10);
			(y < 100) && (y += (y > 29) ? 1900 : 2000);
		}
		if (b[i] == "%b" || b[i] == "%B") {
			for (j = 0; j < 12; ++j) {
				if (Calendar._MN[j].substr(0, a[i].length).toLowerCase() == a[i].toLowerCase()) { m = j; break; }
			}
		} else if (/%[HIkl]/.test(b[i])) {
			hr = parseInt(a[i], 10);
		} else if (/%[pP]/.test(b[i])) {
			if (/pm/i.test(a[i]) && hr < 12)
				hr += 12;
		} else if (b[i] == "%M") {
			min = parseInt(a[i], 10);
		}
	}
	if (y != 0 && m != -1 && d != 0) {
		this.setDate(new Date(y, m, d, hr, min, 0));
		return;
	}
	y = 0; m = -1; d = 0;
	for (i = 0; i < a.length; ++i) {
		if (a[i].search(/[a-zA-Z]+/) != -1) {
			var t = -1;
			for (j = 0; j < 12; ++j) {
				if (Calendar._MN[j].substr(0, a[i].length).toLowerCase() == a[i].toLowerCase()) { t = j; break; }
			}
			if (t != -1) {
				if (m != -1) {
					d = m+1;
				}
				m = t;
			}
		} else if (parseInt(a[i], 10) <= 12 && m == -1) {
			m = a[i]-1;
		} else if (parseInt(a[i], 10) > 31 && y == 0) {
			y = parseInt(a[i], 10);
			(y < 100) && (y += (y > 29) ? 1900 : 2000);
		} else if (d == 0) {
			d = a[i];
		}
	}
	if (y == 0) {
		var today = new Date();
		y = today.getFullYear();
	}
	if (m != -1 && d != 0) {
		this.setDate(new Date(y, m, d, hr, min, 0));
	}
};

Calendar.prototype.hideShowCovered = function () {
	var self = this;
	Calendar.continuation_for_the_fucking_khtml_browser = function() {
		function getVisib(obj){
			var value = obj.style.visibility;
			if (!value) {
				if (document.defaultView && typeof (document.defaultView.getComputedStyle) == "function") { // Gecko, W3C
					value = document.defaultView.
						getComputedStyle(obj, "").getPropertyValue("visibility");
				} else if (obj.currentStyle) { // IE
					value = obj.currentStyle.visibility;
				} else
					value = '';
			}
			return value;
		};

		var tags = new Array("applet", "iframe", "select");
		var el = self.element;

		var p = Calendar.getAbsolutePos(el);
		var EX1 = p.x;
		var EX2 = el.offsetWidth + EX1;
		var EY1 = p.y;
		var EY2 = el.offsetHeight + EY1;

		for (var k = tags.length; k > 0; ) {
			var ar = document.getElementsByTagName(tags[--k]);
			var cc = null;

			for (var i = ar.length; i > 0;) {
				cc = ar[--i];

				p = Calendar.getAbsolutePos(cc);
				var CX1 = p.x;
				var CX2 = cc.offsetWidth + CX1;
				var CY1 = p.y;
				var CY2 = cc.offsetHeight + CY1;

				if (self.hidden || (CX1 > EX2) || (CX2 < EX1) || (CY1 > EY2) || (CY2 < EY1)) {
					if (!cc.__msh_save_visibility) {
						cc.__msh_save_visibility = getVisib(cc);
					}
					cc.style.visibility = cc.__msh_save_visibility;
				} else {
					if (!cc.__msh_save_visibility) {
						cc.__msh_save_visibility = getVisib(cc);
					}
					cc.style.visibility = "hidden";
				}
			}
		}
	};
	if (Calendar.is_khtml)
		setTimeout("Calendar.continuation_for_the_fucking_khtml_browser()", 10);
	else
		Calendar.continuation_for_the_fucking_khtml_browser();
};

/** Internal function; it displays the bar with the names of the weekday. */
Calendar.prototype._displayWeekdays = function () {
	var MON = this.mondayFirst ? 0 : 1;
	var SUN = this.mondayFirst ? 6 : 0;
	var SAT = this.mondayFirst ? 5 : 6;
	var cell = this.firstdayname;
	for (var i = 0; i < 7; ++i) {
		cell.className = "day name";
		if (!i) {
			cell.ttip = this.mondayFirst ? Calendar._TT["SUN_FIRST"] : Calendar._TT["MON_FIRST"];
			cell.navtype = 100;
			cell.calendar = this;
			Calendar._add_evs(cell);
		}
		if (i == SUN || i == SAT) {
			Calendar.addClass(cell, "weekend");
		}
		cell.firstChild.data = Calendar._SDN[i + 1 - MON];
		cell = cell.nextSibling;
	}
};

/** Internal function.  Hides all combo boxes that might be displayed. */
Calendar.prototype._hideCombos = function () {
	this.monthsCombo.style.display = "none";
	this.yearsCombo.style.display = "none";
};

/** Internal function.  Starts dragging the element. */
Calendar.prototype._dragStart = function (ev) {
	if (this.dragging) {
		return;
	}
	this.dragging = true;
	var posX;
	var posY;
	if (Calendar.is_ie) {
		posY = window.event.clientY + document.body.scrollTop;
		posX = window.event.clientX + document.body.scrollLeft;
	} else {
		posY = ev.clientY + window.scrollY;
		posX = ev.clientX + window.scrollX;
	}
	var st = this.element.style;
	this.xOffs = posX - parseInt(st.left);
	this.yOffs = posY - parseInt(st.top);
	with (Calendar) {
		addEvent(document, "mousemove", calDragIt);
		addEvent(document, "mouseover", stopEvent);
		addEvent(document, "mouseup", calDragEnd);
	}
};

// BEGIN: DATE OBJECT PATCHES

/** Adds the number of days array to the Date object. */
Date._MD = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

/** Constants used for time computations */
Date.SECOND = 1000 /* milliseconds */;
Date.MINUTE = 60 * Date.SECOND;
Date.HOUR   = 60 * Date.MINUTE;
Date.DAY    = 24 * Date.HOUR;
Date.WEEK   =  7 * Date.DAY;

/** Returns the number of days in the current month */
Date.prototype.getMonthDays = function(month) {
	var year = this.getFullYear();
	if (typeof month == "undefined") {
		month = this.getMonth();
	}
	if (((0 == (year%4)) && ( (0 != (year%100)) || (0 == (year%400)))) && month == 1) {
		return 29;
	} else {
		return Date._MD[month];
	}
};

/** Returns the number of day in the year. */
Date.prototype.getDayOfYear = function() {
	var now = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0);
	var then = new Date(this.getFullYear(), 0, 1, 0, 0, 0);
	var time = now - then;
	return Math.floor(time / Date.DAY);
};

/** Returns the number of the week in year, as defined in ISO 8601. */
Date.prototype.getWeekNumber = function() {
	var now = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0);
	var then = new Date(this.getFullYear(), 0, 1, 0, 0, 0);
	var time = now - then;
	var day = then.getDay(); // 0 means Sunday
	if (day == 0) day = 7;
	(day > 4) && (day -= 4) || (day += 3);
	return Math.round(((time / Date.DAY) + day) / 7);
};

/** Checks dates equality (ignores time) */
Date.prototype.equalsTo = function(date) {
	return ((this.getFullYear() == date.getFullYear()) &&
		(this.getMonth() == date.getMonth()) &&
		(this.getDate() == date.getDate()) &&
		(this.getHours() == date.getHours()) &&
		(this.getMinutes() == date.getMinutes()));
};

/** Prints the date in a string according to the given format. */
Date.prototype.print = function (str) {
	var m = this.getMonth();
	var d = this.getDate();
	var y = this.getFullYear();
	var wn = this.getWeekNumber();
	var w = this.getDay();
	var s = {};
	var hr = this.getHours();
	var pm = (hr >= 12);
	var ir = (pm) ? (hr - 12) : hr;
	var dy = this.getDayOfYear();
	if (ir == 0)
		ir = 12;
	var min = this.getMinutes();
	var sec = this.getSeconds();
	s["%a"] = Calendar._SDN[w]; // abbreviated weekday name [FIXME: I18N]
	s["%A"] = Calendar._DN[w]; // full weekday name
	s["%b"] = Calendar._SMN[m]; // abbreviated month name [FIXME: I18N]
	s["%B"] = Calendar._MN[m]; // full month name
	// FIXME: %c : preferred date and time representation for the current locale
	s["%C"] = 1 + Math.floor(y / 100); // the century number
	s["%d"] = (d < 10) ? ("0" + d) : d; // the day of the month (range 01 to 31)
	s["%e"] = d; // the day of the month (range 1 to 31)
	// FIXME: %D : american date style: %m/%d/%y
	// FIXME: %E, %F, %G, %g, %h (man strftime)
	s["%H"] = (hr < 10) ? ("0" + hr) : hr; // hour, range 00 to 23 (24h format)
	s["%I"] = (ir < 10) ? ("0" + ir) : ir; // hour, range 01 to 12 (12h format)
	s["%j"] = (dy < 100) ? ((dy < 10) ? ("00" + dy) : ("0" + dy)) : dy; // day of the year (range 001 to 366)
	s["%k"] = hr;		// hour, range 0 to 23 (24h format)
	s["%l"] = ir;		// hour, range 1 to 12 (12h format)
	s["%m"] = (m < 9) ? ("0" + (1+m)) : (1+m); // month, range 01 to 12
	s["%M"] = (min < 10) ? ("0" + min) : min; // minute, range 00 to 59
	s["%n"] = "\n";		// a newline character
	s["%p"] = pm ? "PM" : "AM";
	s["%P"] = pm ? "pm" : "am";
	// FIXME: %r : the time in am/pm notation %I:%M:%S %p
	// FIXME: %R : the time in 24-hour notation %H:%M
	s["%s"] = Math.floor(this.getTime() / 1000);
	s["%S"] = (sec < 10) ? ("0" + sec) : sec; // seconds, range 00 to 59
	s["%t"] = "\t";		// a tab character
	// FIXME: %T : the time in 24-hour notation (%H:%M:%S)
	s["%U"] = s["%W"] = s["%V"] = (wn < 10) ? ("0" + wn) : wn;
	s["%u"] = w + 1;	// the day of the week (range 1 to 7, 1 = MON)
	s["%w"] = w;		// the day of the week (range 0 to 6, 0 = SUN)
	// FIXME: %x : preferred date representation for the current locale without the time
	// FIXME: %X : preferred time representation for the current locale without the date
	s["%y"] = ('' + y).substr(2, 2); // year without the century (range 00 to 99)
	s["%Y"] = y;		// year with the century
	s["%%"] = "%";		// a literal '%' character
	var re = Date._msh_formatRegexp;
	if (typeof re == "undefined") {
		var tmp = "";
		for (var i in s)
			tmp += tmp ? ("|" + i) : i;
		Date._msh_formatRegexp = re = new RegExp("(" + tmp + ")", 'g');
	}
	return str.replace(re, function(match, par) { return s[par]; });
};

// END: DATE OBJECT PATCHES

// global object that remembers the calendar
window.calendar = null;

Calendar.setup = function (params) {

	function param_default(pname, def) { if (typeof params[pname] == "undefined") { params[pname] = def; } };

	param_default("inputField",     null);
	param_default("displayArea",    null);
	param_default("button",         null);
	param_default("eventName",      "click");
	param_default("ifFormat",       "%Y/%m/%d");
	param_default("daFormat",       "%Y/%m/%d");
	param_default("singleClick",    true);
	param_default("disableFunc",    null);
	param_default("dateStatusFunc", params["disableFunc"]);	// takes precedence if both are defined
	param_default("mondayFirst",    true);
	param_default("align",          "Bl");
	param_default("range",          [1900, 2999]);
	param_default("weekNumbers",    true);
	param_default("flat",           null);
	param_default("flatCallback",   null);
	param_default("onSelect",       null);
	param_default("onClose",        null);
	param_default("onUpdate",       null);
	param_default("date",           null);
	param_default("showsTime",      false);
	param_default("timeFormat",     "24");

	var tmp = ["inputField", "displayArea", "button"];
	for (var i in tmp) {
		if (typeof params[tmp[i]] == "string") {
			params[tmp[i]] = document.getElementById(params[tmp[i]]);
		}
	}
	if (!(params.flat || params.inputField || params.displayArea || params.button)) {
		alert("Calendar.setup:\n  Nothing to setup (no fields found).  Please check your code");
		return false;
	}

	function onSelect(cal) {
		if (cal.params.flat) {
			if (typeof cal.params.flatCallback == "function") {
				cal.params.flatCallback(cal);
			} else {
				alert("No flatCallback given -- doing nothing.");
			}
			return false;
		}
		if (cal.params.inputField) {
			cal.params.inputField.value = cal.date.print(cal.params.ifFormat);
		}
		if (cal.params.displayArea) {
			cal.params.displayArea.innerHTML = cal.date.print(cal.params.daFormat);
		}
		if (cal.params.singleClick && cal.dateClicked) {
			cal.callCloseHandler();
		}
		if (typeof cal.params.onUpdate == "function") {
			cal.params.onUpdate(cal);
		}
	};

	if (params.flat != null) {
		params.flat = document.getElementById(params.flat);
		if (!params.flat) {
			alert("Calendar.setup:\n  Flat specified but can't find parent.");
			return false;
		}
		var cal = new Calendar(params.mondayFirst, params.date, params.onSelect || onSelect);
		cal.showsTime = params.showsTime;
		cal.time24 = (params.timeFormat == "24");
		cal.params = params;
		cal.weekNumbers = params.weekNumbers;
		cal.setRange(params.range[0], params.range[1]);
		cal.setDateStatusHandler(params.dateStatusFunc);
		cal.create(params.flat);
		cal.show();
		return false;
	}

	var triggerEl = params.button || params.displayArea || params.inputField;

	$('img[id^=\'' + triggerEl.id + '\']').live (params.eventName, function (event) {

		var dateEl = event.target.previousSibling.previousSibling;
		var dateFmt = params.inputField ? params.ifFormat : params.daFormat;
		var mustCreate = false;
		var cal = window.calendar;
		if (!window.calendar) {
			window.calendar = cal = new Calendar(params.mondayFirst,
							     params.date,
							     params.onSelect || onSelect,
							     params.onClose || function(cal) { cal.hide(); });
			cal.showsTime = params.showsTime;
			cal.time24 = (params.timeFormat == "24");
			cal.weekNumbers = params.weekNumbers;
			mustCreate = true;
		} else {
			cal.hide();
		}
		cal.setRange(params.range[0], params.range[1]);
		cal.params = params;
		cal.params.inputField = dateEl;
		cal.setDateStatusHandler(params.dateStatusFunc);
		cal.setDateFormat(dateFmt);
		if (mustCreate)
			cal.create();
		cal.parseDate(dateEl.value || dateEl.innerHTML);
		cal.refresh();
		cal.showAtElement(dateEl, params.align);
		return false;
	});

};





function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
	//
	// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +	 bugfix by: Michael White (http://crestidg.com)

	var i, j, kw, kd, km, sign = '';

	// input sanitation & defaults
	if( isNaN(decimals = Math.abs(decimals)) ){
		decimals = 2;
	}
	if( dec_point == undefined ){
		dec_point = ",";
	}
	if( thousands_sep == undefined ){
		thousands_sep = " ";
	}
	if (number < 0) {
		sign = '-';
		number = -number;
	}

	i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

	if( (j = i.length) > 3 ){
		j = j % 3;
	} else{
		j = 0;
	}

	km = (j ? i.substr(0, j) + thousands_sep : "");
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
	//kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
	kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


	return sign + km + kw + kd;
}

function number_clean (number) {
	var result = Number ((number || "").replace(/\s+/g, '').replace(/\,/, '.'));
	return isNaN (result) ? 0 : result;
}







/*--------------------------------------------------|

| dTree 2.05 | www.destroydrop.com/javascript/tree/ |

|---------------------------------------------------|

| Copyright (c) 2002-2003 Geir Landr�               |

|                                                   |

| This script can be used freely as long as all     |

| copyright messages are intact.                    |

|                                                   |

| Updated: 17.04.2003                               |

|--------------------------------------------------*/



// Node object

function Node (id, pid, name, url, title, target, icon, iconOpen, open, context_menu, is_checkbox, is_radio) {

	this.id = id;
	this.pid = pid;
	this.name = name;
	this.url = url;
	this.title = title;
	this.target = target;
	this.icon = icon;
	this.iconOpen = iconOpen;
	this._io = open || false;
	this.context_menu = context_menu;
	this.is_checkbox = is_checkbox;
	this.is_radio = is_radio;
	this._is = false;
	this._ls = false;
	this._hc = false;
	this._ai = 0;
	this._p;

};

// Tree object

function dTree (objName) {

	this.config = {

		target		: null,
		folderLinks	: true,
		useSelection	: true,
		useCookies	: true,
		useLines	: true,
		useIcons	: true,
		useStatusText	: false,
		closeSameLevel	: false,
		inOrder		: false,
		iconPath	: null
	}

	this.icon = {

		root		: 'base.gif',
		folder		: 'folder.gif',
		folderOpen	: 'folderopen.gif',
		node		: 'page.gif',
		empty		: 'empty.gif',
		line		: 'line.gif',
		join		: 'join.gif',
		joinBottom	: 'joinbottom.gif',
		plus		: 'plus.gif',
		plusBottom	: 'plusbottom.gif',
		minus		: 'minus.gif',
		minusBottom	: 'minusbottom.gif',
		nlPlus		: 'nolines_plus.gif',
		nlMinus		: 'nolines_minus.gif'

	};

	this.obj = objName;
	this.aNodes = [];
	this.aIndent = [];
	this.root = new Node(-1);
	this.selectedNode = null;
	this.selectedFound = false;
	this.completed = false;
	this.checkbox_name_prefix = '_';

	this.checkedNodes = [];
};



// Adds a new node to the node array

dTree.prototype.add = function(id, pid, name, url, title, target, icon, iconOpen, open, context_menu, is_checkbox, is_radio) {

	this.aNodes[this.aNodes.length] = new Node(id, pid, name, url, title, target, icon, iconOpen, open, context_menu, is_checkbox, is_radio);

};

dTree.prototype.addAll = function (a) {

	for (i in a) this.aNodes[this.aNodes.length] = new Node (i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10]);

};



// Open/close all nodes

dTree.prototype.openAll = function() {

	this.oAll(true);

};

dTree.prototype.closeAll = function() {

	this.oAll(false);

};



// Outputs the tree to the page

dTree.prototype.toString = function() {

	var str = '<div class="dtree">\n';

	if (document.getElementById) {

		if (this.config.useCookies) this.selectedNode = this.getSelected();

		str += this.addNode(this.root);

	} else str += 'Browser not supported.';

	str += '</div>';

	if (!this.selectedFound) this.selectedNode = null;

	this.completed = true;

	if (this.config.useCookies) this.updateCookie();

//alert (str);

	return str;

};



// Creates the tree structure

dTree.prototype.addNode = function(pNode) {

	var str = '';

	for (var n = this.config.inOrder ? pNode._ai + 1 : 0; n<this.aNodes.length; n++) {

		var cn = this.aNodes[n];

		if (cn.pid == pNode.id) {

			cn._p = pNode;

			cn._ai = n;

//			this.setCS(cn);

			if (!cn.target && this.config.target) cn.target = this.config.target;

			if (cn._hc && cn._hac && !cn._io && this.config.useCookies) cn._io = this.isOpen(cn.id);

			if (!this.config.folderLinks && cn._hc) cn.url = null;

			if (this.config.useSelection && cn.id == this.selectedNode && !this.selectedFound) {

					cn._is = true;

					this.selectedNode = n;

					this.selectedFound = true;

			}

			str += this.node(cn, n);

			if (cn._is && cn.url) {
				if (cn.url.indexOf ('javascript:') == 0) {
					var code = cn.url.substr (11).replace (/%20/g, ' ');
					eval (code);
				}
				else {

					cn.url = cn.url + '&salt=' + Math.random ();
					if (cn.target == null || cn.target == '') cn.target = '_self';
					var code = 'nope (\'' + this._url_base + cn.url + '\', \'' + cn.target + '\', \'toolbar=no,resizable=yes\')';
					setTimeout(code, 0);
				}
			}

			if (cn._ls) break;

		}
		else {

			if (this.config.inOrder) break;

		}

	}

	return str;

};

// Creates the node icon, url and text

dTree.prototype.node = function(node, nodeId) {

	var str = '<div class="dTreeNode">' + this.indent(node, nodeId);

	if (this.config.useIcons) {

		if (!node.icon) node.icon = (this.root.id == node.pid) ? this.icon.root : ((node._hc) ? this.icon.folder : this.icon.node);

		if (!node.iconOpen) node.iconOpen = (node._hc) ? this.icon.folderOpen : this.icon.node;

		if (this.root.id == node.pid) {

			node.icon = this.icon.root;

			node.iconOpen = this.icon.root;

		}

		str += '<img id="i' + this.obj + nodeId + '" src="' + this.config.iconPath + ((node._io) ? node.iconOpen : node.icon) + '" alt="" />';

	}

	if (node.is_checkbox) {
		str += '<input class=cbx type=checkbox name="' + this.checkbox_name_prefix + this.obj + '_' + node.id + '"' + (node.is_checkbox > 1 ? 'checked' : '') + ' value=1 tabindex=-1 onChange="is_dirty=true" />';
		if (node.is_checkbox > 1)
			this.checkedNodes[this.checkedNodes.length] = nodeId;
	}

	if (node.is_radio) {
		str += '<input class=cbx type=radio name="' + this.checkbox_name_prefix + this.obj + '" ' + (node.is_radio > 1 ? 'checked' : '') + ' value=' + node.id + ' tabindex=-1 onChange="is_dirty=true" />';
		if (node.is_radio > 1)
			this.checkedNodes[this.checkedNodes.length] = nodeId;
	}

	if (node.url) {

		str += '<a id="s' + this.obj + nodeId + '" class="' + ((this.config.useSelection) ? ((node._is ? 'nodeSel' : 'node')) : 'node') + '" href="' + this._url_base + node.url + '"';

		if (node.title) str += ' title="' + node.title + '"';

		if (node.target) str += ' target="' + node.target + '"';

		if (this.config.useStatusText) str += ' onmouseover="window.status=\'' + node.name + '\';return true;" onmouseout="window.status=\'\';return true;" ';

		if (node.context_menu) str += ' oncontextmenu="' + this.obj + '.s(' + nodeId + '); open_popup_menu(event, \'' + node.context_menu + '\'); return blockEvent ();"';

		if (this.config.useSelection && ((node._hc && this.config.folderLinks) || !node._hc))
			str += ' onclick="javascript: if (' + this.obj + '.selectedNode == ' + nodeId + ') return false;'
				+ this.obj + '.s(' + nodeId + '); "';

		if (node._hc && node.pid != this.root.id) str += ' onDblClick="' + this.obj + '.o(' + nodeId + '); "';

		str += '>';

	}

	else if ((!this.config.folderLinks || !node.url) && node._hc && node.pid != this.root.id) str += '<a href="javascript: ' + this.obj + '.o(' + nodeId + ');" class="node">';

	str += node.name;

	if (node.url || ((!this.config.folderLinks || !node.url) && node._hc)) str += '</a>';

	str += '</div>';

	if (node._hc) {

		str += '<div id="d' + this.obj + nodeId + '" class="clip" style="display:' + ((this.root.id == node.pid || node._io) ? 'block' : 'none') + ';">';

		str += this.addNode(node);

		str += '</div>';

	}

	this.aIndent.pop();

	return str;

};



// Adds the empty and line icons

dTree.prototype.indent = function(node, nodeId) {

	var str = '';

	if (this.root.id != node.pid) {

		for (var n=0; n<this.aIndent.length; n++)

			str += '<img src="' + this.config.iconPath + ( (this.aIndent[n] == 1 && this.config.useLines) ? this.icon.line : this.icon.empty ) + '" alt="" />';

		(node._ls) ? this.aIndent.push(0) : this.aIndent.push(1);

		if (node._hc) {

			str += '<a href="javascript: ' + this.obj + '.o(' + nodeId + ');"><img id="j' + this.obj + nodeId + '" src="';

			str += this.config.iconPath;

			if (!this.config.useLines) str += (node._io) ? this.icon.nlMinus : this.icon.nlPlus;

			else str += ( (node._io) ? ((node._ls && this.config.useLines) ? this.icon.minusBottom : this.icon.minus) : ((node._ls && this.config.useLines) ? this.icon.plusBottom : this.icon.plus ) );

			str += '" alt="" /></a>';

		} else str += '<img src="' + this.config.iconPath + ( (this.config.useLines) ? ((node._ls) ? this.icon.joinBottom : this.icon.join ) : this.icon.empty) + '" alt="" />';

	}

	return str;

};



// Checks if a node has any children and if it is the last sibling

dTree.prototype.setCS = function(node) {

	var lastId;

	for (var n=0; n<this.aNodes.length; n++) {

		if (this.aNodes[n].pid == node.id) node._hc = true;

		if (this.aNodes[n].pid == node.pid) lastId = this.aNodes[n].id;

	}

	if (lastId==node.id) node._ls = true;

};



// Returns the selected node

dTree.prototype.getSelected = function() {

	var sn = this.getCookie('cs_' + this._cookie_name);

	return (sn) ? sn : null;

};



// Highlights the selected node

dTree.prototype.s = function(id) {

	if (!this.config.useSelection) return;

	for (var i = 0; i < this.aNodes.length; i++) this.aNodes[i]._is = 0;

	var cn = this.aNodes[id];

	cn._is = 1;

	if (cn._hc && !this.config.folderLinks) return;

	if (this.selectedNode != id) {

		if (this.selectedNode || this.selectedNode==0) {

			eOld = document.getElementById("s" + this.obj + this.selectedNode);

			if (eOld) eOld.className = "node";

		}

		$("a.nodeSel").attr ("class", "node");

		eNew = document.getElementById("s" + this.obj + id);

		eNew.className = "nodeSel";

		this.selectedNode = id;

		if (this.config.useCookies) this.setCookie('cs_' + this._cookie_name, cn.id);

	}

};



// Toggle Open or close

dTree.prototype.o = function(id) {

	var cn = this.aNodes[id];

	if (this._active && !cn._io && cn._hac == 0) {

		document.body.style.cursor = 'wait';

		var href = this._href + '&__parent=' + cn.id;

		nope (href, 'invisible');

	}
	else {

		this.nodeStatus(!cn._io, id, cn._ls);

		cn._io = !cn._io;

		setCursor ();

	}

	if (this.config.closeSameLevel) this.closeLevel(cn);

	if (this.config.useCookies) this.updateCookie();

};



// Open or close all nodes

dTree.prototype.oAll = function(status) {

	for (var n=0; n<this.aNodes.length; n++) {

		if (this.aNodes[n]._hc && this.aNodes[n].pid != this.root.id) {

			this.nodeStatus(status, n, this.aNodes[n]._ls)

			this.aNodes[n]._io = status;

		}

	}

	if (this.config.useCookies) this.updateCookie();

	setCursor ();

};



// Opens the tree to a specific node

dTree.prototype.openTo = function(nId, bSelect, bFirst) {

	if (!bFirst) {

		for (var n=0; n<this.aNodes.length; n++) {

			if (this.aNodes[n].id == nId) {

				nId=n;

				break;

			}

		}

	}

	var cn=this.aNodes[nId];

	if (!cn) return;

	if (cn.pid==this.root.id || !cn._p) {
		if (bSelect) this.s(cn._ai)
	 	return;
	}

	cn._io = true;

	cn._is = bSelect;

	if (this.completed && cn._hc) this.nodeStatus(true, cn._ai, cn._ls);

	if (this.completed && bSelect) this.s(cn._ai);

	else if (bSelect) this._sn=cn._ai;

	this.openTo(cn._p._ai, false, true);

};



// Closes all nodes on the same level as certain node

dTree.prototype.closeLevel = function(node) {

	for (var n=0; n<this.aNodes.length; n++) {

		if (this.aNodes[n].pid == node.pid && this.aNodes[n].id != node.id && this.aNodes[n]._hc) {

			this.nodeStatus(false, n, this.aNodes[n]._ls);

			this.aNodes[n]._io = false;

			this.closeAllChildren(this.aNodes[n]);

		}

	}

}



// Closes all children of a node

dTree.prototype.closeAllChildren = function(node) {

	for (var n=0; n<this.aNodes.length; n++) {

		if (this.aNodes[n].pid == node.id && this.aNodes[n]._hc) {

			if (this.aNodes[n]._io) this.nodeStatus(false, n, this.aNodes[n]._ls);

			this.aNodes[n]._io = false;

			this.closeAllChildren(this.aNodes[n]);

		}

	}

}



// Change the status of a node(open or closed)

dTree.prototype.nodeStatus = function(status, id, bottom) {

	eDiv	= document.getElementById('d' + this.obj + id);

	eJoin	= document.getElementById('j' + this.obj + id);

	if (this.config.useIcons) {

		eIcon	= document.getElementById('i' + this.obj + id);

		eIcon.src = this.config.iconPath + ((status) ? this.aNodes[id].iconOpen : this.aNodes[id].icon);

	}

	src = (this.config.useLines)?

	((status)?((bottom)?this.icon.minusBottom:this.icon.minus):((bottom)?this.icon.plusBottom:this.icon.plus)):

	((status)?this.icon.nlMinus:this.icon.nlPlus);

	eJoin.src = this.config.iconPath + src

	eDiv.style.display = (status) ? 'block': 'none';

	document.body.style.cursor = 'default';

};





// [Cookie] Clears a cookie

dTree.prototype.clearCookie = function() {

	var now = new Date();

	var yesterday = new Date(now.getTime() - 1000 * 60 * 60 * 24);

	this.setCookie('co_'+this._cookie_name, 'cookieValue', yesterday);

	this.setCookie('cs_'+this._cookie_name, 'cookieValue', yesterday);

};



// [Cookie] Sets value in a cookie

dTree.prototype.setCookie = function(cookieName, cookieValue, expires, path, domain, secure) {

	document.cookie =

		escape(cookieName) + '=' + escape(cookieValue)

		+ (expires ? '; expires=' + expires.toGMTString() : '')

		+ (path ? '; path=' + path : '')

		+ (domain ? '; domain=' + domain : '')

		+ (secure ? '; secure' : '');

};



// [Cookie] Gets a value from a cookie

dTree.prototype.getCookie = function(cookieName) {

	var cookieValue = '';

	var posName = document.cookie.indexOf(escape(cookieName) + '=');

	if (posName != -1) {

		var posValue = posName + (escape(cookieName) + '=').length;

		var endPos = document.cookie.indexOf(';', posValue);

		if (endPos != -1) cookieValue = unescape(document.cookie.substring(posValue, endPos));

		else cookieValue = unescape(document.cookie.substring(posValue));

	}

	return (cookieValue);

};



// [Cookie] Returns ids of open nodes as a string

dTree.prototype.updateCookie = function() {

	var str = '';

	for (var n=0; n<this.aNodes.length; n++) {

		if (this.aNodes[n]._io && this.aNodes[n].pid != this.root.id) {

			if (str) str += '.';

			str += this.aNodes[n].id;

		}

	}

	this.setCookie('co_' + this._cookie_name, str);

};



// [Cookie] Checks if a node id is in a cookie

dTree.prototype.isOpen = function(id) {

	var aOpen = this.getCookie('co_' + this._cookie_name).split('.');

	for (var n=0; n<aOpen.length; n++) if (aOpen[n] == id) return true;

	return false;

};


// sets cookie
function setCookie(name, value, props) {

	props = props || {}

	var exp = props.expires

	if (typeof exp == "number" && exp) {

		var d = new Date()

		d.setTime(d.getTime() + exp*1000)

		exp = props.expires = d
	}

	if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

	value = encodeURIComponent(value)

	var updatedCookie = name + "=" + value

	for(var propName in props){

		updatedCookie += "; " + propName

		var propValue = props[propName]

		if(propValue !== true){ updatedCookie += "=" + propValue }

	}

	document.cookie = updatedCookie

}

// get cookie value: undefined if cookie does not exist
function getCookie(name) {

	var matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	))

	return matches ? decodeURIComponent(matches[1]) : undefined
}


// If Push and pop is not implemented by the browser

if (!Array.prototype.push) {

	Array.prototype.push = function array_push() {

		for(var i=0;i<arguments.length;i++) this[this.length]=arguments[i];

		return this.length;

	}

};

if (!Array.prototype.pop) {

	Array.prototype.pop = function array_pop() {

		lastElement = this[this.length-1];

		this.length = Math.max(this.length-1,0);

		return lastElement;

	}

};

if(!Object.keys) {

	Object.keys = function(o){
		if (o !== Object(o))
			throw new TypeError('Object.keys called on non-object');
		var ret=[],p;
		for (p in o) if(Object.prototype.hasOwnProperty.call(o,p)) ret.push(p);
		return ret;
	}
}

function enableDropDownList(name, enable){
	var dropdownlist = $('select[name='+name+']').data("kendoDropDownList");
	dropdownlist.enable(enable);
}

// converts received flat data to hierarhy required by kendoTreeView
function treeview_convert_plain_response(response) {

	if (!response.content) {
		return [];
	}

	var tree_key;
	for (var key in response.content) {
		if ($.isArray(response.content[key])) {
			tree_key = key;
		}
	}

	if (!tree_key) {
		return [];
	}

	var items = response.content[tree_key];

	var idx = {};
	var children_nodes = {};
	for (var i in items) {
		var item = items [i];
		idx [item.id] = item;
		item.text = item.label;

		// schema.model.id added to request when loading children
		item.__parent = item.id;

		if (item.parent == 0) {
			expanded_nodes [item.id] = true;
		}

		item.expanded = expanded_nodes[item.id];

		if (!children_nodes [item.parent]) {
			children_nodes [item.parent] = [];
		}

		children_nodes [item.parent].push (item);
	}

	var first_level_nodes = []
	for (var i in items) {
		var item = items [i];
		item.items = children_nodes [item.id];

		if (item.parent == 0 || !idx [item.parent]) {
			first_level_nodes.push(item);
		}
	}
	return first_level_nodes;
}

function treeview_select_node_by_id(treeview, id_node) {

	var item = treeview.dataSource.get (id_node);
	if (item) {
		var node = treeview.findByUid (item.uid);
		treeview.select (node);
	}
}

function treeview_onselect_node (e) {
	var node = e.node;
	var treeview = $("#splitted_tree_window_left").data ("kendoTreeView");
	node = treeview.dataItem (node);
	if (!node || !node.href) return;
	var href = node.href;

	$("#splitted_tree_window_right").html ("<iframe onload='this.style.visibility="+'"visible"'+"' style='visibility: hidden;' width=100% height=100% src='" + href + "' name='$options->{name}' id='__content_iframe' application=yes scroll=no>");

	/************************* add height in iframe *************************/
	var heghtstr = $(window.parent.document.getElementById( "tabstrip" )).height();
	if (heghtstr > 100){
		$('#__content_iframe').css('height', heghtstr - 36);
	}
}


