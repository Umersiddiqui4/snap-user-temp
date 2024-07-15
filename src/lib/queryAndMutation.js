import { getUsers } from "./Api";
import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "./queryKeys";


export const useGetUsers = () => {
    return useQuery({
      QUERY_KEYS: ['getUsers'],
      queryFn: () => getUsers(),
    });
  };


 