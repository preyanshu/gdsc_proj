import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    title: "Member1",
    description: "Email: hey@gmail.com    Character: Imposter   Status: Alive",
  },
  //   {
  //     title: "You have a new message!",
  //     description: "1 hour ago",
  //   },
  //   {
  //     title: "Your subscription is expiring soon!",
  //     description: "2 hours ago",
  //   },
  {
    title: "Member2",
    description: "Email: hey@gmail.com    Character: Imposter   Status: Alive",
  },
  {
    title: "Member3",
    description: "Email: hey@gmail.com    Character: Imposter   Status: Alive",
  },
  {
    title: "Member4",
    description: "Email: hey@gmail.com    Character: Imposter   Status: Alive",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[1200px] h-13", className)} {...props}>
      <CardHeader>
        <CardTitle>Members Details</CardTitle>
        {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing /> */}
        {/* <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div> */}
        {/* <Switch /> */}
        {/* </div> */}
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_4fr]  items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full " />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      {/* <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter> */}
    </Card>
  );
}
