import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Provider Details',
    'Bank Details',
    'contact Details',
    "eligibility form",
    "common question",
    "Specialist Form",
    "Specialist Details",
    "video audit",
    "other document",
    "base tarif",
    "Advance Tarif",
    "Medical practitioner details"
];

export default function StepperComp() {
    return (
        <Box sx={{ width: '100%' }} className="p-4 pb-0">
            <Stepper activeStep={11} alternativeLabel>
                {steps.map((label, i) => (
                    <Step key={label}>
                        <StepLabel>
                            <p className={"font-[600] text-md  " + (i === 10 ? "text-blue-700" : "text-blue-500  opacity-75")}>
                                {label}
                            </p>

                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}