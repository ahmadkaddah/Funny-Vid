const videos = [
    "https://www.youtube.com/embed/CBhPICxBrkE?autoplay=1&controls=0&modestbranding=1&rel=0",
    "https://www.youtube.com/embed/gACuL507tO0?autoplay=1&controls=0&modestbranding=1&rel=0",
    "https://www.youtube.com/embed/6-nR-NNzPrg?autoplay=1&controls=0&modestbranding=1&rel=0",
    "https://www.youtube.com/embed/_-xPdAxeROw?autoplay=1&controls=0&modestbranding=1&rel=0",
    "https://www.youtube.com/embed/dFVEh2cJo2s?autoplay=1&controls=0&modestbranding=1&rel=0",
    "https://www.youtube.com/embed/nmd0IuVd2lo?autoplay=1&controls=0&modestbranding=1&rel=0",
    "https://www.youtube.com/embed/GuWx_PP1Sf8?autoplay=1&controls=0&modestbranding=1&rel=0"
];

let playedVideos = [];

function getRandomVideo() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * videos.length);
    } while (playedVideos.includes(randomIndex));

    playedVideos.push(randomIndex);

    if (playedVideos.length === videos.length) {
        playedVideos = [];
    }

    return videos[randomIndex];
}

function playNextVideo() {
    const videoPlayer = document.querySelector('.video-player');
    const youtubeIframe = document.getElementById('youtubeIframe');

    const videoUrl = getRandomVideo();
    youtubeIframe.src = videoUrl;
    videoPlayer.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('funnyButton');
    const youtubeIframe = document.getElementById('youtubeIframe');

    button.addEventListener('click', () => {
        const videoUrl = getRandomVideo();
        youtubeIframe.src = videoUrl;
        document.querySelector('.video-player').style.display = 'block';
    });

    window.addEventListener('message', function (event) {
        if (event.data && event.data.event === 'onStateChange' && event.data.info === 0) {
            playNextVideo();
        }
    });
});
