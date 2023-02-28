import { List, ListItem } from "@chakra-ui/react";
import {
  MdOutlineSpaceDashboard,
  MdMailOutline,
  MdOutlineFlag,
  MdCalendarToday,
  MdOutlineSupervisorAccount,
  MdOutlineSettingsInputComposite,
  MdOutlineChatBubbleOutline,
  MdOutlineNotificationsActive,
  MdContentPaste,
} from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { NavItem } from "./NavItem";

const items = [
  {
    type: "link",
    label: "Dashboard",
    icon: MdOutlineSpaceDashboard,
    path: "/",
  },
  {
    type: "link",
    label: "News",
    icon: BiNews,
    path: "/",
  },
  {
    type: "link",
    label: "E-Learning",
    icon: MdMailOutline,
    path: "/",
  },
  {
    type: "link",
    label: "Prosedur Kerja",
    icon: MdOutlineFlag,
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

  {
    type: "header",
    label: "Account",
  },

  {
    type: "link",
    label: "Notifications",
    icon: MdOutlineNotificationsActive,
    path: "/",
    notifications: 24,
  },
  {
    type: "link",
    label: "Chat",
    icon: MdOutlineChatBubbleOutline,
    path: "/",
    messages: 8,
  },
  {
    type: "link",
    label: "Settings",
    icon: MdOutlineSettingsInputComposite,
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
