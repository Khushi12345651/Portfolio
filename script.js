// Dark Mode Switch
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Toggle icon
  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Set footer year
document.getElementById("year").textContent = new Date().getFullYear();
