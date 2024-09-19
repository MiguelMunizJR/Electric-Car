import AnalitycsIcon from "@/icons/AnalitycsIcon.astro";
import ClientsIcon from "@/icons/ClientsIcon.astro";
import DashboardIcon from "@/icons/DashboardIcon.astro";
import FinanceIcon from "@/icons/FinanceIcon.astro";
import InventoryIcon from "@/icons/InventoryIcon.astro";
import OrdersIcon from "@/icons/OrdersIcon.astro";
import PhoneIcon from "@/icons/PhoneIcon.astro";
import ReportsIcon from "@/icons/ReportsIcon.astro";
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
  LINKS?: any;
}

export const routes: readonly IRoute[] = Object.freeze([
  {
    PATH: "/",
    NAME: "MENU",
    ICON: DashboardIcon,
  },
  {
    PATH: "/tasks",
    NAME: "REPARACIONES",
    ICON: TasksIcon,
    LINKS: [
      {
        NAME: "EN CURSO",
        PATH: "/orders/in-course",
      },
      {
        NAME: "COMPLETADAS",
        PATH: "/orders/completed",
      },
      {
        NAME: "NUEVA REPARACION",
        PATH: "null",
      }
    ],
  },
  {
    NAME: "REPARACIONES",
    ICON: OrdersIcon,
  },
  {
    PATH: "/finances",
    NAME: "FINANZAS",
    ICON: FinanceIcon,
  },
  {
    PATH: "/inventory",
    NAME: "CONTROL DE INVENTARIO",
    ICON: InventoryIcon,
  },
  {
    PATH: "/clients",
    NAME: "CLIENTES",
    ICON: ClientsIcon,
  },
  {
    ICON: "hr",
    PATH: "null",
  },
  {
    PATH: "/analytics",
    NAME: "METRICAS",
    ICON: AnalitycsIcon,
  },
  {
    PATH: "/reports",
    NAME: "REPORTES",
    ICON: ReportsIcon,
  },
  {
    PATH: "/calls",
    NAME: "LLAMADAS",
    ICON: PhoneIcon,
  },
]);
