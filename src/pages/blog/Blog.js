import styled from 'styled-components'
import Postlist from '../../components/postlist/Postlist'
import Header from '../../components/header/Header'

function Blog() {
    const headerProps = {
      color:"#990000",
      bg:"#ffffff"
    }
  return (
    <>
      <StyledBlog>
        <div className="blog l-grid">
          <Header {...headerProps} />
          <section className="post l-flex">
            <article className="post__debut">
              <h1 className="post__title">BLOG <span>ABOUT</span> MY LEARNING.</h1>
              <img className="post__image" src="./images/blog.svg" alt="blogIcon" />
              <h4 className="post__title">FAVORITE <span>TOPICS</span></h4>
            </article>
            <main className="post__list ">
              <Postlist />
            </main>
          </section>
          <section className="free-space">

          </section>
          <footer className="blog-footer">
            <h6>gfouz &copy; {new Date().getFullYear()} made with react</h6>
          </footer>
        </div>
      </StyledBlog>
    </>
  );
}

export default Blog;

const StyledBlog = styled.div`
--blue-grey: #121a3e;
--vscode: #19202e;
.l-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px auto 100px 70px;
}
.l-flex {
  display: flex;
  flex-direction: column;
}
.blog {
  min-height: 100vh;
  font-family: literata;
}
.post__debut {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 4em 0 2em 0;
  flex: 1;
}
.post__debut span {
   margin: 0;
   color: #40c4ff;
}
.post__title {
   color: #990000;
   margin: 2em 0 1em 0;
   text-align: center;
}
.post__list {
  flex: 1;
}
.post__image {
  width: 100px;
  margin: 1em;
}
.post__text {
  color: #777777;
  font-family: monospace;
}
.l-footer {
  display: grid;
  place-items: center;
  color: #ffffff;
}
.blog-footer {
  color:  #0168b8;
  display: grid;
  place-items: center;
  text-transform: uppercase;
}

`;



