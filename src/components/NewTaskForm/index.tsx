import { Formik } from 'formik';
import { useCallback } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { SendSharp } from '@mui/icons-material';

import TextFieldInput from 'components/Inputs/TextField';

import './styles.scss';

export interface NewTaskValues {
  client: string;
  project: string;
  tag: string;
  description: string;
}

const NewTaskForm = () => {
  const handleOnSubmit = useCallback((values: NewTaskValues) => {
    alert(JSON.stringify(values));
  }, []);

  return (
    <Formik
      onSubmit={handleOnSubmit}
      initialValues={{
        client: '',
        project: '',
        tag: '',
        description: '',
      }}
    >
      {({ submitForm }) => {
        return (
          <Container className="form-container">
            <Grid container justifyContent="center">
              <Grid xs={12} sm={4}>
                <TextFieldInput id="client" name="client" label="Cliente" />
              </Grid>
              <Grid xs={12} sm={4}>
                <TextFieldInput id="project" name="project" label="Projeto" />
              </Grid>
              <Grid xs={12} sm={4}>
                <TextFieldInput id="tag" name="tag" label="Tag" />
              </Grid>
              <Grid xs={12} sm={4}>
                <TextFieldInput
                  id="description"
                  name="description"
                  label="Descrição"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={submitForm}
                          title="Adicionar"
                          edge="end"
                          color="primary"
                        >
                          <SendSharp />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        );
      }}
    </Formik>
  );
};

export default NewTaskForm;
