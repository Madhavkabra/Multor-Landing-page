import Image from "next/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface HorizontalImageWithDetailProps {
  image: string;
  title: string;
  description: string;
}

export default function HorizontalImageWithDetail({
  image,
  title,
  description,
}: HorizontalImageWithDetailProps) {
  return (
    <Stack direction="row" gap={3} alignItems="flex-start">
      <Image src={image} alt={title} width={65} height={65} />

      <Stack gap={1} className=" mt-[3px]">
        <Typography
          fontSize="1.9em"
          className="md:text-[1.25em] font-semibold text-teal-950 tracking-wide font-work-sans"
        >
          {title}
        </Typography>
        <Typography
          fontSize="1rem"
          className="md:text-[1.em] font-normal text-teal-950 font-work-sans"
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
