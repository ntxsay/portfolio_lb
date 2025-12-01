import skillJson from '../datas/skills.json'
import SkillCard from "../components/SkillCard.tsx";
import Gallery from "../components/Gallery.tsx";
import ContactForm from "../components/ContactForm.tsx";
import {ISkillSchema} from "../interfaces/ISkillSchema.tsx";
import { HashLink as Link } from 'react-router-hash-link';

const HomePage = () => {
    return (
        <>
            <section id="landing" className="landing__section documentSection">
                <div className="landing__content">
                    <div className="introduction">
                        <div className="section__titleContainer">
                            <div className="codeTitleContainer">
                                <span className="code type">const</span>
                                <span className="code variableName">myName</span>
                                <span className="code equals">=</span>
                                <h2>
                                    <span className="code value">'Loïc BASTARAUD'</span>
                                </h2>
                                <span className="code end">;</span>
                            </div>
                            <h2>Développeur Web et .NET junior</h2>
                        </div>
                        <p className="documentSection__description">Formé en développement web, j’ai acquis des
                            compétences en front-end et back-end, tout en approfondissant ma passion pour le
                            développement d'applications de bureau.</p>
                        <div className="landing__socialLinkContainer">
                            <Link to="https://github.com/ntxsay?tab=repositories" target="_blank"
                               className="landing__btn">
                                <img src="icons/github.svg" alt="Lien Github de Loïc Bastaraud"/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/lo%C3%AFc-bastaraud-63448817b/" target="_blank"
                               className="landing__btn">
                                <img src="icons/317750_linkedin_icon.svg"
                                     alt="Lien Linkedin de Loïc Bastaraud"/>
                            </Link>
                        </div>
                        <div className="navButtonsContainer">
                            <Link to="#profile">
                                <span>En savoir plus</span><i className="fa-solid fa-chevron-down fa-bounce"></i>
                            </Link>
                            <Link to="#projects">
                                <span>Mes projets</span><i className="fa-solid fa-chevron-right fa-beat-fade"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="imageContainer">
                        <img id="imgAppCsharp" className="landing__img" src="projects/sitebuild.webp"
                             alt="Construction d'un site web"/>
                    </div>
                </div>
            </section>
            <section id="profile" className="documentSection">
                <div className="documentSection__content">
                    <div className="section__titleContainer">
                        <div className="codeTitleContainer">
                            <span className="code type">let</span>
                            <span className="code variableName">currentSection</span>
                            <span className="code equals">=</span>
                            <h2>
                                <span className="code value">'Mon profil'</span>
                            </h2>
                            <span className="code end">;</span>
                        </div>
                        <h2>Découverte de la programmation</h2>
                    </div>
                    <p className="documentSection__description">
                        J'ai découvert la programmation en autodidacte en utilisant Visual Basic for Applications
                        pour ajouter des fonctionnalités à mes documents PowerPoint.
                        Cette première expérience m'a conduit à approfondir le développement d'applications de
                        bureau avec Visual Basic.NET et Windows Forms.
                        Par la suite, j'ai élargi mes compétences en passant à C#, en explorant WPF, Universal
                        Windows Platform, ASP.NET Core, et WinUI puis vers le Web.
                    </p>
                    <div className="skillsContainer">
                        {
                            skillJson.map((skill: ISkillSchema) => {
                                return <SkillCard key={skill.id} skill={skill}/>
                            })
                        }
                    </div>
                    <div className="navButtonsContainer">
                        
                    </div>
                </div>
            </section>
            <section id="projects" className="documentSection projects__section">
                <div className="projects__content">
                    <div className="section__titleContainer">
                        <div className="codeTitleContainer">
                            <span className="code type">let</span>
                            <span className="code variableName">currentSection</span>
                            <span className="code equals">=</span>
                            <h2>
                                <span className="code value">'Mes projets'</span>
                            </h2>
                            <span className="code end">;</span>
                        </div>
                        <h2>Découvez mes projets développés au fil des années !</h2>
                    </div>
                    <Gallery/>
                </div>
            </section>
            <section id="contact" className="documentSection contact__section">
                <div className="projects__content">
                    <div className="section__titleContainer">
                        <div className="codeTitleContainer">
                            <span className="code type">let</span>
                            <span className="code variableName">currentSection</span>
                            <span className="code equals">=</span>
                            <h2>
                                <span className="code value">'Contact'</span>
                            </h2>
                            <span className="code end">;</span>
                        </div>
                        <h2>N’hésitez pas à me joindre par ce formulaire ou par <a href="mailto:loic.bastaraud@hotmail.fr">e-mail</a> !<br/>Vous pouvez également télécharger mon CV <a href={"documents/CV_DotNet_loic_bastaraud.pdf"}>ici</a>.</h2>
                    </div>
                    <ContactForm/>
                </div>
            </section>
        </>
    );
}

export default HomePage;