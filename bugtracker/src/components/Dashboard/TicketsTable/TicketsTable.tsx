import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TicketRow from './TicketRow';

import { AppState } from '../../../Redux';
import { Tickets, TicketState } from '../../../Redux/models/ticket_models';


interface IProps {
    tickets: TicketState;
}

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const TicketsTable = (props: IProps) => {
    const classes = useStyles();
    const { tickets } = props;

    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="tickets">
                <TableHead>
                    <TableRow>
                        <TableCell>Name:</TableCell>
                        <TableCell>Description: </TableCell>
                        {/* <TableCell>Status: </TableCell> */}
                        <TableCell>Created On: </TableCell>
                        {/* <TableCell>Last Updated: </TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    { tickets.tickets.map((ticket: Tickets, index: number) => {
                        return <TicketRow ticket={ticket} key={index} />
                    })}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

const mstp = (state: AppState) => {
    console.log("STATE: ", state)
    return {
        tickets: state.tickets
    }
}

export default connect(mstp)(TicketsTable);