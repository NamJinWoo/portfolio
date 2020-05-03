import React from 'react';
import '../css/Award.css';

function Award(){
    return (
        <div className="award_container">
            <div className="award_left_content">
                <div className="award_content_container">
                    <div className="award_content">
                        <h3 className="award_content_title">&lt;Webolution&gt;</h3>
                        <p className="award_content_company">개발부문 최우수상</p>
                        <p className="award_content_desc">수상일자 : 2018.09.29</p>
                        <p className="award_content_desc">수상기관 : 충남대학교 컴퓨터공학과</p>
                        <p className="award_content_desc">
                            교내 웹 학술 동아리에서 개최한 웹 코딩 대회인 Webolution 을 참가하여 
                            '어린이 학습용 코딩 퍼즐'이라는 주제로 Draft 개발을 완성 후 발표, 최종적으로 최우수상을 수상하였습니다. 
                            어린 아기가 엄마라는 말을 처음으로 하기까지 수천 번의 말을 들어야 따라 하듯, 
                            코딩을 처음 접하는 어린아이들에게 퍼즐이라는 흥미 있는 주제로 게임을 하면서 자연스럽게 
                            코딩의 틀을 이해하고 받아들이는 것을 목표로 웹사이트를 제작하게 되었습니다.
                        </p>
                        <p className="award_content_desc">
                            저는 해당 아이디어를 제공하고 기술적으로 여러가지 파트를 담당하였습니다.
                            Firebase로 진행된 데이터베이스를 통해 회원가입과 로그인 기능을 담당하였고 
                            전반적인 프로트엔드의 구조와 디자인을 작업하였습니다.
                        </p>
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