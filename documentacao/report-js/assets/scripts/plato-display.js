$(function(){"use strict";function t(t){var e=_.map(t,function(t){var e=new Date(t.date);return{date:e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),average_maintainability:parseFloat(t.average.maintainability),average_sloc:t.average.sloc}}).slice(-20);Morris.Area({element:"chart_historical_sloc",data:e,xkey:"date",ykeys:["average_sloc"],parseTime:!1,lineColors:["#2A2A2A"],pointSize:0,lineWidth:0,grid:!1,axes:!1,hideHover:"always",fillOpacity:1}),Morris.Area({element:"chart_historical_maint",data:e,xkey:"date",ykeys:["average_maintainability"],labels:["Maintainability"],ymax:100,parseTime:!1,lineColors:["#2A2A2A"],pointSize:0,lineWidth:0,grid:!1,axes:!1,hideHover:"always",fillOpacity:1})}function e(){$(".js-chart").empty(),t(__history)}e(),$(window).on("resize",_.debounce(e,200))});