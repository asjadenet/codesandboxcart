import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
import "frappe-charts/dist/frappe-charts.min.css";

new Chart("#chart", {
  // or DOM element
  data: {
    labels: ["23", "00", "01", "02", "03", "04", "05", "06"],
    datasets: [
      { values: [136.03, 80.07, 90.14, 85.15, 78.9, 92.96, 100.37, 145.35] }
    ],

    yMarkers: [{ label: "Marker", value: 70, options: { labelPos: "left" } }],
    yRegions: [
      { label: "Region", start: -10, end: 50, options: { labelPos: "right" } }
    ]
  },

  title: "My Awesome Chart",
  type: "line", // or 'bar', 'line', 'pie', 'percentage'
  height: 300,
  colors: ["purple"],

  tooltipOptions: {
    formatTooltipX: (d) => (d + "").toUpperCase(),
    formatTooltipY: (d) => d + " €/MWh"
  }
});
