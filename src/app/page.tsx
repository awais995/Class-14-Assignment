import Link from "next/link";

export default async function Home() {
  const url = await fetch ("https://jsonplaceholder.typicode.com/posts");
  const res = await url.json ();
  console.log (res)
  return (
    
    <main>
        {res.map((Post:any, index:number) => (
          <div key ={index}>
            <Link href={`${Post.id}`}>
            <h1 className="ml-5 text-3xl text-wrap"> 
              {Post.id} &nbsp; &nbsp;
              {Post.title} </h1>
            </Link>
          </div>
        ))}
    </main>
  );
}
