import React from 'react';
import Sidebar from './Sidebar';

function Clases() {
    return (
        <div>
            <Sidebar/>
            <main>
                <h1>Estas en Clases.</h1>
                <video className="videoPlayer" src={`${process.env.REACT_APP_SERVER_URL}/tutorial.mp4`} controls></video>
            </main>
        </div>
    )
}

export default Clases;
