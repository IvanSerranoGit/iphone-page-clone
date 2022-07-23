window.onload = function () {
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
    });
    lax.init(); // Add a driver that we use to control our animations
    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });
    lax.addElements(".iphone-gallery_container", {
        scrollY: {
          opacity: [
            [1026, 1196],
            [0, 1],
          ],
        },
      });
    lax.addElements(".image-center", {
        scrollY: {
          scale: [
            [1026, 1801],
            [1, 1.2],
          ],
        },
      });
    lax.addElements(".img-cam-grid", {
        scrollY: {
          opacity: [
            [1795, 2276],
            [0, 1],
          ],
          scale: [
            [2100, 2276],
            [1, 1.3],
          ],
        },
      });
    lax.addElements(".take-a-closer-look-content", {
        scrollY: {
          opacity: [
            [2180, 2276],
            [0, 1],
          ],
        },
      });
    lax.addElements(".lens-image.bottom", {
        scrollY: {
            rotate: [
            [2779, 3410],
            [0, 45],
          ],
          translate: [
            [2779, 3410],
            [0, 200],
          ],

        },
      });
    lax.addElements(".camera-content-container ", {
        scrollY: {
            opacity: [
            [2800, 3748],
            [0, 1],
          ],
        },
      });
}