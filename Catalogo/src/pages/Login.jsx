import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <nav></nav>
            <div className="formulario">
                <form action="" className="form">
                    <h3>Login</h3>
                    <input type="email" />
                    <span></span>
                    <input type="email" />
                    <span></span>
                    <button className="btn">Entrar</button>
                    <a href="/" className="forgot-pw">
                        Esqueceu a Senha?
                    </a>
                </form>
            </div>

        </div>
    )
}

export default Login