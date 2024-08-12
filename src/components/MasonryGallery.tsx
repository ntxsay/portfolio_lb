import TagButton from "./TagButton.tsx";
import projects from "../datas/projects.json";
import {IProjectSchema} from "../interfaces/IProjectSchema.tsx";

const MasonryGallery = () => {
    return (
        <div className="masonryGallery">
            <div className="masonryGallery__tagContainer">
                {
                    projects.map((project:IProjectSchema, index) => {
                        return <TagButton key={index} imageFile={`src/assets/icons/${project.icon}`} imageAlt={project.iconAlt}
                                   text={project.framework} isActive={false}/>
                    })
                }
            </div>
            <div className="masonryGallery__container">
                
            </div>
        </div>
    );
}

export default MasonryGallery;