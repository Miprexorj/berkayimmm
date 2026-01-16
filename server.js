/**********************
 * CONFETTI
 **********************/
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];

for (let i = 0; i < 150; i++) {
    confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360},100%,70%)`
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });
    updateConfetti();
}

function updateConfetti() {
    confettiPieces.forEach(p => {
        p.y += p.d;
        if (p.y > canvas.height) {
            p.y = 0;
            p.x = Math.random() * canvas.width;
        }
    });
}

setInterval(drawConfetti, 20);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

/**********************
 * COUNTDOWN
 **********************/
// 👉 BURAYA DOĞUM GÜNÜ TARİHİNİ YAZ
const birthday = new Date("2026-02-01 00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const diff = birthday - now;

    if (diff < 0) {
        countdownEl.innerHTML = "🎂 Doğum Günün Kutlu Olsun!";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdownEl.innerHTML = `
        <strong>${d}</strong> gün 
        <strong>${h}</strong> saat 
        <strong>${m}</strong> dk 
        <strong>${s}</strong> sn
    `;
}, 1000);

/**********************
 * TYPEWRITER
 **********************/
const text = "Berkayim, iyi ki varsın. Nice zorlukları beraber aştık, daha nicelerini de aşacağız. Dostluğun her şeye değer 🤍";
const typeEl = document.getElementById("typewriter-text");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typeEl.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

/**********************
 * MODAL
 **********************/
const modal = document.getElementById("modal");
const btn = document.getElementById("surprise-btn");
const closeBtn = document.querySelector(".close-btn");

btn.onclick = () => modal.classList.remove("hidden");
closeBtn.onclick = () => modal.classList.add("hidden");

window.onclick = e => {
    if (e.target === modal) modal.classList.add("hidden");
};

/**********************
 * MUSIC
 **********************/
const music = new Audio("music.mp3"); // mp3 dosyanı ekle
music.loop = true;

const playBtn = document.getElementById("play-music");
let playing = false;

playBtn.addEventListener("click", () => {
    if (!playing) {
        music.play();
        playing = true;
    } else {
        music.pause();
        playing = false;
    }
});
