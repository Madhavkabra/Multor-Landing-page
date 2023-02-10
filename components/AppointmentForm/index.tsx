"use client";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { appointmentOptions } from "./mocks";

const initialAppointmentState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  appointmentType: "",
};

export default function AppointmentForm() {
  const [formData, setFormData] = useState(initialAppointmentState);

  const handleFormSubmit = () => {
    const formattedData = `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Phone Number: ${formData.phoneNumber}
      Appointment Type: ${formData.appointmentType}`;

    alert(formattedData);

    setFormData(initialAppointmentState);
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Stack className="bg-teal-950 px-[14px] sm:p-[40px] gap-11 py-[35px]">
      <Stack gap={4} textAlign="center" className="items-center flex-wrap">
        <Typography
          fontSize="2.22em"
          fontWeight="600"
          className="md:text-[2em] leading-[1em] text-[white] font-work-sans"
        >
          Schedule an Appointment
        </Typography>
        <Typography
          fontSize="1.3em"
          className="md:text-[1em] font-normal text-[white] font-muli"
        >
          Here, let visitors know what will happen when they complete your form.
        </Typography>
      </Stack>

      <Stack gap={2}>
        <TextField
          hiddenLabel
          placeholder="First Name*"
          value={formData.firstName}
          className="bg-[white] rounded-lg"
          onChange={handleInputChange}
          name="firstName"
        />
        <TextField
          hiddenLabel
          placeholder="Last Name*"
          value={formData.lastName}
          className="bg-[white] rounded-lg"
          onChange={handleInputChange}
          name="lastName"
        />
        <TextField
          hiddenLabel
          placeholder="Email*"
          value={formData.email}
          className="bg-[white] rounded-lg"
          onChange={handleInputChange}
          name="email"
        />
        <TextField
          hiddenLabel
          value={formData.phoneNumber}
          placeholder="Phone Number*"
          className="bg-[white] rounded-lg"
          onChange={handleInputChange}
          name="phoneNumber"
        />

        <TextField
          id="select-appointment"
          select
          placeholder="Type of Appointment"
          className="bg-[white] rounded-lg"
          value={formData.appointmentType}
          onChange={handleInputChange}
          defaultValue={"type"}
          name="appointmentType"
        >
          {appointmentOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          className="uppercase bg-[rgba(0,194,197,1)] p-[15px]"
          variant="contained"
          size="large"
          onClick={handleFormSubmit}
        >
          <Typography
            fontSize="1.125rem"
            fontWeight="600"
            className="color-[white] font-work-sans"
          >
            Schedule Now
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
}
