const order = document.querySelector(".cart__products");
const products = document.querySelectorAll(".product");

let cardToId=[];

function create(t) {
  return document.createElement(t);
};
function append(a, b) {
  a.appendChild(b);
};

function add_cards(id, cnt, img){
	if (cardToId[id] == undefined){
		const card = create("div");
		const cardImg = create("img");
		const cardCnt = create("div");
		card.classList.add("cart__product");
		card.dataset.id = id;
		cardImg.classList.add("cart__product-image");
		cardImg.src = img;
		cardCnt.classList.add("cart__product-count");
		cardCnt.innerHTML = cnt;
		cardToId[id] = {cnt, cardCnt};
		append(card, cardImg);
		append(card, cardCnt);
		append(order, card);
	}else{
		let cardCnt = parseInt(cardToId[id].cardCnt.innerHTML);
		cardCnt += cnt;
		cardToId[id].cardCnt.innerHTML = cardCnt;
	}
}

products.forEach((product)=>{
	const id = parseInt(product.dataset.id);
	const img = product.querySelector(".product__image");
	const dec = product.querySelector(".product__quantity-control_dec");
	const inc = product.querySelector(".product__quantity-control_inc");
	const value = product.querySelector(".product__quantity-value");
	const add = product.querySelector(".product__add");

	dec.addEventListener("click", ()=>{
		let cnt = parseInt(value.innerHTML);
		cnt--;
		if (cnt < 1) cnt = 1;
		value.innerHTML = cnt;
	});
	inc.addEventListener("click", ()=>{
		let cnt = parseInt(value.innerHTML);
		cnt++;
		value.innerHTML = cnt;
	});
	add.addEventListener("click", ()=>{
		add_cards(id, parseInt(value.innerHTML), img.src);
	});
});
