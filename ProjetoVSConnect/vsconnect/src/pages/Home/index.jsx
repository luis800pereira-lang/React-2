import "./style.css"

import imgClientes from "../../assets/images/clientes.png";

import imgMaosDev from "../../assets/images/maos_dev.png";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import api from "../../utils/api";

import CardServHome from "../../components/CardServHome";

import Footer from "../../components/Footer";

function Home() {
    
    const [listaServicos, setListaServicos] = useState([]);

    function listarServicos() {
        let doisServicos = [];

    api.get("servicos")

    .then((response) => {
        for (let i = 0; i < 2; i++) {
            doisServicos.push(response.data[i])
        }

        setListaServicos(doisServicos);
    })

    .catch((error) => {
        console.log("Error, error");
    });
    }

    useEffect(() => {
        listarServicos();
    }, []);

    return (
        <div>
            <main id="home_main">

                <h1>
                    págna inicial VSconnect
                </h1>

                <section className="banner">

                    <div className="banner_conteudo">

                        <span className="banner_slogan_l1">
                            VSconnect
                        </span>

                        <p className="banner_slogan_l2">
                            Conectando os melhores desenvolvedores independentes ás mais diversas oportunidades.
                        </p>

                        <p className="banner_slogan_l3">
                            Conect-se e comece a desvendar esse mundo!
                        </p>

                        <div className="botao banner_botoes">

                            <Link className="botao banner_botao_dev" to="/cadastrar/usuario">
                            desenvolvedor
                            </Link>

                            <Link className="botao banner_botao_cli" to="/cadastrar/usuario">
                            cliente
                            </Link>
                        </div>

                    </div>

                </section>

                <section className="container para_clientes">

                    <div className="span_cliente">

                        <p>
                            Desde 2015 unindo propósitos.
                            <br />
                        </p>

                    </div>

                    <div className="clientes_conteudo">

                        <img src={imgClientes} alt="" />

                        <h2>
                            para clientes
                        </h2>

                        <ul>
                            <li>cadastrar serviços</li>
                            <li>procurar por desenvolvedores</li>
                        </ul>

                        <div>
                            <Link className="botao clientes_botao_cli" to="/cadastrar/usuario">
                            criar conta
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="conexao"></div>

                <section className="container para_devs">

                    <div className="devs_texto">

                        <h2>para desenvolvedores</h2>

                        <ul>
                            <li>encontrar serviços</li>
                            <li>divulgar suas hardskills</li>
                        </ul>
                     <div>
                        <Link className="botao clientes_botao_devs" to="/cadastrar/usuario">
                                criar conta
                        </Link>
                     </div>
                        
                </div>

                <img src={imgMaosDev} alt="" />

                </section>

                <section className="container servicos">

                    <h2>serviços</h2>

                    <div className="servicos_cards">

                        {listaServicos.map((servico, indice) => (
                            <div className="card card2" key={indice}>
                                <CardServHome
                                    titulo={servico.nome}
                                    descricao={servico.descricao}
                                    proposta={servico.valor}
                                />

                             </div>
                        ))}

                    </div>

                    <Link to={"/lista/servico"}>
                       Ver mais serviços
                    </Link>

                </section>

            </main>
            <Footer/>
        </div>
    );
}
export default Home;