import React from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const submitHandler = () => {
    e.preventDefault();
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Seu nome" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Seu Email" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Mensagens" required />
      </div>

      <button className="primary__btn" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
