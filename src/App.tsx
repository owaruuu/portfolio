import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Hero from "./components/main/Hero";
import { getData } from "./db/queries";
import Header from "./components/header/Header";

function App() {
    const dataQuery = useQuery({ queryKey: ["siteData"], queryFn: getData });
    console.log("🚀 ~ Hero ~ dataQuery:", dataQuery);
    const headerData = {
        name: dataQuery.data?.name,
        title: dataQuery.data?.title,
        email: dataQuery.data?.email,
    };

    return (
        <>
            <Header data={headerData} />

            <Hero></Hero>

            {/* <footer>footer</footer> */}
        </>
    );
}

export default App;
