import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogo>
      <picture className="l-flex-column">
        <div className="logo">
          <div className="logo__item">
            <h1 className="logo__letter">G</h1>
          </div>
          <div className="logo__item">
            <h1 className="logo__letter">F</h1>
          </div>
          <div className="logo__item">
            <h1 className="logo__letter">O</h1>
          </div>
          <div className="logo__item">
            <h1 className="logo__letter">U</h1>
          </div>
          <div className="logo__item">
            <h1 className="logo__letter">Z</h1>
          </div>
        </div>
        <img src="./images/workLogo.svg" alt="logo" className="logo__image" />
        <h1 className="logo__title">WORK</h1>
      </picture>
    </StyledLogo>
  );
};
export const StyledLogo = styled.div`
  --brick: #973443;
  --clay: #7a4338;
  --beige: #b38f55;
  --amber: #e2cd9a;

  .l-flex-column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .logo {
    position: relative;
    margin: 2em 0 0 0;
    width: 250px;
    height: 90px;
    overflow: hidden;
  }
  .logo__item {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 115px;
    width: 20px;
    height: 170px;
    transform-origin: bottom;
    text-shadow: 1px 1px 9px #ffffff;
  }
  .logo__letter {
    color: #ffffff;
    margin: 0;
    font-size: 1.5em;
    font-family: literata;
  }
  .logo__title {
    color: #ffffff;
    text-shadow: 1px 1px 9px #ffffff;
  }
  .logo__image {
    width: 100px;
    z-index: 10;
  }
  .logo__item:nth-child(1) {
    transform: rotate(-40deg);
  }
  .logo__item:nth-child(2) {
    transform: rotate(-20deg);
  }
  .logo__item:nth-child(3) {
    transform: rotate(0);
  }
  .logo__item:nth-child(4) {
    transform: rotate(20deg);
  }
  .logo__item:nth-child(5) {
    transform: rotate(40deg);
  }
`;

export default Logo;
