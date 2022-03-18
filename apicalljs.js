fetch('https://api.adviceslip.com/advice')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.slip.advice;
        const jokeElement = document.getElementById('somerandomid');

        jokeElement.innerHTML = jokeText;
    })

    // Note: Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice.
    // The manifest version has been changed by Google(Owner) so it has to be 3, not 2, and also in line number 6, browswer_actions should be now just actions.
    // You have as many hours in a day as the people you admire most.