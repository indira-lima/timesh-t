import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import { DateTime } from 'luxon';

import './styles.scss';
import DefaultTable from 'components/DefaultTable';

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
  return (
    <Container id="tasks-table">
      <TableContainer component={DefaultTable}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell>Cliente</TableCell>
              <TableCell>Projeto</TableCell>
              <TableCell>Tag</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Início</TableCell>
              <TableCell>Fim</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.client}</TableCell>
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.tag}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  {row.beginning.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
                </TableCell>
                <TableCell>
                  {row.end.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
                </TableCell>
                <TableCell>
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
