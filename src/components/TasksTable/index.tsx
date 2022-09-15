import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { DateTime } from 'luxon';

import './styles.scss';

export interface TaskRow {
  client: string;
  project: string;
  tag: string;
  description: string;
  beginning: DateTime;
  end: DateTime;
}

interface TasksTableProps {
  rows: TaskRow[];
}

const TasksTable = ({ rows }: TasksTableProps) => {
  // const theme = useTheme();

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Cliente</TableCell>
              <TableCell align="center">Projeto</TableCell>
              <TableCell align="center">Tag</TableCell>
              <TableCell align="center">Descrição</TableCell>
              <TableCell align="center">Início</TableCell>
              <TableCell align="center">Fim</TableCell>
              <TableCell align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.client}
                </TableCell>
                <TableCell align="right">{row.project}</TableCell>
                <TableCell align="right">{row.tag}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">
                  {row.beginning.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
                </TableCell>
                <TableCell align="right">
                  {row.end.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
                </TableCell>
                <TableCell align="right">
                  {row.end
                    .diff(row.beginning)
                    .toISOTime({ suppressMilliseconds: true })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TasksTable;
