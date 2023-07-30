import "./App.css";
import Today from "./components/Today";
import Total from "./components/Total";

function App() {
  return (
    <div>
      <h1>일일 이용 동의서 관리</h1>
      <div>
        <h2>오늘 방문자</h2>
        <Today></Today>
      </div>
      <div>
        <h2>방문자 검색</h2>
        <Total></Total>
      </div>
    </div>
  );
}

export default App;
