import React, { useContext, useEffect, useState } from "react";
import arrow from "../../../assets/down_arrow.svg";
import Address from "./Address";
import Buttons from "./Buttons";
import StatusButton from "./StatusButton";
import { Link, useParams, useNavigate } from "react-router-dom";
import Table from "./Table";
import { AppContext } from "../../context/AppContext";

const InvoiceDetail = (props) => {
  const { invoices, setInvoices } = useContext(AppContext);
  const [curr, setCurr] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const z = invoices.find((invoice) => invoice.id == id);
    if (z) {
      setCurr(z);
    } else {
      navigate("../");
    }
  }, []);
  return (
    <div className="p-3 flex w-full place-items-center justify-center md:place-items-baseline md:mt-10 mt-20">
      <div className="w-[95%] mt-5 flex flex-col gap-10 md:w-[40rem]">
        <Link to={"../"}>
          <h1 className="text-sm font-[200] flex gap-3 hover:underline cursor-pointer text-gray-200">
            <img src={arrow} className="self-center w-3 rotate-90" />
            Go back
          </h1>
        </Link>
        <div className="flex flex-col gap-3">
          <div className="bg-[#1F2139] w-full p-5 flex rounded-lg justify-between">
            <div className="flex place-items-center md:w-1/4 gap-5">
              <h1 className="text-sm font-[200] text-gray-200">Status</h1>
              <StatusButton status={curr.status} />
            </div>
            <Buttons />
          </div>
          <div className="bg-[#1F2139] p-7 flex rounded-lg flex-col gap-5">
            <div className="addresss flex flex-col gap-5 md:flex-row">
              <div>
                <h1 className="text-[13px] md:text-lg">
                  <span className="text-[#7E88C3]">#</span>
                  {curr.id}
                </h1>
                <p className="text-xs font-[200] text-gray-300 md:text-sm">
                  {curr.description}
                </p>
              </div>
              <Address
                country={curr.country}
                postalCode={curr.postalCode}
                billingAddress={curr.billingAddress}
                city={curr.city}
              />
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:justify-between">
              <div className="flex gap-[20%]">
                <div className="flex flex-col gap-5 capitalize">
                  <div className="w-[120px]">
                    <p className="text-[15px] font-[100]">invoice date</p>
                    <h1 className="text-xl">{curr.date}</h1>
                  </div>
                  <div className="mt-auto">
                    <p className="text-[15px] font-[100]">payment due</p>
                    <h1 className="text-xl">{curr.due}</h1>
                  </div>
                </div>
                <div className="addresss flex flex-col">
                  <h1 className="text-sm text-gray-300 text-[15px] font-[100]">
                    Bill to
                  </h1>
                  <h1 className="text-lg font-[500]">{curr.clientName}</h1>
                  <div className="text-sm flex flex-col font-[50]">
                    <Address
                      country={curr.country}
                      postalCode={curr.postalCode}
                      billingAddress={curr.billingAddress}
                      city={curr.city}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-[15px] font-[100] capitalize">sent to</p>
                <h1 className="text-lg">{curr.clientEmail}</h1>
              </div>
            </div>
            <div className="tableDiv">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetail;
