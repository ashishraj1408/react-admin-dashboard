import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighchartsColumn = () => {
    useEffect(() => {
        Highcharts.chart('container', {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Most Used Vehicle',
                style: {
                    fontWeight: '500',
                    fontSize: '20px',
                    fontFamily: 'inter',
                    textAlign: 'start', // Align the title to the start
                },
            },
            xAxis: {
                categories: ['Veh .1', 'Veh .2', 'Veh .3', 'Veh .4'],
                title: {
                    text: null,
                },
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Distance Travelled',
                },
            },
            plotOptions: {
                column: {
                    borderRadius: 5, // Apply border radius to the bars
                }
            },
            series: [
                {
                    name: 'Vehicle1',
                    data: [3430, 2942, 663, 884],
                    showInLegend: false, // Hide the series name from the legend
                    color: '#1814F3', // Set color for the first bar (left bar)
                },
                {
                    name: 'Vehicle2',
                    data: [2690, 1453, 216, 2376],
                    showInLegend: false, // Hide the series name from the legend
                    color: '#16DBCC', // Set color for the second bar (right bar)
                },
            ],
            credits: {
                enabled: false,
            },
        });
    }, []);

    return (
        <div>
            <figure className="highcharts-figure">
                <div id="container" style={{ height: '220px' }}></div>
            </figure>
        </div>
    );
};

export default HighchartsColumn;


// import React, { useEffect, useState } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import axios from 'axios';

// const HighchartsColumn = () => {
//     const [chartOptions, setChartOptions] = useState({});

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Simulating an API call with axios
//                 const response = await axios.get('http://localhost:5000/mock-api'); // Replace with your actual API endpoint
//                 const { categories, data } = response.data;

//                 setChartOptions({
//                     chart: {
//                         type: 'column',
//                         height: '100%', // Chart height will adjust to container
//                     },
//                     title: {
//                         text: 'Most Used Vehicle',
//                         style: {
//                             fontWeight: '500',
//                             fontSize: '20px',
//                             fontFamily: 'inter',
//                             textAlign: 'start',
//                         },
//                     },
//                     xAxis: {
//                         categories: categories,
//                         title: {
//                             text: null,
//                         },
//                     },
//                     yAxis: {
//                         allowDecimals: false,
//                         title: {
//                             text: 'Distance Travelled',
//                         },
//                     },
//                     plotOptions: {
//                         column: {
//                             borderRadius: 5,
//                         },
//                     },
//                     series: [
//                         {
//                             name: 'Vehicle 1',
//                             data: data[0],
//                             showInLegend: false,
//                             color: '#1814F3',
//                         },
//                         {
//                             name: 'Vehicle 2',
//                             data: data[1],
//                             showInLegend: false,
//                             color: '#16DBCC',
//                         },
//                     ],
//                     credits: {
//                         enabled: false,
//                     },
//                 });
//             } catch (error) {
//                 console.error('Error fetching data:', error);

//                 // Use mock data in case of an error
//                 setChartOptions({
//                     chart: {
//                         type: 'column',
//                         height: '100%', // Chart height will adjust to container
//                     },
//                     title: {
//                         text: 'Most Used Vehicle',
//                         style: {
//                             fontWeight: '500',
//                             fontSize: '20px',
//                             fontFamily: 'inter',
//                             textAlign: 'start',
//                         },
//                     },
//                     xAxis: {
//                         categories: ["Veh .1", "Veh .2", "Veh .3", "Veh .4"],
//                         title: {
//                             text: null,
//                         },
//                     },
//                     yAxis: {
//                         allowDecimals: false,
//                         title: {
//                             text: 'Distance Travelled',
//                         },
//                     },
//                     plotOptions: {
//                         column: {
//                             borderRadius: 5,
//                         },
//                     },
//                     series: [
//                         {
//                             name: 'Vehicle 1',
//                             data: [3430, 2942, 663, 884],
//                             showInLegend: false,
//                             color: '#1814F3',
//                         },
//                         {
//                             name: 'Vehicle 2',
//                             data: [2690, 1453, 216, 2376],
//                             showInLegend: false,
//                             color: '#16DBCC',
//                         },
//                     ],
//                     credits: {
//                         enabled: false,
//                     },
//                 });
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <figure className="highcharts-figure" style={{ height: '200px' }}> {/* Adjust height here */}
//                 <div id="container" style={{ height: '100%' }}>
//                     <HighchartsReact
//                         highcharts={Highcharts}
//                         options={chartOptions}
//                     />
//                 </div>
//             </figure>
//         </div>
//     );
// };

// export default HighchartsColumn;
