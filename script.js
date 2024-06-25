let previousSectionIndex = 0;

function navigateToSection(sectionId) {
    const container = document.getElementById('container');
    const section = document.getElementById(sectionId);
    const sectionIndex = Array.from(container.children).indexOf(section);
    const translateX = sectionIndex * -20;

    container.style.transform = `translateX(${translateX}%)`;

    const navLinks = document.querySelectorAll('nav ul li');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`nav ul li:nth-child(${sectionIndex + 1})`);
    activeLink.classList.add('active');

    const image = document.getElementById('main');
    switch (sectionId) {
        case 'task1':
            image.src = 'image1.png';
            break;
        case 'task2':
            image.src = 'image2.jpg';
            break;
        case 'task3':
            image.src = 'image3.jpg';
            break;
        case 'task4':
            image.src = 'image4.jpg';
            break;
        case 'task5':
            image.src = 'image5.jpg';
            break;
        default:
            image.src = 'default.png';
    }
}

window.addEventListener('load', () => {
    navigateToSection('task1');
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollX;

    sections.forEach((section, index) => {
        const sectionLeft = section.offsetLeft;
        const sectionWidth = section.clientWidth;

        if (scrollPosition >= sectionLeft && scrollPosition < sectionLeft + sectionWidth) {
            const navLinks = document.querySelectorAll('nav ul li');
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`nav ul li:nth-child(${index + 1})`);
            activeLink.classList.add('active');
        }
    });
});
