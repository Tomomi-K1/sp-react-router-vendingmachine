import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
    return (
        <div>
            <h1>Here's your Chips!</h1>
            <div>
                <iframe src="https://giphy.com/embed/xT39Dl1AHieEwAobq8" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
            <button>
                <Link exact to="/">Go back to Vending Machine</Link>
            </button>
        </div>
    )
}

export default Chips;