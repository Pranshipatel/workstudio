function loaderAnimation(){
  var tl = gsap.timeline();
  tl.to("#loader #yellow1",{
      y:"-200%",
      delay:0.3,
      ease: "expo.out",
  })
  tl.to("#loader video",{
      y:"-100%",
      delay:0.8,
      ease: "expo.out",
  })
  tl.from("#yellow2",{
    top:"100%",
    delay:0.2,
    duration:0.3,
    ease: "expo.out",
  },"anim")
  tl.to("#loader h1",{
      color:"#000",
      delay:-0.3,
      ease: "expo.out",
  },"anim")
  tl.to("#loader",{
    opacity:0
  })
  tl.to("#loader",{
    display:"none"
  })
  
  }


  loaderAnimation()



const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


function navAnimation(){
  var img = document.querySelector("#project #pro-img");
  img.addEventListener("mouseenter",function(){
  gsap.to("#pro-img",{
    rotate:"45deg"
  })
  gsap.to("#pro",{
    x:"-63%",
    ease:"expo.out",
    duration:1.5,
    delay:0.2
  })
  })

  img.addEventListener("click",function(){
    gsap.to("#pro-img",{
      rotate:"0deg"
    })
    gsap.to("#pro",{
      x:"2%",
      ease:"expo.out",
      duration:1.5,
      delay:0.4
    })
    })
}
navAnimation()


function page2Animation(){
  

 var elems = document.querySelectorAll("#page2 .elem");
 var page2 = document.querySelector("#page2");
 elems.forEach(function(ele){
  ele.addEventListener("mouseenter",function(){
     var bgimg = ele.getAttribute("data-img")
     page2.style.backgroundImage = `url(${bgimg})`
  })
 })

}


page2Animation()

