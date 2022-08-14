const signin = document.getElementById("signin");
const form = document.getElementById("signin__form");
const signout = document.getElementById("signout");

function welcomeSet(id){
	signin.classList.remove("signin_active");
	const userSpan = document.getElementById("user_id");
	userSpan.textContent = id;
	const welcome = document.getElementById("welcome");
	welcome.classList.add("welcome_active");
}

form.addEventListener("submit", (e)=>{
	e.preventDefault();
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", ()=>{
		if(xhr.readyState === xhr.DONE){
			const json = JSON.parse(xhr.responseText);
			if (json.success){
				welcomeSet(json.user_id);
				localStorage.id = json.user_id;
			}else{
				alert("Неверный логин/пароль");
			}
		}
	});
	xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
	xhr.send(formData);
	form.login.value = "";
	form.password.value = "";
});

signout.addEventListener("click", ()=>{
	signin.classList.add("signin_active");
	const welcome = document.getElementById("welcome");
	welcome.classList.remove("welcome_active");
	delete localStorage.id;
});

const idUser = localStorage.id;
if (idUser != undefined) welcomeSet(idUser);

