//  window.onload=function GiftForShacoMains(){
//    while(true){
//     console.log("yes")
//    }
//  }
 
//stalling stuff
$("body").css({
  background: "black"
})
$("#but").mouseover(function(){
  var ran1=Math.floor(Math.random()*1000)
  var ran2=Math.floor(Math.random()*1000)
  $(this).css({
    transform: "translateX("+ran1+"px) translateY("+ran2+"px)"
  })
})