import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css'
import api from '../../services/api'

export default function Register() {
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');


    function comparePassword(password1, password2) {
        return password1 === password2 ? true : false
    }



    async function handleRegister(e) {
        e.preventDefault();

        const data = {

            username,
            password1,
            password2,
            email,
            gender,
            // admin = 0,
        };

        const correctPassword = comparePassword(password1, password2)

        if (!correctPassword) {
            return alert('passwords diferentes')
        }

        try {
            const response = await api.post('users', data)

            alert(`Registo realiazado com sucesso!`); //${response.data.id} --> variavel que tem que estar dentro para a variavel ter valor.

            //history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }

    }



    return (
        <div className="register-container">
            <section id="facilities">
                <div className="loginbox">

                    <h1>Registo</h1>


                    <Link className="back-link" to="/">
                        Já tenho Conta
                   </Link>


                    <form onSubmit={handleRegister}>


                        <input

                            placeholder="Insira o nome de Utilizador"
                            value={username}
                            onChange={e => setUsername(e.target.value)}

                        />

                        <input

                            type="email" placeholder="Insira o seu email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}

                        />

                        <input

                            type="password" placeholder="Insira a Palavra-Passe"
                            value={password1}
                            onChange={e => setPassword1(e.target.value)}

                        />

                        <input

                            type="password" placeholder="Confirma a sua Palavra-Passe"
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}

                        />

                        <select name="gender" id="gender">

                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>

                        </select>

                        <button className="button" type="submit">Registo</button>

                    </form>
                </div>
            </section>
        </div>
    );
}



