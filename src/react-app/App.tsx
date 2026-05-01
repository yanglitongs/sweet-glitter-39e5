import { useState } from "react";
import "./App.css";

type Lang = "zh" | "en";

const navItems = {
  zh: [
    { href: "#services", label: "服务体系" },
    { href: "#hardware", label: "硬件研发" },
    { href: "#platform", label: "平台架构" },
    { href: "#cases", label: "案例参考" },
    { href: "#process", label: "交付流程" },
    { href: "#contact", label: "联系" },
  ],
  en: [
    { href: "#services", label: "Services" },
    { href: "#hardware", label: "Hardware" },
    { href: "#platform", label: "Platform" },
    { href: "#cases", label: "Cases" },
    { href: "#process", label: "Delivery" },
    { href: "#contact", label: "Contact" },
  ],
};

const copy = {
  zh: {
    brand: "青竹智连科技",
    brandSub: "iBamboos · 智能融合",
    language: "EN",
    eyebrow: "智能融合 · 连接未来",
    heroTitle: "把分散设备变成可运维的智能系统",
    heroCopy:
      "青竹智连科技面向家庭、小型办公与行业试点场景，提供网络规划、智能硬件、自动化配置、IoT 平台和长期运维的一体化方案。",
    primary: "预约方案沟通",
    secondary: "查看平台架构",
    dashboardTitle: "类核心方案",
    dashboardCopy: "智能家庭、办公网络、硬件改造、IoT 平台规划",
    missionKicker: "公司使命",
    missionTitle: "从一个房间、一间办公室，到一套可扩展的平台",
    missionText:
      "我们关注的不只是“能控制”，而是设备能被稳定接入、规则能被持续维护、数据能被沉淀复用。方案从个人家庭场景出发，逐步覆盖中小企业和行业数据监控需求。",
    servicesKicker: "服务体系",
    servicesTitle: "更细的模块拆分，更清楚的交付边界",
    servicesText: "从前期规划到后期维护，每一类服务都拆成可确认、可实施、可验收的内容。",
    hardwareKicker: "智能硬件研发",
    hardwareTitle: "让旧设备、低成本设备和定制场景都能接入系统",
    hardwareText:
      "通过 ESP8266 / ESP32 低功耗模块、红外控制、继电器和传感采集，将传统设备纳入统一控制和数据回传体系。",
    platformKicker: "物联网平台架构",
    platformTitle: "云端、本地、自动化规则和多端应用协同",
    platformText: "平台规划不只展示设备列表，还会考虑设备模型、规则触发、数据记录、告警闭环和多端使用体验。",
    matrixKicker: "能力矩阵",
    matrixTitle: "把“能做什么”拆成可对照的能力表",
    casesKicker: "公开案例参考",
    casesTitle: "用国际案例校准方案表达",
    casesText:
      "以下案例来自公开资料，用来说明智能家居、楼宇监测、智慧农业和工业 IoT 的成熟实践方向。本网站不声称这些案例由青竹智连实施。",
    scenariosKicker: "场景方案",
    scenariosTitle: "让不同用户一眼看到适合自己的应用方式",
    processKicker: "交付流程",
    processTitle: "从需求到长期运维，每一步都有可交付物",
    faqKicker: "常见问题",
    faqTitle: "先把关键顾虑说清楚",
    contactKicker: "联系青竹智连",
    contactTitle: "把设备清单和目标场景发来，我们一起把方案落细",
    contactText: "可以从一个房间、一个办公室或一个单点设备开始，先做可验证的小闭环，再逐步扩展到更完整的平台。",
    sourceLabel: "资料来源",
    footer: "© 2025 青竹智连科技有限公司",
  },
  en: {
    brand: "iBamboos Smart Link",
    brandSub: "Connected intelligence",
    language: "中文",
    eyebrow: "Smart Integration · Connected Future",
    heroTitle: "Turn scattered devices into an operable smart system",
    heroCopy:
      "iBamboos supports smart homes, small offices, and industry pilots with network planning, custom IoT hardware, automation setup, platform architecture, and long-term operations.",
    primary: "Discuss a Solution",
    secondary: "View Architecture",
    dashboardTitle: "solution pillars",
    dashboardCopy: "Smart home, office network, hardware retrofit, and IoT platform planning",
    missionKicker: "Mission",
    missionTitle: "From one room or office to a scalable connected platform",
    missionText:
      "We focus beyond basic control: devices should connect reliably, automation rules should remain maintainable, and data should become reusable operational assets.",
    servicesKicker: "Service System",
    servicesTitle: "Detailed modules with clear delivery boundaries",
    servicesText: "Each service is broken into confirmable, implementable, and verifiable delivery items.",
    hardwareKicker: "Smart Hardware",
    hardwareTitle: "Connect legacy devices, low-cost modules, and custom scenarios",
    hardwareText:
      "Using ESP8266 / ESP32 modules, infrared control, relays, and sensors, traditional devices can join unified control and telemetry workflows.",
    platformKicker: "IoT Platform Architecture",
    platformTitle: "Cloud, local control, automation rules, and multi-end apps",
    platformText:
      "The platform plan covers device models, rule triggers, data records, alert loops, and user experience across multiple clients.",
    matrixKicker: "Capability Matrix",
    matrixTitle: "A practical map of what the system can deliver",
    casesKicker: "Public Case References",
    casesTitle: "Benchmark the message with global IoT examples",
    casesText:
      "The following public cases illustrate mature practices in smart homes, remote building monitoring, smart agriculture, and industrial IoT. They are references only and are not claimed as iBamboos projects.",
    scenariosKicker: "Scenario Solutions",
    scenariosTitle: "Help each user find the right application path quickly",
    processKicker: "Delivery Process",
    processTitle: "Every step has a concrete deliverable",
    faqKicker: "FAQ",
    faqTitle: "Answer important concerns upfront",
    contactKicker: "Contact iBamboos",
    contactTitle: "Send your device list and target scenario. We will refine the plan together.",
    contactText:
      "Start from one room, one office, or one device. Build a small validated loop first, then expand toward a complete platform.",
    sourceLabel: "Source",
    footer: "© 2025 iBamboos Smart Link Technology",
  },
};

const heroStats = {
  zh: [
    { value: "Home", label: "家庭与办公智能化" },
    { value: "IoT", label: "设备接入与数据平台" },
    { value: "Edge", label: "本地化控制与隐私保护" },
  ],
  en: [
    { value: "Home", label: "Smart home and office" },
    { value: "IoT", label: "Device access and data platform" },
    { value: "Edge", label: "Local control and privacy" },
  ],
};

const serviceCards = {
  zh: [
    { title: "家庭智能化部署", summary: "把门锁、照明、空调、安防、网络和传感器接入统一控制入口。", points: ["HomeAssistant 联动配置", "无线覆盖与路由优化", "远程访问与权限策略"] },
    { title: "办公网络与安防规划", summary: "适合门店、工作室、小型办公室，兼顾稳定网络和可追溯安全。", points: ["访客网络隔离", "摄像头与门禁联动", "远程运维与故障排查"] },
    { title: "旧设备智能化改造", summary: "通过红外、继电器、低功耗控制板，让非智能设备加入自动化系统。", points: ["传统空调红外控制", "电脑远程软开关机", "状态反馈与异常提醒"] },
    { title: "IoT 平台规划", summary: "从单点设备控制升级为可扩展的数据采集、规则引擎和多端展示。", points: ["云端与本地部署", "多端客户端规划", "行业场景数据看板"] },
  ],
  en: [
    { title: "Smart Home Deployment", summary: "Connect locks, lighting, HVAC, security, network devices, and sensors into one control surface.", points: ["Home Assistant automation", "Wi-Fi and routing optimization", "Remote access and permissions"] },
    { title: "Office Network and Security", summary: "Designed for stores, studios, and small offices that need reliable networking and traceable access.", points: ["Guest network isolation", "Camera and access linkage", "Remote troubleshooting"] },
    { title: "Legacy Device Retrofit", summary: "Use infrared, relays, and low-power boards to bring non-smart devices into automation.", points: ["IR control for older AC units", "Remote PC power control", "Status feedback and alerts"] },
    { title: "IoT Platform Planning", summary: "Move from single-device control to scalable data collection, rule engines, and multi-client dashboards.", points: ["Cloud and local deployment", "Multi-end client planning", "Industry data dashboards"] },
  ],
};

const hardwareSpecs = {
  zh: [
    { label: "芯片方案", value: "ESP8266 / ESP32 / 低功耗 Wi-Fi 模块" },
    { label: "控制能力", value: "继电器、红外、GPIO、传感采集、状态回传" },
    { label: "交互方式", value: "网页面板、移动端入口、物理按键、自动化规则" },
    { label: "部署特点", value: "轻量、可维护、低成本、便于后续扩展" },
  ],
  en: [
    { label: "Chipset", value: "ESP8266 / ESP32 / low-power Wi-Fi modules" },
    { label: "Control", value: "Relay, IR, GPIO, sensor telemetry, and state feedback" },
    { label: "Interface", value: "Web panels, mobile entry, physical buttons, and automation rules" },
    { label: "Deployment", value: "Lightweight, maintainable, cost-aware, and expansion-ready" },
  ],
};

const platformLayers = {
  zh: [
    { name: "设备接入层", detail: "统一管理智能门锁、传感器、红外控制器、摄像头、网络设备和自研硬件。" },
    { name: "规则与自动化层", detail: "按时间、环境、人员、状态变化触发联动，减少重复操作。" },
    { name: "数据与告警层", detail: "沉淀设备状态、环境数据、异常记录和巡检信息，支持可视化看板。" },
    { name: "多端应用层", detail: "规划微信小程序、H5、App 和管理后台，满足家庭、办公与行业用户。" },
  ],
  en: [
    { name: "Device Access Layer", detail: "Manage locks, sensors, IR controllers, cameras, network devices, and custom hardware." },
    { name: "Rules and Automation", detail: "Trigger actions by time, environment, identity, and state changes to reduce repeated work." },
    { name: "Data and Alerts", detail: "Store device status, environmental data, exceptions, and inspection records for dashboards." },
    { name: "Multi-End Apps", detail: "Plan WeChat Mini Program, H5, mobile apps, and admin consoles for different users." },
  ],
};

const capabilityRows = {
  zh: [
    ["设备兼容", "接入客户已有设备", "按需补充自研硬件", "降低替换成本"],
    ["本地控制", "局域网内可用", "关键规则本地运行", "减少云端依赖"],
    ["远程运维", "远程诊断网络与设备", "配置备份和故障定位", "缩短维护时间"],
    ["安全策略", "权限分层与网络隔离", "私有化部署可选", "保护设备与数据"],
  ],
  en: [
    ["Compatibility", "Reuse existing devices", "Add custom modules when needed", "Reduce replacement cost"],
    ["Local Control", "Works on LAN", "Critical rules run locally", "Less cloud dependency"],
    ["Remote Ops", "Diagnose network and devices remotely", "Config backup and fault location", "Shorter maintenance time"],
    ["Security", "Layered access and network isolation", "Private deployment available", "Protect devices and data"],
  ],
};

const caseStudies = {
  zh: [
    {
      title: "Home Assistant：本地控制与隐私优先",
      region: "智能家居参考",
      summary: "Home Assistant 官方定位强调开源家庭自动化、本地控制和隐私优先，并提供大量设备集成能力。",
      takeaway: "青竹智连可借鉴其“本地优先 + 多品牌集成”的表达方式，突出家庭场景的可靠性和隐私价值。",
      source: "Home Assistant",
      url: "https://www.home-assistant.io/",
    },
    {
      title: "Forest Rock：楼宇能耗传感远程监测",
      region: "智能楼宇参考",
      summary: "ZeroTier 案例显示，Forest Rock 需要跨客户设施实时、安全地查看能耗传感器和楼宇系统状态。",
      takeaway: "适合转化为小型办公、门店、楼宇机房的远程监控和故障响应叙事。",
      source: "ZeroTier Customer Story",
      url: "https://www.zerotier.com/customer-story/building-a-remote-solution/",
    },
    {
      title: "Hortica：智慧温室快速上线",
      region: "智慧农业参考",
      summary: "Microsoft 案例中，Hortica 通过 Azure IoT 方案连接智能灌溉单元，并远程控制每个单元 30 多个传感器。",
      takeaway: "适合展示传感采集、边缘分析、触发告警和农业环境控制的方案路径。",
      source: "Microsoft Partner",
      url: "https://partner.microsoft.com/en-us/case-studies/cloudofthings",
    },
    {
      title: "Siemens Energy：工业 IoT 数据平台",
      region: "工业物联参考",
      summary: "AWS 案例显示，Siemens Energy 用工业 IoT 平台监测生产和能源使用，并推进预测性维护。",
      takeaway: "适合说明从设备接入到数据平台、维护成本优化和机器可用性的长期价值。",
      source: "AWS Customer Story",
      url: "https://aws.amazon.com/solutions/case-studies/siemens-energy-video-case-study/",
    },
  ],
  en: [
    {
      title: "Home Assistant: Local Control and Privacy First",
      region: "Smart home reference",
      summary: "Home Assistant positions itself as open-source home automation focused on local control, privacy, and broad integrations.",
      takeaway: "iBamboos can use a similar local-first, multi-brand integration message for reliable and private home automation.",
      source: "Home Assistant",
      url: "https://www.home-assistant.io/",
    },
    {
      title: "Forest Rock: Remote Building Energy Monitoring",
      region: "Smart building reference",
      summary: "ZeroTier's customer story describes Forest Rock's need for secure, real-time visibility into energy sensors across customer facilities.",
      takeaway: "This maps well to remote monitoring and incident response for small offices, stores, and equipment rooms.",
      source: "ZeroTier Customer Story",
      url: "https://www.zerotier.com/customer-story/building-a-remote-solution/",
    },
    {
      title: "Hortica: Fast Smart Greenhouse Launch",
      region: "Smart agriculture reference",
      summary: "Microsoft's case study says Hortica connected smart irrigation units to Azure IoT and remotely controlled more than 30 sensors per unit.",
      takeaway: "A strong reference for sensor collection, edge analytics, trigger alerts, and controlled cultivation environments.",
      source: "Microsoft Partner",
      url: "https://partner.microsoft.com/en-us/case-studies/cloudofthings",
    },
    {
      title: "Siemens Energy: Industrial IoT Data Platform",
      region: "Industrial IoT reference",
      summary: "AWS describes Siemens Energy using an Industrial IoT platform to monitor production, energy use, and predictive maintenance needs.",
      takeaway: "Useful for explaining long-term value from device access to data platforms, maintenance cost reduction, and availability.",
      source: "AWS Customer Story",
      url: "https://aws.amazon.com/solutions/case-studies/siemens-energy-video-case-study/",
    },
  ],
};

const scenarios = {
  zh: [
    { name: "智慧家庭", detail: "回家开门联动灯光、空调与安防；离家自动关闭高耗电设备并开启布防。", tags: ["门禁", "照明", "空调", "安防"] },
    { name: "智慧办公", detail: "访客网络隔离、门禁记录、摄像头联动和远程巡检，降低日常维护成本。", tags: ["网络", "权限", "巡检", "远程运维"] },
    { name: "智慧农业", detail: "采集温湿度、光照、水位等数据，联动灌溉、通风和异常告警。", tags: ["传感采集", "环境联动", "告警"] },
    { name: "能源与设备监测", detail: "记录设备运行状态、电力数据和异常事件，为运维决策提供依据。", tags: ["数据留痕", "状态看板", "告警"] },
  ],
  en: [
    { name: "Smart Home", detail: "Door unlock triggers lighting, HVAC, and security scenes; leaving home powers down high-consumption devices.", tags: ["Access", "Lighting", "HVAC", "Security"] },
    { name: "Smart Office", detail: "Guest isolation, access logs, camera linkage, and remote inspection reduce daily maintenance cost.", tags: ["Network", "Access", "Inspection", "Remote Ops"] },
    { name: "Smart Agriculture", detail: "Collect humidity, light, water level, and other data to trigger irrigation, ventilation, and alerts.", tags: ["Sensors", "Environment", "Alerts"] },
    { name: "Energy and Assets", detail: "Record device status, power data, and exceptions to support operational decisions.", tags: ["Logs", "Dashboard", "Alerts"] },
  ],
};

const process = {
  zh: [
    { step: "01", title: "需求盘点", text: "梳理现有设备、网络结构、控制目标和后续扩展方向。" },
    { step: "02", title: "方案设计", text: "输出设备清单、网络拓扑、自动化规则和平台接入路径。" },
    { step: "03", title: "部署调试", text: "完成硬件安装、系统配置、联动测试和异常场景校验。" },
    { step: "04", title: "交付运维", text: "提供使用说明、配置备份、远程支持和后续功能扩展。" },
  ],
  en: [
    { step: "01", title: "Discovery", text: "Review existing devices, network topology, control goals, and expansion needs." },
    { step: "02", title: "Design", text: "Deliver device lists, network topology, automation rules, and platform access paths." },
    { step: "03", title: "Deployment", text: "Install hardware, configure systems, test linkages, and validate exception cases." },
    { step: "04", title: "Operations", text: "Provide documentation, configuration backups, remote support, and feature expansion." },
  ],
};

const faqs = {
  zh: [
    { q: "已有智能设备还能继续用吗？", a: "可以。优先评估现有设备协议与接入方式，能兼容的继续保留，无法接入的再通过自研模块或替代方案补足。" },
    { q: "没有公网 IP 可以远程控制吗？", a: "可以根据场景选择安全隧道、云端中转或本地优先的方案，重点是保证远程可用性和访问权限安全。" },
    { q: "后续能扩展到行业应用吗？", a: "可以。平台规划会预留设备模型、数据采集、告警规则和多端展示能力，便于从家庭和办公逐步扩展。" },
  ],
  en: [
    { q: "Can existing smart devices still be used?", a: "Yes. We evaluate protocols and access methods first, keep compatible devices, and add custom modules only where needed." },
    { q: "Can remote control work without a public IP?", a: "Yes. Depending on the scenario, secure tunnels, cloud relay, or local-first access patterns can be used." },
    { q: "Can the system expand into industry scenarios?", a: "Yes. Device models, data collection, alert rules, and multi-end dashboards can be planned from the start." },
  ],
};

function App() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = copy[lang];

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label={t.brand}>
          <img src="/logo.png" alt="iBamboos logo" />
          <span>
            <strong>{t.brand}</strong>
            <small>{t.brandSub}</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems[lang].map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <button className="language-toggle" type="button" onClick={() => setLang(lang === "zh" ? "en" : "zh")}>
            {t.language}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-copy">{t.heroCopy}</p>
            <div className="hero-actions">
              <a className="primary-action" href="#contact">{t.primary}</a>
              <a className="secondary-action" href="#platform">{t.secondary}</a>
            </div>
          </div>
          <div className="hero-dashboard" aria-label="Capability overview">
            <div className="dashboard-card brand-card">
              <span className="metric">4</span>
              <strong>{t.dashboardTitle}</strong>
              <p>{t.dashboardCopy}</p>
            </div>
            {heroStats[lang].map((stat) => (
              <div className="dashboard-card" key={stat.value}>
                <span>{stat.value}</span>
                <strong>{stat.label}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section intro-strip" aria-label={t.missionKicker}>
          <div>
            <p className="section-kicker">{t.missionKicker}</p>
            <h2>{t.missionTitle}</h2>
          </div>
          <p>{t.missionText}</p>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="section-kicker">{t.servicesKicker}</p>
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesText}</p>
          </div>
          <div className="service-grid">
            {serviceCards[lang].map((card) => (
              <article className="service-card" key={card.title}>
                <span className="card-mark" aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.summary}</p>
                <ul>
                  {card.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section" id="hardware">
          <div className="section-heading">
            <p className="section-kicker">{t.hardwareKicker}</p>
            <h2>{t.hardwareTitle}</h2>
            <p>{t.hardwareText}</p>
          </div>
          <div className="spec-panel">
            {hardwareSpecs[lang].map((item) => (
              <div className="spec-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section architecture-section" id="platform">
          <div className="section-heading">
            <p className="section-kicker">{t.platformKicker}</p>
            <h2>{t.platformTitle}</h2>
            <p>{t.platformText}</p>
          </div>
          <div className="architecture-grid">
            {platformLayers[lang].map((layer, index) => (
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
            <p className="section-kicker">{t.matrixKicker}</p>
            <h2>{t.matrixTitle}</h2>
          </div>
          <div className="capability-table" role="table" aria-label={t.matrixKicker}>
            {capabilityRows[lang].map((row) => (
              <div className="capability-row" role="row" key={row[0]}>
                {row.map((cell, index) => (
                  <span className={index === 0 ? "row-title" : ""} role="cell" key={cell}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="section case-section" id="cases">
          <div className="section-heading">
            <p className="section-kicker">{t.casesKicker}</p>
            <h2>{t.casesTitle}</h2>
            <p>{t.casesText}</p>
          </div>
          <div className="case-grid">
            {caseStudies[lang].map((item) => (
              <article className="case-card" key={item.title}>
                <span className="case-region">{item.region}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <strong>{item.takeaway}</strong>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {t.sourceLabel}: {item.source}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="scenarios">
          <div className="section-heading">
            <p className="section-kicker">{t.scenariosKicker}</p>
            <h2>{t.scenariosTitle}</h2>
          </div>
          <div className="scenario-grid">
            {scenarios[lang].map((scenario) => (
              <article className="scenario-card" key={scenario.name}>
                <h3>{scenario.name}</h3>
                <p>{scenario.detail}</p>
                <div className="tag-list">
                  {scenario.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading">
            <p className="section-kicker">{t.processKicker}</p>
            <h2>{t.processTitle}</h2>
          </div>
          <ol className="process-list">
            {process[lang].map((item) => (
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
            <p className="section-kicker">{t.faqKicker}</p>
            <h2>{t.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {faqs[lang].map((faq) => (
              <article className="faq-item" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-kicker">{t.contactKicker}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>
          <div className="contact-card">
            <a href="https://ibamboos.dpdns.org/">ibamboos.dpdns.org</a>
            <a href="mailto:yanglt@ibamboos.dpdns.org">yanglt@ibamboos.dpdns.org</a>
            <span>{lang === "zh" ? "微信客服：yanglitongs" : "WeChat: yanglitongs"}</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>{t.footer}</span>
        <span>iBamboos.dpdns.org · All Rights Reserved</span>
      </footer>
    </div>
  );
}

export default App;
