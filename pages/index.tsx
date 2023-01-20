import Head from "next/head";

import Ideas from "@/components/Ideas";
import { useMutation } from "@apollo/client";
import { ADD_IDEA, DELETE_IDEA } from "@/graphql/queries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  const [deleteIdea] = useMutation(DELETE_IDEA, {
    onCompleted: (data) => {
      window.location.reload;
    },
  });

  const onDelete = (id: String) => {
    deleteIdea({
      variables: { id },
    });
  };

  return (
    <div className="snap-mandatory snap-y overflow-scroll h-screen scrollbar scrollbar-track-white scrollbar-thumb-[rgb(142,177,217)]">
      <Head>
        <title> SocialVC </title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* Navbar */}
      {/* Sidebar */}
      <section></section>
      <section id="ideas" className="snap-end">
        <Ideas onDelete={onDelete} />
      </section>
    </div>
  );
}
