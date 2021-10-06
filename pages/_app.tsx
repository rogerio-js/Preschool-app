import { ThemeProvider } from "next-themes";
import "../styles/tailwindcss.css";
import "mapbox-gl/dist/mapbox-gl.css";
import type { AppProps } from "next/app";
import Amplify from 'aws-amplify'
import config from '../src/aws-exports'

Amplify.configure({ ...config, ssr: true })


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
