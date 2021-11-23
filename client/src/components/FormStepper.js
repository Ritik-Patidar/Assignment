import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Form1 from './Form1'
import Form2 from './Form2';


const steps = ['Details of TPA', 'Patient Detail', '',''];

const getStepContent = (step) => {
    switch (step) {
        case 0:
        return <Form1 /> ;
        case 1:
        return <Form2 /> ;
        default:
        return "";
    }
}

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const handleNext = () => {
        let newSkipped = skipped;
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}> 
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    
                    return (
                        <Step  key={label} {...stepProps}>
                            <StepLabel  {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>


            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box  sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button variant="contained" endIcon={<ChevronRightIcon />} style={{background:"white",color:"black"}} onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
