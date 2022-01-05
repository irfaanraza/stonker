import React from "react";
import { Divider, Row, Col, Button, Input, Radio } from "antd";
import HorseList from "./HorseList";

import BetsList from "./BetsList";
import TableView from "./TableView";

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
                        <div className='radio'>
                              <Radio.Group>
                                    <Radio.Button>Card View</Radio.Button>
                                    <Radio.Button>Table View</Radio.Button>
                              </Radio.Group>
                        </div>

                        <div className='body-container'>
                              <Row>
                                    <Col xs={24} sm={24} md={6} lg={8} xl={8}>
                                          <h3
                                                style={{
                                                      fontSize: 18,
                                                      fontWeight: "bold",
                                                }}
                                          >
                                                01. Select Your Horse
                                          </h3>
                                          <HorseList />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={8} xl={8}>
                                          <h3
                                                style={{
                                                      fontSize: 18,
                                                      fontWeight: "bold",
                                                }}
                                          >
                                                02. Select a Bet
                                          </h3>
                                          <BetsList />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={8} xl={8}>
                                          <div className='input-container'>
                                                <div className='input'>
                                                      <Input type='text' />
                                                      <Input
                                                            type='text'
                                                            placeholder='ODDS'
                                                      />
                                                      <Input
                                                            type='text'
                                                            placeholder='Payout'
                                                      />
                                                </div>

                                                <Button className='btn'>
                                                      Enter this Bet
                                                </Button>
                                          </div>
                                    </Col>
                              </Row>
                        </div>
                        <Divider
                              style={{
                                    borderWidth: 1,
                                    borderColor: "grey",
                              }}
                        />
                  </div>
                  <div className='earning'>
                        <h3>Total Potential Earnings</h3>
                        <div className='earning-container'>
                              <p></p>
                              <h4>t 54.49</h4>
                              <div className='btn-container'>
                                    <Button className='btnn'>
                                          Edit My Bets
                                    </Button>
                                    <Button className='btnn2'>
                                          Enter My Bets
                                    </Button>
                              </div>
                        </div>
                  </div>
                  <TableView />
            </div>
      );
};
export default DailyRace;
