import React from 'react';
import './App.css';
import myImage from './images/picture.jpg';
import styled from 'styled-components';
import { FaRegEnvelope, FaPhone } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';


function App() {
  return (
    <div className="grid">
      <aside class="page-leftbar">
        <img class="image" src={myImage} alt="My Image" />
        <div class="shape">ติดต่อ</div>
        <div class="subtopic">
          <p><strong><FaRegEnvelope class="email-icon" />  nuanpang_c@silpakorn.edu</strong></p>
          <p><strong><FaPhone class="phone-icon" /> 061-824-9449</strong> </p>
          <p><strong><BiMap class="location-icon" /> นครปฐม, ประเทศไทย</strong></p>
        </div>
        <div class="size-box"></div>
        <div class="shape">ประวัติการศึกษา</div>
        <div class="subtopic">
          <ul>
            <li>มหาวิทยาลัยศิลปากร คณะวิทยาศาสตร์ หลักสูตรวิทยาการคอมพิวเตอร์
            </li>
            <div>2464-ปัจจุบัน</div>
            <li>โรงเรียนคณะราษฎร์บำรุงปทุมธานี มัธยมศึกษา</li>
            <div>2558-2564</div>
          </ul>
        </div>
      </aside>

      <div class="page-main">
        <div class="name">CHANANSIRI NUANPANG</div>
        <div class="Developer">DEVELOPER</div>
        <div class="info">
          <div>ดิฉันกำลังศึกษาปริญญาตรีในสาขาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร เป้าหมายอาชีพต้องการอยู่ในสายงานด้านเทคโนโลยี การพัฒนาซอฟแวร์ต่างๆ จึงสนใจตำแหน่ง Developer เพราะตรงกับประสบการณ์ที่สามารถนำมาประยุกต์ใช้ในการแก้ปัญหาและหลักสูตรที่ดิฉันได้เรียนรู้มา
            ดิฉันมีทัศนคติเชิงบวก พร้อมรับฟังความคิดเห็นและปรับปรุงให้ดียิ่งขึ้น มีความมุ่งมั่นในการทำงาน
          </div>
        </div>

        <div class="frame">
          <div class="shaperight">PROGRAMMING SKILLS</div>
          <ul>
            <li>C / C+</li>
            <li>Java</li>
            <li>Flutter</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div class="frame">
          <div class="shaperight">กิจกรรม</div>
          <div class="line">
            <div class="info">
              <div>2566</div>
              <div><strong>Database Systems Project</strong></div>
              <div class="subinfo">Database Web Admin ระบบการจองเข้าใช้สนามกีฬา</div>
              <div class="subinfo2">
              <li>ออกแบบเว็บผู้ดูแลระบบโดยใช้ HTML,CSS และ ใช้ MySQL เป็น database
              </li>
              </div>
            </div>

            <div class="info">
              <div><strong>Lab boy ปรับพื้นฐานภาควิชาคอมพิวเตอร์</strong>

              <div class="size-box"></div>
              <div>2562, 2563</div>
              <iv><strong>Robot Projects</strong></iv>
              <div class="subinfo">Database Web Admin ระบบการจองเข้าใช้สนามกีฬา</div>
              
            </div>
            <div class="subinfo2">
            <li>ออกแบบและประดิษฐ์โดยใช้บอร์ด ipst ร่วมกับอุปกรณ์ MicroBox และใช้ภาษา C ในการเขียนโปรแกรม</li>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
