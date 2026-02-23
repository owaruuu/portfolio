import { project } from "../../types";
import ProjectCard from "./project card/ProjectCard";
import "./Hero.css";

type props = {
    projects: project[] | undefined;
};

const Hero = (props: props) => {
    const { projects } = props;

    return (
        <>
            <h1>Projects</h1>
            <div className="projects">
                {projects &&
                    projects?.map((project, index) => {
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
        </>
    );
};

export default Hero;
