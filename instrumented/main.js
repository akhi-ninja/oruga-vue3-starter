function cov_1m3a08vqwo() {
  var path = "C:\\Users\\akhil\\OneDrive\\Documents\\My Works\\Opensource Projects\\oruga-starter\\oruga-starter\\src\\main.js";
  var hash = "0666432f4a2f78db440e6442d01e2e986ef6ee03";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\akhil\\OneDrive\\Documents\\My Works\\Opensource Projects\\oruga-starter\\oruga-starter\\src\\main.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 71
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0666432f4a2f78db440e6442d01e2e986ef6ee03"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1m3a08vqwo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1m3a08vqwo();
import { createApp } from 'vue';
import App from './App.vue';
import Oruga from '@oruga-ui/oruga-next';
import VueApexCharts from "vue3-apexcharts";
import { bulmaConfig } from '@oruga-ui/theme-bulma'; // import '@oruga-ui/theme-bulma/dist/bulma.css'

cov_1m3a08vqwo().s[0]++;
createApp(App).use(Oruga, bulmaConfig).use(VueApexCharts).mount('#app');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY3JlYXRlQXBwIiwiQXBwIiwiT3J1Z2EiLCJWdWVBcGV4Q2hhcnRzIiwiYnVsbWFDb25maWciLCJ1c2UiLCJtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxTQUFULFFBQTBCLEtBQTFCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixXQUFoQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0Isc0JBQWxCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixpQkFBMUI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLHVCQUE1QixDLENBQ0E7OztBQUNBSixTQUFTLENBQUNDLEdBQUQsQ0FBVCxDQUFlSSxHQUFmLENBQW1CSCxLQUFuQixFQUEwQkUsV0FBMUIsRUFBdUNDLEdBQXZDLENBQTJDRixhQUEzQyxFQUEwREcsS0FBMUQsQ0FBZ0UsTUFBaEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcbmltcG9ydCBPcnVnYSBmcm9tICdAb3J1Z2EtdWkvb3J1Z2EtbmV4dCdcbmltcG9ydCBWdWVBcGV4Q2hhcnRzIGZyb20gXCJ2dWUzLWFwZXhjaGFydHNcIjtcbmltcG9ydCB7IGJ1bG1hQ29uZmlnIH0gZnJvbSAnQG9ydWdhLXVpL3RoZW1lLWJ1bG1hJ1xuLy8gaW1wb3J0ICdAb3J1Z2EtdWkvdGhlbWUtYnVsbWEvZGlzdC9idWxtYS5jc3MnXG5jcmVhdGVBcHAoQXBwKS51c2UoT3J1Z2EsIGJ1bG1hQ29uZmlnKS51c2UoVnVlQXBleENoYXJ0cykubW91bnQoJyNhcHAnKSJdfQ==