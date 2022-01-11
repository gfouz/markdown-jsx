import styled from "styled-components";

function SliderContent(props) {
  return (
    <>
      <StyledContainer size={props.size}>
        <section className="card-container">
          {props.content.map((item, index) => (
            <div
              key={index}
              className={index === props.selected ? "active" : "inactive"}
            >
              <div className="card">
                <header className="card__header" style={{flexDirection:props.selected > 0 ? "column": "row" }}>
                  <img src={item.url} alt="images" />
                  <div className="card__header-text">
                    <h4>{item.author}</h4>
                    <h4 className="card__header-title">{item.title}</h4>
                    <h6>{item.profile}</h6>
                    <h5>{item.email}</h5>
                  </div>
                </header>
                <section className="card__body">
                   <p>
                      {item.text}
                   </p>
                </section>
              </div>
            </div>
          ))}
          {props.children}
        </section>
      </StyledContainer>
    </>
  );
}

export default SliderContent;

const StyledContainer = styled.div`
  
 .card {
  width: 320px;
  height: 350px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
 }
 .card__header {
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   height: 100px;
   margin: 1em 0;
   h4,h5,h6 {
    color: #00838f;
   }
   img {
     width: 70px;
     border-radius: 8px;
   }
 }
 .card__header-text {
   color:#000000;
 }
 .card__header-title {
   position: relative;
   top: 15px;
   color: #777777;

 }
 .card__body {
   margin: 0 1em;
   text-align: left;
   color: #777777;
 }
  .active {
    display: block;
  }
  .inactive {
    display: none;
  }
`;
