
function page1Animation(){
    let tl = gsap.timeline();

// page1 animation

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    duration:0.6,
    opacity:0,
    delay:0.5,
    stagger:0.1
})
tl.from(".center-prt1 h1",{
    x:-200,
    opacity:0,
    duration:0.5
})
tl.from(".center-prt1 p",{
    x:-100,
    opacity:0,
    duration:0.3
})
tl.from(".center-prt1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".center-prt2 img",{
    opacity:0,
    duration:0.4,
    scale:0.9
},"-=0.8")
tl.from(".sectionBottom1 img",{
    y:10,
    opacity:0,
    duration:0.5,
    // scale:0.9,
    stagger:0.3
})
}
function page2Animation(){
    
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 5%",
        scrub:1
    }
})

tl2.from(".services h1",{
    y:30,
    opacity:0,
    duration:1,
})
tl2.from(".services p",{
    x:40,
    opacity:0,
    duration:1,
})
tl2.from(".container .elem.left1",{
    x:-40,
    opacity:0,
    duration:1,
},"elemUpper")
tl2.from(".container .elem.black.middle1",{
    y:-60,
    opacity:0,
    duration:1,
},"elemUpper")
tl2.from(".container .elem.right1",{
    x:40,
    opacity:0,
    duration:1,
},"elemUpper")


tl2.from(".container .elem.left2",{
    x:-40,
    opacity:0,
    duration:1,
},"elemLower")
tl2.from(".container .elem.black.middle2",{
    y:40,
    opacity:0,
    duration:1,
},"elemLower")

tl2.from(".container .elem.right2",{
    x:40,
    opacity:0,
    duration:1,
},"elemLower")
}
function page3Animation(){
    let tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 0%",
            scrub:1
        }
    })
    
    tl3.from(".upperleft h2",{
        y:30,
        opacity:0,
        duration:1
    })
    tl3.from(".upperleft p",{
        x:30,
        opacity:0,
        duration:1
    })
    tl3.from(".upperleft button",{
        // x:30,
        opacity:0,
        duration:1
    })
    tl3.from(".upperright img",{
        // x:30,
        opacity:0,
        duration:1,
        scale:0.7
    },"-=0.9")
    tl3.from(".bottom h1",{
        y:30,
        opacity:0,
        duration:1,
    })
    tl3.from(".bottom p",{
        x:50,
        opacity:0,
        duration:1,
    })
    tl3.from(".bottom-cards p",{
        x:50,
        opacity:0,
        duration:1,
        stagger:0.5
    })
    tl3.from(".bottom-cards h2",{
        y:-50,
        opacity:0,
        duration:1,
        stagger:0.5
    },"-=2")
}

function page4Animation(){
    let tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".section4",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top -10%",
            scrub:1
        }
    })
    tl4.from("#services h1",{
        y:40,
        opacity:0,
        duration:1,
    })
    tl4.from("#services p",{
        x:40,
        opacity:0,
        duration:1,
    })
    tl4.from(".workingProcessCards",{
        y:40,
        opacity:0,
        duration:1,
        stagger:0.3
    })
}

function page5Animation() {
    
let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:".section5",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
        scrub:1
    }
})
tl5.from(".section5 #services5 h1",{
    y:30,
    opacity:0,
    duration:1,
})
tl5.from(".section5 #services5 p",{
    x:40,
    opacity:0,
    duration:1,
})
tl5.from("form",{
    x:-40,
    opacity:0,
    duration:1,
},"contactAnim")
tl5.from(".formprt2 img",{
    x:40,
    opacity:0,
    duration:1,
},"contactAnim")
}

page1Animation();
page2Animation();
page3Animation();
page4Animation();
page5Animation();
