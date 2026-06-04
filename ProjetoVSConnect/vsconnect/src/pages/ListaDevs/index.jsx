import "./style.css";

import CardDev from "../../components/CardDev";

import { useEffect, useState } from "react";

import api from "../../utils/api";
import Footer2 from "../../components/Footer2";

function ListaDevs() {

    const [listaDevs, setListaDevs] = useState([]);

    const [skillDigitado, setSkillDigitado] = useState("");

    function verificarCampoSkill(event) {
        if (event.target.value === "") {
            setListaDevs(listaDevs);
        }
        setSkillDigitado(event.target.value);
    }

    function buscarDevPorSkill(event) {
        event.preventDefault();

        const devsFiltrados = listaDevs.filter((dev) => dev.hardSkills.includes(skillDigitado.toLocaleUpperCase()));

        if (devsFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            setListaDevs(devsFiltrados);
        }
    }

    function listarDesenvolvedores() {
        api.get("users")
            .then((response) => {
                console.log(response);
                setListaDevs(response.data)
            })
            .catch((error) => {
                console.log("Error ao realizar um requisição:", error);
            })
    }

    useEffect(() => {
        listarDesenvolvedores();
    }, [])

    return (
        <>
            <main id="ld_main">
                <div className="container container_lista_devs">
                    <div className="lista_devs_conteudo">
                        <h1>Lista de Devs</h1>
                        <hr />
                        <form method="post" onSubmit={buscarDevPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar desenvolvedores</label>
                                <div className="campo-label">
                                    <input
                                        type="search"
                                        name="campo-busca"
                                        id="busca"
                                        placeholder="Buscar desenvolvedores por tecnologias..."
                                        autoComplete="off"
                                        onChange={verificarCampoSkill}
                                    />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {
                                    listaDevs.map((dev, indice) => {
                                        return <li key={indice}>
                                            <CardDev
                                                id={dev.id}
                                                foto={dev.user_img}
                                                nome={dev.nome}
                                                email={dev.email}
                                                listaTechs={dev.hardSkills}
                                            />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer2 />
        </>
    );
}

export default ListaDevs;
