import React from 'react';
import styled from '@emotion/styled';
import { FiSearch, FiBell } from 'react-icons/fi';
import StatsCards from './StatsCards';
import DashboardCharts from './DashboardCharts';
import ProductsTable from './ProductsTable';
import CustomerFulfillment from './CustomerFulfillment';

const MainContentContainer = styled.div`
  margin-left: 132px;
  padding: 20px;
  background: #F8F9FA;
  min-height: 100vh;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 24px;
`;

const MainSection = styled.div``;

const SideSection = styled.div``;

const SearchBar = styled.div`
  width: 504px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 6px;
  margin-top: 17px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  input {
    background: transparent;
    border: none;
    color: #666666;
    font-size: 12px;
    width: 100%;
    outline: none;

    &::placeholder {
      color: #999999;
    }
  }
`;

const HeaderActions = styled.div`
  position: absolute;
  right: 25px;
  top: 27px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NotificationBadge = styled.div`
  position: relative;
  
  span {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 6px;
    height: 6px;
    background: #FC003C;
    border-radius: 50%;
  }
`;

const Avatar = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background: #D9D9D9;
`;

const MainContent = () => {
  return (
    <MainContentContainer>
      <SearchBar>
        <FiSearch color="#ABABAB" />
        <input placeholder="Search here..." />
      </SearchBar>

      <HeaderActions>
        <NotificationBadge>
          <FiBell color="white" size={20} />
          <span></span>
        </NotificationBadge>
        <Avatar />
      </HeaderActions>

      <StatsCards />
      
      <ContentGrid>
        <MainSection>
          <DashboardCharts />
          <ProductsTable />
        </MainSection>
        <SideSection>
          <CustomerFulfillment />
        </SideSection>
      </ContentGrid>
    </MainContentContainer>
  );
};

export default MainContent;
