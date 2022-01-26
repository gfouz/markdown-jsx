import styled from "styled-components";

const Project = () => {
  return (
    <>
      <StyledProject>
        <article className="technology">
          <div className="l-flex l-flex--vw">
            <img
              src="./tech/react.svg"
              alt="react"
              className="technology__icon"
            />

            <div className="l-flex l-flex--column">
              <img
                src="./tech/next.svg"
                alt="logo"
                className="technology__icon technology__icon--l"
              />

              <nav className="navbar">
                <h5 className="navbar__title">SOURCE CODE ON GITHUB</h5>
                <ul className="navbar__list">
                  <li className="navbar__item">
                    <a
                      className="navbar__link"
                      href="https://github.com/gfouz/markdown-jsx.git"
                    >
                      Markdown-jsx
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a
                      className="navbar__link"
                      href="https://github.com/gfouz/apollo-server.git"
                    >
                      Apollo-server
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a
                      className="navbar__link"
                      href="https://github.com/gfouz/nextcms.git"
                    >
                      NextJs-CMS
                    </a>
                  </li>
                </ul>
              </nav>

              <img
                src="./tech/graphql.svg"
                alt="logo"
                className="technology__icon"
              />
            </div>

            <img
              src="./tech/redux.svg"
              alt="logo"
              className="technology__icon"
            />
          </div>
        </article>
      </StyledProject>
    </>
  );
};

export default Project;

const StyledProject = styled.div`
  .technology {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .l-flex {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .l-flex--column {
    flex-direction: column;
    justify-content: center;
  }
  .l-flex--vw {
    width: 100%;
  }

  .navbar {
    &__title {
      color: #ffffff;
      font-family: literata;
      border-bottom: 1px solid #18ffff;
    }
    &__item {
      margin: 0.4em 0;
      list-style-type: none;
    }
    &__link {
      color: #ffffff;
      text-decoration: none;
    }
  }

  .technology {
    &__icon {
      width: 40px;
      margin: 1em;
    }
    &__icon--l {
      width: 100px;
    }
  }
`;
