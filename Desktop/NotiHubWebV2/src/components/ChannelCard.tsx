import { Avatar, AvatarFallback, AvatarImage } from "./shadcn/ui/Avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./shadcn/ui/Card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./shadcn/ui/Table";

const channels = [
  {
    channel: "Newsletter",
    clicks: "30",
    impressions: "4,329",
    views: "10.732",
    conversions: "23",
  },
  {
    channel: "Promotions",
    clicks: "30",
    impressions: "4,329",
    views: "10.732",
    conversions: "23",
  },
  {
    channel: "Marketing Campaigns",
    clicks: "30",
    impressions: "4,329",
    views: "10.732",
    conversions: "23",
  },
  {
    channel: "Feedback",
    clicks: "30",
    impressions: "4,329",
    views: "10.732",
    conversions: "23",
  },
  {
    channel: "Requests",
    clicks: "30",
    impressions: "4,329",
    views: "10.732",
    conversions: "23",
  },
];

const ChannelCard = () => {
  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader>
        <div>
          <CardTitle>Top Channels</CardTitle>
          <CardDescription>
            View the highest ranking channels based on activity.
          </CardDescription>
        </div>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Channel</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>Impressions</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Conversions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {channels.map((channel) => (
                <TableRow key={channel.channel}>
                  <TableCell className="font-medium">
                    {channel.channel}
                  </TableCell>
                  <TableCell>{channel.clicks}</TableCell>
                  <TableCell>{channel.impressions}</TableCell>
                  <TableCell>{channel.views}</TableCell>
                  <TableCell className="">{channel.conversions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
export default ChannelCard;
