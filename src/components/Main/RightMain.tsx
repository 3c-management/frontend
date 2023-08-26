import React, { useState }  from 'react';
import styles from './RightMain.module.css';
import {ReactComponent as Help} from '../../images/help.svg';
import ScoreBySubject from './scoreBySubject';
import RankChangeByGrade from './Rank change by grade';

interface StudentInfo {
    name: string;
    grade: number;
    department: string,
    stuClass: number;
    number: number;
    ranking: number;
}
interface ModalProps {
    onDataFromModal: (data: boolean) => void;
}

const RightMain: React.FC<ModalProps> = (props: ModalProps) => {
    const [studentInfo, setStudentInfo] = useState<StudentInfo>({
        name: '김찬민',
        grade: 2,
        department: '소프트웨어개발과',
        stuClass: 2,
        number: 4,
        ranking: 10,
      });

      const [modal,setModal] = useState<boolean>(false);

      const senModalData = () => {
        setModal(true)
        props.onDataFromModal(true);
      }
      const handleInfoChange = (newInfo: Partial<StudentInfo>) => {
        setStudentInfo(prevStudentInfo => ({
          ...prevStudentInfo,
          ...newInfo,
        }));
      };
    return(
        <div className={styles.myStats}>
            <div className={styles.myStatsContainer}>
                <div><label className={styles.mainTitle}>나의 통계</label></div>
                <div className={styles.score}>
                    <div className={styles.scoreContainer}>
                        <div>
                            <label className={styles.mainTitle}>3C 과목별 점수</label>
                            <Help className={styles.help} onClick={senModalData}/>
                            <div className={modal ? styles.modalContainer : styles.modalNone}></div>
                            <div className={styles.chart}>
                                <ScoreBySubject/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomContainer}>
                        <div className={styles.changeContainer}>
                        <div><label className={styles.mainTitle}>학년 별 순위 변동</label></div>
                            <div>
                                <RankChangeByGrade/>
                            </div>
                        </div>
                        <div className={styles.informationContainer}>
                        <div className={styles.titleContainer}><label className={styles.mainTitle}>프로필</label></div>
                        
                        <div className={styles.studentInfoContainer}>
                            <div className={styles.studentInfo}>
                                <label className={styles.th}>이름</label> 
                                <label className={styles.td}>{studentInfo.name}</label>
                            </div>
                        </div>
                        <div className={styles.studentInfoContainer}>
                            <div className={styles.studentInfo}>
                                <label className={styles.th}>학년</label> 
                                <label className={styles.td}>{studentInfo.grade}학년</label>
                            </div>
                        </div>
                        <div className={styles.studentInfoContainer}>
                            <div className={styles.studentInfo}>
                                <label className={`${styles.th} ${styles.classTh}` }>반</label> 
                                <label className={`${styles.td} ${styles.classTd}`}>{studentInfo.department} / {studentInfo.stuClass}반</label>
                            </div>
                        </div>
                        <div className={styles.studentInfoContainer}>
                            <div className={styles.studentInfo}>
                                <label className={styles.th}>번호</label> 
                                <label className={styles.td}>{studentInfo.number}번</label>
                            </div>
                        </div>
                        <div className={styles.studentInfoContainer}>
                            <div className={`${styles.studentInfo} ${styles.end}`}>
                                <label className={styles.th}>순위</label> 
                                <label className={styles.td}>{studentInfo.ranking}위</label>
                            </div>
                        </div>
                        <div className={styles.studentInfoContainer}>
                            <button className={styles.btnStyles}>
                                <label className={styles.btnName}>
                                    프로필 수정하기
                                </label>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default RightMain;