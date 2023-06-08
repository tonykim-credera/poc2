import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

interface CardComponentProps {
  title: string;
  description: string;
  image: any;
  alt: string;
  date: string;
  link?: string;
}

export default function CardComponent({
  title,
  description,
  image,
  alt,
  date,
  link,
}: CardComponentProps) {
  return (
    <Card className="lg:w-1/4 w-full overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img className="lg:h-72 object-cover" src={image} alt={alt} />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="font-playfair text-gray-600"
        >
          {title}
        </Typography>
        <Typography className="mt-3 font-roboto text-gray-600">
          {description}
        </Typography>
        <Typography className="font-roboto mt-3">
          {link && (
            <a className="underline" href={link}>
              LINK
            </a>
          )}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Typography className="font-roboto absolute right-0 bottom-0 p-6">
          {date}
        </Typography>
      </CardFooter>
    </Card>
  );
}
