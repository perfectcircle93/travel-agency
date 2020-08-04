import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.scss';
//import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';


const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => (
  <div className={styles.number}>
    <input
      type='number'
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    ({formatPrice(price)})

  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
  price: PropTypes.string,

};

export default OrderOptionNumber;