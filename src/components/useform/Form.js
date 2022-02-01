import { useState } from 'react'
import { useForm } from "react-hook-form"
import StyleForm from './Form.styles'

function Form() {
  const initialState = {
    email: '',
    message: '',
    action: "http://formspree.io/gfouz1975@gmail.com",
    method: "post"
  }

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    fetch('http://formspree.io/gfouz1975@gmail.com', {
      method: 'post',
      body: data
    }).then((response) => {
      if (response.ok) {
        return response.text()
      } else {
        throw "Error en la llamada Ajax";
      }

    })
      .then((texto) => {
        console.log(texto);
      })

  };
  return (
    <>
      <StyleForm>
        <h4 className="form-title">Contact here!</h4>
        <form
          className="l-form"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <div className="l-form__item">
            <fieldset className="l-form__fieldset">
              <legend>Your email</legend>
              <input
                className="l-form__input"
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
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
                {...register("message", { required: true, maxLength: 120 })}
              >
              </textarea>
            </fieldset>
          </div>
          <div className="l-form__item">
            <input className="l-form__btn" type="submit" value="Send your message" />
          </div>
        </form>
      </StyleForm>
    </>
  );
}
export default Form;

//const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)

