<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * Example Moodle script version information.
 *
 * @package   local_hello
 * @copyright 2018 Ahmed Sherif
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * Hint: To undestand the structure well read this: https://docs.moodle.org/dev/version.php
 * Hint: (Difference between version and release)
 *     # Version − a software build. New version is a different build.
 *     # Release − (public release) a version intended for use by general population.
 */

print('
	<script>
		
		var recognizer;

		// Test browser support
		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

		//caso não suporte esta API DE VOZ            
		if (SpeechRecognition === null) {
			//document.getElementById("unsupported").classList.remove("hidden");
			alert("Plugin de voz não suportado neste navegador!");
		} else {
			//alert("API suportada!");
			// var transcription = document.getElementById("transcription"); //Obtenção de elemento p/ teste

			recognizer = new SpeechRecognition(); //Gerando objeto de reconhecimento de voz
			recognizer.continuous = true; //Reconhecedor de voz não para de ouvir mesmo que tenha pausas no usuário
			recognizer.lang = navigator.language || navigator.userLanguage || "pt-BR"; //Definição de idioma

			contextHome();

			console.dir(recognizer);

			recognizer.start();

			// document.querySelector("#rect").addEventListener("click", function () {
			// try {
			// 	recognizer.start();
			// } catch (ex) {
			// 	alert("error: " + ex.message);
			// }
			// });
		}

		function sair() {
			window.close(); //Fechar janela
		}

		function voltar() {
			window.history.back(); //Voltar no navegador
		}

		function avancar() {
			window.history.forward(); //Avançar no navegador
		}

		function contextHome() {
			recognizer.onresult = function (event) {
				//transcription.textContent = "";
				for (var i = event.resultIndex; i < event.results.length; i++) {
					if (event.results[i].isFinal) {

						var pegaRetorno = (event.results[i][0].transcript.trim()).toUpperCase();
						// transcription.textContent = pegaRetorno + " (Taxa de acerto [0/1] : " + event.results[i][0].confidence + ")";

						if (pegaRetorno == "CLICK" || pegaRetorno == "LIKE") {// || pegaRetorno == " click" || pegaRetorno == " like"){
							//alert("COMANDO CLICK!");	
							contextClick();
						}

						if (pegaRetorno == "RETORNAR") {// || pegaRetorno == " casa"){
							//alert("VOLTEI PRA PAGINA ANTERIOR!");
							voltar();
						}

						if (pegaRetorno == "AVANÇAR") {// || pegaRetorno == " casa"){
							//alert("SEGUI PRA PAGINA SEGUINTE!");
							avancar();
						}

						if (pegaRetorno == "SAIR") {// || pegaRetorno == " casa"){
							//alert("A JANELA SERÁ FECHADA!");
							sair();
						}

					} else {
						// transcription.textContent += pegaRetorno;
					}
				}
			}

		}

		function selectAll() { //Seleciona todos os elementos interativos da tela e gera campo com botão de teste
			let allItems = document.querySelectorAll("a, button, input")

			let index = 0

			allItems.forEach((item) => {
				index++
				let tempLabel = document.createElement("label")
				tempLabel.setAttribute("style", "background-color:aquamarine; padding:.66rem")
				tempLabel.innerText = index

				item.appendChild(tempLabel)
				item.setAttribute("style", "border:2px solid aquamarine")
				item.setAttribute("id", index)
			})

			//let input = document.createElement"input")
			//input.setAttribute"type", "text")
			//input.setAttribute("placeholder", "insira o numero gerado aqui")

			//let button = document.createElement("button")
			//button.innerText = "Clique aqui"
			//button.addEventListener("click", (event) => {
			//	let itemSelected = document.getElementById(input.value)
			//	itemSelected.click()
			//		index = 0
			//})
			// document.getElementById("buffer").addEventListener("change", (event) => {
			// 	let itemSelected = document.getElementById(buffer.value)
			// 	itemSelected.click();
			// 	index = 0
			// })


			//let div = document.createElement("div")
			//div.setAttribute("style", "display:block; text-align:center; padding:2rem; background-color:yellow")

			//div.appendChild(input)
			//div.appendChild(button)

			//document.querySelector("body").appendChild(div)
		};


		function selectAllPure() { //Seleciona todos os elementos interativos da tela

			let allItems = document.querySelectorAll("a, button, input")

			let index = 0

			allItems.forEach((item) => {
				index++
				let tempLabel = document.createElement("label")
				tempLabel.setAttribute("style", "background-color:aquamarine; padding:.66rem")
				tempLabel.innerText = index

				item.appendChild(tempLabel)
				item.setAttribute("style", "border:2px solid aquamarine")
				item.setAttribute("id", index)
			})
		};

		function contextClick() {

			//var recognizerClick = new SpeechRecognition();

			var transcription2 = document.getElementById("buffer");

			//Para o reconhecedor de voz, não parar de ouvir, mesmo que tenha pausas no usuario
			//recognizer.continuous = true;
			//recognizer.lang = "pt-BR";
			selectAllPure();
			recognizer.onresult = function (event) {
				//transcription2.textContent = "";
				var pegaRetorno;
				for (var i = event.resultIndex; i < event.results.length; i++) {
					if (event.results[i].isFinal) {

						pegaRetorno = (event.results[i][0].transcript.trim()).toUpperCase();
						//transcription2.value = pegaRetorno;
						localStorage.setItem("pegaRetorno", pegaRetorno) //Armazena o que é dito no Local Storage

						/*
						Comandos de voz devem ser inseridos antes da ação de click() pois irá gerar
						erro ao se efetuar click em objeto null (Ex: objeto de id "voltar" seria executado)
						*/
						if (pegaRetorno == "VOLTAR") {// || pegaRetorno == " casa"){
							alert("VOLTAR!");
							contextHome();
						}

						//Recupera o que está no Local Storage, usa como id do elemento que se deseja clicar
						let itemSelected = document.getElementById(localStorage.getItem("pegaRetorno"));
						console.log(itemSelected);
						itemSelected.click(); //Ação de click sobre o elemento selecionado
						//index = 0
						//})				

					} else {
						transcription2.value += pegaRetorno;
					}
				}
			}

			//recognizer.start();
		};
	</script>
'); 
 
// It must be included from a Moodle page
defined('MOODLE_INTERNAL') || die();

// specify the plugin version, usually specified by YYYYMMDD followed by 00
$plugin->version   = 2018040700;

// The version of moodle that's at least required for this plugin to be functional
$plugin->requires  = 2011102700;

// The name of the plugin
$plugin->component = 'local_hello';

// This means that the plugin won't recieve major updates and is ready for the production
$plugin->maturity  = MATURITY_STABLE;

// The realease version of your plugin, in this case this is the first release
$plugin->release   = '1.0';