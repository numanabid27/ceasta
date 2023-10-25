"use client";

import Image from "next/image";
import { NAV_BAR } from "./header.constant";
import Link from "next/link";
import logo from "../../../../public/img/logo.png";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";


const Header = () => {
  const router = useRouter();
  const classname = router.pathname === "/" ? "addclass" : "remoce xlc";

  return(
    <>
      <header>
        <nav className={styles.header_row + " container"}>
          <div className={styles.nav_logo}>
            <Image src={logo} alt="" />
          </div>
          <div className={styles.nav_list}>
            {
              NAV_BAR.map((items, i)=>{
                return(
                  <Link href={items.url} key={i.toString()} className={classname}>
                    {items.item}
                  </Link>
                )
              })
            }
          </div>
          <div className={styles.nav_btn}>
            <Link href="">Apply Now</Link>
            <Link href="">LOGIN</Link>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Header;

