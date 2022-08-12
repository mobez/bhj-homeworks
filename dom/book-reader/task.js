const font_sizes = document.querySelectorAll(".font-size");
const colors = document.querySelectorAll(".book__control_color > .color");
const backgrounds = document.querySelectorAll(".book__control_background > .color");
const book = document.getElementById("book");
let size_act;
let color_act;
let background_act;

font_sizes.forEach((font_size)=>{
	if (font_size.classList.contains("font-size_active")){
		size_act = font_size;
	}
	font_size.addEventListener("click", function(e){
		e.preventDefault();
		if (size_act){
			size_act.classList.remove("font-size_active");
			if (size_act.dataset.size){
				book.classList.remove(`book_fs-${size_act.dataset.size}`);
			}
		}
		this.classList.add("font-size_active");
		if (this.dataset.size){
			book.classList.add(`book_fs-${this.dataset.size}`);
		}
		size_act = this;
	});
});
colors.forEach((color)=>{
	if (color.classList.contains("color_active")){
		color_act = color;
	}
	color.addEventListener("click", function(e){
		e.preventDefault();
		if (color_act){
			color_act.classList.remove("color_active");
			if (color_act.dataset.textColor){
				book.classList.remove(`book_color-${color_act.dataset.textColor}`);
			}
		}
		this.classList.add("color_active");
		if (this.dataset.textColor){
			book.classList.add(`book_color-${this.dataset.textColor}`);
		}
		color_act = this;
	});
});
backgrounds.forEach((background)=>{
	if (background.classList.contains("color_active")){
		background_act = background;
	}
	background.addEventListener("click", function(e){
		e.preventDefault();
		if (background_act){
			background_act.classList.remove("color_active");
			if (background_act.dataset.bgColor){
				book.classList.remove(`book_bg-${background_act.dataset.bgColor}`);
			}
		}
		this.classList.add("color_active");
		if (this.dataset.bgColor){
			book.classList.add(`book_bg-${this.dataset.bgColor}`);
		}
		background_act = this;
	});
});

