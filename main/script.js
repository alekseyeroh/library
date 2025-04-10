const dots = document.querySelector('.dots');

dots.addEventListener('click', function(e) {
  if (!e.target.classList.contains('dot'))         // если клик не по ссылке, просто завершим выполнение 
    return; 
  e.preventDefault();                                // отменим стандартную реакцию ссылки на клик
  for (let link of this.querySelectorAll('.dot'))  // удалим класс active у всех наших ссылок... 
    link.classList.remove('active'); 
  e.target.classList.add('active');                  // ...и добавим его той, по которой выполнен клик
}); 