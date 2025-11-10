import { useEffect } from 'react';

const BackgroundElements = () => {
  useEffect(() => {
    const backgroundContainer = document.getElementById('background-elements');
    
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 17 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      const duration = Math.random() * 20 + 15;
      particle.style.animationDuration = `${duration}s`;
      
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s`;
      
      const colors = [
        'rgba(106, 90, 249, 0.3)',
        'rgba(214, 110, 253, 0.3)',
        'rgba(80, 50, 150, 0.3)',
        'rgba(50, 80, 150, 0.3)'
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = randomColor;
      particle.style.boxShadow = `0 0 20px ${randomColor.replace('0.3', '0.5')}`;
      
      backgroundContainer.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
        createParticle();
      }, duration * 1000);
    };
    
    for (let i = 0; i < 30; i++) {
      createParticle();
    }
  }, []);

  return <div id="background-elements"></div>;
};

export default BackgroundElements;
