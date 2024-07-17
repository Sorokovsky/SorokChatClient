'use client'
import { NextPage } from "next";
import styles from './index.module.sass';
import Search from "@/ui/search/search"
import cn from "classnames";

const HomePage: NextPage = (): JSX.Element => {
    return (
        <>
            <section>
                <div className={cn(styles.container)}>
                    <div className={cn(styles.left)}>
                        <Search 
                        searchHandler={ev => {console.log(ev.target.value);}
                        }
                        placeholder={"Search"} 
                        />
                    </div>
                    <div className={cn(styles.right)}>
                        <div>Hello Page</div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default HomePage;