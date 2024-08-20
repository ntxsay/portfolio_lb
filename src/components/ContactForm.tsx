import React, {useState} from "react";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactForm = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const inputs = form.querySelectorAll('input');
        const errors: string[] = [];
        Array.from(inputs).forEach((input) => {
            const value = input.value;
            if (input.type === 'email') {
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!emailPattern.test(value)) {
                    errors.push("L'adresse email n'est pas valide.");
                }
            } else {
                if (input.getAttribute('name') === 'subject' && value.length < 5) {
                    errors.push("Le sujet doit contenir au moins 5 caractères.");
                } else if (input.getAttribute('name') === 'name' && value.length < 2) {
                    errors.push("Le nom doit contenir au moins 2 caractères.");
                } else if (input.getAttribute('name') === 'lastName' && value.length < 2) {
                    errors.push("Le prénom doit contenir au moins 2 caractères.");
                }
            }
        });

        const textarea = form.querySelector('textarea');
        if (textarea) {
            const value = textarea.value;
            if (value.length < 10) {
                errors.push("Le message doit contenir au moins 10 caractères.");
            }
        }

        setErrors(errors);
        if (errors.length > 0) {
            return;
        }
        const formData = new FormData(form);

        formData.append("access_key", "00e28f1c-8de5-4058-ad26-bc210f5d95fd");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            setSuccessMessage("Votre message a bien été envoyé !");
        }
    }
    
    return (
        <form className="contact__form" onSubmit={onSubmit}>
            <div className="form__inputNamesContainer">
                <div className="form__inputContainer">
                    <label htmlFor="name">Nom</label>
                    <input className="form__input" type="text" name="name" id="name" placeholder="Votre nom"/>
                </div>
                <div className="form__inputContainer">
                    <label htmlFor="lastName">Prénom</label>
                    <input className="form__input" type="text" name="lastName" id="lastName" placeholder="Votre prénom"/>
                </div>
            </div>
            <div className="form__inputContainer">
                <label htmlFor="email">Email</label>
                <input className="form__input" type="email" name="email" id="email" placeholder="Votre email de contact"/>
            </div>
            <div className="form__inputContainer">
                <label htmlFor="subject">Sujet</label>
                <input className="form__input" type="text" name="subject" id="subject" placeholder="Intitulé du sujet"/>
            </div>
            <div className="form__inputContainer">
                <label htmlFor="message">Message</label>
                <textarea className="form__input" name="message" id="message" placeholder="Votre message"></textarea>
            </div>
            {
                successMessage && <div className="form__ResultContainer">
                    <span>{successMessage}</span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                </div>
            }
            <ul className="form__errorContainer">
                {
                    errors.map((error, index) => {
                        return <li className="form__errorContainer__item" key={index}>{error}</li>;
                    })
                }
            </ul>
            {
                successMessage ? null : <button className="form__button" type="submit">Envoyer</button>
            }
        </form>
    );
}

export default ContactForm;