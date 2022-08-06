const btn_prev = document.querySelector(".slider__arrow_prev");
const btn_next = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");
let slider_cnt = 0;

sliders.forEach((slider, item) =>{
	if (slider.classList.contains("slider__item_active")){
		slider_cnt = item;
		dots[slider_cnt].classList.add("slider__dot_active");
	}
});

dots.forEach((dot, item) =>{
	dot.onclick = function(){
		reset_sld(slider_cnt, item);
	}
});

function reset_sld(old, now){
	dots[old].classList.remove("slider__dot_active");
	sliders[old].classList.remove("slider__item_active");
	sliders[now].classList.add("slider__item_active");
	dots[now].classList.add("slider__dot_active");
	slider_cnt = now;
}

function btn_set(f){
	let old = slider_cnt;
	if (f){
		slider_cnt++;
		if (slider_cnt >= sliders.length) slider_cnt = 0;
	}else{
		slider_cnt--;
		if (slider_cnt < 0) slider_cnt = sliders.length-1;
	}
	reset_sld(old, slider_cnt);
}


btn_prev.onclick = () => {
	btn_set(0);
};
btn_next.onclick = () => {
	btn_set(1);
};