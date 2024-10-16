import { ReactNode, useEffect, useState } from "react";

type props = {
    data: { feedback: string; icon: ReactNode; content: string | undefined };
};

const CopyButton = (props: props) => {
    const { feedback, icon, content } = props.data;
    const [timer, setTimer] = useState(1);

    // useEffect(() => {
    //     if (timer > 0) {
    //         const interval = setInterval(() => {
    //             setTimer((prevTimer) => prevTimer - 1);
    //         }, 1000);
    //         return () => {
    //             clearInterval(interval);
    //         };
    //     }
    // }, [timer]);

    function handleClick() {
        console.log("copiado");
        navigator.clipboard.writeText(content || "");
        setTimer(2);
    }
    return (
        <button className="copyButton" onClick={handleClick}>
            <span className="feedback">{feedback}</span>
            {icon}
            {content}
        </button>
    );
};

export default CopyButton;
