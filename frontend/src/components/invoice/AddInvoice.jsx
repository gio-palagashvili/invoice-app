import React, { useState, useContext } from "react";
import ButtonRoundedFull from "./bits/buttons/ButtonRoundedFull";
import InputMain from "./bits/Inputs/InputMain";
import ItemInputs from "./bits/ItemInputs";
import { motion, AnimatePresence } from "framer-motion";
import FixedNavButtons from "./bits/buttons/FixedNavButtons";
import { validateInput } from "../utils/validators";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const AddInvoice = (props) => {
  var date = new Date();
  const today = date.toISOString().substring(0, 10);
  const { invoices, setInvoices, user } = useContext(AppContext);

  const [invoice, setInvoice] = useState({
    id: "#uk",
    billingAddress: "",
    city: "",
    postCode: "",
    country: "",
    description: "",
    clientName: "",
    clientEmail: "",
    status: "pending",
    date: today,
    net: 30,
    due: new Date(date.setDate(date.getDate() + 30))
      .toISOString()
      .substring(0, 10),
    itemList: [],
  });

  const [items, setItems] = useState([]);
  const [itemsA, setItemsA] = useState(0);
  const [error, setError] = useState("");

  const addItemInput = (index) => {
    setItemsA(itemsA + 1);
    let news = items;
    news.push({ itemName: "", qty: 0, price: 0, itemTotalPrice: 0 });
    setItems(news);
  };
  const removeItemInput = (i) => {
    let newArr = items;
    newArr.splice(
      items.findIndex((item, index) => index == i),
      1
    );
    setItemsA(itemsA - 1);
    setItems(newArr);
  };
  const itemChangeHandler = (i, e) => {
    let itemsTemp = items;
    itemsTemp = itemsTemp.map((item, index) => {
      if (i == index) {
        item = { ...item, [e.target.name]: e.target.value };
      }
      return item;
    });
    setItems(itemsTemp);
  };
  const changeHandler = (e) => {
    setError("");
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };
  const priceChange = (i, e) => {
    let itemsTemp = items;
    itemsTemp = itemsTemp.map((item, index) => {
      if (i == index) {
        item = {
          ...item,
          itemTotalPrice: item.qty * e.target.value,
          price: e.target.value,
        };
      }
      return item;
    });
    setItems(itemsTemp);
  };
  const qtyChange = (i, e) => {
    let itemsTemp = items;
    itemsTemp = itemsTemp.map((item, index) => {
      if (i == index) {
        item = {
          ...item,
          itemTotalPrice: item.price * e.target.value,
          qty: e.target.value,
        };
      }
      return item;
    });
    setItems(itemsTemp);
  };
  const handleSubmit = () => {
    let tm = new Date(invoice.date);
    let due_date = new Date(tm.setDate(tm.getDate() + parseInt(invoice.net)));
    let valid = validateInput(invoice);

    if (valid.status == "success") {
      if (divs.length > 0) {
        let total = 0;
        items.map((item) => {
          total += item.itemTotalPrice;
        });

        let invoice1 = invoice;

        invoice1.due = due_date.toISOString().substring(0, 10);
        invoice1.itemList = items;
        invoice1.total = total;

        axios
          .post(
            "http://localhost:5500/invoice/create",
            {
              invoice1,
            },
            {
              headers: {
                Authorization: `Bearer ${user}`,
              },
            }
          )
          .then((data) => {
            location.reload();
          })
          .catch((err) => {
            setError(err.message);
          });

        clearItems();
        props.discard();
      } else setError("add atleast one item");
    } else setError(valid.error);
  };

  const draft = () => {
    invoice.status = "draft";
    clearItems();
    let newInvoices = invoices;

    setInvoices(
      newInvoices.map((i, index) => {
        if (i.id == props.id) {
          return invoice;
        }
        return i;
      })
    );
  };
  let divs = [];
  for (let i = 0; i < itemsA; i++) {
    divs.push(
      <ItemInputs
        key={i}
        total={items[i].itemTotalPrice}
        remove={() => removeItemInput(i)}
        change={(e) => itemChangeHandler(i, e)}
        price={(e) => priceChange(i, e)}
        qty={(e) => qtyChange(i, e)}
      />
    );
  }
  const clearItems = () => {
    divs = [];
    setItemsA(0);
  };
  return (
    <AnimatePresence>
      {props.item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-20"
        >
          <div className="absolute w-full h-full z-10 flex bg-[#00000089]">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: "-100%" }}
              className="w-full h-full"
            >
              <div
                className="w-full flex justify-center place-items-center bg-[#141625] pt-[5rem] lg:pt-0 md:rounded-tr-2xl lg:pl-[5rem]
      md:rounded-br-2xl sm:rounded-none md:w-[80%] md:pl-0 lg:w-[45rem] overflow-y-scroll h-[100%]"
                ref={props.refr}
              >
                <div className="w-[80%] h-[90%] ">
                  <h1 className="text-3xl">Create Invoice</h1>
                  <div className="inputs flex flex-col gap-4">
                    <h1 className="text-[#7C5DFA] mt-10">Bill from</h1>
                    {/* input divs */}
                    <div className="flex flex-col">
                      <div className="w-full">
                        <InputMain
                          errorMessage={
                            error.includes("billing address") ? error : ""
                          }
                          h1="billing address"
                          change={(e) => changeHandler(e)}
                          name="billingAddress"
                        />
                      </div>
                      <div className="block gap-2 mt-4 sm:flex">
                        <div className="gap-2 flex justify-between w-full">
                          <div className="w-[90%] sm:w-[30%]">
                            <InputMain
                              errorMessage={error.includes("city") ? error : ""}
                              h1="city"
                              change={(e) => changeHandler(e)}
                              name="city"
                            />
                          </div>
                          <div className="w-[90%] sm:w-[30%]">
                            <InputMain
                              errorMessage={error.includes("code") ? error : ""}
                              h1="postal code"
                              change={(e) => changeHandler(e)}
                              name="postCode"
                            />
                          </div>
                          <div className="hidden sm:block w-[120%] sm:w-[30%]">
                            <InputMain
                              errorMessage={
                                error.includes("country") ? error : ""
                              }
                              h1="country"
                              change={(e) => changeHandler(e)}
                              name="country"
                            />
                          </div>
                        </div>
                        <div className="w-full mt-5 sm:mt-0 sm:w-[30%] sm:hidden ml-auto">
                          <InputMain
                            h1="country"
                            change={(e) => changeHandler(e)}
                            name="country"
                            errorMessage={
                              error.includes("country") ? error : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    {/* dates */}
                    <h1 className="text-[#7C5DFA]">Bill to</h1>
                    <div className="w-full">
                      <InputMain
                        h1="client's name"
                        change={(e) => changeHandler(e)}
                        name="clientName"
                        errorMessage={error.includes("name") ? error : ""}
                      />
                    </div>
                    <div className="w-full">
                      <InputMain
                        h1="client's email"
                        name="clientEmail"
                        errorMessage={error.includes("email") ? error : ""}
                        change={(e) => changeHandler(e)}
                      />
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <h1 className="capitalize font-[100] text-gray-300 text-[15px] mb-1">
                          invoice date
                        </h1>
                        <input
                          defaultValue={today}
                          onChange={(e) => changeHandler(e)}
                          name="date"
                          type="date"
                          className="bg-[#1F2139] border-[#252945] w-[100%] p-3 h-12 border-solid border-[1px] rounded-[4px]"
                        />
                      </div>
                      <div className="w-1/2">
                        <h1 className="capitalize font-[100] text-gray-300 text-[15px] mb-1">
                          payment terms
                        </h1>
                        <select
                          name="net"
                          onChange={(e) => changeHandler(e)}
                          className="bg-[#1F2139] border-[#252945] w-[100%] p-3 h-12 border-solid border-[1px] rounded-[4px] font-[500]"
                        >
                          <option value="30">Net 30 days</option>
                          <option value="14">Net 14 day</option>
                          <option value="7">Net 7 day</option>
                          <option value="1">Net 1 day</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full">
                      <InputMain
                        h1="Description"
                        place="e.g Graphic Design Service"
                        change={(e) => changeHandler(e)}
                        name="description"
                      />
                    </div>
                    <div className="mt-5 relative pb-[10rem]">
                      <h1 className="text-2xl mb-5">Item List</h1>
                      <div className="flex flex-col">{divs}</div>
                      <ButtonRoundedFull
                        text="+ add new item"
                        clicked={addItemInput}
                      />
                      <div className="mt-10">
                        {error ? (
                          <p className="text-sm text-red-500 capitalize font-[500]">
                            - {error}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <FixedNavButtons
                  discard={props.discard}
                  submit={handleSubmit}
                  draft={draft}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddInvoice;
