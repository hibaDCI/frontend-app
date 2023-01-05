import React, {useEffect, useState} from "react";
import axios from "axios";
// import axios from "../utils/axiosConfig"; //  later when config for deployment

function CreatePost() {
  const [post, setPost] = useState([]);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      title: formData.get("title"),
      desc: formData.get("desc"),
    };

    const result = await axios.post("/api/post/create", data);
    console.log(result);
    setPost(result.data.newPost);
  };

  return (
    <div className=" w-50  align-items-center m-auto py-2 col-md-4 col-lg-3 col-sm-10 text-info">
      <h2>Create Post</h2>
      <form action="" method="post" onSubmit={handlerSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form-control "
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="desc"
            placeholder="description"
            className="form-control"
          />
        </div>

        <button type="submit">add post</button>
      </form>

      <h3>{post && post.title}</h3>
    </div>
  );
}

export default CreatePost;
