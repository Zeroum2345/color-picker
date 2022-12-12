import {useState} from 'react'

export default function ColorChanger({ setBackgroundColor }){
    const [color, setColor] = useState('')

    const generateRandomColor = () => {

        const translateToHex = {
            10: 'A',
            11: 'B',
            12: 'C',
            13: 'D',
            14: 'E',
            15: 'F',
        } 

        let newColor = '#'

        for(let i = 0; i < 6; i++){
            const colorCodeFragment = Math.floor(Math.random() * 16);
            
            if(colorCodeFragment > 9){
                newColor += translateToHex[colorCodeFragment]
            }
            else{
                newColor += colorCodeFragment.toString()
            }
        }

        setColor(newColor)
        setBackgroundColor(newColor)
    }

    return(
        <div>
            <h3 id="colorCode">
                {color}
            </h3>
            <button onClick={() => generateRandomColor()}>Generate color</button>
        </div>
    )
}