import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";

export default function CardProfile() {
  const [state, dispatch] = useContext(UserContext);

  const ImgProfile = "https://avatars.githubusercontent.com/u/44697757?v=4";

  return (
    <div className="card-profile shadow">
      <div className="card-profile-first text-center">
        <img src={ImgProfile} className="img-profile" />
        <div className="name">{state?.user?.name}</div>
        <div className="title">Fullstack Developer</div>
      </div>
      <div className="card-profile-second px-3 pt-2">
        <div className="group-profile">
          <div className="title">Email</div>
          <div className="content w-100">
            {state?.user?.email ? state.user.email : "-"}
          </div>
        </div>
        <div className="group-profile">
          <div className="title">Gender</div>
          <div className="content">-</div>
        </div>
        <div className="group-profile">
          <div className="title">Phone</div>
          <div className="content">-</div>
        </div>
        <div className="group-profile pb-3">
          <div className="title">Address</div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
}
