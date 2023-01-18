import { gql, ApolloServer } from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const typeDefs = gql`
  type Idea {
    id: String
    title: String
    description: String
  }

  type Query {
    ideas: [Idea]
    idea(id: String): Idea
  }

  type Mutation {
    addIdea(title: String, description: String): Idea
    editIdea(id: String, title: String, description: String): Idea
    deleteIdea(id: String): Idea
  }
`;

const resolvers = {
  Query: {
    ideas: (_parent: any, _args: any, _context: any) => {
      return prisma.idea.findMany();
    },
    idea: (_parent: any, { id }: any, _context: any) => {
      return prisma.idea.findFirst({ where: { id } });
    },
  },
  Mutation: {
    addIdea: (_parent: any, { title, description }: any, _context: any) => {
      return prisma.idea.create({ data: { title, description } });
    },
    editIdea: (
      _parent: any,
      { id, title, description }: any,
      _context: any
    ) => {
      return prisma.idea.update({
        where: { id },
        data: { title, description },
      });
    },
    deleteIdea: (_parent: any, { id }: any, _context: any) => {
      return prisma.idea.delete({ where: { id } });
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
const startServer = apolloServer.start();

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = { api: { bodyParser: false } };
