import TagButton from "./TagButton.tsx";
import projects from "../datas/projects.json";
import {IProjectSchema} from "../interfaces/IProjectSchema.tsx";
import GalleryItem from "./GalleryItem.tsx";
// @ts-ignore
import {SlideImage} from "yet-another-react-lightbox/dist/types";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

import {useState} from "react";
import ModalProject from "./ModalProject.tsx";

const Gallery = () => {

    const [activeProjectCategory, setActiveProjectCategory] = useState<string>("Tous");
    const [sortedProjects, setSortedProjects] = useState<IProjectSchema[]>(projects);
    const [activeProject, setActiveProject] = useState<IProjectSchema | undefined>(undefined);
    const [openSlideshow, setOpenSlideshow] = useState(false);
    const [medias, setMedias] = useState<SlideImage[]>([]);
    const [showModal, setShowModal] = useState(false);

    const onTagClicked = (category:string) => {
        setActiveProjectCategory(category);
        setSortedProjects(category === "Tous"
            ? projects
            : projects.filter(x => x.category === category));

        setTimeout(() => {
            window.location.href = '#projects';
        }, 100);
    }
    
    const onModalCloseRequested = () => {
        setShowModal(false);
    }
    
    const onDescriptionRequested = (id:number) => {
        const project:IProjectSchema | undefined = projects.find((project:IProjectSchema) => project.id === id);
        setActiveProject(project);
        if (project === undefined) 
            return;
        setShowModal(true);
    }
    
    const onMediasRequested = (id:number) => {
        const project:IProjectSchema | undefined = projects.find((project:IProjectSchema) => project.id === id);
        
        if (project !== undefined) {
            setMedias(project.medias.map((media:string) => {
                const isVideo = media.endsWith(".mp4");
                const slideImage: SlideImage = {
                    type: !isVideo ? "image" : "video",
                    alt: 'Image du projet : ' + project.projectName,
                };
                
                if (isVideo) {
                    slideImage.sources = [
                        {
                            src: '/' + media,
                            type: "video/mp4",
                        },
                    ];
                } else {
                    slideImage.src = '/' + media;
                }
                
                return slideImage;
            }));
        }
        
        setOpenSlideshow(project !== undefined);
    }
    
    return (
        <div className="galleryContainer">
            <div className="galleryContainer__tagContainer">
                <TagButton imageFile={null} imageAlt={undefined}
                           text={"Tous"} isActive={activeProjectCategory === "Tous"} onTagClicked={() => onTagClicked("Tous")}/>
                {
                    projects
                        .map(x => x.category)
                        .filter((value, index, self) => self.indexOf(value) === index)
                        .map((category:string, index) => {
                        return <TagButton key={index} imageFile={null} imageAlt={undefined}
                                   text={category} isActive={activeProjectCategory === category} onTagClicked={() => onTagClicked(category)}/>
                    })
                }
            </div>
            <div className="galleryContainer__container">
                {
                    sortedProjects.map((project:IProjectSchema, index) => {
                        return <GalleryItem key={index} onMediasRequested={() => onMediasRequested(project.id)} onDescriptionRequested={() => onDescriptionRequested(project.id)} title={project.projectName} icon={`icons/${project.icon}`} iconBackgroundColor={project.iconBackgroundColor} imageFile={project.medias[0]} imageAlt={project.projectName}
                         hasMedias={project.medias.length > 0} hasDescription={project.description.length > 0}/>
                    })
                }
            </div>
            <Lightbox
                plugins={[Video]}
                open={openSlideshow}
                close={() => setOpenSlideshow(false)}
                slides={medias}
            />
            <ModalProject project={activeProject} onClose={onModalCloseRequested} isOpen={activeProject !== null && showModal}/>
        </div>
    );
}

export default Gallery;