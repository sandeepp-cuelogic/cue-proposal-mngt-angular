$(document).ready(function() {
    $('.tip').tooltip();

    //++++++++++++++++++++++++++++++++++ Widgets ++++++++++++++++++++++++++++++++++
    // Student Summery
    $(function() {
        Highcharts.setOptions({
            lang: {
                drillUpText: 'Back'
            }
        });
        $('#student-summary').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: 0,
                    style: {
                        fontSize: '10px'
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
                pointFormat: 'Total Students. <b>{point.y}</b>'
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#000',
                        style: {
                            fontSize: '11px'
                        }
                    },
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'Student Summary',
                data: [{
                    name: 'Grade Level',
                    y: 10457,
                    color: "#f45b5b",
                    drilldown: 'Grade Level'
                }, {
                    name: 'Gender',
                    y: 10457,
                    color: "#7cb5ec",
                    drilldown: 'Gender'
                }, {
                    name: 'Special Populations',
                    y: 10457,
                    color: "#2b908f",
                    drilldown: 'Special Populations',
                }],

            }],
            drilldown: {
                activeAxisLabelStyle: {
                    color: '#333',
                    textShadow: '0 0 2px white, 0 0 2px white',
                },
                activeDataLabelStyle: {
                    color: 'black',
                    textShadow: '0 0 2px white, 0 0 2px white',
                    textDecoration: "none"
                },

                drillUpButton: {
                    position: {
                        y: -20,
                        x: 10
                    },
                    theme: {
                        fill: '#81c956',
                        'stroke-width': 1,
                        stroke: '#6fb147',
                        r: 6,
                        height: 16,
                        width: 30,
                        paddingLeft: 6,
                        states: {
                            hover: {
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            },
                            select: {
                                stroke: '#81c956',
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            }
                        }
                    }
                },
                series: [{
                    id: 'Grade Level',
                    name: 'Grade Level',
                    data: [
                        ['9th to 10th', 1452],
                        ['10th to 11th', 835],
                        ['11th to 12th', 791]
                    ]
                }, {
                    id: 'Gender',
                    name: 'Gender',
                    data: [
                        ['Male', 6675],
                        ['female', 3800]
                    ]
                }, {
                    id: 'Special Populations',
                    name: 'Special Populations',
                    data: [
                        ['CTE', 1452],
                        ['G/T', 791],
                        ['Title 1', 1159]
                    ]
                }, ]
            }
        });
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // TSI Participation
    $(function() {
        Highcharts.setOptions({
            lang: {
                drillUpText: 'Back'
            }
        });
        $('#tsi-assessment').highcharts({

            chart: {
                type: 'column'
            },
            colors: ['#82c45a', '#808080'],
            title: {
                text: ''
            },
            xAxis: {
                type: 'category'

            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of Students'
                }
            },
            legend: {
                enabled: true
            },

            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                    },
                    events: {
                        legendItemClick: function() {
                            return false;
                        }
                    },
                    stacking: 'normal'
                }
            },

            series: [{
                name: 'Taken Assessment',
                data: [{
                    name: 'Reading',
                    y: 1450,
                    drilldown: 'Reading'
                }, {
                    name: 'Writing',
                    y: 578,
                    drilldown: 'Writing'
                }, {
                    name: 'Math',
                    y: 985,
                    drilldown: 'Math'
                }]
            }, {
                name: 'Non Taken Assessment',
                data: [{
                    name: 'Reading',
                    y: 985,
                    drilldown: 'non-Reading'
                }, {
                    name: 'Writing',
                    y: 1450,
                    drilldown: 'non-Writing'
                }, {
                    name: 'Math',
                    y: 578,
                    drilldown: 'non-Math'
                }]
            }],
            drilldown: {
                activeDataLabelStyle: {
                    color: 'black',
                    textShadow: '0 0 2px white, 0 0 2px white',
                    textDecoration: "none"
                },

                drillUpButton: {
                    position: {
                        y: -20,
                        x: 10
                    },
                    theme: {
                        fill: '#81c956',
                        'stroke-width': 1,
                        stroke: '#6fb147',
                        r: 6,
                        height: 16,
                        width: 30,
                        paddingLeft: 6,
                        states: {
                            hover: {
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            },
                            select: {
                                stroke: '#81c956',
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            }
                        }
                    }
                },
                series: [{
                    id: 'Reading',
                    name: 'Reading: Taken Assessment',
                    data: [
                        ['District', 1452],
                        ['Campus', 835],
                        ['Grade Level', 791]
                    ]
                }, {
                    id: 'Writing',
                    name: 'Writing: Taken Assessment',
                    data: [
                        ['District', 1452],
                        ['Campus', 835],
                        ['Grade Level', 791]
                    ]
                }, {
                    id: 'Math',
                    name: 'Math: Taken Assessment',
                    data: [
                        ['District', 1452],
                        ['Campus', 835],
                        ['Grade Level', 791]
                    ]
                }, {
                    id: 'non-Reading',
                    name: 'Reading: Non Taken Assessment',
                    data: [
                        ['District', 791],
                        ['Campus', 835],
                        ['Grade Level', 1452]
                    ]
                }, {
                    id: 'non-Writing',
                    name: 'Writing: Non Taken Assessment',
                    data: [
                        ['District', 835],
                        ['Campus', 1452],
                        ['Grade Level', 791]
                    ]
                }, {
                    id: 'non-Math',
                    name: 'Math: Non Taken Assessment',
                    data: [
                        ['District', 1452],
                        ['Campus', 835],
                        ['Grade Level', 791]
                    ]
                }]
            }

        });
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // TSI Mastery
    $(function() {
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
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Dual credit Enrollment
    $(function() {
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
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Dual Credits Earned
    $(function() {
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
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // AP Course Enrollment
    $(function() {
        $('#ap-course').highcharts({
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
                    allowPointSelect: false,
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
                    name: "Students who enrolled in an AP course",
                    y: 1180,
                    drilldown: "enrolled",
                    color: '#c35959'
                }, {
                    name: "Students who didn't enrolled in an AP course",
                    y: 1830,
                    color: '#ccc',
                    events: {
                        click: apCourseModal
                    }
                }, ]
            }],
            drilldown: {

                drillUpButton: {
                    position: {
                        y: 0,
                        x: 0
                    },
                    theme: {
                        fill: '#81c956',
                        'stroke-width': 1,
                        stroke: '#6fb147',
                        r: 6,
                        height: 16,
                        width: 30,
                        paddingLeft: 6,
                        states: {
                            hover: {
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            },
                            select: {
                                stroke: '#81c956',
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: "Enrolled in an AP course",
                    id: "enrolled",
                    data: [
                        ["Algebra", 985],
                        ["Spanish", 195]
                    ]
                }]
            }
        });
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // AP credit Earned
    $(function() {

        $('#ap-credits').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'category',
            },
            yAxis: {
                title: {
                    text: 'Number of Students'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span>{point.name}</span>: <b>{point.y}'
            },

            series: [{
                name: "AP Credits Earned",
                colorByPoint: true,
                data: [{
                    name: "Extremely well qualified",
                    y: 5478,
                    color: '#82c45a'

                }, {
                    name: "Well qualified",
                    y: 8248,
                    color: '#82c45a'

                }, {
                    name: "Qualified",
                    y: 4318,
                    color: '#82c45a'

                }, {
                    name: "Possibly qualified",
                    y: 7246,
                    color: '#82c45a'
                }, {
                    name: "No recommendation",
                    y: 4318,
                    color: '#82c45a'

                }, {
                    name: "Not passed an AP exam",
                    y: 2573,
                    color: '#808080'

                }]
            }],
        });
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Grade Advancement
    $(function() {
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
                name: 'Grade Ad',
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
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // English EOC Data
    $(function() {
        $('#english-EOC').highcharts({
            colors: ['#ffcd34', '#f8aa79'],
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
                    name: "Students who have passed English || EOC",
                    y: 427,

                }]
            }]
        });
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Algebra EOC Data
    $(function() {
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
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Student Employment Segments
    $(function() {
        Highcharts.setOptions({
            lang: {
                drillUpText: 'Back'
            }
        });
        $('#employed-students').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'category',
            },
            yAxis: {
                title: {
                    text: 'Number of Students'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span>Students who work {point.name}</span>: <b>{point.y}</b>'
            },

            series: [{
                name: "Student Employment",
                colorByPoint: true,
                data: [{
                    name: "Full-time",
                    y: 5478,
                    drilldown: "Full-time"
                }, {
                    name: "Part-time",
                    y: 8248,
                    drilldown: "Part-time"
                }, {
                    name: "Volunteer",
                    y: 4318,
                    drilldown: "Volunteer"
                }, {
                    name: "Not Employed",
                    y: 7246
                }]
            }],
            drilldown: {
                drillUpButton: {
                    relativeTo: 'spacingBox',
                    position: {
                        y: 0,
                        x: 0
                    },
                    theme: {
                        fill: '#81c956',
                        'stroke-width': 1,
                        stroke: '#6fb147',
                        r: 6,
                        height: 16,
                        width: 30,
                        paddingLeft: 6,
                        states: {
                            hover: {
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            },
                            select: {
                                stroke: '#81c956',
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: "Full-time",
                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span>Students who work in {point.name}</span>: <b>{point.y}</b>'
                    },
                    id: "Full-time",
                    data: [
                        [
                            "Agriculture",
                            978
                        ],
                        [
                            "Food & Natural Resources",
                            415
                        ],
                        [
                            "Architecture & Construction",
                            624
                        ],
                        [
                            "Business Management & Administration",
                            354
                        ],
                        [
                            "Education & Training",
                            925
                        ],
                        [
                            "Finance",
                            268
                        ]
                        [
                            "Manufacturing",
                            198
                        ]
                    ]
                }, {
                    name: "Part-time",
                    id: "Part-time",
                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span>Students who work in {point.name}</span>: <b>{point.y}</b>'
                    },
                    data: [
                        [
                            "Agriculture",
                            978
                        ],
                        [
                            "Food & Natural Resources",
                            415
                        ],
                        [
                            "Architecture & Construction",
                            624
                        ],
                        [
                            "Business Management & Administration",
                            354
                        ],
                        [
                            "Education & Training",
                            925
                        ],
                        [
                            "Finance",
                            268
                        ]
                        [
                            "Manufacturing",
                            198
                        ]
                    ]
                }, {
                    name: "Volunteer",
                    id: "Volunteer",
                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span>Students who work in {point.name}</span>: <b>{point.y}</b>'
                    },
                    data: [
                        [
                            "Agriculture",
                            978
                        ],
                        [
                            "Food & Natural Resources",
                            415
                        ],
                        [
                            "Architecture & Construction",
                            624
                        ],
                        [
                            "Business Management & Administration",
                            354
                        ],
                        [
                            "Education & Training",
                            925
                        ],
                        [
                            "Finance",
                            268
                        ]
                        [
                            "Manufacturing",
                            198
                        ]
                    ]
                }]
            }
        });
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Career Cluster
    $(function() {
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
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Student Organization Segments
    $(function() {
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
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Endorsement Pathway
    $(function() {
        Highcharts.setOptions({
            lang: {
                drillUpText: 'Back'
            }
        });
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
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                    }
                },
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}: {y}',
                        style: {
                            fontSize: '11px',
                            fontWeight: 'normal',
                            width: 200,
                        }
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">Number of students in</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
            },
            series: [{
                name: "Back",
                colorByPoint: true,
                data: [{
                    name: "STEM",
                    y: 587,
                    drilldown: "STEM"
                }, {
                    name: "Business and Industry",
                    y: 879,
                    drilldown: "Business and Industry"
                }, {
                    name: "Public Service",
                    y: 1548,
                    drilldown: "Public Service"
                }, {
                    name: "Arts and Humanities",
                    y: 649,
                    drilldown: "Arts and Humanities"
                }]
            }],
            drilldown: {
                drillUpButton: {
                    relativeTo: 'spacingBox',
                    position: {
                        y: 0,
                        x: 0
                    },
                    theme: {
                        fill: '#81c956',
                        'stroke-width': 1,
                        stroke: '#6fb147',
                        r: 6,
                        height: 16,
                        width: 30,
                        paddingLeft: 6,
                        states: {
                            hover: {
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            },
                            select: {
                                stroke: '#81c956',
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: "STEM",
                    id: "STEM",
                    data: [
                        ["CTE", 8],
                        ["Computer Science", 5],
                        ["Mathematics", 11],
                        ["Science", 8]
                    ]
                }, {
                    name: "Business and Industry",
                    id: "Business and Industry",
                    data: [
                        ["Agriculture", 5],
                        ["Food and Natural Resources", 5],
                        ["Architecture and Construction", 5],
                        ["Arts, A/V Technology and Communication", 5],
                        ["Business Management and Administration", 5],
                        ["Finance", 5],
                        ["Hospitality and Tourism", 5],
                        ["Information Technology", 5],
                        ["Manufacturing", 5],
                        ["Marketing", 5],
                        ["Transportation", 5],
                        ["Distribution and Logistics", 5],
                        ["English electives", 5]
                    ]
                }, {
                    name: "Public Service",
                    id: "Public Service",
                    data: [
                        ["Education and Training", 2.76],
                        ["Health Sciences", 2.32],
                        ["Human Services", 2.31],
                        ["Law, Public Safety, Corrections and Security", 1.27],
                        ["Junior Reserve Officer Training Corps (ROTC)", 1.02]
                    ]
                }, {
                    name: "Arts and Humanities",
                    id: "Arts and Humanities",
                    data: [
                        ["Social Studies", 2.56],
                        ["World Languages", 0.77],
                        ["Fine Arts", 0.42],
                        ["English electives", 0.3]
                    ]
                }]
            }
        });
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // SAT
    $(function() {
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
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ACT
    $(function() {
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
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Absences
    $(function() {

        // Absences 
        $('#absences').highcharts({

            chart: {
                type: 'column'
            },

            title: {
                text: ''
            },

            xAxis: {
                type: 'category'
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of Students'
                }
            },



            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        style: {
                            fontSize: '11px'
                        }
                    },
                    point: {
                        events: {
                            legendItemClick: function() {
                                return false; // <== returning false will cancel the default action
                            }
                        }
                    },
                    stacking: 'normal'
                },

            },

            series: [{
                name: 'Goal',
                color: '#44a9a8',
                stack: 'a',
                data: [{
                    name: 'Daily',
                    y: 93,
                }, {
                    name: 'Weekly',
                    y: 88,
                }, {
                    name: 'Monthly',
                    y: 80,
                }]
                }, {
                name: 'Present',
                color: '#6eb244',
                stack: 'b',
                data: [{
                    name: 'Daily',
                    y: 68,
                    drilldown: 'Daily-Present'
                }, {
                    name: 'Weekly',
                    y: 72,
                    drilldown: 'Weekly-Present'
                }, {
                    name: 'Monthly',
                    y: 89,
                    drilldown: 'Monthly-Present'
                }],
            }, {
                name: 'Absent-Excused',
                color: '#f45b5b',
                stack: 'c',
                data: [{
                    name: 'Daily',
                    y: 32,
                    drilldown: 'Daily-Absent'
                }, {
                    name: 'Weekly',
                    y: 42,
                    drilldown: 'Weekly-Absent'
                }, {
                    name: 'Monthly',
                    y: 48,
                    drilldown: 'Monthly-Absent'
                }]
            }, {
                name: 'Absent-Unexcused',
                color: '#d93e3e',
                stack: 'c',
                data: [{
                    name: 'Daily',
                    y: 32,
                    drilldown: 'Daily-Absent'
                }, {
                    name: 'Weekly',
                    y: 42,
                    drilldown: 'Weekly-Absent'
                }, {
                    name: 'Monthly',
                    y: 48,
                    drilldown: 'Monthly-Absent'
                }]
            }, {
                name: 'Absent-Unknown ',
                color: '#c52323',
                stack: 'c',
                data: [{
                    name: 'Daily',
                    y: 32,
                    drilldown: 'Daily-Absent'
                }, {
                    name: 'Weekly',
                    y: 42,
                    drilldown: 'Weekly-Absent'
                }, {
                    name: 'Monthly',
                    y: 48,
                    drilldown: 'Monthly-Absent'
                }]
            }],
            drilldown: {
                activeDataLabelStyle: {
                    color: 'black',
                    textShadow: '0 0 2px white, 0 0 2px white',
                    textDecoration: "none"
                },

                drillUpButton: {
                    position: {
                        y: -20,
                        x: 10
                    },
                    theme: {
                        fill: '#81c956',
                        'stroke-width': 1,
                        stroke: '#6fb147',
                        r: 6,
                        height: 16,
                        width: 30,
                        paddingLeft: 6,
                        states: {
                            hover: {
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            },
                            select: {
                                stroke: '#81c956',
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            }
                        }
                    }
                },
                series: [{
                    id: 'Daily-Absent',
                    name: 'Absent',
                    data: [
                        ['Grade1', 150],
                        ['Grade2', 350],
                        ['Grade3 ', 200]
                    ]
                }, {
                    id: 'Weekly-Absent',
                    name: 'Absent',
                    data: [
                        ['Grade1', 150],
                        ['Grade2', 350],
                        ['Grade3 ', 200]
                    ]
                }, {
                    id: 'Monthly-Absent',
                    name: 'Absent',
                    data: [
                        ['Grade1', 150],
                        ['Grade2', 350],
                        ['Grade3 ', 200]
                    ]
                }, {
                    id: 'Daily-Present',
                    name: 'Present',
                    data: [
                        ['Grade1', 80],
                        ['Grade2', 120],
                        ['Grade3', 100]
                    ]
                }, {
                    id: 'Weekly-Present',
                    name: 'Present',
                    data: [
                        ['Grade1', 25],
                        ['Grade2', 80],
                        ['Grade3', 45]
                    ]
                }, {
                    id: 'Monthly-Present',
                    name: 'Present',
                    data: [
                        ['Grade1', 175],
                        ['Grade2', 125],
                        ['Grade3', 175]
                    ]
                }, ]
            }
        });
    });

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Behavior
    $(function() {
        $('#behavior').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'category'
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

            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        inside: true,
                        rotation: -90,
                        style: {
                            fontSize: '11px'
                        }
                    },
                }
            },

            series: [{
                data: [{
                    name: 'Disrespect',
                    y: 2315,
                    color: '#f45b5b',
                    drilldown: 'Disrespect'
                }, {
                    name: 'Cheating',
                    y: 4215,
                    color: '#7cb5ec',
                    drilldown: 'Cheating'
                }, {
                    name: 'Class Disruption',
                    y: 3648,
                    color: '#2b908f',
                    drilldown: 'Class Disruption'
                }, {
                    name: 'Horseplay',
                    y: 4215,
                    color: '#f36523',
                    drilldown: 'Horseplay'
                }, {
                    name: 'Theft',
                    y: 3648,
                    color: '#7a8aa5',
                    drilldown: 'Theft'
                }]
            }],
            drilldown: {
                activeAxisLabelStyle: {
                    color: '#333',
                    textShadow: '0 0 2px white',
                },
                activeDataLabelStyle: {
                    color: 'black',
                    textShadow: '0 0 2px white',
                    textDecoration: "none"
                },

                drillUpButton: {
                    position: {
                        y: -20,
                        x: 10
                    },
                    theme: {
                        fill: '#81c956',
                        'stroke-width': 1,
                        stroke: '#6fb147',
                        r: 6,
                        height: 16,
                        width: 30,
                        paddingLeft: 6,
                        states: {
                            hover: {
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            },
                            select: {
                                stroke: '#81c956',
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            }
                        }
                    }
                },
                series: [{
                    id: 'Disrespect',
                    name: 'Disrespect',
                    data: [{
                        name: 'Grade1',
                        y: 935,
                    }, {
                        name: 'Grade2',
                        y: 1136,
                    }, {
                        name: 'Grade3',
                        y: 426,
                    }, ]
                }, {
                    id: 'Cheating',
                    name: 'Cheating',
                    data: [{
                        name: 'Grade1',
                        y: 935,
                    }, {
                        name: 'Grade2',
                        y: 1136,
                    }, {
                        name: 'Grade3',
                        y: 426,
                    }, ]
                }, {
                    id: 'Class Disruption',
                    name: 'Class Disruption',
                    data: [{
                        name: 'Grade1',
                        y: 935,
                    }, {
                        name: 'Grade2',
                        y: 1136,
                    }, {
                        name: 'Grade3',
                        y: 426,
                    }, ]
                }, {
                    id: 'Horseplay',
                    name: 'Horseplay',
                    data: [{
                        name: 'Grade1',
                        y: 935,
                    }, {
                        name: 'Grade2',
                        y: 1136,
                    }, {
                        name: 'Grade3',
                        y: 426,
                    }, ]
                }, {
                    id: 'Theft',
                    name: 'Theft',
                    data: [{
                        name: 'Grade1',
                        y: 935,
                    }, {
                        name: 'Grade2',
                        y: 1136,
                    }, {
                        name: 'Grade3',
                        y: 426,
                    }, ]
                }]
            }
        })
    });

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Product Usage
    $(function() {
        $('#productUsage').highcharts({
            chart: {
                type: 'column'
            },
            colors: ['#f45b5b', '#7cb5ec'],
            title: {
                text: ''
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: 0,
                    style: {
                        fontSize: '10px'
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
                enabled: true
            },

            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        inside: true,
                        rotation: -90,
                        color: '#000',
                        style: {
                            fontSize: '11px'
                        }
                    },
                }
            },

            series: [{
                name: 'Weekly Goals',
                data: [{
                    name: 'Eduphoria',
                    y: 545,
                    drilldown: 'Eduphoria'
                }, {
                    name: 'iStation',
                    y: 296,
                    drilldown: 'iStation'
                }, {
                    name: 'Think Through Math',
                    y: 478,
                    drilldown: 'Math'
                }, {
                    name: 'Achieve 3000',
                    y: 541,
                    drilldown: 'Achieve'
                }, {
                    name: 'Penda',
                    y: 462,
                    drilldown: 'Penda'
                }, {
                    name: 'Renaissance Learning',
                    y: 465,
                    drilldown: 'Renaissance'
                }, ]
            }, {
                name: 'Monthly Goals',
                data: [{
                    name: 'Eduphoria',
                    y: 755,
                    drilldown: 'Monthly Eduphoria'
                }, {
                    name: 'iStation',
                    y: 286,
                    drilldown: 'Monthly iStation'
                }, {
                    name: 'Think Through Math',
                    y: 876,
                    drilldown: 'Monthly Math'
                }, {
                    name: 'Achieve 3000',
                    y: 576,
                    drilldown: 'Monthly Achieve'
                }, {
                    name: 'Penda',
                    y: 278,
                    drilldown: 'Monthly Penda'
                }, {
                    name: 'Renaissance Learning',
                    y: 486,
                    drilldown: 'Monthly Renaissance'
                }, ]
            }],
            drilldown: {
                activeAxisLabelStyle: {
                    color: '#333',
                    textShadow: '0 0 2px white',
                },
                activeDataLabelStyle: {
                    color: 'black',
                    textShadow: '0 0 2px white',
                    textDecoration: "none"
                },

                drillUpButton: {
                    position: {
                        y: -20,
                        x: 10
                    },
                    theme: {
                        fill: '#81c956',
                        'stroke-width': 1,
                        stroke: '#6fb147',
                        r: 6,
                        height: 16,
                        width: 30,
                        paddingLeft: 6,
                        states: {
                            hover: {
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            },
                            select: {
                                stroke: '#81c956',
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            }
                        }
                    }
                },
                series: [{
                        id: 'Eduphoria',
                        name: 'Eduphoria',
                        data: [
                            ['Campus', 45],
                            ['Grade Level', 52],
                            ['Teacher', 54],
                            ['Student', 25],
                        ]
                    }, {
                        id: 'Monthly Eduphoria',
                        name: 'Monthly Eduphoria',
                        data: [
                            ['Campus', 44],
                            ['Grade Level', 42],
                            ['Teacher', 55],
                            ['Student', 27],
                        ]
                    }, {
                        id: 'iStation',
                        name: 'iStation',
                        data: [
                            ['Campus', 45],
                            ['Grade Level', 82],
                            ['Teacher', 41],
                            ['Student', 24],
                        ]
                    }, {
                        id: 'Monthly iStation',
                        name: 'Monthly iStation',
                        data: [
                            ['Campus', 44],
                            ['Grade Level', 42],
                            ['Teacher', 54],
                            ['Student', 29],
                        ]
                    }, {
                        id: 'Math',
                        name: 'Think Through Math',
                        data: [
                            ['Campus', 94],
                            ['Grade Level', 12],
                            ['Teacher', 42],
                            ['Student', 82],
                        ]
                    }, {
                        id: 'Monthly Math',
                        name: 'Monthly Math',
                        data: [
                            ['Campus', 64],
                            ['Grade Level', 42],
                            ['Teacher', 14],
                            ['Student', 23],
                        ]
                    }, {
                        id: 'Achieve',
                        name: 'Achieve 3000',
                        data: [
                            ['Campus', 45],
                            ['Grade Level', 52],
                            ['Teacher', 54],
                            ['Student', 25],
                        ]
                    }, {
                        id: 'Monthly Achieve',
                        name: 'Monthly Achieve',
                        data: [
                            ['Campus', 44],
                            ['Grade Level', 42],
                            ['Teacher', 55],
                            ['Student', 27],
                        ]
                    }, {
                        id: 'Penda',
                        name: 'Penda',
                        data: [
                            ['Campus', 45],
                            ['Grade Level', 82],
                            ['Teacher', 41],
                            ['Student', 24],
                        ]
                    }, {
                        id: 'Monthly Penda',
                        name: 'Monthly Penda',
                        data: [
                            ['Campus', 44],
                            ['Grade Level', 42],
                            ['Teacher', 54],
                            ['Student', 29],
                        ]
                    }, {
                        id: 'Renaissance',
                        name: 'Renaissance Learning',
                        data: [
                            ['Campus', 94],
                            ['Grade Level', 12],
                            ['Teacher', 42],
                            ['Student', 82],
                        ]
                    }, {
                        id: 'Monthly Renaissance',
                        name: 'Monthly Renaissance',
                        data: [
                            ['Campus', 64],
                            ['Grade Level', 42],
                            ['Teacher', 14],
                            ['Student', 23],
                        ]
                    }

                ]
            }
        })
    });

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Classroom Visits
    $(function() {
        $('#classroomVisits').highcharts({
            chart: {
                type: 'column'
            },
            colors: ['#30b6b0', '#7caf45', '#5289cc'],
            title: {
                text: ''
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of visits for month'
                }
            },
            legend: {
                enabled: false
            },

            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        inside: true,
                        rotation: -90,
                        color: '#000',
                        style: {
                            fontSize: '11px'
                        }
                    },
                }
            },

            series: [{
                name: 'Visits for month',
                colorByPoint: true,
                data: [{
                    name: 'Visits by week',
                    y: 149,
                }, {
                    name: 'Visits by campus',
                    y: 194,
                }, {
                    name: 'Visits by administrator',
                    y: 97,
                    events: {
                        click: visitsAdministrator
                    }
                }]
            }],
        })
    });

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Growth Plan
    $(function() {
        $('#growthPlan ').highcharts({
            chart: {
                type: 'column'
            },
            colors: ['#30b6b0', '#7caf45', '#5289cc'],
            title: {
                text: ''
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Teachers on a Growth Plan'
                }
            },
            legend: {
                enabled: false
            },

            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        inside: true,
                        rotation: -90,
                        color: '#000',
                        style: {
                            fontSize: '11px'
                        }
                    },
                }
            },

            series: [{
                name: 'Visits for month',
                colorByPoint: true,
                data: [{
                    name: 'Campus',
                    y: 284,
                }, {
                    name: 'Teacher',
                    y: 394,
                }, {
                    name: 'Teacher Metrics',
                    y: 216,
                }]
            }],
        })
    });

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Student Withdrawls
    $(function() {
        $('#studentWithdrawls').highcharts({
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
                    allowPointSelect: false,
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
                    name: "Number of students who have withdrawn",
                    y: 1180,
                    drilldown: "withdrawn",
                    color: '#c35959'
                }, {
                    name: "Number of students who haven't withdrawn",
                    y: 1830,
                    color: '#ccc'
                }, ]
            }],
            drilldown: {

                drillUpButton: {
                    position: {
                        y: 0,
                        x: 0
                    },
                    theme: {
                        fill: '#81c956',
                        'stroke-width': 1,
                        stroke: '#6fb147',
                        r: 6,
                        height: 16,
                        width: 30,
                        paddingLeft: 6,
                        states: {
                            hover: {
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            },
                            select: {
                                stroke: '#81c956',
                                fill: '#6fb147',
                                style: {
                                    color: "#fff"
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: "Students who have withdrawn",
                    id: "withdrawn",
                    data: [
                        ["Grade Level", 885],
                        ["Campus", 195],
                        ["Student", 100]
                    ]
                }]
            }
        });
    });


    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Regional Employment
    $(function() {
        $('#regionalEmployment').highcharts({
            chart: {
                type: 'column'
            },
            colors: ['#f45b5b', '#7cb5ec'],
            title: {
                text: ''
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '10px'
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
                enabled: true
            },

            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        inside: true,
                        rotation: -90,
                        color: '#000',
                        style: {
                            fontSize: '11px'
                        }
                    },
                }
            },

            series: [{
                name: 'School District Summary',
                data: [{
                    name: 'Agriculture, Food & Natural Resources',
                    y: 554,
                }, {
                    name: 'Architecture & Construction',
                    y: 942,
                }, {
                    name: 'Arts, A/V Technology & Communications',
                    y: 796,
                }, {
                    name: 'Business Management & Administration',
                    y: 269,
                }, {
                    name: 'Education & Training',
                    y: 769,
                }, {
                    name: 'Finance',
                    y: 275,
                }, {
                    name: 'Health Science',
                    y: 735,
                }, {
                    name: 'Hospitality & Tourism',
                    y: 941,
                }, {
                    name: 'Human Services',
                    y: 445,
                }, {
                    name: 'Information Technology',
                    y: 696,
                }, {
                    name: 'Law, Public, Corrections & Security',
                    y: 547,
                }, {
                    name: 'Manufacturing',
                    y: 745,
                }, {
                    name: 'Marketing',
                    y: 359,
                }, {
                    name: 'Science, Technology, Engineering & Mathematics',
                    y: 546,
                }]
            }, {
                name: 'Workforce Summary',
                data: [{
                    name: 'Agriculture, Food & Natural Resources',
                    y: 263,
                }, {
                    name: 'Architecture & Construction',
                    y: 575,
                }, {
                    name: 'Arts, A/V Technology & Communications',
                    y: 832,
                }, {
                    name: 'Business Management & Administration',
                    y: 175,
                }, {
                    name: 'Education & Training',
                    y: 921,
                }, {
                    name: 'Finance',
                    y: 456,
                }, {
                    name: 'Health Science',
                    y: 636,
                }, {
                    name: 'Hospitality & Tourism',
                    y: 752,
                }, {
                    name: 'Human Services',
                    y: 324,
                }, {
                    name: 'Information Technology',
                    y: 835,
                }, {
                    name: 'Law, Public, Corrections & Security',
                    y: 384,
                }, {
                    name: 'Manufacturing',
                    y: 721,
                }, {
                    name: 'Marketing',
                    y: 553,
                }, {
                    name: 'Science, Technology, Engineering & Mathematics',
                    y: 635,
                }]
            }]
        })
    });
    //++++++++++++++++++++++++++++++++++ Widgets ++++++++++++++++++++++++++++++++++

});

function apCourseModal() {
    $('#apCourseModal').modal('show');
};

function visitsAdministrator() {
    $('#visitsAdministrator').modal('show');
}
