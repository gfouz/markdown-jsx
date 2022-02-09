import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import postlist from '../../posts.json'

function Post(props) {
  const slug = {}
  const [post, setPost] = useState('');
  useEffect(() => {
    setPost(slug.content)
  }, []);
  const validId = parseInt(props.match.params.id)
  if (!validId) {
    return <Redirect to="/404" />
  }
  postlist.forEach((post, i) => {
    if (validId === post.id) {
      slug.title = post.title ? post.title : "no given title"
      slug.date = post.date ? post.date : "no given date"
      slug.author = post.author ? post.author : "no given author"
      slug.content = post.content ? post.content : "no given content"
    }
  })
  return (
    <>
      <StyledPost>
        <div className="l-slug">
          <section className="slug">
            <ReactMarkdown
              className="slug__markdown"
              children={post}
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
display: grid;
place-items: center;
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
    img {
      text-align: center;
    }
   }
   code {
    max-width: 100%;
  }
}
.slug {
  @include l-flex-column;
  img {
    max-width: 100%;
    height: auto;
  }
   }
}
.slug__content {
  display: grid;
  place-items: center ;

}
.slug__markdown {
   text-align: left;
   padding: 0 0.1em 3em 0.1em;
  
}
`;