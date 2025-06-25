// Splash Screen Animation
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main-content');
  if (splash && main) {
    setTimeout(() => {
      splash.classList.add('fade-out');
      setTimeout(() => {
        splash.style.display = 'none';
        main.style.display = 'block';
        main.classList.add('slide-in');
        setTimeout(() => main.classList.remove('slide-in'), 500);
      }, 500);
    }, 2000);
  }
});

// Carousel Animation
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");

  let scrollSpeed = 1;
  let x = 0;

  function animateCarousel() {
    x -= scrollSpeed;
    const firstSetWidth = track.scrollWidth / 2;
    
    if (Math.abs(x) >= firstSetWidth) {
      x = 0;
    }

    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animateCarousel);
  }

  animateCarousel();
});
 
// Form Validation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.card form');
  const mensagemErro = document.getElementById('mensagem-erro');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('cadastro-nome').value;
    const email = document.getElementById('cadastro-email').value;
    const descricao = document.getElementById('cadastro-descricao').value;
    const observacoes = document.getElementById('cadastro-observacoes').value;
    const numeroContato = document.getElementById('cadastro-numero-contato-whatsapp').value;
    const idade = document.getElementById('cadastro-idade').value;

    mensagemErro.textContent = '';
    mensagemErro.classList.remove('ativo');

    if (!nome || !email || !numeroContato || !idade) {
      mensagemErro.textContent = 'Por favor, preencha todos os campos.';
      mensagemErro.classList.add('ativo');
      return;
    }

    if (idade < 18) {
      mensagemErro.textContent = 'A idade mínima é 18 anos.';
      mensagemErro.classList.add('ativo');
      return;
    }

    const numeroLimpo = numeroContato.replace(/\D/g, '');
    if (numeroLimpo.length < 10) {
      mensagemErro.textContent = 'O número deve ter pelo menos 10 dígitos.';
      mensagemErro.classList.add('ativo');
      return;
    }

    
    form.submit();
  });
});

function scrollToTop() {
  const scrollDuration = 500;
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}