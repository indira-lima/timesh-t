/* eslint-disable react/jsx-props-no-spreading */
import type { InputProps } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

import './styles.scss';

interface TextFieldInputProps {
  label: string;
  placeholder?: string;
  name: string;
  id: string;
  InputProps?: Partial<InputProps>;
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
}

const TextFieldInput = (props: TextFieldInputProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-control-container">
      <TextField
        {...field}
        {...props}
        fullWidth
        size="small"
        defaultValue={meta.initialValue}
        error={!!(meta.touched && meta.error)}
        helperText={meta.error}
        variant="standard"
        className="custom-form-control"
      />
    </div>
  );
};

TextFieldInput.defaultProps = {
  placeholder: '',
  InputProps: undefined,
  color: undefined,
};

export default TextFieldInput;
