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
      bg="blackAlpha.300"
      color="white"
      justifyContent="center"
      align="center"
    >
      <PopoverArrow bg="blackAlpha.300" />
      <PopoverBody>
        <Avatar name="Ridwan Sulaeman" bg="blue.300" size="lg" mt={5} />
        <Text fontSize={15} mt={2}>
          Ridwan Sulaeman
        </Text>
        <Text fontSize={13} color="gray.500" mb={20}>
          Cost Control
        </Text>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
