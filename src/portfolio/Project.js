import React from "react";
import '../css/Project.css';

function Project(){
    return (
        <div className="project_container">
            <div className="project_left_content">
                <p className="project_title">Project</p>
            </div>
            <div className="project_right_content">
                <div className="project_content_container">
                    <div className="project_content">
                        <h3 className="project_content_title">&lt;Dashboard Project&gt;</h3>
                        <p className="project_content_desc">기간 : 2019.04 ~ 2019.05</p>
                        <p className="project_content_desc">
                            &nbsp;인턴 기간 중 2달 동안 진행된 Dashboard Project는 세포 분류를 실험하는 
                            Machine을 통해 생성된 여러 가지 데이터들을 서버로 전달받고, 그 데이터를 
                            가공하여 사용자들에게 보기 쉬운 Bar Graph 및 Pie Chart로 시각화하여 보여주는 프로젝트입니다. 
                            Back-end로 전달받은 데이터는 Python-Flask와 PostgreSQL을 사용하여 데이터베이스에 저장되고, 
                            그 저장된 데이터를 Frond-end로 전달합니다. Back-end로부터 전달받은 데이터는 Jinja Template을 
                            사용하여 Front-end에서 활용되었습니다. 그래프 시각화에서 사용되었던 기술은 PlotlyJS입니다. 
                            Jinja Template, Javascript 및 PlotlyJS 를 사용하여 데이터를 가공하고, 
                            가공된 데이터를 요구된 형태에 맞게 그래프화 하였습니다.
                        </p>
                        <p className="project_content_desc">
                            Github : (회사 내부에서 진행된 프로젝트이기 때문에 소스코드를 공개하지 않습니다.)
                        </p>
                    </div>
                    <hr></hr>
                    <div className="project_content">
                        <h3 className="project_content_title">&lt;Docker 환경 기반 졸업 논문 정리 웹 페이지&gt;</h3>
                        <p className="project_content_desc">기간 : 2019.10 ~ 2020.05</p>
                        <p className="project_content_desc">
                        &nbsp;기존에 제출된 학과 내 졸업논문의 검색엔진 시스템입니다. 졸업을 위해 연구를 준비하는 학생들에게 진
                        행할 아이디어의 중복 여부 파악과 새로운 아이디어 창조에 도움을 주며, 기존 연구들의 진행 방식 및 결과 제공을 목표로 하고있습니다.<br/>
                        &nbsp;React를 기반으로 Front-end를 구성하고 Spring Boot를 활용하여 Back-end를 구성하였습니다.
                        MySQL Database를 활용하여 데이터를 관리하였고, Redis를 활용한 토큰 또한 사용하였습니다.
                        이 모든 환경을 Docker 환경으로 구축하여 관리하고 있습니다.
                        </p>
                        <p className="project_content_desc">
                            Github : <a href="https://github.com/minimal1/spring-react-mysql-docker">https://github.com/minimal1/spring-react-mysql-docker</a>
                        </p>
                    </div>
                    <div className="project_content">
                        <h3 className="project_content_title">&lt;포트폴리오 제작 웹 사이트&gt;</h3>
                        <p className="project_content_desc">기간 : (진행예정)2020.05 ~</p>
                        <p className="project_content_desc">
                        &nbsp;포트폴리오 제작에 어려움을 겪는 취업 준비생들에게 템플릿 선택과 간단한 입력을 통해
                        포트폴리오 사이트를 제작해주어 편의를 제공하는 것을 목표로 하고 있습니다.<br/>
                        &nbsp;현재 기술과 구조 및 기능에 대해서 아이디어 구상 중에 있습니다.
                        </p>
                        <p className="project_content_desc">
                            Github : <a href="https://github.com/NamJinWoo/MYPS">https://github.com/NamJinWoo/MYPS</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;