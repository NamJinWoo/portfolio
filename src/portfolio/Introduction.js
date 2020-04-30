import React from "react";
import '../css/Introduction.css';

function Introduction(){
    return (
        <div className="intro_container">
            <div className="intro_left_content">
                <p className="intro_title">Who am I?</p>
            </div>
            <div className="intro_right_content">
                <div className="intro_content">Content</div>
            </div>
        </div>
    );
}

export default Introduction