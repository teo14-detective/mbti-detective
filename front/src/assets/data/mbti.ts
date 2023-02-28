const s3Url = import.meta.env.VITE_S3_URL as string;
const ISTJImage = `${s3Url}/mbti-text/ISTJ.png`;
const ISFJImage = `${s3Url}/mbti-text/ISFJ.png`;
const INFJImage = `${s3Url}/mbti-text/INFJ.png`;
const INTJImage = `${s3Url}/mbti-text/INTJ.png`;
const ISTPImage = `${s3Url}/mbti-text/ISTP.png`;
const ISFPImage = `${s3Url}/mbti-text/ISFP.png`;
const INFPImage = `${s3Url}/mbti-text/INFP.png`;
const INTPImage = `${s3Url}/mbti-text/INTP.png`;
const ENFJImage = `${s3Url}/mbti-text/ENFJ.png`;
const ENTJImage = `${s3Url}/mbti-text/ENFP.png`;
const ENTPImage = `${s3Url}/mbti-text/ENTP.png`;
const ESFJImage = `${s3Url}/mbti-text/ESFJ.png`;
const ESFPImage = `${s3Url}/mbti-text/ESFP.png`;
const ESTJImage = `${s3Url}/mbti-text/ESTJ.png`;
const ESTPImage = `${s3Url}/mbti-text/ESTP.png`;
const ENFPImage = `${s3Url}/mbti-text/ENFP.png`;

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
export const MBTIImage = [
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
  ENFJ: `${s3Url}/share-kakao/ENFJ.png`,
  ENFP: `${s3Url}/share-kakao/ENFP.png`,
  ENTJ: `${s3Url}/share-kakao/ENTJ.png`,
  ENTP: `${s3Url}/share-kakao/ENTP.png`,
  ESFJ: `${s3Url}/share-kakao/ESFJ.png`,
  ESFP: `${s3Url}/share-kakao/ESFP.png`,
  ESTJ: `${s3Url}/share-kakao/ESTJ.png`,
  ESTP: `${s3Url}/share-kakao/ESTP.png`,
  INFJ: `${s3Url}/share-kakao/INFJ.png`,
  INFP: `${s3Url}/share-kakao/INFP.png`,
  INTJ: `${s3Url}/share-kakao/INTJ.png`,
  INTP: `${s3Url}/share-kakao/INTP.png`,
  ISFJ: `${s3Url}/share-kakao/ISFJ.png`,
  ISFP: `${s3Url}/share-kakao/ISFP.png`,
  ISTJ: `${s3Url}/share-kakao/ISTJ.png`,
  ISTP: `${s3Url}/share-kakao/ISTP.png`,
};

export default mbtiData;

/*   */
