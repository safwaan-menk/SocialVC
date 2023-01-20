import { useQuery } from "@apollo/client";
import { GET_IDEAS } from "../graphql/queries";
import Link from "next/link";
import { motion } from "framer-motion";

const Idea = ({ title, description, id, onDelete }: any) => {
  return (
    <div className="m-10 h-96 p-10 border rounded ">
      <h2 className="mb-10 font-bold text-[rgb(142,177,217)]"> {title} </h2>
      <h3> {description} </h3>

      {/* <p>{id} </p> */}
      {/* <button> Edit </button> */}
      {/* <button onClick={() => onDelete(id)}>Delete</button> */}
    </div>
  );
};

export default function Ideas({ onDelete }: any) {
  const { loading, error, data } = useQuery(GET_IDEAS);
  if (loading) return <div> loading... </div>;
  if (error) return <div> error... </div>;
  console.log(data);
  // eslint-disable-next-line react/jsx-key
  return (
    <motion.div className="h-screen p-52  flex flex-col text-center justify-center  text-2xl">
      {/* <h1 className="font-bold text-[rgb(142,177,217)] tracking-[15px]">
        Ideas
      </h1> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen  flex flex-row text-center justify-center  text-2xl"
      >
        {data.ideas.map((ideaData: any) => (
          <Link
            key={ideaData.id}
            href={`/idea/[id]`}
            as={`/idea/${ideaData.id}`}
          >
            <Idea onDelete={onDelete} {...ideaData} />
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
