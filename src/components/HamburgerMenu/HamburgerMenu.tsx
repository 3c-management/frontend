import React from 'react';
import styles from './HamburgerMenu.module.css'
import useUrlValue from '../../hooks/useUrlValue';
import {ReactComponent as Dashboard} from '../../images/dashboard.svg';
import {ReactComponent as DashboardOn} from '../../images/dashboardOn.svg';
import {ReactComponent as Calendar} from '../../images/calendar.svg';
import {ReactComponent as CalendarOn} from '../../images/calendarOn.svg';
import {ReactComponent as Submit} from '../../images/submit.svg';
import {ReactComponent as SubmitOn} from '../../images/submitOn.svg';
import {ReactComponent as Award} from '../../images/award.svg';
import {ReactComponent as AwardOn} from '../../images/awardOn.svg';
import {ReactComponent as Setting} from '../../images/setting.svg';
import {ReactComponent as Help} from '../../images/help.svg';
import {ReactComponent as See_more} from '../../images/see_more.svg';
import { Link } from 'react-router-dom';


const Hamburger: React.FC = () => {
  const urlValue = useUrlValue();

    return (
      <div className={styles.hamburgerMain}>
        <div className={styles.hamMenuFlex}>
          <div className={styles.hamTitle}>
            <div className={styles.logoImg}/>
            <label className={styles.title}>3C 인증제</label>
          </div>
          <div className={styles.listContainer}>
            <div className={urlValue === 'dashboard' ? styles.hamListOn : styles.hamList}>
                <div className={styles.listSP}>
                  {urlValue === 'dashboard' ? 
                    <DashboardOn/>
                    :
                    <Dashboard/>
                  }
                  <label><Link className={styles.Atag} to={'/'}>대시보드</Link></label>
                </div>
            </div>
            <div className={urlValue === 'calendar' ? styles.hamListOn : styles.hamList}>
                <div className={styles.listSP}>
                  {urlValue === 'calendar' ? 
                    <CalendarOn/>
                    :
                    <Calendar/>
                  }
                  <label><Link to="/" className={styles.Atag}>내 활동</Link></label>
                </div>
            </div>
            <div className={urlValue === 'submit' ? styles.hamListOn : styles.hamList}>
              <div className={styles.listSP}>
                  {urlValue === 'submit' ? 
                    <SubmitOn/>
                    :
                    <Submit/>
                  }
                  <label><Link to={'/submit'} className={styles.Atag} >3C 제출</Link></label>
              </div>
            </div>
            <div className={urlValue === 'award' ? styles.hamListOn : styles.hamList}>
              <div className={styles.listSP}>
                  {urlValue === 'award' ? 
                    <AwardOn/>
                    :
                    <Award/>
                  }
                  <label><Link to="/" className={styles.Atag}>학교 랭킹</Link></label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hamMenuFlex2}>
            <label className={styles.title2}>설정 및 정보</label>
            <div className={styles.settingContainer}>
              <div className={styles.hamList}>
                <div className={styles.listSP}>
                  <Setting/> <label>설정하기</label>
                </div>
              </div>
              <div className={styles.hamList}>
                <div className={styles.listSP}>
                  <Help/> <label>3C 정보</label>
                </div>
              </div>
            </div>
        </div>
        <div className={styles.hamMenuFlex3}>
          <div className={styles.profileContainer}>
            <div className={styles.profileImg}/>
            <div>
              <label className={styles.profileTitle}>김찬민</label><br/>
              <label className={styles.profileSubTitle}>소프트웨어개발과 2학년 2반 4번</label>
            </div>
            <See_more/>
          </div>
        </div>
      </div>
    );
};

export default Hamburger;
