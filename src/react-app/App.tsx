// src/App.tsx
import { useState } from "react";
import "./App.css";

const TABS = ["公司使命", "核心服务", "智能硬件", "平台规划", "关于我们", "联系方式"];

function App() {
  const [activeTab, setActiveTab] = useState("公司使命");

  return (
    <div className="app-container">
      <header className="header">
        <h1>青竹智连科技有限公司</h1>
        <div className="tagline">智能融合·连接未来</div>
        <nav className="tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={tab === activeTab ? "tab active" : "tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main className="main">
        {activeTab === "公司使命" && (
          <section>
            <h2>我们的愿景</h2>
            <p>青竹智连科技致力于打造一体化智能家居与中小型企业物联网平台，从家庭出发，链接更广阔的未来。</p>
            <p>我们相信，真正的“智能”，是融合控制、互联通讯与自主学习。</p>
            <p>未来，我们将通过 AI + IoT 技术，打造一个可信、易用、自主可控的智能生态。</p>
          </section>
        )}

        {activeTab === "核心服务" && (
          <section>
            <h2>服务详情</h2>
            <ul>
              <li><strong>智能家居集成</strong>：通过 HomeAssistant 接入多厂商设备，实现自动化场景与远程控制。</li>
              <li><strong>网络规划</strong>：专业级 Wi-Fi 调优、智能路由部署、IPv6 支持。</li>
              <li><strong>远程技术支持</strong>：通过安全隧道进行远程维护。</li>
              <li><strong>软硬件部署一体</strong>：从家庭网关到终端设备定制。</li>
            </ul>
          </section>
        )}

        {activeTab === "智能硬件" && (
          <section>
            <h2>定制硬件开发</h2>
            <p>我们以 ESP8266/ESP32 为核心，研发具有以下特性的智能终端：</p>
            <ul>
              <li>可视化开关面板：触控 + OLED</li>
              <li>老设备红外智能升级模块</li>
              <li>自研 PCB + 小程序通信</li>
              <li>极简 API 便于接入 MQTT</li>
              <li>低功耗待机、OTA 升级</li>
            </ul>
          </section>
        )}

        {activeTab === "平台规划" && (
          <section>
            <h2>物联网平台设计</h2>
            <p>平台采用 Spring Cloud + MQTT + Vue 构建：</p>
            <ul>
              <li>多租户支持，分区域接入与权限管理</li>
              <li>兼容阿里云 IoT + 私有 MQTT Broker</li>
              <li>提供 H5、小程序、APP 三端界面</li>
              <li>数据分析 + 报表导出</li>
              <li>支持场景：农业/安防/工业监测</li>
            </ul>
          </section>
        )}

        {activeTab === "关于我们" && (
          <section>
            <h2>企业简介</h2>
            <p>
              青竹智连科技有限公司由一群热衷智能硬件与物联网技术的工程师发起，致力于构建安全、可控、标准化的智能控制平台。
            </p>
            <p>团队背景涵盖通信、嵌入式开发、后端开发、前端 UI 与系统架构。</p>
            <p>我们坚信，连接的世界，需要更多“懂技术、会产品、看未来”的践行者。</p>
          </section>
        )}

        {activeTab === "联系方式" && (
          <section>
            <h2>联系我们</h2>
            <p>官网地址：<a href="https://ibamboos.dpdns.org/">ibamboos.dpdns.org</a></p>
            <p>邮箱：<a href="mailto:yanglt@ibamboos.dpdns.org">yanglt@ibamboos.dpdns.org</a></p>
            <p>微信客服：yanglitongs</p>
            <p>技术合作：欢迎私信商务拓展团队</p>
          </section>
        )}
      </main>

      <footer className="footer">
        &copy; 2025 青竹智连科技有限公司 · iBamboos.dpdns.org
      </footer>
    </div>
  );
}

export default App;
