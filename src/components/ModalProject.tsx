﻿import ReactModal from 'react-modal';
import {IProjectSchema} from "../interfaces/IProjectSchema.tsx";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

ReactModal.setAppElement('#root');

interface ModalProjectProp {
    project: IProjectSchema | undefined
    onClose: () => void
    isOpen: boolean
}

const ModalProject: React.FC<ModalProjectProp> = (props) => {
    return (
        <ReactModal
            isOpen={props.isOpen}
            contentLabel="onRequestClose Example"
            onRequestClose={props.onClose}
            className="Modal"
            overlayClassName="Overlay">
            <div className="Modal__titleBar">
                <h2>{props.project?.projectName}</h2>
                <button className={"Modal__closeButton"} onClick={props.onClose}>
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
            <div className={"Modal__contentContainer"}>
                <div className="Modal__content">
                    <div className="Modal__content__imageContainer">
                        <img src={props.project?.medias[0]} alt={props.project?.projectName}/>
                    </div>
                    <div className="Modal__content__description">
                        <div className="projectItemGroup projectStatus">
                            <h3>Status :</h3>
                            <span>{props.project?.status}</span>
                        </div>
                        <div className="projectItemGroup projectCategory">
                            <h3>Type de projet :</h3>
                            <span>{props.project?.category}</span>
                        </div>
                        <div className="projectItemGroup projectDescription">
                            <h3>Description :</h3>
                            <p>{props.project?.description}</p>
                        </div>
                        <div className="projectItemGroup projectFramework">
                            <h3>Framework utilisé :</h3>
                            <span>{props.project?.framework}</span>
                        </div>
                        <div className="projectItemGroup projectLanguages">
                            <h3>Language(s) utilisé(s) :</h3>
                            <ul>
                                {props.project?.languages.map((language, index) => {
                                    return <li key={index}>{language}</li>
                                })}
                            </ul>
                        </div>
                        <div className="projectItemGroup projectSupportedPlatforms">
                            <h3>Plateforme(s) supportée(s) :</h3>
                            <ul>
                                {props.project?.supportedPlatforms.map((platform, index) => {
                                    return <li key={index}>{platform}</li>
                                })}
                            </ul>
                        </div>
                        <div className="projectItemGroup projectLinks">
                            <h3>Liens :</h3>
                            <ul>
                                {props.project?.links.map((link, index) => {
                                    return <li key={index}><Link to={link.url}>{link.name}</Link></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Modal__BottomButtonBar">
                <button onClick={props.onClose}>
                    <span>Fermer</span>
                </button>
            </div>
        </ReactModal>
    );
}

export default ModalProject;