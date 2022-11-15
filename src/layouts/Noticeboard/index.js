import React from "react";
import { RollbackOutlined, UserOutlined } from "@ant-design/icons";
import './noticeboard.css';

const Noticeboard = () => {
    return(
        <div>
            <div className="noticeboard">
                <div className="block">
                    <h2>Noticeboard</h2>
                    <p>Latest Notices</p>
                </div>
                <div className="back">
                    <RollbackOutlined />
                </div>
            </div>
            <div className="mainBox">
                <div className="box">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime impedit sit magni nulla totam, cumque at ex culpa debitis quae, quod dicta error ab commodi amet, distinctio sapiente alias laborum cum ad animi perspiciatis iure adipisci officia. Cupiditate quasi, expedita perferendis, porro alias modi esse impedit incidunt deserunt amet, eos in at vel blanditiis reprehenderit vero! Eligendi, nemo? Et, aliquid doloremque fugit deserunt officia odio quibusdam nostrum corporis, tempora minus obcaecati cumque ab porro sapiente? Explicabo, veniam a voluptas fugiat aliquid natus officia consequatur, est fuga maiores doloribus voluptate, nisi cupiditate? Itaque provident ullam animi quae, laboriosam accusamus nobis voluptatibus.
                    </p>

                    <p><UserOutlined/>Dr. Aftab Ahmed Khan </p>
                </div>
                <div className="box1">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime impedit sit magni nulla totam, cumque at ex culpa debitis quae, quod dicta error ab commodi amet, distinctio sapiente alias laborum cum ad animi perspiciatis iure adipisci officia. Cupiditate quasi, expedita perferendis, porro alias modi esse impedit incidunt deserunt amet, eos in at vel blanditiis reprehenderit vero! Eligendi, nemo? Et, aliquid doloremque fugit deserunt officia odio quibusdam nostrum corporis, tempora minus obcaecati cumque ab porro sapiente? Explicabo, veniam a voluptas fugiat aliquid natus officia consequatur, est fuga maiores doloribus voluptate, nisi cupiditate? Itaque provident ullam animi quae, laboriosam accusamus nobis voluptatibus.
                    </p>

                    <p><UserOutlined/>Dr. Aftab Ahmed Khan </p>
                </div>
                <div className="box2">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime impedit sit magni nulla totam, cumque at ex culpa debitis quae, quod dicta error ab commodi amet, distinctio sapiente alias laborum cum ad animi perspiciatis iure adipisci officia. Cupiditate quasi, expedita perferendis, porro alias modi esse impedit incidunt deserunt amet, eos in at vel blanditiis reprehenderit vero! Eligendi, nemo? Et, aliquid doloremque fugit deserunt officia odio quibusdam nostrum corporis, tempora minus obcaecati cumque ab porro sapiente? Explicabo, veniam a voluptas fugiat aliquid natus officia consequatur, est fuga maiores doloribus voluptate, nisi cupiditate? Itaque provident ullam animi quae, laboriosam accusamus nobis voluptatibus.
                    </p>

                    <p><UserOutlined/>Dr. Aftab Ahmed Khan </p>
                </div>

            </div>
        </div>
    )
}
export default Noticeboard;