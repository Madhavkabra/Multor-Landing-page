import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";

import Container from "../Container";

export default function AboutSection() {
  return (
    <Container sx={{ pb: 15 }} className="max-sm:pt-2 max-sm:pb-[50px]">
      <Stack
        display={"flex"}
        flexDirection={"row"}
        gap={8}
        alignItems={"center"}
        className="max-sm:flex-col max-sm:gap-10"
      >
        <Image
          width={460}
          height={400}
          src="/display.jpg"
          alt="A display picture"
        />
        <Stack display={"flex"} gap={2}>
          <Typography fontWeight={600} className="text-teal-400 text-base">
            ABOUT
          </Typography>
          <Typography
            fontSize={"2rem"}
            fontWeight={600}
            lineHeight={1.15}
            width={280}
            className="font-work-sans"
          >
            Some more information about your business
          </Typography>
          <Typography
            fontSize={"16px"}
            width={340}
            className="max-sm:w-full font-muli"
          >
            Share a little about yourself as a business owner, or maybe describe
            what makes your service unique. Give visitors one more reason to
            care about your offer and want to work with you.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
