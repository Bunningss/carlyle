import styles from "./GridColumn.module.css";

const GridColumn = () => {
  return (
    <div className={styles.gridColumn}>
      <div className={styles.gridData}>Kamrul Haque</div>
      <div className={styles.gridData}>20000 BDT</div>
      <div className={styles.gridData}>27 Aug 2023</div>
      <div className={styles.gridData}>30 Dec 2023</div>
      <div className={styles.gridData}>Sun, Tue, Thur</div>
      <div className={styles.gridData}>active</div>
    </div>
  );
};

export default GridColumn;
