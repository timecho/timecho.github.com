document.writeln("<div class='QQbox' id='divQQbox' >");
document.writeln("<div class='Qlist' id='divOnline' onmouseout='hideMsgBox(event);' style='display : none;'>");
document.writeln("<table width=\"110\" border=\"0\" cellspacing=\"1\" cellpadding=\"2\" bgcolor=\"#75B7FA\">");
document.writeln("<tr><td align=\"center\" class=\"f12white\" bgcolor=\"#004080\">客户服务 QQ</td></tr>");
document.writeln("<tr>");
document.writeln("<td></td>");
document.writeln("</tr>");
document.writeln("</table>");
document.writeln("</div>");

document.writeln("<div style=\"width:110px;height:200px; overflow:hidden;\" id=\"divMenu\">")
document.writeln("<div style=\"width:107px;height:200px;\">");


document.writeln("<a target=\"_blank\" href=\"http:\/\/wpa.qq.com\/msgrd?v=3&uin=1908118876&site=qq&menu=yes\"><img border=\"0\" src=\"Images\/onl.gif\" alt=\"客户服务QQ\" title=\"客户服务QQ\" width=\"74\" height=\"77\"><\/a>");


document.writeln("<\/div>")
document.writeln("<\/div>")


document.writeln("</div>");

var tips; var theTop = 300; var old = theTop;
function initFloatTips() {
tips = document.getElementById('divQQbox');
moveTips();
};
function moveTips() {
var tt=10;
if (window.innerHeight) {
pos = window.pageYOffset
}
else if (document.documentElement && document.documentElement.scrollTop) {
pos = document.documentElement.scrollTop
}
else if (document.body) {
pos = document.body.scrollTop;
}
pos=pos-tips.offsetTop+theTop;
pos=tips.offsetTop+pos/10+16;
if (pos < theTop) pos = theTop;
if (pos != old) {
tips.style.top = pos+"px";
tt=10;
}
old = pos;
setTimeout(moveTips,tt);
}
initFloatTips();
function OnlineOver(){
document.getElementById("divMenu").style.display = "none";
document.getElementById("divOnline").style.display = "block";
document.getElementById("divQQbox").style.width = "108px";
}

function OnlineOut(){
document.getElementById("divMenu").style.display = "block";
document.getElementById("divOnline").style.display = "none";
}

function hideMsgBox(theEvent){
if (theEvent){
var browser=navigator.userAgent;
if (browser.indexOf("Firefox")>0){
if (document.getElementById('divOnline').contains(theEvent.relatedTarget)) {
return;
} 
} 
if (browser.indexOf("MSIE")>0){
if (document.getElementById('divOnline').contains(event.toElement)) {
return;
}
}
}
document.getElementById("divMenu").style.display = "block";
document.getElementById("divOnline").style.display = "none";
}