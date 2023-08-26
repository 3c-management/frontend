import React from 'react';
import styles from './Submit.module.css';
import SubmitCard from '../../components/Submit/SubmitCard';
const Submit:React.FC = () => {
    return(
        <div className={styles.mainContent}>
            <div className={styles.margin}>
                <h1 className={styles.mianTitle}>3C 제출</h1>
                <label className={styles.subTitle}>Here you can submit for verification</label>
                <div className={styles.cardContainer}>
                    <SubmitCard cardName={"InterfaceAward"} fill={false}/>
                    <SubmitCard cardName={"Project"}  fill={false}/>
                    <SubmitCard cardName={"Portfolio"}  fill={false}/>
                    <SubmitCard cardName={"Competition"}  fill={true}/>
                    <SubmitCard cardName={"Program"}  fill={true}/>
                    <SubmitCard cardName={"Thumb"}  fill={false}/>
                    <SubmitCard cardName={"Book"}  fill={true}/>
                    <SubmitCard cardName={"Smail"}  fill={false}/>
                    <SubmitCard cardName={"UsersProfiles"}  fill={false}/>
                </div>
            </div>
        </div>
    )
}

export default Submit;