"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation } from "convex/react";
import React, { useEffect } from "react";

const Dashboard = () => {
  const convex = useConvex();
  const { user } = useKindeBrowserClient();

  // const getUser = useQuery(api.user.getUser, { email: user?.email! });
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (user) {
      console.log(user);
      checkUser();
    }
  }, [user]);

  const checkUser = async () => {
    const result = await convex.query(api.user.getUser, {
      email: user?.email!,
    });

    if (!result?.length) {
      createUser({
        name: user?.given_name!,
        email: user?.email!,
        image: user?.picture!,
      }).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <>
      <div>Dashboard</div>
      <Button>
        <LogoutLink>Log Out</LogoutLink>
      </Button>
    </>
  );
};

export default Dashboard;
