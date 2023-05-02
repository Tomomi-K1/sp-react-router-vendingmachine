import React from "react";
import './VendingMachine.css'
import { Link } from "react-router-dom";

const VendingMachine = () => {
    return (
        <div className='VendingMachine'>
            <h1>I am a vending machine!</h1>
            <p>Choose Items you want!</p>
            
            <ul className="VendingMachine-ul">
                <li><Link exact to="/soda">Soda</Link></li>
                <li><Link exact to="/cake">Cake</Link></li>
                <li><Link exact to="/chips">Chips</Link></li>
            </ul>

        </div>
    )
}

export default VendingMachine;