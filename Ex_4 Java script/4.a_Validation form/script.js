const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  // Name validation
  const name = document.getElementById('fullName');
  const nameError = document.getElementById('nameError');
  if (!/^[a-zA-Z\s]+$/.test(name.value)) {
    nameError.textContent = 'Name must contain only alphabets.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.textContent = 'Invalid email address.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Phone validation
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  if (!/^\d{10}$/.test(phone.value)) {
    phoneError.textContent = 'Phone number must be 10 digits.';
    isValid = false;
  } else {
    phoneError.textContent = '';
  }

  // Interest validation
  const interest = document.getElementById('interest');
  const interestError = document.getElementById('interestError');
  if (!interest.value) {
    interestError.textContent = 'Please select an area of interest.';
    isValid = false;
  } else {
    interestError.textContent = '';
  }

  // File validation
  const file = document.getElementById('fileUpload');
  const fileError = document.getElementById('fileError');
  if (!file.value) {
    fileError.textContent = 'Please upload your work.';
    isValid = false;
  } else {
    fileError.textContent = '';
  }

  // Motivation validation
  const motivation = document.getElementById('motivation');
  const motivationError = document.getElementById('motivationError');
  const words = motivation.value.trim().split(/\s+/);
  if (words.length > 200) {
    motivationError.textContent = 'Please limit your answer to 200 words.';
    isValid = false;
  } else {
    motivationError.textContent = '';
  }

  if (isValid) {
    alert('Form submitted successfully!');
  }
});
