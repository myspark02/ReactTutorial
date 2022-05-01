import React from 'react';
import Dice from './components/Dice'
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function App() {
    function allNewDice() {
        //  new array to hold 10 numbers
        const newDice = [];

        /*  loop 10 times
                push a random number from 1-6 to my array
        */
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random()*6), 
                isHeld: false,
                id: nanoid(),
            })
        } 
        return newDice;
    }

    function rollDice() {
        if (tenzies) {
            setDices(allNewDice());
            setTenzies(false);
            return;
        }
        setDices(oldDices => 
            oldDices.map(dice => dice.isHeld ? dice : {...dice, value:Math.ceil(Math.random()*6)})
        )
    }

    function holdDice(id) {
        setDices(oldDices => oldDices.map(dice => dice.id===id?{...dice, isHeld:!dice.isHeld}:dice));
    }
    
    const [dices, setDices] = React.useState(allNewDice());
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(() => {
        const allHeld = dices.every(dice => dice.isHeld)
        const firstValue = dices[0].value;
        const allSameValue = dices.every(dice => dice.value === firstValue)
         if (allHeld && allSameValue) {
             setTenzies(true);
             console.log('You won!')
         }
    }, [dices]);

    const diceElements = dices.map( (dice) => (
            <Dice key={dice.id} id={dice.id} value={dice.value} isHeld={dice.isHeld} holdDice={holdDice} />
            ));
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
            <div className='dice-container'>
                 {diceElements}
            </div> 
            <button className="roll-dice" onClick={rollDice}>{tenzies?'New Game' : 'Roll'}</button>
        </main> 
    )
} 