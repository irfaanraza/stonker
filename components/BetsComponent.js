import { Card } from "antd";
const BetsComponent = (props) => {
      return (
            <div className='bets-card-container'>
                  <Card hoverable className='bet-card'>
                        <div className='bet-card-content'>
                              <div className='bet-component'>
                                    <span>14 </span>
                              </div>
                              <div className='bet-card-container'>
                                    <div className='bets-card'>
                                          {props.bets}
                                    </div>
                              </div>
                        </div>
                  </Card>
            </div>
      );
};
export default BetsComponent;
