import React from "react";
import '../css/Introduction.css';

function Introduction(){
    return (
        <div className="intro_container">
            <div className="intro_left_content">
                <p className="intro_title">Who am I?</p>
            </div>
            <div className="intro_right_content">
                <div className="intro_content">
                    <h1>남진우(南眞祐)</h1>
                    <h2>&lt;Education&gt;</h2>
                    <p>- 충남대학교 컴퓨터공학과 (2014.03 ~ 2020.08)</p>
                    <h2>&lt;GPA&gt;</h2>
                    <p>- 3.471 / 4.5</p>
                    <h2>&lt;Experience&gt;</h2>
                    <p>- NanoCellect Biomedical Inc., San Diego (2019.03 ~ 2019.09)</p>
                    <h2>&lt;Licenses & Certifications&gt;</h2>
                    <p>- OPIc English AL(Advanced Low) (2020.01 ~ 2022.01) / ACTFL</p>
                    <p>- General English - Advanced CEFR C1 level (2018.02) / Malvern House London</p>
                    <h2>&lt;Programming Skills&gt;</h2>
                    <p>- Python</p>
                    <p>- Java</p>
                    <p>- Flask</p>
                    <p>- React</p>
                    <p>- HTML / JavaScript</p>
                </div>
            </div>
        </div>
    );
}

export default Introduction