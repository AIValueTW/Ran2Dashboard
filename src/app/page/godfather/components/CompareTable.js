import * as React from "react";
import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TitleTypography } from "../../../Charts/Mui/TitleTypography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export function CompareTable({ data, titleColors }) {
  return (
    <>
      <TitleTypography title={"金額vs手續費"} titleColors={titleColors} />
      <TableContainer sx={{ height: "264px" }}>
        <Table stickyHeader size="small" aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "#50005c", color: "#fff" }}>
                cname
              </TableCell>
              <TableCell
                align="center"
                sx={{ backgroundColor: "#50005c", color: "#fff" }}
              >
                price
              </TableCell>
              <TableCell
                align="center"
                sx={{ backgroundColor: "#50005c", color: "#fff" }}
              >
                payfee
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.data}</StyledTableCell>
                <StyledTableCell align="center">{row.data1}</StyledTableCell>
              </StyledTableRow >
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
}
