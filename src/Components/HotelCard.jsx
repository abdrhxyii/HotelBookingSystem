import React from "react";

const HotelCard = ({imgUrl, name, streetAddress, location, description, rooms, amenities, starRating, isCreditCardNeed}) => {
  const uniqueRoomTypes = rooms && rooms.length > 0
  ? [...new Set(rooms.map(room => room.roomType))]
  : [];

  const roomPrices = rooms && rooms.length > 0
    ? rooms.map(room => room.pricePerNight)
    : [];

  const minPrice = Math.min(...roomPrices);
  const maxPrice = Math.max(...roomPrices);

  const childerNo = rooms && rooms.length > 0
  ? rooms.map(room => room.childrenAllowed)
  : [];

  const minChild = Math.min(...childerNo);
  const maxChild = Math.max(...childerNo);

  const bedCount = rooms && rooms.length > 0
  ? rooms.map(room => room.beds)
  : [];

  const minBeds = Math.min(...bedCount)
  const maxBeds = Math.max(...bedCount)

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg p-4 mb-4 border border-gray-300">
      <img 
        src={imgUrl}
        alt="Luxury Hotel" 
        className="w-full md:w-56 h-58 object-cover rounded-lg" 
      />
      <div className="flex-1 md:ml-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-500">{streetAddress}, {location}</p>
            <p className="pb-1">{description}</p>
            <ul className="text-sm text-gray-600 list-disc ml-10">
              <li><strong>Numbe of Bed:</strong>
                {bedCount.length > 1 && minBeds !== maxBeds ? (
                    <span>
                      {minBeds} - {maxBeds}
                    </span>
                  ) : (
                    <span>
                      {minBeds}
                    </span>
                  )}
              </li>
              <li><strong>Children Allowed:</strong>
              {childerNo.length > 1 && minChild !== maxChild ? (
                <span >
                  {minChild} - {maxChild}
                </span>
              ) : (
                <span >
                  {minChild}
                </span>
              )}
              </li>
              <li><strong>Room Type:</strong>
                {uniqueRoomTypes.length > 0 ? (
                  uniqueRoomTypes.map((type, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mx-1">
                      {type}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">No room types available</span>
                )}
              </li>
            </ul>
            <span className="flex flex-row gap-1 mt-2">
            <span className="flex flex-row gap-1 mt-2">
            {amenities && amenities.length > 0 ? (
              amenities.map((amenity, index) => (
                <span key={index} className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">
                  {amenity}
                </span>
              ))
            ) : (
              <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">No amenities available</span>
            )}
          </span>
            </span>
          </div>
          <div className="text-right">
            <span className="text-green-500 font-semibold">
              {starRating}/10
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col">
            {roomPrices.length > 1 ? (
                <span className="text-xl font-semibold text-blue-600">
                  LKR {minPrice} - {maxPrice} Per night
                </span>
              ) : (
                <span className="text-xl font-semibold text-blue-600">
                  LKR {minPrice} Per night
                </span>
              )}
          </div>
          
        </div>
        <div className="flex justify-between">
        {isCreditCardNeed ? (
          <span className="font-semibold">Credit Card required</span>
        ) : (
          <span className="font-semibold">Credit Card not required</span>
        )}
        {/* <button className="bg-blue-500 text-sm text-white px-2 py-2 rounded">Book Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
