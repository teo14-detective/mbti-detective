const userData = localStorage.getItem("information");
export const userKey: string = JSON.parse(userData as string).userKey;
export const participantName: string = JSON.parse(
  userData as string,
).participantName;
export const participantAnswer: string = JSON.parse(
  userData as string,
).participantAnswer;
