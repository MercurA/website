import React from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';

const menuFormat = {
    brandName: "Mercurial C.",
    work: "work",
    about: "about",
    contact: "contact",
    socialMedia: [
        {
            icon: "/icons/instagram.svg",
            name: "instagram",
            url: "https://www.instagram.com/cypher_mercurius/"
        },
        {
            icon: "/icons/500px.svg",
            name: "500px",
            url: "https://500px.com/p/Horea?view=photos"
        },
    ]
}

const Menu = () => {
    const router = useRouter();

    const handleNavigation = (e) => {
        const innerText = e.target.innerText;
        console.log(innerText)
        if(innerText === 'work' || innerText === 'Mercurial C.') {
            router.push(`/`)
        } else {
            router.push(`${innerText}`);
        }
    }

    return (
        <>
            <div className={styles.firstGroup}>
                <div className={styles.brandName} onClick={handleNavigation}>
                    <span>{menuFormat.brandName}</span>
                </div>
                <div className={styles.menuItem} onClick={handleNavigation}>
                    <span>{menuFormat.work}</span>
                </div>
                <div className={styles.menuItem} onClick={handleNavigation}>
                    <span>{menuFormat.about}</span>
                </div>
                <div className={styles.menuItem} onClick={handleNavigation}>
                    <span>{menuFormat.contact}</span>
                </div>
            </div>
            <div className={styles.socialMedia}>
                {
                    menuFormat.socialMedia.map((item, i) => (
                        <a href={item.url} target="_blank" rel="noreferrer" key={i+1}>
                            <Image key={i} src={item.icon} alt={item.name} layout="intrinsic" width={30} height={30}/>
                        </a>
                    ))
                }
            </div>
        </>
    )
}

export default Menu;