import React from 'react';
import styled from '@emotion/styled';
import { RiHome5Line } from 'react-icons/ri';
import { FiUser, FiShoppingCart, FiPackage, FiMessageSquare, FiSettings, FiStar, FiClock, FiLogOut } from 'react-icons/fi';
import { IoStatsChart } from 'react-icons/io5';

const SidebarContainer = styled.div`
  width: 132px;
  background: #FFFFFF;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px 0;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.05);
`;

const SidebarWrapper = styled.div`
  width: 88px;
  height: 815px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #171821;
  backdrop-filter: blur(50px);
`;

const NavigationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 15px;
  color: ${props => props.active ? '#171821' : '#87888C'};
  background: ${props => props.active ? '#A9DFD8' : 'transparent'};
  border-radius: 6px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background: ${props => props.active ? '#A9DFD8' : '#21222D'};
  }

  svg {
    font-size: 14px;
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 20px;
  
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    
    &:nth-of-type(1) { background: #EA1701; }
    &:nth-of-type(2) { background: #FEB002; }
    &:nth-of-type(3) { background: #029F04; }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <DotsWrapper>
          <span></span>
          <span></span>
          <span></span>
        </DotsWrapper>
        
        <NavigationItem active>
          <RiHome5Line />
        </NavigationItem>
        
        <NavigationItem>
          <FiUser />
        </NavigationItem>
        
        <NavigationItem>
          <IoStatsChart />
        </NavigationItem>
        
        <NavigationItem>
          <FiShoppingCart />
        </NavigationItem>
        
        <NavigationItem>
          <FiPackage />
        </NavigationItem>
        
        <NavigationItem>
          <IoStatsChart />
        </NavigationItem>
        
        <NavigationItem>
          <FiMessageSquare />
        </NavigationItem>
        
        <NavigationItem>
          <FiSettings />
        </NavigationItem>
        
        <NavigationItem>
          <FiStar />
        </NavigationItem>
        
        <NavigationItem>
          <FiClock />
        </NavigationItem>
        
        <NavigationItem>
          <FiLogOut />
        </NavigationItem>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
