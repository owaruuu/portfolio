export type siteData = {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    age: number;
    city: string;
    hobbies: string[];
    projects: project[];
};

export type project = {
    src: string;
    title: string;
    description: string;
    date: string;
    link: string;
    tech: string[];
};
