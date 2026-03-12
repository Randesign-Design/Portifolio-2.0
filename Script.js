// Script para reproduzir vídeo quando o mouse está sobre ele
// e pausar quando o mouse sai da área do vídeo

// Função para configurar o controle de hover em um vídeo específico
function setupVideoHover(videoElement) {
    if (!videoElement || videoElement.tagName !== 'VIDEO') 
        {
        console.error('Elemento de vídeo inválido');
        return;
    }

    videoElement.playbackRate = 1;

    // Event listener para quando o mouse entra na área do vídeo
        videoElement.addEventListener('mouseenter', () => {
        if (videoElement.paused) {
            videoElement.play().catch(() => {});
        }
    });

    // Event listener para quando o mouse sai da área do vídeo
    videoElement.addEventListener('mouseleave', function() {
        // Pausa o vídeo quando o mouse sai
       videoElement.addEventListener('mouseleave', function () {
    videoElement.pause();
    videoElement.currentTime = 0; // opcional
});
    });
}

// Função para aplicar o comportamento a todos os vídeos da página
function setupAllVideosHover() {
    // Seleciona todos os elementos de vídeo na página
    const videos = document.querySelectorAll('video');
    
    // Aplica o comportamento de hover a cada vídeo
    videos.forEach(function(video) {
        setupVideoHover(video);
    });
}

// Aguarda o DOM estar completamente carregado antes de executar
document.addEventListener('DOMContentLoaded', function() {
    setupAllVideosHover();
});

// Função para aplicar o comportamento a um vídeo específico por ID
function setupVideoHoverById(videoId) {
    const video = document.getElementById(videoId);
    if (video) {
        setupVideoHover(video);
    } else {
        console.error('Vídeo com ID "' + videoId + '" não encontrado');
    }
}

// Função para aplicar o comportamento a vídeos por classe CSS
function setupVideoHoverByClass(className) {
    const videos = document.querySelectorAll('.' + className);
    videos.forEach(function(video) {
        setupVideoHover(video);
    });
}

// Exporta as funções para uso global
window.setupVideoHover = setupVideoHover;
window.setupAllVideosHover = setupAllVideosHover;
window.setupVideoHoverById = setupVideoHoverById;
window.setupVideoHoverByClass = setupVideoHoverByClass;



const section = document.querySelector(".carrossel-Wemix");
const track = document.querySelector(".carrossel-Wemix");

let currentX = 0;

function getMaxScroll(){
  return track.scrollWidth - window.innerWidth;
}

section.addEventListener("wheel", (e) => {

  const maxScroll = getMaxScroll();

  const scrollingRight = e.deltaY > 0;
  const scrollingLeft = e.deltaY < 0;

  // se ainda puder mover o carrossel
  if(
    (scrollingRight && currentX < maxScroll) ||
    (scrollingLeft && currentX > 0)
  ){

    e.preventDefault();

    currentX += e.deltaY * 0.8;

    currentX = Math.max(0, Math.min(currentX, maxScroll));

    track.style.transform = `translateX(${-currentX}px)`;

  }

},{ passive:false });