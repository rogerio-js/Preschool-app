import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/Layout";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";
import SchoolList from "../src/components/SchoolList";
import Map from "../src/components/MainMap/Map";
import AppShell from "../src/components/AppShell";
import SCHOOLS from "../data/data.json";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Layout>
        <AppShell>
          <SchoolList schools={SCHOOLS} />
          <Map schools={SCHOOLS} />
        </AppShell>
      </Layout>
    </>
  );
};

export default Home;
