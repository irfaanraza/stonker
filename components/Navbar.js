import React from "react";
import { Row, Col, Menu, Image } from "antd";
import Link from "next/link";
import profile from "../public/assets/profile.jpg";
import logo from "../public/assets/logo.jpg";

const Navbar = () => {
      return (
            <div className='container'>
                  <Row>
                        <Col xs={24} sm={24} md={6} lg={4} xl={4}>
                              {/* <div className='logo-container'>
                                    <Image
                                          src={logo.src}
                                          preview={false}
                                          className='logo'
                                    />
                              </div> */}
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={18} xl={18}>
                              <Menu mode='horizontal'>
                                    <Menu.Item key='games'>
                                          <Link href='/games'>
                                                <a>Games</a>
                                          </Link>
                                    </Menu.Item>
                                    <Menu.Item key='trades'>
                                          <Link href='/trades'>
                                                <a>Trades</a>
                                          </Link>
                                    </Menu.Item>
                                    <Menu.Item key='stats'>
                                          <Link href='/stats'>
                                                <a>Stats</a>
                                          </Link>
                                    </Menu.Item>
                                    <Menu.Item key='faqs'>
                                          <Link href='/FAQs'>
                                                <a>FAQs</a>
                                          </Link>
                                    </Menu.Item>
                              </Menu>
                        </Col>
                        <Col xs={24} sm={24} md={6} lg={2} xl={2}>
                              <Image
                                    src={profile.src}
                                    preview={false}
                                    className='profile'
                              />
                        </Col>
                  </Row>
            </div>
      );
};

export default Navbar;
