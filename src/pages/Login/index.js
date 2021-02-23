import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';



export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be teh hero" />

                    <h1>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</h1>


                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                            Já tenho Cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>

                    <input

                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}

                    />

                    <input

                        type="emil" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}

                    />

                    <input

                        placeholder="whatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}

                    />

                    <div className="input-group">
                        <input

                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}

                        />
                        <input
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUF(e.target.value)}

                        />
                    </div>

                    <button className="button" type="submit">Cadrastrar</button>

                </form>
            </div>
        </div>
    )
}
