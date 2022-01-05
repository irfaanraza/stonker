import { Table } from "antd";
import React from "react";

const TableView = () => {
      const data = [
            {
                  win: "win",
                  AMC: "t 17.47",
                  AMZN: "t 17.47",
                  BB: "t 17.47",
                  DASH: "t 17.47",
                  GME: "t 17.47",
                  MRNA: "t 17.47",
                  NFLX: "t 17.47",
                  PEP: "t 17.47",
                  PFE: "t 17.47",
                  RBLX: "t 17.47",
                  TSLA: "t 17.47",
                  UBER: "t 17.47",
                  WFC: "t 17.47",
                  XOM: "t 17.47",
            },
            {
                  win: "Place",
                  AMC: "t 17.47",
                  AMZN: "t 17.47",
                  BB: "t 17.47",
                  DASH: "t 17.47",
                  GME: "t 17.47",
                  MRNA: "t 17.47",
                  NFLX: "t 17.47",
                  PEP: "t 17.47",
                  PFE: "t 17.47",
                  RBLX: "t 17.47",
                  TSLA: "t 17.47",
                  UBER: "t 17.47",
                  WFC: "t 17.47",
                  XOM: "t 17.47",
            },
            {
                  win: "show",
                  AMC: "t 17.47",
                  AMZN: "t 17.47",
                  BB: "t 17.47",
                  DASH: "t 17.47",
                  GME: "t 17.47",
                  MRNA: "t 17.47",
                  NFLX: "t 17.47",
                  PEP: "t 17.47",
                  PFE: "t 17.47",
                  RBLX: "t 17.47",
                  TSLA: "t 17.47",
                  UBER: "t 17.47",
                  WFC: "t 17.47",
                  XOM: "t 17.47",
            },
            {
                  win: "no show",
                  AMC: "t 17.47",
                  AMZN: "t 17.47",
                  BB: "t 17.47",
                  DASH: "t 17.47",
                  GME: "t 17.47",
                  MRNA: "t 17.47",
                  NFLX: "t 17.47",
                  PEP: "t 17.47",
                  PFE: "t 17.47",
                  RBLX: "t 17.47",
                  TSLA: "t 17.47",
                  UBER: "t 17.47",
                  WFC: "t 17.47",
                  XOM: "t 17.47",
            },
            {
                  win: "no place",
                  AMC: "t 17.47",
                  AMZN: "t 17.47",
                  BB: "t 17.47",
                  DASH: "t 17.47",
                  GME: "t 17.47",
                  MRNA: "t 17.47",
                  NFLX: "t 17.47",
                  PEP: "t 17.47",
                  PFE: "t 17.47",
                  RBLX: "t 17.47",
                  TSLA: "t 17.47",
                  UBER: "t 17.47",
                  WFC: "t 17.47",
                  XOM: "t 17.47",
            },
            {
                  win: "lose",
                  AMC: "t 17.47",
                  AMZN: "t 17.47",
                  BB: "t 17.47",
                  DASH: "t 17.47",
                  GME: "t 17.47",
                  MRNA: "t 17.47",
                  NFLX: "t 17.47",
                  PEP: "t 17.47",
                  PFE: "t 17.47",
                  RBLX: "t 17.47",
                  TSLA: "t 17.47",
                  UBER: "t 17.47",
                  WFC: "t 17.47",
                  XOM: "t 17.47",
            },
      ];
      const columns = [
            { title: "", dataIndex: "win", key: "" },
            { title: "AMC", dataIndex: "AMC", key: "key" },
            { title: "AMZN", dataIndex: "AMZN", key: "key" },
            { title: "BB", dataIndex: "BB", key: "key" },
            { title: "DASH", dataIndex: "DASH", key: "key" },
            { title: "GME", dataIndex: "GME", key: "key" },
            { title: "MRNA", dataIndex: "MRNA", key: "key" },
            { title: "NFLX", dataIndex: "NFLX", key: "key" },
            { title: "PEP", dataIndex: "PEP", key: "key" },
            { title: "PFE", dataIndex: "PFE", key: "key" },
            { title: "RBLX", dataIndex: "RBLX", key: "key" },
            { title: "TSLA", dataIndex: "TSLA", key: "key" },
            { title: "UBER", dataIndex: "UBER", key: "key" },
            { title: "WFC", dataIndex: "WFC", key: "key" },
            { title: "XOM", dataIndex: "XOM", key: "key" },
      ];

      return (
            <div>
                  <Table
                        dataSource={data}
                        columns={columns}
                        pagination={false}
                        bordered={false}
                  ></Table>
            </div>
      );
};
export default TableView;
