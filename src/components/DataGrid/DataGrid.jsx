import styles from "./DataGrid.module.css";
import GridColumn from "./GridColumn/GridColumn";

const DataGrid = () => {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.gridHeader}>Name</div>
        <div className={styles.gridHeader}>Fee</div>
        <div className={styles.gridHeader}>Enrollment Date</div>
        <div className={styles.gridHeader}>Expected Finish</div>
        <div className={styles.gridHeader}>Schedule</div>
        <div className={styles.gridHeader}>Status</div>
      </div>
      <GridColumn />
    </>
  );
};

export default DataGrid;
