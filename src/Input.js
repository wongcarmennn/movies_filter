import React from 'react';
import { useState } from 'react';

export function Input(){

    const [inputValue, setInputValue] = useState("");
    return (
        <div>
            <input  value = {inputValue} 
            //Longhand
            // onChange={ (event) => setInputValue(event.target.value)}/>
            //Basic 
            // onChange={ (e) => setInputValue(e.target.value)}/>
        onChange={ (e) => {setInputValue(e.target.value)
        }
        }/>
        </div>
    )
}