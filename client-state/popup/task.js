const modal = document.getElementById("subscribe-modal");
const close = document.querySelector(".modal__close");

function deleteCookie(key){
	document.cookie = key+"=; Expires=Thu, 01 Jan 1970 00:00:00: GMT";
}

function setCookie(key, value){
	document.cookie = key+"="+encodeURIComponent(value);
}
function getCookie(key){
	const cookies = document.cookie.split("; ");
	const cookie = cookies.find(p => p.startsWith(key+"="));
	try{
		return cookie.substr(key.length + 1);
	}catch{
		return null;
	}
}
const popupCnt = getCookie("popupCnt");
if (popupCnt) console.log(popupCnt);
else modal.classList.add("modal_active");

close.addEventListener("click", ()=>{
	modal.classList.remove("modal_active");
	setCookie("popupCnt", "1");
})
