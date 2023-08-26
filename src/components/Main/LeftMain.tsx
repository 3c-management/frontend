import React from 'react';
import styles from './LeftMain.module.css'
import useDay from '../../hooks/useDay';
import {ReactComponent as Coupon} from '../../images/coupon.svg';
import {ReactComponent as SubmitMain} from '../../images/submitMain.svg';
import {ReactComponent as Logout} from '../../images/logout.svg';
import {ReactComponent as InterfaceAward} from '../../images/MainList/interfaceAward.svg';
import {ReactComponent as Project} from '../../images/MainList/project.svg';
import {ReactComponent as Portfolio} from '../../images/MainList/portfolio.svg';
import {ReactComponent as Competition} from '../../images/MainList/competition.svg';
import {ReactComponent as Program} from '../../images/MainList/program.svg';
import {ReactComponent as Thumb} from '../../images/MainList/thumb.svg';
import {ReactComponent as Book} from '../../images/MainList/book.svg';
import {ReactComponent as Smail} from '../../images/MainList/smail.svg';
import {ReactComponent as UsersProfiles} from '../../images/MainList/usersProfiles.svg';

import { PieChart } from "react-minimal-pie-chart";
const LeftMain: React.FC = () => {
    const { ToDay } = useDay();
    const levelPoint:number = 50; //남은 포인트
    const levelLimit:number = 100;// 최대 포인트
    const level:number = 3; // 현재 레벨
    const name:string = 'Kim Chan Min' // 영문 이름
    const data ={
      value: 50,
      color: "white",
      name: "level",
    }
    return(
        <div className={styles.dashboardContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.CoverContainer}>
            <div>
              <label className={`${styles.title} ${styles.dashboardTitle}`}>대시보드</label><br/>
              <label className={styles.subTitle}>오늘의 날짜 : {ToDay}</label>
            </div>
            <div className={styles.scoreContainer}>
              <div className={styles.score}>
                <div className={styles.scoreName}>
                  <div>
                    <label className={styles.name}>{name}</label>
                  </div>
                  <div>
                    <Coupon/>
                    <label className={styles.level}>{`${levelPoint} `}</label> 
                    <label className={styles.levelLimit}>{` / ${levelLimit}`}</label>
                  </div>
                </div>
                <div className={styles.PieChart}>
                  <PieChart className={styles.PieChart}
                    data={[
                      data
                    ]}
                    reveal={50} //퍼센트 치수
                    lineWidth={15} //도넛 두께
                    background="rgb(230,235,270)"
                    lengthAngle={360}
                    rounded
                    animate
                    label={({ dataEntry }) => dataEntry.value + "%"}
                    labelStyle={{
                      fontSize: "30px",
                      fill: "black",
                      fontWeight: 'bolder'
                    }}
                    labelPosition={0}
                  />
                </div>
              </div>
              <div className={styles.levelDetail}>
                <label>다음 레벨까지 
                  <label className={styles.remainingPoint}> {levelLimit-levelPoint}점 </label>
                  남았어요!
                </label>
                <label>현재 레벨 : {level}</label>
              </div>
            </div>
            <div className={styles.dashboardUnder}>
                <div className={styles.dashboardUnderList}><SubmitMain/><label className={styles.submit}>3C 제출하기</label></div>
                <div className={styles.dashboardUnderList}><Logout/><label className={styles.submit}>로그아웃</label></div>
            </div>
          </div>
        </div>
        <div>
            <div className={styles.SkillListContainer}>
                <div className={styles.SkillList}>
                    <InterfaceAward className={`${styles.SkillListImg} ${styles.interfaceAwardImg}`}/>
                    <label className={`${styles.SkillListText} ${styles.interfaceAwardText}`}>자격증 취득</label>
                </div>
            </div>
            <div className={styles.SkillListContainer}>
                <div className={styles.SkillList}>
                    <Project className={`${styles.SkillListImg} ${styles.projectImg}`}/>
                    <label className={`${styles.SkillListText} ${styles.projectText}`}>프로젝트</label>
                </div>
            </div>
            <div className={styles.SkillListContainer}>
                <div className={styles.SkillList}>
                    <Portfolio className={`${styles.SkillListImg} ${styles.portfolioImg}`}/>
                    <label className={`${styles.SkillListText} ${styles.portfolioText}`}>포트폴리오</label>
                </div>
            </div>
            <div className={`${styles.SkillListContainer} ${styles.SkillListContainerfill}`}> {/*fill*/}
                <div className={styles.SkillList}>
                    <Competition className={`${styles.SkillListImgFill} ${styles.competitionImg}`}/>
                    <label className={`${styles.SkillListText} ${styles.competitionText}`}>대회도전</label>
                </div>
            </div>
            <div className={`${styles.SkillListContainer} ${styles.SkillListContainerfill}`}> {/*fill*/}
                <div className={styles.SkillList}>
                    <Program className={styles.SkillListImgFill}/>
                    <label className={`${styles.SkillListText} ${styles.programText}`}>교내 프로그램</label>
                </div>
            </div>
            <div className={styles.SkillListContainer}>
                <div className={styles.SkillList}>
                    <Thumb className={`${styles.SkillListImg} ${styles.thumbImg}`}/>
                    <label className={`${styles.SkillListText} ${styles.thumbText}`}>봉사활동</label>
                </div>
            </div>
            <div className={`${styles.SkillListContainer} ${styles.SkillListContainerfill}`}> {/*fill*/}
                <div className={styles.SkillList}>
                    <Book className={styles.SkillListImgFill}/>
                    <label className={styles.SkillListText}>독서활동</label>
                </div>
            </div>
            <div className={styles.SkillListContainer}>
                <div className={styles.SkillList}>
                    <Smail className={styles.SkillListImg}/>
                    <label className={styles.SkillListText}>상벌점제</label>
                </div>
            </div>
            <div className={styles.SkillListContainer}>
                <div className={styles.SkillList}>
                    <UsersProfiles className={`${styles.SkillListImg} ${styles.usersProfilesImg}`}/>
                    <label className={`${styles.SkillListText} ${styles.usersProfilesText}`}>동아리 활동</label>
                </div>
            </div>
        </div>
      </div>
    )
}


export default LeftMain;