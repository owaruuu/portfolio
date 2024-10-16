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
    const { email, phone } = props.data;
    let { linkedin } = props.data;
    linkedin = linkedin?.substring(12);

    return (
        <footer>
            <CopyButton
                data={{
                    feedback: "Email copiado!",
                    icon: <MdEmail />,
                    content: email,
                }}
            ></CopyButton>
            <button>
                <FaPhoneSquareAlt /> {phone}
            </button>
            <button>
                <FaLinkedin /> {linkedin}
            </button>
        </footer>
    );
};

export default Footer;
