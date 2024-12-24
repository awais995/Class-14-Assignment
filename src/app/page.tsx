import Link from "next/link";

export default async function Home() {
  
  const posturl = await fetch ("https://jsonplaceholder.typicode.com/posts"); // fetch data from an api
  
  const posts = await posturl.json (); //convert it into json format and store it into posts variable.

  const commentsUrl = await fetch ("https://jsonplaceholder.typicode.com/comments") // fetch data from an api
  
  const comments = await commentsUrl.json(); //convert it into json format and store it into comments variable.

  const albumsurl = await fetch ("https://jsonplaceholder.typicode.com/comments")// fetch data from an api

  const albums = await albumsurl.json(); //convert it into json format and store it into albums variable.

  // console all data to check it shows or not
  console.log ("posts", posts)
  console.log ("Comments", comments)
  console.log ("Albums", albums)
  return (
    
    <main>
      {/* Posts */}
      {/* used map function to iterate the array of objects and store it in to props argumnet and pass the index */}
        {posts.map((Post:any, index:number) => (
          <div key ={index}>
            {/* link the post with id */}
            <Link href={`${Post.id}`}> 
            {/* shows on the browser */}
            <h1 className="ml-5 text-3xl"> 
              {Post.id} &nbsp; &nbsp;
              {Post.title} </h1>
            </Link>
          </div>
        ))};
        {/* Comments */}
      <h1 className="text-5xl ml-5 py-6">Comments</h1>
        {comments.map((comment:any, index:number) => (
          <div key={index}>
            <Link href={`${comment.id}`}>
            <h1 className="ml-5 text-3xl"> 
              {comment.id} &nbsp; &nbsp;
              {comment.name} &nbsp; &nbsp;
            </h1>
            </Link>
          </div>
        ))};
          {/* albums */}
        <h1 className="text-5xl ml-5 py-6"> Albums</h1>
        {albums.map((album:any, index:number) => (
          <div key={index}>
              <Link href={`${album.id}`}>
              <h1 className="ml-5 text-3xl">
                {album.id} &nbsp; &nbsp;
                {album.name} &nbsp; &nbsp;
              </h1>
              </Link>
          </div>
        ))};
    </main>
  );
}
