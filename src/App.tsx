import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { getData } from "./db/queries";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
    const dataQuery = useQuery({ queryKey: ["siteData"], queryFn: getData });

    const headerData = {
        name: dataQuery.data?.name,
        title: dataQuery.data?.title,
        location: dataQuery.data?.location,
    };

    const mainData = {
        projects: dataQuery.data?.projects,
        profile: dataQuery.data?.profile,
        education: dataQuery.data?.education,
        certifications: dataQuery.data?.certifications,
        languages: dataQuery.data?.languages,
        skills: dataQuery.data?.skills,
    };

    const footerData = {
        email: dataQuery.data?.email,
        phone: dataQuery.data?.phone,
        linkedin: dataQuery.data?.linkedin,
    };

    return (
        <>
            <Header data={headerData} />

            <Main data={mainData}></Main>

            <Footer data={footerData}></Footer>
        </>
    );
}

export default App;
