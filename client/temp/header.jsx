import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "./style.css";

import { Modal } from "antd";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Logo from "../../assets/EzeLuxe Logo.png";
import { useLocation } from "react-router-dom";

function NavList() {
  return (
    <List className="mt-4 mb-6  p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium text-black"
      >
        <ListItem className="flex items-center text-[16px] focus:text-[#0971BA] text-[#C0C0C0] capitalize gap-2 py-2 pr-4">
          <Link to="/" className="focus:text-[#0971BA]">
            Home
          </Link>{" "}
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium text-black"
      >
        <ListItem className="flex items-center text-[16px]  focus:text-[#0971BA] text-[#C0C0C0] font-exo  gap-2 py-2 pr-4">
          <Link to="/service" className="focus:text-[#0971BA]">
            Services
          </Link>
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium text-black"
      >
        {/* <ListItem className="flex items-center text-[16px] text-[#C0C0C0] focus:text-[#0971BA] font-exo  gap-2 py-2 pr-4">
          <Link to="/checkout" className="focus:text-[#0971BA]">
            Products
          </Link>
        </ListItem> */}
      </Typography>
    </List>
  );
}

export function Headerbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { pathname } = useLocation();
  const hideSearchAndIcons = [
    "/",
    "/login",
    "/signup",
    "/forgetpassword",
    "/createnewpassword",
    "/enterotp",
  ];
  const [showmodel, setShowModel] = useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleOpenModal = () => {
    setShowModel(true);
  };

  const handleCloseModal = () => {
    setShowModel(false);
  };

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-5 shadow-none border-none rounded-none">
      <div className="flex items-center justify-between  text-blue-gray-900">
        <div className="flex gap-7">
          <Link to="/"><img src={Logo} alt="EzeLuxe" className="w-44 h-10 logo" /></Link>
          <div className="hidden lg:block">
            <NavList />
          </div>
        </div>
        <div className="w-[%]">
          {hideSearchAndIcons.includes(pathname) ? (
            <div className="relative flex w-full md:ml-72  gap-5 md:w-max">
              <div className=" ml-5 bg-[#7BC14433] rounded-2xl">
                <Input
                  type="search"
                  containerProps={{
                    className: "min-w-[60px]",
                  }}
                  className="w-full h-10  rounded-2xl px-10 font-exo text-black bg-[#7BC14433] "
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="!absolute left-8  top-[13px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                    fill="#323131"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>

        {hideSearchAndIcons.includes(pathname) ? (
          <div className="hidden gap-2 lg:flex">
            {/* <Button
             variant="text"
             className="text-[#7BC144] font-exo font-normal capitalize text-[18px] border-2 border-[#7BC144] "
             size="sm"
             color="blue-gray"
           >
             Explore Services
           </Button> */}
            {/* <Button
             variant="gradient"
             className="text-white font-normal bg-[#0971BA] capitalize font-exo text-[18px] px-8 shadow-none"
             size="sm"
           >
           Explore Services
           </Button> */}
          </div>
        ) : (
          <div className="hidden gap-2 lg:flex">
            <Link


              className="text-white font-normal bg-[#0971BA] capitalize font-exo text-[18px] px-8 shadow-none dropdowm"

            >
              Cleaning Services
            </Link>
            <Link
              // onClick={() => setShowModel(true)}
              // variant="gradient"
              className="text-white font-normal bg-[#0971BA] capitalize font-exo text-[18px] px-8 shadow-none dropdowm"
              // size="sm"
            >
              Moving Services
            </Link>
          </div>
        )}

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden text-black -mt-5 "
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 -ml-2 w-6 " strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 -ml-3 w-6 " strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          {/* <Button
            variant="text"
            className="text-[#7BC144] font-exo font-normal capitalize text-[18px] border-2 border-[#7BC144] "
            size="sm"
            color="blue-gray"
          >
            Book Now
          </Button> */}
          <Button
            variant="gradient"
            className="text-white font-normal bg-[#0971BA] capitalize font-exo text-[18px] px-8 shadow-none"
            size="sm"
          >
            Explore Services
          </Button>
        </div>
      </Collapse>
      <div className="">
        <Modal
          visible={showmodel}
          footer={null}
          onCancel={() => setShowModel(false)}
          className="w-full max-w-lg mx-auto"
        >
          <ul className="list-disc list-inside">
            <li className="mb-4">
              <span className="font-bold text-lg">Cleaning Services</span>
              <ul className="list-disc list-inside ml-5">
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/express-cleaning"
                  >
                    Express Cleaning
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/standard-cleaning"
                  >
                    Standard Cleaning
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/deep-cleaning"
                  >
                    Deep/Spring Cleaning
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/short-term-housekeeping"
                  >
                    Short Term Housekeeping
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/laundry-services"
                  >
                    Laundry Services
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/dry-cleaning-services"
                  >
                    Dry Cleaning Services
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/a-la-carte-services"
                  >
                    A La Carte Services
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/white-glove-cleaning"
                  >
                    White Glove Cleaning
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/custom-cleaning-plans"
                  >
                    Custom Cleaning Plans
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/high-end-appliance-cleaning"
                  >
                    High End Appliance Cleaning
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/post-event-cleaning"
                  >
                    Post Event Cleaning
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/move-in-out-cleaning"
                  >
                    Move In and Out Cleaning
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/construction-cleaning"
                  >
                    Construction Cleaning
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/snow-removal"
                  >
                    Snow Removal
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/tree-branch-clearing"
                  >
                    Tree & Branch Clearing
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/assemble-disassemble"
                  >
                    Assemble and Disassemble
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/decluttering"
                  >
                    Decluttering
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/hoarding"
                  >
                    Hoarding
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/landscaping"
                  >
                    Landscaping
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-bold text-lg">Moving Services</span>
              <ul className="list-disc list-inside ml-5">
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/residential-moving"
                  >
                    Residential Moving
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/commercial-moving"
                  >
                    Commercial Moving
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/move-in-out"
                  >
                    Move In and Out
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/white-glove-moving"
                  >
                    White Glove Moving
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/art-antiques-handling"
                  >
                    Art and Antiques Handling
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/concierge-moving"
                  >
                    Concierge Moving Services
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/vehicle-transport"
                  >
                    Vehicle Transport
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/premium-storage"
                  >
                    Premium Storage Solutions
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/relocation-assistance"
                  >
                    Relocation Assistance
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/junk-removal"
                  >
                    Junk Removal
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/hoarding"
                  >
                    Hoarding
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/services/small-delivery-moving"
                  >
                    Small Delivery Moving
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </Modal>
      </div>
    </Navbar>
  );
}
