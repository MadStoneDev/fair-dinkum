interface PrivacyLevel {
  value: string;
  label: string;
}

export const PRIVACY_LEVELS: PrivacyLevel[] = [
  {
    value: "everyone",
    label: "Everyone",
  },
  {
    value: "followers",
    label: "Asker and Followers",
  },
  {
    value: "asker",
    label: "Asker Only",
  },
  {
    value: "me",
    label: "Only Me",
  },
];
