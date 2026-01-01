document.getElementById("startBtn").addEventListener("click", () => {

  const btn = document.getElementById("startBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      document.getElementById("loading").classList.add("active");

      setTimeout(() => {
        document.getElementById("intro").classList.add("hide");
        document.getElementById("loading").classList.remove("active");
      }, 2500);
    });
  }
});

setTimeout(() => {
    document.getElementById("intro").classList.add("hide");
    document.getElementById("loading").classList.remove("active");
    showSection('beranda');
}, 2500);

