// src/App.tsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", background: "#f9f9f9", margin: 0, padding: 0, color: "#333" }}>
      <header style={{ background: "#006241", color: "white", textAlign: "center", padding: "1.5em 1em" }}>
        <h1>青竹智连科技有限公司</h1>
        <div style={{ fontSize: "1.1em", fontStyle: "italic", color: "#ccc" }}>智能融合·连接未来</div>
        <nav>
          <a href="/" style={navStyle}>首页</a>
          <a href="#services" style={navStyle}>服务</a>
          <a href="#hardware" style={navStyle}>智能硬件</a>
          <a href="#iot" style={navStyle}>平台规划</a>
          <a href="#about" style={navStyle}>关于我们</a>
          <a href="#contact" style={navStyle}>联系</a>
        </nav>
      </header>

      <main style={{ maxWidth: 960, margin: "auto", padding: "2em", background: "#fff" }}>
        <Section title="公司使命">
          <p>青竹智连科技致力于构建一个融合安防、网络、智能家居的统一技术平台，从个人家庭场景出发，逐步覆盖中小企业、大型机构的智能化与数据监控需求。</p>
        </Section>

        <Section title="核心服务" id="services">
          <ul style={ulStyle}>
            <li>家庭智能化部署：包含智能门铃、门禁、远程控制、路由规划、无线覆盖优化等</li>
            <li>兼容客户自有智能设备，也可部署自营产品，保障安全与集成效率</li>
            <li>HomeAssistant 平台配置支持，实现多厂商设备的自动化统一控制</li>
            <li>小型办公网络与安防规划、远程运维、安全接入</li>
          </ul>
        </Section>

        <Section title="智能硬件研发" id="hardware">
          <p>我们基于 ESP8266 / ESP32 开发定制化智能硬件，支持：</p>
          <ul style={ulStyle}>
            <li>远程控制家中电脑，实现软开关机</li>
            <li>通过红外控制非智能设备（如老式空调）</li>
            <li>可视化操作面板，极简 UI，分为固定版与移动版</li>
            <li>Wi-Fi 直连，极低功耗运行</li>
            <li>未来支持更多技能扩展，实现“一屏多控”</li>
          </ul>
        </Section>

        <Section title="物联网平台规划" id="iot">
          <p>我们的平台采用 Java + Spring Cloud 架构，结合阿里云 IoT 平台与本地私有部署能力，具备以下特点：</p>
          <ul style={ulStyle}>
            <li>微服务化架构，支持模块化扩展</li>
            <li>支持本地化部署，保障用户隐私与数据安全</li>
            <li>跨平台客户端支持：微信小程序、H5、App</li>
            <li>面向智慧农业、环境保护、医疗数据、电力监测等多场景可扩展</li>
          </ul>
        </Section>

        <Section title="关于我们" id="about">
          <p>青竹智连科技有限公司以“技术创新、智能互联”为核心驱动力，提供覆盖软硬件全链路的智能解决方案。我们坚信，未来所有场景都需要一个融合控制、数据、互通的开放系统。</p>
        </Section>

        <Section title="联系方式" id="contact">
          <p>官网地址：<a href="https://ibamboos.dpdns.org/">ibamboos.dpdns.org</a></p>
          <p>联系邮箱：<a href="mailto:contact@ibamboos.dpdns.org">contact@ibamboos.dpdns.org</a></p>
          <p>微信客服：敬请扫码添加</p>
        </Section>
      </main>

      <footer style={{ background: "#006241", color: "white", textAlign: "center", padding: "1.5em 1em", fontSize: "0.9em" }}>
        &copy; 2025 青竹智连科技有限公司 · iBamboos.dpdns.org · All Rights Reserved
      </footer>
    </div>
  );
}

const Section: React.FC<{ title: string; id?: string; children: React.ReactNode }> = ({ title, id, children }) => (
  <section id={id} style={{ marginBottom: "2.5em" }}>
    <h2 style={{ color: "#006241" }}>{title}</h2>
    {children}
  </section>
);

const navStyle: React.CSSProperties = {
  color: "white",
  margin: "0 1em",
  textDecoration: "none",
  fontWeight: "bold",
};

const ulStyle: React.CSSProperties = {
  lineHeight: 1.8,
};

export default App;
