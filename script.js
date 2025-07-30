const cover = document.getElementById("cover");
const book = document.getElementById("book");
const toPhotoBtn = document.getElementById("toPhotoBtn");

let currentStep = 0;

// Membuka halaman pertama (isi cerita)
cover.addEventListener("click", () => {
  if (currentStep === 0) {
    book.classList.add("open");
    currentStep = 1;
  }
});

// Ke halaman foto 1
toPhotoBtn.addEventListener("click", () => {
  if (currentStep === 1) {
    book.classList.add("show-photo-1");
    currentStep = 2;

    // Tampilkan efek bunga dan love setelah transisi halaman
    setTimeout(() => {
      spawnFallingElements();
    }, 500);
  }
});


// Halaman ke-3
document.getElementById("page3").addEventListener("click", () => {
  if (currentStep === 2) {
    book.classList.add("show-photo-2");
    currentStep = 3;
    setTimeout(() => {
      launchBalloons();
    }, 1000);
  }
});

// Halaman ke-4
document.getElementById("page4").addEventListener("click", () => {
  if (currentStep === 3) {
    book.classList.add("show-photo-3");
    currentStep = 4;
    launchBalloons();
  }
});

// Halaman ke-5
document.getElementById("page5").addEventListener("click", () => {
  if (currentStep === 4) {
    book.classList.add("show-photo-4");
    currentStep = 5;
  }
});

// Halaman ke-6 — tombol reset (balik ke awal)
document.getElementById("page6").addEventListener("click", () => {
  if (currentStep === 5) {
    resetBook();
  }
});


function resetBook() {
  // Hapus semua class transisi halaman
  book.classList.remove("show-photo-1", "show-photo-2", "show-photo-3", "show-photo-4", "open");

  // Tambahkan class "closing" agar cover animasi balik
  book.classList.add("closing");

  // Setelah animasi cover selesai, reset sepenuhnya
  setTimeout(() => {
    book.classList.remove("closing");
    currentStep = 0;
  }, 1000); // harus sesuai dengan durasi animasi CSS (1s)
}


function createFlower() {
  const container = document.getElementById("fallingContainer");
  const flower = document.createElement("div");
  flower.className = "falling";
  flower.innerHTML = "🌸";

  flower.style.left = Math.random() * 100 + "%";
  flower.style.fontSize = (Math.random() * 10 + 20) + "px";
  flower.style.animationDuration = (Math.random() * 1.5 + 2.5) + "s"; // 2.5s - 4s
  flower.style.opacity = Math.random();

  container.appendChild(flower);

  setTimeout(() => {
    container.removeChild(flower);
  }, 4000);
}

function startFlowerEffect3Seconds() {
  const interval = setInterval(() => {
    for (let i = 0; i < 8; i++) {
      setTimeout(createFlower, i * 100);
    }
  }, 800);

  // Stop efek setelah 3 detik
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
}
document.getElementById("toPhotoBtn").addEventListener("click", function () {
  startFlowerEffect3Seconds();
  document.querySelector(".book").classList.add("show-photo-1"); // Ganti halaman
});








