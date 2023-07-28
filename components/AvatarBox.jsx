import {
  Avatar,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";

export const AvatarBox = ({}) => (
  <Popover isLazy>
    <PopoverTrigger>
      <Button borderRadius="full" size={1}>
        <Avatar name="Ridwan Sulaeman" bg="blue.300" size="xs" />
      </Button>
    </PopoverTrigger>
    <PopoverContent bg="blue.900" color="white">
      <PopoverHeader fontWeight="semibold">Customization</PopoverHeader>
      <PopoverArrow bg="blue.900" />
      <PopoverBody>
        Tadaa!! The arrow color and background color is customized. Check the
        props for each component.
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
