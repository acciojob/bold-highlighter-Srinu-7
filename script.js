function highlight() {
    // Select all <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');
    
    // Iterate through each <strong> element and change its color to green
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

function return_normal() {
    // Select all <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');
    
    // Iterate through each <strong> element and change its color back to black
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}
