var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("body input");
var buttonElemnt = document.querySelector("body button");




var nomes = ["Escovar os dentes", "Fazer exercícios", "Ler um bom livro!"]; //Atividades predefinidas

function listarAtividades() {
	
	listElement.innerHTML = "";
	
	for(nome of nomes){ //Inserção automática das atividades predefinidas
		var item  = document.createElement("li"); //Cria item
		var texto = document.createTextNode(nome); //Cria Nó de texto 
		item.appendChild(texto); //Adiciona texto ao item
		
		var link = document.createElement("a"); //Cria link
		link.setAttribute("href","#"); //Seta parametro href no link
		var linkTexto = document.createTextNode(" Excluir"); //Cria Nó de texto para o link
		link.appendChild(linkTexto); //Adiciona o texto ao link
		
		item.appendChild(link); //Adiciona link ao item
		listElement.appendChild(item); //Adiciona item na lista
		
		var posicaoAtividade = nomes.indexOf(nome);
		link.setAttribute("onclick","removerAtividade("+posicaoAtividade+")");
	}
}

listarAtividades();




// function addAtividade(){ //Função que adiciona novas atividades
	// var item = document.createElement("li");
	// var escrito = document.getElementsByTagName("input")[0];
	// var texto = document.createTextNode(escrito.value);
	// item.appendChild(texto);
	// var container = document.querySelector("ul");
	// container.appendChild(item);
	// escrito.value = "";
// }

function addAtividade(){
	var atividade = inputElement.value;
	nomes.push(atividade);
	inputElement.value="";
	listarAtividades();

}

buttonElemnt.onclick = addAtividade;

function removerAtividade(posicao){
	nomes.splice(posicao,1);
	listarAtividades();
}