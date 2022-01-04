import React from "react";
import { Divider, Row, Col, Button } from "antd";
import HorseList from "./HorseList";

const DailyRace = () => {
      return (
            <div className='horserace-container'>
                  <div className='container'>
                        <div className='header'>
                              <div>
                                    <h2>Daily Horse Race</h2>
                                    <h5>Race Starts 4:00 PM</h5>
                              </div>

                              <span>0:12:43:07</span>
                        </div>
                        <Divider plain style={{ marginTop: -60 }}>
                              <div className='graphic-container'>
                                    <span className='race-graphic'>
                                          Horse Race Graphics
                                    </span>
                              </div>
                        </Divider>
                  </div>

                  <div className='container'>
                        <Row>
                              <Col xs={24} sm={24} md={6} lg={8} xl={8}>
                                    <h3>01. Select Your Horse</h3>
                                    <HorseList />
                              </Col>
                              <Col xs={24} sm={24} md={6} lg={8} xl={8}>
                                    <h3>02. Select a Bet</h3>
                              </Col>
                              <Col xs={24} sm={24} md={6} lg={8} xl={8}>
                                    <div className='input-container'>
                                          <input
                                                type='text'
                                                placeholder='ODDS'
                                          />
                                          <input
                                                type='text'
                                                placeholder='Payout'
                                          />
                                          <Button className='btn'>
                                                {" "}
                                                Enter this Bet
                                          </Button>
                                    </div>
                              </Col>
                        </Row>
                  </div>
            </div>
      );
};
export default DailyRace;
