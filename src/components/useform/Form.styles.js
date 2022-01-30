import styled from 'styled-components'


const StyleForm = styled.div`
  display: grid;
  place-items: center;

.form-title {
  position: relative;
  top: 20px;
  color: #ffffff;
  text-transform: uppercase;
}  
.l-form {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;

  &__item {
  width: 280px;
  display: grid;
  place-items: center;
  padding: 1em;
}
  &__fieldset {
  width: 250px;
  border-radius: 5px;
  color: #ffffff;
}
  &__input {
  width: 200px;
  height: 40px;
  outline: none;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  color: #ffffff;
  background-color: transparent;
}
  &__textfield {
  width: 200px;
  height: 70px;
  resize: none;
  border: none;
  outline: none;
  padding: 0;
  color: #ffffff;
  background-color: transparent;
}
  &__textfield:hover {
  border-color: #651fff;
}
  &__btn {
  padding: 0.7em;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #071919;
}
  &__btn:hover {
  color: #071919;
  background-color: #ffffff;
}

}
`;
export default StyleForm;