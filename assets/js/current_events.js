var HackMITCurrentEvents = (function() {
  /**********
   * config */

  /**************
   * work funcs */
  function initHackMITCurrentEvents() {
    //todo
    addEvent(HMIT_EVTS[0]);
  }

  function addEvent(hackEvent) {
    //get the tr to append
    var tr = document.createElement('tr');
    var start = document.createElement('td');
    start.innerHTML = hackEvent[0];
    var end = document.createElement('td');
    end.innerHTML = hackEvent[1];
    var title = document.createElement('td');
    title.innerHTML = hackEvent[2];
    var location = document.createElement('td');
    location.innerHTML = hackEvent[3];
    tr.appendChild(start);
    tr.appendChild(end);
    tr.appendChild(title);
    tr.appendChild(location);

    //append it
    document.getElementById('current-events-table').appendChild(tr);
  }

  function clearEvents() {
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
  }

  return {
    init: initHackMITCurrentEvents,
    addEvent: addEvent,
    clearEvents: clearEvents
  };
})();

window.addEventListener('load', HackMITCurrentEvents.init);
