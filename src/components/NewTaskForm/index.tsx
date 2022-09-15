import { useCallback } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { SendSharp } from '@mui/icons-material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import TextFieldInput from 'components/Inputs/TextField';
import SelectInput from 'components/Inputs/Select';

import useSavedData from 'hooks/useSavedData';

import './styles.scss';

const ValidationSchema = Yup.object({
  client: Yup.string(),
  project: Yup.string(),
  tag: Yup.string().required('Campo obrigatório'),
  description: Yup.string().required('Campo obrigatório'),
});
export interface NewTaskValues {
  client: string;
  project: string;
  tag: string;
  description: string;
}

const NewTaskForm = () => {
  const { clients, projects, tags } = useSavedData();

  const handleOnSubmit = useCallback((values: NewTaskValues) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
  }, []);

  return (
    <Formik
      validationSchema={ValidationSchema}
      onSubmit={handleOnSubmit}
      initialValues={{
        client: '',
        project: '',
        tag: '',
        description: '',
      }}
    >
      {({ submitForm, isValid }) => {
        return (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <form
            onSubmit={submitForm}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && isValid) {
                submitForm();
              }
            }}
          >
            <Container className="form-container">
              <Grid container justifyContent="center">
                <Grid xs={12} sm={4}>
                  <SelectInput
                    id="client"
                    name="client"
                    label="Cliente"
                    values={clients.map((c) => ({ value: c, label: c }))}
                  />
                </Grid>
                <Grid xs={12} sm={4}>
                  <SelectInput
                    id="project"
                    name="project"
                    label="Projeto"
                    values={projects.map((p) => ({ value: p, label: p }))}
                  />
                </Grid>
                <Grid xs={12} sm={4}>
                  <SelectInput
                    id="tag"
                    name="tag"
                    label="Tag"
                    values={tags.map((t) => ({ value: t, label: t }))}
                  />
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
                            color="info"
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
          </form>
        );
      }}
    </Formik>
  );
};

export default NewTaskForm;
