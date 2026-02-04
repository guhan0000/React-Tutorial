import React, { useMemo } from "react";

const UseMemo1 = () => {
  const users = [
    { userName: "daddy!23", status: "inactive" },
    { userName: "fuks123", status: "active" },
    { userName: "teamper487", status: "active" },
  ];
  const userFilter = useMemo(() => {
    return users.filter((user) => user.status === "active");
  }, [users]);
  const sumOfDigit = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
      sum += i;
    }
    return sum;
  }, []);
  return <div>{sumOfDigit}</div>;
};

export default UseMemo1;
