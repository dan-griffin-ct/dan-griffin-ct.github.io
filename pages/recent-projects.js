import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function RecentProjects() {
return (
    <div className={styles.container}>
      <Head>
        <title>&#127875; Dan Griffin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main>
        <div className={styles.wavetop}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>

        <div>
          <h1 className={styles.pageTitle}>Recent Projects</h1>
        </div>
        <div className={styles.grid}>
          <a
            target="_blank"
            href="https://github.com/dan-griffin-ct/pyparse"
            className={styles.cardProject}
          >
            <h5>PyParse</h5>
            <p>A text parsing script written purely in Python that tallies the occurence of every letter in the English alphabet
              with a toggle for tallying special characters</p>
          </a>

          <a
            target="_blank"
            href="https://github.com/dan-griffin-ct/blog-end"
            className={styles.cardProject}
          >
            <h5>Blog End</h5>
            <p>A Lord of the Rings (LOTR) themed blog written with Rails 7, complete with full CRUD actions, user authentication via Devise, and custom styling</p>
          </a>

          <a
            href="/"
            className={styles.cardProject}
          >
            <h5>This site!</h5>
            <p>
              This site was created utilizing Node20, React.js, and Next.js
            </p>
          </a>
        </div>
        <a href="/" className={styles.backLink}>
          <p>&larr;</p>
        </a>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          overflow: hidden;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
