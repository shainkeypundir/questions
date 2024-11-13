// Select all the buttons in the questions
const buttons = document.querySelectorAll('.answer');

// Loop through each button and add a click event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Find the sibling question text (the next element)
    const questionTxt = button.parentElement.nextElementSibling;
    
    // Toggle the visibility of the answer
    if (questionTxt.style.display === 'block') {
      questionTxt.style.display = 'none';
    } else {
      questionTxt.style.display = 'block';
    }

    // Toggle the icon (plus/minus)
    const icon = button.querySelector('i');
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
  });
});
