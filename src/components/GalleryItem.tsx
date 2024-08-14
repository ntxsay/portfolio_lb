import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faImage, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

interface GalleryItemProp {
    icon: string
    iconBackgroundColor: string
    title: string
    imageFile: string
    imageAlt: string
    hasMedias: boolean
    hasDescription: boolean
    onMediasRequested: () => void
    onDescriptionRequested: () => void
}

const GalleryItem:React.FC<GalleryItemProp> = (props) => {

    const [isTapped, setIsTapped] = useState<boolean>(false);
    let backgroundColorClass:string;
    switch (props.iconBackgroundColor) {
        case "default":
            backgroundColorClass = "--default";
            break;
        case "white":
            backgroundColorClass = "--white";
            break;
        default:
            backgroundColorClass = "--default";
            break;
    }

    return (
        <figure className="galleryItem">
            <img src={props.imageFile} alt={props.imageAlt} onClick={() => setIsTapped(true)}/>
            <div className={`galleryItem__overlay ${isTapped ? "--tapped" : ""}`} onClick={() => setIsTapped(false)}>
                <div className={`galleryItem__overlay__logo ${backgroundColorClass}`}>
                    <img src={props.icon} alt={props.imageAlt}/>
                </div>
                <figcaption className="galleryItem__caption">{props.title}</figcaption>
                <div className="galleryItem__buttonContainer">
                    {props.hasMedias ? <button className="galleryItem__button --medias" onClick={props.onMediasRequested}>
                        <FontAwesomeIcon icon={faImage}/>
                        <span>Medias</span>
                    </button> : null}
                    {props.hasDescription ? <button className="galleryItem__button --description" onClick={props.onDescriptionRequested}>
                        <FontAwesomeIcon icon={faCircleInfo}/>
                        <span>Description</span>
                    </button> : null}
                </div>
            </div>
        </figure>
    );
}

export default GalleryItem;