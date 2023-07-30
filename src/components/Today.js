import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Today.css";

export default function Today() {
  const [data, setData] = useState([
    {
      agreementId: "",
      dateOfBirth: "",
      entranceTime: "",
      imageFile: "",
      phoneNumber: "",
      username: "",
    },
  ]);

  const baseUrl =
    "https://port-0-agreement-be-20zynm2mljr8gv2e.sel4.cloudtype.app/api/agreement/";

  useEffect(() => {
    // 컴포넌트가 마운트 될 때 실행
    getData();
  }, []);

  async function getData(branch) {
    if (!branch) branch = "ttukseom";
    // Axios 방식 사용
    await axios
      .get(baseUrl + branch) // 해당 URL에 HTTP GET 요청
      .then((res) => {
        setData(res.data.reverse()); // GET 요청하여 응답받은 data
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="branch">
        <button className="branch_button" onClick={() => getData("ttukseom")}>
          뚝섬
        </button>
        <button
          className="branch_button"
          onClick={() => getData("yeongdeungpo")}
        >
          영등포
        </button>
        <button className="branch_button" onClick={() => getData("jamsil")}>
          잠실
        </button>
        <button className="branch_button" onClick={() => getData("guro")}>
          구로
        </button>
      </div>
      <div>
        <table>
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
            {data.map((x) => (
              <tr>
                <td>{x.username}</td>
                <td>{x.phoneNumber}</td>
                <td>{x.dateOfBirth}</td>
                <td>{x.entranceTime.slice(11, 19)}</td>
                <td>
                  <a
                    href={
                      baseUrl +
                      "tukkseom/" +
                      "image/download/" +
                      x.imageFile.uploadFileName
                    }
                    target="_blank"
                  >
                    파일
                  </a>
                </td>
                <td>이미지는몰라</td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
