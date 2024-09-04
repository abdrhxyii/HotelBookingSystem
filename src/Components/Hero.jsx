// import React, { useState } from "react";
// import {
//   MinusIcon,
//   PlusIcon,
// } from "@heroicons/react/outline";
// import {
//   HotelOutlined,
//   PeopleAltOutlined,
//   RoomOutlined,
//   RoomService,
// } from "@material-ui/icons";
// import {
//   ChildFriendly,
//   FamilyRestroomOutlined,
//   FamilyRestroomRounded,
// } from "@mui/icons-material";
// function Hero() {
//   const [rooms, setRooms] = useState(0);
//   const [show, setShow] = useState(false);
//   const showGuestInfo = () => setShow(!show);

//   const addRooms = () => {
//     setRooms(rooms + 1);
//   };
//   const removeRooms = () => {
//     if (rooms > 1) {
//       setRooms(rooms - 1);
//     } else {
//       setRooms(rooms);
//     }
//   };
//   return ( 

//     <div className="p-3  flex w-full flex-col relative">
//         <div className="flex flex-col border-b border-gray">
//             <div className="p-2 flex justify-between items-center ">
//             <div className="flex text-sm items-center space-x-2">
//                 <HotelOutlined />
//                 <p>Rooms</p>
//             </div>
//             <div className="flex space-x-4 border p-2">
//                 <p>
//                 <MinusIcon
//                     // onClick={removeRooms}
//                     className="bg-gray-light h-6 cursor-pointer"
//                 />
//                 </p>
//                 <p>{rooms}</p>
//                 <PlusIcon
//                 // onClick={addRooms}
//                 className=" bg-gray-light h-6 cursor-pointer"
//                 />
//             </div>
//             </div>
//             <div className="p-2 flex justify-between items-center">
//             <div className="flex text-sm items-center space-x-2">
//                 <PeopleAltOutlined />
//                 <p>Adults</p>
//             </div>
//             <div className="flex space-x-4 border p-2">
//                 <p>
//                 <MinusIcon
//                     // onClick={removeRooms}
//                     className="h-6 bg-gray-light cursor-pointer"
//                 />
//                 </p>
//                 <p>{rooms}</p>
//                 <PlusIcon
//                 // onClick={addRooms}
//                 className="h-6 bg-gray-light cursor-pointer"
//                 />
//             </div>
//             </div>
//             <div className="p-2 flex justify-between items-center">
//             <div className="flex text-sm items-center space-x-2">
//                 <FamilyRestroomOutlined />
//                 <p>Childrens</p>
//             </div>
//             <div className="flex space-x-4 border p-2">
//                 <p>
//                 <MinusIcon
//                     onClick={removeRooms}
//                     className="h-6 bg-gray-light cursor-pointer"
//                 />
//                 </p>
//                 <p>{rooms}</p>
//                 <PlusIcon
//                 onClick={addRooms}
//                 className="h-6 bg-gray-light cursor-pointer"
//                 />
//             </div>
//             </div>
//         </div>
//         <div className="border-t p-2 border-gray ">
//             <button className="p-2 border-t border-gray  bg-black w-full text-white">
//             Update
//             </button>
//         </div>
//         </div>
//  );
// };

// export default Hero;
