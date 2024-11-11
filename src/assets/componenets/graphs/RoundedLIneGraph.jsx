// import React from "react";
// import Chart from "react-apexcharts";

// const RoundedLineGraph = () => {
//   return (
//     <div>
//       <h1>Social Media Analytics</h1>

//       {/* Donut Chart */}
//       <div style={{ marginBottom: "2rem" }}>
//         <h2>Social Media Distribution</h2>
//         <Chart
//           type="donut"
//           width={500}
//           height={400}
//           series={[35, 25, 15, 10, 8, 7]} // Sample data
//           options={{
//             labels: ["Instagram", "Twitter", "Facebook", "YouTube", "LinkedIn", "Snapchat"],
//             title: { text: "Followers Distribution" },
//             colors: ["#1b263b", "#6e7f80", "#89c9b8", "#8db596", "#b4de91", "#d1e8e2"],
//             plotOptions: {
//               pie: {
//                 donut: {
//                   size: "70%",
//                   labels: {
//                     show: true,
//                     total: {
//                       show: true,
//                       label: "Total"
//                     }
//                   }
//                 }
//               }
//             }
//           }}
//         />
//       </div>

//       {/* Line Chart */}
//       <div>
//         <h2>Monthly Followers Growth</h2>
//         <Chart
//           type="line"
//           width={700}
//           height={400}
//           series={[
//             {
//               name: "Followers",
//               data: [4500, 4800, 5000, 5300, 5600, 6000, 6200, 6700, 7100, 7500, 7800, 8200] // Sample data
//             }
//           ]}
//           options={{
//             title: { text: "Followers Growth Over the Year" },
//             xaxis: {
//               categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
//             },
//             stroke: {
//               curve: "smooth",
//               width: 2
//             },
//             colors: ["#1b263b"],
//             dataLabels: {
//               enabled: false
//             },
//             markers: {
//               size: 5,
//               colors: ["#1b263b"],
//               strokeColors: "#fff",
//               strokeWidth: 2
//             },
//             grid: {
//               show: true
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default RoundedLineGraph;
//////////////////////////
import React from "react";
import Chart from "react-apexcharts";

const RoundedLineGraph = () => {
  return (
    <>
     <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Social Media Distribution</h2>
    <div className="flex flex-col items-center justify-evenly md:flex-row bg-gray-50 py-8 px-4 md:px-8 lg:px-12">
      

      {/* Donut Chart */}

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Social Media Distribution</h2>
        <Chart
          type="donut"
          width="100%"
          height={350}
          series={[35, 25, 15, 10, 8, 7]} // Sample data
          options={{
            labels: ["Instagram", "Twitter", "Facebook", "YouTube", "LinkedIn", "Snapchat"],
            title: { text: "Followers Distribution" },
            colors: ["#1b263b", "#6e7f80", "#89c9b8", "#8db596", "#b4de91", "#d1e8e2"],
            plotOptions: {
              pie: {
                donut: {
                  size: "70%",
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      label: "Total"
                    }
                  }
                }
              }
            }
          }}
        />
      </div>

      {/* Line Chart */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Monthly Followers Growth</h2>
        <Chart
          type="line"
          width="100%"
          height={400}
          series={[
            {
              name: "Followers",
              data: [4500, 4800, 5000, 5300, 5600, 6000, 6200, 6700, 7100, 7500, 7800, 8200] // Sample data
            }
          ]}
          options={{
            title: { text: "Followers Growth Over the Year" },
            xaxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            stroke: {
              curve: "smooth",
              width: 2
            },
            colors: ["#1b263b"],
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 5,
              colors: ["#1b263b"],
              strokeColors: "#fff",
              strokeWidth: 2
            },
            grid: {
              show: true
            }
          }}
        />
      </div>
    </div>
    </>
  );
};

export default RoundedLineGraph;
