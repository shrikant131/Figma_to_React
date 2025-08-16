import React from 'react';
import styled from '@emotion/styled';
import { FiMoreVertical } from 'react-icons/fi';

const TableContainer = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .title {
    color: #333333;
    font-size: 18px;
    font-weight: 600;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #333333;

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #E5E7EB;
  }

  th {
    color: #666666;
    font-weight: 500;
    font-size: 14px;
  }

  td {
    font-size: 14px;
  }
`;

const StatusBadge = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  background: ${props => {
    switch (props.status) {
      case 'In Stock':
        return '#01B57433';
      case 'Low Stock':
        return '#FFB54733';
      case 'Out of Stock':
        return '#FF454733';
      default:
        return '#2B2B3F';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'In Stock':
        return '#01B574';
      case 'Low Stock':
        return '#FFB547';
      case 'Out of Stock':
        return '#FF4547';
      default:
        return '#fff';
    }
  }};
`;

const productsData = [
  {
    id: 1,
    name: 'Premium Headphones',
    category: 'Electronics',
    price: '$299.99',
    status: 'In Stock',
    sales: 123
  },
  {
    id: 2,
    name: 'Leather Jacket',
    category: 'Fashion',
    price: '$199.99',
    status: 'Low Stock',
    sales: 89
  },
  {
    id: 3,
    name: 'Smart Watch',
    category: 'Electronics',
    price: '$159.99',
    status: 'In Stock',
    sales: 234
  },
  {
    id: 4,
    name: 'Running Shoes',
    category: 'Sports',
    price: '$89.99',
    status: 'Out of Stock',
    sales: 56
  },
  {
    id: 5,
    name: 'Coffee Maker',
    category: 'Home',
    price: '$79.99',
    status: 'In Stock',
    sales: 167
  },
];

const ProductsTable = () => {
  return (
    <TableContainer>
      <TableHeader>
        <div className="title">Top Products</div>
        <FiMoreVertical style={{ color: '#D2D2D2', cursor: 'pointer' }} />
      </TableHeader>
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <StatusBadge status={product.status}>
                  {product.status}
                </StatusBadge>
              </td>
              <td>{product.sales}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
