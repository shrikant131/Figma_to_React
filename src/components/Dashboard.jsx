import React from 'react';
import styled from '@emotion/styled';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const DashboardContainer = styled.div`
  width: 1200px;
  height: 900px;
  background: #30313A;
  position: relative;
`;

const DashboardWrapper = styled.div`
  width: 961px;
  height: 815px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #171821;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.20);
  position: absolute;
  left: 173px;
  top: 43px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <Sidebar />
        <MainContent />
      </DashboardWrapper>
      <div style={{
        color: 'rgba(255, 255, 255, 0.80)',
        fontFamily: 'Roboto',
        fontSize: '15px',
        position: 'absolute',
        left: '1003px',
        top: '14px'
      }}>
        www.nickelfox.com
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
