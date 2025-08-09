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
