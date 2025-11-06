// Add event listener to project boxes to make them clickable
const projectBoxes = document.querySelectorAll('.project-box');
projectBoxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});

// Add event listener to about me box to make it clickable
const aboutMeBox = document.querySelector('.about-me-box');
aboutMeBox.addEventListener('click', () => {
    aboutMeBox.classList.toggle('active');
});

// Add event listener to project details to make them clickable
const projectDetails = document.querySelectorAll('.project-details');
projectDetails.forEach(details => {
    details.addEventListener('click', () => {
        details.classList.toggle('active');
    });
});
