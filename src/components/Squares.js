import React from 'react'
import '../App.scss';


const Squares = ({value , onclk})=> {
    return(
        
           <button type="button" className='square' onClick={ onclk } >{value}</button>
        
    );
}
export default Squares;