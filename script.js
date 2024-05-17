const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function circleskew()
{
    var xscale=1;
    var yscale = 1;
    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove",function(dets){
        var xdiff= dets.clientX-xprev;
        var ydiff = dets.clientY-yprev;

        xprev = dets.clientX;
        yprev= dets.clientY;

       
        xscale = gsap.utils.clamp(.8,1.2,xdiff);
        yscale = gsap.utils.clamp(.8,1.2,ydiff);
    })


}

function firstPage()
{
    var t1= gsap.timeline();
    t1.from(".nav", {
        y : '-10',
        opacity: 0,
        ease : Expo.easeInOut,
        duration: 1.5
    })
    .to(".boundingelem",{
        y:0,
        duration:2,
        ease: Expo.easeInOut,
        delay:-1,
        stagger:.2
    })
}

/*document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  



     elem.addEventListener("mousemove",function(dets)
     {
        var dif = dets.clientY-elem.getBoundingClientRect().top;
        diffrot= dets.clientX - rotate;
        rotate= dets.clientX;
        gsap.to(elem.querySelector("img"),
        {
            opacity:1,
            ease: Power3,
            top:dif,
            left: dets.clientX,
            rotate : gsap.util.clamp(-20,20,diffrot*0.5),
        });
     });
});*/
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

  var a= document.getElementsByClassName("time");
  var b = new Date();
  var hours   =  b.getHours();
  var minutes =  b.getMinutes();
  a.innerHTML= hours;
  



//console.log(document.querySelectorAll(".elem"));

function circleMouseFollower()
{
    window.addEventListener("mousemove", function (dets)
    {
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
circleMouseFollower();
firstPage();
circleskew();
