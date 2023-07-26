import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const paths = [
        {
            tag: "About",
            url: "/about"
        },
        {
            tag: "Pricing",
            url: "/pricing"
        }
    ]

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {paths.map(path =>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <Link to={path.url} className="flex items-center">
                        {path.tag}
                    </Link>
                </Typography>
            )}
        </ul>
    );

    return (
        <Navbar className="mx-auto mt-5 max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 sticky rounded-t-lg shadow-lg">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link to="/" className="flex gap-2 items-center mr-4 cursor-pointer py-1.5">
                    <img
                        src="/logo.svg"
                        alt="logo"
                        className="w-14 h-14 scale-125 transition duration-500"
                    />
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                    <Link to='/signup'>
                        Get a Link
                    </Link>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>

                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <Link to='/signup'>
                            Get a Link
                        </Link>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}

export default Header;