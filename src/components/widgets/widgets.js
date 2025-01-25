import Chart from 'chart.js/auto';

document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('salesChart').getContext('2d');
    
    // Crear un degradado
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#003B73');
    gradient.addColorStop(1, '#00A6A6');

    var salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: gradient,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.getElementById('downloadChart').addEventListener('click', function() {
        var link = document.createElement('a');
        link.href = salesChart.toBase64Image();
        link.download = 'sales-chart.png';
        link.click();
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('incomeExpenseChart').getContext('2d');
    
    // Crear el degradado para Costos
    const gradientCostos = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
    gradientCostos.addColorStop(0, '#003B73');
    gradientCostos.addColorStop(1, '#00A6A6');

    // Crear el degradado para Gastos
    const gradientGastos = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
    gradientGastos.addColorStop(0, '#FF5733');
    gradientGastos.addColorStop(1, '#FFC300');
    
    var incomeExpenseChart = new Chart(ctx, {
        type: 'bar', // Puedes cambiar a 'line', 'pie', etc.
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [
                {
                    label: 'Ingresos',
                    data: [1200, 1500, 1800, 2000, 1700, 1600],
                    backgroundColor: gradientCostos,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Gastos',
                    data: [1000, 1400, 1600, 1900, 1500, 1300],
                    backgroundColor: gradientGastos,
                    borderColor: 'rgb(185, 121, 0)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});