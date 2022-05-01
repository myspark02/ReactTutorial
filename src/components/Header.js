import React from 'react';
import TrollImage from './images/troll-face.png'

export default function Header() {
    return (
        <header className='header'>
            <img src={TrollImage} className='header--image' alt='trol-face' />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Courcse - Project 3</h4>
        </header>
    )
}