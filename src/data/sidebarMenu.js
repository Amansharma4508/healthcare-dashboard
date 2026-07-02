import {
  LayoutDashboard,
  User,
  CalendarDays,
  FileText,
  Pill,
  Wallet,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

export const userSidebarMenu = [
  {
    id: 1,
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: 2,
    title: "My Profile",
    icon: User,
    path: "/profile",
  },
  {
    id: 3,
    title: "Appointments",
    icon: CalendarDays,
    path: "/appointments",
  },
  {
    id: 4,
    title: "Medical Records",
    icon: FileText,
    path: "/medical-records",
  },
  {
    id: 5,
    title: "Medicine Orders",
    icon: Pill,
    path: "/medicine-orders",
  },
  {
    id: 6,
    title: "Wallet",
    icon: Wallet,
    path: "/wallet",
  },
  {
    id: 7,
    title: "Notifications",
    icon: Bell,
    path: "/notifications",
  },
  {
    id: 8,
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
  {
    id: 9,
    title: "Logout",
    icon: LogOut,
    path: "/logout",
  },
];