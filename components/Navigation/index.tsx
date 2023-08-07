import { List, ListItem } from "@chakra-ui/react";
import {
  MdCalendarToday,
  MdOutlineSupervisorAccount,
  MdContentPaste,
  MdHome,
} from "react-icons/md";
import { FaHardHat } from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";
import { NavItem } from "./NavItem";

const items = [
  {
    type: "link",
    label: "Dashboard",
    icon: MdHome,
    path: "/",
  },
  {
    type: "link",
    label: "News",
    icon: SiGooglenews,
    path: "/",
  },
  {
    type: "link",
    label: "Prosedur Kerja",
    icon: FaHardHat,
    path: "/",
  },
  {
    type: "link",
    label: "Learning",
    icon: MdCalendarToday,
    path: "/",
  },
  {
    type: "link",
    label: "Absensi",
    icon: MdContentPaste,
    path: "/",
  },
  {
    type: "link",
    label: "Contact",
    icon: MdOutlineSupervisorAccount,
    path: "/",
  },
];

export const Navigation = ({ collapse }) => (
  <List w="full" my={8}>
    {items.map((item, index) => (
      <ListItem key={index}>
        <NavItem item={item} isActive={index === 0} collapse={collapse} />
      </ListItem>
    ))}
  </List>
);
