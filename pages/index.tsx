import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout";
import SchoolList from "../src/components/SchoolList";
import Map from "../src/components/MainMap/Map";
import AppShell from "../src/components/AppShell";
import SCHOOLS from "../data/data.json";
import { ViewState } from "react-map-gl";
import { useState } from "react";

const Home: NextPage = () => {


  const [viewport, setViewport] = useState<ViewState>({
    latitude: -43.5380474930068,
    longitude: 172.626110600652,
    zoom: 15,
    bearing: 0,
    pitch: 0,
  });

  return (
    <>
      <Layout>
        <AppShell>
          <SchoolList
            schools={SCHOOLS}
            viewport={viewport}
            setViewport={setViewport}
          />
          <Map
            schools={SCHOOLS}
            viewport={viewport}
            setViewport={setViewport}
          />
        </AppShell>
      </Layout>
    </>
  );
};

export default Home;
