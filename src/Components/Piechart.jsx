import React, { useEffect, useState } from 'react'
import {Pie} from 'react-chartjs-2'
import { Chart as ChartJS,ArcElement,Tooltip,Legend } from 'chart.js'
import api from '../api/axios'
ChartJS.register(ArcElement,Tooltip,Legend)

function Piechart() {
    const[piechart,setPiechart] = useState([])
    useEffect(()=>{
        async function getPieData(params) {

            const datas= await api.get('/admin/productspercategory')
            console.log(datas.data.data);
            setPiechart(datas.data.data)
            
        }
        getPieData()
    },[])
 
    const chartData = {
        labels:piechart.map((ele)=>ele.name),
        datasets:[
            {
                data:piechart.map((ele)=>ele.total),
                 backgroundColor:["red","blue","green","yellow","violet","purple"]
            }
        ]
    }
  return (
    <div>
        <Pie data  = {chartData}/>
    </div>
  )
}

export default Piechart