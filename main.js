    const btn = document.getElementById('customDropdownBtn');
    const menu = document.getElementById('customDropdownMenu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('show');
      btn.innerHTML = menu.classList.contains('show') ? 'Dropdown ▲' : 'Dropdown ▼';
    });


let upBtn = document.getElementById("upBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
});

upBtn.addEventListener("click", function (e) {
  e.preventDefault(); // علشان نمنع السلوك الافتراضي للـ <a>
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
