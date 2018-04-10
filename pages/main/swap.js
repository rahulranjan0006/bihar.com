 		var i=0;
		var path=new Array();
		path[0]="image/10.jpg";
		path[1]="image/3.jpg";
		path[2]="image/4.jpg";
		path[3]="image/8.jpg";
		path[4]="image/5.jpg";
		path[5]="image/9.jpg";
	function swapimage()
	{
   
		document.getElementById("img").innerHTML="<img src='"+path[i]+"' height=90% width=100%/>";
   
    if(i<path.length-1)
    {
        i++;
        
    }
    else
        i=0;
    setTimeout(swapimage,4000);
   
}
