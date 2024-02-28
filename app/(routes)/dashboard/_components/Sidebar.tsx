import React from "react";
import { ChevronDown, PencilRuler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FolderKanban } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 h-screen fixed w-72 border-r p-6 ">
      <Button
        variant={"link"}
        className="flex gap-2 items-center  text-lg hover:bg-slate-200 w-full  justify-start"
      >
        <PencilRuler width={30} height={30} className="text-purple-600" />
        <h2 className="font-bold">Team Name</h2>
        <ChevronDown />
      </Button>
    </div>
  );
};

export default Sidebar;
