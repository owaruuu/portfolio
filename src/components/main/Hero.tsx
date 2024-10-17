import { project } from "../../types";
import ProjectCard from "./project card/ProjectCard";
import "./Hero.css";

type props = {
    data: { projects: project[] | undefined };
};

const Hero = (props: props) => {
    const { data } = props;

    return (
        <main>
            <h1>Proyectos</h1>
            <div className="projects">
                {data &&
                    data.projects?.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                src={project.src}
                                title={project.title}
                                description={project.description}
                                date={project.date}
                                link={project.link}
                                tech={project.tech}
                            />
                        );
                    })}
            </div>

            <div className="sectionDivider"></div>
        </main>
    );
};

export default Hero;
