var HackMITScheduleGen = (function() {
    'use strict';

    /**********
     * config */
    var GENERAL_EVENT = 0
    var WORKSHOP = 1
    var FOOD = 2
    var SAT_MIDNIGHT = 24

    /**************
     * work funcs */
    function initHackMITSchedule() {
        var itisSunday = false;
        HMIT_EVTS.map(function(event) {
            var start = event[0];
            var end = event[1];
            var description = event[2];
            var eventLocation = event[3];
            var eventType = event[4];

            var row = getTableRow(
                formatTime(start),
                formatTime(end),
                description,
                eventLocation
            );

            if (eventType == WORKSHOP) {
                document.getElementById('workshop-schedule').appendChild(row);
            } else {
                if (start > SAT_MIDNIGHT && !itisSunday) {
                    var sundayHeader = document.createElement('tr');
                    var sundayCell = document.createElement('td');
                    sundayCell.className = "active";
                    sundayCell.colSpan = "4";
                    sundayCell.innerHTML = "Sunday";
                    sundayHeader.appendChild(sundayCell);
                    document.getElementById('general-schedule').appendChild(sundayHeader);
                    itisSunday = true;
                }
                document.getElementById('general-schedule').appendChild(row);
            }
        });
    }

    function getTableRow(start, end, description, eventLocation) {
        var row = document.createElement('tr');
        var startCell = document.createElement('td');
        startCell.innerHTML = start;
        var endCell = document.createElement('td');
        endCell.innerHTML = end;
        var descriptionCell = document.createElement('td');
        descriptionCell.innerHTML = description;
        var locationCell = document.createElement('td');
        locationCell.innerHTML = eventLocation;
        row.appendChild(startCell);
        row.appendChild(endCell);
        row.appendChild(descriptionCell);
        row.appendChild(locationCell);
        return row;
    }

    function formatTime(t) {
        t = parseFloat(t)%24;
        var m = t >= 12 ? 'pm' : 'am';
        var min = Math.floor((t%1)*60)
        var hr = Math.floor(t)%12;
        if (hr === 0) hr = 12;
        if (min < 10) min = '0'+min;
        return hr + ':' + min + m;
    }

    return {
        init: initHackMITSchedule
    }

})();

window.addEventListener('load', HackMITScheduleGen.init);
