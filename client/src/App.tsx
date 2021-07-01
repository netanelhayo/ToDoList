import React from 'react';
import { Layout, Typography } from 'antd';
import { MainScreen } from './components/mainScreen';
import { BottomNav } from './components/bottomNav';

import './css/App.css';
import "antd/dist/antd.css";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001";

const { Header, Content, Footer } = Layout;

function App() {
  const socket = socketIOClient(ENDPOINT);
  const [userToFilterBy, setUserToFilterBy] = React.useState("");

  return (
    <div className="App">
      <Layout className="layout">
        <Header >
          <Typography.Title style={{ color: "#fff5ee" }}>
            ToDo List
          </Typography.Title>
        </Header>
        <Content className="content">
          <MainScreen socket={socket} userToFilterBy={userToFilterBy}>
          </MainScreen>
        </Content>
        <Footer className="footer">
          <BottomNav setFilter={setUserToFilterBy}></BottomNav>
        </Footer>
      </Layout>
    </div >
  );
}

export default App;
