import "./style.css";

import { Links } from "react-router-dom";

function CardDev(props) {

    function verificarListaTechs() {
        if (typeof props.listaTechs === "string") {

            return JSON.parse(props.listaTechs)

        } else {
            return props.listatechs;
        }
    }
}

return (
    <div className="card_dev">

        <div className="grupo_contato">
            <img src={"http://localhost:3000/static" + props.foto} alt=""></img>

            <div className="contato_dev">
            <Link to={"/perfil/" + props.id}>
             <h2>{props.nome}</h2>
            </Link>
           <p>{props.email}</p>
            </div>
        </div>
        <div className="techs">
            {verificarListaTechs().map((tech, indice) => (
                <span key={in dice}>
                    {tech}
                </span>

            ))}
        </div>
     </div>
)

export default CardDev