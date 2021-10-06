import type { NextPage } from "next";
import Head from "next/head";
import { withSSRContext, API, graphqlOperation } from "aws-amplify";
import Layout from "../src/components/Layout";
import SchoolList from "../src/components/SchoolList";
import Map from "../src/components/MainMap/Map";
import AppShell from "../src/components/AppShell";
import SCHOOLS from "../data/data.json";
import { ViewState } from "react-map-gl";
import { useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { listSchools } from "../src/graphql/queries";
import { GetStaticProps, GetStaticPropsContext , GetServerSidePropsContext} from 'next'

interface ISchoolProps {
  schools: {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    isFavourite: boolean | undefined;
    nearby?: [];
    Reviews?: [];
    Brief?: [];
    Approval?: [];
  }[];
 
}

const Home = ({schools}:ISchoolProps) => {
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
            schools={schools}
            viewport={viewport}
            setViewport={setViewport}
          />
          <Map
            schools={schools}
            viewport={viewport}
            setViewport={setViewport}
          />
        </AppShell>
      </Layout>
    </>
  );
};

export default withAuthenticator(Home);

export async function getServerSideProps({ req }:GetServerSidePropsContext) {
  const SSR = withSSRContext({ req });
  const  {data}  = await SSR.API.graphql({
    query: listSchools,
    authMode: "AMAZON_COGNITO_USER_POOLS",
  });

  return {
    props: {
      schools: data.listSchools.items,
    },
  };
}
