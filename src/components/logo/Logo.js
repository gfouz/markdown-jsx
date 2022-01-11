import styled from 'styled-components'


const Logo = ()=> {
	

	return(
         <StyledLogo>
         <div className= "logo">
         <section className="logo__iconsContainer">
          <img className="logo__item" src="/logo/brick.svg" alt="fire-svg" width="40px"/>
          <img className="logo__item" src="/logo/clay.svg" alt="fire-svg"  width="40px"/>
          <img className="logo__item" src="/logo/beige.svg" alt="fire-svg"  width="40px"/>
          <img className="logo__item" src="/logo/amber.svg" alt="fire-svg"  width="40px"/>
         </section>
         <h1 className="logo__title">FOUZ-DEV</h1>
         <h5 className="logo__title profile">web developer</h5>
         </div>
         </StyledLogo>
		);
}
export const StyledLogo = styled.div`

 --brick: #973443;
  --clay: #7a4338;
  --beige: #b38f55;
  --amber: #e2cd9a;
  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    width: 200px;
    margin: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: scale(1.3);
    &:hover {
      animation: jello-horizontal 1s both;
      animation-fill-mode: forwards;
    }
    
  }

  .logo__iconsContainer {
    display: flex;

  }
.logo__title {
    color: var(--beige);
    font-family: literata;
    margin: 0;
    padding: 0;
}
.logo__item:nth-child(1) {
 transform: rotate(-40deg);
 position: relative;
 
}
.logo__item:nth-child(2) {
 transform: rotate(-20deg);
 position: relative;
 
}
 .logo__item:nth-child(3) {
 transform: rotate(20deg);
 position: relative;

}
 .logo__item:nth-child(4) {
 transform: rotate(40deg);
 position: relative;
 
}
.profile {
    color: #000000;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}/*# sourceMappingURL=main.css.map */

`


export default Logo;

