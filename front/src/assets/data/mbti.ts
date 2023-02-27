import ISTJImage from "@assets/images/mbti-text/ISTJ.png";
import ISFJImage from "@assets/images/mbti-text/ISFJ.png";
import INFJImage from "@assets/images/mbti-text/INFJ.png";
import INTJImage from "@assets/images/mbti-text/INTJ.png";
import ISTPImage from "@assets/images/mbti-text/ISTP.png";
import ISFPImage from "@assets/images/mbti-text/ISFP.png";
import INFPImage from "@assets/images/mbti-text/INFP.png";
import INTPImage from "@assets/images/mbti-text/INTP.png";
import ENFJImage from "@assets/images/mbti-text/ENFJ.png";
import ENTJImage from "@assets/images/mbti-text/ENFP.png";
import ENTPImage from "@assets/images/mbti-text/ENTP.png";
import ESFJImage from "@assets/images/mbti-text/ESFJ.png";
import ESFPImage from "@assets/images/mbti-text/ESFP.png";
import ESTJImage from "@assets/images/mbti-text/ESTJ.png";
import ESTPImage from "@assets/images/mbti-text/ESTP.png";
import ENFPImage from "@assets/images/mbti-text/ENFP.png";

export type MBTI = {
  [key: string]: {
    type: string;
    image: string;
    description: string;
  };
};
type MBTIList = MBTI[];

const MBTIType = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];
const MBITDesc = [
  "책임감이 강하다.현실적이다.매사에 철저하다.보수적이다.",
  "차분하다.헌신적이다.인내심이 강하다.공감을 잘한다.",
  "높은 통찰력.사람들에게 영감을 준다.공동체를 중요시한다.",
  "의지가 강하다.독립적이다.분석력이 뛰어나다.",
  "과묵하다.분석적이다.적응력이 강하다.",
  "온화하다.겸손하다.삶의 여유를 만끽한다.",
  "성실하다.이해심 많다.개방적이다.내적 신념이 강하다.",
  "지적 호기심이 높다.가능성을 중요시한다.",
  "느긋하다.관용적이다.타협을 잘 한다.현실적 문제 해결에 능숙하다.",
  "호기심이 많다.개방적이다.구체적인 사실을 중시한다.",
  "상상력이 풍부하다.순발력이 뛰어나다.일상적 활동에 지루함을 느낀다.",
  "박학다식하다.독창적이다.끊임없이 새로운 시도를 한다.",
  "체계적으로 일한다.규칙을 준수한다.사실적 목표 설정에 능하다",
  "사람에 대한 관심이 많다.친절하다.동정심이 많다.",
  "사교적이다.타인의 의견을 존중한다.비판을 받으면 예민하게 반응한다.",
  "철저한 준비를 한다.활동적이다.통솔력이 있다.단호하다.",
];
const MBTIImage = [
  ISTJImage,
  ISFJImage,
  INFJImage,
  INTJImage,
  ISTPImage,
  ISFPImage,
  INFPImage,
  INTPImage,
  ESTPImage,
  ESFPImage,
  ENFPImage,
  ENTPImage,
  ESTJImage,
  ESFJImage,
  ENFJImage,
  ENTJImage,
];
const mbtiData = MBTIType.map((el, index) => {
  return {
    [el]: {
      type: el,
      image: MBTIImage[index],
      description: MBITDesc[index],
    },
  };
});

type ogType = {
  [key: string]: string;
};

export const ogMBTIImage: ogType = {
  ENFJ: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ENFJ.png?raw=true",
  ENFP: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ENFP.png?raw=true",
  ENTJ: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ENTJ.png?raw=true",
  ENTP: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ENTP.png?raw=true",
  ESFJ: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ESFJ.png?raw=true",
  ESFP: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ESFP.png?raw=true",
  ESTJ: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ESTJ.png?raw=true",
  ESTP: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ESTP.png?raw=true",
  INFJ: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/INFJ.png?raw=true",
  INFP: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/INFP.png?raw=true",
  INTJ: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/INTJ.png?raw=true",
  INTP: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/INTP.png?raw=true",
  ISFJ: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ISFJ.png?raw=true",
  ISFP: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ISFP.png?raw=true",
  ISTJ: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ISTJ.png?raw=true",
  ISTP: "https://github.com/teo14-detective/mbti-detective/blob/develop/front/src/assets/images/share-kakao/ISTP.png?raw=true",
};

export default mbtiData;

/*   */
