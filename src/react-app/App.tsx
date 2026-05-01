import "./App.css";

const navItems = [
  { href: "#services", label: "服务体系" },
  { href: "#hardware", label: "硬件研发" },
  { href: "#platform", label: "平台架构" },
  { href: "#scenarios", label: "场景方案" },
  { href: "#process", label: "交付流程" },
  { href: "#contact", label: "联系" },
];

const heroStats = [
  { value: "Home", label: "家庭与办公智能化" },
  { value: "IoT", label: "设备接入与数据平台" },
  { value: "Edge", label: "本地化控制与隐私保护" },
];

const serviceCards = [
  {
    title: "家庭智能化部署",
    summary: "把门锁、照明、空调、安防、网络和传感器接入统一控制入口。",
    points: ["HomeAssistant 联动配置", "无线覆盖与路由优化", "远程访问与权限策略"],
  },
  {
    title: "办公网络与安防规划",
    summary: "适合门店、工作室、小型办公室，兼顾稳定网络和可追溯安全。",
    points: ["访客网络隔离", "摄像头与门禁联动", "远程运维与故障排查"],
  },
  {
    title: "旧设备智能化改造",
    summary: "通过红外、继电器、低功耗控制板，让非智能设备加入自动化系统。",
    points: ["传统空调红外控制", "电脑远程软开关机", "状态反馈与异常提醒"],
  },
  {
    title: "IoT 平台规划",
    summary: "从单点设备控制升级为可扩展的数据采集、规则引擎和多端展示。",
    points: ["云端与本地部署", "多端客户端规划", "行业场景数据看板"],
  },
];

const hardwareSpecs = [
  { label: "芯片方案", value: "ESP8266 / ESP32 / 低功耗 Wi-Fi 模块" },
  { label: "控制能力", value: "继电器、红外、GPIO、传感采集、状态回传" },
  { label: "交互方式", value: "网页面板、移动端入口、物理按键、自动化规则" },
  { label: "部署特点", value: "轻量、可维护、低成本、便于后续扩展" },
];

const platformLayers = [
  {
    name: "设备接入层",
    detail: "统一管理智能门锁、传感器、红外控制器、摄像头、网络设备和自研硬件。",
  },
  {
    name: "规则与自动化层",
    detail: "按时间、环境、人员、状态变化触发联动，减少重复操作。",
  },
  {
    name: "数据与告警层",
    detail: "沉淀设备状态、环境数据、异常记录和巡检信息，支持可视化看板。",
  },
  {
    name: "多端应用层",
    detail: "规划微信小程序、H5、App 和管理后台，满足家庭、办公与行业用户。",
  },
];

const scenarios = [
  {
    name: "智慧家庭",
    detail: "回家开门联动灯光、空调与安防；离家自动关闭高耗电设备并开启布防。",
    tags: ["门禁", "照明", "空调", "安防"],
  },
  {
    name: "智慧办公",
    detail: "访客网络隔离、门禁记录、摄像头联动和远程巡检，降低日常维护成本。",
    tags: ["网络", "权限", "巡检", "远程运维"],
  },
  {
    name: "智慧农业",
    detail: "采集温湿度、光照、水位等数据，联动灌溉、通风和异常告警。",
    tags: ["传感采集", "环境联动", "告警"],
  },
  {
    name: "能源与设备监测",
    detail: "记录设备运行状态、电力数据和异常事件，为运维决策提供依据。",
    tags: ["数据留痕", "状态看板", "告警"],
  },
];

const capabilityRows = [
  ["设备兼容", "接入客户已有设备", "按需补充自研硬件", "降低替换成本"],
  ["本地控制", "局域网内可用", "关键规则本地运行", "减少云端依赖"],
  ["远程运维", "远程诊断网络与设备", "配置备份和故障定位", "缩短维护时间"],
  ["安全策略", "权限分层与网络隔离", "私有化部署可选", "保护设备与数据"],
];

const process = [
  {
    step: "01",
    title: "需求盘点",
    text: "梳理现有设备、网络结构、控制目标和后续扩展方向。",
  },
  {
    step: "02",
    title: "方案设计",
    text: "输出设备清单、网络拓扑、自动化规则和平台接入路径。",
  },
  {
    step: "03",
    title: "部署调试",
    text: "完成硬件安装、系统配置、联动测试和异常场景校验。",
  },
  {
    step: "04",
    title: "交付运维",
    text: "提供使用说明、配置备份、远程支持和后续功能扩展。",
  },
];

const faqs = [
  {
    q: "已有智能设备还能继续用吗？",
    a: "可以。优先评估现有设备协议与接入方式，能兼容的继续保留，无法接入的再通过自研模块或替代方案补足。",
  },
  {
    q: "没有公网 IP 可以远程控制吗？",
    a: "可以根据场景选择安全隧道、云端中转或本地优先的方案，重点是保证远程可用性和访问权限安全。",
  },
  {
    q: "后续能扩展到行业应用吗？",
    a: "可以。平台规划会预留设备模型、数据采集、告警规则和多端展示能力，便于从家庭和办公逐步扩展。",
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="青竹智连科技首页">
          <img src="/logo.png" alt="iBamboos logo" />
          <span>
            <strong>青竹智连科技</strong>
            <small>iBamboos · 智能融合</small>
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
            <h1>把分散设备变成可运维的智能系统</h1>
            <p className="hero-copy">
              青竹智连科技面向家庭、小型办公与行业试点场景，提供网络规划、智能硬件、自动化配置、IoT 平台和长期运维的一体化方案。
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#contact">
                预约方案沟通
              </a>
              <a className="secondary-action" href="#platform">
                查看平台架构
              </a>
            </div>
          </div>
          <div className="hero-dashboard" aria-label="核心能力概览">
            <div className="dashboard-card brand-card">
              <span className="metric">4</span>
              <strong>类核心方案</strong>
              <p>智能家庭、办公网络、硬件改造、IoT 平台规划</p>
            </div>
            {heroStats.map((stat) => (
              <div className="dashboard-card" key={stat.value}>
                <span>{stat.value}</span>
                <strong>{stat.label}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section intro-strip" aria-label="公司使命">
          <div>
            <p className="section-kicker">公司使命</p>
            <h2>从一个房间、一间办公室，到一套可扩展的平台</h2>
          </div>
          <p>
            我们关注的不只是“能控制”，而是设备能被稳定接入、规则能被持续维护、数据能被沉淀复用。方案从个人家庭场景出发，逐步覆盖中小企业和行业数据监控需求。
          </p>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="section-kicker">服务体系</p>
            <h2>更细的模块拆分，更清楚的交付边界</h2>
            <p>从前期规划到后期维护，每一类服务都拆成可确认、可实施、可验收的内容。</p>
          </div>
          <div className="service-grid">
            {serviceCards.map((card) => (
              <article className="service-card" key={card.title}>
                <span className="card-mark" aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.summary}</p>
                <ul>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section" id="hardware">
          <div className="section-heading">
            <p className="section-kicker">智能硬件研发</p>
            <h2>让旧设备、低成本设备和定制场景都能接入系统</h2>
            <p>
              通过 ESP8266 / ESP32 低功耗模块、红外控制、继电器和传感采集，将传统设备纳入统一控制和数据回传体系。
            </p>
          </div>
          <div className="spec-panel">
            {hardwareSpecs.map((item) => (
              <div className="spec-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section architecture-section" id="platform">
          <div className="section-heading">
            <p className="section-kicker">物联网平台架构</p>
            <h2>云端、本地、自动化规则和多端应用协同</h2>
            <p>平台规划不只展示设备列表，还会考虑设备模型、规则触发、数据记录、告警闭环和多端使用体验。</p>
          </div>
          <div className="architecture-grid">
            {platformLayers.map((layer, index) => (
              <article className="layer-card" key={layer.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{layer.name}</h3>
                <p>{layer.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section matrix-section">
          <div className="section-heading">
            <p className="section-kicker">能力矩阵</p>
            <h2>把“能做什么”拆成可对照的能力表</h2>
          </div>
          <div className="capability-table" role="table" aria-label="能力矩阵">
            {capabilityRows.map((row) => (
              <div className="capability-row" role="row" key={row[0]}>
                {row.map((cell, index) => (
                  <span className={index === 0 ? "row-title" : ""} role="cell" key={cell}>
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="scenarios">
          <div className="section-heading">
            <p className="section-kicker">场景方案</p>
            <h2>让不同用户一眼看到适合自己的应用方式</h2>
          </div>
          <div className="scenario-grid">
            {scenarios.map((scenario) => (
              <article className="scenario-card" key={scenario.name}>
                <h3>{scenario.name}</h3>
                <p>{scenario.detail}</p>
                <div className="tag-list">
                  {scenario.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading">
            <p className="section-kicker">交付流程</p>
            <h2>从需求到长期运维，每一步都有可交付物</h2>
          </div>
          <ol className="process-list">
            {process.map((item) => (
              <li key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section faq-section">
          <div className="section-heading">
            <p className="section-kicker">常见问题</p>
            <h2>先把关键顾虑说清楚</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-kicker">联系青竹智连</p>
            <h2>把设备清单和目标场景发来，我们一起把方案落细</h2>
            <p>
              可以从一个房间、一个办公室或一个单点设备开始，先做可验证的小闭环，再逐步扩展到更完整的平台。
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
