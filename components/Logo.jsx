import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import RdwnsLogo from "./icons/RdwnsLogo";

export const Logo = ({ collapse }) => (
  <Flex
    w="full"
    alignItems="center"
    justifyContent="space-between"
    flexDirection={collapse ? "row" : "column"}
    gap={4}
  >
    <Box display="flex" alignItems="center" gap={2}>
      <Icon as={RdwnsLogo} fontSize={30} />
      {collapse && (
        <Text fontWeight="bold" fontSize={16}>
          FINANCE
          <Text fontSize={10} fontWeight={100} color="gray.400">
            Finance System Management
          </Text>
        </Text>
      )}
    </Box>
    <IconButton
      variant="ghost"
      aria-label="search"
      icon={<AiOutlineSearch />}
      fontSize={26}
      color="gray.400"
      borderRadius="50%"
    />
  </Flex>
);
