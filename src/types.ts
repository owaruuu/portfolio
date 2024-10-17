export type siteData = {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    hobbies: string[];
    projects: project[];
    profile: string;
    location: string;
    education: education[];
    languages: language[];
    skills: string[];
};

export type project = {
    src: string;
    title: string;
    description: string;
    date: string;
    link: string;
    tech: string[];
};

export type education = {
    title: string;
    place: string;
    duration: string;
};

export type language = {
    name: string;
    level: string;
};
