import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

export default function CompactBranchLocator() {
  const [selectedState, setSelectedState] = useState("Maharashtra");
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  const markers = [
    { lat: 19.076, lng: 72.8777, name: "Bandra West" },
    { lat: 19.123, lng: 72.8504, name: "Chandivali" },
    { lat: 18.962, lng: 72.8351, name: "Masjid Bunder" },
  ];

  return (
    <div className=" p-4 bg-gray-100 min-h-screen">
      <Link
        to="/"
        className="block text-[#891B3F] text-xs mt-3 font-semibold hover:underline mb-3"
      >
        ← Back to Home
      </Link>
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-4">
        {/* Left Panel - Form */}
        <div className="bg-white p-4 rounded-lg shadow-md text-sm w-full">
          <img
            src="https://dtewary.blr1.digitaloceanspaces.com/logo/dtewary-brand-logo.png"
            alt="logo"
            className="w-28 md:w-32 h-auto  mb-3"
          />
          {/* Search Bar */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search nearby Branch or ATM"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500 text-xs" />
          </div>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-2">
            <span className="text-gray-600 text-xs bg-white px-2">OR</span>
          </div>

          {/* State & City Dropdowns */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <label className="text-gray-700 font-medium">State</label>
              <div className="relative">
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md appearance-none text-sm"
                >
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                  <option>Delhi</option>
                </select>
                <FaAngleDown className="absolute right-3 top-3 text-gray-500 text-xs" />
              </div>
            </div>
            <div>
              <label className="text-gray-700 font-medium">City</label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md appearance-none text-sm"
                >
                  <option>Mumbai</option>
                  <option>Pune</option>
                  <option>Nagpur</option>
                </select>
                <FaAngleDown className="absolute right-3 top-3 text-gray-500 text-xs" />
              </div>
            </div>
          </div>

          {/* Locality Inputs */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <input
              type="text"
              placeholder="Type your locality"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
            <input
              type="text"
              placeholder="Please enter locality first"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          {/* Categories */}
          <div className="mb-3">
            <h3 className="text-gray-800 font-semibold">Category</h3>
            <div className="grid grid-cols-3 gap-2 mt-1 text-gray-700">
              {[
                "ATM",
                "Branch",
                "Loan Centre",
                "Rural Lending Office",
                "CDM",
              ].map((category) => (
                <label key={category} className="flex items-center">
                  <input type="checkbox" className="mr-1" /> {category}
                </label>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-3">
            <h3 className="text-gray-800 font-semibold">Services</h3>
            <div className="grid grid-cols-3 gap-2 mt-1 text-gray-700">
              {[
                "Aadhaar Enrolment Centre",
                "Banking",
                "Customer Service Available",
                "Demat",
                "Demat Services CDSL",
                "Demat Services NSDL",
                "Forex",
                "Lockers",
                "NSDL",
                "Ramp Facility Available",
                "Talking ATM",
                "ATM Services",
              ].map((service) => (
                <label key={service} className="flex items-center">
                  <input type="checkbox" className="mr-1" /> {service}
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3 mt-4">
            <button className="w-1/2 bg-[#891B3F] text-white py-2 rounded-md font-medium">
              Search
            </button>
            <button className="w-1/2 bg-gray-600 text-white py-2 rounded-md font-medium">
              Reset
            </button>
          </div>
        </div>

        {/* Right Panel - Map */}
        <div className=" h-[500px] rounded-lg shadow-md overflow-hidden w-full">
          <MapContainer
            //@ts-expect-error
            center={[19.076, 72.8777]}
            zoom={12}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              //@ts-expect-error
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, index) => (
              <Marker key={index} position={[marker.lat, marker.lng]}>
                <Popup>{marker.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
