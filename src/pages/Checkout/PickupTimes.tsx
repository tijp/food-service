import React from 'react';
import { Field } from 'formik';
import Calendar from 'rc-calendar';

import nl_NL from 'rc-calendar/lib/locale/nl_NL'
import 'rc-calendar/assets/index.css';

const PickupTimes = () => {
  return (
    <Calendar
      locale={nl_NL}
    />
  );
};

export default PickupTimes;
