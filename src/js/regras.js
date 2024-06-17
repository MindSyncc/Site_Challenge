document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as setas
    const arrows = document.querySelectorAll('.arrow');
  
    // Adiciona um listener de clique para cada seta
    arrows.forEach(arrow => {
      arrow.addEventListener('click', function() {
        const imageWrapper = this.closest('.image-wrapper');
        const description = imageWrapper.querySelector('.description, .description2');
        
  
        // Verifica se a descrição está visível
        const isVisible = description.classList.contains('show');
  
        // Toggle para mostrar/ocultar a descrição
        description.classList.toggle('show');
        
        // Toggle para girar a seta
        this.classList.toggle('rotate', !isVisible); // Adiciona a classe rotate se isVisible for false
      });
    });
  });
  
  
  
  

  
  
  
  
