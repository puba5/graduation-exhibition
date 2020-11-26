import Head from "next/head";
import styles from "../styles/Home.module.css";
import ProjectList from "./components/ProjectList/projectList";
import Header from "./components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>홍대컴공졸전</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          홍익대학교 컴퓨터공학과
          <br /> 졸업전시회에 오신걸 환영합니다
        </h1>
        <br />
        <br />
        <br />
        <ProjectList />
      </main>
    </div>
  );
}
