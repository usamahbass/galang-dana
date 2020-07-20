import React, { useState } from "react";
import { PageHeader, Button } from "antd";
import { Link } from "react-router-dom";
import GalangDana from "../galangdana";
import { Consumer } from "../../context/context";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="site-page-header-ghost-wrapper">
      <Consumer>
        {({ handleGalang, makeGalang }) => (
          <>
            <PageHeader
              ghost={true}
              title={
                <img
                  src={require("../../assets/svg/donation.svg")}
                  style={{ width: 50, height: "auto" }}
                  alt="raksyebisa"
                />
              }
              subTitle={
                <Link to="/" style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                  Raksyebisa
                </Link>
              }
              extra={[
                <Button key="1" type="primary" onClick={() => setVisible(true)}>
                  Galang Dana Sekarang
                </Button>,
              ]}
            ></PageHeader>
            <GalangDana
              visible={visible}
              title="Galang Dana"
              onCancel={() => setVisible(false)}
              onChange={handleGalang}
              onOk={makeGalang}
            />
          </>
        )}
      </Consumer>
    </div>
  );
};

export default Navbar;
