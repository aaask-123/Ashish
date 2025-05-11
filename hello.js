// gsap.from(".content1",{
//     opacity:0,
//     duration:.8,
//     delay:.9,
//     // scale:0.5,
//     transform:"translateY(50px)",
   
// })

gsap.from(".menutab",{
    opacity:0,
    duration:.8,
    // scale:0.5,
    transform:"translateY(-100px)",
    stagger:-0.03
   
})

gsap.from(".logoSection",{
    opacity:-2,
    duration:.8,
    transform:"translateX(-100px)",

   
})

// var h1 = document.querySelector(".content1 h1");
// var text = h1.textContent.split("");
// var word=""
// console.log(text);
// text.forEach(function(e){
// word+=`<span>${e}</span>`
// })
// h1.innerHTML=word
gsap.from("h1",{
 transform:"translateY(100px)",
 opacity:0,
 stagger:.1,
 duration:1,



})
  gsap.to(".page h2",{
    x:"-40%",
    scrollTrigger:{
    trigger:".page",
    scoller:"body",
    start:"top 0px",
    end:"top -200px",
    scrub:0.3,
    markers:true,
    pin:true,
    }


})
let str = ["apna","ra",89, 76];
for(let i in str){ 
    console.log(str[i]);
}