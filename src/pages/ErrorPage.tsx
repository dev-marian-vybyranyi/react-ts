import NavBat from "@/components/NavBat";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBat />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page dos not exist"
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
