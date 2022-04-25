var myQuestions = [
	{
		question: "Which of the following is NOT a quote from the 1942 film Casablanca? ",
		answers: {
			a: "&quot;Here&#039;s lookin&#039; at you, kid.&quot;",
			b: "&quot;Frankly, my dear, I don't give a damn.&quot;",
			c: "&ldquo;Of all the gin joints, in all the towns, in all the world, she walks into mine&hellip;&rdquo;",
      d: "&quot;Round up the usual suspects.&quot;"
		},
		correctAnswer: 'b'
	},
	{
		question: "This Greek goddess&#039;s name was chosen for the dwarf planet responsible for discord on Pluto&#039;s classification amongst astronomers.",
		answers: {
			a: "Charon",
			b: "Ceres",
			c: "Eris",
      d: "Dysnomia"
		},
		correctAnswer: 'c'
	},
  {
		question: "If he was still alive, in what year would Elvis Presley celebrate his 100th birthday?",
		answers: {
			a: "2030",
			b: "2035",
			c: "2040",
      d: "2045"
		},
		correctAnswer: 'b'
	},
  {
		question: "Which U.S. president took part in the Potsdam Conference, where the Allies reached a peace settlement with Germany?",
		answers: {
			a: "Herbert Hoover",
			b: "Franklin D. Roosevelt",
			c: "Dwight D. Eisenhower",
      d: "Harry S. Truman"
		},
		correctAnswer: 'd'
	},
  {
		question: "The Korean War started in what year?",
		answers: {
			a: "1912",
			b: "1945",
			c: "1950",
      d: "1960"
		},
		correctAnswer: 'c'
	},
  {
		question: "What was Britney Spears&#039; debut single?",
		answers: {
			a: "...Baby One More Time",
			b: "Oops!... I Did It Again",
			c: "(You Drive Me) Crazy",
      d: "Toxic"
		},
		correctAnswer: 'a'
	},
  {
		question: "Who wrote and directed the animated movie &quot;Spirited Away&quot; (2001)?",
		answers: {
			a: "Hidetaka Myiazaki",
			b: "Mamoru Hosoda",
			c: "Isao Takahata",
      d: "Hayao Miyazaki"
		},
		correctAnswer: 'd'
	},
  {
		question: "What is the scientific name of the knee cap?",
		answers: {
			a: "Femur",
			b: "Foramen Magnum",
			c: "Scapula",
      d: "Patella"
		},
		correctAnswer: 'd'
	},
  {
		question: "What is the scientific name of the knee cap?",
		answers: {
			a: "Femur",
			b: "Foramen Magnum",
			c: "Scapula",
      d: "Patella"
		},
		correctAnswer: 'd'
	},
  {
		question: "Which of these is NOT a real tectonic plate?",
		answers: {
			a: "Atlantic Plate",
			b: "North American Plate",
			c: "Eurasian Plate",
      d: "Nazca Plate"
		},
		correctAnswer: 'a'
	},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		var userAnswer = '';
		var numCorrect = 0;
		
		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			if(userAnswer===questions[i].correctAnswer){
				numCorrect++;
				
				answerContainers[i].style.color = 'lightgreen';
			}
			else{
				answerContainers[i].style.color = 'red';
			}
		}

		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	showQuestions(questions, quizContainer);
	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}