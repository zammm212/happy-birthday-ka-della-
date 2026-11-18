
/* PASSWORD TANGGAL LAHIR */

const birthdayPassword = "18112002";


/* UNLOCK */

function unlock() {
    const input = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (input === birthdayPassword) {
      playMusic();
        error.textContent = "";

        document.querySelector(".lock-circle").classList.add("unlocked");

        setTimeout(() => {
            goTo(2);
            createPetals();
        }, 500);

    } else {
        error.textContent = "Password salah, coba lagi ♡";

        const card = document.querySelector(".password-card");
        card.classList.remove("shake");

        void card.offsetWidth;
        card.classList.add("shake");
    }
}


/* NAVIGASI HALAMAN */

function goTo(number) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById("page" + number);

    if (target) {
        target.classList.add("active");
    }

    createPetals();
}


/* ENTER UNTUK UNLOCK */

document.getElementById("password").addEventListener("keydown", event => {
    if (event.key === "Enter") {
        unlock();
    }
});


/* ANIMASI BINTANG */

const stars = document.getElementById("stars");

for (let i = 0; i < 35; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.textContent = Math.random() > .5 ? "✦" : "·";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = (Math.random() * 12 + 5) + "px";
    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);
}


/* ANIMASI KELOPAK BUNGA */

function createPetals() {
    const container = document.getElementById("petals");

    for (let i = 0; i < 7; i++) {
        const petal = document.createElement("span");

        petal.className = "petal";
        petal.textContent = ["✿", "❀", "♡", "✧"][Math.floor(Math.random() * 4)];

        petal.style.left = Math.random() * 100 + "%";
        petal.style.fontSize = (Math.random() * 17 + 12) + "px";
        petal.style.animationDuration = (Math.random() * 5 + 5) + "s";

        container.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 11000);
    }
}


/* PARTIKEL BUNGA BERULANG */

setInterval(() => {
    createPetals();
}, 2500);


/* EFEK SHAKE PASSWORD */

const shakeStyle = document.createElement("style");

shakeStyle.textContent = `
.shake {
    animation: shake .35s ease;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-7px); }
    75% { transform: translateX(7px); }
}

.unlocked {
    animation: unlockEffect .6s forwards;
}

@keyframes unlockEffect {
    to {
        transform: scale(1.3) rotate(20deg);
        opacity: 0;
    }
}
`;

document.head.appendChild(shakeStyle);


/* MULAI ANIMASI */

createPetals();

function playMusic() {
    const music = document.getElementById("bgMusic");

    music.volume = 0.5;
    music.play().catch(error => {
        console.log("Musik gagal diputar:", error);
    });
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicToggle");

    if (music.paused) {
        music.play();
        button.textContent = "♫ MUSIC ON";
    } else {
        music.pause();
        button.textContent = "♫ MUSIC OFF";
    }
}