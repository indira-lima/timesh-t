import React from 'react';

import { Paper } from '@mui/material';

import './styles.scss';

interface Props {
  children: React.ReactNode;
}

const DefaultTable: React.FC<Props> = ({ children }) => {
  return <Paper className="default-table">{children}</Paper>;
};

export default DefaultTable;
