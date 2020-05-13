({
    doInit : function(component, event, helper) {
        console.log(component.get("v.isAllDayEvent"));
        var startDate = new Date();
        startDate.getMinutes() && startDate.setMinutes(60);
        component.set("v.startDatetime", startDate.toISOString());
        console.log(startDate.toISOString());
        var finalDate = new Date();
        finalDate.getMinutes() && finalDate.setMinutes(120);
        component.set("v.endDatetime", finalDate.toISOString());
    },

    handleStartChange : function(component, event, helper) {
        var start = component.get("v.startDatetime");
        var d = new Date(start);
        d.setMinutes(d.getMinutes() +component.get("v.differenceBetweenDates"));
        component.set("v.endDatetime", d.toISOString());
    },

    handleEndChange : function(component, event, helper) {
        var start = component.get("v.startDatetime");
        var end = component.get("v.endDatetime");
        console.log(component.get("v.endDatetime"));

        console.log('start');
        console.log(start);
        console.log(typeof start);
        console.log('end');
        console.log(end);
        console.log('diff');
        console.log(new Date(end) - new Date(start));

        var diffMs = new Date(end) - new Date(start); // milliseconds
        var diffDays = Math.floor(diffMs / 86400000); // days
        var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        component.set("v.differenceBetweenDates", diffMins);
        console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes ");
    },

    allDayEventHandle: function(component, event, helper) {
        console.log('handled@!@');
        console.log(component.get("v.isAllDayEvent"));
        if(component.get("v.isAllDayEvent")) {
            component.set("v.inputType", "date")
        } else {
            component.set("v.inputType", "datetime")
        }
    }
})