import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>홍대컴공졸전</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          홍익대학교 컴퓨터공학과
          <br /> 졸업전시회에 오신걸 환영합니다
        </h1>

        <div className={styles.grid}>
          <a href="/poty" className={styles.card}>
            <h3>POTY &rarr;</h3>
            <p>Youtube 댓글의 하이라이트를 모아서 보여드립니다! </p>
          </a>

          <a href="" className={styles.card}>
            <h3>POTY &rarr;</h3>
            <p>Youtube 댓글의 하이라이트를 모아서 보여드립니다! </p>
          </a>

          <a href="" className={styles.card}>
            <h3>POTY &rarr;</h3>
            <p>Youtube 댓글의 하이라이트를 모아서 보여드립니다! </p>
          </a>

          <a href="" className={styles.card}>
            <h3>POTY &rarr;</h3>
            <p>Youtube 댓글의 하이라이트를 모아서 보여드립니다! </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
