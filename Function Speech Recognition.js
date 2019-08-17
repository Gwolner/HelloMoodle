
function selectAll(){
	let allItems = document.querySelectorAll('a, button, input')

	let index = 0

	allItems.forEach((item) => {    
		index++
		let tempLabel = document.createElement('label')
		tempLabel.setAttribute('style', 'background-color:aquamarine; padding:.66rem')
		tempLabel.innerText = index   

		item.appendChild(tempLabel)
		item.setAttribute('style', 'border:2px solid aquamarine')
		item.setAttribute('id', index)
	})

	let input = document.createElement('input')
	input.setAttribute('type', 'text')
	input.setAttribute('placeholder', 'insira o numero gerado aqui')

	let button = document.createElement('button')
	button.innerText = 'Clique aqui'
	button.addEventListener('click', (event) => {
		let itemSelected = document.getElementById(input.value)
		itemSelected.click()
			index = 0
	})

	let div = document.createElement('div')
	div.setAttribute('style', 'display:block; text-align:center; padding:2rem; background-color:yellow')

	div.appendChild(input)
	div.appendChild(button)
			   
	document.querySelector('body').appendChild(div)
};

function selectAllPure(){
	
	let allItems = document.querySelectorAll('a, button, input')

	let index = 0

	allItems.forEach((item) => {    
		index++
		let tempLabel = document.createElement('label')
		tempLabel.setAttribute('style', 'background-color:aquamarine; padding:.66rem')
		tempLabel.innerText = index   

		item.appendChild(tempLabel)
		item.setAttribute('style', 'border:2px solid aquamarine')
		item.setAttribute('id', index)
	})
};

function contextClick(){
	
	var recognizerClick = new SpeechRecognition();
		
	var transcription2 = document.getElementById("transcription2");

	//Para o reconhecedor de voz, não parar de ouvir, mesmo que tenha pausas no usuario
	recognizerClick.continuous = true;
	recognizerClick.lang = "pt-BR";
		
	recognizerClick.onresult = function(event){
		//transcription2.textContent = "";
		var pegaRetorno;
		for (var i = event.resultIndex; i < event.results.length; i++) {
			if(event.results[i].isFinal){
				
				pegaRetorno = (event.results[i][0].transcript.trim()).toUpperCase();
				transcription2.textContent = pegaRetorno;
				
			}else{
				transcription2.textContent += pegaRetorno;	
			}
		}
	}
	
	recognizerClick.start();
}