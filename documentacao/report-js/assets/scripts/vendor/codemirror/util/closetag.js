!function(){function t(t,n){var o=t.getCursor(),s=t.getTokenAt(o),r=CodeMirror.innerMode(t.getMode(),s.state),l=r.state;if("xml"!=r.mode.name)throw CodeMirror.Pass;var c=t.getOption("autoCloseTags"),d="html"==r.mode.configuration,u="object"==typeof c&&c.dontCloseTags||d&&i,f="object"==typeof c&&c.indentTags||d&&a;if(">"==n&&l.tagName){var p=l.tagName;s.end>o.ch&&(p=p.slice(0,p.length-s.end+o.ch));var h=p.toLowerCase();if("tag"==s.type&&"closeTag"==l.type||/\/\s*$/.test(s.string)||u&&e(u,h)>-1)throw CodeMirror.Pass;var m=f&&e(f,h)>-1;return t.replaceSelection(">"+(m?"\n\n":"")+"</"+p+">",m?{line:o.line+1,ch:0}:{line:o.line,ch:o.ch+1}),void(m&&(t.indentLine(o.line+1),t.indentLine(o.line+2)))}if("/"==n&&"tag"==s.type&&"<"==s.string){var p=l.context&&l.context.tagName;return void(p&&t.replaceSelection("/"+p+">","end"))}throw CodeMirror.Pass}function e(t,e){if(t.indexOf)return t.indexOf(e);for(var i=0,a=t.length;a>i;++i)if(t[i]==e)return i;return-1}CodeMirror.defineOption("autoCloseTags",!1,function(e,i,a){if(!i||a!=CodeMirror.Init&&a)!i&&a!=CodeMirror.Init&&a&&e.removeKeyMap("autoCloseTags");else{var n={name:"autoCloseTags"};("object"!=typeof i||i.whenClosing)&&(n["'/'"]=function(e){t(e,"/")}),("object"!=typeof i||i.whenOpening)&&(n["'>'"]=function(e){t(e,">")}),e.addKeyMap(n)}});var i=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],a=["applet","blockquote","body","button","div","dl","fieldset","form","frameset","h1","h2","h3","h4","h5","h6","head","html","iframe","layer","legend","object","ol","p","select","table","ul"]}();