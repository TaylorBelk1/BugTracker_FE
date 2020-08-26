import React from 'react';
import { useParams } from 'react-router-dom';

interface IProps {
    
}

interface RouteParams {
    id: string;
}

const TicketMain = () => {
    const params = useParams<RouteParams>();
    return (
        <div>
            <div>Ticket main</div>
            <h3>Ticket Number: {params.id}</h3>
        </div>
    )
}

export default TicketMain