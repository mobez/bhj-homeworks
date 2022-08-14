const items = document.getElementById("items");
const myStorage = window.localStorage;


function create(t) {
  return document.createElement(t);
};
function append(a, b) {
  a.appendChild(b);
};
function add_value(json){
	const loader = document.getElementById("loader");
	while (items.hasChildNodes()) {
	  items.removeChild(items.lastChild);
	};
	loader.classList.remove("loader_active");
	for (let key in json.response.Valute){
		const item = create("div");
		const code = create("div");
		const value = create("div");
		const currency = create("div");
		item.classList.add("item");
		code.classList.add("item__code");
		code.textContent = json.response.Valute[key].CharCode;
		value.classList.add("item__value");
		value.textContent = json.response.Valute[key].Value;
		currency.classList.add("item__currency");
		currency.textContent = "руб.";
		append(item, code);
		append(item, value);
		append(item, currency);
		append(items, item);
	}
	myStorage.setItem("currencys", JSON.stringify(json));
}


const values = myStorage.getItem("currencys");
if (values){
	add_value(JSON.parse(values));
}


const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", ()=>{
	if(xhr.readyState === xhr.DONE){
		add_value(JSON.parse(xhr.responseText));
	}
});
xhr.open("GET","https://netology-slow-rest.herokuapp.com");
xhr.send();
