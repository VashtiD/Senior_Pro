// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all project boxes
    const projectBoxes = document.querySelectorAll('.project-box');

    // Add click event to toggle description visibility with smooth effect
    projectBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const description = box.querySelector('.description-box');
            if (description) {
                description.classList.toggle('collapsed');
            }
        });
    });

    // Add hover effects for project boxes
    document.querySelectorAll('.project-box').forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.02)';
            box.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            box.style.boxShadow = '4px 4px 15px rgba(0,0,0,0.2)';
        });
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)';
            box.style.boxShadow = '2px 2px 10px rgba(0,0,0,0.05)';
        });
    });

    // Animate sections on load with fade-in
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, index * 200); // stagger animation
    });

    // Optional: Animate header elements
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(() => {
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    }, 200);

    // Animate the profile icon with a subtle bounce on load
    const profileIconContainer = document.querySelector('.profile-icon-container');
    profileIconContainer.style.transform = 'scale(0)';
    profileIconContainer.style.transition = 'transform 0.5s ease-out';
    setTimeout(() => {
        profileIconContainer.style.transform = 'scale(1)';
    }, 300);
});
