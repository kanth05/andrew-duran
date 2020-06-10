//Sección donde se dibujan las gráficas
//PHP
var ctx = document.getElementById('phpdonut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [70, 30],
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
            'Sin dominar'
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
            text:'PHP 70%',
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
            data: [60, 40],
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
            'Sin dominar'
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
        text:'MYsql 60%',
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
            data: [50, 50],
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
            'Sin dominar'
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
        text:'Laravel 50%',
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
            data: [50, 50],
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
            'Sin dominar'
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
        text:'Wordpress 50%',
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
            data: [60, 40],
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
            'Sin dominar'
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
        text:'HTML & Css 60%',
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
            data: [60, 40],
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
            'Sin dominar'
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
        text:'Javascript 60%',
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
            data: [50, 50],
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
            'Sin dominar'
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
        text:'JQuery 50%',
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
            data: [75, 25],
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
            'Sin dominar'
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
        text:'Pl/sql 75%',
        fontColor: 'rgba(236, 232, 232, 1)'
    },
    legend:{
        display: false,
    },
    circumference: Math.PI,
    rotation: -Math.PI
    }
});