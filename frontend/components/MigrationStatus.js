import React from "react";
import {LinearProgress, Container,Typography} from '@mui/material';

const MigrationStatus = ({progress}) => {
    return(
        <Container style={{migrationTop: '20px', textAlign: 'center'}}>
            <Typography variant="body1">Migration Progress</Typography>
            <LinearProgress variant="determinate" value={progress} />
        </Container>
    );
};

export default MigrationStatus;