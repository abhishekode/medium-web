import ToggleTheme from "@/components/Layout/ToogleTheme";
import Link from "next/link";
import React from "react";
import {
  FcAbout,
  FcContacts,
  FcHome,
  FcServices,
} from "react-icons/fc";
import { TbLogout } from "react-icons/tb";

const AdminNav = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/admin", icons: <FcHome className="text-2xl" /> },
    {
      id: 2,
      name: "Blog",
      path: "/admin/blog",
      icons: <FcAbout className="text-2xl" />,
    },
    {
      id: 3,
      name: "Users",
      path: "/admin/users",
      icons: <FcServices className="text-2xl" />,
    },
    {
      id: 4,
      name: "Category",
      path: "/admin/category",
      icons: <FcContacts className="text-2xl" />,
    },
  ];

  return (
    <div className="flex h-screen fixed w-16 flex-col justify-between border-e bg-gray-100">
      <div>
        <div className="flex h-16 w-16 items-center justify-center">
          <Link href='/'>
            <span className="rounded-lg bg-gray-100 py-2 text-center cursor-pointer w-full text-xs text-gray-600">
              Crystal
            </span>
          </Link>
        </div>

        <div className="border-t border-gray-100">
          <div className="px-2">
            <ul className="space-y-3 border-t border-gray-100 pt-4">
              {navLinks.map((link) => (
                <li key={link.id} className="">
                  <Link
                    href={link.path}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    {link.icons}
                    {/* <span>{link.name}</span> */}

                    <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white invisible group-hover:visible">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <TbLogout className="text-2xl" />
            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white invisible group-hover:visible">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
