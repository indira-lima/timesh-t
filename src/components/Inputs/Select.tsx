/* eslint-disable react/jsx-props-no-spreading */
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { useField } from 'formik';

interface SelectInputProps {
  values: { label: string; value: string | number }[];
  label: string;
  name: string;
  id: string;
}

const SelectInput = (props: SelectInputProps) => {
  const { values, label, name } = props;
  const [field, meta] = useField(props);

  return (
    <div className="form-control-container">
      <FormControl fullWidth>
        <InputLabel id={`select-${name}-label`} color="info">
          {label}
        </InputLabel>
        <Select
          variant="filled"
          size="small"
          labelId={`select-${name}-label`}
          error={!!(meta.touched && meta.error)}
          {...field}
          {...props}
          color="info"
        >
          {values.map((v) => (
            <MenuItem value={v.value}>{v.label}</MenuItem>
          ))}
        </Select>
        {meta.touched && meta.error && (
          <FormHelperText>{meta.error}</FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

export default SelectInput;
