const phrases = [
  " Web Developer",
  " Web Designer",
  " App Designer",
  " Video Editor"
];

let index = 0;
let charIndex = 0;
let currentPhrase = '';
let isDeleting = false;
const changingText = document.getElementById("changing-text");

function typeEffect()

{
  if (index >= phrases.length) index = 0;
  currentPhrase = phrases[index];

  if (isDeleting) {
    changingText.textContent = currentPhrase.substring(0, charIndex--);
    if (charIndex < 0)
   {
      isDeleting = false;
      index++;
    }
}

else {
    changingText.textContent = currentPhrase.substring(0, charIndex++);
    if (charIndex > currentPhrase.length)
   {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // wait before deleting
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

document.addEventListener("DOMContentLoaded", typeEffect);























