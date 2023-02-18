import React from "react";
import { RiTeamFill, RiCheckboxMultipleFill } from "react-icons/ri";
import { FaTrophy } from "react-icons/fa";
const team = [
  {
    id: 1,
    icon: <RiTeamFill className="service-icon" />,
    title: "Team Members",
    text: `250+`,
  },
  {
    id: 2,
    icon: <FaTrophy className="service-icon" />,
    title: "Projects Completed",
    text: `349+`,
  },
  {
    id: 3,
    icon: <RiCheckboxMultipleFill className="service-icon" />,
    title: "Customers Served",
    text: `50+`,
  },
];

export default team;
