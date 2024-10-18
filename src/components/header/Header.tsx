import { PiStarFourFill } from "react-icons/pi";
import "./Header.css";

type props = {
    data: {
        name: string | undefined;
        title: string | undefined;
    };
};

const Header = (props: props) => {
    const { name, title } = props.data;

    return (
        <header>
            <div className="nameTitle">
                <h1>{name}</h1>
                <PiStarFourFill />
                <h1>{title}</h1>
            </div>
        </header>
    );
};

export default Header;
