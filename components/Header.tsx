import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import CreateIdea from "./CreateIdea";
import { useMutation } from "@apollo/client";
import { ADD_IDEA } from "@/graphql/queries";

type Props = {};

export default function Header({}: Props) {
  const [addIdea] = useMutation(ADD_IDEA, {
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
  var clickMe = () => {
    <CreateIdea onSubmit={onSubmit} visible={true} />;
  };
  return (
    <header className="sticky top-0 opacity-70 bg-[rgb(142,177,217)]">
      <div className="p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          {/* Idea Modal, Random Idea */}
          <button
            onClick={clickMe}
            className="border-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Post
          </button>
          <button className="border-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Random Idea
          </button>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          <IconContext.Provider
            value={{ className: "shared-class", size: "42" }}
          >
            {/* Account Settings and NotificaTIONS*/}
            <MdOutlineNotificationsActive />
            <FcSettings />
          </IconContext.Provider>
        </motion.div>
      </div>
    </header>
  );
}
