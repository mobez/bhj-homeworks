const textarea = document.getElementById("editor");
const clearBtn = document.getElementById("clear");

const text = localStorage.text;
if (text != undefined) textarea.value = text;

textarea.addEventListener("keyup", function(e){
	localStorage.text = this.value;
});
clearBtn.addEventListener("click", ()=>{
	textarea.value = "";
	delete localStorage.text;
})


