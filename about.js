document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.querySelector('.body-container');
  
    accordion.addEventListener('click', () => {
  
      const group = accordion.parentElement;
      const groupBody = group.querySelector('.body-text');
      const icon = accordion.querySelector('i');
  
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
  
      if (groupBody.style.display === 'block') {
        groupBody.style.display = 'none';
      } else {
        groupBody.classList.toggle('open');
      }
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
  });

