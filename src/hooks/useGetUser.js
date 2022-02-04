import { useEffect, useState } from "react";
import { getUser } from "../utils/apis";

export default function useGetUser(id) {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(id);
  }, [user]);

  return user;
}
