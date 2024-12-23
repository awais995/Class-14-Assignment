const DynamicPost = async (props: any) => {

    const url = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.params.id}`

    );
    const res = await url.json();
    console.log("2", res)
    return (
        <div>
            <h1 className="pl-5 text-5xl">
                ID:        {props.params.id} <br /> <br />
                UserId:    {res.userId} <br /> <br />
                Post:      {res.id} <br /> <br />
                Title:     {res.title} <br /> <br />
                Body:      {res.body}
            </h1>
        </div>
    )
}

export default DynamicPost;