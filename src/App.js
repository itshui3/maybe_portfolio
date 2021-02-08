
import React, { useState, useEffect } from 'react';
import './App.css';

import {
  Intro,
  CardHolder,
  Footer,
  Header,
} from './components';

function App() {
    const [runIntro, setRunIntro] = useState(true);

    const closeIntro = () => {
        setRunIntro(false);
    };

return (
<>
<div className="app_wrapper" onClick={closeIntro}>
<Header />
<div className='app_cont'>
    
    {
    runIntro
    ?
    <Intro closeIntro={closeIntro} />
    :
    <CardHolder />
    }

</div>
<Footer />
</div>
</>
);
}

export default App;
