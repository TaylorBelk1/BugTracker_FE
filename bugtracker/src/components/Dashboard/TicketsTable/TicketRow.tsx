import React from 'react';
import { Tickets } from '../../../Redux/models/ticket_models';
import moment from 'moment';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface IProps {
    ticket: Tickets;
}

const TicketRow = (props: IProps) => {
    const { ticket } = props;
    const date = moment.unix(parseInt(ticket.created_at)).format('MM/DD/YYYY h:mm A');
    console.log(ticket.id)
    return (
       <TableRow key={ticket.name}>
           
            <TableCell component="th" scope="row"> 
                <Link to={`/tickets/${ticket.id}`}>
                    {ticket.name}
                </Link> 
            </TableCell>
            <TableCell> {ticket.description} </TableCell>
            <TableCell> {date} </TableCell>

           {/* <TableCell> {ticket.last_updated} </TableCell>
           <TableCell> {ticket.status} </TableCell> */}
           
       </TableRow>
    )
}

export default TicketRow