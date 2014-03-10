DashboardController = RouteController.extend({
    template: 'dashboard',
    layoutTemplate: 'mainLayout'
});

Template.dashboard.viewModel = function () {
    var self = this;

    self.activities = ko.meteor.find(Activities, {}, {
        sort: {
            'data.createdAt': -1
        }
    });

    self.activityVM = function (activity) {
        switch (activity.type()) {
        case 0:
            return 'dashboardContactableActivity';
        case 2:
            return 'dashboardTaskActivity';
        case 3:
            return 'dashboardJobActivity';
        default:
            return 'dashboardEmptyActivity';
        }
    };
    var now = new Date();
    var timeInADay = 24 * 60 * 60 * 1000;
    var days = [now.getTime() - (timeInADay) * 7, now.getTime() - (timeInADay) * 6, now.getTime() - (timeInADay) * 5, now.getTime() - (timeInADay) * 4, now.getTime() - (timeInADay) * 3, now.getTime() - (timeInADay) * 2, now.getTime() - (timeInADay) * 1, now.getTime() - (timeInADay) * 0];


    self.jobHistory = ko.observableArray(getHistorical(Jobs, days));
    self.customerHistory = ko.observableArray(getHistorical(Contactables, days, {
        customer: {
            $exists: true
        }
    }));
    self.employeeHistory = ko.observableArray(getHistorical(Contactables, days), {
        Employee: {
            $exists: true
        }
    });


    return self;
};
var getHistorical = function (collection, timeStamps, query) {
    var history = [];
    var q = query || {};
    //    debugger;
    _.each(timeStamps, function (time) {
        q.createdAt = {
            $lte: time
        }
        history.push(collection.find(q).count());
    })
    return history;
}
Template.dashboard.rendered = function () {
    exartu = {
        // === Peity charts === //
        //        sparkline: function () {
        //            $(".sparkline_line_good span").sparkline("html", {
        //                type: "line",
        //                fillColor: "#4cd964",
        //                lineColor: "#4cd964",
        //                width: "50",
        //                height: "24"
        //            });
        //            $(".sparkline_line_bad span").sparkline("html", {
        //                type: "line",
        //                fillColor: "#de0a0a",
        //                lineColor: "#de0a0a",
        //                width: "50",
        //                height: "24"
        //            });
        //            $(".sparkline_line_neutral span").sparkline("html", {
        //                type: "line",
        //                fillColor: "#CCCCCC",
        //                lineColor: "#757575",
        //                width: "50",
        //                height: "24"
        //            });
        //
        //            $(".sparkline_bar_good span").sparkline('html', {
        //                type: "bar",
        //                barColor: "#4cd964",
        //                barWidth: "5",
        //                height: "24"
        //            });
        //            $(".sparkline_bar_bad span").sparkline('html', {
        //                type: "bar",
        //                barColor: "#de0a0a",
        //                barWidth: "5",
        //                height: "24"
        //            });
        //            $(".sparkline_bar_neutral span").sparkline('html', {
        //                type: "bar",
        //                barColor: "#757575",
        //                barWidth: "5",
        //                height: "24"
        //            });
        //        },

        // === Tooltip for flot charts === //
        flot_tooltip: function (x, y, contents) {

            $('<div id="tooltip">' + contents + '</div>').css({
                top: y + 5,
                left: x + 5
            }).appendTo("body").fadeIn(200);
        }
    }

    //    exartu.sparkline();
}