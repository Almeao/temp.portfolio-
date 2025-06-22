const scroll = new LocomotiveScroll({
  el: document.querySelector(".container"),
  smooth: true,
});

// ...existing code...

// Sync Locomotive Scroll with GSAP ScrollTrigger
ScrollTrigger.scrollerProxy(".container", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things differently on mobile
  pinType: document.querySelector(".container").style.transform
    ? "transform"
    : "fixed",
});

// Each time Locomotive Scroll updates, tell ScrollTrigger to update too
scroll.on("scroll", ScrollTrigger.update);

// Refresh ScrollTrigger and update LocomotiveScroll on window update
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();
// ...existing code...

var tl = gsap.timeline();

var typed = new Typed(".lodder span", {
  strings: [
    "System.out.println",
    "console.log",
    "print",
    "Console.WriteLine",
    "printf",
  ],
  typeSpeed: 15,
  backSpeed: 15,
  loop: false,
});
tl.to(".lodder", {
  y: "-100%",
  opacity: 0,
  duration: 1,
  delay: 6,
  scrub: 2,
});

var tl = gsap.timeline();

var typed = new Typed(".lodder span", {
  strings: [
    "System.out.println",
    "console.log",
    "print",
    "Console.WriteLine",
    "printf",
  ],
  typeSpeed: 15,
  backSpeed: 15,
  loop: false,
});
tl.to(".lodder", {
  y: "-100%",
  opacity: 0,
  duration: 1,
  delay: 6,
  scrub: 2,
});

tl.from(".nav_content", {
  x: 2000,
  opacity: 0,
  duration: 1,
});
tl.from(".nav_left img", {
  opacity: 0,
  duration: 0.3,
});
tl.from(".nav_right  .nav_btn_hireme", {
  right: -1000,
  duration: 0.5,
  stagger: 0.1,
});
tl.from(".nav_right  .nav_btn_a", {
  right: -1000,
  duration: 0.5,
  stagger: 0.1,
});
function brack_the_text() {
  var h1 = document.querySelector(".page1_part1 h1");
  var text = h1.textContent;
  var splittedtext = text.split("");
  var clutter = "";
  splittedtext.forEach(function (temp) {
    if (temp === " ") {
      clutter += " "; // leave space as is
    } else {
      clutter += `<span class="a">${temp}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
brack_the_text();
tl.from(
  ".a",
  {
    y: 300,
    duration: 0.1,
    opacity: 0,
    stagger: 0.1,
    scrub: 2,
  },
  "page1"
);
tl.from(
  ".page1_part2 img",
  {
    opacity: 0,
    duration: 2,
  },
  "page1"
);

function autotype() {
  var typed = new Typed(".page1_part1 h2 span", {
    strings: [
      "building responsive websites.",
      "designing beautiful user interfaces.",
      "bringing designs to life with code.",
      "making the web interactive.",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
}
autotype();
tl.from(
  ".page1_part1 h2",
  {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  },
  "page1"
);

function brack_the_text_page2_h1() {
  var h1 = document.querySelector(".page2 h1");
  var text = h1.textContent;
  var splittedtext = text.split("");
  var clutter = "";
  splittedtext.forEach(function (temp) {
    if (temp === " ") {
      clutter += " "; // leave space as is
    } else {
      clutter += `<span class="a">${temp}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
brack_the_text_page2_h1();

gsap.from(".page2 h1 span", {
  y: 500,
  duration: 0.1,
  opacity: 0,
  stagger: 0.2,
  scrub: 2,
  scrollTrigger: {
    trigger: ".page2",
    start: "-10% 70%",
    end: "-10% 70%",

    stagger: 0.3,
    scroller: ".container",
    scrub: 1,
  },
});

function brack_the_text_page2_data() {
  document.querySelectorAll(".page2_data_right p").forEach(function (p) {
    var text = p.textContent;
    var splittedtext = text.split("");
    var clutter = "";
    splittedtext.forEach(function (temp) {
      if (temp === " ") {
        clutter += " ";
      } else {
        clutter += `<span class="b">${temp}</span>`;
      }
    });
    p.innerHTML = clutter;
  });
}
brack_the_text_page2_data();

gsap.from(
  ".page2_data_right .b",
  {
    scale: 3,
    opacity: 0,
    duration: 0.3,
    stagger: 0.02,
    scrollTrigger: {
      trigger: ".page2_data_right",
      start: "-10% 90%",
      end: "top 50%",
      scroller: ".container",
      scrub: 1,
    },
  },
  "page2_data"
);

var page2gsap = gsap.timeline();

page2gsap.from(".page2_data_left img", {
  scale: 0,
  opacity: 0,
  duration: 10,
  delay: 5,
  stagger: 5,
  scrollTrigger: {
    trigger: ".page2_data_left",
    start: "20% 90%",
    end: "top 50%",

    scroller: ".container",
    scrub: 5,
  },
});

page2gsap.from(".page2_data_left", {
  scale: 1.5,
  opacity: 0,
  duration: 3,
  delay: 4,
  stagger: 5,
  scrollTrigger: {
    trigger: ".page2_data_left",
    start: "50% 90%",
    end: "top 50%",

    scroller: ".container",
    scrub: 5,
  },
});

function brack_the_text_page3_h1() {
  var h1 = document.querySelector(".page3 h1");
  var text = h1.textContent;
  var splittedtext = text.split("");
  var clutter = "";
  splittedtext.forEach(function (temp) {
    if (temp === " ") {
      clutter += " "; // leave space as is
    } else {
      clutter += `<span class="a">${temp}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
brack_the_text_page3_h1();

gsap.from(".page3 h1 span", {
  y: 500,
  duration: 0.1,
  opacity: 0,
  stagger: 0.2,
  scrub: 2,
  scrollTrigger: {
    trigger: ".page3",
    start: "-10% 70%",
    end: "-10% 70%",

    stagger: 0.3,
    scroller: ".container",
    scrub: 1,
  },
});

function brack_the_text_page3_h5() {
  var h1 = document.querySelector(".page3 h5");
  var text = h1.textContent;
  var splittedtext = text.split("");
  var clutter = "";
  splittedtext.forEach(function (temp) {
    if (temp === " ") {
      clutter += " "; // leave space as is
    } else {
      clutter += `<span class="c">${temp}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
brack_the_text_page3_h5();

gsap.from(".page3 h5 span", {
  x: 1000,
  duration: 2,
  opacity: 0,
  stagger: 0.2,
  scrub: 5,
  scrollTrigger: {
    trigger: ".page3",
    start: "-10% 70%",
    end: "-10% 70%",

    stagger: 0.3,
    scroller: ".container",
    scrub: 5,
  },
});

var page3gsap = gsap.timeline();
page3gsap.from(".page3_data_img", {
  scale: 3,
  duration: 5,
  delay: 5,
  opacity: 0,
  stagger: 0.3,
  scrub: 5,
  scrollTrigger: {
    trigger: ".page3",
    start: "top 100%",
    end: "top 60%",

    stagger: 0.3,
    scroller: ".container",
    scrub: 5,
  },
});

page3gsap.from(".progress-bar", {
  x: -1000,

  duration: 5,
  delay: 5,

  stagger: 0.1,
  scrub: 5,
  scrollTrigger: {
    trigger: ".page3",
    start: "40% 100%",
    end: "top 80%",

    stagger: 0.1,
    scroller: ".container",
    scrub: 5,
  },
});

function brack_the_text_page4_h1() {
  var h1 = document.querySelector(".page4 h1");
  var text = h1.textContent;
  var splittedtext = text.split("");
  var clutter = "";
  splittedtext.forEach(function (temp) {
    if (temp === " ") {
      clutter += " "; // leave space as is
    } else {
      clutter += `<span class="a">${temp}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
brack_the_text_page4_h1();

gsap.from(".page4 h1 span", {
  y: 500,
  duration: 0.1,
  opacity: 0,
  stagger: 0.2,
  scrub: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "-10% 70%",
    end: "-10% 70%",

    stagger: 0.3,
    scroller: ".container",
    scrub: 1,
  },
});
var page4 = gsap.timeline();

page4.from(".page4_data_3", {
  y: 500,
  duration: 0.1,
  opacity: 0,
  stagger: 0.3,
  scrub: 5,
  scrollTrigger: {
    trigger: ".page4",
    start: "30% 100%",
    end: "top 70%",

    stagger: 0.5,
    scroller: ".container",
    scrub: 3,
  },
});

function brack_the_text_page5_h1() {
  var h1 = document.querySelector(".page5 h1");
  var text = h1.textContent;
  var splittedtext = text.split("");
  var clutter = "";
  splittedtext.forEach(function (temp) {
    if (temp === " ") {
      clutter += " "; // leave space as is
    } else {
      clutter += `<span class="a">${temp}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
brack_the_text_page5_h1();

var page5gsap = gsap.timeline({
  scrollTrigger: {
    trigger: ".page5",
    start: "top 80%",
    end: "70% 70%",
    scroller: ".container", // if using Locomotive Scroll
    scrub: 5,
    stagger: 0.3,
  },
});
page5gsap.from(".page5 h1 span", {
  y: 500,
  duration: 5,
  opacity: 0,
  stagger: 0.3,
  scrub: 5,
});

page5gsap.from(".page5_data_2_line_2", {
  y: -700,
  duration: 2,
  delay: 5,
  stagger: 5,
  scrub: 5,
});
page5gsap.from(".page5_data_2_box_1", {
  opacity: 0,
  duration: 2,
  delay: 5,
  stagger: 5,
  scrub: 5,
});

page5gsap.from(".page5_data_1_line", {
  x: 500,
  duration: 2,
  delay: 5,
  stagger: 5,
  scrub: 5,
});
page5gsap.from(".page5_data_1_box", {
  x: 500,
  duration: 2,
  delay: 5,
  stagger: 5,
  scrub: 5,
});

page5gsap.from(".page5_data_2_line_3", {
  y: -500,
  duration: 2,
  delay: 5,
  stagger: 5,
  scrub: 5,
});

page5gsap.from(".page5_data_2_box_2", {
  opacity: 0,
  duration: 2,
  delay: 5,
  stagger: 5,
  scrub: 5,
});
page5gsap.from(".page5_data_3_line", {
  x: -500,
  duration: 2,
  delay: 5,
  stagger: 5,
  scrub: 5,
});
page5gsap.from(".page5_data_3_box", {
  x: -500,
  duration: 2,
  delay: 5,
  stagger: 5,
  scrub: 5,
});
page5gsap.from(".page5_data_2_line_4", {
  y: -1000,
  duration: 2,
  delay: 5,
  stagger: 5,
  scrub: 5,
});

var page6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page6",
    start: "top 80%",
    end: "top 75%",
    
    scroller: ".container", // if using Locomotive Scroll
    scrub: 3,
  },
});

function brack_the_text_page6_h1() {
  var h1 = document.querySelector(".page6 h1");
  var text = h1.textContent;
  var splittedtext = text.split("");
  var clutter = "";
  splittedtext.forEach(function (temp) {
    if (temp === " ") {
      clutter += " "; // leave space as is
    } else {
      clutter += `<span class="a">${temp}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
brack_the_text_page6_h1();

page6.from(".page6 h1 span", {
  y: 500,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  scrub: 5,
});

page6.from(".page6_data_part_1", {
  y: 500,
  duration: 0.1,
  opacity: 0,
  scrub: 5,
});

const box = document.querySelector(".page6_data_part_1");

box.addEventListener("mouseenter", function () {
  gsap.to(box, {
    height: "100%",
    scale:1.1,
    duration: 5,
     scrub:5,
    ease: "back.out(1.7)",
    });
});

box.addEventListener("mouselive", function () {
  gsap.to(box, {
    height: "0vh",
     scale:0,
    duration: 5,
    scrub:5,
    ease: "back.out(1.7)",
    });
});







var page7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page7",
    start: "top 100%",
    end: "top 30%",
    scroller: ".container", // if using Locomotive Scroll
    scrub: 1,
  },
});

function brack_the_text_page7_h1() {
  var h1 = document.querySelector(".page7 h1");
  var text = h1.textContent;
  var splittedtext = text.split("");
  var clutter = "";
  splittedtext.forEach(function (temp) {
    if (temp === " ") {
      clutter += " "; // leave space as is
    } else {
      clutter += `<span class="a">${temp}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
brack_the_text_page7_h1();

page7.from(".page7 h1 span", {
  y: 500,
  duration: 2,
  opacity: 0,
  stagger: 0.3,
  scrub: 5,
});



page7.from(".page7_data1", {
    x:1000,
   
  duration: 2,
  opacity: 0,
   stagger: 5,
    ease: "back.out(1)",
  scrub: 2,
},"page7"
);

page7.from(".page7_data2", {
    x:-1000,
   
  duration: 2,
  opacity: 0,
   stagger: 5,
    ease: "back.out(1)",
  scrub: 2,
},"page7"
);













var page8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page7",
    start: "top 100%",
    end: "top 30%",
    scroller: ".container", // if using Locomotive Scroll
    scrub: 1,
  },
});



var typedpage8 = new Typed(".page8 h1", {
  strings: [
    "Jainish Solanki",
  
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});