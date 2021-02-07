
import React from 'react'

import Typewriter from 'typewriter-effect'

function Intro({closeIntro}) {
return (
<>
    <Typewriter onInit={typer => {
        typer.start().changeDelay(40).changeDeleteSpeed(.01)
        .typeString('hi, i\'m hui').pauseFor(700).deleteAll()
        .typeString('i build web functionality and UI').pauseFor(700).deleteAll()
        .changeDelay(25)
        .typeString('thank you for checking out my work, this is a big step for me :)')
        .pauseFor(1200)
        .callFunction(() => closeIntro())
    }}/>
</>
)
}

export default Intro
