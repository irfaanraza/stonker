import React from "react";
import BetsComponent from "./BetsComponent";

const BetsList = () => {
      const Bets = ["win", "no place", "show", "no show", "place", "lose"];
      const spans = [];
      return (
            <div>
                  {Bets.map((bet) => {
                        return <BetsComponent bets={bet} />;
                  })}
            </div>
      );
};
export default BetsList;
