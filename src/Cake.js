import React from "react";
import { Link } from "react-router-dom";

const Cake = () => {
    return (
        <div>
            <h1>Here's your Cake!</h1>
            <div>
            <iframe src="https://giphy.com/embed/WnA4yH1q9Wmjj4Au1l" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
            <button>
                <Link exact to="/">Go back to Vending Machine</Link>
            </button>
        </div>
    )
}

export default Cake;