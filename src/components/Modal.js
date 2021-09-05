import React from "react";
import thanos from "../images/Thanos.jpg";

function Modal(){
    return(
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    <img className="thanos-photo" src={thanos} alt="show-thanos" />
                    <div>Congratulations, you've killed the Avengers! </div>
                    <div>Thanos is proud of you!</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;