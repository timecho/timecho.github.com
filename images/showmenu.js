// JavaScript Document
function ShowHidMenu(n,count){
	for(var i=1;i<=count;i++){
		$("submenu_"+i).style.display=(n==i)?"":"none";
		$("menu_"+i).className=(n==i)?"menu_sel":"menu";
	}
}

function ShowMenu(n,count){
  for(var i=1;i<=count;i++) 
    $("nav_"+i).className=(n==i)?"nav_sel":"";
}

function ShowHidHNews(idx,n,sel){
  for(var i=1;i<=n;i++){
	$("ban"+idx+"_list"+i).style.display=(sel==i)?"block":"none";
	$("midnav"+idx+"_"+i).className=(sel==i)?"sel":"nosel";
  }
}

function SelGourl(o){
	window.location.href=o.value
}

function SelGourl2(o){
    if(o.value != "")  window.open(o.value);
	document.getElementById("default_option").selected = true;
}