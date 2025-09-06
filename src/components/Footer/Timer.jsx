import React, { useEffect, useState } from "react";

const Timer = () => {
  const [date, setdate] = useState(new Date());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setdate(new Date());

      return () => clearInterval(timerInterval);
    }, 1000);
  }, []);

  return (
      <h3 className="font-[font2] text-xl">
        <span className="uppercase ">montreal_</span>
        {String(date.getHours()).padStart(2, "0")}:
        {String(date.getMinutes()).padStart(2, "0")}:
        {String(date.getSeconds()).padStart(2, "0")}
      </h3>
  );
};

export default Timer;
