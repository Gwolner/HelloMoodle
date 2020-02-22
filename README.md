# Hello Moodle    <img src="logo/moodle.png" width="65" height="50" align="right">

Projeto de pesquisa do Programa Institucional de Bolsas de Extensão (PIBEX 2019) do IFPE campus Recife.</br>
Orientador: Profº [Rafael Roque Aschoff](http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4139742E1)

## Sobre o projeto

Trata-se da configuração de um <b>ambiente virtual de aprendizagem</b> (AVA) e elaboração de um plugin que permita a navegação através de comandos de voz. Ambas abordagens possuem foco em soluções de acessibilidade para melhoria no ensino e aprendizado de pessoas com deficiência visual ou motora, de modo a possibilitar a inclusão destas no processo educacional de qualquer natureza. 

A ideia de praparar um AVA com essas competências é permitir que ele possa ser utilizado em outros lugares sem precisar que os usuários se preocupem em buscar por soluções de acessibilidade proveniente de terceiros. Utilizar várias extensões de acessibilidades para cada navegador que existir na máquina do usuário, por exemplo. 

A proposta inicial era de que o projeto fosse elaborado no campus Palmares, onde lecionava o professor orientador. Entretanto, com a vinda para o campus Recife, a ideia começou a tomar forma.

## Adoção do AVA

Após o levantamento de quais ambientes eram adotados em instituições de ensino e empresas, suas desvantagens e desvantagens, bem como recepção pelo publico, tanto de educadores quanto de educandos, decidiu-se adotar o [Moodle](https://moodle.org/), plataforma de código aberto. O ambiente usado ao longo dos 11 meses de pesquisa foi previamente configurado disponibilizado pelo professor orientador a fim de manter o foco da pesquisa em soluções de acessibilidade. O Moodle encontra-se hospedado no próprio campus Recife.

## Configurações Moodle 

As configurações no ambiente se basearam em duas etapas: a primeira, no levantamento de plugins de acessibilidade que ja existem para a plataforma e filtragem de plugins que realizassem ações semelhantes e, a segunda, na instalação e configuração destes plugins no Moodle, de modo a tornar o ambiente mais propício a um público maior de alunos com necessidades especiais. 

Os plugins adotados possuem as seguintes soluções:

* Ajuste do tamanho da fonte (deficiente visual);
* Alteração da cor de plano de fundo (deficiente visual);
* Alteração da cor do texto (deficiente visual);
* Leitura do texto selecionado (deficiente visual/auditivo);
* Amplificador de volume (deficiente auditivo);
* Envio de questionario por vídeo/audio (deficiente motor)

## Plugin de navegação por voz

Conforme exposto acima, é notório que há mais mais soluções para baixa visibilidade e audição do que para deficientes motores. Com base nesta perceção, surgiu a proposta de criar uma solução uqe permitisse a navegação por voz dentro do Moodle. Após várias pesquisa em quais tecnologias usar para comandos de voz e como alinhá-las corretamente ao ambiente web, surgiu um norte através do uso do [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API). Com ele foi possível tratar da navegação por voz diretamente no front-end do Moodle.

No Google Chrome, é possível experiemntar uma demonstração de sua aplicabilidade clicando [aqui](https://clovisdasilvaneto.github.io/speechRecognition/). Em outros navegadores será exibida uma faixa informando que a API não é suportada. </br>Créditos da demo: [Clovis Neto](https://tableless.com.br/web-speech-api-reconhecimento-de-voz-com-javascript/).

## Funcionamento e limitações

O plugin primeiro identifica se o navegador que o esta tentanro rodar é alguma versão do Google Chrome ou não. Caso não seja, ele simplesmente não funcionará. Em caso positivo, irá solicitar uma única vez a permissão do usuário para ter acesso ao microfone. 

Dada a permissão, um ícone vermelho, indicando que o microfone esta ativado e escutando qualquer comando, será exibido na aba do Moodle. Ao fornecer um comando (Veja o [manual do usuário](https://github.com/Gwolner/pibex-hello-moodle/tree/master/documenta%C3%A7%C3%A3o%20para%20usu%C3%A1rios) para conhecer os comandos!), o áudio é capturado via microfone, convertido em pacotes, enviado pelo plugin para uma base do Google (por isto funciona apenas no Chrome!) e devolvida na forma de String para o plugin.

Com base na String devolvida, o plugin analisa se é algum comando válido. Em caso positivo, a ação é executada (clique em algum elemento do front-end, voltar pra página anterior, descer ou subir a barra de rolagem, etc) e em caso negativo, nada acontece e o microfone permanece novamente na escuta.

Alguns fatores como internet lenta/ociosa, timbre de voz, volume e menção incorreta de comandos podem afetar a ação esperada por parte do plugin. Fatores externos, como o servidor de análsie de áudio do Google, por exemplo, podem afetar a formação da String esperada, ainda que se tenha mencioando corretamente.

## Informações adicionais
* [Documentação do usuário](https://github.com/Gwolner/pibex-hello-moodle/tree/master/documenta%C3%A7%C3%A3o%20para%20usu%C3%A1rios)
* [Inforrmações técnicas](https://github.com/Gwolner/pibex-hello-moodle/tree/master/inforrma%C3%A7%C3%B5es%20t%C3%A9cnicas)
* [Relatório resumido](https://github.com/Gwolner/pibex-hello-moodle/tree/master/relat%C3%B3rio%20resumido)
* [Experimentos realizados](https://github.com/Gwolner/pibex-hello-moodle/tree/master/experimentos)
* [Eventos](https://github.com/Gwolner/pibex-hello-moodle/tree/master/eventos)
