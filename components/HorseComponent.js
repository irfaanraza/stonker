import React from "react";
import { Card } from "antd";

const HorseComponent = (props) => {
      console.log("props are ", props);
      return (
            <div className='card-container'>
                  <Card hoverable className='card'>
                        <div className='card-content'>
                              <div className='horse-component'>
                                    <span> </span>
                              </div>
                              <div className='horse-card-container'>
                                    <div className='horse-card'>
                                          {props.horses}
                                    </div>
                              </div>
                        </div>
                  </Card>
            </div>
      );
};
export default HorseComponent;
