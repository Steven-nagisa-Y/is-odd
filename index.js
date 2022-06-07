exports.isOdd = function (x) {
  if (typeof x === "string") {
    const tmp_x = Number.parseInt(x);
    if (tmp_x + "" !== x) return false;
    else x = tmp_x;
  }
  if (
    x === NaN ||
    typeof x === "object" ||
    (typeof x !== "number" && typeof x !== "bigint")
  )
    return false;
  if (typeof x === "number" && Math.abs(x) >= Number.MAX_SAFE_INTEGER) {
    return false;
  }
  if (typeof x === "number" && x % 1 !== 0) return false;
  if (typeof x === "number") {
    return x % 2 === 0;
  }
  if (typeof x === "bigint") {
    return x % 2n === 0n;
  }
  return false;
};
