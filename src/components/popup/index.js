import React, { useState } from 'react';
// import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { UserAddOutlined,SmileOutlined,KeyOutlined,LogoutOutlined } from "@ant-design/icons";
import { Popover, Button } from 'antd';
const Popup = () => {


const content = (
  <div>
  <ul type="none">
    <li style={{color:'violet'}}><SmileOutlined /> Veiw Profile</li>
    <li style={{color:'teal'}}><KeyOutlined />Change Password</li>
    <li style={{color:'bisque'}}><LogoutOutlined />Logout</li>
  </ul>
</div>
);
const title = (
  <div style={{height:'4rem',display:'flex',alignItems:'end',backgroundColor:'blue',padding:'5px 5px'}}>
      <h3 style={{color:'white'}}>Student Name</h3>
  </div>
);


return(
  <div style={{margin:'0px',padding:'5px 5px' ,backgroundColor: 'blue', borderRadius:'50%',color:'white'}}>
    <Popover content={content} title={title} trigger="click">
      <UserAddOutlined/>
    </Popover>
  </div>
)
  
}
export default Popup;