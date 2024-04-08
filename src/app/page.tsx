import Image from "next/image";
import { Card } from "../components/ui/card";
import { CardDemo } from "../components/ui/carddetails";
import { CardDemo1 } from "../components/ui/cardTeamscore";
import { AccordionDemo } from "../components/ui/task_Details";

export default function Home() {
  return (
    <main className="bg-white">
      <h1>Team Name</h1>

      <Card />
      <CardDemo />
      <CardDemo1 />
      <AccordionDemo />
    </main>
  );
}
