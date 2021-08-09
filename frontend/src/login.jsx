import("./themes/defaults.scss");

export default function Login(props) {
  return (
    <div class="login">
      <form
        id="login"
        method="POST"
        action={process.env.REACT_APP_BACKEND_URL + "login"}
      >
        <h2>login</h2>
        {props.auth_message ? (
          <div dangerouslySetInnerHTML={{ __html: props.auth_message }}></div>
        ) : (
          false
        )}
        <label for="username">username</label>
        <input type="text" name="username"></input>
        <label for="password">password</label>
        <input type="password" name="password"></input>
        <input class="link" type="submit" className="submit"></input>
      </form>
    </div>
  );
}
