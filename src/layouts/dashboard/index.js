import React from "react";
import 'antd/dist/antd.css';
import {
    BookOutlined,
    CalendarOutlined,
    HomeOutlined,
    MacCommandOutlined,
    BoxPlotOutlined,
    UserOutlined,
    ClockCircleOutlined,
    ContainerOutlined
} from "@ant-design/icons";
import Card from "../../components/cards";

const Dashoard = () => {
    const cardData = [
        {
            icon: <HomeOutlined />,
            caption: "Noticeboard",
            bg: '#DC143C'
        },
        {
            icon: <CalendarOutlined />,
            caption: "Academic calender",
            bg: '#FCA506'
        },
        {
            icon: <BookOutlined />,
            caption: "Active Courses",
            bg: '#093B94'
        },
        {
            icon: <MacCommandOutlined />,
            caption: "Timetable",
            bg: '#093b94'
        },
        {
            icon: <ClockCircleOutlined />,
            caption: "Arrange classes",
            bg: '#673AB7'
        },
        {
            icon: <BoxPlotOutlined />,
            caption: "libarary Resourses",
            bg: '#87C334'
        },
        {
            icon: <UserOutlined />,
            caption: "Profile",
            bg: '#FCA508'
        },
        {
            icon: <ContainerOutlined />,
            caption: "Logouts",
            bg: '#EA4335'
        },
    ]
    return (
        <div style={{ width: "100%" }}>
            <div style={{ display: 'flex', boxSizing: 'border-box', flexWrap: "wrap" }}>
                {
                    cardData.map((data) => {
                        return (
                            <Card bg={data.bg} icon={data.icon} caption={data.caption} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Dashoard;