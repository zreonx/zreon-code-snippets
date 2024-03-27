import Markdown from "markdown-to-jsx";

import React, { useEffect, useState } from "react";
import Code from "./Code";

const Post = () => {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    import("../markdown/article.md").then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostContent(response))
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <article>
      <div className='container'>
        <h1>Useful Javascript Code Snippets</h1>
        <section className='postWrapper'>
          <Markdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                },
              },
            }}
          >
            {postContent}
          </Markdown>
        </section>
      </div>
    </article>
  );
};

export default Post;
