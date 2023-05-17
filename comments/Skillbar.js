import styles from '@/styles/skillbar.module.css';
const Skillbar = () => {
    return (
        <div>
            <div className={styles.skill}>
            <h2 className={styles.titleText}>Skill Bar Component</h2>
            <div className={styles.skillBox}>
                <span className={styles.title}> HTML</span>
                <div className={`${styles.skillBar} ${styles.html}`}>
                    <span className={styles.skillPer}> 
                    <span className={styles.tooltip}>90%</span>
                    </span>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Skillbar;