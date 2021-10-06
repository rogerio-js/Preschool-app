import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

interface IShowInfoProps {
  Name: string;
  address: string;
  latitude: number;
  longitude: number;
  isFavourite: boolean | undefined;
  nearby: never[];
}

const PopupInfo = ({
  Name,
  address,
  latitude,
  longitude,
  isFavourite,
  nearby,
}: IShowInfoProps) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{
        damping: 50,
        duration: 0.7,
        ease: "easeInOut",
      }}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden w-72"
    >
      <div className="flex-shrink-0">
        <img
          className="h-40 w-full object-cover"
          src={posts[0].imageUrl}
          alt=""
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href="" className="hover:underline">
              Christchurch
            </a>
          </p>
          <a href={"#"} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{Name}</p>
            <p className="mt-3 text-base text-gray-500">{address}</p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PopupInfo;
