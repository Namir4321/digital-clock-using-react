import React, { useState } from 'react';
const App = () => {
    let time =new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric',hour12: true });
    const [ctime,ntime] = useState(time);
    const update = () => {
        let time =new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric',hour12: true });
ntime(time);   
    }
    setInterval(update,1000)
    return (
    <>
    <div className='main'>
    <h1>{time}</h1>
    </div>
    </>
)
};
export default App;