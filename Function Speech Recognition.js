function sair(){
	window.close(); //Fechar janela
}

function voltar(){
	window.history.back(); //Voltar no navegador
}

function avancar(){
	window.history.forward(); //Avançar no navegador
}

function contextHome(){	
	recognizer.onresult = function(event){
		//transcription.textContent = "";
		for (var i = event.resultIndex; i < event.results.length; i++) {
			if(event.results[i].isFinal){
				
				var pegaRetorno = (event.results[i][0].transcript.trim()).toUpperCase();
				transcription.textContent = pegaRetorno+' (Taxa de acerto [0/1] : ' + event.results[i][0].confidence + ')';
				
				//alert("("+pegaRetorno+")");
				if(pegaRetorno == "CLICK" || pegaRetorno == "LIKE"){// || pegaRetorno == " click" || pegaRetorno == " like"){
					//alert("COMANDO CLICK!");	
					//selectAllPure();
					contextClick();
				}
				
				if(pegaRetorno == "RETORNAR"){// || pegaRetorno == " casa"){
					//alert("VOLTEI PRA PAGINA ANTERIOR!");
					voltar();
				}

				if(pegaRetorno == "AVANÇAR"){// || pegaRetorno == " casa"){
					//alert("SEGUI PRA PAGINA SEGUINTE!");
					avancar();
				}
				
				if(pegaRetorno == "SAIR"){// || pegaRetorno == " casa"){
					//alert("A JANELA SERÁ FECHADA!");
					sair();
				}
				
			}else{
				transcription.textContent += pegaRetorno;	
			}
		}
	}

}

function selectAll(){ //Seleciona todos os elementos interativos da tela e gera campo com botão de teste
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

	//let input = document.createElement('input')
	//input.setAttribute('type', 'text')
	//input.setAttribute('placeholder', 'insira o numero gerado aqui')

	//let button = document.createElement('button')
	//button.innerText = 'Clique aqui'
	//button.addEventListener('click', (event) => {
	//	let itemSelected = document.getElementById(input.value)
	//	itemSelected.click()
	//		index = 0
	//})
	document.getElementById("buffer").addEventListener("change", (event) => {
		let itemSelected = document.getElementById(buffer.value)
		itemSelected.click();
		index = 0
	})


	//let div = document.createElement('div')
	//div.setAttribute('style', 'display:block; text-align:center; padding:2rem; background-color:yellow')

	//div.appendChild(input)
	//div.appendChild(button)
			   
	//document.querySelector('body').appendChild(div)
};


function selectAllPure(){ //Seleciona todos os elementos interativos da tela
	
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
	
	//var recognizerClick = new SpeechRecognition();
		
	var transcription2 = document.getElementById("buffer");

	//Para o reconhecedor de voz, não parar de ouvir, mesmo que tenha pausas no usuario
	//recognizer.continuous = true;
	//recognizer.lang = "pt-BR";
	selectAllPure();
	recognizer.onresult = function(event){
		//transcription2.textContent = "";
		var pegaRetorno;
		for (var i = event.resultIndex; i < event.results.length; i++) {
			if(event.results[i].isFinal){
				
				pegaRetorno = (event.results[i][0].transcript.trim()).toUpperCase();
				transcription2.value = pegaRetorno;
				
				if(pegaRetorno == "VOLTAR"){// || pegaRetorno == " casa"){
					alert("VOLTAR!");
					contextHome();
				}

				//transcription2.addEventListener("change", (event) => {
					let itemSelected = document.getElementById(pegaRetorno);
					console.log(itemSelected);
					itemSelected.click();
					//index = 0
				//})


			}else{
				transcription2.value += pegaRetorno;	
			}
		}
	}
	
	//recognizer.start();
}