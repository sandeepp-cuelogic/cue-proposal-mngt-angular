$(document).ready(function() {
     $('.tip').tooltip();

    // fix dimensions of chart that was in a hidden element
    jQuery(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function (e) { // on tab selection event
        jQuery( ".contains-chart" ).each(function() { // target each element with the .contains-chart class
            var studentSummaryFav = $('#student-summary-fav').highcharts(); // target the chart itself
            var tsiAssessmentFav = $('#tsi-assessment-fav').highcharts(); // target the chart itself
            var meetStandardSubjectFav = $('#meet-standard-subject-fav').highcharts(); // target the chart itself
            var endorsementPathwayFav = $('#endorsement-pathway-fav').highcharts(); // target the chart itself
            
            studentSummaryFav.reflow();// reflow that chart
            tsiAssessmentFav.reflow();// reflow that chart
            meetStandardSubjectFav.reflow();// reflow that chart
            endorsementPathwayFav.reflow();// reflow that chart
        });
    });

//++++++++++++++++++++++++++++++++++ Widgets ++++++++++++++++++++++++++++++++++
    // Student Summery 
    $(function() {
        $('#student-summary-fav').highcharts({
            chart: {
                type: 'column'
            },
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
                enabled: false
            },
            tooltip: {
                pointFormat: 'Total Students. <b>{point.y:.1f}</b>'
            },
            series: [{
                name: 'Student Summary',
                data: [{
                    name: 'School District',
                    y: 2145,

                    color: "#f45b5b"
                }, {
                    name: 'Campus',
                    y: 1687,
                    color: "#2b908f"
                }, {
                    name: 'Grade Level',
                    y: 985,
                    color: "#e4d354"
                }, {
                    name: 'Gender',
                    y: 562,
                    color: "#7cb5ec"
                }, {
                    name: 'Spacial Population',
                    y: 1278,
                    color: "#8085e9"
                }],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#000',
                    align: 'right',
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '11px'
                    }
                }
            }]
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
        $('#tsi-assessment-fav').highcharts({

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
        $('#meet-standard-subject-fav').highcharts({
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
    // Endorsement Pathway
    $(function() {
        Highcharts.setOptions({
            lang: {
                drillUpText: 'Back'
            }
        });
        // Create the chart
        $('#endorsement-pathway-fav').highcharts({
            chart: {
                type: 'pie'
            },
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
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
                            width:200,
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
});