import { education, language } from "../../types";

type props = {
    profile: string | undefined;
    education: education[] | undefined;
    languages: language[] | undefined;
    skills: string[] | undefined;
};
const Information = ({ profile, education, languages, skills }: props) => {
    return (
        <div className="information">
            <h1>Informacion</h1>
            <p>{profile}</p>
            <div>
                <h2>Educación</h2>
                {education?.map((edu) => (
                    <div key={edu.place}>
                        <h3>{edu.title}</h3>
                        <p>{edu.place}</p>
                        <p>{edu.duration}</p>
                    </div>
                ))}
                <h2>Idiomas</h2>
                {languages?.map((lang) => (
                    <div key={lang.name}>
                        <h3>{lang.name}</h3>
                        <p>{lang.level}</p>
                    </div>
                ))}
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <div>
                    {skills?.map((skill) => (
                        <span key={skill}>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Information;
