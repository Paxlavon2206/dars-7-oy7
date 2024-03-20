import { client } from "../config/query-client";

export const useInvalidateQuery = () => {
  const invalidate = (key) => {
    client.invalidateQueries({ queryKey: [key] });
  };
  return { invalidate };
};
