import { createContext } from "react";
import Layout from "../../components/layout/Layout";
import Nav from "../../components/nav/Nav";

const HomePage = () => {

    return (
        <>
        <Nav/>
        <main className="p-8">
            <div>
                <Layout/>
            </div>
        </main>
        </>
    );
};

export default HomePage;