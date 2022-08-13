const a_links = document.querySelectorAll("a.has-tooltip");
const position = ["top", "left", "right", "bottom"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function ce(t) {
  return document.createElement(t);
};
function ab(a, b) {
  a.insertAdjacentElement("afterEnd",b);
};

function add_tooltip(elment){
	const div = ce("div");
	div.classList.add("tooltip");
	div.innerHTML = elment.title;
	div.dataset.position = position[getRandomInt(position.length)];
	ab(elment, div);
	return div;
}

a_links.forEach((a)=>{
	const div = add_tooltip(a);
	a.addEventListener("mousedown", function(e){
		e.preventDefault();
		const tool_tips_acts = document.querySelectorAll(".tooltip_active");
		const {top, bottom, left, right, height, width} = this.getBoundingClientRect();
		tool_tips_acts.forEach((tool)=>{
			tool.classList.remove("tooltip_active");
		});
		let position = div.dataset.position;
		div.removeAttribute("style");
		div.classList.add("tooltip_active");
		const div_conf = div.getBoundingClientRect();
		if ((position == "left")&&(left < div_conf.width)) position = "right";
		else if ((position == "right")&&((right+div_conf.width) > window.innerWidth)) position ="left";
		else if ((position == "top")&&(top < div_conf.height)) position ="bottom";
		else if ((position == "bottom")&&(window.innerHeight - bottom < div_conf.height)) position ="top";
		switch(position){
			case "top":
				div.style.left = left+"px";
				div.style.bottom = (window.innerHeight - top) +"px";
			break;
			case "left":
				div.style.left = (left-div_conf.width)+"px";
				div.style.top = top+"px"
			break;
			case "right":
				div.style.left = (left+width)+"px";
				div.style.top = top+"px";
			break;
			case "bottom":
				div.style.left = left+"px";
				div.style.top = (top+height)+"px";
			break;
		}
	});
	a.addEventListener("click", function(e){
		e.preventDefault();
		div.classList.remove("tooltip_active");
	});
});