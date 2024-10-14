import "./Header.css";

type props = {
    data: {
        name: string | undefined;
        title: string | undefined;
        email: string | undefined;
    };
};

const Header = (props: props) => {
    const { name, title, email } = props.data;
    return (
        <header>
            <div className="nameTitle">
                <h1>{name}</h1>
                <h5>{title}</h5>
            </div>

            <button className="emailButton">
                <span>{email}</span>
            </button>
        </header>
    );
};

export default Header;
