import { FC } from "react";
import { Typography } from "geoiq-frontend-ui-kit";
import { ChevronLeft } from "lucide-react";
import OverViewPanel from "./components/overview-panel/overview-panel";

const DashBoard: FC = () => {
  const data = {
    overview: {
      activePlayers: 152,
      gamesThisWeek: 84,
      pendingChallenges: 5,
      activeMatches: 2,
    },
  };
  return (
    <>
      <div className="flex flex-col justify-center border border-gray-200 ">
        <ChevronLeft className="w-6 h-6 mt-4 ml-4 text-gray-600" />
        <Typography
          variant="h1"
          className="p-2 my-4 ml-6 text-2xl text-light-1 "
        >
          Chess Hub Dashboard
        </Typography>
      </div>
      {/* cards from here*/}'
      <main className="px-4 py-4 mx-2 space-y-8 max-w-7xl">
        <OverViewPanel />
        {/* cards to here*/}
      </main>
    </>
  );
};

export default DashBoard;
