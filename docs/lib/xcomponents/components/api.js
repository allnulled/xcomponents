window.xcomponents_components = {};
window.xcomponents_api = {};

const xbreadcrumb = require("./xbreadcrumb/xbreadcrumb.js");
const xbutton = require("./xbutton/xbutton.js");
const xcollapsible = require("./xcollapsible/xcollapsible.js");
const xcollapser = require("./xcollapser/xcollapser.js");
const xdialogport = require("./xdialogport/xdialogport.js");
const xdialogcurrent = require("./xdialogport/xdialogcurrent.js");
const xform = require("./xform/xform.js");
const xformcheckbox = require("./xformcheckbox/xformcheckbox.js");
const xformcheckboxes = require("./xformcheckboxes/xformcheckboxes.js");
const xformcombobox = require("./xformcombobox/xformcombobox.js");
const xformfield = require("./xformfield/xformfield.js");
const xformtextarea = require("./xformtextarea/xformtextarea.js");
const xformselect = require("./xformselect/xformselect.js");
const xformnumber = require("./xformnumber/xformnumber.js");
const xformrange = require("./xformrange/xformrange.js");
const xformdate = require("./xformdate/xformdate.js");
const xformtime = require("./xformtime/xformtime.js");
const xformdatetime = require("./xformdatetime/xformdatetime.js");
const xjumbotron = require("./xjumbotron/xjumbotron.js");
const xlabel = require("./xlabel/xlabel.js");
const xlayout = require("./xlayout/xlayout.js");
const xlayoutnopaddingbottom = require("./xlayoutnopaddingbottom/xlayoutnopaddingbottom.js");
const xlayoutnopaddingtop = require("./xlayoutnopaddingtop/xlayoutnopaddingtop.js");
const xlayoutnopaddingvertical = require("./xlayoutnopaddingvertical/xlayoutnopaddingvertical.js");
const xlink = require("./xlink/xlink.js");
const xpage = require("./xpage/xpage.js");
const xpanel = require("./xpanel/xpanel.js");
const xparagraph = require("./xparagraph/xparagraph.js");
const xsubtitle = require("./xsubtitle/xsubtitle.js");
const xtable = require("./xtable/xtable.js");
const xtablecell = require("./xtablecell/xtablecell.js");
const xtablerow = require("./xtablerow/xtablerow.js");
const xtablehead = require("./xtablehead/xtablehead.js");
const xtableheader = require("./xtableheader/xtableheader.js");
const xtablebody = require("./xtablebody/xtablebody.js");
const xtester = require("./xtester/xtester.js");
const xtitle = require("./xtitle/xtitle.js");
const xtooltip = require("./xtooltip/xtooltip.js");
const xwindow = require("./xwindow/xwindow.js");
const xwindowbody = require("./xwindowbody/xwindowbody.js");
const xwindowfooter = require("./xwindowfooter/xwindowfooter.js");
const xwindowfooteritem = require("./xwindowfooteritem/xwindowfooteritem.js");
const xwindowtitle = require("./xwindowtitle/xwindowtitle.js");
const vuejsCalendario = require("./vuejs-calendario/vuejs-calendario.js");
const xstatic = require("./xstatic/xstatic.js");

Object.assign(window.xcomponents_api, {
    components: window.xcomponents_components
});

window.xcomponents_api.default = window.xcomponents_api;

module.exports = window.xcomponents_api;