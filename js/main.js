window.onload = function() {
    chartSeven();
    graficaCuatro();
    graficaCero();
    graficaUno();
    graficaCinco();
};
/*Toggle dropdown list*/
function toggleDD(myDropMenu) {
    document.getElementById(myDropMenu).classList.toggle("invisible");
}
/*Filter dropdown options*/
function filterDD(myDropMenu, myDropMenuSearch) {
    console.log(myDropMenu);
    console.log(myDropMenuSearch);
    var input, filter, ul, li, a, i;
    input = document.getElementById(myDropMenuSearch);
    filter = input.value.toUpperCase();
    div = document.getElementById(myDropMenu);
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop-button') && !event.target.matches('.drop-search')) {
        var dropdowns = document.getElementsByClassName("dropdownlist");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('invisible')) {
                openDropdown.classList.add('invisible');
            }
        }
    }
}

function chartSeven() {
    new Chart(document.getElementById("chartjs-7"), {
        "type": "bar",
        "data": {
            "labels": ["January", "February", "March", "April"],
            "datasets": [{
                "label": "Page Impressions",
                "data": [10, 20, 30, 40],
                "borderColor": "rgb(255, 99, 132)",
                "backgroundColor": "rgba(255, 99, 132, 0.2)"
            }, {
                "label": "Adsense Clicks",
                "data": [5, 15, 10, 30],
                "type": "line",
                "fill": false,
                "borderColor": "rgb(54, 162, 235)"
            }]
        },
        "options": {
            "scales": {
                "yAxes": [{
                    "ticks": {
                        "beginAtZero": true
                    }
                }]
            }
        }
    });
}

function graficaCuatro() {
    new Chart(document.getElementById("chartjs-4"), {
        "type": "doughnut",
        "data": {
            "labels": ["P1", "P2", "P3"],
            "datasets": [{
                "label": "Issues",
                "data": [300, 50, 100],
                "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
            }]
        }
    });
}

function graficaCinco() {
    new Chart(document.getElementById("chartjs-5"), {
        "type": "doughnut",
        "data": {
            "labels": ["P1", "P2", "P3"],
            "datasets": [{
                "label": "Issues",
                "data": [300, 50, 100],
                "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
            }]
        }
    });
}

function graficaCero() {
    new Chart(document.getElementById("chartjs-0"), {
        "type": "line",
        "data": {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "datasets": [{
                "label": "Views",
                "data": [65, 59, 80, 81, 56, 55, 40],
                "fill": false,
                "borderColor": "rgb(75, 192, 192)",
                "lineTension": 0.1
            }]
        },
        "options": {}
    });
}

function graficaUno() {
    new Chart(document.getElementById("chartjs-1"), {
        "type": "bar",
        "data": {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "datasets": [{
                "label": "Likes",
                "data": [65, 59, 80, 81, 56, 55, 40],
                "fill": false,
                "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                "borderWidth": 1
            }]
        },
        "options": {
            "scales": {
                "yAxes": [{
                    "ticks": {
                        "beginAtZero": true
                    }
                }]
            }
        }
    });
}