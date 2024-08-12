import React from "react";

interface TagButtonProps {
    isActive:boolean,
    imageFile:string | null,
    imageAlt:string | undefined,
    text:string | null
}

const TagButton: React.FC<TagButtonProps> = (prop) => {
    return (
        <button className={`tagButton ${prop.isActive ? "active" : ""}`}>
            {
                 prop.imageFile ?
                    <img src={prop.imageFile} alt={prop.imageAlt}/>
                    : null
            }
            <span>{prop.text}</span>
        </button>
    );
}

export default TagButton;