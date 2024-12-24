const DynamicPost = async (props: any) => {

    // Fetch data from the posts API
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`);
    const post = await postResponse.json();

    // Fetch data from the comments API
    const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.id}`);
    const comment = await commentResponse.json();

    // Fetch data from the albums API
    const albumResponse = await fetch(`https://jsonplaceholder.typicode.com/albums/${props.params.id}`);
    const album = await albumResponse.json();

    // Log the fetched data
    console.log("Post:", post);
    console.log("Comment:", comment);
    console.log("Album:", album);
    return (
        <div>
            {/* Posts Data */}
            <div className="pl-5 text-3xl">
                <h1 className="pl-5 text-5xl py-10">Posts</h1>
                <strong>UserId:</strong> {post.userId} <br /> <br />
                <strong>ID:</strong> {post.id} <br /> <br />
                <strong>Title:</strong> {post.title} <br /> <br />
                <strong>Post:</strong> {post.body} <br /> <br />
            </div>
            {/* Comments Data */}
            <div className="pl-5 text-3xl">
                <h1 className="pl-5 text-5xl py-10">Comments</h1>
                <strong>Post ID:</strong> {comment.postId} <br /> <br />
                <strong>ID:</strong> {comment.id} <br /> <br />
                <strong>User Name:</strong> {comment.name} <br /> <br />
                <strong>User Email:</strong> {comment.email} <br /> <br />
                <strong>Comment:</strong> {comment.body} <br /> <br />
            </div>

            {/* Albums Data*/}
            <div className="pl-5 text-3xl">
                <h1 className="pl-5 text-5xl py-10">Albums</h1>
                <strong>User ID:</strong> {album.userId} <br /> <br />
                <strong>ID:</strong> {album.id} <br /> <br />
                <strong>Title:</strong> {album.title} <br /> <br />
            </div>
        </div>
    )
}

export default DynamicPost;