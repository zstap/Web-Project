// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Crime Awareness!",
        "main":    "<p>Take this short quiz to find out how crime aware you are!</p>",
        "results": "<h5>Thank you.</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "We hope you have learnt more about crime and how to deal with it within the community." // no comma here
    },
    "questions": [
        { // Question 1
            "q": "What are some possible reasons crimes may go unreported?",
            "a": [
                {"option": "People are hesitant to call out of fear they will be identified by the potential criminal.",      "correct": false},
                {"option": "People take for granted that someone else has already contacted the police.",     "correct": false},
                {"option": "People worry about being embarrassed if their suspicions prove to be unfounded",      "correct": false},
                {"option": "All of the above.",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> There are several reasons why crime is often unreported.</p>",
            "incorrect": "<p><span>True</span> But there is more than reasons to why people do not report crimes. <em> Taking action to report is always necessary.</em></p>" // no comma here
        },
        { // Question 2
            "q": "Out of the following choices, which would be considered “suspicious activity”?",
            "a": [
                {"option": "Any vehicles moving slowly and without lights, or following a course that appears aimless or repetitive is suspicious in any location.",    "correct": false},
                {"option": "Parked, occupied vehicles containing one or more persons are especially significant if observed at an unusual hour.",     "correct": false},
                {"option": "Vehicles being loaded with valuables are suspicious if parked in front of closed businesses or untended residences, even if the vehicle is a legitimate looking commercial vehicle.",      "correct": false},
                {"option": "All of the above.",   "correct": true} // no comma here
            ],
            "correct": "<p><span> Correct!</span> Suspicious activity takes place in a number of forms and behaviours. Correct!</p>",
            "incorrect": "<p><span>Oops.</span> Sorry. That is only one choice that can be considered suspicious activity.</p>" // no comma here
        },
        { // Question 3
            "q": "You are going on holiday and your house will be unoccupied for two weeks. What should you NOT do before leaving?",
            "a": [
                {"option": "Give a key to neighbours and ask them to check on the house occasionally.",        "correct": false},
                {"option": "Mow the lawn.",           "correct": false},
                {"option": "Pull the curtains closed.",  "correct": true},
                {"option": "Cancel your daily newspaper delivery.",   "correct": false} // no comma here
            ],
            "correct": "<p><span>True.</span> Closed curtains during daylight hours are a giveaway that a house is unoccupied.</p>",
            "incorrect": "<p><span>No.</span> Closed curtains during daylight hours are a giveaway that a house is unoccupied. The other answers are sensible measures.</p>" // no comma here
        },
        { // Question 4
            "q": "What is the most common way in which burglars gain access to houses?",
            "a": [
                {"option": "They force doors or break windows.",    "correct": true},
                {"option": "They enter through catflaps.",           "correct": false},
                {"option":"They pick the locks on doors.",           "correct": false},
                {"option":"By removing slates on the roof.",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> These are all means of entry. Given the time and opportunity, a burglar can gain access to most houses. Some people, though, make it easy for the criminals. A staggering proportion of burglaries takes place via UNLOCKED doors or windows. Police officers estimate that a quarter of burglaries are via unlocked doors or windows.</p>",
            "incorrect": "<p><span>Well.</span> These are all means of entry. Given the time and opportunity, a burglar can gain access to most houses. Some people, though, make it easy for the criminals. A staggering proportion of burglaries takes place via UNLOCKED doors or windows. Police officers estimate that a quarter of burglaries are via unlocked doors or windows. <em></em></p>" // no comma here
        },
        { // Question 5
            "q": "What characteristics are best to remember and notice, when describing a suspect?",
            "a": [
                {"option": "How tall the suspect was?",   "correct": false},
                {"option": "Did the suspect walk with a limp?", "correct": false},
                {"option": "Did the suspect have a tattoo of a dog on their forearm?", "correct": false},
                {"option": "Was the suspect a male or a female?",  "correct": false},
                {"option": "All of the above.", "correct": true}        // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> It is always best to remember as much as you can about the suspects.</p>" // no comma here
        } // no comma here
    ]
};
