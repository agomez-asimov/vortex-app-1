import { Employee, Order } from "./definitions";

const API_KEY = "AOf5zOVK3xrYVU1KbTBKhDpon8QJrYw4NV8qHDX3";
const API_URL = "https://vortexops.api.trial.vor-tex.io/nortwind/v1";
const CUSTOMERS_ENDPOINT = "customers.json";
const EMPLOYEES_ENDPOINT = "empoyees.json";
const ORDERS_ENDPOINT = "orders.json";

export async function fetchOrders(
  employee: string,
  start: Date | undefined = undefined,
  end: Date | undefined = undefined
): Promise<Order[]> {
  const url = new URL(CUSTOMERS_ENDPOINT, API_URL);
  url.searchParams.append("auth_key", API_KEY);
  url.searchParams.append("employee", employee);
  if (!!start) {
    url.searchParams.append("start", start.toISOString());
  }
  if (!!end) {
    url.searchParams.append("end", end.toISOString());
  }
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function fetchEmployee(employee: string) {
  const url = new URL(EMPLOYEES_ENDPOINT, API_URL);
  url.searchParams.append("auth_key", API_KEY);
  url.searchParams.append("employee", employee);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function fetchEmployees(): Promise<Employee[]> {
  const url = new URL(EMPLOYEES_ENDPOINT, API_URL);
  url.searchParams.append("auth_key", API_KEY);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function fetchCustomers(employee: string) {
  const url = new URL(ORDERS_ENDPOINT, API_URL);
  url.searchParams.append("auth_key", API_KEY);
  url.searchParams.append("employee", employee);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return Promise.resolve(data);
    0;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
