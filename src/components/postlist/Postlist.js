import styled from "styled-components";
import postlist from "../../posts.json";
import { Link } from 'react-router-dom';

function PostList() {
  return (
    <>
      <StyledPost>
        <div className="postlist">
          <div className="post">
            <h3 className="post__topic">TOPICS TO READ</h3>
            {postlist.length &&
              postlist.map((post, i) => {
                return (
                  <div className="post__list" key={post.id}>
                    <fieldset className="post__fieldset" >
                      <legend className="post__title">{post.title}</legend>
                      <div className="post__leftside">
                      <small className="post__info">
                        Published on: {post.date} by {post.author}
                      </small>
                      <p className="post__description">{post.description}</p>
                      <Link className="post__link" to={`/post/${post.id}`}>Read More</Link>
                      </div>
                      <div className="post__rightside">
                        <img src={`/images/${post.img}`} alt="react"/>
                      </div>
                    </fieldset>
                  </div>
                );
              })}
          </div>
        </div>
      </StyledPost>
    </>
  );
}
export default PostList;

const StyledPost = styled.div`
 height: 100%;
.postlist {
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    margin: 3em 0;
}
.post__image {
  width: 70px;
}
.post-grid {
  display: grid;
  place-items: center left;
}
.post__topic {
   color: #0168b8;
}
.post__list {
    color: #c7bfa41;
    margin: 2em;
    text-align: left;
    font-family: literata;
  }
.post__fieldset {
    display: flex;
    justify-content: space-between;
    border-color:#0168b8;
    border-radius: 5px;
    padding: 1em;
    margin: 0 0.5em;
    color: #333333;
    font-size: calc(0.6em + 1vw);
    height: fit-content;
} 
.post__leftside {
  max-width: 65%;
}
.post__rightside {
  max-width: 35%;
   img {
       max-width: 100%;
       height: 100%;
       object-fit: cover;
    }
}
.post__title 
    color: #19202e;
    padding: 0 0.3em;
    font-weight: bolder;
    text-transform: uppercase;
  }
.post__info {
   position: relative;
   bottom: 10px;
   font-size: small;
}  
.post__description {
  color: #999999;
}
.post__link {
  position: relative;
  top: 10px;
  margin: 0 0 1em 0;
  color: #ff0000;
}

 a:active {
     color: #ff0000;
   }
 a:hover {
     color: green;
   }

`;
