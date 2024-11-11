// import React from "react";
// import Chart from "react-apexcharts";
// const BarGraph = () => {
//   return (
//     <div>
//       <h1>social media followers</h1>
//       <Chart
//        type="bar"
//        width={700}
//        height={720}
//        series={[
//         {
//             name:"social media subsribers",
//             data:[6756,5678,6467,3456,4356,5467]
//         }
//        ]}
//        options={{
//         title:{text:"my followers"}
//        }}
//          >

//       </Chart>
//     </div>
//   );
// };

// export default BarGraph;
/////////////////////////
import React from "react";
import Chart from "react-apexcharts";

const BarGraph = () => {
  return (
    <div>
      <h1>Social Media Followers</h1>
      <Chart
        type="bar"
        width={700}
        height={720}
        series={[
          {
            name: "Social Media Subscribers",
            data: [6756, 5678, 6467, 3456, 4356, 5467]
          }
        ]}
        options={{
          title: { text: "My Followers" },
          xaxis: {
            categories: ["Instagram", "Twitter", "Facebook", "YouTube", "LinkedIn", "Snapchat"]
          },
          colors: [
            ({ value }) => {
              if (value === 6756) return "#1b263b"; // Darker color for the highest value
              if (value === 3456) return "#d1e8e2"; // Lighter color for the lowest value
              return "#6e7f80"; // Mid-tones for other values
            }
          ],
          plotOptions: {
            bar: {
              distributed: true, // To enable individual colors for each bar
              borderRadius: 4,
              horizontal: false
            }
          },
          dataLabels: {
            enabled: true
          },
          fill: {
            colors: [
              "#1b263b", // Darkest for the highest value
              "#6e7f80",
              "#89c9b8",
              "#8db596",
              "#b4de91",
              "#d1e8e2" // Lightest for the lowest value
            ]
          }
        }}
      />
    </div>
  );
};

export default BarGraph;
