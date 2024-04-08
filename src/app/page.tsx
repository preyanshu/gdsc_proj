import Image from "next/image";
<<<<<<< HEAD
import { Card } from "../components/ui/card";
import { CardDemo } from "../components/ui/carddetails";
import { CardDemo1 } from "../components/ui/cardTeamscore";
import { AccordionDemo } from "../components/ui/task_Details";
=======
import {TeamMemberCard} from "../components/teamMemberCard";
import { TeamScoreCard } from "@/components/teamScoreCard";
// import { TeamDetailsCard } from "@/components/taskdetailscard";
import { Column } from "@tanstack/react-table";
>>>>>>> 7fb40dd622f3186aebd0619efcd8e74b5fbd9435

export default function Home() {
  return (
    <main className="bg-white">
      <div className="">
      <h1 className="">Team Name</h1>
      <TeamScoreCard />
      
      <TeamMemberCard />

      </div>
      

      <Card />
      <CardDemo />
      <CardDemo1 />
      <AccordionDemo />
    </main>
  );
}
