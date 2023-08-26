import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    "name": "1",
    "순위": 20,
  },
  {
    "name": "2",
    "순위": 10,
  },
  {
    "name": "3",
    "순위": null,
  },
];

const RankChangeByGrade: React.FC = () => {
  return (
    <AreaChart width={300} height={300} data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#5CBCDD" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#5CBCDD" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis reversed={true} min={1} fontSize={'10px'}/>
      <Tooltip />
      <Area type="monotone" dataKey="순위" stroke="#5CBCDD" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
  );
}

export default RankChangeByGrade;
