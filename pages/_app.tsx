import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { MantineProvider } from "@mantine/core";

let uri = "http://localhost:3000/api/graphql";
if (process.env.NODE_ENV === "production") {
  uri = "https://socialvc.netlify.app/api/graphql";
}

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <ApolloProvider client={client}>
        <Component {...pageProps} />{" "}
      </ApolloProvider>
    </MantineProvider>
  );
}
