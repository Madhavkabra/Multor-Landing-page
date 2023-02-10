import Stack from "@mui/material/Stack";

import { benefits } from "./mocks";
import HorizontalImageWithDetail from "../HorizontalImageWithDetail";

export default function BenefitSection() {
  return (
    <Stack gap={8} className="md:order-1 order-2 md:w-[50%]">
      {benefits.map((benefit) => (
        <HorizontalImageWithDetail key={benefit.title} {...benefit} />
      ))}
    </Stack>
  );
}
