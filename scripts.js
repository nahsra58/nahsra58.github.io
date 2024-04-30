document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to highlight navigation links as active when scrolling
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            if (
                section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                document.querySelectorAll('nav ul li a').forEach(a => {
                    a.classList.remove('active');
                    if (section.getAttribute('id') === a.getAttribute('href').substring(1)) {
                        a.classList.add('active');
                    }
                });
            }
        });
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#0056b3';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#007bff';
        });
    });
});
