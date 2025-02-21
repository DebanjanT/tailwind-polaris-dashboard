import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function CompactNewCustomerForm() {
  const [signatoryCount, setSignatoryCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-2">
      <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-3/4">
        <img
          src="https://dtewary.blr1.digitaloceanspaces.com/logo/dtewary-brand-logo.png"
          alt="logo"
          className="w-28 md:w-32 h-auto  mb-3"
        />
        {/* Tabs */}
        <div className="flex space-x-1 mb-3 text-sm">
          <button className="px-3 py-2 border-b-4 border-[#891B3F] text-[#891B3F] font-semibold">
            New Customer
          </button>
          <button className="px-3 py-2 text-gray-500 border-b-4 border-transparent">
            Registered Customer
          </button>
          <button className="px-3 py-2 text-gray-500 border-b-4 border-transparent">
            Copy Existing Application Form
          </button>
        </div>

        {/* Section Header */}
        <div className="bg-[#891B3F] text-white py-1 px-3 font-medium rounded-t-md text-sm">
          NEW CUSTOMER
        </div>

        <div className="p-3 border border-gray-200 rounded-b-md text-sm">
          {/* Entity Name */}
          <div className="mb-2">
            <label className="block font-medium">
              Entity Name (GSTIN / Non-GSTIN)
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Entity Name"
              className="w-full p-1.5 border border-gray-300 rounded-md text-sm"
            />
            <p className="text-red-500 text-xs mt-1">Enter Entity Name.</p>
          </div>

          {/* Constitution & Account Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <div>
              <label className="block font-medium">
                Please Select the Constitution{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full p-1.5 border border-gray-300 rounded-md text-sm appearance-none">
                  <option>SELECT CONSTITUTION</option>
                </select>
                <FaAngleDown className="absolute right-3 top-3 text-gray-500 text-xs" />
              </div>
            </div>
            <div>
              <label className="block font-medium">
                Type of Account <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full p-1.5 border border-gray-300 rounded-md text-sm appearance-none">
                  <option>- SELECT TYPE OF ACCOUNT</option>
                  <option>CURRENT A/C</option>
                  <option>SAVINGS A/C</option>
                </select>
                <FaAngleDown className="absolute right-3 top-3 text-gray-500 text-xs" />
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 mb-2">
            <div>
              <label className="block font-medium">
                Contact Person Name <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2">
                <div className="relative w-1/3">
                  <select className="w-full p-1.5 border border-gray-300 rounded-md text-sm appearance-none">
                    <option>SELECT TITLE</option>
                  </select>
                  <FaAngleDown className="absolute right-2 top-3 text-gray-500 text-xs" />
                </div>
                <input
                  type="text"
                  placeholder="Applicant Name"
                  className="w-2/3 p-1.5 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block font-medium">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Number"
                className="w-full p-1.5 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block font-medium">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Email ID"
                className="w-full p-1.5 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>

          {/* Corporate Internet Banking */}
          <div className="mb-2">
            <label className="block font-medium">
              Corporate Internet Banking
            </label>
            <div className="flex space-x-4 mt-1">
              <label className="flex items-center">
                <input type="radio" name="internet-banking" className="mr-1" />{" "}
                Yes
              </label>
              <label className="flex items-center">
                <input type="radio" name="internet-banking" className="mr-1" />{" "}
                No
              </label>
            </div>
          </div>

          {/* Authorized Signatories */}
          <div className="bg-[#891B3F] text-white py-1 px-3 font-medium text-xs rounded-md mt-2">
            PERSONAL DETAILS ( AUTHORISED SIGNATORY / PARTNERS / PROPRIETORS /
            DIRECTORS / LOA / POA / TRUSTEE / SENIOR MANAGEMENT / BENEFICIARIES
            )
          </div>
          <div className="mt-2 flex items-center">
            <label className="font-medium text-xs mr-2">
              Enter Authorised Signatories, Partner Count:
            </label>
            <input
              type="number"
              value={signatoryCount}
              //@ts-ignore
              onChange={(e) => setSignatoryCount(e.target.value)}
              className="w-12 p-1 border border-gray-300 rounded-md text-sm"
            />
          </div>

          {/* Proceed Button */}
          <div className="flex justify-end mt-3">
            <button className="bg-[#891B3F] text-white px-4 py-1.5 rounded-md flex items-center space-x-1 text-sm">
              <span>PROCEED</span> <IoIosArrowForward />
            </button>
          </div>
        </div>
        <Link
          to="/"
          className="block text-[#891B3F] text-xs mt-3 font-semibold hover:underline mb-3"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
