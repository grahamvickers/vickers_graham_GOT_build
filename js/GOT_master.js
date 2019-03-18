(() => {
    // stub
    console.log('fired!');

    const   sigils     = document.querySelectorAll('.sigil-container'),
            lightbox   = document.querySelector('.lightbox'),
            video      = document.querySelector('video'),
            lbClose    = document.querySelector('.lightbox-close');

    function showLightbox() {
        let targetHouse = this.className.split(" ")[1];

        // this gives us a lowercase house name -> the second class on all of the shields ie statk
        let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

        video.src = `video/House-${targetHouse}.mp4`;
        lightbox.classList.add('show-lightbox');

        video.load();
        video.play();
    }

    function hideLightbox() {
        lightbox.classList.remove('show-lightbox');

        video.currentTime = 0;
        video.pause();
    }

    sigils.forEach(sigil => sigil.addEventListener('click', showLightbox));

    video.addEventListener('ended', hideLightbox);
    lbClose.addEventListener('click', hideLightbox);
})();
