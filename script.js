let letts = document.querySelectorAll('.lett');
let input = document.querySelector('input');
let del = document.getElementById('backspace');
let capslock = document.getElementById('capslock');

for(let lett of letts){
	lett.addEventListener('click', function (){
		if (lett.classList.contains('big')){
			input.value += this.textContent.toUpperCase();
		}
		else{
			input.value += this.textContent;
		}
	})
	
}

capslock.addEventListener('click',()=>{
	for(let lett of letts){
		lett.classList.toggle('big')
	}
	
})
del.addEventListener('click',()=>{
	input.value = input.value.slice(0,-1)
})

