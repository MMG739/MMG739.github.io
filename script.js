document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Afficher la section d'accueil par défaut
    document.getElementById('home').classList.add('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.futuristic-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const description = card.getAttribute('data-description');
            const descriptionDiv = card.querySelector('.experience-description');

            if (descriptionDiv.style.display === 'none' || !descriptionDiv.style.display) {
                descriptionDiv.textContent = description;
                descriptionDiv.style.display = 'block';
            } else {
                descriptionDiv.style.display = 'none';
            }
        });
    });
});

