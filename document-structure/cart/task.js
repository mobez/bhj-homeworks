const order = document.querySelector(".cart__products");
const products = document.querySelectorAll(".product");

let card_to_id=[];

function ce(t) {
  return document.createElement(t);
};
function ac(a, b) {
  a.appendChild(b);
};

function add_cards(id, cnt, img){
	if (card_to_id[id] == undefined){
		const card = ce("div");
		const card_img = ce("img");
		const card_cnt = ce("div");
		card.classList.add("cart__product");
		card.dataset.id = id;
		card_img.classList.add("cart__product-image");
		card_img.src = img;
		card_cnt.innerHTML = cnt;
		card_to_id[id] = {cnt, card_cnt};
		ac(card, card_img);
		ac(card, card_cnt);
		ac(order, card);
	}else{
		let card_cnt = parseInt(card_to_id[id].card_cnt.innerHTML);
		card_cnt += cnt;
		card_to_id[id].card_cnt.innerHTML = card_cnt;
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
