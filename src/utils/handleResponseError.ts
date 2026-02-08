export function handleResponseError(error: unknown): never {
  console.error(error);
  throw error;
}
