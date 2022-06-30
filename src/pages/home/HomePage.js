import Layout from "../../components/layout/Layout";
import Nav from "../../components/nav/Nav";
import styles from './home.module.css';

const HomePage = () => {
    return (
        <>
        <Nav/>
        <main className={styles.home}>
            <div>
                <Layout/>
            </div>
        </main>
        </>
    );
};

export default HomePage;