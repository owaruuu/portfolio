import { project } from "../../types";
import "./Hero.css";
import ProjectCard from "./project card/ProjectCard";

type props = {
    data: { projects: project[] | undefined };
};

const Hero = (props: props) => {
    const { data } = props;

    return (
        <main>
            {data &&
                data.projects?.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            src={project.src}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            tech={project.tech}
                        />
                    );
                })}
        </main>
    );
};

export default Hero;
