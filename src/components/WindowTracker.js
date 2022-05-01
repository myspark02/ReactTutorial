import React from 'react';

export default function WindowTracker() {
    const [width, setWidth] = React.useState(window.innerWidth);
    console.log('rendered');
    React.useEffect(() => {
        function watchWidth() {
            setWidth(window.innerWidth);
        }
        console.log('Setting up...');
        window.addEventListener('resize', () => {
            watchWidth();});

        return () => {
            console.log('Cleaning up....');
            window.removeEventListener('resize', watchWidth);
        }
    }, []);

    return (
        <h1>Window width: {width}</h1>
    )
}