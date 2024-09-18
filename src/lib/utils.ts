import AnalitycsIcon from "@/icons/AnalitycsIcon.astro";
import ClientsIcon from "@/icons/ClientsIcon.astro";
import FinanceIcon from "@/icons/FinanceIcon.astro";
import InventoryIcon from "@/icons/InventoryIcon.astro";
import OrdersIcon from "@/icons/OrdersIcon.astro";
import PhoneIcon from "@/icons/PhoneIcon.astro";
import ReportsIcon from "@/icons/ReportsIcon.astro";
import SettingsIcon from "@/icons/SettingsIcon.astro";
import TasksIcon from "@/icons/TasksIcon.astro";

const isBrowser = typeof window !== "undefined";
export const isBrowserEnv = () => isBrowser;
export const isServerEnv = () => !isBrowser;

export const isDevEnv = () =>
  !isServerEnv() && process.env.NODE_ENV === "development";
export const isProdEnv = () =>
  !isServerEnv() && process.env.NODE_ENV === "production";
export const isTestEnv = () =>
  !isServerEnv() && process.env.NODE_ENV === "test";
export const isClientSide = () => isBrowserEnv() && !isServerEnv();

interface IRoute {
  PATH: string;
  NAME?: string;
  ICON: any;
}

export const routes: readonly IRoute[] = Object.freeze([
  {
    PATH: "/tasks",
    NAME: "TASKS",
    ICON: TasksIcon,
  },
  {
    PATH: "/orders",
    NAME: "ORDERS",
    ICON: OrdersIcon,
  },
  {
    PATH: "/finances",
    NAME: "FINANCES",
    ICON: FinanceIcon,
  },
  {
    PATH: "/inventory",
    NAME: "INVENTORY",
    ICON: InventoryIcon,
  },
  {
    PATH: "/clients",
    NAME: "CLIENTS",
    ICON: ClientsIcon,
  },
  {
    ICON: "hr",
    PATH: "null"
  },
  {
    PATH: "/analytics",
    NAME: "ANALYTICS",
    ICON: AnalitycsIcon,
  },
  {
    PATH: "/reports",
    NAME: "REPORTS",
    ICON: ReportsIcon,
  },
  {
    PATH: "/calls",
    NAME: "CALLS",
    ICON: PhoneIcon,
  },
  {
    ICON: "hr",
    PATH: "null",
  },
  {
    PATH: "/settings",
    NAME: "SETTINGS",
    ICON: SettingsIcon,
  },
]);
