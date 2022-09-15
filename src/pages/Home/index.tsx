import { useState } from 'react';
import { DateTime } from 'luxon';
import Grid from '@mui/material/Unstable_Grid2';

import TasksTable, { TaskRow } from 'components/TasksTable';
import NewTaskForm from 'components/NewTaskForm';
import CurrentDate from 'components/CurrentDate';

import config from 'config';
import './styles.scss';
import { Paper } from '@mui/material';

const tasksMock = [
  {
    client: 'John Doe',
    project: 'Be a being',
    tag: 'Existence',
    description: 'Just a task',
    beginning: DateTime.local(2022, 9, 14, 22, 30, config.luxon),
    end: DateTime.local(2022, 9, 14, 23, 0, config.luxon),
  },
  {
    client: 'Loren Ipsum',
    project: 'Be a being',
    tag: 'Existence',
    description: 'Just a task',
    beginning: DateTime.local(2022, 9, 13, 12, 20, config.luxon),
    end: DateTime.local(2022, 9, 13, 15, 50, config.luxon),
  },
] as TaskRow[];

const Home = () => {
  const [tasks, setTasks] = useState(tasksMock);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      flexWrap="nowrap"
      className="main-container"
    >
      <Paper className="main-section">
        <Grid xs={12}>
          <CurrentDate />
        </Grid>
        <Grid xs={12}>
          <NewTaskForm />
        </Grid>
        <Grid xs={12}>
          <TasksTable rows={tasks} />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Home;
