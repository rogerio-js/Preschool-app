import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/Layout";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";
import SchoolList from "../src/components/SchoolList";
import Map from "../src/components/Map";
import AppShell from "../src/components/AppShell";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Layout>
        <AppShell>
          <SchoolList />
          <Map />
        </AppShell>
      </Layout>
    </>
  );
};

export default Home;
