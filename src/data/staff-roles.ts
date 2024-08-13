type StaffRole = {
  [key: string]: number;
};

export const staffRoles: StaffRole = {
  admin: 100,
  developer: 75,
  moderator: 50,
  verified: 25,
  guest: 0,
};
