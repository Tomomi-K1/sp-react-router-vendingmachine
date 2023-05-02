import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
    return (
        <div>
            <h1>Here's your Soda!</h1>
            <div>
                <iframe src="https://giphy.com/embed/acJgACIGXAhLa" width="382" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
            <button>
                <Link exact to="/">Go back to Vending Machine</Link>
            </button>
        </div>
    )
}

export default Soda;