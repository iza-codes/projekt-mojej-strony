document.addEventListener('DOMContentLoaded', () => {
    const headerTitle = document.querySelector('header h1');
    const toggleBtn = document.getElementById('theme-toggle');

    // Klick na nagłówek
    headerTitle.addEventListener('click', () => {
        alert('Gratulacje! Właśnie uruchomiłeś swój pierwszy kod w JavaScript!');
    });

    // Dark Mode Logik
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleBtn.textContent = '☀️ Tryb Jasny';
        } else {
            toggleBtn.textContent = '🌙 Tryb Ciemny';
        }
    });

    // --- TUTAJ DOPISUJEMY NOWY KOD DLA FORMULARZA ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (event) => {
        // Powstrzymujemy domyślne przeładowanie strony po wysłaniu formularza
        event.preventDefault();

        const name = document.getElementById('name').value;

        // Symulacja wysłania formularza
        formStatus.style.color = '#2ecc71';
        formStatus.textContent = `Dziękuję, ${name}! Twoja wiadomość została pomyślnie wysłana.`;

        // Czyszczenie pól formularza
        contactForm.reset();
    });
});