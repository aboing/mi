//nav部分
{
let imgs=document.querySelectorAll(".banner-box li");
let circles=document.querySelectorAll(".nCircle .nCircle1");
let btnlObj=document.querySelector(".btn .anniuL");
let btnrObj=document.querySelector(".btn .anniuR");
let l=circles.length;
circles.forEach(function(ele,index){
    ele.onclick=function(){
        for(let i=0;i<l;i++){
            circles[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        ele.classList.add("active");
        imgs[index].classList.add("active");
        now=index;
    }
});
let now=0;
let sT=setInterval(xxkjia,1500);
function xxkjia(){
    now++;
    if(now===l){
       now=0;
    }
    for(let i=0;i<l;i++){
        circles[i].classList.remove("active");
        imgs[i].classList.remove("active");
    }
    circles[now].classList.add("active");
    imgs[now].classList.add("active");
}


function xxkjian(){
    now--;
    if(now==-1){
       now=l-1;
    }
    for(let i=0;i<l;i++){
        circles[i].classList.remove("active");
        imgs[i].classList.remove("active");
    }
    circles[now].classList.add("active");
    imgs[now].classList.add("active");
}


let banner=document.querySelector("#banner");
banner.onmouseover=function(){
   clearInterval(sT);
}
banner.onmouseout=function(){
    sT=setInterval(xxkjia,1500);
}

btnlObj.onclick=function(){
    xxkjian();
}
btnrObj.onclick=function(){
    xxkjia();
}
}


//single部分
{
let rightObj=document.querySelector(".single-rRight");
let leftObj=document.querySelector(".single-lRight");
let singleboxObj=document.querySelector(".single-box");
rightObj.onclick=function(){
    rightObj.classList.remove("colo");
    leftObj.classList.add("colo");
    singleboxObj.style.marginLeft="-1240px";
}
leftObj.onclick=function(){
    leftObj.classList.remove("colo");
    rightObj.classList.add("colo");
    singleboxObj.style.marginLeft="0";
}
}



//家电部分

let tihs1=document.querySelectorAll(".one .tih1");
let tihs2=document.querySelectorAll(".two .tih1");
let pics=document.querySelectorAll(".jiadianDcenter .jiadian-cen");
tihs1.forEach(function(ele,index){
     ele.onmouseover=function(){
     	for(let i=0;i<tihs1.length;i++){
           tihs1[i].classList.remove("tih2");
           pics[i].classList.remove("tih2");
     	}
     	ele.classList.add("tih2");
     	pics[index].classList.add("tih2");
     }

});

tihs2.forEach(function(ele,index){
      ele.onmouseover=function(){
      	for(let i=0;i<tihs2.length;i++){
           tihs2[i].classList.remove("tih2");
           pics[i].classList.remove("tih2");
     	}
     	ele.classList.add("tih2");
     	pics[index].classList.add("tih2");
      }
});




//内容部分

let neirongs=document.querySelectorAll(".waibox");
let acirs=document.querySelectorAll(".neirong-bottom-circle");
let l=neirongs.length;
acirs.forEach(xuanxk);
	   function xuanxk(ele,index){
	   	   ele.onclick=function(){
		   	   	for(let i=0;i<l;i++){
		            neirongs[i].classList.remove("tih2");
		   	   	}
		        ele.classList.add("tih2");
		        neirongs.style.marginLeft=-296*index+"px";
		        now=index;
	   	   }
	   }














































// banner部分
// let imgs=document.querySelectorAll(".nav-box li");
// let circles=document.querySelectorAll(".nCircle .nCircle1");
// let l=circles.length;
// circles.forEach(function(ele,index){
//     ele.onclick=function(){
//         for(let i=0;i<l;i++){
//             circles[i].classList.remove("active");
//             imgs[i].classList.remove("active");
//         }
//         ele.classList.add("active");
//         imgs[index].classList.add("active");
//     }
// });
// let now=0;
// let sT=setInterval(xxk,1500);
// function xxk(){
//     now++;
//     if(now===l){
//        now=0;
//     }
//     for(let i=0;i<l;i++){
//         circles[i].classList.remove("active");
//         imgs[i].classList.remove("active");
//     }
//     circles[now].classList.add("active");
//     imgs[now].classList.add("active");
// }

// let nav=document.querySelector("#nav");
// nav.onmouseover=function(){
//    clearInterval(sT);
// }
// nav.onmouseout=function(){
//     sT=setInterval(xxk,1500);
// }