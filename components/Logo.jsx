import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import RdwnsLogo from "./icons/RdwnsLogo";

export const Logo = ({ collapse }) => (
  <Flex
    w="full"
    alignItems="center"
    justifyContent="space-between"
    flexDirection={collapse ? "row" : "column"}
    gap={4}
  >
    <Box display="flex" alignItems="center" gap={2} mb={5}>
      <Icon as={RdwnsLogo} fontSize={40} mb={2} />
      {collapse && (
        <Text fontWeight="bold" fontSize={16}>
          FINANCE
          <Text fontSize={10} fontWeight={100} color="gray.400">
            Finance System Management
          </Text>
        </Text>
      )}
    </Box>
  </Flex>
);
