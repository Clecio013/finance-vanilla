import { transformToReal } from '../scripts/transformToReal';

const Td = ({ name, type, value }) => `
  <tr>
    <td>
      ${type === 'Compra' ? '+' : '-'}
      ${name}
    </td>

    <td>
      ${transformToReal(value)}
    </td>
  </tr>
`;

export default Td;
