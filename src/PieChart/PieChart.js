import React from 'react';
import Chart from 'chart.js';
import axios from 'axios';

function PieChart() {

    const dataSource = {
        datasets: [
            {
                data: [],
                backgroundColor: [
                    '#ff6384',
                    '#ffcd56',
                    '#36a2eb',
                    '#fd6b19',
                    '#cc65fe',
                    '#33ff00',
                    '#dfaa00',
                    '#7aedff'
                ]
            }
        ],
        labels: []
    };

    function createChart() {
        var ctx = document.getElementById("myChart").getContext("2d");
        new Chart(ctx, {
            type: 'pie',
            data: dataSource
        });
    }

    function getBudget() {
        axios.get('http://localhost:4000/budget')
        .then(function (res) {
            console.log(res.data);
            for (var i = 0; i < res.data.myBudget.length; i++) {
                dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
                dataSource.labels[i] = res.data.myBudget[i].title;
            }
            createChart();
        });
    }
    getBudget();

    return (
        <></>
    );
}

export default PieChart;