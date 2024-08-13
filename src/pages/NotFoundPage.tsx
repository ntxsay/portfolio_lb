import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = () => {
    return (
        <section id="notFoundPage"  className="landing__section documentSection">
            <div className="landing__content">
                <div className="introduction">
                    <div className="section__titleContainer">
                        <div className="codeTitleContainer">
                            <span className="code type">const</span>
                            <span className="code variableName">errorCode</span>
                            <span className="code equals">=</span>
                            <h2>
                                <span className="code value">'404'</span>
                            </h2>
                            <span className="code end">;</span>
                        </div>
                        <h2>La page spécifiée n'existe pas</h2>
                    </div>
                    <p className="documentSection__description">Oops ! Cette page semble avoir pris un chemin inattendu. 
                        On est en train de la retrouver. Revenez plus tard pour voir si elle est de retour !</p>
                    <div className="navButtonsContainer">
                        <Link to="/#landing">
                            <span>Retourner à l'accueil</span><FontAwesomeIcon icon={faHouse} />
                        </Link>
                    </div>
                </div>
                <div className="imageContainer">
                    <img id="imgAppCsharp" className="landing__img" src="/src/assets/projects/sitebuild.webp"
                         alt="Construction d'un site web"/>
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;