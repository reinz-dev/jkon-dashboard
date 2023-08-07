import React from "react";
import { Button, Flex, Switch } from "@chakra-ui/react";

export const SwitchButtons = ({ collapse }) => {
  const [isPersonal, setIsPersonal] = React.useState(true);
  const [isBusiness, setIsBusiness] = React.useState(false);

  const handleIsPersonal = () => {
    setIsBusiness(false);
    setIsPersonal(true);
  };

  const handleIsBusiness = () => {
    setIsPersonal(false);
    setIsBusiness(true);
  };

  if (!collapse) {
    return (
      <Flex w="full" alignItems="center" textAlign="center">
        <Switch w="full" colorScheme="blue" mb={10} />
      </Flex>
    );
  }
  return (
    <Flex
      w="full"
      borderWidth={1}
      borderColor="gray.700"
      borderRadius={14}
      my={6}
    >
      <Button
        w="full"
        variant={isPersonal ? "solid" : "ghost"}
        borderRadius={14}
        colorScheme={isPersonal ? "messenger" : "gray.900"}
        id="personal"
        onClick={handleIsPersonal}
        textTransform="uppercase"
        color={isPersonal ? "gray.900" : "gray.500"}
        size="sm"
        py={5}
      >
        Personal
      </Button>
      <Button
        w="full"
        variant={isBusiness ? "solid" : "ghost"}
        borderRadius={14}
        colorScheme={isBusiness ? "messenger" : "gray.800"}
        id="business"
        onClick={handleIsBusiness}
        textTransform="uppercase"
        color={isBusiness ? "gray.900" : "gray.500"}
        size="sm"
        py={5}
      >
        Business
      </Button>
    </Flex>
  );
};
