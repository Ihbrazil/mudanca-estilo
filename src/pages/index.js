import Head from "next/head";
import App from "../componentes/App/App.jsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div >
          <App/>
      </div> 
    </>
  );
}