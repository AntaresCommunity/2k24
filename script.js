document.addEventListener("DOMContentLoaded", function() {
    var intro = document.getElementById("intro");
    var mainContent = document.getElementById("main-content");
    var clickText = document.getElementById("click-text");
    var music = document.getElementById("music");

    // Adiciona um ouvinte de evento de clique à introdução
    intro.addEventListener("click", function() {
        // Adiciona a classe para iniciar a transição suave
        intro.classList.add("fade-out");

        // Remove a classe que oculta os perfis
        mainContent.classList.remove("hidden");

        // Toca a música
        playMusic();
    });

    // Função para tocar a música
    function playMusic() {
        music.play();
        // Altera o texto de "Clique na tela" para "Música tocando"
        clickText.textContent = "Música tocando";
    }

    // Array de textos para o título da guia
    var titles = ["ANTARES", "SEMPRE", "NO TOPO"]; // Adicione os textos desejados

    var index = 0;

    // Função para alterar o título da guia periodicamente
    setInterval(function() {
        // Altera o texto do título da guia
        document.title = titles[index];

        // Incrementa o índice ou reinicia se for o último texto
        index = (index + 1) % titles.length;
    }, 1000); // Altere esse valor para definir a velocidade de troca (em milissegundos)
});
