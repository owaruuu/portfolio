import { education, language } from "../../types";
import { PiStarFourFill } from "react-icons/pi";
import { TbMinusVertical } from "react-icons/tb";

type props = {
    profile: string | undefined;
    education: education[] | undefined;
    languages: language[] | undefined;
    skills: string[] | undefined;
};
const Information = ({ profile, education, languages, skills }: props) => {
    return (
        <div className="information">
            <div className="profile">
                <h1>Informacion</h1>
                <p>{profile}</p>
            </div>
            <div className="sideBySide">
                <div className="educations">
                    <h2>Educación</h2>
                    {education ? separateEducationWithStar(education) : ""}
                </div>
                <div className="languages">
                    <h2>Idiomas</h2>
                    {languages ? separateLangWithStar(languages) : ""}
                </div>
            </div>
            <div className="sectionDivider"></div>
            <div className="skills">
                <h2>Tecnologías</h2>
                <div>
                    {skills?.map((skill) => (
                        <span key={skill}>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

function separateEducationWithStar(array: any) {
    return array.map((elem: any, index: number) => {
        return (
            <>
                <div key={elem.place}>
                    <h3>{elem.title}</h3>
                    <p>{elem.place}</p>
                    <p>{elem.duration}</p>
                </div>
                {index + 1 !== array.length && (
                    <div className="star">
                        <PiStarFourFill />
                    </div>
                )}
            </>
        );
    });
}

function separateLangWithStar(array: any) {
    return array.map((elem: any, index: number) => {
        return (
            <>
                <div key={elem.name}>
                    <h3>{elem.name}</h3>
                    <TbMinusVertical />
                    <p>{elem.level}</p>
                </div>
                {index + 1 !== array.length && (
                    <div className="star">
                        <PiStarFourFill />
                    </div>
                )}
            </>
        );
    });
}

export default Information;
