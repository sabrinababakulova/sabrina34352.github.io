//saving what mode was applied(dark or light)

var themeMode = localStorage.getItem("theme");
var MoonAndSun = localStorage.getItem("mOrs");

if (themeMode == null || MoonAndSun == null) {
    themeMode = "darkmode.css";
    MoonAndSun = night.getAttribute('href');
    console.log("hi bitch");
}

mode.setAttribute('href', themeMode);
DayAndNight.setAttribute("src", MoonAndSun);

theme.onclick = function () {

    if (themeMode == "style.css") {
        mode.setAttribute('href', 'darkmode.css');
        document.querySelector("#DayAndNight").style.transform = "rotate(90deg)";
        document.querySelector("#DayAndNight").style.transition = "all 0.6s ease";
        DayAndNight.setAttribute('src', night.getAttribute('href'));

    } else {
        mode.setAttribute('href', 'style.css');
        document.querySelector("#DayAndNight").style.transform = "rotate(-90deg)";
        document.querySelector("#DayAndNight").style.transition = "all 0.6s ease";
        DayAndNight.setAttribute('src', day.getAttribute('href'));
    }

    localStorage.setItem("theme", mode.getAttribute('href'));
    themeMode = localStorage.getItem("theme");

    localStorage.setItem("mOrs", DayAndNight.getAttribute("src"));
    MoonAndSun = localStorage.getItem("mOrs");
}


//extra menu for mobile phones

var Clicked = true;

var holderForMenu = document.createElement("a");
holderForMenu.id = "MenuButton";
holderForMenu.innerHTML = "=";

function MenuDropping() {
    if (Clicked) {

        menu.style.display = "block";
        wrapper2.style.filter = "blur(4px)"
        menu.style.animation = "MenuDropping 0.5s ease"
        Clicked = false;
    } else {
        menu.style.animation = "MenuGettingBack 0.5s ease";
        setTimeout(() => {
            menu.style.display = "none";
        }, 300)
        wrapper2.style.filter = "none";
        Clicked = true;
    }
}

function HidingItems() {
    document.querySelector("#home").style.display = "none";
    document.querySelector("#about").style.display = "none";
    document.querySelector("#projects").style.display = "none";
}

if (window.innerWidth < 769) {
    shit.append(holderForMenu);
    HidingItems()

    var theMenuButton = document.getElementById("MenuButton");

    theMenuButton.onclick = MenuDropping;

}

window.onresize = function () {

    if (window.innerWidth < 769) {
        shit.append(holderForMenu);
        HidingItems();
        document.querySelector("#MenuButton").style.display = "block";
        MenuButton.onclick = MenuDropping;

    } else {
        document.querySelector("#home").style.display = "block";
        document.querySelector("#about").style.display = "block";
        document.querySelector("#projects").style.display = "block";
        document.querySelector("#MenuButton").style.display = "none";

    }

}

//particles at the back lol
const canvas = document.getElementById("canvas1");
console.log(canvas);
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

function Particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
}
Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}

Particle.prototype.update = function () {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
}

function init() {
    particleArray = [];
    for (let i = 0; i < 150; i++) {
        let size = Math.random() * 5;
        if (window.innerWidth < 769) {
            size = Math.random() * 3;

        }
        let x = Math.random() * (innerWidth - size * 2);
        let y = Math.random() * (innerHeight - size * 2);
        let directionX = (Math.random() * .4) - .2;
        let directionY = (Math.random() * .4) - .2;
        let color = "white";
        particleArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
}
init();
animate();

window.addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

//adding my signature to the footer last second
var signature = document.createElement("p");
signature.innerHTML = "© sabrina babakulova";
signature.id = "sign";
footerID.append(signature);

//if scrolled make menu blurred

window.onscroll = function (e) {
    if (window.scrollY >= 60) {
        shit.style.backdropFilter = "invert() blur(10px)";


    } else {

        shit.style.backdropFilter = "invert()";
    }

}

//scrolling to the csplans if STUFFIMADE is clicked