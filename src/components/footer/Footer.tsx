import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CopyButton from "../misc/CopyButton";

type props = {
    data: {
        email: string | undefined;
        phone: string | undefined;
        linkedin: string | undefined;
    };
};

const Footer = (props: props) => {
    const { email, phone, linkedin } = props.data;
    let shorterLinkedin = linkedin?.substring(12);

    return (
        <footer>
            <CopyButton
                data={{
                    feedback: "Email copiado!",
                    icon: <MdEmail />,
                    content: email,
                }}
            ></CopyButton>
            <CopyButton
                data={{
                    feedback: "Telefono copiado!",
                    icon: <FaPhoneSquareAlt />,
                    content: phone,
                }}
            ></CopyButton>
            <button
                onClick={() => {
                    window.open(linkedin, "_blank");
                }}
            >
                <FaLinkedin /> {shorterLinkedin}
            </button>
        </footer>
    );
};

export default Footer;
