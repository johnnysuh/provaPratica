import { useState, useEffect } from "react";
import './header+clubs.css'

export default function Clubs() {
    const [clubes, setClubes] = useState([]);

    const fetchData = async () => {
        try{
            const response = await fetch(`https://api.cartola.globo.com/clubes`);
            const data = await response.json();
            const listaClubes = Object.values(data);
            setClubes(listaClubes);
        } catch (error) {
            setErro(erro);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return(
        <div className="Clubes">
            <ul className="clubesAlinhamento">
            {clubes.slice(1).map((clube) => (
                    <li key={clube.id} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={clube.escudos['60x60']}
                            alt={`${clube.nome} logo`}
                        />
                        <div>
                            <div className="nome">
                            <p>{clube.nome}</p>
                            </div>
                            <div className="apelido">
                            <p>{clube.apelido}</p>
                            </div>
                        </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}