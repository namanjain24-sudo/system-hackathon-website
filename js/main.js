// Import helper modules
import { setupNavigation } from './navigation.js';
import { setupScrolling } from './scroll.js';
import { setupAnimations } from './animations.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupScrolling();
  setupAnimations();

  initMarketChart();
  console.log('FairMarket India website initialized');
});

/**
 * Simulated fetch for seller performance data
 * Replace this with a real API like Amazon Selling Partner or your backend
 */
async function fetchSellerData() {
  try {
    // Simulated data (or replace with real API endpoint)
    return {
      dates: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5'],
      orderCounts: [120, 140, 130, 160, 180]
    };
  } catch (error) {
    console.error('Error fetching seller data:', error);
    return { dates: [], orderCounts: [] };
  }
}

/**
 * Initialize and render the chart in the Market Dynamics section
 */
async function initMarketChart() {
  const canvas = document.getElementById('marketChart');
  if (!canvas) {
    console.warn('Chart canvas not found');
    return;
  }

  const { dates, orderCounts } = await fetchSellerData();
  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Seller Orders',
        data: orderCounts,
        fill: true,
        borderColor: '#4ADE80',
        backgroundColor: 'rgba(74, 222, 128, 0.2)',
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: '#4ADE80'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: '#ccc', font: { size: 14 } }
        }
      },
      scales: {
        x: {
          ticks: { color: '#aaa' },
          grid: { color: '#333' }
        },
        y: {
          beginAtZero: true,
          ticks: { color: '#aaa' },
          grid: { color: '#333' }
        }
      }
    }
  });

  console.log('Market chart rendered');
}
