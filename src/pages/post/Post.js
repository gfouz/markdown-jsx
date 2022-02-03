import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import Markdown from 'react-markdown'
import postlist from '../../posts.json'

function Post(props) {
  const validId = parseInt(props.match.params.id)
  if (!validId) {
    return <Redirect to="/404" />
  }
  const slug = {}
  postlist.forEach((post, i) => {
    if (validId === post.id) {
      slug.title = post.title ? post.title : "no given title"
      slug.date = post.date ? post.date : "no given date"
      slug.author = post.author ? post.author : "no given author"
      slug.content = post.content ? post.content : "no given content"
    }
  })
  return (
    <h1>{slug.title}</h1>
  );
}
export default Post;