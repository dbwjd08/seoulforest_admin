import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Total.css";

export default function Total() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");

  const search_info = () => {};
  const search_date = () => {};

  const onChange = (e) => {
    setName(e.target.value);
  };

  const selectBranch = (e) => {
    if (e.target.value === "뚝섬") setBranch("ttukseom");
    else if (e.target.value === "영등포") setBranch("yeongdeungpo");
    else if (e.target.value === "잠실") setBranch("jamsil");
    else if (e.target.value === "구로") setBranch("guro");
  };

  return (
    <div>
      <div>
        <div className="total_search">
          <div className="total_search_box">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            ></DatePicker>
          </div>
          <div className="total_search_box">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            ></DatePicker>
          </div>
          <div className="total_search_box">
            <select onChange={selectBranch}>
              <option>뚝섬</option>
              <option>영등포</option>
              <option>잠실</option>
              <option>구로</option>
            </select>
          </div>
          <div className="total_search_box" onClick={search_date}>
            <button>검색</button>
          </div>
          <div className="total_search_box">
            <input
              placeholder="이름을 입력하세요"
              onChange={onChange}
              value={name}
            ></input>
          </div>
          <div className="total_search_box" onClick={search_info}>
            <button>검색</button>
          </div>
        </div>
      </div>
      <div>
        <table className="total">
          <thead>
            <tr>
              <th>회원명</th>
              <th>휴대폰번호</th>
              <th>생년월일</th>
              <th>입장시간</th>
              <th>동의서파일</th>
              <th>동의서이미지</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>//</td>
              <td>//</td>
              <td>//</td>
              <td>//</td>
              <td>//</td>
              <td>//</td>
              <td>
                <button>삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
