import { IDEA } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function ShowIdea() {
  const router = useRouter();
  const { id } = router.query;
  console.log("id:" + id);
  const { loading, error, data } = useQuery(IDEA, { variables: { id: id } });
  if (loading) return "loading";
  if (error) return error;
  console.log(data);
  return (
    <div>
      <h1> {data.idea.title}</h1>
      <h2> {data.idea.description}</h2>
    </div>
  );
}
