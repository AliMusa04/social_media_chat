import { Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance from "../../apicall";
import Leftsidebar from "../../components/LeftSidebar/Leftsidebar";
import Mainsidebar from "../../components/MainSidebar/Mainsidebar";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import RightProfile from "../../components/RightBarProfile/RightProfile";
import Rightsidebar from "../../components/RightSidebar/Rightsidebar";
import Share from "../../components/Share/Share";
import { BASE_URL } from "../../consts";
import { hideLoad, showLoad } from "../../redux/slice/loadingSlice/loadSlice";
import style from "./profile.module.css";

const Profile = () => {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();
  const loading = useSelector((state) => state.loading.value);
  const userAdmin = useSelector((state) => state.users.value);

  const fetchUser = async () => {
    dispatch(showLoad());
    const res = await axios
      .get(`http://localhost:8080/api/users/getuser/${params.username}`)
      .then((res) => setUser(res.data.data));
    dispatch(hideLoad());
  };
  useEffect(() => {
    fetchUser();
  }, [params.username]);

  // const handleSubmit = async (
  //   e,
  //   coverFile,
  //   profFile,
  //   descRef,
  //   cityRef,
  //   fromRef,
  //   relationInp
  // ) => {
  //   e.preventDefault();

  //   const newPost = {
  //     // reltionship: relationInp,
  //   };
  //   if (coverFile) {
  //     newPost.coverPic = coverFile;
  //     try {
  //       console.log("Succsess");
  //     } catch (err) {}
  //   } else if (profFile) {
  //     newPost.profilePic = profFile;
  //     try {
  //       console.log("Succsess");
  //     } catch (err) {}
  //   } else if (descRef) {
  //     newPost.userDesc = descRef.current.value;
  //     try {
  //       console.log("Succsess");
  //     } catch (err) {}
  //   } else if (cityRef) {
  //     newPost.city = cityRef.current.value;
  //     try {
  //       console.log("Succsess");
  //     } catch (err) {}
  //   } else if (fromRef) {
  //     newPost.from = fromRef.current.value;
  //     try {
  //       console.log("Succsess");
  //     } catch (err) {}
  //   } else if (relationInp) {
  //     newPost.reltionship = relationInp;
  //     try {
  //       console.log("Succsess");
  //     } catch (err) {
  //       toast.success("Already updated");
  //     }
  //   }
  //   try {
  //     await axiosInstance.put(`${BASE_URL}/users/${userAdmin._id}`, newPost);
  //     fetchUser();
  //     toast.success("Updated");
  //   } catch (err) {
  //     toast.error("No update");

  //     console.log(err.message);
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className={style.profile_page_cont}>
        <Leftsidebar />
        <div className={style.profile_page_right_side}>
          <div className={style.profile_page_top_pics}>
            <div className={style.profile_page_cover_div}>
              <img
                className={style.profile_page_cover}
                src={user?.coverPic || "/assets/noCoverPic2.jpg"}
                alt=""
              />
            </div>
            <div className={style.profile_page_pics_user}>
              <img
                className={style.profile_page_pics_img}
                src={
                  user?.profilePic ? user?.profilePic : "/assets/NoProfImg.webp"
                }
                alt=""
              />
            </div>
            <div className={style.profile_page_username_desc}>
              <h3>{user?.username}</h3>
              <p>{user?.userDesc ? user?.userDesc : "Write about yourself"}</p>
            </div>
          </div>
          <div className={style.profile_page_right_bottom_section}>
            <Mainsidebar username={user.username} id={user._id} />
            <RightProfile user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
