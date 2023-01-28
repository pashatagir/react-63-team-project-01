import { IconContext } from 'react-icons';

import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

import PropTypes from 'prop-types';

export const StatisticItem = ({ elem: { title, total }, icon }) => {
  return (
    <StatisticBox>
      <IconContext.Provider value={{ size: 40, color: 'green' }}>
        {icon}
      </IconContext.Provider>

      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  elem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  icon: PropTypes.object,
};
