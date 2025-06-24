// Splash Screen Animation
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main-content');
  if (splash && main) {
    setTimeout(() => {
      splash.style.display = 'none';
      main.style.display = 'block';
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
    const senha = document.getElementById('cadastro-senha').value;
    const verificaSenha = document.getElementById('cadastro-verifica-senha').value;
    const idade = document.getElementById('cadastro-idade').value;

    mensagemErro.textContent = '';
    mensagemErro.classList.remove('ativo');

    if (!nome || !email || !senha || !verificaSenha || !idade) {
      mensagemErro.textContent = 'Por favor, preencha todos os campos.';
      mensagemErro.classList.add('ativo');
      return;
    }

    if (idade < 18) {
      mensagemErro.textContent = 'A idade mínima é 18 anos.';
      mensagemErro.classList.add('ativo');
      return;
    }

    if (senha !== verificaSenha) {
      mensagemErro.textContent = 'As senhas não coincidem.';
      mensagemErro.classList.add('ativo');
      return;
    }

    form.submit();
  });
});