import TechTag from "./TechTag";

type props = {
    src: string;
    title: string;
    description: string;
    date: string;
    link: string;
    tech: string[];
};

const ProjectCard = ({ src, title, description, date, link, tech }: props) => {
    function handleClick() {
        window.open(link, "_blank");
    }

    const techs = tech.map((item, index) => (
        <TechTag key={index} name={item} />
    ));

    return (
        <div className="projectCard">
            <button onClick={handleClick}>
                <div className="image">
                    <img src={src} alt="Imagen de la pagina web"></img>
                </div>

                <div className="cardDivider"></div>
                <div className="cardInfo">
                    <div>
                        <h3>{title}</h3>
                        <h5>{date}</h5>
                    </div>
                    <p>{description}</p>
                </div>
            </button>
            <div className="techDiv">{techs}</div>
        </div>
    );
};

export default ProjectCard;
