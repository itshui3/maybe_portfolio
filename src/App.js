
import React, { useState, useEffect } from 'react';
import './App.css';

import {
  Intro,
  CardHolder,
} from './components';

function App() {
    const [runIntro, setRunIntro] = useState(true);

    useEffect(() => {
        console.log(runIntro);
    }, [runIntro]);

    const closeIntro = () => {
        console.log('hai gaiz owo?');
        setRunIntro(false);
    };

return (
<>
<div className="app_wrapper" onClick={closeIntro}>
  
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
