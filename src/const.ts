interface IRoutesPath {
    HOME: string;
    TASKS: string;
    ORDERS: string;
    FINANCES: string;
    INVENTORY: string;
    CLIENTS: string;
    ANALYTICS: string;
    REPORTS: string;
    CALLS: string;
    SETTINGS: string;
};


export const ROUTES_PATH: IRoutesPath = Object.freeze({
    HOME: '/',
    TASKS: '/tasks',
    ORDERS: '/orders',
    FINANCES: '/finances',
    INVENTORY: '/inventory',
    CLIENTS: '/clients',
    ANALYTICS: '/analytics',
    REPORTS: '/reports',
    CALLS: '/calls',
    SETTINGS: '/settings',
});