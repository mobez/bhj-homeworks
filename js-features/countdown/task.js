const timer_cnt = document.getElementById("timer");
const start_cnt = Number(timer_cnt.innerHTML);
let cnt = start_cnt;
let hours = Math.floor(cnt/3600);
let minutes = Math.floor((cnt%3600)/60);
const TimerId = setInterval(() =>{
	cnt --;
	set_view();
	if (!cnt){
		clearInterval(TimerId);
		alert("Вы победили в конкурсе");
		// const link = document.createElement('a');
		// if (typeof link.download === 'undefined'){
		// 	location.assign("https://mobimg.b-cdn.net/v3/fetch/54/54bb741fd881313da79ec7d7f648fe9d.jpeg");
		// }else{
		// 	link.href = "https://mobimg.b-cdn.net/v3/fetch/54/54bb741fd881313da79ec7d7f648fe9d.jpeg";
		// 	link.download = "Котик.jpeg";
		// 	link.target = "_blank";
		// 	link.style.display = "none";
		// 	document.body.appendChild(link);
		// 	link.click();
		// }
		fetch("https://mobimg.b-cdn.net/v3/fetch/54/54bb741fd881313da79ec7d7f648fe9d.jpeg")
    .then(res => res.blob())
    .then(blob => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "Котик.jpeg";
        document.body.appendChild(a);
        a.click();
        a.remove();
    });
	}
}, 1000);

function set_view() {
	let hours = Math.floor(cnt/3600);
	let minutes = Math.floor((cnt%3600)/60);
	let seconds = cnt%60;
	timer_cnt.innerHTML = `${hours<10?"0"+hours:hours}:${minutes<10?"0"+minutes:minutes}:${seconds<10?"0"+seconds:seconds}`;
}

set_view();
