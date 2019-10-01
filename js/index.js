// Your code goes here
const introImage = document.querySelector(".intro img");

introImage.addEventListener("mouseenter", () => {
  introImage.style.transform = "scale(1.2)";
  introImage.style.transition = "all 0.3s";
});
introImage.addEventListener("mouseleave", () => {
  introImage.style.transform = "scale(1.0)";
  introImage.style.transition = "all 0.3s";
});

document.querySelectorAll(".img-content").forEach(el => {
  el.addEventListener("click", (e) => {
      el.style.transform = "rotate(180deg)";
      e.stopPropagation();
  });
  el.addEventListener("auxclick", () => {
      el.style.transform = "rotate(90deg)";
  });
});

const body = document.querySelector("body");

body.addEventListener("wheel", () => {
    body.style.backgroundColor = "palegoldenrod";
});

document.querySelectorAll(".text-content h2").forEach(el => {
    el.addEventListener("mouseover", () => {
        el.style.fontWeight = "bold";
    });
    el.addEventListener("mouseout", () => {
        el.style.fontWeight = "normal";
    });
});

const destinationImg = document.querySelector(".content-destination img");

destinationImg.addEventListener("dblclick", () => {
    destinationImg.src = "https://images.unsplash.com/photo-1547744260-32aeb249977b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
});

document.querySelectorAll(".nav a").forEach(el => {
    el.addEventListener("focus", () => {
        el.style.color = "lightseagreen";
    });
});

document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });
});

body.addEventListener("click", () => {
    body.style.backgroundColor = "yellow";
});

document.querySelectorAll(".nav a").forEach(el => {
    el.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
    });
});