import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const Login = () => {
  return (
    <React.Fragment>
      <p className={css(styles.text)}>Login to access the full dashboard</p>
      <div className={css(styles.form)}>
        <label className={css(styles.labelAndInput)} htmlFor={"email"}>Email:</label>
        <input className={css(styles.labelAndInput)} type={"email"} id={"email"} name={"email"}></input>
        <label className={css(styles.labelAndInput)} htmlFor={"password"}>Password:</label>
        <input className={css(styles.labelAndInput)} type={"password"} id={"password"} name={"password"}></input>
      </div>
      <button type={"submit"}>OK</button>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  text: {
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  labelAndInput: {
    margin: '0 1rem 0 0',
  },
});

export default Login;
