import Head from "next/head";
import styles from "../styles/Home.module.css";
import Socket from '../api/socket/Socket'
import ProjectList from "./components/ProjectList/projectList";
import Header from "./components/header";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    (async () => {
      // console.log( await Socket.getComments(5) );
      // Socket.putComment(5, {name:"유현우", company: "네카라쿠배", age: 26})
      // Socket.putComment(6, {name:"천성혁", company: "카카오", age: 25})
      // Socket.putComment(5, {name:"백경현", company: "라인", age: 25})
    })();
  }, [])

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
