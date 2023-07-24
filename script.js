document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var page = event.target.getAttribute('data-page');
        loadPage(page);
    });
});

function loadPage(page) {
    var contentDiv = document.getElementById('content');
    switch (page) {
        case 'home':
            contentDiv.innerHTML = '<h1>Willkommen bei Jena Immobilien</h1><p>Finden Sie Ihr Traumhaus in Jena.</p>';
            break;
        case 'about':
            contentDiv.innerHTML = '<h1>Über uns</h1><p>Wir sind ein führendes Immobilienunternehmen in Jena. Unser Ziel ist es, Ihnen beim Kauf, Verkauf und der Miete von Immobilien zu helfen.</p>';
            break;
        case 'listings':
            contentDiv.innerHTML = '<h1>Immobilien</h1>';
            for (var i = 0; i < 5; i++) {
                contentDiv.innerHTML += '<div class="listings-item"><h2>Immobilie ' + (i+1) + '</h2><p>Dies ist eine Beschreibung der Immobilie.</p></div>';
            }
            break;
        case 'contact':
            contentDiv.innerHTML = '<h1>Kontakt</h1><form id="contact-form"><label for="name">Name:</label><input type="text" id="name" required><label for="email">Email:</label><input type="email" id="email" required><label for="message">Nachricht:</label><textarea id="message" required></textarea><input type="submit" value="Senden"></form>';
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                alert('Formular gesendet! Aber in diesem Prototyp wird keine echte E-Mail gesendet.');
            });
            break;
        case 'privacy':
            contentDiv.innerHTML = '<h1>Datenschutzerklärung</h1><p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Alle Ihre Informationen werden vertraulich behandelt und nach den gesetzlichen Vorschriften gehandhabt.</p>';
            break;
    }
}

loadPage('home');
