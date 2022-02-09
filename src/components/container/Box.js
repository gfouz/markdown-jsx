import styled from "styled-components";

const Box = (props) => {
  const properties = {
        max:props.max,
        min:props.min,
        font:props.font,
        float:props.float,
        align:props.align,
        width:props.width,
        shadow:props.shadow,
        height:props.height,
        margin:props.margin,
        borders:props.borders,
        padding:props.padding,
        display:props.display,
        justify:props.justify,
        position:props.position,
        fontcolor:props.fontcolor
  }   
  return (
    <>
      <StyledBox {...properties} >
        <div className="container">
          <div className="box__image">
            <img src="/images/gfouz-dev.png" alt="gfouz" />
          </div>
          {props.children}
        </div>
      </StyledBox>
    </>
  );
};

export default Box;

const StyledBox = styled.div`
  --font: ${(props) => props.font || "1em"};
  --fontcolor: ${(props) => props.fontcolor};
    position: relative;
  .container {
    display: ${(props) => props.display || "block"};
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    flex-direction: ${(props) => props.position || "column"};
    width: ${(props) => props.width};
    height: ${(props) => props.height || "fit-content"};
    margin: ${(props) => props.margin};
    max-width: ${(props) => props.max || "600px"};
    min-width: ${(props) => props.min};
    border: ${(props) => props.borders || "none"};
    border-radius: ${(props) => props.radius || "10px"};
    padding: ${(props) => props.padding};
    box-shadow: ${(props) => props.shadow};
    p {
      font-size: calc(var(--font) + 1vw);
      color: var(--fontcolor);
      text-align: left;
      margin: 1em;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-align: left;
      margin: 0 1em;
    }
  }
  .box__image {
    display: ${(props) => props.display || "none"};
    margin: 1em 0.5em 0.5em 0.5em;
    float: ${(props) => props.float || "none"};
    width: 80px;
    height: 80px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
