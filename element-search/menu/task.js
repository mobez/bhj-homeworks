const menu_sub = document.querySelectorAll(".menu__item > .menu__link");

menu_sub.forEach((sub)=>{
	if (sub.nextElementSibling){
		sub.addEventListener("click", function(e){
			e.preventDefault();
			this.nextElementSibling.classList.toggle("menu_active");
		});
	}
});