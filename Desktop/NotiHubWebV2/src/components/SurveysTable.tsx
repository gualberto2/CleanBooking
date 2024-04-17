import React from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/shadcn/ui/Avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/shadcn/ui/Card";
import { ArrowUpRight, Star, StarHalf } from "lucide-react";
import { Separator } from "./shadcn/ui/Separator";
import { Button } from "./shadcn/ui/Button";

const userData = [
  {
    avatarSrc: "/avatars/01.png",
    fallback: "OM",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    stars: 3,
  },
  {
    avatarSrc: "/avatars/02.png",
    fallback: "JL",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    stars: 4.5,
  },
  {
    avatarSrc: "/avatars/03.png",
    fallback: "IN",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    stars: 2.5,
  },
  {
    avatarSrc: "/avatars/04.png",
    fallback: "WK",
    name: "William Kim",
    email: "will@email.com",
    stars: 5,
  },
  {
    avatarSrc: "/avatars/05.png",
    fallback: "SD",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    stars: 5,
  },
];

const renderStars = (count: number) => {
  const fullStars = Math.floor(count);
  const halfStar = count % 1 !== 0;
  return (
    <>
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <Star key={index} />
        ))}
      {halfStar && <StarHalf />}
    </>
  );
};

const RecentSurveysCard = () => (
  <Card className="dashboard-01-chunk-5">
    <CardHeader>
      <CardTitle>Recent Surveys</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-4">
      {userData.map((user, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-4 ">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src={user.avatarSrc} alt="Avatar" />
            <AvatarFallback>{user.fallback}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <div className="ml-none sm:ml-auto flex flex-row justify-start">
            {renderStars(user.stars)}
          </div>
          <div className="block md:hidden">
            <Separator />
          </div>
        </div>
      ))}
    </CardContent>
    <CardFooter className="flex justify-center w-full">
      <Button size="sm" className="gap-1">
        See all
        <ArrowUpRight className="h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);

export default RecentSurveysCard;
