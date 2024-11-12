import React from "react";
import Chart from "react-apexcharts";

const PopulationGraph = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-8 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Top 10 Most Populated Countries</h1>

      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <Chart
          type="bar"
          height={500}
          series={[
            {
              name: "Population",
              data: [1444216107, 1393409038, 332915073, 273523615, 231494996, 220892331, 212559417, 206139589, 164689383, 145912025] // Population data
            }
          ]}
          options={{
            chart: {
              id: "population-bar",
              toolbar: {
                show: false
              }
            },
            title: {
              text: "Population by Country",
              align: "center",
              style: {
                fontSize: "20px",
                fontWeight: "bold",
                color: "#333"
              }
            },
            xaxis: {
              categories: [
                "China",
                "India",
                "United States",
                "Indonesia",
                "Pakistan",
                "Brazil",
                "Nigeria",
                "Bangladesh",
                "Russia",
                "Mexico"
              ],
              labels: {
                style: {
                  fontSize: "14px"
                }
              },
              title: {
                text: "Population",
                style: {
                  fontSize: "16px",
                  fontWeight: "bold"
                }
              }
            },
            yaxis: {
              labels: {
                style: {
                  fontSize: "14px"
                }
              }
            },
            colors: [
              "#1f77b4",
              "#ff7f0e",
              "#2ca02c",
              "#d62728",
              "#9467bd",
              "#8c564b",
              "#e377c2",
              "#7f7f7f",
              "#bcbd22",
              "#17becf"
            ],
            plotOptions: {
              bar: {
                horizontal: true,
                borderRadius: 4,
                distributed: true,
                barHeight: "60%"
              }
            },
            dataLabels: {
              enabled: true,
              formatter: (val) => val.toLocaleString(),
              style: {
                fontSize: "14px",
                colors: ["#333"]
              }
            },
            tooltip: {
              y: {
                formatter: (val) => `${val.toLocaleString()} people`
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default PopulationGraph;
