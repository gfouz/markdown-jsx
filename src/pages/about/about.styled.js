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

  display: grid;
  grid-template-rows: 60px auto 400px 60px;
  grid-template-columns: 1fr;
  height: 100vh;
  .main {
  }
  .main-title {
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .biographic {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 700px) {
      flex-direction: column;
    }
  }

  .biographic__card {
    height: 350px;
    width: 320px;
  }
  .biographic__card-header {
    display: flex;
  }
  .biographic__card-image {
    width: 150px;
    height: 150px;
    border: 1px solid #000000;
    border-radius: 5px;
    object-fit: cover;
     &:hover {
      animation: jello-horizontal 1s both;
      animation-fill-mode: forwards;
    }
    
  }
  .no-borders {
    border: 3px solid transparent;
  }
  .biographic__card-name {
    position: relative;
    left: 20px;
    color: #000000;
  }
  .biographic__card-body {
    position: relative;
    top: -10px;
    text-align: left;
    color: #414141;
    strong {
      color: var(--brick);
    }
  }
  footer {
    background-color: #a9561e;
    line-height: 60px;
    text-align: center;
    color: #ffffff;
    font-family: literata;
    font-size: 30px;
  }
  button {
    width: 100px;
    height:50px;
  }
`;

export default StyledAbout;
