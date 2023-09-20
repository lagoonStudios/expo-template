import { GET } from "@/lib/axios/axios";
import { useQuery } from "@tanstack/react-query";

//This key is used as an indentify to the cache where the data is stored.
const exampleKey = "users";

/**
 * This is an example to show how to use the Axios and React query Libs to fetch data.
 * @returns users array.
 */
export const useGetUsers = () => {
  return useQuery([exampleKey], async () => (await GET("")).data);
};
