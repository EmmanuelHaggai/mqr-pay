$(document).ready(function() {
  var socket = new WebSocket("wss://ws-feed.sakaai.org");
  socket.onopen = function() {
    var msg = {
      type: "subscribe",
      product_id: "BTC-USD"
    };
    socket.send(JSON.stringify(msg));
    $("#status").text("Connected").css("color", "#1E8F1E");
  };

  socket.onmessage = function(event) {
    var msg = JSON.parse(event.data);
    if (msg["type"] == "match") {
      var price = parseFloat(msg["price"]).toFixed(2);

      var sign;
      if (msg["side"] == "sell") {
        sign = "▲\t";
      } else {
        sign = "  ▼\t";
      }
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      if (hours > 12) {
        hours = hours - 12;
      } else if (hours == 0) {
        hours = 12;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      var fulltime = hours + ":" + minutes + ":" + seconds;
      var side = '"' + msg["side"] + '"';
      var price_list_item =
        "<li class=" +
        side +
        "><p class='tick'>" +
        sign +
        " " +
        price +
        " - " +
        fulltime +
        "</p></li>";

      $("#ticker").prepend(price_list_item);
    }
  };

  function sendText() {
    var msg = {
      type: "subscribe",
      product_id: "BTC-USD"
    };
    socket.send(JSON.stringify(msg));
  }
});

$(document).ready(function() {
  function showDate() {
    var time = new Date();
    var date = time.getDate();
    var year = time.getFullYear();

    var monthArray = new Array();
    monthArray[0] = "January";
    monthArray[1] = "February";
    monthArray[2] = "March";
    monthArray[3] = "April";
    monthArray[4] = "May";
    monthArray[5] = "June";
    monthArray[6] = "July";
    monthArray[7] = "August";
    monthArray[8] = "September";
    monthArray[9] = "October";
    monthArray[10] = "November";
    monthArray[11] = "December";
    month = monthArray[time.getMonth()];

    var dateDiv = document.getElementById("date");
    dateDiv.innerText = month + " " + date + ", " + year;
  }

  function showTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    // format numbers
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (hours == 0) {
      showDay();
      hours = 12;
    }

    var clockDiv = document.getElementById("clock");
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
  }

  showDate();
  setInterval(showTime, 1);
});