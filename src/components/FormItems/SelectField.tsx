import React, { FormEvent } from 'react';
import Select from '../Styled/Select';

interface IProps {
  value: string | number;
  onChange: (event: FormEvent<HTMLSelectElement>) => void;
}

const SelectField: React.SFC<IProps> = ({ value, onChange }) => {
  return (
    <Select value={value} onChange={onChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </Select>
  );
};

export default SelectField;
