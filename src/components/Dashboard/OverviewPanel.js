// src/components/Dashboard/OverviewPanel.js
import React from 'react';
import styled from 'styled-components';

const OverviewPanel = () => {
  return (
    <Panel>
      <h2>Overview</h2>
      <p>Active Users: 120</p>
      <p>New Sign-ups: 30</p>
    </Panel>
  );
};

export default OverviewPanel;

const Panel = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
`;
