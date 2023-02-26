import html2canvas from "html2canvas";

const onCapture = (id: string) => {
  html2canvas(document.getElementById(id) as HTMLElement).then((canvas) => {
    onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
  });
};

const onSaveAs = (uri: string, filename: string) => {
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.href = uri;
  link.download = filename;
  link.click();
  document.body.removeChild(link);
  alert("이미지를 저장하였습니다.");
};

export default onCapture;
