"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Container from "../Container";
import BenefitSection from "../BenefitSection";
import AppointmentForm from "../AppointmentForm";

export default function BenefitsAndAppointment() {
  return (
    <Container sx={{ pb: 15 }} className="max-sm:pb-[50px]">
      <Stack
        className="relative flex-col md:flex-row gap-[80px] mt-[180px] sm:mt-[-50px] lg:mt-[10px] md:mt-[-18px] mb-[60px] height-[100%] sm:w-full"
        justifyContent="space-between"
        alignItems="center"
      >
        <BenefitSection />

        <Box className="md:order-2 order-1 mt-[-226px] lg:mt-[-105px] max-w-[400px] h-auto">
          <AppointmentForm />
        </Box>
      </Stack>
    </Container>
  );
}
