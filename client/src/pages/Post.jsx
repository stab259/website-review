import React from 'react'
import { Chart } from "react-google-charts";




function Post() {

  
  const data = [
    ["Text", "Count"],
    ["post", 10],
    ["user", 5],
    ["confirmed user", 2],
    ["admin", 1],
    ["approved post", 3],
    ["unapproved post", 6]
  ];
  return (
    <div><Chart
    chartType="ColumnChart"
    data={data}
    width="80%"
    height="400px"
    legendToggle
  /></div>
  )
}

export default Post