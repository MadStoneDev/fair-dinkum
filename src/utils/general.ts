export const normaliseTotal = (total: number) => {
  if (total > 999999) {
    return `${Math.floor(total / 1000000)} M`;
  } else if (total > 9999) {
    return `${Math.floor(total / 1000)} K`;
  } else {
    return total.toLocaleString();
  }
};

export const cutUsername = (username: string, length: number = 14) => {
  if (username.length > length) {
    return `${username.slice(0, length)}...`;
  } else {
    return username;
  }
};
