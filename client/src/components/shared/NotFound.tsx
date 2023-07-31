import { Button, Container, Heading, Text } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";
interface IError {
  data: string;
  status: number;
  statusText: string;
}

const NotFoundPage = () => {
  const error = useRouteError() as IError;
  console.log("ERROR", error);

  return (
    <Container p={10} centerContent>
      <Heading p={3}>
        {error.statusText} : {error.status}
      </Heading>
      <Text>{error.data}</Text>
      <Button p="4" m={10}>
        <Link to="/">Go Back</Link>
      </Button>
    </Container>
  );
};

export default NotFoundPage;
