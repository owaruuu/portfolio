export type siteData = {
    name: string;
    title: string;
    email: string;
    phone: string;
    age: number;
    city: string;
    hobbies: string[];
    projects: project[];
};

export type project = {
    src: string;
    title: string;
    description: string;
    link: string;
    tech: string[];
};
