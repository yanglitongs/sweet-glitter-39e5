import "./App.css";

const navItems = [
  { href: "#services", label: "服务" },
  { href: "#hardware", label: "硬件" },
  { href: "#platform", label: "平台" },
  { href: "#scenarios", label: "场景" },
  { href: "#process", label: "流程" },
  { href: "#contact", label: "联系" },
];

const serviceCards = [
  {
    title: "家庭智能化部署",
    text: "覆盖智能门锁、门禁、远程控制、无线覆盖优化与 HomeAssistant 自动化，让家中设备统一联动。",
  },
  {
    title: "小型办公网络与安防",
    text: "面向门店、工作室和办公室，提供路由规划、访客网络、安全接入、远程运维和监控联动。",
  },
  {
    title: "设备集成与自动化",
    text: "兼容客户已有设备，也可部署自研硬件，减少重复采购，让系统更稳定、更容易扩展。",
  },
];

const hardwareItems = [
  "ESP8266 / ESP32 定制硬件开发",
  "电脑远程软开关机与状态反馈",
  "红外控制传统空调、电视等非智能设备",
  "低功耗 Wi-Fi 直连与可视化控制面板",
];

const platformItems = [
  "Java + Spring Cloud 微服务架构",
  "支持阿里云 IoT 与本地私有化部署",
  "微信小程序、H5、App 多端接入规划",
  "可扩展到农业、环保、医疗数据、电力监测等行业",
];

const scenarios = [
  { name: "智慧家庭", value: "门禁、照明、空调、网络一体化" },
  { name: "智慧办公", value: "安全接入、网络巡检、远程协同" },
  { name: "智慧农业", value: "传感采集、环境联动、异常预警" },
  { name: "设备运维", value: "状态看板、远程控制、数据留痕" },
];

const process = [
  "现场或远程需求梳理",
  "网络、设备与平台方案设计",
  "硬件接入和自动化规则配置",
  "交付培训、监控运维和后续扩展",
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="青竹智连科技首页">
          <img src="/logo.png" alt="iBamboos logo" />
          <span>
            <strong>青竹智连科技</strong>
            <small>iBamboos</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">智能融合 · 连接未来</p>
            <h1>面向家庭与小型组织的智能物联解决方案</h1>
            <p className="hero-copy">
              从家庭自动化、办公网络到自研 IoT 硬件与平台规划，青竹智连科技把分散设备、数据和场景连接成可管理、可扩展、可持续运维的系统。
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#contact">
                获取方案
              </a>
              <a className="secondary-action" href="#services">
                查看能力
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="能力概览">
            <div className="signal-card large">
              <span className="metric">4</span>
              <span>核心交付方向</span>
            </div>
            <div className="signal-card">
              <span>HomeAssistant</span>
              <strong>统一自动化</strong>
            </div>
            <div className="signal-card">
              <span>ESP32 / ESP8266</span>
              <strong>自研硬件</strong>
            </div>
            <div className="signal-card">
              <span>Cloud + Local</span>
              <strong>灵活部署</strong>
            </div>
          </div>
        </section>

        <section className="section intro-strip" aria-label="公司使命">
          <div>
            <p className="section-kicker">公司使命</p>
            <h2>用更清晰的系统，把设备真正连起来</h2>
          </div>
          <p>
            我们从个人家庭场景出发，逐步覆盖中小企业和大型机构的智能化与数据监控需求，重点解决设备割裂、网络不稳、控制入口分散和后续运维困难的问题。
          </p>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="section-kicker">核心服务</p>
            <h2>从部署到运维的一体化能力</h2>
          </div>
          <div className="card-grid">
            {serviceCards.map((card) => (
              <article className="feature-card" key={card.title}>
                <span className="card-mark" aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section" id="hardware">
          <div className="section-heading">
            <p className="section-kicker">智能硬件研发</p>
            <h2>让传统设备也能进入自动化系统</h2>
            <p>
              基于低功耗芯片和轻量化控制逻辑，构建可部署、可维护、可扩展的智能硬件模块。
            </p>
          </div>
          <ul className="check-list">
            {hardwareItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="split-section reverse" id="platform">
          <div className="section-heading">
            <p className="section-kicker">物联网平台规划</p>
            <h2>云端、本地与多端客户端协同</h2>
            <p>
              平台采用模块化架构，兼顾快速试点、私有化部署和未来行业化扩展。
            </p>
          </div>
          <ul className="check-list platform-list">
            {platformItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section" id="scenarios">
          <div className="section-heading">
            <p className="section-kicker">更多功能展示</p>
            <h2>可覆盖的典型应用场景</h2>
          </div>
          <div className="scenario-grid">
            {scenarios.map((scenario) => (
              <article className="scenario-item" key={scenario.name}>
                <h3>{scenario.name}</h3>
                <p>{scenario.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading">
            <p className="section-kicker">实施流程</p>
            <h2>把想法落到可使用的系统</h2>
          </div>
          <ol className="process-list">
            {process.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-kicker">联系青竹智连</p>
            <h2>需要一个更稳定、更清楚的智能系统？</h2>
            <p>
              发送当前设备、网络环境和目标场景，我们可以协助梳理部署路径和后续扩展方式。
            </p>
          </div>
          <div className="contact-card">
            <a href="https://ibamboos.dpdns.org/">ibamboos.dpdns.org</a>
            <a href="mailto:yanglt@ibamboos.dpdns.org">yanglt@ibamboos.dpdns.org</a>
            <span>微信客服：yanglitongs</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2025 青竹智连科技有限公司</span>
        <span>iBamboos.dpdns.org · All Rights Reserved</span>
      </footer>
    </div>
  );
}

export default App;
