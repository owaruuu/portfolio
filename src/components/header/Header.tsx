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
                <h6>{title}</h6>
            </div>
        </header>
    );
};

export default Header;
