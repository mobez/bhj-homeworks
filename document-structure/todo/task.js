const btn_add = document.getElementById("tasks__add");
const task_list = document.getElementById("tasks__list");
const inp_txt = document.getElementById("task__input");
const form = document.getElementById("tasks__form");
const myStorage = window.localStorage;
let tasks = [];

function ce(t) {
  return document.createElement(t);
};
function ac(a, b) {
  a.appendChild(b);
};

function add_task_HTML(text){
	const task = ce("div");
	const title = ce("div");
	const remove = ce("a");
	task.classList.add("task");
	title.classList.add("task__title");
	title.innerHTML = text;
	remove.classList.add("task__remove");
	remove.href = "#";
	remove.innerHTML = "&times;";
	ac(task, title);
	ac(task, remove);
	ac(task_list, task);
	remove.addEventListener("click",(e)=>{
		e.preventDefault();
		task.remove();
		const task_list_value = document.querySelectorAll(".task__title");
		tasks.length = 0;
		task_list_value.forEach((task_val)=>{
			tasks.push(task_val.innerHTML);
		});
		myStorage.setItem("tasks", tasks);
	});
}

function task_add(){
	if (inp_txt.value.length){
		add_task_HTML(inp_txt.value);
		tasks.push(inp_txt.value);
		myStorage.setItem("tasks", tasks);
	}
}

tasks = myStorage.getItem("tasks").split(",");
if (tasks) tasks.forEach((value)=>{
	add_task_HTML(value);
});
else tasks = [];


btn_add.addEventListener("click", (e)=>{
	e.preventDefault();
	task_add();
});



