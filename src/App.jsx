import { useState } from 'react';

import Perfil from './components/Perfil';
/* import Formulario from './components/Formulario'; */
import Repos from './components/Repos';

function App() {
  /* const [formularioVisivel, setFormularioVisivel] = useState(true); */
  const [userName, setUserName] = useState('');


  return (
    <>

    <div>
        <input type="text" onBlur={(e) => setUserName(e.target.value)} />
    </div>
    {userName.length > 4 && (
      <> 
      <Perfil userName={userName} />
      <Repos userName={userName}/>
      </>
    )}


{/*     {formularioVisivel && (
      <Formulario />
      )}
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type='button'>Toggle form</button> */}
    </>
  );
};

export default App
