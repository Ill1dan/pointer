const glow1 = document.getElementById("glow1");
const glow2 = document.getElementById("glow2");
const glow3 = document.getElementById("glow3");
const glow4 = document.getElementById("glow4");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");


card1.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    glow1.style.top = y - 15 + "px";
    glow1.style.left = x - 15 + "px";
});

card2.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    glow2.style.top = y - 15 + "px";
    glow2.style.left = x - 15 + "px";
});

card3.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    glow3.style.top = y - 15 + "px";
    glow3.style.left = x - 15 + "px";
});

card4.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    glow4.style.top = y - 15 + "px";
    glow4.style.left = x - 15 + "px";
});
