document.getElementById('languageSelector').addEventListener('change', function() {
    var selectedLanguage = this.value;
    var contentElement = document.getElementById('content');

    if (selectedLanguage === 'en') {
        contentElement.textContent = 'English Content';
    } else if (selectedLanguage === 'es') {
        contentElement.textContent = 'Contenido en Español';
    } else if (selectedLanguage === 'fr') {
        contentElement.textContent = 'Contenu en Français';
    }
    // Adicione casos para outros idiomas, se necessário
});

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
