import React, { useContext, useState, useRef } from "react";
import complete from "../images/icon-complete.svg";
import { SharedContext } from "../App";

function Form({ ar }) {
  const [name, setname] = useState("");
  const [cnum, setcnum] = useState("");
  const [expm, setexpm] = useState("");
  const [expy, setexpy] = useState("");
  const [cvc, setcvc] = useState("");

  const { setnamef, setcnumf, setexpmf, setexpyf, setcvcf } =
    useContext(SharedContext);

  const but = useRef(null);

  const Submit = () => {
    //check!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    setnamef(name);
    setcnumf(cnum);
    setexpmf(expm);
    setexpyf(expy);
    setcvcf(cvc);
    ar.setsub("true");
    but.current.textContent = "continue";
  };

  return (
    <form>
      {ar.sub ? (
        <div className="complete">
          <img src={complete} />
          <h1>THANK YOU!</h1>
          <p>We’ve added your card details</p>
        </div>
      ) : (
        <>
          <label htmlFor="name">Cardholder Name</label>
          <input
            name="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            placeholder="e.g. Jane Appleseed"
          ></input>

          <label htmlFor="cardNum">Card Number</label>
          <input
            name="cardNum"
            value={cnum}
            onChange={(e) => {
              setcnum(e.target.value);
            }}
            placeholder="e.g. 1234 5678 9123 0000"
          ></input>
          <div id="frow">
            <div className="flex">
              <label htmlFor="exp">Exp. Date (MM/YY)</label>
              <span>
                <input
                  name="exp"
                  id="m"
                  value={expm}
                  onChange={(e) => {
                    setexpm(e.target.value);
                  }}
                  placeholder="MM"
                ></input>
                <input
                  name="exp"
                  id="y"
                  value={expy}
                  onChange={(e) => {
                    setexpy(e.target.value);
                  }}
                  placeholder="YY"
                ></input>
              </span>
            </div>
            <div className="flex">
              <label htmlFor="cvc">CVC</label>
              <input
                className="cvc"
                name="cvc"
                value={cvc}
                onChange={(e) => {
                  setcvc(e.target.value);
                }}
                placeholder="000"
              />
            </div>
          </div>
        </>
      )}
      <button type="button" ref={but} onClick={() => Submit()}>
        Confirm
      </button>
    </form>
  );
}

export default Form;
