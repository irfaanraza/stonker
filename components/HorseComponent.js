import React from "react";
import { Card } from "antd";

const HorseComponent = (props) => {
      console.log("props are ", props);
      return (
            <div>
                  <Card hoverable>
                        <div className='horse-component'>
                              <span></span>
                        </div>
                        horse={props.horses}
                  </Card>
            </div>
      );
};
export default HorseComponent;
