CodeMirror.colorize=function(){function t(i,a){if(3==i.nodeType)return a.push(i.nodeValue);for(var n=i.firstChild;n;n=n.nextSibling)t(n,a),e.test(i.nodeType)&&a.push("\n")}var e=/^(p|li|div|h\\d|pre|blockquote|td)$/;return function(e,i){e||(e=document.body.getElementsByTagName("pre"));for(var a=0;a<e.length;++a){var n=e[a],o=n.getAttribute("data-lang")||i;if(o){var s=[];t(n,s),n.innerHTML="",CodeMirror.runMode(s.join(""),o,n),n.className+=" cm-s-default"}}}}();