import "./style.css"

import { Link } from "react-router-dom";

function CardServico(props) {

    function verificaValor() {
        if (typeof props.proposta === "string") {
            
            return parseFloat(props.proposta)

        } else {
            return props.proposta
        }
    }

    return (

        <div className="card_servico">

            <div className="topo_servico">

                <link to={"/servico/" + props.id}>
                <h2>{props.titulo</h2>
                
                </link>

                <span>
                    {verificaValor().toLocaleSring(
                        "pr-BR",
                        {
                            style: "currency",
                        
                           currency: "BRL"
                        }
                    )}
                </span>

            </div>

            <p>{props.descricao}</p>

            <div className="techs">
                   {props.listaTechs.map((tech, indice) => (
                <span key={indice}>
                    {tech}
                    </span>
                ))}
            </div>
        </div>

    )
}