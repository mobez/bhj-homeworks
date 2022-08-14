



const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", ()=>{
	if(xhr.readyState === xhr.DONE){
		console.log(JSON.parse(xhr.responseText));
	}
});
xhr.open("GET","https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();