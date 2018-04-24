(function(){
  function Question(question, answer, correct){
    //A question should include:
    //a) question itself
    //b) the answers from which the player can choose the correct one
    //c) correct answer
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  }
  Question.prototype.disPlayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ': ' + this.answer[i]);
    }
  }
  Question.prototype.checkAnswer = function(ans,callback){
    if(ans == this.correct){
      console.log('Correct Answer!');
      sc = callback(true);
    }else{
      console.log('Wrong Answer. Try Again:)');
      sc = callback(false);
    }
    this.displayScore(sc);
  }
  Question.prototype.displayScore = function(score){
    console.log('Your current score is: ' + score);
    console.log('----------------------------------');
  }

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                        ['Yes','No'],0);
  var q2 = new Question('What does best describe coding?',
                        ['Boring','Hard','Fun','Tediuos'],2);

  //3. Store them all inside an array
  var questions = [q1,q2];

  function score(){
    var sc = 0;
    return function(correct){
      if(correct){
        sc++;
      }
      return sc ;
    }
  }

  var keepScore = score();
  //2. Create a couple of questions using the constructor
  function nextQuestion(){

    //4. Select one random question and log it on the console. together with the possible answers
    //(each question should have a number)
    var n = Math.floor(Math.random() * questions.length);

    questions[n].disPlayQuestion();

    var ans = prompt('Please select the correct answer.');
    if(ans != 'exit'){
      questions[n].checkAnswer(parseInt(ans),keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
