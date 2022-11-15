import React from "react";
import { Link } from "react-router-dom";
import Pic1 from "../../Assests/xkiu-logo.png.pagespeed.ic.h5riQQiY17.webp"
import './login.css'
// import 'antd/dist/antd.css';
// import { CopyrightOutlined } from '@ant-design/icons'

const Login = () => {
    return (
        <div>
            <form>
                <fieldset>
                    <div className="kiu-img">
                        <img src={Pic1} alt="kiu-pic" />
                    </div>
                    <div className="download-btn">
                        <h2>KIU LMS</h2>
                        <button>Download App</button>
                    </div>
                    <div className="flex-start">
                        <p>Registration No. / Email</p>
                        <input type="text" placeholder="YYYY-KIU*****" />
                    </div>
                    <div className="flex-start">
                        <p>password</p>
                        <input type="text" placeholder="Password" />
                    </div>
                    <div className="inline">
                        <div className="checkpoint">
                            <input type="checkbox" />
                            <p>Remeber me</p>
                        </div>
                        <div className="forget">
                            <button>Forget password?</button>
                        </div>
                    </div>
                    <div className="btn">
                        <button>
                            <Link to="/home">
                                login
                            </Link>
                        </button>
                    </div>
                    <div className="inline">
                        <div>
                            <p>Track your problem</p>
                        </div>
                        <div >
                            <p>Need Assistance</p>
                        </div>
                    </div>
                </fieldset>
                <p style={{ textAlign: 'center' }}>2021 karakurm International University</p>
            </form>
        </div>
    )
}
export default Login;