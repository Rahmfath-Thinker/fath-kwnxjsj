const btn = document.getElementById("playBtn");
const audio = document.getElementById("bgm");
const profile = document.getElementById("profile");

// klik tombol play
btn.addEventListener("click", async () => {
  try {
    await audio.play();
    
    btn.style.display = "none"; // tombol hilang
    profile.style.animation = "spin 18s linear infinite";
    
  } catch (err) {
    console.log("Audio gagal diputar:", err);
  }
});

// stop audio saat klik medsos
const links = document.querySelectorAll(".btn");

links.forEach(link => {
  link.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
  });
});