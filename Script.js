// Script para reproduzir vídeo quando o mouse está sobre ele
// e pausar quando o mouse sai da área do vídeo

// Função para configurar o controle de hover em um vídeo específico
function setupVideoHover(videoElement) {
    if (!videoElement || videoElement.tagName !== 'VIDEO') {
        console.error('Elemento de vídeo inválido');
        return;
    }

    // Event listener para quando o mouse entra na área do vídeo
    videoElement.addEventListener('mouseenter', function() {
        // Reproduz o vídeo quando o mouse entra
        videoElement.play().catch(function(error) {
            console.log('Erro ao reproduzir vídeo:', error);
        });
    });

    // Event listener para quando o mouse sai da área do vídeo
    videoElement.addEventListener('mouseleave', function() {
        // Pausa o vídeo quando o mouse sai
        videoElement.pause();
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