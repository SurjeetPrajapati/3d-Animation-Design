gsap.to("#page1", {
    scroll trigger:{
    trigger:#page1,
    start:`top top `,
    end:bottom top,
    markers:true, 
    pin:true, 
    scroller:`#main,
    }
    })