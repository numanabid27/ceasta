import React from 'react';
import styles from "./hero.module.css";
import Link from 'next/link';

type prop = {
    bg : string,
    heading : string,
    linkBtn : string,
    title : string,
    desc :  string
}

export const Hero = ({bg, heading, linkBtn, title, desc}:prop) => {
  return (
    <section style={{backgroundImage : bg}} className={styles.hero_bg}>
        <div className='container'>
            <div className={styles.banner_text}>
                <p>{title}</p>
                <h1>{heading}</h1>
                <h6>{desc}</h6>
                <Link href="#">{linkBtn}</Link>
            </div>
        </div>
    </section>
  )
}
