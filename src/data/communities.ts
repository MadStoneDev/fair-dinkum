interface Community {
  id: number;
  name: string;
  description: string;
  avatar: string;
  banner: string;
  isNSFW: boolean;
  questionsCount: number;
  membersCount: number;
  updatedAt: string;
  createdAt: string;
}

export const communities: Community[] = [
  {
    id: 1,
    name: "Dog Lovers",
    description: "Dogs are the best",
    avatar: "https://placekitten.com/200/200",
    banner: "https://placekitten.com/200/200",
    isNSFW: false,
    questionsCount: 10,
    membersCount: 10,
    updatedAt: "2021-09-01T00:00:00.000Z",
    createdAt: "2021-09-01T00:00:00.000Z",
  },
  {
    id: 2,
    name: "Teachers Gonna Teach",
    description: "Teachers are the best",
    avatar: "https://placekitten.com/200/200",
    banner: "https://placekitten.com/200/200",
    isNSFW: false,
    questionsCount: 43,
    membersCount: 65,
    updatedAt: "2021-09-01T00:00:00.000Z",
    createdAt: "2021-09-01T00:00:00.000Z",
  },
];
