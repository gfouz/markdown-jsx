import { useState } from 'react'
import { useForm } from "react-hook-form"
import StyleForm from './Form.styles'

function Form() {
  const initialState = {
    email: '',
    message: '',
    action: "http://formspree.io/gfouz1975@gmail.com",
    method: "POST"
  }
  const [state, setState] = useState(initialState);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setState((prev) => {
      return { ...prev, email: data.email, message: data.message }
    })
  };
  const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  return (
    <>
      <StyleForm>
        <h4 className="form-title">Contact here!</h4>
        <form className="l-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="l-form__item">
            <fieldset className="l-form__fieldset">
              <legend>Your email</legend>
              <input
                className="l-form__input"
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                {...register("email")}
              />
            </fieldset>
          </div>
          <div className="l-form__item">
            <fieldset className="l-form__fieldset">
              <legend>Your message</legend>
              <textarea
                className="l-form__textfield"
                id="msg"
                name="message"
                maxLength="100"
                {...register("message")}
              >
              </textarea>
            </fieldset>
          </div>
          <div className="l-form__item">
            <button className="l-form__btn" type="submit">Send your message</button>
          </div>
        </form>
      </StyleForm>
    </>
  );
}
export default Form;

