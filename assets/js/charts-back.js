$(document).ready(function() {
    $('.tip').tooltip();
    // Chart widgets

    // Group of Students
    $('#total-students').highcharts({
        colors: ['#46acb1', '#7a8aa5', '#f36523', '#f8aa79', '#ffcd34', '#676765', '#9ac859'],
        chart: {
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                },
                showInLegend: {
                    enabled: true,
                    style: {
                        fontSize: '17px'
                    }
                }
            },
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{y}',
                    distance: -30,
                    color: 'black',
                    formatter: function() {
                        return Highcharts.numberFormat(this.y, 2, '.');
                    }
                },
                point: {
                    events: {
                        legendItemClick: function() {
                            return false; // <== returning false will cancel the default action
                        }
                    }

                }
            }
        },

        series: [{
            name: "Total Group of Students",
            colorByPoint: true,
            allowDecimals: false,
            data: [{
                name: "School District",
                y: 548,
                sliced: true,
                selected: true
            }, {
                name: "Campus",
                y: 1486
            }, {
                name: "Grade Level",
                y: 247
            }, {
                name: "Gender",
                y: 931
            }, {
                name: "Special Populations",
                y: 421
            }]
        }]
    });

    // TSI Assessment
    $('#tsi-assessment').highcharts({

        chart: {
            type: 'column'
        },
        colors: ['#82c45a', '#808080'],
        title: {
            text: ''
        },

        xAxis: {
            categories: ['Reading', 'Writing', 'Math']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of Students'
            }
        },

        tooltip: {
            formatter: function() {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                },
                events: {
                    legendItemClick: function() {
                        return false;
                    }
                }
            }
        },

        series: [{
            name: 'Taken Assessment',
            data: [542, 858]
        }, {
            name: 'Non Taken Assessment',
            data: [208, 498]
        }]
    });

});


// Meet Standard by Subject
$('#meet-standard-subject').highcharts({
    colors: ['#46acb1', '#7a8aa5', '#f36523'],
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{y}',
                distance: -30,
                color: 'black'
            },
            point: {
                events: {
                    legendItemClick: function() {
                        return false; // <== returning false will cancel the default action
                    }
                }

            }
        },

    },

    series: [{
        name: "Students who meet standard by subject",
        colorByPoint: true,
        allowDecimals: false,
        data: [{
            name: "Reading",
            y: 2140,
            sliced: true,
            selected: true
        }, {
            name: "Writing",
            y: 4758,

        }, {
            name: "Math",
            y: 1549
        }]
    }]
});

// Dual credit courses
$('#dual-credit-courses').highcharts({
    colors: ['#c35959', '#51b6e2', '#84c37c'],
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{y}',
                distance: -30,
                color: 'black'
            },
            point: {
                events: {
                    legendItemClick: function() {
                        return false; // <== returning false will cancel the default action
                    }
                }

            }
        }
    },

    series: [{
        name: "Students who enrolled in a dual credit courses",
        colorByPoint: true,
        allowDecimals: false,
        data: [{
            name: "1 Dual Credit Course",
            y: 1940,
            sliced: true,
            selected: true
        }, {
            name: "2 Dual Credit Courses",
            y: 2758,

        }, {
            name: "3+ Dual Credit Courses",
            y: 1049
        }]
    }]
});

// Earned Dual credit courses
$('#earned-dual-credit').highcharts({
    colors: ['#46acb1', '#ccc'],
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{y}',
                distance: -30,
                color: 'black'
            },
            point: {
                events: {
                    legendItemClick: function() {
                        return false; // <== returning false will cancel the default action
                    }
                }

            }
        }
    },

    series: [{
        name: "Dual credit",
        colorByPoint: true,
        allowDecimals: false,
        data: [{
            name: "Students who earned credits",
            y: 1257,
            sliced: true,
            selected: true
        }, {
            name: "Students who didn't earn credits",
            y: 2758,

        }, ]
    }]
});

// Students enrolled in an AP course
$('#ap-course').highcharts({
    colors: ['#c35959', '#ccc'],
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{y}',
                distance: -30,
                color: 'black'
            },
            point: {
                events: {
                    legendItemClick: function() {
                        return false; // <== returning false will cancel the default action
                    }
                }

            }
        }
    },

    series: [{
        name: "AP Course",
        colorByPoint: true,
        allowDecimals: false,
        data: [{
            name: "Students who enrolled in an AP course",
            y: 1180,
            sliced: true,
            selected: true
        }, {
            name: "Students who didn't enrolled in an AP course",
            y: 1830,

        }, ]
    }]
});

// AP credits
$('#ap-credits').highcharts({

    chart: {
        type: 'column'
    },
    colors: ['#82c45a', '#808080'],
    title: {
        text: ''
    },

    xAxis: {
        categories: ['Extremely well qualified', 'Well qualified', 'Qualified', 'Possibly qualified', 'No recommendation']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of Students'
        }
    },

    tooltip: {
        formatter: function() {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
            },

            events: {
                legendItemClick: function() {
                    return false; // <== returning false will cancel the default action
                }
            }


        }
    },

    series: [{
        name: 'Students who have passed an AP exam',
        data: [542, 858, 1159, 858, 874]
    }, {
        name: 'Students who have not passed an AP exam',
        data: [208, 498, 647, 317, 212]
    }]
});

// Students who graduated from grade to grade
$('#passed-grade').highcharts({
    chart: {
        type: 'column'
    },
    colors: ['#7a8aa5'],
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '11px'
            }
        }
    },
    yAxis: {
        min: 0,

        title: {
            text: 'Number of Students'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Total Students. <b>{point.y:.1f}</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['9th to 10th', 2145],
            ['10th to 11th', 1187],
            ['11th to 12th', 985]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#000',
            align: 'right',
            //format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '11px'
            }
        }
    }]
});

// Students who passed English | EOC
$('#english-EOC').highcharts({
    colors: ['#ffcd34', '#ccc'],
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{y}',
                distance: -30,
                color: 'black'
            },
            point: {
                events: {
                    legendItemClick: function() {
                        return false; // <== returning false will cancel the default action
                    }
                }

            }
        },

    },

    series: [{
        name: "AP Course",
        colorByPoint: true,
        allowDecimals: false,
        data: [{
            name: "Students who have passed English | EOC",
            y: 1180,
            sliced: true,
            selected: true
        }, {
            name: "Students who have not passed English | EOC",
            y: 427,

        }, ]
    }]
});


// Students who passed Algebra | EOC
$('#algebra-EOC').highcharts({
    colors: ['#f8aa79', '#ccc'],
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{y}',
                distance: -30,
                color: 'black'
            },
            point: {
                events: {
                    legendItemClick: function() {
                        return false; // <== returning false will cancel the default action
                    }
                }

            }
        }
    },

    series: [{
        name: "AP Course",
        colorByPoint: true,
        allowDecimals: false,
        data: [{
            name: "Students who have passed Algebra | EOC",
            y: 1180,
            sliced: true,
            selected: true
        }, {
            name: "Students who have not passed Algebra | EOC",
            y: 427,

        }, ]
    }]
});

// Students currently employed
$('#employed-students').highcharts({
    colors: ['#ffcd34', '#82c45a', '#f8aa79', '#ccc'],
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{y}',
                distance: -30,
                color: 'black'
            },
            point: {
                events: {
                    legendItemClick: function() {
                        return false; // <== returning false will cancel the default action
                    }
                }

            }
        }
    },

    series: [{
        name: "Student Employment",
        colorByPoint: true,
        allowDecimals: false,
        data: [{
            name: "Full time",
            y: 1180,
            sliced: true,
            selected: true
        }, {
            name: "Part time",
            y: 427,
        }, {
            name: "Volunteer",
            y: 427,
        }, {
            name: "Not Employed",
            y: 145,
        }]
    }]
});

// Career Cluster
$('#career-cluster').highcharts({
    chart: {
        type: 'column'
    },
    colors: ['#4cc7cd'],
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '11px'
            }
        }
    },
    yAxis: {
        min: 0,

        title: {
            text: 'Number of Students'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Total Students. <b>{point.y:.1f}</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['Agriculture, Food & Natural Resources', 2145],
            ['Architecture & Construction', 1187],
            ['Arts, A/V Technology & Communications', 985],
            ['Business Management & Administration', 1945],
            ['Education & Training', 1268],
            ['Finance', 1475],
            ['Health Science', 757],
            ['Hospitality & Tourism', 724],
            ['Human Services', 875],
            ['Information Technology', 948],
            ['Law, Public, Corrections & Security', 854],
            ['Manufacturing', 1074],
            ['Marketing', 1375],
            ['Science, Technology, Engineering & Mathematics', 2048]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#000',
            align: 'right',
            //format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '11px'
            }
        }
    }]
});


// Students who  involved in a student organization.
$('#student-organization').highcharts({
    colors: ['#46acb1', '#ccc'],
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{y}',
                distance: -30,
                color: 'black'
            },
            point: {
                events: {
                    legendItemClick: function() {
                        return false; // <== returning false will cancel the default action
                    }
                }

            }
        }
    },

    series: [{
        name: "Total Students",
        colorByPoint: true,
        allowDecimals: false,
        data: [{
            name: "In Organization",
            y: 1180,
            sliced: true,
            selected: true
        }, {
            name: "Not in Organization",
            y: 748
        }]
    }]
});

// Endorsement Pathway
$(function() {

    var colors = Highcharts.getOptions().colors,
        categories = ['STEM', 'Business and Industry', 'Public Service', 'Arts and Humanities'],
        data = [{
            y: 16,
            color: '#ffcd34',
            drilldown: {
                name: 'STEM Career Cluster',
                categories: ['CTE', 'Computer Science', 'Mathematics', 'Science'],
                data: [4, 4, 4, 4],
                color: 'black',

            }
        }, {
            y: 55,
            color: '#82c45a',
            drilldown: {
                name: 'Business and Industry Career Cluster',
                categories: ['Agriculture, Food and Natural Resources', 'Architecture and Construction', 'Arts, A/V Technology and Communication', 'Business Management and Administration',
                    'Finance', 'Hospitality and Tourism', 'Information Technology', 'Manufacturing', 'Marketing', 'Transportation, Distribution and Logistics', 'English electives'
                ],
                data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                color: 'black',
            }
        }, {
            y: 15,
            color: '#f8aa79',
            drilldown: {
                name: 'Public Service  Career Cluster',
                categories: ['Education and Training', 'Health Sciences', 'Human Services', 'Law, Public Safety, Corrections and Security',
                    'Junior Reserve Officer Training Corps (ROTC)'
                ],
                data: [3, 3, 3, 3, 3],
                color: 'black',
            }
        }, {
            y: 14,
            color: '#7a8aa5',
            drilldown: {
                name: 'Arts and Humanities Career Cluster',
                categories: [' Social Studies', 'World Languages (Languages Other Than English)', 'Fine Arts ', 'English electives '],
                data: [3.5, 3.5, 3.5, 3.5],
                color: 'black',
            }
        }],


        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add cluster data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });


        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    $('#endorsement-pathway').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%'],
                point: {
                    events: {
                        legendItemClick: function(e) {
                            e.preventDefault();
                        }
                    }
                }
            },

        },
        tooltip: {
            enabled: true,
        },
        series: [{
            name: 'Endorsement',
            data: browserData,
            size: '60%',
            dataLabels: {
                enabled: true,
                format: '{y}%',
                distance: -80,
                color: 'black'
            },
            showInLegend: true,

        }, {
            name: 'Career Cluster',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                format: '{point.name}',
                padding: 8,
                style: {
                    fontSize: '11px',
                    width: '220px',
                    fontWeight: 'normal'
                }

            }
        }]
    });
});

// SAT
$('#sat').highcharts({
    colors: ['#46acb1', '#ccc'],
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{y}',
                distance: -30,
                color: 'black'
            },
            point: {
                events: {
                    legendItemClick: function() {
                        return false; // <== returning false will cancel the default action
                    }
                }

            }
        }
    },

    series: [{
        name: "Total Students",
        colorByPoint: true,
        allowDecimals: false,
        data: [{
            name: "Taken SAT exam",
            y: 1180,
            sliced: true,
            selected: true
        }, {
            name: "Not taken SAT exam",
            y: 748
        }]
    }]
});

// ACT
$('#act').highcharts({
    colors: ['#82c45a', '#ccc'],
    chart: {
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{y}',
                distance: -30,
                color: 'black'
            },
            point: {
                events: {
                    legendItemClick: function() {
                        return false; // <== returning false will cancel the default action
                    }
                }

            }
        }
    },

    series: [{
        name: "Total Students",
        colorByPoint: true,
        allowDecimals: false,
        data: [{
            name: "Taken ACT exam",
            y: 1180,
            sliced: true,
            selected: true
        }, {
            name: "Not taken ACT exam",
            y: 748
        }]
    }]
});
