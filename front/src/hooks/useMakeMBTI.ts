import { useState } from "react";

export default function useMakeMBTI() {
  const [MBTIResultArray, setMBTIResultArray] = useState<any[]>([
    "",
    "",
    "",
    "",
  ]);

  function clickMBTIButton(e: React.MouseEvent<HTMLButtonElement>) {
    const id = Number(e.currentTarget.id);

    setMBTIResultArray(
      MBTIResultArray.map((mbti: string, index: number) => {
        id === index
          ? MBTIResultArray.splice(index, 1, e.currentTarget.value)
          : mbti;
      }),
    );

    // id와 맞는 인덱스에 문자가 있다면, 클릭한 문자로 인덱스에 맞는 mbti 성향 바꿔주기
    if (MBTIResultArray[id]) {
      setMBTIResultArray(
        MBTIResultArray.map((mbti: string, index: number) =>
          id === index ? e.currentTarget.value : mbti,
        ),
      );
    }
  }
  console.log(MBTIResultArray);
  return { MBTIResultArray, clickMBTIButton };
}
