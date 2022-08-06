const tabs = document.querySelectorAll(".tab");
const tab_contents = document.querySelectorAll(".tab__content");
let cnt=0;

tabs.forEach((tab, item) => {
	if (tab.classList.contains("tab_active")){
		cnt = item;
	}
	tab.onclick = function(){
		tabs[cnt].classList.remove("tab_active");
		tabs[item].classList.add("tab_active");
		tab_contents[cnt].classList.remove("tab__content_active");
		tab_contents[item].classList.add("tab__content_active");
		cnt = item;
	}
});
