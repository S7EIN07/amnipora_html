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
 

document.getElementById('btn-cadastrar').addEventListener('click', function() {
  const nome = document.getElementById('cadastro-nome').value;
  const email = document.getElementById('cadastro-email').value;
  const senha = document.getElementById('cadastro-senha').value;
  const verificaSenha = document.getElementById('cadastro-verifica-senha').value;
  const idade = document.getElementById('cadastro-idade').value;

  // Validação básica
  if (!nome || !email || !senha || !verificaSenha || !idade) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (idade < 18) {
    alert('A idade mínima é 18 anos.');
    return;
  }

  if (senha !== verificaSenha) {
    alert('As senhas não coincidem.');
    return;
  }

  // Preparar dados para envio à API
  const dados = {
    nome: nome,
    email: email,
    senha: senha,
    idade: parseInt(idade)
  };

  // Enviar para a API (placeholder - substitua pela URL real)
  fetch('https://api.exemplo.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  })
  .then(response => response.json())
  .then(data => {
    alert('Cadastro realizado com sucesso!');
    document.getElementById('cadastro-nome').value = '';
    document.getElementById('cadastro-email').value = '';
    document.getElementById('cadastro-senha').value = '';
    document.getElementById('cadastro-verifica-senha').value = '';
    document.getElementById('cadastro-idade').value = '';
  })
  .catch(error => {
    alert('Erro ao cadastrar. Tente novamente.');
    console.error('Erro:', error);
  });
});