import { BookOutlined, SettingOutlined, ShoppingCartOutlined, UserAddOutlined } from '@ant-design/icons';
import { Collapse, Space } from 'antd';

const FAQ = () => {

const { Panel } = Collapse;

return(
  <Space direction="vertical">
    <Collapse collapsible="header" defaultActiveKey={['1']}>
      <Panel header="This panel can only be collapsed by clicking text" key="1">
        <div className="icons">
          <UserAddOutlined/>
          <BookOutlined/>
          <SettingOutlined/>
          <ShoppingCartOutlined/>

        </div>
      </Panel>
    </Collapse>
    <Collapse collapsible="header" defaultActiveKey={['1']}>
      <Panel header="This panel can only be collapsed by clicking text" key="1">
        <div className="icons">
          <UserAddOutlined/>
          <BookOutlined/>
          <SettingOutlined/>
          <ShoppingCartOutlined/>

        </div>
      </Panel>
    </Collapse>
    <Collapse collapsible="header" defaultActiveKey={['1']}>
      <Panel header="This panel can only be collapsed by clicking text" key="1">
        <div className="icons">
          <UserAddOutlined/>
          <BookOutlined/>
          <SettingOutlined/>
          <ShoppingCartOutlined/>

        </div>
      </Panel>
    </Collapse>
    
  </Space>
  )
}
export default FAQ;