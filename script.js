function submitForm() {
    // Simulação de armazenamento dos dados
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Limpar campos
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    // Exibir mensagem de confirmação
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = `Obrigado, ${name}! Seu formulário foi enviado com sucesso.`;
    confirmationMessage.style.display = 'block';

    // Ocultar a mensagem após alguns segundos
    setTimeout(() => {
        confirmationMessage.style.display = 'none';
    }, 5000);
}

let slideIndex = 1;

function showSlides(index) {
    const slides = document.getElementById('slider');
    const totalSlides = slides.children.length;

    if (index > totalSlides) {
        slideIndex = 1;
    } else if (index < 1) {
        slideIndex = totalSlides;
    }

    const translateValue = -100 * (slideIndex - 1) + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}

function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Iniciar o carrossel
showSlides(slideIndex);