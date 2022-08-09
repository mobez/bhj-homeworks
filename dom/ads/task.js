const rotators = document.querySelectorAll(".rotator__case");
let rotator_cnt;

function next_rotator(){
	rotators[rotator_cnt].classList.remove("rotator__case_active");
	rotator_cnt ++;
	if (rotator_cnt >= rotators.length) rotator_cnt = 0;
	rotators[rotator_cnt].classList.add("rotator__case_active");
	rotators[rotator_cnt].style.color = rotators[rotator_cnt].dataset.color;
	setTimeout(next_rotator, rotators[rotator_cnt].dataset.speed);
}
rotators.forEach((rotator, item)=>{
	if (rotator.classList.contains("rotator__case_active")){
		rotator_cnt = item;
		rotator.style.color = rotator.dataset.color;
		setTimeout(next_rotator, rotator.dataset.speed);
	}
});
