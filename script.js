document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const phrases = ["Hello! Welcome to my portfolio...", "Let's look around my projects \u{1F603}"];
    let currentPhrase = 0;
    let deleting = false;
    
    function typeWriter() {
      const phrase = phrases[currentPhrase];
      const typingSpeed = 100;
      const deletingSpeed = 50;
      const delay = deleting ? 1000 : 2000;
      
      if (deleting) {
        textElement.textContent = phrase.slice(0, textElement.textContent.length - 1);
      } else {
        textElement.textContent = phrase.slice(0, textElement.textContent.length + 1);
      }
      
      if (!deleting && textElement.textContent === phrase) {
        deleting = true;
        setTimeout(typeWriter, delay);
      } else if (deleting && textElement.textContent === "") {
        deleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typeWriter, 500);
      } else {
        setTimeout(typeWriter, deleting ? deletingSpeed : typingSpeed);
      }
    }
    
    typeWriter();
  });
  