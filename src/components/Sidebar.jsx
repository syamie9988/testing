import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "./theme";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "./images/logo.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[200],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SubMenuItem = ({ title, to, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      style={{
        color: colors.grey[200],
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          
          background: `#868dfb !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `#${colors.primary[100]} !important`,
        },
        "& .pro-menu-item.active": {},
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="left" alignItems="left">
                <img
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  alt="logo"
                  width="250px"
                  height="50px"
                  src={Logo}
                />
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[200]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  User
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>

            <Typography
              variant="h6"
              color={colors.grey[200]}
              sx={{ m: "15px 0 5px 20px" }}
            ></Typography>
            <SubMenu
              title="Operations"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{ color: "black" }} 
            >
            <SubMenuItem
               title="Masterlist Worker"
               to="/Masterlist"
               icon={<KeyboardArrowRightIcon />}
                />
            </SubMenu>

<SubMenu
  title="Accounts"
  icon={<ReceiptOutlinedIcon  />} 
  style={{ color: "black" }} 
>
<SubMenuItem
    title="Attendance"
    to="/General"
    icon={<KeyboardArrowRightIcon />}
  />
  
  <SubMenuItem
    title="Billing"
    to="/Customer_Bill"
    icon={<KeyboardArrowRightIcon />}
  />
  
</SubMenu>

<Typography
  variant="h6"
  color={colors.grey[300]}
  sx={{ m: "15px 0 5px 20px" }}
></Typography>

           
            
            <Item
              title="Logout"
              to="/"
              icon={<LogoutIcon />}
              
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;