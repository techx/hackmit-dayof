var SponsorPrizeViewGen = (function() {
  'use strict';

  /**********
   * config */
  var COLOR_CLASSES = [
      'hmit-red', 'hmit-turquoise', 'hmit-yellow', 'hmit-green', 'hmit-orange'
  ];

  /******************
   * work functions */
  function initSponsorPrizes() {
    GENERAL_PRIZE_DATA.map(function(prize, idx) {
      var box = getBox(
        COLOR_CLASSES[idx%COLOR_CLASSES.length],
        prize.title,
        prize.description
      );
      document.getElementById('general-prize-container').appendChild(box);
    });
    SPONSOR_PRIZE_DATA.map(function(prize, idx) {
      var box = getBox(
        COLOR_CLASSES[idx%COLOR_CLASSES.length],
        prize.title,
        prize.description
      );
      document.getElementById('sponsor-prize-container').appendChild(box);
    });
  }

  function getBox(colorClass, title, descr) {
    var div = document.createElement('div');
    div.className = 'eight wide column';
    var spDiv = document.createElement('div');
    spDiv.className = 'ui segment top attached inverted '+colorClass;
    var h2 = document.createElement('h2');
    h2.innerHTML = title;
    spDiv.appendChild(h2);
    var tiDiv = document.createElement('div');
    tiDiv.className = 'ui segment bottom attached';
    var p = document.createElement('h4');
    p.innerHTML = descr;
    tiDiv.appendChild(p);
    div.appendChild(spDiv);
    div.appendChild(tiDiv);
    return div;
  }

  return {
    init: initSponsorPrizes
  }
})();

window.addEventListener('load', SponsorPrizeViewGen.init);
