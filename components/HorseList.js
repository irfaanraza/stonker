import BetsComponent from "./BetsComponent";
import HorseComponent from "./HorseComponent";

const HorseList = () => {
      const Horses = [
            "AMC",
            "AMZN",
            "BB",
            "DASH",
            "GME",
            "MRNA",
            "NFLX",
            "PEP",
            "PFE",
            "RBLX",
            "TSLA",
            "UBER",
            "WFC",
            "XOM",
      ];

      return (
            <div>
                  {Horses.map((horse) => {
                        console.log("hoooors:", horse);
                        return <HorseComponent horses={horse} />;
                  })}
            </div>
      );
};
export default HorseList;
