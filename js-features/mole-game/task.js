const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let dead_cnt = Number(dead.textContent);
let lost_cnt = Number(lost.textContent);

function restart(){
	dead_cnt = 0;
	dead.textContent = dead_cnt;
	lost_cnt = 0;
	lost.textContent = lost_cnt;
}

for (var i = 1; i < 10; i++) {
	document.getElementById(`hole${i}`).onclick = function() {
		if (this.classList.contains("hole_has-mole")){
			dead_cnt++;
			dead.textContent = dead_cnt;
			if (dead_cnt >= 10){
				alert("Победа!");
				restart();
			}
		}else{
			lost_cnt++;
			lost.textContent = lost_cnt;
			if (lost_cnt >= 5){
				alert("Вы проиграли!");
				restart();
			}
		}
	}
}

