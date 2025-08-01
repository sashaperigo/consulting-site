// load.js
document.addEventListener("DOMContentLoaded", () => {
  fetch('header.html') // relative path
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-include').innerHTML = html;
    })
    .catch(err => console.error('Header load failed:', err));

  fetch('footer.html') // relative path
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer-include').innerHTML = html;
    })
    .catch(err => console.error('Footer load failed:', err));
});