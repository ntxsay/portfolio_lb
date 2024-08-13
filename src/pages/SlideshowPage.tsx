import projects from "../datas/projects.json";
import {IProjectSchema} from "../interfaces/IProjectSchema.tsx";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {SlideImage} from "yet-another-react-lightbox/dist/types";


const SlideshowPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/#projects');
        console.log('go to home');
    };
    
    const [open, setOpen] = useState(false);
    const [medias, setMedias] = useState<SlideImage[]>([]);

    useEffect(() => {
        const project:IProjectSchema | undefined = projects.find((project:IProjectSchema) => project.id === Number(id));
        
        if (project !== undefined) {
            setMedias(project.medias.map((media:string) => {
                const image: SlideImage = {
                    src: '/' + media,
                    alt: 'Image du projet : ' + project.projectName,
                };
                
                return image;
            }));
        }
        
        setOpen(project !== undefined);
    }, [id])
    
    return (
        <section className={"slideshow"}>
            <Lightbox
                open={open}
                onClose={() => goToHome()}
                slides={medias}
            />
        </section>
    );
}

export default SlideshowPage;