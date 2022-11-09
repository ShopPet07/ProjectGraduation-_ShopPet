import React from "react";
import MyPostItem from "../../../components/MyPostItem/MyPostItem";

import "./mypost.scss";

const MyPost = () => {
  return (
    <div className="MyPost">
      <div className="mypost-top">
        <div className="mypost-top-text">
          <h6 className="mypost-top-heading ">My Post</h6>
          <p className="mypost-top-desc">
            Acount users can assess and review risks, questionnaries, data leaks
            and identify breaches
          </p>
        </div>
      </div>
      <div className="mypost-primary">
        <MyPostItem
          image="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445"
          title="TrongPhucs"
          desc="TrongPhucs is dog"
          user="ManhHys"
          number="+84892922"
          status="true"
          species="species"
          price={1200}
        />
        <MyPostItem
          image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Dog-main_gdcdzd.jpg"
          title="DienThanh"
          desc="DienThanh is dog"
          user="ManhHys"
          number="+848972922"
          status="true"
          species="species"
          price={1200}
        />
        <MyPostItem
          image="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445"
          title="TrongPhucs"
          desc="TrongPhucs is dog"
          user="ManhHys"
          number="+84892922"
          status="true"
          species="species"
          price={1200}
        />
        <MyPostItem
          image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Dog-main_gdcdzd.jpg"
          title="DienThanh"
          desc="DienThanh is dog"
          user="ManhHys"
          number="+848972922"
          status="true"
          species="species"
          price={1200}
        />
        <MyPostItem
          image="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445"
          title="TrongPhucs"
          desc="TrongPhucs is dog"
          user="ManhHys"
          number="+84892922"
          status="true"
          species="species"
          price={1200}
        />
        <MyPostItem
          image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Dog-main_gdcdzd.jpg"
          title="DienThanh"
          desc="DienThanh is dog"
          user="ManhHys"
          number="+848972922"
          status="true"
          species="species"
          price={1200}
        />
        <MyPostItem
          image="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445"
          title="TrongPhucs"
          desc="TrongPhucs is dog"
          user="ManhHys"
          number="+84892922"
          status="true"
          species="species"
          price={1200}
        />
        <MyPostItem
          image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Dog-main_gdcdzd.jpg"
          title="DienThanh"
          desc="DienThanh is dog"
          user="ManhHys"
          number="+848972922"
          status="true"
          species="species"
          price={1200}
        />
        <MyPostItem
          image="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445"
          title="TrongPhucs"
          desc="TrongPhucs is dog"
          user="ManhHys"
          number="+84892922"
          status="true"
          species="species"
          price={1200}
        />
        <MyPostItem
          image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Dog-main_gdcdzd.jpg"
          title="DienThanh"
          desc="DienThanh is dog"
          user="ManhHys"
          number="+848972922"
          status="true"
          species="species"
          price={1200}
        />
      </div>
    </div>
  );
};

export default MyPost;
