import { Avatar, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import ThemeToggleButton from "./theme-toggle-button";

export const AvatarBox = ({ collapse }) => (
  <Flex
    borderWidth={collapse ? 1 : 0}
    borderColor="gray.700"
    borderRadius="full"
    w="full"
    p={2}
    alignItems="center"
    justifyContent="space-between"
    gap={3}
    flexDirection={collapse ? "row" : "column-reverse"}
  >
    <Avatar name="Ridwan Sulaeman" bg="blue.300" />
    {collapse && (
      <Flex
        w="full"
        flexDirection="column"
        gap={4}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Text fontSize="sm" fontWeight="bold" pb="0" lineHeight={0}>
          Ridwan
        </Text>
        <Text as="small" color="gray.500" fontSize={12} lineHeight={0}>
          Cost Control
        </Text>
      </Flex>
    )}
    <IconButton
      aria-label="Settings"
      icon={<MdOutlineMoreHoriz />}
      borderRadius="full"
      color="gray.400"
      variant="ghost"
      fontSize={20}
    />
    <ThemeToggleButton />
  </Flex>
);
