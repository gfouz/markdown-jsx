import styled from "styled-components";

const StyledAbout = styled.div`
  --red: #cb3837;
  --yellow: #ffc329;
  --brown: #a0450e;
  --orange: #f7482e;
  --green:  #80cc28;
  --grey: #797777;
  --brick: #973443;
  --clay: #7a4338;
  --beige: #b38f55;
  --amber: #e2cd9a;

  .about-container {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 350px 100px auto 250px auto 250px 70px;
  }
  .upperbar {
    height: 350px;
    display: grid;
    place-items: center;
  }
  .upperbar__image {
    width: 140px;
  }
  .outstanding {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    @media (min-width: 500px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }
  .outstanding__item {
    position: relative;
    text-align: left;
    height: auto;
    font-size: calc(0.8em + 1vw);
    @media (min-width: 500px) {
      flex: 1;
      font-size: calc(0.6em + 1vw);
    }
  }
  .outstanding__avatar-container {
    border-radius: 50%;
    text-align: center;
    width: 70px;
    height: 70px;
    margin: 1em 0.5em 0 1em;
    float: left;
  }
  .outstanding__avatar {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .outstanding__title {
    color: #666666;
    margin: 0 0.5em 0 1em;
  }
  .outstanding__paragraph {
    margin: 0.5em 1em;
    color: #777777;
  }
  .outstanding__laptop-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .outstanding__image-title {
    position: absolute;
    bottom: 40px;
    right: 30px;
    text-shadow: 1px 1px 9px #ffffff;
  }
  .outstanding__icon {
    margin: 0 1em;
    float: left;
    img {
      width: 70px;
    }
  }
  .list-group {
    display: flex;
    justify-content: space-between;
    margin: 0 0.8em;
  }
  .list {
    padding: 0;
     li {
      list-style-type: none;
      margin: 0;
      color: #33691e;
    }
  }
  .technologies {
    height: 250px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 40px;
      height: auto;
      margin: 1em;
    }
    img:nth-child(3) {
      width: 40px;
    }
  }
  .column {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100%;
    img:nth-child(3) {
      width: 30px;
    }
    img:nth-child(1) {
      width: 80px;
    }
  }
  footer {
    height: 70px;
    background-color: #222222;
    color: #999999;
    text-align: center;
    line-height: 70px;
    font-family: literata;
  }
  .upperbar__title-container {
    position: relative;
    display: grid;
    place-items: center;
    width: 90px;
    height: 90px;
    transform: rotate(-80deg);
    transform-origin: bottom center;
  }
  .upperbar__title-container span {
    position: absolute;
    bottom: -20px;
    left: -90px;
    height: 160px;
    font-size: 45px;
    transform-origin: bottom center;
    color: #ff0000;
  }
`;



export default StyledAbout;
