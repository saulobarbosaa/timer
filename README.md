# ⏲️ Cronômetro

Esse projeto foi desenvolvido utilizando HTML, CSS E JavaScript e baseia-se em um simples cronômetro com as funções de iniciar, pausar e zerar.

![image](https://user-images.githubusercontent.com/82117471/152653594-39b90cf7-8c2b-4152-8972-9b0548128d54.png)


## 👨‍💻 Sobre o projeto

Dando mais detalhes acerca do código, o HTML consiste em um simples container com os três botões que fazem o cronômetro funcionar e um h1 que representa a contagem do tempo.

Sobre a estilização, o container foi centralizado no meio da página e foi dado alguns detalhes nos botões e na fonte do cronômetro, além do mais, a cor do mesmo mudava de acordo com o botão no qual o usuário clicasse.

O funcionamento do cronômetro baseia-se em pequenas functions desenvolvidas no código em JavaScript. Basicamente toda a contagem dos segundos se fundamenta em uma function principal chamada "contador" que acrescenta os segundos, minutos e horas.

Ao clicar no botão de iniciar, a function "contador" é 'chamada' a cada segundo por meio de um setInterval, o botão de pausa faz com que esse essa contagem seja pausada por meio de um clearInterval e o botão de zerar faz a mesma coisa do anterior, porém, ele zerá o valor do tempo contado e imprime o contador zerado na tela.

## 🔗Confira o projeto no link abaixo:

