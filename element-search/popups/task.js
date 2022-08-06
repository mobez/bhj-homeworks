
const close_btns = document.querySelectorAll(".modal__close");
const show_success = document.querySelector(".show-success");

document.getElementById("modal_main").classList.add("modal_active");

close_btns.forEach((btn)=>{
	btn.addEventListener("click", function(){
		this.parentNode.parentNode.classList.remove("modal_active");
	});
});

show_success.addEventListener("click", function(){
	document.getElementById("modal_success").classList.add("modal_active");
});
