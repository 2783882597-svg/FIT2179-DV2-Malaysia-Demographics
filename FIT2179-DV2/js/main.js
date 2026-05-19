/* ============================================================
   Malaysia Demographics — Vega-Lite charts (fully inlined data)
   This file embeds both the chart specs AND the CSV data so the
   page renders correctly when opened directly via file:// (no
   local server required). The choropleth (Figure 06) is the only
   chart that still fetches an external GeoJSON from a CDN that
   permits cross-origin requests.
   ============================================================ */

/* ---------- Brand tokens shared across charts ---------- */
const BRAND = {
  primary: "#533afd",
  primaryDeep: "#4434d4",
  primarySoft: "#8e84ff",
  ruby: "#ea2261",
  rubySoft: "#f48ab0",
  magenta: "#f96bee",
  lemon: "#f2b95b",
  cream: "#f5e9d4",
  ink: "#0d253d",
  inkSecondary: "#273951",
  inkMute: "#64748d",
  hairline: "#e3e8ee",
  canvas: "#ffffff"
};

const BASE_CONFIG = {
  background: "transparent",
  font: "Inter, 'SF Pro Display', system-ui, sans-serif",
  padding: 4,
  view: { stroke: null },
  title: {
    color: BRAND.ink,
    subtitleColor: BRAND.inkMute,
    fontSize: 16,
    fontWeight: 400,
    subtitleFontSize: 12,
    subtitleFontWeight: 300,
    anchor: "start",
    offset: 12
  },
  axis: {
    domainColor: BRAND.hairline,
    tickColor: BRAND.hairline,
    gridColor: BRAND.hairline,
    gridOpacity: 0.7,
    labelColor: BRAND.inkMute,
    labelFontSize: 11,
    labelFontWeight: 300,
    labelPadding: 6,
    titleColor: BRAND.inkSecondary,
    titleFontSize: 12,
    titleFontWeight: 400,
    titlePadding: 10
  },
  legend: {
    labelColor: BRAND.inkSecondary,
    labelFontSize: 12,
    titleColor: BRAND.ink,
    titleFontWeight: 500,
    symbolType: "circle",
    symbolSize: 80
  }
};

/* ---------- Inline data ---------- */
const DATA = {
  populationGrowth: [
    { year: 2000, population_million: 22.97 },
    { year: 2001, population_million: 23.53 },
    { year: 2002, population_million: 24.10 },
    { year: 2003, population_million: 24.68 },
    { year: 2004, population_million: 25.26 },
    { year: 2005, population_million: 25.84 },
    { year: 2006, population_million: 26.42 },
    { year: 2007, population_million: 27.00 },
    { year: 2008, population_million: 27.57 },
    { year: 2009, population_million: 28.12 },
    { year: 2010, population_million: 28.66 },
    { year: 2011, population_million: 29.16 },
    { year: 2012, population_million: 29.66 },
    { year: 2013, population_million: 30.17 },
    { year: 2014, population_million: 30.70 },
    { year: 2015, population_million: 31.23 },
    { year: 2016, population_million: 31.79 },
    { year: 2017, population_million: 32.36 },
    { year: 2018, population_million: 32.91 },
    { year: 2019, population_million: 33.44 },
    { year: 2020, population_million: 33.89 },
    { year: 2021, population_million: 34.28 },
    { year: 2022, population_million: 34.70 },
    { year: 2023, population_million: 35.13 },
    { year: 2024, population_million: 35.56 }
  ],
  growthRate: [
    { year: 2000, growth_rate: 2.345 }, { year: 2001, growth_rate: 2.404 },
    { year: 2002, growth_rate: 2.419 }, { year: 2003, growth_rate: 2.366 },
    { year: 2004, growth_rate: 2.312 }, { year: 2005, growth_rate: 2.268 },
    { year: 2006, growth_rate: 2.227 }, { year: 2007, growth_rate: 2.174 },
    { year: 2008, growth_rate: 2.095 }, { year: 2009, growth_rate: 1.992 },
    { year: 2010, growth_rate: 1.870 }, { year: 2011, growth_rate: 1.751 },
    { year: 2012, growth_rate: 1.703 }, { year: 2013, growth_rate: 1.709 },
    { year: 2014, growth_rate: 1.715 }, { year: 2015, growth_rate: 1.733 },
    { year: 2016, growth_rate: 1.767 }, { year: 2017, growth_rate: 1.765 },
    { year: 2018, growth_rate: 1.702 }, { year: 2019, growth_rate: 1.596 },
    { year: 2020, growth_rate: 1.334 }, { year: 2021, growth_rate: 1.153 },
    { year: 2022, growth_rate: 1.198 }, { year: 2023, growth_rate: 1.234 },
    { year: 2024, growth_rate: 1.221 }
  ],
  ageGroup2024: [
    { age_group: "0-14",  percentage: 22.2, population_million: 7.551 },
    { age_group: "15-24", percentage: 17.3, population_million: 5.881 },
    { age_group: "25-54", percentage: 44.6, population_million: 15.199 },
    { age_group: "55-64", percentage:  8.3, population_million: 2.812 },
    { age_group: "65+",   percentage:  7.7, population_million: 2.609 }
  ],
  pyramid: [
    // Females (positive)
    { sex: "Female", age: "0-4",   population_million: 1.141 },
    { sex: "Female", age: "5-9",   population_million: 1.259 },
    { sex: "Female", age: "10-14", population_million: 1.261 },
    { sex: "Female", age: "15-19", population_million: 1.297 },
    { sex: "Female", age: "20-24", population_million: 1.429 },
    { sex: "Female", age: "25-29", population_million: 1.332 },
    { sex: "Female", age: "30-34", population_million: 1.330 },
    { sex: "Female", age: "35-39", population_million: 1.335 },
    { sex: "Female", age: "40-44", population_million: 1.223 },
    { sex: "Female", age: "45-49", population_million: 0.967 },
    { sex: "Female", age: "50-54", population_million: 0.846 },
    { sex: "Female", age: "55-59", population_million: 0.737 },
    { sex: "Female", age: "60-64", population_million: 0.667 },
    { sex: "Female", age: "65-69", population_million: 0.536 },
    { sex: "Female", age: "70-74", population_million: 0.386 },
    { sex: "Female", age: "75-79", population_million: 0.239 },
    { sex: "Female", age: "80-84", population_million: 0.117 },
    { sex: "Female", age: "85+",   population_million: 0.070 },
    // Males (positive value, we'll mirror via scale)
    { sex: "Male",   age: "0-4",   population_million: 1.215 },
    { sex: "Male",   age: "5-9",   population_million: 1.316 },
    { sex: "Male",   age: "10-14", population_million: 1.359 },
    { sex: "Male",   age: "15-19", population_million: 1.428 },
    { sex: "Male",   age: "20-24", population_million: 1.728 },
    { sex: "Male",   age: "25-29", population_million: 1.704 },
    { sex: "Male",   age: "30-34", population_million: 1.626 },
    { sex: "Male",   age: "35-39", population_million: 1.522 },
    { sex: "Male",   age: "40-44", population_million: 1.385 },
    { sex: "Male",   age: "45-49", population_million: 1.051 },
    { sex: "Male",   age: "50-54", population_million: 0.877 },
    { sex: "Male",   age: "55-59", population_million: 0.736 },
    { sex: "Male",   age: "60-64", population_million: 0.672 },
    { sex: "Male",   age: "65-69", population_million: 0.515 },
    { sex: "Male",   age: "70-74", population_million: 0.364 },
    { sex: "Male",   age: "75-79", population_million: 0.208 },
    { sex: "Male",   age: "80-84", population_million: 0.098 },
    { sex: "Male",   age: "85+",   population_million: 0.076 }
  ],
  genderShare: [
    { year: 2000, sex: "Male", percentage: 51.369 }, { year: 2000, sex: "Female", percentage: 48.631 },
    { year: 2001, sex: "Male", percentage: 51.426 }, { year: 2001, sex: "Female", percentage: 48.574 },
    { year: 2002, sex: "Male", percentage: 51.495 }, { year: 2002, sex: "Female", percentage: 48.505 },
    { year: 2003, sex: "Male", percentage: 51.561 }, { year: 2003, sex: "Female", percentage: 48.439 },
    { year: 2004, sex: "Male", percentage: 51.624 }, { year: 2004, sex: "Female", percentage: 48.376 },
    { year: 2005, sex: "Male", percentage: 51.685 }, { year: 2005, sex: "Female", percentage: 48.315 },
    { year: 2006, sex: "Male", percentage: 51.744 }, { year: 2006, sex: "Female", percentage: 48.256 },
    { year: 2007, sex: "Male", percentage: 51.800 }, { year: 2007, sex: "Female", percentage: 48.200 },
    { year: 2008, sex: "Male", percentage: 51.853 }, { year: 2008, sex: "Female", percentage: 48.147 },
    { year: 2009, sex: "Male", percentage: 51.903 }, { year: 2009, sex: "Female", percentage: 48.097 },
    { year: 2010, sex: "Male", percentage: 51.959 }, { year: 2010, sex: "Female", percentage: 48.041 },
    { year: 2011, sex: "Male", percentage: 52.033 }, { year: 2011, sex: "Female", percentage: 47.967 },
    { year: 2012, sex: "Male", percentage: 52.118 }, { year: 2012, sex: "Female", percentage: 47.882 },
    { year: 2013, sex: "Male", percentage: 52.200 }, { year: 2013, sex: "Female", percentage: 47.800 },
    { year: 2014, sex: "Male", percentage: 52.279 }, { year: 2014, sex: "Female", percentage: 47.721 },
    { year: 2015, sex: "Male", percentage: 52.350 }, { year: 2015, sex: "Female", percentage: 47.650 },
    { year: 2016, sex: "Male", percentage: 52.420 }, { year: 2016, sex: "Female", percentage: 47.580 },
    { year: 2017, sex: "Male", percentage: 52.484 }, { year: 2017, sex: "Female", percentage: 47.516 },
    { year: 2018, sex: "Male", percentage: 52.538 }, { year: 2018, sex: "Female", percentage: 47.462 },
    { year: 2019, sex: "Male", percentage: 52.589 }, { year: 2019, sex: "Female", percentage: 47.411 },
    { year: 2020, sex: "Male", percentage: 52.588 }, { year: 2020, sex: "Female", percentage: 47.412 },
    { year: 2021, sex: "Male", percentage: 52.530 }, { year: 2021, sex: "Female", percentage: 47.470 },
    { year: 2022, sex: "Male", percentage: 52.469 }, { year: 2022, sex: "Female", percentage: 47.531 },
    { year: 2023, sex: "Male", percentage: 52.411 }, { year: 2023, sex: "Female", percentage: 47.589 },
    { year: 2024, sex: "Male", percentage: 52.359 }, { year: 2024, sex: "Female", percentage: 47.641 }
  ],
  states2024: [
    { rank:  1, state: "Selangor",          state_map_name: "Selangor",       population_million: 7.363 },
    { rank:  2, state: "Johor",             state_map_name: "Johor",          population_million: 4.184 },
    { rank:  3, state: "Sabah",             state_map_name: "Sabah",          population_million: 3.742 },
    { rank:  4, state: "Perak",             state_map_name: "Perak",          population_million: 2.569 },
    { rank:  5, state: "Sarawak",           state_map_name: "Sarawak",        population_million: 2.518 },
    { rank:  6, state: "Kedah",             state_map_name: "Kedah",          population_million: 2.217 },
    { rank:  7, state: "W.P. Kuala Lumpur", state_map_name: "Kuala Lumpur",   population_million: 2.067 },
    { rank:  8, state: "Kelantan",          state_map_name: "Kelantan",       population_million: 1.888 },
    { rank:  9, state: "Pulau Pinang",      state_map_name: "Pulau Pinang",   population_million: 1.800 },
    { rank: 10, state: "Pahang",            state_map_name: "Pahang",         population_million: 1.668 },
    { rank: 11, state: "Negeri Sembilan",   state_map_name: "Negeri Sembilan",population_million: 1.240 },
    { rank: 12, state: "Terengganu",        state_map_name: "Terengganu",     population_million: 1.232 },
    { rank: 13, state: "Melaka",            state_map_name: "Melaka",         population_million: 1.047 },
    { rank: 14, state: "Perlis",            state_map_name: "Perlis",         population_million: 0.297 },
    { rank: 15, state: "W.P. Putrajaya",    state_map_name: "Putrajaya",      population_million: 0.120 },
    { rank: 16, state: "W.P. Labuan",       state_map_name: "Labuan",         population_million: 0.101 }
  ],
  urbanRural: [
    { year: 2000, area_type: "Urban", percentage: 61.969 }, { year: 2000, area_type: "Rural", percentage: 38.031 },
    { year: 2001, area_type: "Urban", percentage: 63.018 }, { year: 2001, area_type: "Rural", percentage: 36.982 },
    { year: 2002, area_type: "Urban", percentage: 64.056 }, { year: 2002, area_type: "Rural", percentage: 35.944 },
    { year: 2003, area_type: "Urban", percentage: 65.075 }, { year: 2003, area_type: "Rural", percentage: 34.925 },
    { year: 2004, area_type: "Urban", percentage: 66.065 }, { year: 2004, area_type: "Rural", percentage: 33.935 },
    { year: 2005, area_type: "Urban", percentage: 67.016 }, { year: 2005, area_type: "Rural", percentage: 32.984 },
    { year: 2006, area_type: "Urban", percentage: 67.919 }, { year: 2006, area_type: "Rural", percentage: 32.081 },
    { year: 2007, area_type: "Urban", percentage: 68.765 }, { year: 2007, area_type: "Rural", percentage: 31.235 },
    { year: 2008, area_type: "Urban", percentage: 69.544 }, { year: 2008, area_type: "Rural", percentage: 30.456 },
    { year: 2009, area_type: "Urban", percentage: 70.246 }, { year: 2009, area_type: "Rural", percentage: 29.754 },
    { year: 2010, area_type: "Urban", percentage: 70.863 }, { year: 2010, area_type: "Rural", percentage: 29.137 },
    { year: 2011, area_type: "Urban", percentage: 71.425 }, { year: 2011, area_type: "Rural", percentage: 28.575 },
    { year: 2012, area_type: "Urban", percentage: 71.968 }, { year: 2012, area_type: "Rural", percentage: 28.032 },
    { year: 2013, area_type: "Urban", percentage: 72.488 }, { year: 2013, area_type: "Rural", percentage: 27.512 },
    { year: 2014, area_type: "Urban", percentage: 72.980 }, { year: 2014, area_type: "Rural", percentage: 27.020 },
    { year: 2015, area_type: "Urban", percentage: 73.439 }, { year: 2015, area_type: "Rural", percentage: 26.561 },
    { year: 2016, area_type: "Urban", percentage: 73.859 }, { year: 2016, area_type: "Rural", percentage: 26.141 },
    { year: 2017, area_type: "Urban", percentage: 74.235 }, { year: 2017, area_type: "Rural", percentage: 25.765 },
    { year: 2018, area_type: "Urban", percentage: 74.563 }, { year: 2018, area_type: "Rural", percentage: 25.437 },
    { year: 2019, area_type: "Urban", percentage: 74.838 }, { year: 2019, area_type: "Rural", percentage: 25.162 },
    { year: 2020, area_type: "Urban", percentage: 75.051 }, { year: 2020, area_type: "Rural", percentage: 24.949 },
    { year: 2021, area_type: "Urban", percentage: 75.509 }, { year: 2021, area_type: "Rural", percentage: 24.491 },
    { year: 2022, area_type: "Urban", percentage: 75.974 }, { year: 2022, area_type: "Rural", percentage: 24.026 },
    { year: 2023, area_type: "Urban", percentage: 76.443 }, { year: 2023, area_type: "Rural", percentage: 23.557 },
    { year: 2024, area_type: "Urban", percentage: 76.917 }, { year: 2024, area_type: "Rural", percentage: 23.083 }
  ],
  lifeExpectancy: [
    { year: 2000, life_expectancy: 72.732 }, { year: 2001, life_expectancy: 73.080 },
    { year: 2002, life_expectancy: 73.469 }, { year: 2003, life_expectancy: 73.727 },
    { year: 2004, life_expectancy: 74.027 }, { year: 2005, life_expectancy: 74.370 },
    { year: 2006, life_expectancy: 74.697 }, { year: 2007, life_expectancy: 74.961 },
    { year: 2008, life_expectancy: 75.151 }, { year: 2009, life_expectancy: 75.269 },
    { year: 2010, life_expectancy: 75.376 }, { year: 2011, life_expectancy: 75.488 },
    { year: 2012, life_expectancy: 75.552 }, { year: 2013, life_expectancy: 75.464 },
    { year: 2014, life_expectancy: 75.345 }, { year: 2015, life_expectancy: 75.288 },
    { year: 2016, life_expectancy: 75.371 }, { year: 2017, life_expectancy: 75.542 },
    { year: 2018, life_expectancy: 75.734 }, { year: 2019, life_expectancy: 75.900 },
    { year: 2020, life_expectancy: 76.057 }, { year: 2021, life_expectancy: 73.917 },
    { year: 2022, life_expectancy: 75.444 }, { year: 2023, life_expectancy: 76.657 },
    { year: 2024, life_expectancy: 76.821 }
  ],
  dependency: [
    { year: 2000, dependency_ratio: 61.406 }, { year: 2001, dependency_ratio: 60.299 },
    { year: 2002, dependency_ratio: 59.200 }, { year: 2003, dependency_ratio: 58.054 },
    { year: 2004, dependency_ratio: 56.808 }, { year: 2005, dependency_ratio: 55.486 },
    { year: 2006, dependency_ratio: 54.166 }, { year: 2007, dependency_ratio: 52.877 },
    { year: 2008, dependency_ratio: 51.570 }, { year: 2009, dependency_ratio: 50.217 },
    { year: 2010, dependency_ratio: 49.008 }, { year: 2011, dependency_ratio: 48.147 },
    { year: 2012, dependency_ratio: 47.518 }, { year: 2013, dependency_ratio: 46.958 },
    { year: 2014, dependency_ratio: 46.453 }, { year: 2015, dependency_ratio: 46.039 },
    { year: 2016, dependency_ratio: 45.734 }, { year: 2017, dependency_ratio: 45.495 },
    { year: 2018, dependency_ratio: 45.228 }, { year: 2019, dependency_ratio: 44.836 },
    { year: 2020, dependency_ratio: 44.271 }, { year: 2021, dependency_ratio: 43.579 },
    { year: 2022, dependency_ratio: 42.897 }, { year: 2023, dependency_ratio: 42.327 },
    { year: 2024, dependency_ratio: 41.893 }
  ]
};

const YEAR_TICKS = [2000, 2005, 2010, 2015, 2020, 2024];
const X_YEAR = {
  field: "year", type: "quantitative", title: "Year",
  axis: { format: "d", values: YEAR_TICKS }
};

/* ============================================================
   Chart 01 — Population growth (area + line)
   ============================================================ */
const SPEC_1 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 280,
  data: { values: DATA.populationGrowth },
  encoding: {
    x: X_YEAR,
    y: {
      field: "population_million", type: "quantitative",
      title: "Population (million)",
      scale: { zero: false, nice: true }
    },
    tooltip: [
      { field: "year", type: "quantitative", title: "Year", format: "d" },
      { field: "population_million", type: "quantitative", title: "Population (M)", format: ".2f" }
    ]
  },
  layer: [
    {
      mark: { type: "area", interpolate: "monotone", opacity: 0.18, color: BRAND.primary }
    },
    {
      mark: { type: "line", interpolate: "monotone", strokeWidth: 2.5, color: BRAND.primary }
    },
    {
      mark: { type: "point", filled: true, color: BRAND.primary, size: 30, opacity: 0.65 }
    },
    {
      transform: [{ filter: "datum.year === 2024" }],
      mark: { type: "point", filled: true, color: BRAND.ruby, size: 140, stroke: "white", strokeWidth: 2 }
    },
    {
      transform: [{ filter: "datum.year === 2024" }],
      mark: { type: "text", align: "right", dx: -10, dy: -14, fontSize: 12, fontWeight: 500, color: BRAND.ink },
      encoding: { text: { value: "35.56M (2024)" } }
    }
  ],
  config: BASE_CONFIG
};

/* ============================================================
   Chart 02 — Population growth rate (line + emphasis)
   ============================================================ */
const SPEC_2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 280,
  data: { values: DATA.growthRate },
  encoding: {
    x: X_YEAR,
    y: {
      field: "growth_rate", type: "quantitative",
      title: "Annual growth rate (%)",
      scale: { zero: false }
    },
    tooltip: [
      { field: "year", type: "quantitative", title: "Year", format: "d" },
      { field: "growth_rate", type: "quantitative", title: "Growth rate (%)", format: ".2f" }
    ]
  },
  layer: [
    {
      mark: { type: "area", interpolate: "monotone", opacity: 0.16, color: BRAND.ruby }
    },
    {
      mark: { type: "line", interpolate: "monotone", strokeWidth: 2.5, color: BRAND.ruby }
    },
    {
      mark: { type: "point", filled: true, color: BRAND.ruby, size: 28, opacity: 0.55 }
    },
    {
      transform: [{ filter: "datum.year === 2021" }],
      mark: { type: "point", filled: true, color: BRAND.primary, size: 140, stroke: "white", strokeWidth: 2 }
    },
    {
      transform: [{ filter: "datum.year === 2021" }],
      mark: { type: "text", align: "left", dx: 10, fontSize: 12, fontWeight: 500, color: BRAND.primaryDeep },
      encoding: { text: { value: "Pandemic low · 1.15%" } }
    }
  ],
  config: BASE_CONFIG
};

/* ============================================================
   Chart 03 — Age group bars (2024)
   ============================================================ */
const SPEC_3 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 280,
  data: { values: DATA.ageGroup2024 },
  layer: [
    {
      mark: { type: "bar", cornerRadiusTopLeft: 6, cornerRadiusTopRight: 6, size: 46 },
      encoding: {
        x: {
          field: "age_group", type: "ordinal", title: "Age group",
          sort: ["0-14", "15-24", "25-54", "55-64", "65+"],
          axis: { labelAngle: 0 }
        },
        y: {
          field: "percentage", type: "quantitative", title: "Share of population (%)",
          scale: { domain: [0, 50] }
        },
        color: {
          condition: { test: "datum.age_group === '25-54'", value: BRAND.primary },
          value: BRAND.primarySoft
        },
        tooltip: [
          { field: "age_group", type: "ordinal", title: "Age group" },
          { field: "percentage", type: "quantitative", title: "Share (%)", format: ".1f" },
          { field: "population_million", type: "quantitative", title: "Population (M)", format: ".2f" }
        ]
      }
    },
    {
      mark: { type: "text", dy: -8, fontSize: 11, fontWeight: 500, color: BRAND.ink },
      encoding: {
        x: { field: "age_group", type: "ordinal", sort: ["0-14", "15-24", "25-54", "55-64", "65+"] },
        y: { field: "percentage", type: "quantitative" },
        text: { field: "percentage", type: "quantitative", format: ".1f" }
      }
    }
  ],
  config: BASE_CONFIG
};

/* ============================================================
   Chart 04 — Population pyramid (2024)
   ============================================================ */
const AGE_SORT = [
  "85+","80-84","75-79","70-74","65-69","60-64","55-59","50-54",
  "45-49","40-44","35-39","30-34","25-29","20-24","15-19","10-14","5-9","0-4"
];
const SPEC_4 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { values: DATA.pyramid },
  spacing: 0,
  hconcat: [
    {
      width: 200, height: 320,
      transform: [{ filter: "datum.sex === 'Male'" }],
      mark: { type: "bar", color: BRAND.primary, opacity: 0.9, cornerRadiusTopLeft: 3, cornerRadiusBottomLeft: 3 },
      encoding: {
        y: { field: "age", type: "ordinal", sort: AGE_SORT, axis: null },
        x: {
          field: "population_million", type: "quantitative", title: "Male (M)",
          scale: { domain: [0, 2], reverse: true },
          axis: { values: [0, 0.5, 1, 1.5, 2] }
        },
        tooltip: [
          { field: "sex", type: "nominal", title: "Sex" },
          { field: "age", type: "ordinal", title: "Age" },
          { field: "population_million", type: "quantitative", title: "Population (M)", format: ".2f" }
        ]
      }
    },
    {
      width: 50, height: 320,
      mark: { type: "text", align: "center", baseline: "middle", fontSize: 11, fontWeight: 400, color: BRAND.inkSecondary },
      encoding: {
        y: { field: "age", type: "ordinal", sort: AGE_SORT, axis: null },
        text: { field: "age", type: "ordinal" }
      }
    },
    {
      width: 200, height: 320,
      transform: [{ filter: "datum.sex === 'Female'" }],
      mark: { type: "bar", color: BRAND.ruby, opacity: 0.9, cornerRadiusTopRight: 3, cornerRadiusBottomRight: 3 },
      encoding: {
        y: { field: "age", type: "ordinal", sort: AGE_SORT, axis: null },
        x: {
          field: "population_million", type: "quantitative", title: "Female (M)",
          scale: { domain: [0, 2] },
          axis: { values: [0, 0.5, 1, 1.5, 2] }
        },
        tooltip: [
          { field: "sex", type: "nominal", title: "Sex" },
          { field: "age", type: "ordinal", title: "Age" },
          { field: "population_million", type: "quantitative", title: "Population (M)", format: ".2f" }
        ]
      }
    }
  ],
  config: BASE_CONFIG
};

/* ============================================================
   Chart 05 — Gender share over time
   ============================================================ */
const SPEC_5 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 280,
  data: { values: DATA.genderShare },
  encoding: {
    x: X_YEAR,
    y: {
      field: "percentage", type: "quantitative", title: "Share of population (%)",
      scale: { domain: [47, 53] }
    },
    color: {
      field: "sex", type: "nominal", title: null,
      scale: { domain: ["Male", "Female"], range: [BRAND.primary, BRAND.ruby] }
    }
  },
  layer: [
    { mark: { type: "line", strokeWidth: 2.5, interpolate: "monotone" } },
    {
      mark: { type: "point", filled: true, size: 55, stroke: "white", strokeWidth: 1.5 },
      encoding: {
        tooltip: [
          { field: "year", type: "quantitative", title: "Year", format: "d" },
          { field: "sex", type: "nominal", title: "Sex" },
          { field: "percentage", type: "quantitative", title: "Share (%)", format: ".2f" }
        ]
      }
    }
  ],
  config: { ...BASE_CONFIG, legend: { ...BASE_CONFIG.legend, orient: "top", direction: "horizontal" } }
};

/* ============================================================
   Chart 06 — Choropleth map (loaded from CDN GeoJSON)
   ============================================================ */
const SPEC_6 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 380,
  data: {
    url: "https://raw.githubusercontent.com/mptwaktusolat/jakim.geojson/master/malaysia.state.geojson",
    format: { type: "json", property: "features" }
  },
  transform: [
    {
      lookup: "properties.name",
      from: {
        data: { values: DATA.states2024 },
        key: "state_map_name",
        fields: ["state", "population_million", "rank"]
      }
    }
  ],
  projection: { type: "mercator" },
  mark: { type: "geoshape", stroke: "#ffffff", strokeWidth: 0.8 },
  encoding: {
    color: {
      field: "population_million", type: "quantitative",
      title: "Population (M)",
      scale: {
        domain: [0, 2, 4, 8],
        range: ["#eef0ff", "#b9b9f9", "#665efd", "#2e2b8c"]
      },
      legend: { gradientLength: 180, tickCount: 4 }
    },
    tooltip: [
      { field: "state", type: "nominal", title: "State" },
      { field: "population_million", type: "quantitative", title: "Population (M)", format: ".2f" },
      { field: "rank", type: "quantitative", title: "Rank" }
    ]
  },
  config: { ...BASE_CONFIG, legend: { ...BASE_CONFIG.legend, orient: "right" } }
};

/* ============================================================
   Chart 07 — Top 5 states bar chart
   ============================================================ */
const SPEC_7 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 280,
  data: { values: DATA.states2024 },
  transform: [{ filter: "datum.rank <= 5" }],
  layer: [
    {
      mark: { type: "bar", cornerRadiusTopRight: 4, cornerRadiusBottomRight: 4, size: 30 },
      encoding: {
        y: {
          field: "state", type: "ordinal", title: null,
          sort: { field: "population_million", order: "descending" },
          axis: { labelPadding: 8, labelFontSize: 12, labelColor: BRAND.ink, labelFontWeight: 400 }
        },
        x: {
          field: "population_million", type: "quantitative",
          title: "Population (million)",
          scale: { domain: [0, 8] }
        },
        color: {
          condition: { test: "datum.rank === 1", value: BRAND.primary },
          value: BRAND.primarySoft
        },
        tooltip: [
          { field: "state", type: "nominal", title: "State" },
          { field: "population_million", type: "quantitative", title: "Population (M)", format: ".2f" },
          { field: "rank", type: "quantitative", title: "Rank" }
        ]
      }
    },
    {
      mark: { type: "text", align: "left", baseline: "middle", dx: 8, fontSize: 12, fontWeight: 500, color: BRAND.ink },
      encoding: {
        y: { field: "state", type: "ordinal", sort: { field: "population_million", order: "descending" } },
        x: { field: "population_million", type: "quantitative" },
        text: { field: "population_million", type: "quantitative", format: ".2f" }
      }
    }
  ],
  config: BASE_CONFIG
};

/* ============================================================
   Chart 08 — Urban / Rural stacked area
   ============================================================ */
const SPEC_8 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 280,
  data: { values: DATA.urbanRural },
  mark: { type: "area", interpolate: "monotone", line: { color: "white", strokeWidth: 1 } },
  encoding: {
    x: X_YEAR,
    y: {
      field: "percentage", type: "quantitative",
      stack: "zero", title: "Share of population (%)",
      scale: { domain: [0, 100] },
      axis: { values: [0, 25, 50, 75, 100] }
    },
    color: {
      field: "area_type", type: "nominal", title: null,
      scale: { domain: ["Urban", "Rural"], range: [BRAND.primary, BRAND.cream] }
    },
    order: { field: "area_type", sort: "descending" },
    tooltip: [
      { field: "year", type: "ordinal", title: "Year" },
      { field: "area_type", type: "nominal", title: "Area" },
      { field: "percentage", type: "quantitative", title: "Share (%)", format: ".2f" }
    ]
  },
  config: { ...BASE_CONFIG, legend: { ...BASE_CONFIG.legend, orient: "top", direction: "horizontal" } }
};

/* ============================================================
   Chart 09 — Life expectancy (line with 2021 callout)
   ============================================================ */
const SPEC_9 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 280,
  data: { values: DATA.lifeExpectancy },
  encoding: {
    x: X_YEAR,
    y: {
      field: "life_expectancy", type: "quantitative",
      title: "Life expectancy (years)",
      scale: { zero: false }
    },
    tooltip: [
      { field: "year", type: "quantitative", title: "Year", format: "d" },
      { field: "life_expectancy", type: "quantitative", title: "Life expectancy", format: ".2f" }
    ]
  },
  layer: [
    { mark: { type: "area", interpolate: "monotone", opacity: 0.15, color: BRAND.primary } },
    { mark: { type: "line", interpolate: "monotone", strokeWidth: 2.5, color: BRAND.primary } },
    { mark: { type: "point", filled: true, color: BRAND.primary, size: 26, opacity: 0.6 } },
    {
      transform: [{ filter: "datum.year === 2021" }],
      mark: { type: "point", filled: true, color: BRAND.ruby, size: 140, stroke: "white", strokeWidth: 2 }
    },
    {
      transform: [{ filter: "datum.year === 2021" }],
      mark: { type: "text", align: "left", dx: 10, dy: 4, fontSize: 12, fontWeight: 500, color: BRAND.ruby },
      encoding: { text: { value: "2021 · 73.9 yrs" } }
    },
    {
      transform: [{ filter: "datum.year === 2024" }],
      mark: { type: "text", align: "right", dx: -8, dy: -12, fontSize: 12, fontWeight: 500, color: BRAND.ink },
      encoding: { text: { value: "76.8 yrs" } }
    }
  ],
  config: BASE_CONFIG
};

/* ============================================================
   Chart 10 — Dependency ratio
   ============================================================ */
const SPEC_10 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 280,
  data: { values: DATA.dependency },
  encoding: {
    x: X_YEAR,
    y: {
      field: "dependency_ratio", type: "quantitative",
      title: "Dependency ratio (%)",
      scale: { zero: false }
    },
    tooltip: [
      { field: "year", type: "quantitative", title: "Year", format: "d" },
      { field: "dependency_ratio", type: "quantitative", title: "Dependency ratio (%)", format: ".2f" }
    ]
  },
  layer: [
    { mark: { type: "area", interpolate: "monotone", opacity: 0.16, color: BRAND.ruby } },
    { mark: { type: "line", interpolate: "monotone", strokeWidth: 2.5, color: BRAND.ruby } },
    { mark: { type: "point", filled: true, color: BRAND.ruby, size: 26, opacity: 0.65 } },
    {
      transform: [{ filter: "datum.year === 2000 || datum.year === 2024" }],
      mark: { type: "point", filled: true, color: BRAND.primary, size: 130, stroke: "white", strokeWidth: 2 }
    },
    {
      transform: [
        { filter: "datum.year === 2000 || datum.year === 2024" },
        { calculate: "format(datum.dependency_ratio, '.1f') + '%'", as: "label" }
      ],
      mark: { type: "text", align: "left", dx: 10, dy: -8, fontSize: 12, fontWeight: 500, color: BRAND.ink },
      encoding: { text: { field: "label", type: "nominal" } }
    }
  ],
  config: BASE_CONFIG
};

/* ============================================================
   Embed all charts
   ============================================================ */
const EMBED_OPTS = { actions: false, renderer: "canvas" };

const CHARTS = [
  ["#chart1",  SPEC_1],
  ["#chart2",  SPEC_2],
  ["#chart3",  SPEC_3],
  ["#chart4",  SPEC_4],
  ["#chart5",  SPEC_5],
  ["#chart6",  SPEC_6],
  ["#chart7",  SPEC_7],
  ["#chart8",  SPEC_8],
  ["#chart9",  SPEC_9],
  ["#chart10", SPEC_10]
];

function renderAll() {
  CHARTS.forEach(([sel, spec]) => {
    vegaEmbed(sel, spec, EMBED_OPTS).catch((err) =>
      console.error("Failed to render", sel, err)
    );
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderAll);
} else {
  renderAll();
}
