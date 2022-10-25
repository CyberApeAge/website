import Image from "next/image";
import { NextPage } from "next/types";
import { CyberApeSearchContainer as WeekDataContainer } from "./styles";

const WeekDataPopup: NextPage = () => {
  return (
    <WeekDataContainer>
      Game 5 - NOW COMPLETED and PRIZES DISTRIBUTED!

     The game for this week is Rockfall. To enter into the prize pool:

     You simply need to complete the game and submit (no need for 100%).

     NOTE: If you have completed Hags Hollow your submission will still count.The game submission deadline is being extended to Saturday 26th, 3pm UTC.

     Top 10 will require:
    1️⃣ 5/5 quests 
    2️⃣ Berserker difficulty

     A playthrough to help streamline the process can be accessed here: https://youtu.be/QQeQH5nlX4k   
      <img src="https://c.tenor.com/-LlG5WSoK74AAAAj/monkey.gif" alt="monke" />
    </WeekDataContainer>
  );
};

export default WeekDataPopup;
