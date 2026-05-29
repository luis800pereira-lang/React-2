import "./style.css";

import FooterComponent from "../FooterComponent";
import Footer from "../Footer";

function Footer2() {
    return (
        <footer id="footer2">
            <div className="container rodape">
                <FooterComponent/>

                <p>
                    todos os direitos reservado ₢.
                </p>
            </div>

        </footer>
    );
}
export default Footer2;