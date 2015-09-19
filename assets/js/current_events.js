var HackMITCurrentEvents = (function() {
  'use strict';

  /**********
   * config */
  var FUDGE = 0.25; //how much earlier to start showing events, in hours
  var SAT_MIDNIGHT = 1442635200000;
  var ZERO_DATE = SAT_MIDNIGHT;
  var INCR = 5000; //poll every 5 seconds; it's computationally cheap & easy

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
    var evts = getEventsContainingT(t);
    clearEvents(evts.length === 0);
    evts.map(function(evt) { addEvent(evt); });
  }

  function addEvent(hackEvent) {
    //get the tr to append
    var tr = document.createElement('tr');
    var title = document.createElement('td');
    title.innerHTML = hackEvent[2] +' @ ' + hackEvent[3];
    var time = document.createElement('td');
    time.innerHTML = 'from ' + formatTime(hackEvent[0]) + ' to ';
    time.innerHTML += formatTime(hackEvent[1]);
    tr.appendChild(title);
    tr.appendChild(time);

    //append it
    var tbody = document.getElementById('current-events-tbody');
    tbody.appendChild(tr);
    //internet probs messed with jquery & semantic
    document.getElementById('current-events-cont').style.display = 'block';
  }

  function clearEvents(hide) {
    var tbody = document.getElementById('current-events-tbody');
    var evts = Array.prototype.filter.call(
      tbody.childNodes,
      function(evt) {
        return evt.nodeName.toLowerCase() === 'tr';
      }
    );
    for (var ai = 1; ai < evts.length; ai++) {
      tbody.removeChild(evts[ai]);
    }

    if (hide) {
      var cont = document.getElementById('current-events-cont');
      cont.setAttribute('style', 'display: none !important');
    }
  }

  function getEventsContainingT(t) {
    return HMIT_EVTS.filter(function(evt) {
      return evt[0] - FUDGE <= t && evt[1] >= t;
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
