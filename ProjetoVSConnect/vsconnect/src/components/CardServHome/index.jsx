import "./style.css"

import imgAlfinete from"../../assets/imagens/alfinete.png";

function CardServHome(props) {
    
    function formatarValor() {
        const valor =parseFloat(props.proposta);

        return valor.toLocaleString("pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );
    }

    function limitarTexto(texto, limite) {
        
        if (texto.length >= limite) {
            
            return texto.substring(0, limite) + "..."
        }

        return texto;
    }

    return (
    <>
        <img src={imgAlfinete}></img>

        <h3>
            {limitarTexro(props.titulo, 45)}
        </h3>

        <p>
            {limitarTexto(props.descricao, 182)}
        </p>

        <p>
            {formatarValor()}
        </p>

    </>
    )
}

export default CardServHome;