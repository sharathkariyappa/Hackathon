import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  import { Bar } from 'react-chartjs-2';
  
  // Register the components for category scale
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Users',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };
  
  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category', // Use category scale on x-axis
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  
  function DashboardChart() {
    return <Bar data={data} options={options} />;
  }
  
  export default DashboardChart;
  