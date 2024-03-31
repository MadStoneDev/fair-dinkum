const getMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getTimeAgo = (time: number, now: number) => {
  const timeAgo = Math.floor((now - time) / 1000);

  if (timeAgo < 1) return "Just Now";
  if (timeAgo < 60) return `${timeAgo} seconds ago`;
  if (timeAgo < 3600) return `${Math.floor(timeAgo / 60)} minutes ago`;
  if (timeAgo < 86400) return `${Math.floor(timeAgo / 3600)} hours ago`;
  if (timeAgo >= 86400) {
    const date = new Date(time);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day} ${getMonth[month]} ${year}`;
  }

  return null;
};

export { getTimeAgo };
