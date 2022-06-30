import Layout from "../../components/layout/Layout";
import Nav from "../../components/nav/Nav";

const HomePage = () => {
    return (
        <>
        <Nav/>
        <main className="p-4">
            <div>
                <Layout/>
            </div>
        </main>
        </>
    );
};

export default HomePage;