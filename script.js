document.addEventListener("DOMContentLoaded", function () {
  // Button Click Event
  const clickBtn = document.getElementById("click-btn");
  const clickText = document.getElementById("click-text");

  clickBtn.addEventListener("click", function () {
    clickText.textContent = "You clicked the button! Magic! ✨";
    clickText.style.color = "#e74c3c";
    clickText.style.fontWeight = "bold";
  });

  // Hover Effect
  const hoverBox = document.getElementById("hover-box");

  hoverBox.addEventListener("mouseenter", function () {
    this.textContent = "You're hovering! Nice!";
  });

  hoverBox.addEventListener("mouseleave", function () {
    this.textContent = "Hover over me!";
  });

  // Keypress Detection
  const keypressInput = document.getElementById("keypress-input");
  const keypressOutput = document.getElementById("keypress-output");

  keypressInput.addEventListener("keyup", function (e) {
    keypressOutput.textContent = `Last key pressed: ${e.key} (Key code: ${e.keyCode})`;
  });

  // Secret Double Click Action
  const secretBox = document.getElementById("secret-box");

  secretBox.addEventListener("dblclick", function () {
    this.textContent = "You found the secret! 🎉";
    this.classList.add("secret-activated");

    setTimeout(() => {
      this.classList.remove("secret-activated");
      this.textContent = "Double click me for a surprise!";
    }, 2000);
  });

  // Image Gallery
  const galleryImages = document.querySelectorAll(".gallery-img");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let currentIndex = 0;

  function showImage(index) {
    galleryImages.forEach((img) => img.classList.remove("active"));
    galleryImages[index].classList.add("active");
  }

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
  });

  prevBtn.addEventListener("click", function () {
    currentIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
  });

  // Auto-rotate gallery every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
  }, 3000);

  // Accordion
  const accordionBtns = document.querySelectorAll(".accordion-btn");

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const accordionItem = this.parentElement;
      accordionItem.classList.toggle("active");
    });
  });

  // Form Validation
  const signupForm = document.getElementById("signup-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const formSuccess = document.getElementById("form-success");

  // Real-time password validation
  passwordInput.addEventListener("input", function () {
    const password = this.value;
    const lengthValid = password.length >= 8;
    const numberValid = /\d/.test(password);
    const specialValid = /[!@#$%^&*]/.test(password);

    document
      .getElementById("length-rule")
      .classList.toggle("valid", lengthValid);
    document
      .getElementById("number-rule")
      .classList.toggle("valid", numberValid);
    document
      .getElementById("special-rule")
      .classList.toggle("valid", specialValid);
  });

  // Form submission
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required";
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    // Password validation
    if (passwordInput.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters";
      passwordError.style.display = "block";
      isValid = false;
    } else {
      passwordError.style.display = "none";
    }

    // If form is valid
    if (isValid) {
      formSuccess.textContent = "Form submitted successfully!";
      formSuccess.style.display = "block";
      signupForm.reset();

      setTimeout(() => {
        formSuccess.style.display = "none";
      }, 3000);
    }
  });
});
