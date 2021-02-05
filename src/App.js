
import React, { useState } from 'react'
import './App.css';

import {
  Intro,
  CardHolder,
} from './components'

function App() {
    const [runIntro, setRunIntro] = useState(true)

    const closeIntro = () => {
        console.log('hai gaiz owo?')
        setRunIntro(false)
    }

return (
<>
<div className="app_wrapper" onClick={closeIntro}>
  
<div className='header_cont'></div>
  
<div className='app_cont'>
    
    {
    runIntro
    ?
    <Intro closeIntro={closeIntro} />
    :
    <CardHolder />
    }

</div>
</div>
</>
);
}

export default App;
