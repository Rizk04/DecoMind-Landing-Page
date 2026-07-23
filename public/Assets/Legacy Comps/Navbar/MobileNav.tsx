// import React from "react";
// import { Navlinks } from "../Home/constant/Navlinks";
// import Link from "next/link";
// import { CgClose } from "react-icons/cg";
// type Props = {
//   showNav: boolean;
//   closeNav: () => void;
// };
// const MobileNav = ({ closeNav, showNav }: Props) => {
//   const navOpenCloseStyle = showNav ? "translate-x-0" : "translate-x-[100%]";

//   return (
//     <div
//       className={`fixed ${navOpenCloseStyle} inset-0 transform transition-all duration-500 z-1002 bg-black/70 w-full h-screen`}
//     >
//       <div className="text-black right-0  fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[60%] bg-white space-y-6 z-1050">
//         {Navlinks.map((link) => {
//           return (
//             <Link key={link.id} href={link.url} onClick={closeNav}>
//               <p
//                 className={`text-black ${navOpenCloseStyle} w-fit text[20px] ml-12 vorder-b-[1.5px] pb-1 border-black border-b-2 sm:text-[30px]`}
//               >
//                 {link.label}{" "}
//               </p>
//             </Link>
//           );
//         })}

//         <CgClose
//           onClick={closeNav}
//           className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:hm-8 w-6 h-6"
//         />
//       </div>
//     </div>
//   );
// };

// export default MobileNav;
