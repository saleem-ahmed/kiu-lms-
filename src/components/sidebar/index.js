import React from "react";
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { MailOutlined, BookOutlined, CalendarOutlined, BoxPlotOutlined, FormOutlined, ContainerOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class Sidebars extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  //   changeTheme = value => {
  //     this.setState({
  //       theme: value ? 'dark' : 'light',
  //     });
  //   };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{
            width: 246,
            fontWeight: 700,
            height: "100vh"
          }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Menu.Item key="sub1" icon={<HomeOutlined style={{ color: 'lightblue' }} />}>
            <Link to="/">
            Dashoard
            </Link>
          </Menu.Item>
          <Menu.Item key="sub2" icon={<MailOutlined />}>
          <Link to="/noticeboard">
                Noticeboard
              </Link>
            </Menu.Item>
          <SubMenu key="sub3" icon={<ContainerOutlined />} title="Courses">
            <Menu.Item key="1">
              <Link to="/active">
                Active
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/finnal">
            Finalized
              </Link>
              </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<BookOutlined />} title="Timetable">
            <Menu.Item key="3">
            <Link to="/main">
                Main Timetable
              </Link>
              Main</Menu.Item>
            <Menu.Item key="4">
            <Link to="/arrange">
            Arranged Classes
              </Link>
              </Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<CalendarOutlined />} title="Finance">
            <Menu.Item key="5">
            <Link to="/notification">
            Notification
              </Link>
              </Menu.Item>
            <Menu.Item key="6">
            <Link to="/generateChallan">
            Generate Challan
              </Link>
              </Menu.Item>
            <Menu.Item key="7">
            <Link to="/uploadChallan">
            Upload Challan
              </Link>
              </Menu.Item>
            <Menu.Item key="8">
            <Link to="/feeHistory">
            Fee History
              </Link>
              </Menu.Item>
            <Menu.Item key="9">
            <Link to="/paymentSummary">
            Payment Summary
              </Link>
              </Menu.Item>
            <Menu.Item key="10">
            <Link to="/printChallan">
            Print Challan
              </Link>
              Print Challan</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" icon={<SettingOutlined />} title="Examination">
            <Menu.Item key="11">
            <Link to="/transcript">
            Transcript
              </Link>
              </Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" icon={<FormOutlined />} title="Survey">
            <Menu.Item key="12">
            <Link to="/graduating">
            Graduating Students
              </Link>
              </Menu.Item>
          </SubMenu>
          <Menu.Item key="12" icon={<BoxPlotOutlined />}>
          <Link to="/complaints">
          Complaints
              </Link>
            </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default Sidebars;