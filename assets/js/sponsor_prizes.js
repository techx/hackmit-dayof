var SponsorPrizeViewGen = (function() {
  'use strict';

  /**********
   * config */
  var COLOR_CLASSES = [
    'hmit-pink', 'hmit-blue', 'hmit-purple', 'hmit-yellow'
  ];

  /******************
   * work functions */
  function initSponsorPrizes() {
    SPONSOR_PRIZE_DATA.map(function(prize, idx) {
      var box = getBox(
        COLOR_CLASSES[idx%COLOR_CLASSES.length],
        prize.title,
        prize.description,
        prize.amount
      );
      document.getElementById('prize-container').appendChild(box);
    });
  }

  function getBox(colorClass, title, descr, prizeVal) {
    var div = document.createElement('div');
    div.className = 'eight wide column';
    var spDiv = document.createElement('div');
    spDiv.className = 'ui segment top attached inverted '+colorClass;
    var h2 = document.createElement('h2');
    h2.innerHTML = title;
    spDiv.appendChild(h2);
    var tiDiv = document.createElement('div');
    tiDiv.className = 'ui segment bottom attached';
    var h3 = document.createElement('h3');
    h3.innerHTML = 'Prize: ' + prizeVal;
    var p = document.createElement('p');
    p.innerHTML = descr;
    tiDiv.appendChild(h3);
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
