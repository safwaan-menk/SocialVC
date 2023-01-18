import { useQuery } from "@apollo/client";
import { GET_IDEAS } from "../graphql/queries";
import Link from "next/link";

const Idea = ({ title, description, id, onDelete }: any) => {
  return (
    <div>
      <h2 className="p-10 text-red-500"> {title} </h2>
      <h3> {description} </h3>
      <p>{id} </p>

      <button> Edit </button>
      <button onClick={() => onDelete(id)}>Delete</button>
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
    <div className="h-screen relative flex flex-row justify-center items-center">
      {data.ideas.map((ideaData: any) => (
        <Link key={ideaData.id} href={`/idea/[id]`} as={`/idea/${ideaData.id}`}>
          <Idea onDelete={onDelete} {...ideaData} />
        </Link>
      ))}
    </div>
  );
}
