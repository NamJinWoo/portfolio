import React from "react";
import '../css/Activity.css';

function Activity(){
    return (
        <div className="activity_container">
            <div className="activity_left_content">
                <p className="activity_title">Activity</p>
            </div>
            <div className="activity_right_content">
                <div className="activity_content">Content</div>
            </div>
        </div>
    );
}

export default Activity;