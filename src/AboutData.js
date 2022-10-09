import { FaChessKnight, } from "react-icons/fa";
// import { GiMusicalScore } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";
import { IoIosFootball } from "react-icons/io";

const aboutData = [
    {
        id: 1,
        icon: <IoIosFootball />,
        Heading: "Soccer",
        p1: "I love soccer becuase its basically",
        p2: "a sport of team work and if everyone",
        p3: "plays their role perfectly there are good ",
        p4: "chances of winning and it helps me in ",
        p5: "communicating well with my team mates."
    },
    {
        id: 2,
        icon: <FaChessKnight />,
        Heading: "Chess",
        p1: "I love this sport not only beacuse it's",
        p2: "fun and all but it helps me to think ",
        p3: "ahead, strategise and excute a plan and",
        p4: "thats me seeing the final results of a",
        p5: "complete project while still planning it."
    },
    // {
    //     id: 3,
    //     icon: <GiMusicalScore />,
    //     Heading: "Choir",
    //     p1: "In the choir as an individual you have to put",
    //     p2: "the same effort and match the pace and frequency",
    //     p3: "and if slack you'll know and if you also do",
    //     p4: "way too much you'll",
    // },
    {
        id: 4,
        icon: <BsCodeSlash />,
        Heading: "Coding",
        p1: " Practically helps me in upping ",
        p2: " my coding skills each and everyday and",
        p3: "get more familiar with different",
        p4: "errors and ways to calmly solve them.",
    },
]

export default aboutData;
