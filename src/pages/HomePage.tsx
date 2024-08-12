import skillJson from '../datas/skills.json'
import SkillCard from "../components/SkillCard.tsx";
import MasonryGallery from "../components/MasonryGallery.tsx";
import {ISkillSchema} from "../interfaces/ISkillSchema.tsx";
//import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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
                            <a href="https://github.com/ntxsay?tab=repositories" target="_blank"
                               className="landing__btn">
                                <img src="src/assets/icons/github.svg" alt="Lien Github de Loïc Bastaraud"/>
                            </a>
                            <a href="https://www.linkedin.com/in/lo%C3%AFc-bastaraud-63448817b/" target="_blank"
                               className="landing__btn">
                                <img src="src/assets/icons/317750_linkedin_icon.svg"
                                     alt="Lien Linkedin de Loïc Bastaraud"/>
                            </a>
                        </div>
                        <div className="navButtonsContainer">
                            <a href="#profile">
                                <span>En savoir plus</span><i className="fa-solid fa-chevron-down fa-bounce"></i>
                            </a>
                            <a href="#projects">
                                <span>Mes projets</span><i className="fa-solid fa-chevron-right fa-beat-fade"></i>
                            </a>
                        </div>
                    </div>
                    <div className="imageContainer">
                        <img id="imgAppCsharp" className="landing__img" src="src/assets/projects/sitebuild.webp"
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
                        <a href="#projects">
                            <span>Mes projets</span><i className="fa-solid fa-chevron-down fa-bounce"></i>
                        </a>
                        <a href="#landing">
                            <span>Revenir à l'accueil</span><i className="fa-solid fa-chevron-up fa-bounce"></i>
                        </a>
                    </div>
                </div>
            </section>
            <section id="projects" className="documentSection projects__section">
                <div className="documentSection__content">
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
                        <h2>Découverte de la programmation</h2>
                    </div>
                    <MasonryGallery/>
                </div>
            </section>
            <section id="contact" className="documentSection">
            </section>
        </>
    );
}

export default HomePage;