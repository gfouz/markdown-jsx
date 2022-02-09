import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import posts from '../../posts.json'

function Post(props) {
  const [content, setContent] = useState('');
  const params = parseInt(props.match.params.id);
  const currentpost = posts.reduce((acc, post)=>{
      if(params === post.id) {
        acc = post ? post : "not available data";
      }
    return acc;

  },{});
  
  useEffect(()=>{
     setContent(currentpost.content);
  })

  if (!params) {
    return <Redirect to="/404" />
  }

  
  return (
    <>
      <StyledPost>
        <div className="l-slug">
          <section className="slug">
            <ReactMarkdown
              id={currentpost.id}
              className="slug__markdown"
              children={content}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={dark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            />
          </section>
        </div>
      </StyledPost>
    </>
  );
}
export default Post;

const StyledPost = styled.div`
@mixin l-flex-column  {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.l-slug {
   border: 2px solid #f1f1f1;
   @media (min-width: 700px){
    max-width: 80%;

   }
   
}
.slug {
  @include l-flex-column;
  
}
.slug__markdown {
   text-align: left;
   padding: 0 0 3em 0;
   h2 {
    text-align: center;
    margin: 2em 0 0.5em 0;
   }

   img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  
}
`;