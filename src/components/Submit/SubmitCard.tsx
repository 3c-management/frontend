import React from 'react';
import styles from './SubmitCard.module.css';
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
import PieCharts from '../PieChart/PieChart';

interface cardNames {
    cardName: string;
    fill: boolean;
}


const iconComponents: { [key: string]: React.ComponentType } = {
    Coupon,
    SubmitMain,
    Logout,
    InterfaceAward,
    Project,
    Portfolio,
    Competition,
    Program,
    Thumb,
    Book,
    Smail,
    UsersProfiles
};

  
const SubmitCard:React.FC<cardNames> = ({cardName,fill}) => {
    const IconComponent: React.ComponentType<{ className?: string }> = iconComponents[cardName];
    const teacher:string = '이소라';
    let cardTitle:string = "";
    let maxPoint:number = 0;
    if(cardName === "InterfaceAward"){
        cardTitle = "자격증 취득";
        maxPoint = 60;
    }else if(cardName === 'Project'){
        cardTitle = "프로젝트";
        maxPoint = 250;
    }else if(cardName === 'Portfolio'){
        cardTitle = "포트폴리오";
        maxPoint = 120;
    }else if(cardName === 'Competition'){
        cardTitle = "대회도전";
        maxPoint = 70;
    }else if(cardName === 'Program'){
        cardTitle = "교내 프로그램";
        maxPoint = 70;
    }else if(cardName === 'Thumb'){
        cardTitle = "봉사활동";
        maxPoint = 100;
    }else if(cardName === 'Book'){
        cardTitle = "독서활동";
        maxPoint = 80;
    }else if(cardName === 'Smail'){
        cardTitle = "상벌점제";
        maxPoint = 60;
    }else if(cardName === 'UsersProfiles'){
        cardTitle = "동아리 활동";
        maxPoint = 60;
    }

    return(
        <div className={styles.cardMain}>
            <div className={styles.cardPadding}>
                <div className={styles.cardDetail}>
                    <div className={styles.profile}/>

                    <div className={styles.titleDetail}>
                        <div className={styles.lookDetail}>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                        </div>
                        <label className={styles.teacherName}>{teacher} 선생님</label>
                    </div>
                </div>
                <div className={styles.bar}>
                    <div className={styles.barLeft}>
                        <label className={styles.subTitle}>{cardTitle}</label>
                        <div className={styles.points}>
                            <IconComponent className={fill ? styles.awardFill : styles.award}/>
                            <label className={styles.pointText}>200 / {maxPoint}</label>
                        </div>
                    </div>
                    <div className={styles.Pie}>
                        <PieCharts/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmitCard;