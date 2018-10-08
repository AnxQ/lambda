import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import {Icon} from 'antd';

import './App.css';
import SubmitFormWrapper from './submitForm'
import InfoPage from './infoPage'
import setTitle from './utils/pageManagement'

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.match.params.page,
      hidden: false,
      fullScreen: false,
    };
  }

  render() {
    return (
        <div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
          <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
          >
            <TabBar.Item
                title="关于我们"
                key="Life"
                icon={<Icon type="schedule" style={{ fontSize: 22 }}/>}
                selectedIcon={<Icon type="schedule" style={{ fontSize: 22, color:'#08c' }}/>}
                selected={this.state.selectedTab === 'info'}
                onPress={() => {
                  setTitle("关于我们");
                  this.setState({
                    selectedTab: 'info',
                  });
                }}
                data-seed="logId"
            >
                <InfoPage/>
            </TabBar.Item>
            <TabBar.Item
                icon={<Icon type="user" style={{ fontSize: 22 }}/>}
                selectedIcon={<Icon type="user" style={{ fontSize: 22, color: '#08c' }}/>}
                title="即刻加入"
                key="my"
                selected={this.state.selectedTab === 'join'}
                onPress={() => {
                  setTitle("即刻加入");
                  this.setState({
                    selectedTab: 'join',
                  });
                }}
            >
              <SubmitFormWrapper/>
            </TabBar.Item>
          </TabBar>
        </div>
    );
  }
}

export default MainPage;