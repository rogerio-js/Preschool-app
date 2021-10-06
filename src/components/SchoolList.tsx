import React from "react";
import { Menu } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  SortAscendingIcon,
  StarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import ReactMapGL, {
  Popup,
  ViewState,
  InteractiveMapProps,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  FlyToInterpolator,
} from "react-map-gl";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface ISchoolProps {
  schools: {
    Name: string;
    address: string;
    latitude: number;
    longitude: number;
    isFavourite: boolean | undefined;
    nearby: never[];
  }[];
  setViewport: any;
  viewport: any;
}

const SchoolList = ({ schools, viewport, setViewport }: ISchoolProps) => {
  return (
    <>
      <div className=" w-full lg:w-4/12 dark:bg-gray-900  bg-white xl:flex border border-gray-200">
        <div className="lg:min-w-0 lg:flex-1 ">
          <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
            <div className="flex items-center">
              <h1 className="flex-1 text-lg dark:text-white font-medium">
                Schools
              </h1>
              <Menu as="div" className="relative">
                <Menu.Button className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <SortAscendingIcon
                    className="mr-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Sort
                  <ChevronDownIcon
                    className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Name
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Date modified
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Date created
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
          <ul
            role="list"
            className="relative z-0 divide-y divide-gray-200 border-b border-gray-200"
          >
            {schools.map((school, index) => (
              <li
                onClick={() =>
                  setViewport({
                    ...school,
                    zoom: 15,
                    transitionInterpolator: new FlyToInterpolator({
                      speed: 1.2,
                    }),
                    transitionDuration: "auto",
                  })
                }
                key={index}
                className="relative pl-4 pr-6 py-5 hover:bg-gray-50 dark:hover:bg-gray-700 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6 dark:text-gray-200"
              >
                <div className="flex items-center justify-between space-x-4">
                  <div className="min-w-0 space-y-3 ">
                    <div className="flex items-center space-x-3">
                      <span
                        className="bg-green-100 h-4 w-4 rounded-full flex items-center justify-center "
                        aria-hidden="true"
                      >
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                      </span>

                      <span className="block">
                        <h2 className="text-sm font-medium">
                          <a href={"#"}>
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            {school.Name}{" "}
                          </a>
                        </h2>
                      </span>
                    </div>
                    <a
                      href={"#"}
                      className="relative group flex items-center space-x-2.5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>

                      <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate">
                        {school.address}
                      </span>
                    </a>
                  </div>
                  <div className="sm:hidden">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  {/* Repo meta info */}
                  <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
                    <p className="flex items-center space-x-4">
                      <button
                        type="button"
                        className="relative bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="sr-only">
                          {school.isFavourite
                            ? "Add to favorites"
                            : "Remove from favorites"}
                        </span>
                        <StarIcon
                          className={classNames(
                            school.isFavourite
                              ? "text-yellow-300 hover:text-yellow-400"
                              : "text-gray-300 hover:text-gray-400",
                            "h-5 w-5"
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SchoolList;
