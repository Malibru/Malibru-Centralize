import React from "react";
// import "../assets/css/inicialpage.css";


export default function InicialPage() {
  return (

    <div className="inicial-page">
        <div className="boasvindas">
            <h1>DICOCO - CENTRALIZE</h1>
            <h2>LOGIN</h2>
        </div>
        <div>
            <form>
                <input type="text" placeholder="Login" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>
            </form>
        </div>
    </div>
   

  );
}