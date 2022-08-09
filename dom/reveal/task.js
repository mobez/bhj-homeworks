const reveals = document.querySelectorAll(".reveal");
let reveal_act;
window.addEventListener('scroll', function() {
  reveals.forEach((reveal) => {
    const {top, bottom} = reveal.getBoundingClientRect();
    if ((top >= 0)&&(bottom <= window.innerHeight)){
      reveal.classList.add("reveal_active");
      reveal_act = reveal;
    }else{
      if (reveal_act == reveal){
        reveal_act.classList.remove("reveal_active");
      }
    }
  })
});