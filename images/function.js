function $F(ID){
	return document.getElementById(ID).value;
}
function $(ID){
	return document.getElementById(ID);
}

/*
���ܣ�ͼƬ�ȱ�������
Ŀ��:ImgTag
ͼƬ���:FitWidth
ͼƬ�߶�:FitHeight
*/

function ResizePic(ImgTag,FitWidth,FitHeight)
{
    var image = new Image();
 image.src = ImgTag.src;
 if(image.width>0 && image.height>0){
  if(image.width/image.height >= FitWidth/FitHeight){
   if(image.width > FitWidth){
    ImgTag.width = FitWidth;
    ImgTag.height = (image.height*FitWidth)/image.width;
   }
   else{ 
    ImgTag.width = image.width;
    ImgTag.height = image.height;
   }
  }
  else{
   if(image.height > FitHeight){
    ImgTag.height = FitHeight;
    ImgTag.width = (image.width*FitHeight)/image.height;
   }
   else{
    ImgTag.width = image.width; 
    ImgTag.height = image.height;
   }
  }
 }
}

function viewpic(piccon,selfile){ 
    var getfile = document.getElementById(selfile); 
    var getpic = document.getElementById(piccon); 

    if (!getfile || !getfile.value || !getpic) 
       return; 
    var patn = /\.gif$|\.jpeg$|\.bmp$|\.png$|\.pjpeg$|\.x-png$|\.jpg$/i;
    if(patn.test(getfile.value))
    {  getpic.src = "file://localhost/" + getfile.value; }
    else{ alert("���ļ�����ͼ���ļ���"); }
 }
 
 function show_img(_b,_idval){
	if(_b){$(_idval).style.display="";}else{$(_idval).style.display="none";}
}
