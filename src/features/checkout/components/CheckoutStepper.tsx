"use client";

import { checkoutSteps } from "@/features/checkout/constants/checkoutSteps";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

export default function CheckoutStepper({
  activeStep,
}: {
  activeStep: number;
}) {
  return (
    <Box sx={{ width: "100%", overflowX: "auto", py: 1 }}>
      <Stepper activeStep={activeStep}>
        {checkoutSteps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
