import { certification, education, language, project } from "../../types";
import "./Hero.css";
import "./Information.css";
import Information from "./Information";
import Hero from "./Hero";

type props = {
    data: {
        projects: project[] | undefined;
        profile: string | undefined;
        education: education[] | undefined;
        certifications: certification[] | undefined;
        languages: language[] | undefined;
        skills: string[] | undefined;
    };
};

const Main = (props: props) => {
    const { data } = props;

    return (
        <main>
            <Hero projects={data.projects} />
            <div className="sectionDivider"></div>
            <Information
                profile={data.profile}
                education={data.education}
                certifications={data.certifications}
                languages={data.languages}
                skills={data.skills}
            />
        </main>
    );
};

export default Main;
