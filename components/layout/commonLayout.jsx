import styles from './styles.module.scss';

const CommonLayout = ({ children }) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export default CommonLayout;