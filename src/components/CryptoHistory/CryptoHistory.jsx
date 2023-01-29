import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ data }) => {
  return (<BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

    <tbody>
      {data.map(({ id, price, amount, date }) => {
        const newDate = format(new Date(date), "Pp");
          return  <Tr key={id}>
        <Td>{id}</Td>
        <Td>{ price}</Td>
        <Td>{amount}</Td>
        <Td>{newDate}</Td>
    </Tr>
       })}
  </tbody>
</BaseTable>)
};

CryptoHistory.propTypes = {
    data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      price: PropTypes.number,
      amount: PropTypes.number,
      date: PropTypes.string,
    }),
  )
};
