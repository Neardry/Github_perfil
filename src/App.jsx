import { useState } from 'react';

import Perfil from './components/Perfil';
/* import Formulario from './components/Formulario'; */
import Repos from './components/Repos';

function App() {
  /* const [formularioVisivel, setFormularioVisivel] = useState(true); */
  const [userName, setUserName] = useState('');


  return (
    <>

    {userName.length > 4 && (
      <> 
      <Perfil userName={userName} />
      <Repos userName={userName}/>
      </>
    )}
    <div className='container container-input'>
      <p>Insira o seu nome de usuario do GitHub</p>
        <input type="text" onBlur={(e) => setUserName(e.target.value)} />
    </div>


{/*     {formularioVisivel && (
      <Formulario />
      )}
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type='button'>Toggle form</button> */}
    </>
  );
};

export default App
