import React from "react";
import TopSeller from "./TopSeller";

function MainRightBottom() {
  return (
    <div className="bottom_card">
      <div className="bottomCard_name">
        <h2>Top Seller</h2>
        <a href="#">Veiw More</a>
      </div>
      {TopSeller &&
        TopSeller.map((seller) => (
          <div className="topSeller" key={seller?.id}>
            <div className="topSellerImg">
              <img src={seller?.imgSrc} alt="" />
            </div>
            <p className="topSellerName">
              {seller?.seller_name} <span>{seller?.username}</span>
            </p>
            <a href="#" className="button1 btn">
              Follow
            </a>
          </div>
        ))}
    </div>
  );
}

export default MainRightBottom;
