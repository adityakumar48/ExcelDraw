"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useMutation, useQuery } from "convex/react";
import React, { useEffect } from "react";

const Dashboard = () => {
  const { user } = useKindeBrowserClient();

  const getUser = useQuery(api.user.getUser, { email: user?.email! });
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (user) {
      if (getUser == undefined) {
        createUser({
          name: user.given_name!,
          email: user.email!,
          image: user.picture!,
        }).then((res) => {
          console.log(res);
        });
      }
    }
  }, [user]);

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
