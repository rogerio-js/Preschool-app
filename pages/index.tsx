import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/Layout";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Layout>
        <h1>Homepage</h1>
      </Layout>
    </div>
  );
};

export default Home;
