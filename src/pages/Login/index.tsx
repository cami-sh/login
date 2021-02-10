import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'

const Login = () => {

    const [user, setUser] = useState<string>("cahsayurih")
    const [password, setPassword] = useState<string>("abc098")
    const [login, setLogin] = useState<boolean>(false)
    const [dados, setDados] = useState<boolean>(true)

    const inputUser = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)

    const logar = () => {

        const usuario = inputUser.current?.value
        const senha = inputPassword.current?.value

        if (usuario == user && senha == password){
            setLogin(true)
        }else{
            setDados(false)
        }

    }

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <div>
                <input type="text" placeholder="Usuário" ref={inputUser} />
                <input type="text" placeholder="Senha" ref={inputPassword} />
                <button onClick={logar}>Entrar</button>
                {login ? <Redirect to="/userhome"/> : dados ? <p>Insira seus dados</p> : <p>Não foi possível entrar</p>}
            </div>
        </>
    )
}

export default Login