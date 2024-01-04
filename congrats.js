import React from 'react';
import '../task2/congrats.css';
export function Congrats(){
    return(
        <>
        <div className='congrats container-fluid'>
            <h1 className='text-center'>Congratulations</h1>
            <div className= 'bg-info w-2 p-5 container-fluid text-center col-lg-4'>
            <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'/>
            <h1 className='mx-auto'>Kiran V</h1>
            <p className='mx-auto'>Vishnu Institute of Computer Education and Technology,<br></br>Bhimavaram</p>
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"/>
            </div>

        </div>
        </>
    );
}
