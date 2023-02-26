const handleCopyClipBoard = (text: string) => {
  try {
    navigator.clipboard.writeText(text);
    alert("클립보드에 복사하였습니다.");
  } catch (error) {
    alert("클립보드 복사에 실패하였습니다.");
  }
};

export default handleCopyClipBoard;
