var HackMITCurrentEvents = (function() {
  'use strict';

  /**********
   * config */
  var SAT_MIDNIGHT = 1442635200000;
  var FRI_MIDNIGHT = SAT_MIDNIGHT - 24*60*60*1000;
  var ZERO_DATE = FRI_MIDNIGHT;
  var SPEED = 60*60/5; //increase to aid debugging; default is 1 hr/hr
  if (SPEED !== 1) ZERO_DATE = +new Date();
  var INCR = 5*1000; //poll every 5 seconds; it's computationally cheap & easy

  /**************
   * work funcs */
  function initHackMITCurrentEvents() {
    setInterval(function() {
      //hours since the zero-date
      var time = ((+new Date) - ZERO_DATE)/(60*60*1000);
      loadEventsForTime(time);
    }, INCR);
  }

  function loadEventsForTime(t) {
    t *= SPEED; //time since the zero date
    window.location.hash = t;
    var evts = getEventsContainingT(t);
    clearEvents(evts.length === 0);
    evts.map(function(evt) { addEvent(evt); });
  }

  function addEvent(hackEvent) {
    //get the tr to append
    var tr = document.createElement('tr');
    var start = document.createElement('td');
    start.innerHTML = formatTime(hackEvent[0]);
    var end = document.createElement('td');
    end.innerHTML = formatTime(hackEvent[1]);
    var title = document.createElement('td');
    title.innerHTML = hackEvent[2];
    var location = document.createElement('td');
    location.innerHTML = hackEvent[3];
    tr.appendChild(start);
    tr.appendChild(end);
    tr.appendChild(title);
    tr.appendChild(location);

    //append it
    var table = document.getElementById('current-events-table');
    table.appendChild(tr);
    //internet probs messed with jquery & semantic
    var oldClasses = document.getElementById('current-events-cont').className;
    var newClasses = oldClasses.replace(/invisible/gi, '');
    newClasses = newClasses.trim().replace(/[ ]+/g, ' ')
    document.getElementById('current-events-cont').className = newClasses;
  }

  function clearEvents(hide) {
    var table = document.getElementById('current-events-table');
    var evts = Array.prototype.filter.call(
      table.childNodes,
      function(evt) {
        return evt.nodeName.toLowerCase() === 'tr';
      }
    );
    for (var ai = 1; ai < evts.length; ai++) {
      table.removeChild(evts[ai]);
    }

    if (hide) {
      document.getElementById('current-events-cont').className += ' invisible';
    }
  }

  function getEventsContainingT(t) {
    return HMIT_EVTS.filter(function(evt) {
      return evt[0] <= t && evt[1] >= t;
    });
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
    init: initHackMITCurrentEvents,
    addEvent: addEvent,
    clearEvents: clearEvents
  };
})();

window.addEventListener('load', HackMITCurrentEvents.init);
