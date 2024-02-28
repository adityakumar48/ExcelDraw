"use client";
import { PencilRuler } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState<string>("");
  const createTeam = useMutation(api.teams.createTeam);
  const { user } = useKindeBrowserClient();
  const router = useRouter();

  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email!,
    }).then((res) => {
      if (res) {
        router.push("/dashboard");
        toast("Team Created Successfully!");
      }
    });
  };

  return (
    <div className="px-6 md:px-16 pt-10 ">
      <div className=" flex gap-2 items-center h-[10vh]">
        <PencilRuler className="text-purple-700" width={30} height={30} />
        <h1 className="text-3xl font-bold text-neutral-800">ExcelDraw</h1>
      </div>

      <div className="flex flex-col items-center h-[60vh] justify-center mt-8 ">
        <h2 className="font-extrabold text-5xl py-3 ">
          What should we call your team?
        </h2>
        <h2 className="text-gray-500">
          You can always change this later form settings.
        </h2>
        <div className="grid w-[40%] mt-7  items-center gap-1.5">
          <label htmlFor="team" className="text-gray-500">
            Team Name
          </label>
          <Input
            type="text"
            id="team"
            placeholder="  Enter Your Team Name.."
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <Button
          className="mt-9 w-[40%]"
          disabled={!(teamName && teamName?.length > 0)}
          onClick={() => createNewTeam()}
        >
          Create Team
        </Button>
      </div>
    </div>
  );
};

export default CreateTeam;
