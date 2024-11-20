document.addEventListener("DOMContentLoaded", function () {
  var dropdownToggle = document.querySelector("#dropdownMenuButton");
  if (dropdownToggle) {
    new bootstrap.Dropdown(dropdownToggle);
  }



  // Customer Visit Chart
  const customerVisitCtx = document
    .getElementById("customerVisitChart")
    .getContext("2d");
  const customerVisitChart = new Chart(customerVisitCtx, {
    type: "line",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Visits",
          data: [1200, 900, 1400, 1300, 1100, 1600, 1500],
          borderColor: "orange",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
  });

  // Orders Chart
  const ordersCtx = document.getElementById("ordersChart").getContext("2d");
  const ordersChart = new Chart(ordersCtx, {
    type: "line",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Orders",
          data: [800, 950, 1040, 900, 1100, 1200, 1300],
          borderColor: "purple",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
  });

  // Pending Chart
  const pendingCtx = document.getElementById("pendingChart").getContext("2d");
  const pendingChart = new Chart(pendingCtx, {
    type: "line",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Pending",
          data: [200, 150, 180, 160, 140, 170, 190],
          borderColor: "aqua",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
  });

  // Delivered Chart
  const deliveredCtx = document
    .getElementById("deliveredChart")
    .getContext("2d");
  const deliveredChart = new Chart(deliveredCtx, {
    type: "line",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Delivered",
          data: [1200, 1400, 1300, 1100, 1500, 1600, 1700],
          borderColor: "pink",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
  });

  // Target Achieved Doughnut Chart
  const targetAchievedCtx = document
    .getElementById("targetAchievedChart")
    .getContext("2d");
  const targetAchievedChart = new Chart(targetAchievedCtx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Incomplete"],
      datasets: [
        {
          label: "Target",
          data: [67, 33],
          backgroundColor: ["green", "gray"],
        },
      ],
    },
  });

  // Earnings Pie Chart
  const earningsCtx = document.getElementById("earningsChart").getContext("2d");
  const earningsChart = new Chart(earningsCtx, {
    type: "pie",
    data: {
      labels: ["Profits", "Margins", "Others"],
      datasets: [
        {
          label: "Earnings",
          data: [60, 25, 15],
          backgroundColor: ["blue", "orange", "red"],
        },
      ],
    },
  });

  // Profit & Loss Bar Chart
  const profitLossCtx = document
    .getElementById("profitLossChart")
    .getContext("2d");
  const profitLossChart = new Chart(profitLossCtx, {
    type: "bar",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Profit",
          data: [300, 400, 500, 450, 600, 650, 700],
          backgroundColor: "green",
        },
        {
          label: "Loss",
          data: [100, 120, 80, 150, 100, 90, 110],
          backgroundColor: "red",
        },
      ],
    },
  });

  
});



// Filtering functionality in table

function toggleMenu(event, menuId) {
  event.stopPropagation(); // Prevent click event from bubbling up
  const menu = document.getElementById(menuId);
  
  // Toggle the dropdown menu visibility
  if (menu.style.display === 'block') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'block';
  }
}

// Hide dropdown if clicking outside
document.addEventListener('click', () => {
  const menus = document.querySelectorAll('.dropdown-menu');
  menus.forEach(menu => {
      menu.style.display = 'none';
  });
});


function sortTable(columnIndex) {
  console.log('Sorting by column index:', columnIndex);
  const table = document.querySelector('table tbody');
  const rows = Array.from(table.rows);
  
  rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent.trim();
    const bValue = b.cells[columnIndex].textContent.trim();
    
    // Detect if values are dates, numbers, or text and compare accordingly
    if (!isNaN(Date.parse(aValue)) && !isNaN(Date.parse(bValue))) { // Date comparison
      return new Date(aValue) - new Date(bValue);
    } else if (!isNaN(aValue) && !isNaN(bValue)) { // Numeric comparison
      return aValue - bValue;
    } else { // Text comparison
      return aValue.localeCompare(bValue);
    }
  });
  
  rows.forEach(row => table.appendChild(row)); // Reorder rows
}

function filterTable(columnIndex) {
  console.log('Filter table by column index:', columnIndex);
  const filter = prompt(`Enter filter criteria for column ${columnIndex + 1}:`);
  const table = document.querySelector('table tbody');
  const rows = Array.from(table.rows);
  
  rows.forEach(row => {
    const cellValue = row.cells[columnIndex].textContent.trim();
    row.style.display = cellValue.includes(filter) ? '' : 'none'; // Show/Hide rows based on filter
  });
}

// Clear filter function
function clearFilter() {
  const table = document.querySelector('table tbody');
  const rows = Array.from(table.rows);
  
  rows.forEach(row => {
    row.style.display = ''; // Reset display for all rows
  });
}
