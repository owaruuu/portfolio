import React from "react";

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
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>{email}</p>
        </header>
    );
};

export default Header;
