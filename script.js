// 페이지가 열릴 때 콘솔에 메시지 출력
console.log("Welcome to My Homepage!");

// 링크 클릭 시 알림창 띄우기 예시
const links = document.querySelectorAll(".links a");
links.forEach(link => {
  link.addEventListener("click", (e) => {
    alert(`You clicked: ${link.textContent}`);
  });
});
