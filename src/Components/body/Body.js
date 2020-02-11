import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <section className="sec">
      <div>
        <div className="sec-sub">
          <div className="sec-p">
            <h1>
              GOODBYE JUNK FOOD.
              <br />
              HELLO SUPER HEALTHY MEALS.
            </h1>
          </div>

          <div className="sec-but">
            <div className="sec-but-sub">
              <button className="but1">i'm hungry</button>
              <button className="but2">Show me more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Body;
