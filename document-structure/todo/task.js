const btnAdd = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");
const inpTxt = document.getElementById("task__input");
const form = document.getElementById("tasks__form");
const myStorage = window.localStorage;
let tasks = [];

function create(t) {
  return document.createElement(t);
};
function append(a, b) {
  a.appendChild(b);
};

function add_task_HTML(text){
	const task = create("div");
	const title = create("div");
	const remove = create("a");
	task.classList.add("task");
	title.classList.add("task__title");
	title.innerHTML = text;
	remove.classList.add("task__remove");
	remove.href = "#";
	remove.innerHTML = "&times;";
	append(task, title);
	append(task, remove);
	append(taskList, task);
	remove.addEventListener("click",(e)=>{
		e.preventDefault();
		task.remove();
		const taskListValue = document.querySelectorAll(".task__title");
		tasks.length = 0;
		taskListValue.forEach((taskVal)=>{
			tasks.push(taskVal.innerHTML);
		});
		myStorage.setItem("tasks", JSON.stringify(tasks));
	});
}

function task_add(){
	if (inpTxt.value.trim().length){
		add_task_HTML(inpTxt.value.trim());
		tasks.push(inpTxt.value);
		myStorage.setItem("tasks", JSON.stringify(tasks));
	}
	inpTxt.value = "";
}

const values = myStorage.getItem("tasks");
if (values){
	tasks = JSON.parse(values);
	tasks.forEach((value)=>{
		add_task_HTML(value);
	});
}


btnAdd.addEventListener("click", (e)=>{
	e.preventDefault();
	task_add();
});



