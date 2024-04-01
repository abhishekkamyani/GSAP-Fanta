gsap.registerPlugin(ScrollTrigger);

var t1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 95%",
        end: "50% 50%",
        scrub: true,
        // markers: true
    }
})

t1.to("#fanta", {
    top: "160%",
    left: "-32%"
}, "orange")

t1.to("#orange-cut", {
    top: "200%",
    left: "10%"
}, "orange")

t1.to("#leaf1", {
    top: "130%",
    left: "85%",
    rotation: "150"
}, "orange")

t1.to("#leaf2", {
    bottom: "-100%",
    right: "80%",
    rotation: "-200"
}, "orange")

t1.to("#orange", {
    bottom: "-170%",
    left: "115%",
}, "orange")



const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section-3",
        start: "top 85%",
        end: "40% 50%",
        scrub: true,
        // markers: true
    }
})

t2.to("#fanta", {
    top: "270%",
    left: "17%",
}, "ca")

t2.to("#orange-cut", {
    top: "260%",
    left: "34%",
    rotation: "360"
}, "ca")

t2.from(["#coca"], {
    top: "52%",
    left: "-20%",
    rotation: "-20"
}, "ca")

t2.from("#orange-cut-coca", {
    top: "12%",
    left: "-20%%",
    rotation: "180"
}, "ca")

t2.from(["#pepsi"], {
    top: "52%",
    right: "-20%",
    rotation: "-20"
}, "ca")

t2.from("#orange-cut-pepsi", {
    top: "12%",
    right: "-20%%",
    rotation: "180"
}, "ca")