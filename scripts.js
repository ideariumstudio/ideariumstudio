// Script para animação do header, animação das seções, etc.
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  
  sections.forEach(section => {
    section.classList.add("animate__animated", "animate__fadeInUp");
  });
});
