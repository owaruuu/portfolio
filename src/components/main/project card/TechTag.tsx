type props = {
    name: string;
};

const TechTag = ({ name }: props) => {
    return <div className="techTag">{name}</div>;
};

export default TechTag;
