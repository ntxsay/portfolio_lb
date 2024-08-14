import React from "react";
import {ISkillSchema} from "../interfaces/ISkillSchema.tsx";

interface SkillCardProps {
    skill: ISkillSchema
}

const SkillCard: React.FC<SkillCardProps> = (prop) => {
    return (
        <article className="skillTheme" key={prop.skill.name}>
            <div className="skillTheme__header">
                <img src={`icons/${prop.skill.icon}`} alt={prop.skill.iconAlt}/>
            </div>
            <h3 className="skillTheme__title">{prop.skill.name}</h3>
            <p className="skillTheme__description">{prop.skill.description}</p>
            <h4 className="skillTheme__title">{prop.skill.skillContainerName}</h4>
            <ul className="skillTheme__skills">
                {
                    prop.skill.skills.map(skillContainer => {
                        return <li key={skillContainer.id}>
                            <div className="skillTheme__skill"
                                 data-tooltip={skillContainer.iconAlt}>
                                <img className="skillTheme__skill__icon" src={`icons/${skillContainer.icon}`}
                                     alt={skillContainer.iconAlt}/>
                                <span>{skillContainer.name}</span>
                            </div>
                        </li>
                    })
                }
            </ul>
        </article>
    );
}

export default SkillCard;