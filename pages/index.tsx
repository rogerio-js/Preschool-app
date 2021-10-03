import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/Layout";
import styles from "../styles/Home.module.css";



const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <div>HomePage</div>
      </Layout>
    </div>
  );
};

export default Home;
