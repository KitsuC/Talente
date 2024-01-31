const initSlider = () => {
    const slideBtns = document.querySelectorAll('.slide-btn');
    const eventItems = document.querySelector('.event-item-wrap');
    const eventItemWidth = document.querySelector('.event-item-wrap').clientWidth; 
  
    slideBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const direction = btn.id === 'prev-slide' ? -1 : 1;
        console.log(eventItemWidth);
        const scrollAmount = (eventItemWidth + 20) * direction;
        eventItems.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    });
  };
  
  window.addEventListener('load', initSlider);
  