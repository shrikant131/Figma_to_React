import React from 'react';
import styled from '@emotion/styled';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
`;

const ChartCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 20px;
  color: #333333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .chart-container {
    height: 300px;
  }
`;

const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const salesData = [
  { category: 'Electronics', sales: 4000 },
  { category: 'Fashion', sales: 3000 },
  { category: 'Home', sales: 2800 },
  { category: 'Beauty', sales: 2000 },
  { category: 'Sports', sales: 1800 },
];

const DashboardCharts = () => {
  return (
    <ChartsContainer>
      <ChartCard>
        <div className="title">Revenue Overview</div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4318FF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4318FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip 
                contentStyle={{ background: '#FFFFFF', border: '1px solid #E5E7EB' }}
                labelStyle={{ color: '#333333' }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#4318FF"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      <ChartCard>
        <div className="title">Sales by Category</div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="category" stroke="#D2D2D2" />
              <YAxis stroke="#D2D2D2" />
              <Tooltip
                contentStyle={{ background: '#2B2B3F', border: 'none' }}
                labelStyle={{ color: '#D2D2D2' }}
              />
              <Bar dataKey="sales" fill="#01B574" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </ChartsContainer>
  );
};

export default DashboardCharts;
