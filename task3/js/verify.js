function show() {
    document.getElementById("showPop").style.display = "block";
}
function overShow(){
    document.getElementById("close").style.display = "block";
    document.getElementById("tri").style.display = "block";
}
function outHide(){
    document.getElementById("close").style.display = "none";
    document.getElementById("tri").style.display = "none";
}
function overShow1(){
    document.getElementById("close1").style.display = "block";
    document.getElementById("tri1").style.display = "block";
}
function outHide1(){
    document.getElementById("close1").style.display = "none";
    document.getElementById("tri1").style.display = "none";
}
var flag=0;
var seq=-1;
function show_coords(event){
    var x=event.clientX;
    var y=event.clientY;
    var order=0;
    //alert("X coords: " + x + ", Y coords: " + y);
    if(y>=453&&y<=493){
        if(x>=1008&&x<=1040){
            flag=flag+1;
            order=1;
            seq=seq+2;
        }
        else 
        flag=0;
        //console.log(flag);
        //console.log(order);
        //console.log(seq);
    }
    if(y>=370&&y<=408){
        if(x>=1000&&x<=1030){
            flag=flag+1;
            order=2;
            seq=-1;
        }
        else 
        flag=0;
        //console.log(flag);
        //console.log(order);
        //console.log(seq);
    }
    if(x>=846&&x<=891){
        if(y>=290&&y<=322){
            flag=flag+1;
            order=3;
            if(seq==1){
              seq=seq-1;
            }
            else 
            seq=seq+2;
        }
        else 
        flag=0;
        //console.log(flag);
        //console.log(order);
        //console.log(seq);
    }
    sure= function sure() {
        if(flag==3&&order==3&&seq==1){
            document.getElementById("success").style.display = "block";
            setTimeout(function sure (){
                document.getElementById("success").style.display = "none";
            },1000);
        }
        else{
            document.getElementById("failed").style.display = "block";
        setTimeout(function sure (){
            document.getElementById("failed").style.display = "none";
        },1000);
        setTimeout(function sure(){
            var index=1;
            index++;
           if(index>10){
             index=1;
           }
            document.getElementById("img").src="images/"+index+".jpg";
            document.getElementById("information").src="images/"+index+".1.jpg";
        },1000);
        }
    }
}
function vanish() {
    document.getElementById("showPop").style.display = "none";
    var aDiv = document.getElementsByClassName("dot");
    for(var i=0;i<aDiv.length;i++){
        aDiv[i].style.display = "none";
    }
}
document.getElementById('nImg').onmousedown=function(ev){
    var oEvent=ev||event;
    var oDiv=document.createElement('div');
    oDiv.className="dot";
    oDiv.innerHTML = "0";
    oDiv.style.fontSize ='18px';
    oDiv.style.textAlign ='center';
    oDiv.style.paddingBottom='2px';
    oDiv.style.color ='#FFFFFF';
    oDiv.style.fontWeight ='bold';
    oDiv.style.left=oEvent.clientX+'px';  
    oDiv.style.top=oEvent.clientY+'px'; 
    oDiv.style.border='3px solid #FFFFFF'; 
    oDiv.style.backgroundColor='#539FFE';
    oDiv.style.position='absolute'; 
    oDiv.style.width='20px'; 
    oDiv.style.height='20px'; 
    oDiv.style.borderRadius='50%';
    oDiv.style.zIndex='1';
    document.body.appendChild(oDiv); 
    var x=oDiv.innerHTML;
    var aDiv = document.getElementsByClassName("dot");
    for(var i=0;i<aDiv.length;i++){
        x=parseInt(x)+1;
        oDiv.innerHTML=x;
    }
}
var index=1;
function changeImages(){
    index++;
    if(index>10){
        index=1;
    }
    document.getElementById("img").src="images/"+index+".jpg";
    document.getElementById("information").src="images/"+index+".1.jpg";
}
   
