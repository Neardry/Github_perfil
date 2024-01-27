import { useEffect, useState } from "react";

const Formulario = () => {
    let [notaA, setNotaA] = useState(0);
    let [notaB, setNotaB] = useState(0);
    let [notaC, setNotaC] = useState(0);
    let [nome, setNome] = useState('')

useEffect(() => {
    console.log('Sera gerada essa mensagem sempre que notaA mudar')
}, [notaA])

    function calculaMedia() {
        let sum = notaA + notaB + notaC;
        let med = sum / 3;

        if(sum === 0){
            return (
                <p></p>
            )
        }
        else if(med >= 7){
            return (
                <p>{nome} ,você foi aprovado</p>
            )
        }else {
            return(
                <p>{nome}, você não foi aprovado</p>
            )
        }
    }
    return (
        <form>
            <input type="text" placeholder="Insira seu nome" onChange={e => setNome(e.target.value)} />
            <input type="Number" placeholder="Nota A" onChange={e => setNotaA(parseInt( e.target.value))} />
            <input type="Number" placeholder="Nota B" onChange={e => setNotaB(parseInt( e.target.value))} />
            <input type="Number" placeholder="Nota C" onChange={e => setNotaC(parseInt( e.target.value))} />
            { calculaMedia() }
        </form>
    )
}

export default Formulario;