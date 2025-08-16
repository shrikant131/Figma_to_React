import React from 'react';
import styled from '@emotion/styled';
import { FiTrendingUp, FiUsers, FiShoppingBag, FiDollarSign } from 'react-icons/fi';

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 24px 0;
`;

const StatCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 20px;
  color: #333333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    .icon {
      background: ${props => props.iconBg};
      padding: 8px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .value {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .label {
    color: #666666;
    font-size: 14px;
  }

  .trend {
    color: ${props => props.trendColor};
    font-size: 12px;
    margin-top: 8px;
  }
`;

const stats = [
  {
    icon: <FiDollarSign />,
    label: 'Total Revenue',
    value: '$54,239',
    trend: '+18.3%',
    iconBg: '#4318FF33',
    trendColor: '#01B574',
  },
  {
    icon: <FiUsers />,
    label: 'Total Customers',
    value: '2,836',
    trend: '+12.5%',
    iconBg: '#01B57433',
    trendColor: '#01B574',
  },
  {
    icon: <FiShoppingBag />,
    label: 'Total Orders',
    value: '1,463',
    trend: '+8.2%',
    iconBg: '#FFB54733',
    trendColor: '#01B574',
  },
  {
    icon: <FiTrendingUp />,
    label: 'Growth Rate',
    value: '15.3%',
    trend: '+2.1%',
    iconBg: '#FF454733',
    trendColor: '#01B574',
  },
];

const StatsCards = () => {
  return (
    <StatsContainer>
      {stats.map((stat, index) => (
        <StatCard key={index} iconBg={stat.iconBg} trendColor={stat.trendColor}>
          <div className="header">
            <div className="icon">{stat.icon}</div>
          </div>
          <div className="value">{stat.value}</div>
          <div className="label">{stat.label}</div>
          <div className="trend">{stat.trend}</div>
        </StatCard>
      ))}
    </StatsContainer>
  );
};

export default StatsCards;
