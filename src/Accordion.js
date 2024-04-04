import React from 'react';
import { useState } from 'react';

export function Accordion(){
    const [isToggled, setIsToggled] = useState(false);
    return(
        <div>
            { isToggled ||
            <h3>Show Me </h3>
            }

            {/* { isToggled ?     //tenary operation
            <h3>Show Me</h3>
            : null
            } */}

            <button onClick={ () => setIsToggled (!isToggled)}
            >Toggle</button>
        </div>
    )

};