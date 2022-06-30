import styles from './layout.module.css';
import LayoutBody from "./LayoutBody";
import LayoutHeader from "./LayoutHeader";

const Layout = () => {
    return (
        <div className={styles}>
            <LayoutHeader/>
            <LayoutBody/>
        </div>
    );
};

export default Layout;