import React from 'react';
import '../css/Award.css';

function Award(){
    return (
        <div className="award_container">
            <div className="award_left_content">
                <div className="award_content_container">
                    <div className="award_content">
                        <h3 className="award_content_title">Webolution</h3>
                        <p className="award_content_company">개발부문 최우수상</p>
                        <p className="award_content_desc">수상일자 : 2018.09.29</p>
                        <p className="award_content_desc">수상기관 : 충남대학교 컴퓨터공학과</p>
                    </div>
                    <hr></hr>
                    <div className="award_content">
                        <h3 className="award_content_title">경상북도 공공데이터 활용 아이디어 발굴 및 앱 공모전</h3>
                        <p className="award_content_company">아이디어 부문 장려상</p>
                        <p className="award_content_desc">수상일자 : 2015.10.01</p>
                        <p className="award_content_desc">수상기관 : 대구대학교</p>
                    </div>
                </div>
            </div>
            <div className="award_right_content">
                <p className="award_title">Award</p>
            </div>
        </div>
    );
}

export default Award;