import React from "react";
import '../css/Career.css';

function Career(){
    return (
        <div className="career_container">
            <div className="career_left_content">
                <div className="career_content_container">
                    <div className="career_content">
                        <h3 className="career_content_title">해외 인턴쉽</h3>
                        <p className="career_content_company">회사명 : NanoCellect Biomedical Inc.</p>
                        <p className="career_content_desc">기간 : 2019.03 ~ 2019.09</p>
                        <p className="career_content_desc">
                            저는 미국 샌디에고에 위치한 NanoCellect Biomedical Inc. 에서 
                            소프트웨어 팀 인턴으로 생활하면서 다양한 경험과 실무능력을 쌓을 수 있었습니다. 
                            저는 Flask Framework를 사용한 Web Application을 관리하였습니다. 
                            세포 분류 실험이 진행되는 Machine에서 서버로 전달된 데이터를 가공해 여러 가지 
                            그래프 및 Chart로 변환해 결괏값을 보여주는 직무를 진행하였습니다.  
                            HTML, JS, CSS를 기반을 둔 프론트엔드와 Python-Flask를 기반으로 한 
                            백엔드까지 한 번에 관리하면서 웹 개발에 대한 실무 능력을 키울 수 있었습니다. 
                            또한, 결괏값을 기반으로 고객 관리에 좋은 영향을 줄 수 있는 'Auto-Notification E-mail'이라는 
                            새로운 아이디어를 제안했고, 회사 임원들 및 Customer 관리팀 모두 
                            '앞서서 고객 관리에 힘을 줄 수 있는 좋은 아이디어다'라며 만족했습니다. 
                            이처럼 저는 해외 실무를 통해 웹 개발 능력과 팀원들과의 소통, 또한 더 나은 
                            서비스를 위한 아이디어 제공을 하면서 성장할 수 있었습니다.
                        </p>
                    </div>
                    <hr></hr>
                    <div className="career_content">
                        <h3 className="career_content_title">글로벌 인재트랙</h3>
                        <p className="career_content_company">Purdue University</p>
                        <p className="career_content_desc">기간 : 2018.12 ~ 2019.02</p>
                        <p className="career_content_desc">
                            저는 미국 샌디에고에 위치한 NanoCellect Biomedical Inc. 에서 
                            소프트웨어 팀 인턴으로 생활하면서 다양한 경험과 실무능력을 쌓을 수 있었습니다. 
                            저는 Flask Framework를 사용한 Web Application을 관리하였습니다. 
                            세포 분류 실험이 진행되는 Machine에서 서버로 전달된 데이터를 가공해 여러 가지 
                            그래프 및 Chart로 변환해 결괏값을 보여주는 직무를 진행하였습니다.  
                            HTML, JS, CSS를 기반을 둔 프론트엔드와 Python-Flask를 기반으로 한 
                            백엔드까지 한 번에 관리하면서 웹 개발에 대한 실무 능력을 키울 수 있었습니다. 
                            또한, 결괏값을 기반으로 고객 관리에 좋은 영향을 줄 수 있는 'Auto-Notification E-mail'이라는 
                            새로운 아이디어를 제안했고, 회사 임원들 및 Customer 관리팀 모두 
                            '앞서서 고객 관리에 힘을 줄 수 있는 좋은 아이디어다'라며 만족했습니다. 
                            이처럼 저는 해외 실무를 통해 웹 개발 능력과 팀원들과의 소통, 또한 더 나은 
                            서비스를 위한 아이디어 제공을 하면서 성장할 수 있었습니다.
                        </p>
                    </div>
                </div>
            </div>
            <div className="career_right_content">
                <p className="career_title">Career</p>
            </div>
        </div>
    ); 
}

export default Career;