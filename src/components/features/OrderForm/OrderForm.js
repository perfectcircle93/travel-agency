import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const formValidation = (options, tripCost, name, id, countryCode) => {
  const { yourName, contactInfo } = options;
  if (yourName == '' && contactInfo == '') {
    window.alert('Fulfill Your name and contact info field');
  } else if ( yourName == '') {
    window.alert('Fulfill Your name field');
  } else if ( contactInfo == '') {
    window.alert('Fullfill the contact info field');
  } else {
    sendOrder (options, tripCost, name, id, countryCode);
  }
};


const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};


class OrderForm extends React.Component {
  render () {
    const {tripCost, options, setOrderOption, name, id, countryCode} = this.props;
    return (
      <Row>
        {pricing.map(option => (
          <Col md={12} key={option.id}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
        <Col xs={12}>
          <Button onClick={() => formValidation(options, tripCost, name, id, countryCode)}>Order now!</Button>
        </Col>
      </Row>
    );
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  name: PropTypes.string, 
  id: PropTypes.string, 
  countryCode: PropTypes.string, 
};

export default OrderForm;