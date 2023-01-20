import { MdOutlineNotificationsActive } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { ADD_IDEA } from "@/graphql/queries";

import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {};

export default function Header({}: Props) {
  const [open, setOpen] = useState(false);
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");

  const [addIdea] = useMutation(ADD_IDEA, {
    onCompleted: (data) => {
      window.location.reload;
    },
  });

  const cancelButtonRef = useRef(null);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(ideaTitle);
    console.log(ideaDescription);
    addIdea({
      variables: {
        title: ideaTitle,
        description: ideaDescription,
      },
    });
    setOpen(false);
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                        <FcSettings className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className=" text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h2"
                          className="p-5 tracking-wide text-4xl font-medium leading-6 text-gray-900"
                        >
                          Post your
                          <span className="ml-3 tracking-widest font-bold text-[rgb(142,177,217)]">
                            Idea
                          </span>
                        </Dialog.Title>
                        <div className="w-screen">
                          <form
                            name="text"
                            onSubmit={onSubmit}
                            action="/send-data-here"
                            method="post"
                          >
                            <div>
                              <div>
                                <label
                                  className="tracking-widest p-2"
                                  htmlFor="Title"
                                >
                                  Title:
                                </label>
                                <input
                                  onChange={(e) => {
                                    setIdeaTitle(e.target.value);
                                  }}
                                  className="modalInput"
                                  type="text"
                                  id="title"
                                  name="Title"
                                />
                              </div>
                              <div>
                                <label
                                  className=" p-2 tracking-widest"
                                  htmlFor="Description"
                                >
                                  Description:
                                </label>
                                <input
                                  onChange={(e) => {
                                    setIdeaDescription(e.target.value);
                                  }}
                                  className="modalInput"
                                  type="text"
                                  id="description"
                                  name="Description"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-[rgb(142,177,217)] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={onSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="sticky top-0 opacity-70 z-20 bg-[rgb(142,177,217)]">
        <div className="p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center">
          <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center"
          >
            {/* Idea Modal, Random Idea */}
            <button
              onClick={() => setOpen(true)}
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
    </>
  );
}
