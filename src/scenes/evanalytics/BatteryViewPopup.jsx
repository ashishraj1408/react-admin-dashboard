import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const data = [
    { name: 'Label 1', value: 12, percentage: '28.6%' },
    { name: 'Label 2', value: 22, percentage: '42.9%' },
    { name: 'Label 3', value: 12, percentage: '28.6%' },
    { name: 'Label 4', value: 12, percentage: '28.6%' },
    { name: 'Label 5', value: 7, percentage: '14.3%' },
    { name: 'Label 6', value: 7, percentage: '14.3%' },
];

const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042', '#FF6384', '#FFCE56'];

const BatterViewPopup = () => {
    const totalValue = data.reduce((acc, item) => acc + item.value, 0);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end',padding:'15px' }}>
                <ShareIcon style={{ cursor: 'pointer', marginRight: '15px' }} />
                <MoreHorizIcon style={{ cursor: 'pointer' }} />
            </div>
            <div style={{ display: 'flex', padding: '20px' }}>
                {/* Pie Chart */}

                <div style={{ width: '45%', }}>
                    <PieChart width={250} height={250}>
                        <Pie
                            data={data}
                            cx={120}
                            cy={120}
                            innerRadius={70}
                            outerRadius={120}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                    <div style={{ textAlign: 'center', fontSize: '24px', margin: '0px 85px 0px 0px', padding: '0px' }}>
                        Battery Charge <br />
                        {totalValue}
                    </div>
                </div>

                {/* Table */}
                <div style={{ width: '50%', fontFamily: 'Inter', margin: '0px', padding: '30px 0px' }}>
                    <table style={{ width: '100%', fontFamily: 'Inter', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #ddd', fontFamily: 'Inter', textAlign: 'left' }}>
                                <th style={{ fontFamily: 'Inter' }}>Label</th>
                                <th style={{ fontFamily: 'Inter' }}>Value</th>
                                <th >%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((entry, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td>
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                width: '10px',
                                                height: '10px',
                                                backgroundColor: COLORS[index % COLORS.length],
                                                marginRight: '5px',
                                                borderRadius: '20px'
                                            }}
                                        ></span>
                                        {entry.name}
                                    </td>
                                    <td>{entry.value}</td>
                                    <td style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '14px', color: '#0A0A0A' }}>{entry.percentage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    );
};

export default BatterViewPopup;



