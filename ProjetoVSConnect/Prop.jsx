   function Saudacao(props) {
    return <h1>Olá, {props.nome}!</h1>;
   }
   <Saudacao nome="Lucas"/>

   props = {
    nome: "Lucas"
   }

   function Produto(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>R$ {props.preco}</p>
        </div>
    );
   }
   <Produto nome="Notebook" preco="3500"/>

   function Botao(props) {
    return (
        <button>
            {props.texto}
        </button>
    );
   }

   <Botao texto="Salvar"/>
  
//(DESESTRUTURAÇÃO)
function Saudacao2({nome}) {
    let nome = props.nome
}

function Usuario({nome, idade, cidade}) {
    return (
        <div>
            <h1>{nome}</h1>
            <p>{idade}</p>
            <p>{cidade}</p>
        </div>
    );
}

<Usuario
    nome="Lucas"
    idade={35}
    cidade="São Paulo"
/>


//useState
function Contador() {
    let numero = 0;

    function aumentar() {
        numero++ 
        console.log(numero)
    }
    return (
        <div>
            <h1>{numero}</h1>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}

import { useState } from "react";

 function Contador() {
    const [contador, setContador] = useState(0);
    return (
        <div>
            <p>Voce clicou {contador} vezes</p>
            <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
        </div>
    )
 }

 function Nome() {
    const [nome, setNome] = useState("");
    return (
        <div>
            <input onChange={(e) => setNome(e.target.value)} />
            <h1>{nome}</h1>
        </div>
    )
 }

 function FormularioLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function enviarFormulario(event) {
        event.preventDefault();
        console.log('Email', email)
        console.log('Senha', senha)
    }
    return (
        <form onSubmit={enviarFormulario}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email"/>

            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}
            placeholder="digite a senha">

            </input>

            <button type="submit">

            </button>
        </form>
    )
 }

 // Estado com arrays
 const [listaItens, setListaItens] = useState([]);

 function adicionarItem(novoItem) {
    setListaItens([...listaItens, novoItem])
 }

 listaItens.push("React");

 function removerItens(itemParaRemover) {
    setListaItens(listaItens.filter(item => item != itemParaRemover))
 }

 



