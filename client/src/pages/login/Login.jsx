import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Connexion</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Connexion</button>
          <span>
            Nouveau sur Netflix ? <b>Inscrivez-vous maintenant.</b>
          </span>
          <small>
            Cette page est protégée par Google reCAPTCHA pour nous assurer que
            vous n'êtes pas un robot. <b>En savoir plus</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
