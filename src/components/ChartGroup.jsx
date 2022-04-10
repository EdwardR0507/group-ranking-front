import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { useGroups } from "../hooks/useGroups";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

// Generate a random backgroundColor for each group
const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ChartGroup = () => {
  const { socket } = useContext(SocketContext);
  const { groups } = useGroups(socket);

  const data = {
    labels: groups.map((group) => group.name),
    datasets: [
      {
        label: "# Votes",
        data: groups.map((group) => group.votes),
        backgroundColor: groups.map(() => randomColor()),
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
export default ChartGroup;
