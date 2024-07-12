import React from 'react';
import {Button, Container} from '@mui/material';

const Migration = () => {
    const migrateData = async ()=> {
        const response = await fetch('/api/migrate', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        alert(data.message);
    };
    return(
        <Container style ={{marginTop: '20px', textAlign: 'centre'}}>
            <Button variant="contained" color ="primary" onClick={migrateData}>
                Migrate Data
            </Button>
        </Container>
    );
};

export default Migration;