var saveEntry = document.querySelectorAll('button')
  for( i=0; i< saveEntry.length; i++) {

    var buttonElement = saveEntry[i]

    buttonElement.addEventListener('click', function(event) {

      var textAreaValue = event.currentTarget.previousElementSibling.querySelector('textArea').value;

      var rowKey = event.currentTarget.previousElementSibling.previousElementSibling.getAttribute('value')

      localStorage.setItem(rowKey, textAreaValue)

  })

  var rowKey = buttonElement.previousElementSibling.previousElementSibling.getAttribute('value')
  var localStorageValue = localStorage.getItem(rowKey);

  buttonElement.previousElementSibling.querySelector('textarea').value = localStorageValue;

  }

var update = function () {

  var currentDay = document.getElementById('currentDay');

  currentDay.innerText = moment().format('LLLL');
  

var now = moment().format('H')
  console.log(now)

var timeBlock = $('.time-block');

timeBlock.each(function (index, element){
  element = $(element);
  if (now > element.attr('data-time')) {
    element.addClass('past').removeClass('future').removeClass('present');
    // console.log(element.attr('data-time'))

  } if (now == element.attr('data-time')) {
    element.addClass('present').removeClass('future');
  
  } if (now < element.attr('data-time')) {
    element.addClass('future').removeClass('past');
  }
});
};


setInterval(update, 1000);