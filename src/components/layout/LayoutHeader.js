import styles from './layoutHeader.module.css';

const LayoutHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Billings</h1>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </div>
      <div>
        <button>Add New Bill</button>
      </div>
    </header>
  );
};

export default LayoutHeader;
