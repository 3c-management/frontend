import React from 'react';
import { PieChart } from "react-minimal-pie-chart";
import styles from './PieCharts.module.css'
const PieCharts:React.FC = () => {
    const data ={
        value: 50,
        color: "white",
        name: "level",
      }
    return(
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
    )
}

export default PieCharts;