var menuIcon=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value;
        if (query.trim() !== '') {
            // Direct to YouTube search with the query
            window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        }
    });

    // Speech recognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
        const voiceText = event.results[0][0].transcript;
        searchInput.value = voiceText;
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };

    searchInput.addEventListener('focus', () => {
        recognition.start();
    });

    searchInput.addEventListener('blur', () => {
        recognition.stop();
    });
});