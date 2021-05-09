import Charts from 'react-apexcharts';
const DonutsChart = () => {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    return (<Charts 
        series = {mockData.series}
        options= {{...options, labels: mockData.labels}}
        type="donut"
        height="240"
    />);
}

export default DonutsChart;