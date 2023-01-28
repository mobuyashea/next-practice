import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";

const name ="Yummy";
const websiteTitle = "Next.js練習網站";

export default function Layout({ children, returnBack }) {
  return (
    <div className={styles.layout}>
      <Head>
        <meta charSet="utf-8 " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Yummy" />
      </Head>
      <header className={styles.header}>
        <h1>{websiteTitle}</h1> 
        <h2>作者：{name} </h2>
      </header>
      <main>{children}</main>
      {returnBack && <Link className={styles.home} href="/">回到首頁</Link>}
    </div>
  );
}
