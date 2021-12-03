import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {

    const [cookies, setCookies] = useCookies();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let url = "http://localhost:8080/student/id/" + cookies.username;
            let config = {
                "headers" : {
                    "Authorization": "Bearer " + cookies.token
                }
            }
            // console.log(url + cookies.token);
            let res = await axios.get(url, config).catch((err) => console.log(err));
            console.log(res);
            setCookies("id", res, {path: '/'});
            var dets = await axios.get("http://localhost:8080/student/" + res.data, {
                headers: {
                    Authorization: "Bearer " + cookies.token
                }
            });
            console.log(dets.data);
            setUser(dets.data);
        };
        fetchData();
    }, []);
    return (
        <>
            <h1 className="page-title-sub" id="profile-title">Profile</h1>
            <div className="profile-page">
                <img src={"data:image/png;base64," + user.pfp} alt="profile picture" className="pfp-profile-page" />
                <p id="profile-name">{user.username}</p>
                <a id="profile-mail" href={"mailto:" + user.email} target="_blank">{user.email}</a>
                <div className="tag-box">
                    <ul>
                        {user.tags && user.tags.map((tag, index) => {
                            return (
                                <li key={index} className="tags-list"><p className="tags-text">{tag.tagName}</p></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Profile;
