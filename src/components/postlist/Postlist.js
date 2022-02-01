import styled from 'styled-components'
import postlist from '../../posts.json'


function PostList () {

 return (
	<>	
	  <StyledPost>
       <div className="postlist">
           <h1 className="postlist__title">Take a look at these posts!</h1>
           {
            postlist.length && postlist.map((post, i)=>{
              return (
                 <div className="posts-card">
                     <h2 className="posts-card__title">{post.title}</h2>
                     <p>{post.content}</p>
                 </div>
                )
            })
           }
       </div>
      </StyledPost> 
    </>  
    );
}
export default PostList;

const StyledPost = styled.div`
.postlist {
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    color: #777777;
}
.posts-card {
    max-width: 70%;
    padding: 2em;
    text-align: left;
  }
.posts-card__title {
    color: #ff0000;
  }

`;