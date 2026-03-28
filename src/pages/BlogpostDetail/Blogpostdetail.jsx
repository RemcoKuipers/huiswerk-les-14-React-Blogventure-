import "./Blogpostdetail.css"
import {useParams} from "react-router-dom";

function BlogPostDetail() {

    const {id} = useParams();

    return (
        <div>Blogpost is {id}</div>
    )
}

export default BlogPostDetail;