import {
  AccountCircle,
  NotificationsNoneOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import React from "react";

const Header = () => {
  return (
    <div className="h-16 w-full flex items-center justify-between p-10">
      <div className="flex items-center gap-4">
        <AccountCircle color="warning" fontSize="large" />
        <PersonOutlined />
        <NotificationsNoneOutlined />
      </div>
      <div className="font-bold text-blue-900 md:!text-3xl text-xs w-fit text-nowrap">Deadly viruses</div>
    </div>
  );
};

export default Header;
