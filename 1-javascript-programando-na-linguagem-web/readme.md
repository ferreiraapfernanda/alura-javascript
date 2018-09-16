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

- **Arrays**

    ```js
    var erros = [];
    erros.push("valor");
    ```
- **innerHTML**

    Retorna todo o conteúdo da tag HTML em questão (todos seus "filhos");

- **Duplo clique e remover**

    ```js
    paciente.addEventListener("dblclick", funcaoDoClique);
    function funcaoDoClique(this) {
        this.remove();
    }
    ```

- **Relacionamento entre pai e filho**

    Em JavaScript, é possível fazer um só eventlistener que irá valer para todo o elemento e seus filhos. Ou seja, caso seja necessário apagar um elemento filho, é possível adicionar o eventlistener no pai, e não em cada filho.

    ```js
    //eventlistener function
    event.target //devolve o elemento que foi clicado
    event.target.parentNode //devolve o pai do elemento que foi clicado
    ```

- **Animações**

    Fazemos a animação no css, e adicionamos  a clase ao elemento.
    Depois, podemos fazer um ``setTimeout(function, 500)`` para dar um tempo até ele executar a ação.
