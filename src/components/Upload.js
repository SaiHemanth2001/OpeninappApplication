import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaPoll } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";

const Upload = () => {
    return (
        <div>
            <div className='leftPart'>
                <div className='logo1'>
                    <span> <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z" fill="#605BFF" />
                    </svg> </span>{'\u00A0\u00A0'}<h5 className='title1'>Base</h5>
                </div>
                <a href='/upload' className='options'><RxDashboard /> Dashboard</a>
                <a href='/upload' className='options1'><FaPoll /> Upload</a>
                <a href='/upload' className='options2'><svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7872 7.47423C21.6518 7.61908 21.4681 7.70185 21.2747 7.70185C20.559 7.70185 19.9787 8.32263 19.9787 9.07792C19.9787 9.83838 20.5522 10.4561 21.2611 10.4643C21.6605 10.4685 22 10.7664 22 11.1938V13.8476C22 16.0814 20.3075 17.893 18.2186 17.893H15.0658C14.7398 17.893 14.4758 17.6106 14.4758 17.2619V15.0271C14.4758 14.5925 14.1567 14.2511 13.7505 14.2511C13.354 14.2511 13.0251 14.5925 13.0251 15.0271V17.2619C13.0251 17.6106 12.7611 17.893 12.4362 17.893H5.78143C3.70213 17.893 2 16.0824 2 13.8476V11.1938C2 10.7664 2.33946 10.4685 2.73888 10.4643C3.44874 10.4561 4.02128 9.83838 4.02128 9.07792C4.02128 8.34333 3.46035 7.78462 2.72534 7.78462C2.53191 7.78462 2.34816 7.70185 2.21277 7.557C2.07737 7.41215 2 7.21557 2 7.00865V4.32894C2 2.09826 3.706 0.273159 5.7911 0.273159H12.4362C12.7611 0.273159 13.0251 0.555615 13.0251 0.904288V3.55296C13.0251 3.97716 13.354 4.32894 13.7505 4.32894C14.1567 4.32894 14.4758 3.97716 14.4758 3.55296V0.904288C14.4758 0.555615 14.7398 0.273159 15.0658 0.273159H18.2186C20.3075 0.273159 22 2.08377 22 4.31859V6.92587C22 7.1328 21.9226 7.32938 21.7872 7.47423ZM13.7505 12.2439C14.1567 12.2439 14.4758 11.8921 14.4758 11.4679V7.32938C14.4758 6.90518 14.1567 6.55341 13.7505 6.55341C13.354 6.55341 13.0251 6.90518 13.0251 7.32938V11.4679C13.0251 11.8921 13.354 12.2439 13.7505 12.2439Z" fill="#030229" />
                    </g>
                </svg>{'\u00A0'}
                    Invoice</a>
                <a href='/upload' className='options3'><IoMdListBox /> Schedule</a>
                <a href='/upload' className='options4'><SlCalender /> Calender</a>
                <a href='/upload' className='options5'><IoIosNotifications /> Notification</a>
                <a href='/upload' className='options6'><IoMdSettings /> Settings</a>
            </div>
            <div className='rightPart'>
                <h4 className='uploadtitle'> Upload CSV</h4>
                <div className='account'>
                    <IoMdNotificationsOutline style={{ width: '25px', height: '25px' }} />{'\u00A0\u00A0\u00A0\u00A0'}
                    <RiAccountCircleFill style={{ width: '25px', height: '25px' }} />
                </div>
                <div className='browse'>
                    <div className='excelbrowse'>
                        <SiMicrosoftexcel style={{ width: '35px', height: '35px', position: 'relative', top: '50px' }} />
                        <p className='drop'>Drop your excel sheet here or <a href='/upload' style={{ color: '#605BFF' }}>browse</a></p>
                    </div>
                    <a className='uploadbutton' href='/uploaded'><MdOutlineFileUpload /> Upload</a>
                </div>
            </div>
        </div>
    )
}

export default Upload