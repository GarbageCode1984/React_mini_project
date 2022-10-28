import './App.css';
import React, { useState } from 'react';
import Box from './componets/Box';

function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState('');

    const choice = {
        scissors: {
            name: 'Scissors',
            img: 'scissors.png',
        },
        rock: {
            name: 'Rock',
            img: 'rock.png',
        },
        paper: {
            name: 'Paper',
            img: 'paper.png',
        },
    };

    function play(userChoice) {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);

        setResult(judgement(choice[userChoice], computerChoice));
    }

    const randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];

        return choice[final];
    };

    const judgement = (user, com) => {
        if (user.name === com.name) {
            return '비김';
        } else if (user.name === 'Rock') {
            return com.name === 'Scissors' ? '승리!' : '패배...';
        } else if (user.name === 'Scissors') {
            return com.name === 'Paper' ? '승리!' : '패배...';
        } else if (user.name === 'Paper') {
            return com.name === 'Rock' ? '승리!' : '패배...';
        }
    };

    return (
        <>
            <div className="main">
                <Box title="Mine" item={userSelect} result={result} />
                <Box title="Computer" item={computerSelect} result={result} />
            </div>
            <div className="main">
                <button onClick={() => play('scissors')}>가위</button>
                <button onClick={() => play('rock')}>바위</button>
                <button onClick={() => play('paper')}>보</button>
            </div>
        </>
    );
}

export default App;
