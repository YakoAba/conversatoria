import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Entre na área exclusiva de alunos, clicando &nbsp;
            <code className={styles.code}>AQUI</code>
          </p>
          {/* <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div> */}
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/splash.png"
            alt="Next.js Logo"
            width={400}
            height={300}
            priority
          />
          {/* <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}
        </div>

        <div className={styles.grid}>
          <a
            //     href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Cadastro <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Transforme sua paixão por karate em uma jornada inesquecível,
              junte-se ao nossa intituto de mess no esporte e registre-se
              agora.
            </p>
          </a>

          <a
            //   href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Diretoria <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Conheça a equipe de liderança da IKAM, responsável por conduzir o
              esporte e garantir o sucesso de seus atletas.
            </p>
          </a>

          <a
            //    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            //  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Diretoria <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Entre em contato com o IKAM para mais informações sobre aulas,
              treinamentos e eventos. Envie uma mensagem hoje!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
