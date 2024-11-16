document.getElementById('analyzeButton').addEventListener('click', function() {
      const review = document.getElementById('reviewInput').value;
      // Placeholder for sentiment analysis logic
      const result = analyzeSentiment(review);
      document.getElementById('result').innerText = result;
    });

    function analyzeSentiment(review) {
      // Placeholder function for sentiment analysis
      // In a real application, this would call the backend model
      return review.includes('good') ? 'Positive Sentiment' : 'Negative Sentiment';
    }
