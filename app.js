$(document).ready(function(event) {
  $('#js-main-form').on('submit', function(event) {
    event.preventDefault();
    var totalText = $('.js-select-this-text').val();
    var analyzeThisText = $('.js-select-this-text').val().split(' ');
    var tokenizedText = tokenizeText($('.js-select-this-text').val());
    getWordCount(analyzeThisText); 
    averageWordLength(analyzeThisText);
    getUniqueWord(analyzeThisText);
    averageSentenceLength(analyzeThisText);
    $('dl').removeClass('hidden');
  });
});

function averageWordLength(wordArray) {
  var word_average = wordArray.join();
  var average = ((word_average.length / wordArray.length).toFixed(2));
  $('#averageWordLength').text(average);
};


function getWordCount(wordArray) {
  var num = wordArray.length;
  $('#wordCount').text(wordArray.length);
  return wordArray.length;
}

function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function getUniqueWord(wordArray) {
  var unique_array = [];
  for (var i = 0; i < wordArray.length; i++) {
    if (unique_array.indexOf(wordArray[i]) === -1) {
        unique_array.push(wordArray[i]);
    }
  }
    $('#uniqueWord').text(unique_array.length);
}

function averageSentenceLength(wordArray) {
    var array_to_string = wordArray.join();
    var num_sentences = array_to_string.match(/[.!?]+/g) ? array_to_string.match(/[.!?]+/g).length : 1;
    var sentence_length = ((wordArray.length / num_sentences).toFixed(2));
    $('#averageSentenceLength').text(sentence_length);
}
