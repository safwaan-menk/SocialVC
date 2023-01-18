import Head from "next/head";

import Ideas from "@/components/Ideas";
import CreateIdea from "@/components/CreateIdea";
import { useMutation } from "@apollo/client";
import { ADD_IDEA, DELETE_IDEA } from "@/graphql/queries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  const [addIdea] = useMutation(ADD_IDEA, {
    onCompleted: (data) => {
      window.location.reload;
    },
  });

  const [deleteIdea] = useMutation(DELETE_IDEA, {
    onCompleted: (data) => {
      window.location.reload;
    },
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log();
    console.log();
    addIdea({
      variables: {
        title: e.target.title.value,
        description: e.target.description.value,
      },
    });
  };

  const onDelete = (id: String) => {
    deleteIdea({
      variables: { id },
    });
  };

  return (
    <div className="snap-mandatory snap-y overflow-scroll z-0 h-screen">
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
      <section id="skills" className="snap-start">
        <CreateIdea onSubmit={onSubmit}></CreateIdea>
        <Ideas onDelete={onDelete} />
      </section>
    </div>
  );
}
