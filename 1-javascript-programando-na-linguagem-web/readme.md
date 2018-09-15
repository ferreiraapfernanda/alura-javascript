# JavaScript: Programando na linguagem da web

- **Selecionando uma tag/classe/id na página**

    ```javascript
    var titulo = document.querySelector("h1");
    var titulo = document.querySelector(".titulo"); //ou
    var titulo = document.querySelector("#titulo"); //ou
    titulo.textContent = "Novo título";
    ```

- **Selecionando todos os itens**

    ```js
    var todosOsTitulos = document.querySelectorAll(".titulo");

    for(var i=0; i<pacientes.length;i++){
        console.log(pacientes[i]);
    }
    ```

- **Formatação de números e estilo**

    ```js
    num.toFixed(2); // com 2 casas decimais
    num.style.color = "red"; // altera a propriedade do estilo
    num.classList.add("numero-invalido");
    ```
- **Listener**

    ```js
    botao.addEventListener('click', funcaoDoBotao);

    function funcaoDoBotao(event){
        event.preventDefault();
        console.log('Botao clicado');
    }
    ```
- **Formulário**

    Quando pegamos os dados dos inputs do form, podemos pegar direto pelo seu name.
    ```js
    var form = document.querySelector("#form");
    var nome = form.nome.value;
    ```
- **Criando elemento**

    ```js
    var novoDado = document.createElement("td");
    linhaTabela.appendChild(novoDado);
    ```
- **Event shortcut**

    Para cada evento existente no JavaScript, há a propriedade on + nomeDoEvent. No caso, temos onclick para o evento click, onmouseover para o evento mouseover e assim por diante. **Não é recomendado seu uso**
