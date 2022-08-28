// function messagebutton1(){
// var paravar=document.querySelector("#paraId");
// paravar.innerHTML="you have the clicked the button 1";
// }
// function messagebutton2(){
//     var paravar=document.querySelector("#paraId");
// paravar.innerHTML="you have the clicked the button 2";
// }
// function clickParagraph(){
//     alert("clicked the paragraph");

// }
var photos=["images/1.jpg","images/2.jpg","images/3.jpg"];
var img=document.querySelector("img");
var count=0;
function next(){
    count++;
    if(count>=photos.length){
        count=0;
        img.src=photos[count];
    }
    else{
        img.src=photos[count];
    }
}
function prev(){
    count--;
    if(count<0){
        count=photos.lenth-1;
        img.src=photos[count];
    }

   else  img .src=photos[count];
}