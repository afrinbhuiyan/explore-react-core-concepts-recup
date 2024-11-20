import "./post.css"
export default function Post({post}){
    const {title, body, id, userId} = post;
    return (
        <div className="post">
            <h4>Title: {title} </h4>
            <p><small>userId : {userId} </small></p>
            <p><small>postId : {id} </small></p>
            <p>{body}</p>
        </div>
    )
}

/**
 * 1. Create a state to store the data
 * 2. Create use effect with no dependencies
 * 3. Use fetch to load data   
 */