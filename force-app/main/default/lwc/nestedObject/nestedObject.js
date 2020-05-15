/**
 * Created by pmoroz on 14.05.2020.
 */

import {LightningElement, track} from 'lwc';

export default class NestedObject extends LightningElement {

    @track timesheetDaysData = [];

    addNewTimeDetails(event) {
        this.timesheetDaysData.timesheetDetails.push({
            projectName: "",
            timeSheetDetailID: null,
            timeSheetHours: 0,
            timeSheetHoursType: ""
        });
        console.log("Enter ", this.timesheetDaysData);
    }

    connectedCallback() {
        this.timesheetDaysData = [
            {
                "timeSheetDate": "May 11th",
                "timeSheetDateId": "4",
                recId: 11,
                "timesheetDetails": [
                    {
                        "projectName": "",
                        "timeSheetHours": 0,
                        "timeSheetDetailID": "2",
                        "timeSheetHoursType": ""
                    }
                ]
            },
            {
                "timeSheetDate": "May 12th",
                "timeSheetDateId": "3",
                recId: 21,
                "timesheetDetails": [
                    {
                        "projectName": "",
                        "timeSheetHours": 0,
                        "timeSheetDetailID": "1",
                        "timeSheetHoursType": ""
                    }
                ]
            },
            {
                "timeSheetDate": "May 13th",
                recId: 31,
                "timeSheetDateId": "a3P1I000000YANiUAO",
                "timesheetDetails": [
                    {
                        "projectName": "Emit CS Payroll",
                        "timeSheetDetailID": "a3O1I000002IE6dUAG",
                        "timeSheetHours": 4,
                        "timeSheetHoursType": "Paid Time Off"
                    },
                    {
                        "projectName": "Emit CS Payroll",
                        "timeSheetDetailID": "a3O1I000002IE6YUAW",
                        "timeSheetHours": 4,
                        "timeSheetHoursType": "Billable Regular"
                    }
                ]
            }

        ];
    }
}