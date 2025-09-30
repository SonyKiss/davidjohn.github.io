document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out, David will reply soon!");
});

document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
