
import React, { useState, useEffect } from 'react';
import './App.css';

import {
  Intro,
  CardHolder,
  Links
} from './components';

function App() {
    const [runIntro, setRunIntro] = useState(true);

    useEffect(() => {
        console.log(runIntro);
    }, [runIntro]);

    const closeIntro = () => {
        setRunIntro(false);
    };

return (
<>
<div className="app_wrapper" onClick={closeIntro}>
<Links />
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
