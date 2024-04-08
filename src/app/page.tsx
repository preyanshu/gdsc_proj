import Image from "next/image";
import {TeamMemberCard} from "../components/teamMemberCard";
import { TeamScoreCard } from "@/components/teamScoreCard";
// import { TeamDetailsCard } from "@/components/taskdetailscard";
import { Column } from "@tanstack/react-table";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="">
      <h1 className="">Team Name</h1>
      <TeamScoreCard />
      
      <TeamMemberCard />

      </div>
      

    
    
    </main>
  );
}
