import { create } from "zustand";
import {
  UserType,
  ResponseFetchUser,
  ParticipantsType,
} from "@pages/ResultPage";

type ResultState = {
  user: ResponseFetchUser;
  setUser: ({}: ResponseFetchUser) => void;
  MBTIData: MBTI;
  setMBTIData: ({}: MBTI) => void;
  storeSurveyList: ({}: ParticipantsType[][]) => void;
  sortedSurveyList: ParticipantsType[][];
};

type MBTI = {
  type: string;
  image: string;
  description: string;
};

const useResultStore = create<ResultState>((set) => ({
  user: {
    uid: 0,
    key: "",
    name: "",
    mbti: "",
    create_timestamp: "",
    participants: [],
  },
  setUser: (data: ResponseFetchUser) => set({ user: { ...data } }),
  MBTIData: {
    type: "",
    image: "",
    description: "",
  },
  setMBTIData: (data: MBTI) => set({ MBTIData: { ...data } }),
  sortedSurveyList: [],
  storeSurveyList: (data) => set((state) => ({ sortedSurveyList: [...data] })),
}));

export default useResultStore;
