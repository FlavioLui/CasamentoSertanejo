document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Previne o envio real do formulário para este exemplo
            event.preventDefault(); 
            
            // Exibe uma mensagem de sucesso para o usuário
            alert('Obrigado pelo seu contato! Sua mensagem foi enviada com sucesso.');
            
            // Limpa o formulário após o envio
            contactForm.reset();
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DO FILTRO DA GALERIA ---
    const filterButtons = document.querySelectorAll('#gallery-filter-buttons .btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões e a adiciona ao clicado
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                // Esconde todos os itens primeiro com uma transição de opacidade
                item.style.opacity = '0';
                item.style.display = 'none';

                // Se o item corresponde ao filtro, ou se o filtro é 'todos'
                if (item.classList.contains(filter) || filter === 'all') {
                    // Exibe o item após um pequeno delay para a transição
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.style.opacity = '1';
                    }, 100);
                }
            });
        });
    });

    // --- LÓGICA DO LIGHTBOX (MODAL) ---
    const galleryLinks = document.querySelectorAll('.gallery-link');
    const modalImage = document.getElementById('modal-image');
    const galleryModal = new bootstrap.Modal(document.getElementById('gallery-modal'));

    galleryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link (que seria abrir a imagem em outra página)
            event.preventDefault();

            // Pega a URL da imagem do atributo href do link clicado
            const imageUrl = this.getAttribute('href');

            // Define a imagem dentro do modal
            modalImage.setAttribute('src', imageUrl);

            // Abre o modal
            galleryModal.show();
        });
    });

});