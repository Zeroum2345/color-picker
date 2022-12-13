import { useEffect, useState } from 'react'

import './style.css'

export default function ColorChanger({ setBackgroundColor }) {
    const [color, setColor] = useState('')
    const [copied, setCopied] = useState('')

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

        for (let i = 0; i < 6; i++) {
            const colorCodeFragment = Math.floor(Math.random() * 16);

            if (colorCodeFragment > 9) {
                newColor += translateToHex[colorCodeFragment]
            }
            else {
                newColor += colorCodeFragment.toString()
            }
        }

        setColor(newColor)
        setBackgroundColor(newColor)
    }

    useEffect(() => generateRandomColor(), [])

    useEffect(() => {
        const span = document.querySelector('#copiedAlert')
        span.animate([
            {
                color: 'black'
            },
            {
                color: 'transparent'
            }
        ], 810)
        const removeCopied = async () => {
            await new Promise(resolve => setTimeout(resolve, 800))
            setCopied('')
        }
        removeCopied()

    }, [copied])

    return (
        <div id="colorChangeBox">
            <h3 id="colorCode" onClick={() => {navigator.clipboard.writeText(color); setCopied('Copied!')}}>{color}</h3>
            <button id="changeColorBtn" onClick={() => generateRandomColor()}>Generate color</button>
            <span id="copiedAlert">{copied}</span>
        </div>
    )
}