document.getElementById('mentalHealthForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the list of questions
    const questions = document.getElementsByClassName('question');
  
    // Initialize sum to 0
    let sum = 0;
  
    // Loop through each question and add the value to the sum
    for(let i = 0; i < questions.length; i++) {
      sum += parseInt(questions[i].getElementsByTagName('input')[0].value);
    }
  
    // Calculate the average
    const average = sum / questions.length;
  
    // Get the result element
    const resultElement = document.getElementById('result');
  
    // Display the average and feedback based on the score
    if (average < 4) {
      resultElement.textContent = "Your mental health score is: " + average + ". This is a low score, indicating that you may be struggling with your mental health. Please reach out to a mental health professional. If you're in crisis, contact the Crisis Text Line by texting HOME to 741741.";
    } else if (average < 7) {
      resultElement.textContent = "Your mental health score is: " + average + ". This is a moderate score, indicating that you may have some concerns about your mental health. Consider implementing stress management techniques and regular physical activity into your routine.";
    } else {
      resultElement.textContent = "Your mental health score is: " + average + ". This is a high score, indicating that you are generally managing your mental health well. Continue your current practices to maintain your mental wellbeing.";
    }
  });
  