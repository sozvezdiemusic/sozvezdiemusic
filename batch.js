function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1; // Размер звезды
        star.style.width = star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 1.5 + 1}s`;
        star.addEventListener('animationend', () => {
          star.remove();
          createStar();
        });
        starsContainer.appendChild(star);
      }
    });


window.addEventListener('load', () => {
      const overlay = document.getElementById('loadingOverlay');
      const starsContainer = document.getElementById('starsContainer');

      const starCount = 180;
      for (let i = 0; i < starCount; i++) {
        createStar();
      }

      setTimeout(() => {
        overlay.style.opacity = 0;
        setTimeout(() => {
          overlay.style.display = 'none';

          starsContainer.style.opacity = 1;
        }, 500);
      }, 1000);
