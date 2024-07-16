import { NextPage } from "next";
import styles from './not-found.module.sass';
import cn from "classnames";

const NotFoundPage: NextPage = (): JSX.Element => {
    return (
        <section
        className={cn(styles.banner)}
        >
            <h1>404 Not found</h1>
        </section>
    );
};

export default NotFoundPage;