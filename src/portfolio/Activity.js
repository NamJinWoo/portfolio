import React from "react";
import '../css/Activity.css';

function Activity(){
    return (
        <div className="activity_container">
            <div className="activity_left_content">
                <p className="activity_title">Activity</p>
            </div>
            <div className="activity_right_content">
                <div className="activity_content_container">
                    <div className="activity_content">
                        <h3 className="activity_content_title">학과 학생회</h3>
                        <p className="activity_content_company">주최 : 충남대학교 컴퓨터공학과</p>
                        <p className="activity_content_desc">기간 : 2018.01 ~ 2018.12</p>
                        <p className="activity_content_desc"></p>
                    </div>
                    <hr></hr>
                    <div className="activity_content">
                        <h3 className="activity_content_title">개인 블로그</h3>
                        <p className="activity_content_company">'기억보단 기록을' 네이버 블로그</p>
                        <p className="activity_content_desc">기간 : 2019.10 ~ Present</p>
                        <p className="activity_content_desc"><a href="https://blog.naver.com/cjsencks">기억보단 기록을 블로그</a></p>
                    </div>
                    <hr></hr>
                    <div className="activity_content">
                        <h3 className="activity_content_title">기타 활동</h3>
                        <p className="activity_content_company">학부생 튜터 2회</p>
                        <p className="activity_content_desc">기간 : 2018.09 ~ 2018.11 / 2020.03 ~ Present</p>
                        <p className="activity_content_desc">1학년 대상 Git 강의 / 3학년 대상 IT 영어</p>
                        <p className="activity_content_company">1:1 코딩 튜터</p>
                        <p className="activity_content_desc">기간 : 2018.10 ~ 2018.12</p>
                        <p className="activity_content_desc">컴퓨터공학과 복수전공을 진행하는 다른 학과 학생들에게 코딩에 대한 개념을 설명하고 실습함.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;