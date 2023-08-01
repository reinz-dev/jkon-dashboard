import {
  Avatar,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  useColorModeValue,
} from "@chakra-ui/react";

export const AvatarBox = ({}) => (
  <Popover>
    <PopoverTrigger>
      <Button borderRadius="full" width={2} height={10} variant="ghost">
        <Avatar name="Ridwan Sulaeman" bg="blue.300" size="xs" />
      </Button>
    </PopoverTrigger>
    <PopoverContent
      width={200}
      color="white"
      borderColor="blackAlpha.500"
      justifyContent="center"
      align="center"
      backdropFilter="blur(8px)"
      bg={useColorModeValue("whitesmoke", "blackAlpha.500")}
    >
      <PopoverBody>
        <Avatar name="Ridwan Sulaeman" bg="blue.300" size="lg" mt={5} />
        <Text fontSize={15} mt={2} color="whitesmoke">
          Ridwan Sulaeman
        </Text>
        <Text fontSize={13} color="gray.500" mb={20}>
          Cost Control
        </Text>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
