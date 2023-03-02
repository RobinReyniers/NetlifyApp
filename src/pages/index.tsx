import { createClient } from "next-sanity";

export default function Home({ pets }: any) {
  return (
    <>
      <div>These are my beautiful pets:</div>
      <ul>
        {pets.map((pet: any) => (
          <li key={pet._id}>{pet?.name}</li>
        ))}
      </ul>
    </>
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
