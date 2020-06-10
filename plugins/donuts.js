//Sección donde se dibujan las gráficas
//PHP
var ctx = document.getElementById('phpdonut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [7, 3],
            backgroundColor: [
                'rgba(153, 55, 55, 0.9)',
                'rgba(236, 232, 232, 1)'
            ],
            borderColor: 'rgba(236, 232, 232, 0.1)',
            borderWidth: 1,
            weight: 0.5
        }],
        labels:[
            'Dominado',
            'Total'
            ],
    },
    options:{
        resposive: false,
        animation:{
            animateScale: false,
            animateRotate: true
        },
        title:{
            display:true,
            text:'PHP',
            fontColor: 'rgba(236, 232, 232, 1)'
        },
        legend:{
            display: false,
        },
        circumference: Math.PI,
        rotation: -Math.PI
    }
});

var ctx = document.getElementById('mysqldonut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [6, 4],
            backgroundColor: [
                'rgba(153, 55, 55, 0.9)',
                'rgba(236, 232, 232, 1)'
            ],
            borderColor: 'rgba(236, 232, 232, 0.1)',
            borderWidth: 1,
            weight: 0.5
        }],
        labels:[
            'Dominado',
            'Total'
            ],
    },
    options:{
    resposive: true,
    animation:{
        animateScale: false,
        animateRotate: true
    },
    title:{
        display:true,
        text:'MYsql',
        fontColor: 'rgba(236, 232, 232, 1)'
    },
    legend:{
        display: false,
    },
    circumference: Math.PI,
    rotation: -Math.PI
    }
});

var ctx = document.getElementById('laraveldonut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [4, 5],
            backgroundColor: [
                'rgba(153, 55, 55, 0.9)',
                'rgba(236, 232, 232, 1)'
            ],
            borderColor: 'rgba(236, 232, 232, 0.1)',
            borderWidth: 1,
            weight: 0.5
        }],
        labels:[
            'Dominado',
            'Total'
            ],
    },
    options:{
    resposive: true,
    animation:{
        animateScale: false,
        animateRotate: true
    },
    title:{
        display:true,
        text:'Laravel',
        fontColor: 'rgba(236, 232, 232, 1)'
    },
    legend:{
        display: false,
    },
    circumference: Math.PI,
    rotation: -Math.PI
    }
});

var ctx = document.getElementById('wpdonut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [4, 5],
            backgroundColor: [
                'rgba(153, 55, 55, 0.9)',
                'rgba(236, 232, 232, 1)'
            ],
            borderColor: 'rgba(236, 232, 232, 0.1)',
            borderWidth: 1,
            weight: 0.5
        }],
        labels:[
            'Dominado',
            'Total'
            ],
    },
    options:{
    resposive: true,
    animation:{
        animateScale: false,
        animateRotate: true
    },
    title:{
        display:true,
        text:'Wordpress',
        fontColor: 'rgba(236, 232, 232, 1)'
    },
    legend:{
        display: false,
    },
    circumference: Math.PI,
    rotation: -Math.PI
    }
});

var ctx = document.getElementById('htmldonut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [7, 3],
            backgroundColor: [
                'rgba(153, 55, 55, 0.9)',
                'rgba(236, 232, 232, 1)'
            ],
            borderColor: 'rgba(236, 232, 232, 0.1)',
            borderWidth: 1,
            weight: 0.5
        }],
        labels:[
            'Dominado',
            'Total'
            ],
    },
    options:{
    resposive: true,
    animation:{
        animateScale: false,
        animateRotate: true
    },
    title:{
        display:true,
        text:'HTML & Css',
        fontColor: 'rgba(236, 232, 232, 1)'
    },
    legend:{
        display: false,
    },
    circumference: Math.PI,
    rotation: -Math.PI
    }
});

var ctx = document.getElementById('jsdonut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [6, 4],
            backgroundColor: [
                'rgba(153, 55, 55, 0.9)',
                'rgba(236, 232, 232, 1)'
            ],
            borderColor: 'rgba(236, 232, 232, 0.1)',
            borderWidth: 1,
            weight: 0.5
        }],
        labels:[
            'Dominado',
            'Total'
            ],
    },
    options:{
    resposive: true,
    animation:{
        animateScale: false,
        animateRotate: true
    },
    title:{
        display:true,
        text:'Javascript',
        fontColor: 'rgba(236, 232, 232, 1)'
    },
    legend:{
        display: false,
    },
    circumference: Math.PI,
    rotation: -Math.PI
    }
});

var ctx = document.getElementById('jquerydonut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [5, 5],
            backgroundColor: [
                'rgba(153, 55, 55, 0.9)',
                'rgba(236, 232, 232, 1)'
            ],
            borderColor: 'rgba(236, 232, 232, 0.1)',
            borderWidth: 1,
            weight: 0.5
        }],
        labels:[
            'Dominado',
            'Total'
            ],
    },
    options:{
        resposive: false,
        animation:{
            animateScale: false,
            animateRotate: true
    },
    title:{
        display:true,
        text:'JQuery',
        fontColor: 'rgba(236, 232, 232, 1)'
    },
    legend:{
        display: false,
    },
    circumference: Math.PI,
    rotation: -Math.PI
    }
});

var ctx = document.getElementById('plsqldonut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [7.5, 2.5],
            backgroundColor: [
                'rgba(153, 55, 55, 0.9)',
                'rgba(236, 232, 232, 1)'
            ],
            borderColor: 'rgba(236, 232, 232, 0.1)',
            borderWidth: 1,
            weight: 0.5
        }],
        labels:[
            'Dominado',
            'Total'
            ],
    },
    options:{
        resposive: false,
        animation:{
            animateScale: false,
            animateRotate: true
    },
    title:{
        display:true,
        text:'Pl/sql',
        fontColor: 'rgba(236, 232, 232, 1)'
    },
    legend:{
        display: false,
    },
    circumference: Math.PI,
    rotation: -Math.PI
    }
});