import React, { useState } from 'react';
import Header from './components/Header';
import Migration from './components/Migration';
import MigrationStatus from './components/MigrationStatus';
import Footer from './components/Footer';
import { CssBaseline, Container } from '@mui/material';
import './App.css';

function App() {
    const [progress, setProgress] = useState(0);

    return (
        <>
            <CssBaseline />
            <Header />
            <Container>
                <Migration />
                <MigrationStatus progress={progress} />
            </Container>
            <Footer />
        </>
    );
}

export default App;
