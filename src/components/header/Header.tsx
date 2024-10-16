import { useEffect, useState } from "react";
import "./Header.css";
import { MdOutlineEmail } from "react-icons/md";
import CopyFeedback from "./CopyFeedback";

type props = {
    data: {
        name: string | undefined;
        title: string | undefined;
        email: string | undefined;
    };
};

const Header = (props: props) => {
    const { name, title, email } = props.data;
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [timer]);

    function handleClick() {
        console.log("copiado");
        navigator.clipboard.writeText(email || "");
        setTimer(2);
    }

    return (
        <header>
            <div className="nameTitle">
                <h1>{name}</h1>
                <h6>{title}</h6>
            </div>
            {timer > 0 && <CopyFeedback />}

            <button className="emailButton" onClick={handleClick}>
                <MdOutlineEmail />
                <span>{email}</span>
            </button>
        </header>
    );
};

export default Header;
