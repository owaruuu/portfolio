type props = {
    src: string;
    title: string;
    description: string;
    link: string;
    tech: string[];
};

const ProjectCard = ({ src, title, description, link, tech }: props) => {
    function handleClick() {
        window.open(link, "_blank");
    }

    const techs = tech.map((item, index) => <span key={index}>{item}</span>);

    return (
        <div className="projectCard">
            <button onClick={handleClick}>
                <img src={src} alt="Imagen de la pagina web"></img>
                <div className="cardDivider"></div>
                <h2>{title}</h2>
                <p>{description}</p>
            </button>
            {techs}
        </div>
    );
};

export default ProjectCard;
