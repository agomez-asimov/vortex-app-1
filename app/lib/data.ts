const API_KEY = "AOf5zOVK3xrYVU1KbTBKhDpon8QJrYw4NV8qHDX3";
const API_URL = "https://vortexops.api.trial.vor-tex.io/nortwind/v1";
const CUSTOMERS_ENDPOINT = "customers.json";
const EMPLOYEES_ENDPOINT = "empoyees.json";
const ORDERS_ENDPOINT = "orders.json";

export async function fetchOrders(employee: string) {
  const url = new URL(CUSTOMERS_ENDPOINT, API_URL);
  url.searchParams.append("auth_key", API_KEY);
  url.searchParams.append("employee", employee);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.json;
  } catch (error) {
    console.error(error);
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
    return response.json;
  } catch (error) {
    console.error(error);
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
    return response.json;
  } catch (error) {
    console.error(error);
  }
}
