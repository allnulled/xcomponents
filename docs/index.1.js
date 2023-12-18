
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 xcomponents 🌐</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/xcomponents/xcomponents.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/xcomponents/xcomponents.js\"></script>\n    <style>\n      h5 {\n        padding: 12px;\n        margin: 0;\n        background-color: #333333;\n        color: white;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>🌐 xcomponents 🌐</h5>"
 + "    <div>"
 + "      <h5>xtitle</h5>"
 + "      <xtitle>Title</xtitle>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xsubtitle</h5>"
 + "      <xsubtitle>Subtitle</xsubtitle>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xbreadcrumb</h5>"
 + "      <xbreadcrumb>"
 + "        Breadcrumb » Without » Links"
 + "      </xbreadcrumb>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xjumbotron</h5>"
 + "      <xjumbotron>Jumbotron</xjumbotron>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xparagraph</h5>"
 + "      <xparagraph>Paragraph</xparagraph>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xbutton</h5>"
 + "      <button v-on:click=\"$dialogs.confirm('This is a dialog that uses «xdialogport». Correct?', 'Open dialog message', 'This is a dialog', 'Yes', 'No')\">Button</button>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xdialogport</h5>"
 + "      <xdialogport />"
 + "      <button v-on:click=\"$dialogs.confirm('This is a dialog that uses «xdialogport». Correct?', 'Open dialog message', 'This is a dialog', 'Yes', 'No')\">Open dialog</button>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xform</h5>"
 + "      <xform>"
 + "        <xformfield>Form field</xformfield>"
 + "      </xform>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlabel</h5>"
 + "      <xlabel>Label</xlabel>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlayout</h5>"
 + "      <xlayout />"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlayoutnopaddingbottom</h5>"
 + "      <xlayoutnopaddingbottom>Layout no padding bottom</xlayoutnopaddingbottom>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlayoutnopaddingtop</h5>"
 + "      <xlayoutnopaddingtop>Layout no padding top</xlayoutnopaddingtop>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlink</h5>"
 + "      <xlink href=\"#\">Link</xlink>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xpage</h5>"
 + "      <xpage>"
 + "        Page"
 + "      </xpage>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xpanel</h5>"
 + "      <xpanel>Panel</xpanel>"
 + "    </div>"
 + "    <div>"
 + "    <h5>xtable</h5>"
 + "      <xtable>"
 + "        <xtablebody>"
 + "          <xtablerow>"
 + "            <xtablecell>"
 + "            Table cell"
 + "            </xtablecell>"
 + "            <xtablecell>"
 + "            Table cell"
 + "            </xtablecell>"
 + "            <xtablecell>"
 + "            Table cell"
 + "            </xtablecell>"
 + "          </xtablerow>"
 + "        </xtablebody>"
 + "      </xtable>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xwindow</h5>"
 + "      <xwindow>"
 + "        <xwindowtitle>Title of the window</xwindowtitle>"
 + "        <xwindowbody>Contents of the body</xwindowbody>"
 + "        <xwindowfooter>"
 + "          <xwindowfooteritem>One footer item.</xwindowfooteritem>"
 + "        </xwindowfooter>"
 + "      </xwindow>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");