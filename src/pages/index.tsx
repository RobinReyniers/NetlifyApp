import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { createClient } from "next-sanity";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pets }: any) {
  return (
    <ul>
      {pets.map((pet: any) => (
        <li key={pet._id}>{pet?.name}</li>
      ))}
    </ul>
  );
}

const client = createClient({
  projectId: "lqz08o01",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
export async function getStaticProps() {
  const pets = await client.fetch(`*[_type == "pet"]`);

  return {
    props: {
      pets,
    },
  };
}
