import React,{useState,useEffect} from 'react';
import styles from './scoreBySubject.module.css'
import { BarChart,Cell, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  {
      name: '자격증 취득',
      '최대 점수': 60,
      '3학년': 60,
      '2학년': 10,
      '1학년': 0
    },
    {
      name: '프로젝트',
      '최대 점수': 250,
      '3학년': 250,
      '2학년': 100,
      '1학년': 25
    },
    {
      name: '포트폴리오',
      '최대 점수': 120,
      '3학년': 120,
      '2학년': 60,
      '1학년': 20
    },
    {
      name: '대회도전',
      '최대 점수': 70,
      '3학년': 70,
      '2학년': 70,
      '1학년': 60
    },
    {
      name: '교내프로그램',
      '최대 점수': 70,
      '3학년': 70,
      '2학년': 60,
      '1학년': 30
    },
    {
      name: '봉사활동',
      '최대 점수': 100,
      '3학년': 100,
      '2학년': 0,
      '1학년': 0
    },
    {
      name: '독서활동',
      '최대 점수': 80,
      '3학년': 80,
      '2학년': 5,
      '1학년': 0
    },
    {
      name: '상벌점제',
      '최대 점수': 60,
      '3학년': 60,
      '2학년': 12,
      '1학년': 10
    },
    {
      name: '동아리 활동',
      '최대 점수': 60,
      '3학년': 60,
      '2학년': 60,
      '1학년': 30
      
    },
  ];
  
  
  const ScoreBySubject: React.FC = () => {
    const [one, setOne] = useState<boolean>(false);
    const [two, setTwo] = useState<boolean>(false);
    const [three, setThree] = useState<boolean>(false);

    useEffect(()=>{
      const myGrade:number = 2;
      if(myGrade === 1){
        setOne(true)
      }else if(myGrade === 2){
        setTwo(true)
      }else if(myGrade === 3){
        setThree(true)  
      }
    },[])
    
    return (
      <div className={styles.container}>
      <div className={styles.showGrade}>
        <div className={styles.btnStyle}>
          <button 
          className={one ? styles.one : styles.oneNone}
          onClick={()=>{setOne(!one)}}>
            <label className={styles.gradeNum}>1</label>
          </button>
          <button 
          className={two ? styles.two : styles.twoNone}
          onClick={()=>{setTwo(!two)}}>
            <label className={styles.gradeNum}>2</label>
          </button>
          <button 
          className={three ? styles.three : styles.threeNone}
          onClick={()=>{setThree(!three)}}>
            <label className={styles.gradeNum}>3</label>
          </button>
        </div>
      </div>

      <div className={one ? '':styles.myGrade}>
        <BarChart
        className={styles.grade1}
        width={700}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 5
        }}>
          <XAxis dataKey="name" fontSize={12} />
          <YAxis dataKey="최대 점수" />
          <Tooltip isAnimationActive={false}/>
          <Bar dataKey="1학년" stackId="a" fill="#94C7D9" />
          {
            three ?
            <Bar dataKey="3학년" stackId="a" fill="none" />
            :
            ''
          }
          {
            two ?
            <Bar dataKey="2학년" stackId="a" fill="none" />
            :
            ''
          }
        </BarChart>
      </div>
      
      <div className={two ? '':styles.myGrade}>
        <BarChart
        className={styles.grade2}
        width={700}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 5
        }}>
          <XAxis dataKey="name" fontSize={12} />
          <YAxis dataKey="최대 점수" />
          <Tooltip isAnimationActive={false}/>
          <Bar dataKey="2학년" stackId="a" fill="#5CBCDD" />
          {
            three ?
            <Bar dataKey="3학년" stackId="a" fill="none" />
            :
            ''
          }
        </BarChart>
      </div>

      <div className={three ? '':styles.myGrade}>
        <BarChart
        className={styles.grade3}
        width={700}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 5
        }}>
          <XAxis dataKey="name" fontSize={12} />
          <YAxis dataKey="최대 점수" />
          <Tooltip isAnimationActive={false}/>
          <Bar dataKey="3학년" stackId="a" fill="#1FACDD" />
        </BarChart>
      </div>

      <BarChart
    className={styles.max}
      width={700}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 10,
        left: 10,
        bottom: 5
      }}
    >
      <XAxis dataKey="name" fontSize={12} />
      <YAxis dataKey="최대 점수" />
      
    </BarChart>

    </div>

  );
}

export default ScoreBySubject;