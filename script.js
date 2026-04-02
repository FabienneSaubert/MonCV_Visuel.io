let toggle = document.getElementById("btnSombre");
let body = document.body;

// Appliquer le thème système au chargement
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.add("dark-mode");
  toggle.checked = true;
} else {
  body.classList.remove("dark-mode");
  toggle.checked = false;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
