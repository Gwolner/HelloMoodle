# Projeto AVA
Projeto de pesquisa do Programa Institucional de Bolsas de Extensão (PIBEX 2019) do IFPE campus Recife. 

Orientador: Profº Rafael Roque Aschoff 

##Sobre o projeto
O projeto trata da criação de um Ambiente Virtual de Aprendizagem (AVA) com foco em acessibilidade para o campus através da plataforma de codigo aberto [Moodle](https://moodle.org/), utilizando plugins de acessibilidade ja existentes para a mesma plataforma  e o modulo de navegação por voz, desenvolvido neste mesmo projeto.

A proposta inicial era de que o AVA atendesse ao campus Palmares. Entretanto, a ideia começou a tomar forma no campus Recife, onde o Moodle encontra-se hospedado no próprio campus e está configurado com os plugins de acessibilidade das principais necessidades:

* Pessoas com baixa visibilidade.
	* Ajuste do tamanho da fonte
	* Alteração da cor de plano de fundo
* Pessoas com dificuldade motora/ausencia das mãos.
	* Uso da voz para navegação
	* Envio de questionario por vídeo/audio

##Navegação por voz
O principal desafio deste projeto foi produzir o plugin que é responsável por capturar o  que é dito pelo usuário, converter em um comando de voz válido e executar a ação correspondente, como por exemplo, realizar um clique do mouse em um botão presente naa página através do comando de voz `Click`.  
