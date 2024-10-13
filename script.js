// Fetch real-time data (Simulated with random values)
function fetchDashboardData() {
    const totalUsers = Math.floor(Math.random() * 1000) + 100;
    const activeSessions = Math.floor(Math.random() * 500) + 50;
    const serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  
    document.getElementById('total-users').textContent = totalUsers;
    document.getElementById('active-sessions').textContent = activeSessions;
    const statusElement = document.getElementById('server-status');
    statusElement.textContent = serverStatus;
    statusElement.style.color = serverStatus === 'Online' ? 'green' : 'red';
  }
  
  // Update date and time
  function updateDateTime() {
    const now = new Date();
    document.getElementById('date-time').textContent = now.toLocaleString();
  }
  
  // Render charts using Chart.js
  function renderCharts() {
    const ctx1 = document.getElementById('line-chart').getContext('2d');
    const ctx2 = document.getElementById('bar-chart').getContext('2d');
  
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Users',
            data: [120, 190, 300, 500, 200, 300, 400],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
        ],
      },
    });
  
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Active Sessions',
            data: [50, 75, 150, 200, 250, 300],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
        ],
      },
    });
  }
  
  // Initialize dashboard
  document.addEventListener('DOMContentLoaded', () => {
    fetchDashboardData();
    renderCharts();
    updateDateTime();
    setInterval(fetchDashboardData, 5000); // Refresh data every 5 seconds
    setInterval(updateDateTime, 1000); // Update time every second
  });
  