import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Switch,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import colorStore from "../Store/ThemeColorStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

function HandleSwitch(colorMode: string, setColorMode: Function) {
  if (colorMode === "light") {
    setColorMode("dark");
    colorStore.handleThemeColorSwitchClick("dark");
  } else {
    setColorMode("light");
    colorStore.handleThemeColorSwitchClick("light");
  }
  //   setColorMode(colorMode === "gray" ? "white" : "gray");
  //   colorStore.handleThemeColorSwitchClick(colorMode);
}

// nav list menu
const navListMenuItems = [
  {
    title: "Email",
    description: "let's talk about new opportunities!",
    link: "mailto:tonyhunkim@gmail.com.com",
  },
  {
    title: "Linkedin",
    description: "let's get connected!",
    link: "https://www.linkedin.com/in/tony-kim-291608133/",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListMenuItems.map(({ title, description, link }) => (
    <Link to={link} key={title}>
      <MenuItem>
        <Typography
          variant="h6"
          className={`mb-1 ${colorStore.themeColorClass}--text`}
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          className={`font-normal ${colorStore.themeColorClass}--text`}
        >
          {description}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem
              {...triggers}
              className={`hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full ${colorStore.themeColorClass}--text`}
            >
              <EnvelopeIcon className="h-[18px] w-[18px] font-roboto font-normal" />
              Let's Connect
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className={`hidden w-[24rem] grid-cols-7 gap-3 overflow-visible lg:grid ${colorStore.themeColorClass} border-none`}
        >
          <ul className="col-span-12 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem
        className={`flex items-center gap-2 text-blue-gray-900 lg:hidden ${colorStore.themeColorClass}--text`}
      >
        <EnvelopeIcon className="h-[18px] w-[18px] font-roboto font-normal" />
        Let's Connect
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "About",
    icon: UserCircleIcon,
    href: "/",
  },
  {
    label: "Projects",
    icon: Square3Stack3DIcon,
    href: "/projects",
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, href }, key) => (
        <Link to={href}>
          <Typography
            key={label}
            as="a"
            variant="small"
            className={`font-roboto font-normal ${colorStore.themeColorClass}--text`}
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {label}
            </MenuItem>
          </Typography>
        </Link>
      ))}
      <NavListMenu />
    </ul>
  );
}
const ComplexNavbar = observer(() => {
  const [colorMode, setColorMode] = React.useState("light");
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar
      className={`fixed-navbar mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 ${colorStore.themeColorClass}--nav fixed left-1/2 z-30`}
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Avatar
          variant="circular"
          size="sm"
          alt="Tony H. Kim"
          className={`border ${colorStore.themeColorClass}--border p-0.5`}
          src="https://media.licdn.com/dms/image/C4E03AQHs6MnWwbyQXg/profile-displayphoto-shrink_800_800/0/1623529640951?e=1689811200&v=beta&t=ph7jQGLP2Zr7xFYirVs-iySjpNSVR9JMrRCC6KbWxKg"
        />
        <Typography
          as="a"
          href="/"
          className={`mr-4 ml-2 cursor-pointer py-1.5 font-roboto font-normal ${colorStore.themeColorClass}--text`}
        >
          Tony H. Kim
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <div className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto font-normal font-roboto">
          <Switch
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
            id="dark-mode"
            color="blue-gray"
            onClick={() => HandleSwitch(colorMode, setColorMode)}
            checked={colorStore.checked}
          />
          <Typography
            className={`ml-2 font-roboto  ${colorStore.themeColorClass}--text`}
            as="a"
          >{`${
            colorMode === "light" ? "Light Mode" : "Dark Mode"
          }`}</Typography>
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
});

export default ComplexNavbar;
