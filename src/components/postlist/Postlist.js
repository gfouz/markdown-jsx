import styled from 'styled-components'
import postlist from '../../posts.json'
import Markdown from 'react-markdown'


function PostList() {
     //const excerpt = postlist.map(post=>post.content.slice(0, 300) + '...' )
  return (
    <>
      <StyledPost>
        <div className="l-posts">
          <h1 className="l-post__title">Take a look at these posts!</h1>
          <div className="posts">
          {
            postlist.length && postlist.map((post, i) => {
              return (
                <div className="posts__list">
                  <fieldset className="posts__fieldset">
                  <legend className="posts__title">{post.title}</legend>
                  <small className="posts__info">Published on: {post.date} by {post.author}</small>
                  <Markdown className="posts__body">
                     {post.description}
                  </Markdown>
                  <h5 className="posts__link">Read More</h5>
                  </fieldset>
                </div>
              )
            })
          }
          </div>
        </div>
      </StyledPost>
    </>
  );
}
export default PostList;

const StyledPost = styled.div`
.l-posts {
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    color: #777777;
}
.posts-grid {
  display: grid;
  place-items: center left;
}
.posts__list {
    padding: 2em;
    text-align: left;
    font-family: literata;
  }
.posts__fieldset {
    border-radius: 5px;
}  
.posts__title {
    color: #ff0000;
    margin: 0 1em;
    padding: 0 0.5em;
  }
.posts__info {
    margin: 0 1em;
}  
.posts__body {
   color: #440044;
   margin: 2em 1em;
 }
.posts__link {
    margin: 0 1em;
    padding: 1em 0;
}   
}  

`;

 // {/* {`${post.content.join(" ")}`} */}