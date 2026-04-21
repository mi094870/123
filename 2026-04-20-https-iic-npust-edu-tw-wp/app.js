const STAGE_LABELS = {
  all: "全部學制",
  senior: "高中職",
  junior: "國中",
  elementary: "國小"
};

const schools = [
  {
    id: "pths",
    name: "屏東高中",
    stage: "senior",
    town: "屏東市",
    countyX: 438,
    countyY: 366,
    focus: "早晚尖峰時段車流密集，校門口周邊路口需要更明確的人車分流。",
    riskSource: "校門口車流交織",
    improvement: "增加接送區導引與路口疏導",
    center: { x: 450, y: 300 },
    safestRoute: "文化路人行段 -> 校前分流口 -> 正門",
    fastestRoute: "忠孝路直行 -> 正門",
    safePath: "M160 470 C250 430, 300 360, 350 320 S420 270, 450 300",
    fastPath: "M120 300 C220 300, 320 300, 450 300",
    incidents: [
      { x: 350, y: 286, level: "danger", title: "校門口轉彎死角" },
      { x: 536, y: 248, level: "medium", title: "公車停靠衝突點" },
      { x: 392, y: 404, level: "high", title: "接送臨停熱區" }
    ],
    cameras: [
      { x: 310, y: 290, label: "路口監視 A" },
      { x: 575, y: 270, label: "校門監視 B" }
    ]
  },
  {
    id: "ptgsh",
    name: "屏東女中",
    stage: "senior",
    town: "屏東市",
    countyX: 420,
    countyY: 388,
    focus: "周邊道路為混合車流，放學時間需加強行人穿越與站牌區管理。",
    riskSource: "站牌與汽機車交會",
    improvement: "優化候車區與過路口導引",
    center: { x: 430, y: 288 },
    safestRoute: "林森路步行段 -> 側門安全走廊 -> 校園入口",
    fastestRoute: "公車站前直行 -> 校門",
    safePath: "M220 500 C280 430, 350 380, 390 340 S420 310, 430 288",
    fastPath: "M90 140 C220 150, 330 210, 430 288",
    incidents: [
      { x: 528, y: 292, level: "danger", title: "候車區擁擠點" },
      { x: 374, y: 206, level: "high", title: "穿越道視線不足" },
      { x: 462, y: 406, level: "medium", title: "側門臨停點" }
    ],
    cameras: [
      { x: 554, y: 304, label: "路口監視 C" },
      { x: 382, y: 190, label: "校外監視 D" }
    ]
  },
  {
    id: "dgsh",
    name: "東港高中",
    stage: "senior",
    town: "東港鎮",
    countyX: 392,
    countyY: 348,
    focus: "臨近市場與主要幹道，尖峰時間容易出現臨停與車速偏高的情況。",
    riskSource: "幹道車速過快",
    improvement: "增加減速提醒與熱點預警",
    center: { x: 458, y: 286 },
    safestRoute: "市場旁慢行段 -> 側門導引道 -> 校園",
    fastestRoute: "主幹道直行 -> 校門",
    safePath: "M210 520 C300 460, 360 390, 410 330 S440 300, 458 286",
    fastPath: "M60 300 C220 280, 340 282, 458 286",
    incidents: [
      { x: 535, y: 278, level: "danger", title: "幹道左轉熱點" },
      { x: 390, y: 220, level: "high", title: "市場人流交會" },
      { x: 432, y: 388, level: "medium", title: "巷口違停區" }
    ],
    cameras: [
      { x: 560, y: 280, label: "路口監視 E" },
      { x: 362, y: 230, label: "校前監視 F" }
    ]
  },
  {
    id: "chsh",
    name: "潮州高中",
    stage: "senior",
    town: "潮州鎮",
    countyX: 447,
    countyY: 341,
    focus: "火車站接駁與校門接送車流重疊，需要更清楚的進出動線規劃。",
    riskSource: "接駁與接送車交會",
    improvement: "安排臨停區與步行緩衝帶",
    center: { x: 476, y: 280 },
    safestRoute: "站前步行軸線 -> 慢行轉角 -> 校門",
    fastestRoute: "延平路直行 -> 校門",
    safePath: "M270 100 C340 150, 400 210, 442 248 S462 270, 476 280",
    fastPath: "M860 300 C760 292, 640 286, 476 280",
    incidents: [
      { x: 584, y: 282, level: "danger", title: "站前車流衝突點" },
      { x: 430, y: 236, level: "high", title: "轉角視線不足" },
      { x: 396, y: 354, level: "medium", title: "接送短停區" }
    ],
    cameras: [
      { x: 608, y: 282, label: "路口監視 G" },
      { x: 404, y: 220, label: "校門監視 H" }
    ]
  },
  {
    id: "ptjh",
    name: "屏東國中",
    stage: "junior",
    town: "屏東市",
    countyX: 376,
    countyY: 332,
    focus: "國中學生步行與自行車比例較高，需加強通學巷弄的辨識與照明。",
    riskSource: "側巷視線與違停",
    improvement: "補強照明與巷口警示",
    center: { x: 438, y: 296 },
    safestRoute: "社區慢行巷 -> 校前導引帶 -> 正門",
    fastestRoute: "直行幹道 -> 校門",
    safePath: "M120 520 C230 460, 310 392, 368 340 S412 308, 438 296",
    fastPath: "M40 300 C180 300, 300 298, 438 296",
    incidents: [
      { x: 352, y: 300, level: "danger", title: "巷口衝突點" },
      { x: 430, y: 232, level: "medium", title: "放學聚集區" },
      { x: 532, y: 314, level: "high", title: "校門臨停區" }
    ],
    cameras: [
      { x: 338, y: 306, label: "路口監視 I" },
      { x: 556, y: 320, label: "校外監視 J" }
    ]
  },
  {
    id: "dgjh",
    name: "東港國中",
    stage: "junior",
    town: "東港鎮",
    countyX: 452,
    countyY: 379,
    focus: "主要問題集中在校門前機車接送與轉彎車流，同步影響行人安全。",
    riskSource: "機車接送密度高",
    improvement: "調整家長接送排隊帶",
    center: { x: 430, y: 316 },
    safestRoute: "住宅區步道 -> 行人穿越帶 -> 校門",
    fastestRoute: "幹道快行 -> 校門",
    safePath: "M250 60 C300 130, 340 190, 372 248 S404 292, 430 316",
    fastPath: "M100 520 C220 440, 330 360, 430 316",
    incidents: [
      { x: 338, y: 318, level: "danger", title: "校門前交織區" },
      { x: 456, y: 396, level: "high", title: "家長臨停點" },
      { x: 512, y: 250, level: "medium", title: "穿越口壓力點" }
    ],
    cameras: [
      { x: 314, y: 320, label: "路口監視 K" },
      { x: 530, y: 246, label: "校門監視 L" }
    ]
  },
  {
    id: "ptes",
    name: "屏東國小",
    stage: "elementary",
    town: "屏東市",
    countyX: 364,
    countyY: 364,
    focus: "國小以家長接送與步行混合為主，學童辨識能力較弱，動線需更直觀。",
    riskSource: "接送區與行人混流",
    improvement: "設置明確接送分區與導引",
    center: { x: 452, y: 300 },
    safestRoute: "人行道主線 -> 護童崗哨點 -> 校門",
    fastestRoute: "直行主路 -> 校門",
    safePath: "M140 120 C230 170, 300 216, 360 256 S418 286, 452 300",
    fastPath: "M40 300 C180 300, 320 300, 452 300",
    incidents: [
      { x: 372, y: 302, level: "danger", title: "家長接送交會點" },
      { x: 438, y: 232, level: "medium", title: "護童崗哨點" },
      { x: 532, y: 300, level: "high", title: "違停風險點" }
    ],
    cameras: [
      { x: 346, y: 306, label: "路口監視 M" },
      { x: 554, y: 302, label: "校門監視 N" }
    ]
  },
  {
    id: "ches",
    name: "潮州國小",
    stage: "elementary",
    town: "潮州鎮",
    countyX: 470,
    countyY: 396,
    focus: "周邊巷道較窄，接送高峰時容易影響學童穿越與校門集散。",
    riskSource: "巷道會車壓力",
    improvement: "分散進出入口與提醒減速",
    center: { x: 444, y: 330 },
    safestRoute: "慢行巷道 -> 校前穿越帶 -> 校門",
    fastestRoute: "主路口直行 -> 校門",
    safePath: "M260 60 C310 140, 352 210, 390 266 S422 312, 444 330",
    fastPath: "M860 300 C700 314, 580 324, 444 330",
    incidents: [
      { x: 338, y: 332, level: "danger", title: "巷口會車點" },
      { x: 446, y: 416, level: "medium", title: "接送停等區" },
      { x: 538, y: 286, level: "high", title: "轉角視野不足" }
    ],
    cameras: [
      { x: 316, y: 336, label: "路口監視 O" },
      { x: 560, y: 286, label: "校門監視 P" }
    ]
  }
];

const countyIncidents = [
  { x: 372, y: 334, level: "danger", title: "屏東市校門接送熱區" },
  { x: 438, y: 376, level: "high", title: "東港鎮轉角違停點" },
  { x: 502, y: 294, level: "medium", title: "站前接駁混流區" },
  { x: 590, y: 272, level: "medium", title: "主要幹道路口壓力點" },
  { x: 300, y: 420, level: "high", title: "市場周邊通學交會區" }
];

const countyCameras = [
  { x: 350, y: 350, label: "設備 1" },
  { x: 464, y: 348, label: "設備 2" },
  { x: 544, y: 302, label: "設備 3" },
  { x: 322, y: 454, label: "設備 4" }
];

const recentAccidents = [
  { type: "A3 交通事件", place: "屏東市文化路口", time: "10:12", note: "疑似臨停造成視線遮蔽，已列入熱點觀察。" },
  { type: "A3 交通事件", place: "東港鎮站前周邊", time: "09:48", note: "公車靠站與機車轉向造成短暫交會風險。" },
  { type: "A3 交通事件", place: "潮州鎮校前路段", time: "09:05", note: "放學接送高峰出現車流回堵情形。" }
];

const weatherStates = [
  { label: "晴天", modifier: -4, road: "路面乾燥", events: 1 },
  { label: "陰天", modifier: 0, road: "能見度正常", events: 2 },
  { label: "小雨", modifier: 6, road: "路面濕滑", events: 3 },
  { label: "大雨", modifier: 12, road: "視線受限", events: 4 }
];

const commuteProfiles = {
  walk: { label: "步行", risk: 5, duration: 14, factor: "行人穿越頻率高" },
  bike: { label: "自行車", risk: 9, duration: 11, factor: "側向車流干擾" },
  scooter: { label: "機車接送", risk: 13, duration: 8, factor: "接送區停等壓力" },
  bus: { label: "公車", risk: 7, duration: 16, factor: "站點上下車動線" }
};

const displayProfiles = {
  safe: { label: "安全優先", risk: -6, duration: 2, routeClass: "safe" },
  fast: { label: "速度優先", risk: 6, duration: -2, routeClass: "fast" }
};

const state = {
  schoolId: schools[0].id,
  stageFilter: "all",
  commuteMode: "walk",
  displayMode: "safe",
  refreshMs: 3000,
  remainingMs: 3000,
  ticks: 0,
  running: true,
  refreshTimer: null,
  countdownTimer: null
};

const els = {
  schoolSelect: document.querySelector("#schoolSelect"),
  stageFilter: document.querySelector("#stageFilter"),
  commuteMode: document.querySelector("#commuteMode"),
  displayMode: document.querySelector("#displayMode"),
  refreshRange: document.querySelector("#refreshRange"),
  refreshValue: document.querySelector("#refreshValue"),
  liveModeLabel: document.querySelector("#liveModeLabel"),
  runningStateLabel: document.querySelector("#runningStateLabel"),
  quickActions: document.querySelector("#quickActions"),
  toggleRunButton: document.querySelector("#toggleRunButton"),
  manualRefreshButton: document.querySelector("#manualRefreshButton"),
  countdownValue: document.querySelector("#countdownValue"),
  schoolStageLabel: document.querySelector("#schoolStageLabel"),
  schoolTownLabel: document.querySelector("#schoolTownLabel"),
  schoolFocusText: document.querySelector("#schoolFocusText"),
  baseDataLabel: document.querySelector("#baseDataLabel"),
  liveDataLabel: document.querySelector("#liveDataLabel"),
  dataSyncLabel: document.querySelector("#dataSyncLabel"),
  overviewStage: document.querySelector("#overviewStage"),
  overviewSchoolCount: document.querySelector("#overviewSchoolCount"),
  overviewMode: document.querySelector("#overviewMode"),
  overviewFrequency: document.querySelector("#overviewFrequency"),
  mapSchoolCount: document.querySelector("#mapSchoolCount"),
  mapRiskCount: document.querySelector("#mapRiskCount"),
  mapCameraCount: document.querySelector("#mapCameraCount"),
  lastUpdated: document.querySelector("#lastUpdated"),
  riskScore: document.querySelector("#riskScore"),
  riskLevelText: document.querySelector("#riskLevelText"),
  commuteTime: document.querySelector("#commuteTime"),
  routeModeText: document.querySelector("#routeModeText"),
  recentEvents: document.querySelector("#recentEvents"),
  weatherText: document.querySelector("#weatherText"),
  hotspots: document.querySelector("#hotspots"),
  cameraText: document.querySelector("#cameraText"),
  futureTrafficText: document.querySelector("#futureTrafficText"),
  factorText: document.querySelector("#factorText"),
  actionText: document.querySelector("#actionText"),
  alertMessage: document.querySelector("#alertMessage"),
  recommendedRoute: document.querySelector("#recommendedRoute"),
  safetyTag: document.querySelector("#safetyTag"),
  timeTag: document.querySelector("#timeTag"),
  riskSourceText: document.querySelector("#riskSourceText"),
  improvementText: document.querySelector("#improvementText"),
  audienceText: document.querySelector("#audienceText"),
  stageAverageRisk: document.querySelector("#stageAverageRisk"),
  stageSchoolCount: document.querySelector("#stageSchoolCount"),
  stageFocusAction: document.querySelector("#stageFocusAction"),
  recentList: document.querySelector("#recentList"),
  countySchoolLayer: document.querySelector("#countySchoolLayer"),
  countyIncidentLayer: document.querySelector("#countyIncidentLayer"),
  countyCameraLayer: document.querySelector("#countyCameraLayer"),
  schoolMarker: document.querySelector("#schoolMarker"),
  schoolPulse: document.querySelector("#schoolPulse"),
  schoolLabel: document.querySelector("#schoolLabel"),
  routeLayer: document.querySelector("#routeLayer"),
  incidentLayer: document.querySelector("#incidentLayer"),
  cameraLayer: document.querySelector("#cameraLayer")
};

function init() {
  renderSchoolOptions();
  bindEvents();
  updateRefreshLabels();
  syncStageButtons();
  syncQuickButtons();
  drawCountyScene();
  drawDetailScene();
  refreshNow();
  startAutoRefresh();
}

function getFilteredSchools() {
  if (state.stageFilter === "all") {
    return schools;
  }

  return schools.filter((school) => school.stage === state.stageFilter);
}

function getSelectedSchool() {
  return schools.find((school) => school.id === state.schoolId) || schools[0];
}

function renderSchoolOptions() {
  const filtered = getFilteredSchools();
  const fallback = filtered[0] || schools[0];

  if (!fallback) {
    els.schoolSelect.innerHTML = "";
    els.overviewSchoolCount.textContent = "0";
    els.stageSchoolCount.textContent = "0";
    els.mapSchoolCount.textContent = "0";
    return;
  }

  if (!filtered.some((school) => school.id === state.schoolId)) {
    state.schoolId = fallback.id;
  }

  els.schoolSelect.innerHTML = filtered
    .map((school) => `<option value="${school.id}">${school.name}｜${school.town}</option>`)
    .join("");

  els.schoolSelect.value = state.schoolId;
  els.overviewSchoolCount.textContent = String(filtered.length);
  els.stageSchoolCount.textContent = String(filtered.length);
  els.mapSchoolCount.textContent = String(filtered.length);
}

function bindEvents() {
  els.stageFilter.addEventListener("click", (event) => {
    const button = event.target.closest("[data-stage]");
    if (!button) {
      return;
    }

    state.stageFilter = button.dataset.stage;
    syncStageButtons();
    renderSchoolOptions();
    drawCountyScene();
    drawDetailScene();
    refreshNow();
  });

  els.schoolSelect.addEventListener("change", (event) => {
    state.schoolId = event.target.value;
    drawCountyScene();
    drawDetailScene();
    refreshNow();
  });

  els.commuteMode.addEventListener("change", (event) => {
    state.commuteMode = event.target.value;
    refreshNow();
  });

  els.displayMode.addEventListener("change", (event) => {
    state.displayMode = event.target.value;
    drawDetailScene();
    refreshNow();
  });

  els.refreshRange.addEventListener("input", (event) => {
    state.refreshMs = Number(event.target.value) * 1000;
    updateRefreshLabels();
    syncQuickButtons();
    restartTimers();
  });

  els.quickActions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-refresh]");
    if (!button) {
      return;
    }

    state.refreshMs = Number(button.dataset.refresh);
    els.refreshRange.value = String(state.refreshMs / 1000);
    updateRefreshLabels();
    syncQuickButtons();
    restartTimers();
  });

  els.toggleRunButton.addEventListener("click", () => {
    state.running = !state.running;
    syncRunState();
    restartTimers();
  });

  els.manualRefreshButton.addEventListener("click", () => {
    state.ticks += 1;
    refreshNow();
  });

  els.countySchoolLayer.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-school-id]");
    if (!dot) {
      return;
    }

    state.schoolId = dot.dataset.schoolId;
    els.schoolSelect.value = state.schoolId;
    drawCountyScene();
    drawDetailScene();
    refreshNow();
  });
}

function syncStageButtons() {
  els.stageFilter.querySelectorAll(".stage-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.stage === state.stageFilter);
  });
}

function syncQuickButtons() {
  els.quickActions.querySelectorAll(".quick-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.refresh) === state.refreshMs);
  });
}

function syncRunState() {
  els.toggleRunButton.textContent = state.running ? "暫停更新" : "恢復更新";
  els.runningStateLabel.textContent = state.running ? "自動更新啟用中" : "自動更新已暫停";
}

function updateRefreshLabels() {
  const seconds = state.refreshMs / 1000;
  const label = `${seconds} 秒`;

  els.refreshValue.textContent = label;
  els.liveModeLabel.textContent = `每 ${label} 更新`;
  els.overviewFrequency.textContent = label;
}

function getLiveContext() {
  const school = getSelectedSchool();
  const weather = weatherStates[state.ticks % weatherStates.length];
  const commute = commuteProfiles[state.commuteMode];
  const display = displayProfiles[state.displayMode];
  const hotspotCount = school.incidents.filter((item) => item.level === "danger" || item.level === "high").length;
  const stageModifier = school.stage === "elementary" ? 8 : school.stage === "junior" ? 4 : 0;
  const baseRisk = 52 + weather.modifier + commute.risk + display.risk + hotspotCount * 5 + stageModifier;
  const riskScore = clamp(baseRisk, 22, 96);
  const commuteTime = clamp(commute.duration + display.duration + Math.max(0, Math.round(weather.modifier / 4)), 7, 28);
  const futureTrafficScore = clamp(riskScore + 8 + weather.events, 20, 99);
  const futureTrafficText = futureTrafficScore >= 78 ? "車流偏高" : futureTrafficScore >= 62 ? "逐漸升高" : "大致穩定";
  const riskLevelText = riskScore >= 75 ? "高風險" : riskScore >= 50 ? "中高風險" : "低至中風險";
  const routeName = state.displayMode === "safe" ? school.safestRoute : school.fastestRoute;
  const safetyPercent = clamp(92 - Math.round(riskScore * 0.35), 58, 96);
  const extraMinutes = state.displayMode === "safe" ? Math.max(1, Math.round((riskScore - 40) / 18)) : 0;

  return {
    school,
    weather,
    commute,
    display,
    hotspotCount,
    riskScore,
    commuteTime,
    futureTrafficScore,
    futureTrafficText,
    riskLevelText,
    routeName,
    safetyPercent,
    extraMinutes
  };
}

function drawCountyScene() {
  const filtered = getFilteredSchools();
  const selectedId = state.schoolId;

  els.countySchoolLayer.innerHTML = filtered
    .map((school) => `
      <g data-school-id="${school.id}" class="county-school-group">
        <circle class="county-school-dot ${school.stage} ${school.id === selectedId ? "active" : ""}" cx="${school.countyX}" cy="${school.countyY}" r="14"></circle>
        <text x="${school.countyX + 18}" y="${school.countyY + 6}" font-size="15" fill="#183153">${school.name}</text>
      </g>
    `)
    .join("");

  els.countyIncidentLayer.innerHTML = countyIncidents
    .map((item) => `<circle class="county-incident-dot ${item.level}" cx="${item.x}" cy="${item.y}" r="10"><title>${item.title}</title></circle>`)
    .join("");

  els.countyCameraLayer.innerHTML = countyCameras
    .map((item) => `
      <g transform="translate(${item.x}, ${item.y})">
        <circle class="county-camera-icon" r="8"></circle>
        <title>${item.label}</title>
      </g>
    `)
    .join("");

  els.mapRiskCount.textContent = String(countyIncidents.length);
  els.mapCameraCount.textContent = String(countyCameras.length);
}

function drawDetailScene() {
  const school = getSelectedSchool();
  const activeRouteClass = displayProfiles[state.displayMode].routeClass;

  els.schoolMarker.setAttribute("cx", school.center.x);
  els.schoolMarker.setAttribute("cy", school.center.y);
  els.schoolPulse.setAttribute("cx", school.center.x);
  els.schoolPulse.setAttribute("cy", school.center.y);
  els.schoolLabel.setAttribute("x", school.center.x);
  els.schoolLabel.setAttribute("y", school.center.y + 50);
  els.schoolLabel.textContent = school.name;

  els.schoolStageLabel.textContent = getStageLabel(school.stage);
  els.schoolTownLabel.textContent = school.town;
  els.schoolFocusText.textContent = school.focus;
  els.overviewStage.textContent = getStageLabel(state.stageFilter);

  els.routeLayer.innerHTML = `
    <path class="route-line base-route" d="${school.safePath}"></path>
    <path class="route-line ${activeRouteClass}" d="${activeRouteClass === "safe" ? school.safePath : school.fastPath}"></path>
  `;

  els.incidentLayer.innerHTML = school.incidents
    .map((item) => `
      <g>
        <circle class="incident-dot ${item.level}" cx="${item.x}" cy="${item.y}" r="12"></circle>
        <text x="${item.x + 18}" y="${item.y + 6}" font-size="16" fill="#183153">${item.title}</text>
      </g>
    `)
    .join("");

  els.cameraLayer.innerHTML = school.cameras
    .map((item) => `
      <g transform="translate(${item.x}, ${item.y})">
        <path class="camera-icon" d="M0 0 h16 l10 -8 h8 v18 h-8 l-10 -8 h-16 z"></path>
        <text x="0" y="30" font-size="14" fill="#183153">${item.label}</text>
      </g>
    `)
    .join("");
}

function refreshNow() {
  const context = getLiveContext();
  const now = formatTime(new Date());

  renderMetrics(context);
  renderRecent();
  renderStageSummary();

  els.dataSyncLabel.textContent = now;
  els.lastUpdated.textContent = `最後更新 ${now}`;
  state.remainingMs = state.refreshMs;
}

function renderMetrics(context) {
  els.baseDataLabel.textContent = "示範學校、路線與設備資料";
  els.liveDataLabel.textContent = "模擬即時事件資料";
  els.riskScore.textContent = String(context.riskScore);
  els.riskLevelText.textContent = context.riskLevelText;
  els.overviewMode.textContent = context.display.label;
  els.commuteTime.textContent = `${context.commuteTime} 分鐘`;
  els.routeModeText.textContent = context.display.label;
  els.recentEvents.textContent = String(recentAccidents.length);
  els.weatherText.textContent = `${context.weather.label} / ${context.weather.road}`;
  els.hotspots.textContent = String(context.hotspotCount);
  els.cameraText.textContent = `${context.school.cameras.length} 組校園周邊設備`;
  els.futureTrafficText.textContent = context.futureTrafficText;
  els.factorText.textContent = `${context.weather.label} + ${context.commute.factor}`;
  els.actionText.textContent = getRecommendedAction(context);
  els.recommendedRoute.textContent = context.routeName;
  els.safetyTag.textContent = `安全係數 ${context.safetyPercent}%`;
  els.timeTag.textContent = state.displayMode === "safe"
    ? `多花 ${context.extraMinutes} 分鐘`
    : "通行時間較短";
  els.riskSourceText.textContent = context.school.riskSource;
  els.improvementText.textContent = context.school.improvement;
  els.audienceText.textContent = getAudienceText(context.school.stage);
  els.alertMessage.textContent = buildAlert(context);
}

function renderRecent() {
  els.recentList.innerHTML = recentAccidents
    .map((item) => `
      <li class="feed-item">
        <strong>${item.type}｜${item.place}</strong>
        <span>${item.time}｜${item.note}</span>
      </li>
    `)
    .join("");
}

function renderStageSummary() {
  const filtered = getFilteredSchools();
  if (filtered.length === 0) {
    els.stageAverageRisk.textContent = "0";
    els.stageFocusAction.textContent = "請先加入學校資料";
    return;
  }

  const average = filtered.reduce((sum, school) => {
    if (school.stage === "elementary") {
      return sum + 69;
    }
    if (school.stage === "junior") {
      return sum + 63;
    }
    return sum + 58;
  }, 0) / filtered.length;

  els.stageAverageRisk.textContent = String(Math.round(average));

  if (state.stageFilter === "elementary") {
    els.stageFocusAction.textContent = "優先整理接送區與護童動線";
    return;
  }

  if (state.stageFilter === "junior") {
    els.stageFocusAction.textContent = "改善巷口視線與放學分流";
    return;
  }

  if (state.stageFilter === "senior") {
    els.stageFocusAction.textContent = "處理尖峰車流與站點交會";
    return;
  }

  els.stageFocusAction.textContent = "建立跨學制的通學安全優先順序";
}

function getRecommendedAction(context) {
  if (context.futureTrafficScore >= 78) {
    return "建議提早 5 分鐘出發";
  }

  if (context.futureTrafficScore >= 62) {
    return "避開主路口，改走慢行線";
  }

  return "維持目前路線即可";
}

function buildAlert(context) {
  if (context.school.stage === "elementary" && context.riskScore >= 70) {
    return `${context.school.name} 目前以接送區混流為主要壓力，建議放學時段優先安排護童引導，並讓家長避開校門前臨停。`;
  }

  if (context.school.stage === "junior" && context.riskScore >= 70) {
    return `${context.school.name} 周邊巷口與機車接送熱點偏高，建議優先引導學生走已標示的慢行路線。`;
  }

  if (context.riskScore >= 75) {
    return `${context.school.name} 目前通學風險偏高，建議切換為安全優先模式並提前分流，避免集中通過主路口。`;
  }

  return `${context.school.name} 目前風險仍在可控範圍，建議持續留意 ${context.weather.label} 對路面與視線的影響。`;
}

function startAutoRefresh() {
  clearTimers();
  syncRunState();
  state.remainingMs = state.refreshMs;
  els.countdownValue.textContent = `${(state.remainingMs / 1000).toFixed(1)} 秒`;

  if (state.running) {
    state.refreshTimer = window.setInterval(() => {
      state.ticks += 1;
      refreshNow();
    }, state.refreshMs);
  }

  state.countdownTimer = window.setInterval(() => {
    if (!state.running) {
      els.countdownValue.textContent = "已暫停";
      return;
    }

    state.remainingMs = Math.max(0, state.remainingMs - 100);
    els.countdownValue.textContent = `${(state.remainingMs / 1000).toFixed(1)} 秒`;
  }, 100);
}

function restartTimers() {
  startAutoRefresh();
  refreshNow();
}

function clearTimers() {
  if (state.refreshTimer) {
    window.clearInterval(state.refreshTimer);
    state.refreshTimer = null;
  }

  if (state.countdownTimer) {
    window.clearInterval(state.countdownTimer);
    state.countdownTimer = null;
  }
}

function getStageLabel(stage) {
  return STAGE_LABELS[stage] || STAGE_LABELS.all;
}

function getAudienceText(stage) {
  if (stage === "elementary") {
    return "家長 / 學校 / 護童志工";
  }

  if (stage === "junior") {
    return "家長 / 學校 / 交通單位";
  }

  return "學生 / 學校 / 交通單位 / 社區";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatTime(date) {
  return date.toLocaleTimeString("zh-TW", { hour12: false });
}

init();
