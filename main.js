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
    event.preventDefault(); // Evita envio imediato para validação

    const nome = document.getElementById('cadastro-nome').value;
    const email = document.getElementById('cadastro-email').value;
    const descricao = document.getElementById('cadastro-descricao').value;
    const observacoes = document.getElementById('cadastro-observacoes').value;
    const numeroContato = document.getElementById('cadastro-numero-contato-whatsapp').value;
    const idade = document.getElementById('cadastro-idade').value;

    // Limpa mensagem de erro anterior
    mensagemErro.textContent = '';
    mensagemErro.classList.remove('ativo');

    // Validação básica
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

    // Validação simples do número de WhatsApp (ex.: deve ter pelo menos 10 dígitos)
    const numeroLimpo = numeroContato.replace(/\D/g, ''); // Remove não dígitos
    if (numeroLimpo.length < 10) {
      mensagemErro.textContent = 'O número de WhatsApp deve ter pelo menos 10 dígitos.';
      mensagemErro.classList.add('ativo');
      return;
    }

    // Se todas as validações passarem, envia o formulário
    form.submit();
  });
});