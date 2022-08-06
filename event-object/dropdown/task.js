const drop_down_value = document.querySelector(".dropdown__value");
const drop_down__list = document.querySelector(".dropdown__list");
const drop_down_links = document.querySelectorAll(".dropdown__link");

drop_down_value.onclick = () => {
	drop_down__list.classList.toggle("dropdown__list_active");
}

drop_down_links.forEach((link)=>{
	link.addEventListener("click", function(e){
		e.preventDefault();
		drop_down_value.innerHTML  = this.innerHTML;
		drop_down__list.classList.remove("dropdown__list_active");
	});
})