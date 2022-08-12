const interests = document.querySelectorAll(".interests_main > ul > .interest");

interests.forEach((interest, item)=>{
	const chld_ul = interest.querySelectorAll(".interest > ul");
	chld_ul.forEach((chld, item)=>{
		const check_chlds = chld.querySelectorAll(".interests_active .interest__check");
		const chek_p = chld.previousElementSibling.childNodes[1];
		check_chlds.forEach((chld, item)=>{
			chld.addEventListener("change", function(){
				setTimeout(()=>{
				let ch = true, ch_e=0;
				check_chlds.forEach((chld)=>{
					if (!chld.checked) ch = false;
					else ch_e++;
				});
				const ch_pre = chek_p.checked;
				chek_p.checked = ch;
				if ((ch_e)&&(!ch)) chek_p.indeterminate = true;
				else chek_p.indeterminate = false;
				if (ch && !ch_pre) {
					const event = new Event("change");
					chek_p.dispatchEvent(event);
				}
			}, 5);
			});
		});
		chek_p.addEventListener("change", function(){
			check_chlds.forEach((chld)=>{
				chld.checked = this.checked;
			});
		});
	})
});
