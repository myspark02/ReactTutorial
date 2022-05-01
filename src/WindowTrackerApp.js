import React from 'react';
import WindowTracker from './components/WindowTracker';

export default function App() {

    const [show, setShow] = React.useState(true);

    function toggle() {
        setShow(prev => !prev )
    }
    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker /> }
        </div>
    )
}