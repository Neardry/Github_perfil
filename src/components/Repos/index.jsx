import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const Repos = ({ userName }) => {
    const ENDPOINT = `https://api.github.com/users/${userName}/repos`;
    const [repos, setRepos] = useState([]);
    const [load, setLoad] = useState(true);
    const [loadError, setLoadError] = useState(false)
    useEffect(() => {
        setLoad(true);
        fetch(ENDPOINT)
        .then(res => {
            if (!res.ok) {
            throw new Error(`Erro ao buscar o repositório (${res.status} ${res.statusText})`); //Meio que é obrigado a utilizar essa linha para o catch() funcionar
            }
            return res.json();
        })
        .then(resJson => {
            setTimeout(() => {
            setLoad(false);
            setLoadError(false);
            setRepos(resJson);
            }, 3000);
        })
        .catch((e) => {
            setLoadError(true);
            setLoad(false);
            });
      }, [userName]); //precisa colocar aqui para ele conseguir renderizar o nome do usuario primeiro
    return (
        <div className='container'>
            {load || loadError ? (
                <h3>Carregando...</h3>
                ): (
                    <>
            <li>Contagem de repositórios: {repos.length}</li>
            <br />
            <br />
                <ul className={styles.list}>
            {repos.map(repositorio => (
                <li className={styles.listItem} key={repositorio.id}>

                        <div className={styles.itemName}>
                            <b>Nome: </b> {repositorio.name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem: </b> {repositorio.language}
                        </div>
                            <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar repositório</a>

                    </li>
                
                ))}
        </ul>
                </>
            )}
    {loadError && (<p className={styles.error}>Erro ao buscar o repositório, verifique o valor no campo digitado</p>)}
        </div>
    )
};

export default Repos;