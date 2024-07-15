import { NextPage } from "next";
import styles from './not-found.module.sass';

const NotFoundPage: NextPage = (): JSX.Element => {
    return (
        <section
        className={styles.banner}
        >
            <h1>404 Not found</h1>
        </section>
    )
};

export default NotFoundPage;