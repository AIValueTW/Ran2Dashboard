import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { TitleTypography } from '../../../Charts/Mui/TitleTypography';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function PayfeeTable({data,titleColors}) {
    let allData=0
    let allData1=0
    data.map((res)=>{
      allData+=res.data
      allData1+=res.data1
    })
    data=[...data,{name:"總計",data:allData,data1:allData1.toFixed(1)}]
  return (
    <>
     <TitleTypography title={"手續費抽成"} titleColors={titleColors}/>
       <TableContainer sx={{height:"201px"}}>
      <Table stickyHeader size="small" aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor:"#50005c",color:"#fff"}}>paykind</TableCell>
            <TableCell align="center" sx={{backgroundColor:"#50005c",color:"#fff"}}>payfee</TableCell>
            <TableCell align="center" sx={{backgroundColor:"#50005c",color:"#fff"}}>payfee(%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{backgroundColor:"#573b92",color:"#fff"}}>
                {row.name}
              </TableCell>
              <TableCell align="center" sx={{backgroundColor:data.indexOf(row)===0?"#e68f96":"#fff"}}>{row.data}</TableCell>
              <TableCell align="center"  sx={{backgroundColor:data.indexOf(row)===0?"#e68f96":"#fff"}}>{row.data1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>

  );
}
