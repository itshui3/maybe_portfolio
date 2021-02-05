
import React from 'react'

import Typewriter from 'typewriter-effect'

function Intro({closeIntro}) {
return (
<>
    <Typewriter onInit={typer => {
        typer.start().changeDelay(50).changeDeleteSpeed(5)
        .typeString('hi, i\'m hui').pauseFor(1000).deleteAll()
        .typeString('i build web functionality and UI')
        .pauseFor(100).deleteAll()
        .callFunction(() => closeIntro())
    }}/>
</>
)
}

export default Intro
