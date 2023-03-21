import React, { useContext, useEffect, useState, useRef } from "react";
import arrow from "../../../assets/down_arrow.svg";
import Address from "./Address";
import DuoButtons from "./buttons/DuoButtons";
import StatusButton from "./buttons/StatusButton";
import { Link, useParams, useNavigate } from "react-router-dom";
import Table from "./Table";
import { AppContext } from "../../context/AppContext";
import EditInvoice from "./EditInvoice";
import axios from "axios";

const InvoiceDetail = () => {
  const { invoices, removeInvoice, user } = useContext(AppContext);
  const [curr, setCurr] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5500/invoice/${id}`, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((res) => {
        setCurr(res.data.invoice);
        document.title = `Invoice - #${id}`;
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setInvoiceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);
  const setInvoicePaid = (id) => {
    axios
      .patch("http://localhost:5500/invoice/set-paid", {
        id: id,
      })
      .then((res) => {
        setCurr({ ...curr, invoice_status: "paid" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <EditInvoice
        refr={ref}
        item={invoiceOpen}
        discard={() => setInvoiceOpen(false)}
        invoice={curr}
      />
      <div className="p-3 flex w-full place-items-center justify-center md:place-items-baseline md:mt-16 mt-20 flex-col sm:flex-row">
        <div className="w-[95%] mt-5 flex flex-col gap-10 md:w-[40rem]">
          <Link to={"../"}>
            <h1 className="text-sm font-[200] flex gap-3 hover:underline cursor-pointer text-gray-200">
              <img src={arrow} className="self-center w-3 rotate-90" />
              Go back
            </h1>
          </Link>
          <div className="flex flex-col gap-3">
            <div className="bg-[#1F2139] w-full p-5 flex rounded-lg gap-5">
              <div className="flex place-items-center md:w-1/4 gap-5">
                <h1 className="text-sm font-[200] text-gray-200">Status</h1>
                <StatusButton status={curr.invoice_status} />
              </div>
              <div className="w-full hidden sm:block">
                <DuoButtons
                  status={curr.invoice_status}
                  paid={() => setInvoicePaid(curr.invoice_id)}
                  remove={() => removeInvoice(curr.invoice_id)}
                  edit={() => setInvoiceOpen(true)}
                />
              </div>
            </div>
            <div className="bg-[#1F2139] p-7 flex rounded-lg flex-col gap-5">
              <div className="addresss flex flex-col gap-5 md:flex-row">
                <div>
                  <h1 className="text-[13px] md:text-lg mb-[2px]">
                    <span className="text-[#7E88C3]">#</span>
                    {curr.invoice_id}
                  </h1>
                  <p className="text-xs font-[200] text-gray-300 md:text-sm">
                    {curr.description}
                  </p>
                </div>
                <Address
                  country={curr.billing_country}
                  style={{ textAlign: "right" }}
                  postalCode={curr.code}
                  billingAddress={curr.billing_address}
                  city={curr.billing_city}
                />
              </div>
              <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                <div className="flex gap-[20%]">
                  <div className="flex flex-col gap-5 capitalize">
                    <div className="w-[120px]">
                      <p className="text-[15px] font-[100]">invoice date</p>
                      <h1 className="text-xl">
                        {curr.initial_date
                          ? new Date(curr.initial_date)
                              .toISOString()
                              .substring(0, 10)
                          : ""}
                      </h1>
                    </div>
                    <div className="mt-auto">
                      <p className="text-[15px] font-[100]">payment due</p>
                      <h1 className="text-xl">
                        {curr.due_date
                          ? new Date(curr.due_date)
                              .toISOString()
                              .substring(0, 10)
                          : ""}
                      </h1>
                    </div>
                  </div>
                  <div className="addresss flex flex-col">
                    <h1 className="text-sm text-gray-300 text-[15px] font-[100]">
                      Bill to
                    </h1>
                    <h1 className="text-lg font-[500]">{curr.clientName}</h1>
                    <div className="text-sm flex flex-col font-[50]">
                      <Address
                        country={curr.billing_country}
                        postalCode={curr.code}
                        billingAddress={curr.billing_address}
                        city={curr.billing_city}
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-[15px] font-[100] capitalize">sent to</p>
                  <h1 className="text-lg">{curr.client_email}</h1>
                </div>
              </div>
              <div className="tableDiv">
                <Table
                  items={curr.itemList}
                  total={parseInt(curr.invoice_total)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#1F2139] flex justify-end 
        h-15 p-3 w-full fixed bottom-0 sm:hidden"
      >
        <div className="w-1/2 pr-3">
          <DuoButtons
            status={curr.status}
            paid={() => setInvoiceStatus(curr.id, "paid")}
            remove={() => removeInvoice(curr.id)}
          />
        </div>
      </div>
    </>
  );
};

export default InvoiceDetail;
