import React from 'react';
import styled from 'styled-components';
import Select from '../../components/Styled/Select';
import { Field } from 'formik';
import { Row } from '../../components/Styled/Row';

const Label = styled.label`
  display: block;
  margin-bottom: .5em;
`;

const SelectField = styled(Field)`
  height: 36px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #fff;
  border: 1px solid #D1D1D1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
`;

const pickupTimes = [{
  day: '28-11-2018',
  times: ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
}, {
  day: '30-11-2018',
  times: ['20:00', '20:30', '21:00', '21:30', '22:00'],
}, {
  day: '01-12-2018',
  times: ['19:00', '19:30', '20:30', '21:00'],
}];

const PickupTimes = () => (
  <Row justifyContent="flex-start">
    <div>
      <Label htmlFor="date">Date</Label>
      <SelectField id="date" name="date" component="select">
        {pickupTimes.map(date => <option key={date.day} value={date.day}>{date.day}</option>)}
      </SelectField>&nbsp;
    </div>

    <div>
      <Label htmlFor="time">Time</Label>
      <SelectField id="time" name="time" component="select">
        {pickupTimes[0].times.map(time => <option key={time} value={time}>{time}</option>)}
      </SelectField>
    </div>
  </Row>
);

export default PickupTimes;
