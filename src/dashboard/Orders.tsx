import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  id: number,
  date: string,
  time: string,
  quantity: number,
) {
  return { id, date, time, quantity };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    '12:00 PM',
    12.5,
  ),
  createData(
    1,
    '16 Mar, 2019',
    '12:00 PM',
    12.5,
  ),
  createData(2, 
    '16 Mar, 2019', 
    '12:00 PM', 
    12.5,
    ),
  createData(
    3,
    '16 Mar, 2019',
    '12:00 PM',
    12.5,
  ),
  createData(
    4,
    '15 Mar, 2019',
    '12:00 PM',
    12.5,
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Drinks</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Liters</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Drinks
      </Link>
    </React.Fragment>
  );
}