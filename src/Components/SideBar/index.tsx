import Image from 'next/image';
import Link from 'next/link';
import { Data } from './data';
import styles from'./styles.module.scss'

export function SideBar() {

    return (
        <div className={styles.container}>
            <header>
                <Image 
                    width={120}
                    height={120}
                    src="/img/logo.png"
                    objectFit='contain' 
                    alt="Logo" />
            </header>
            <div className={styles.content}>
                <ul className="nav-menu-items">
                    {Data.map((item, index) => {
                    return (
                        <div key={index} className={styles.list}>
                            <li> 
                                <Link href={item.url} >
                                    <a>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </a>
                                </Link>
                            </li>
                        </div>
                    );
                    }
                )}
                </ul>
            </div>
        </div>
    );
}