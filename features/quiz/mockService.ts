import { IQuestion } from '../../models/quiz';

const questions = [
  {
    "questions": {
      "questionId": "24441703-e235-4edf-954d-1212ff16d6a9",
      "questionText": "It's the mid-year fashion sale. Would you...",
      "selectedOption": "",
      "selectedTime": ""
    },
    "listOptions": [
      {
        "optionId": "A",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a9",
        "content": "control your purchase since you've many apparels in your closet that has not been worn out yet?"
      },
      {
        "optionId": "B",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a9",
        "content": "buy interesting pieces you foresee yourself wearing?"
      },
      {
        "optionId": "C",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a9",
        "content": "repurpose old clothes that could look as trendy?"
      }
    ]
  },
  {
    "questions": {
      "questionId": "24441703-e235-4edf-954d-1212ff16d6a3",
      "questionText": "There's a small hole at the bottom of your shirt which you were planning to wear over the weekends.",
      "selectedOption": "",
      "selectedTime": ""
    },
    "listOptions": [
      {
        "optionId": "A",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a3",
        "content": "I don't think it's that big of a deal, it's still wearable!"
      },
      {
        "optionId": "B",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a3",
        "content": "It'll be cool to find a similar shirt at a local thrift store"
      },
      {
        "optionId": "C",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a3",
        "content": "I'll either sew it or bring it to the neighbourhood clothing altering shop"
      }
    ]
  },
  {
    "questions": {
      "questionId": "24441703-e235-4edf-954d-1212ff16d610",
      "questionText": "You're craving for iced coffee at a cafe but they did not provide you with a straw. What would you do?",
      "selectedOption": "",
      "selectedTime": ""
    },
    "listOptions": [
      {
        "optionId": "A",
        "questionId": "24441703-e235-4edf-954d-1212ff16d610",
        "content": "I can't live without straws, let's see if the waiter can provide me with one."
      },
      {
        "optionId": "B",
        "questionId": "24441703-e235-4edf-954d-1212ff16d610",
        "content": "Phew, thankfully I brought my new metal straw out!"
      },
      {
        "optionId": "C",
        "questionId": "24441703-e235-4edf-954d-1212ff16d610",
        "content": "It still tastes good without a straw anyway."
      }
    ]
  },
  {
    "questions": {
      "questionId": "24441703-e235-4edf-954d-1212ff16d6a8",
      "questionText": "The weather has been sweltering hot lately. Upon attending a sustainable living seminar, you're inspired to change some of your lifestyle habits. How would you go about taking your first step?",
      "selectedOption": "",
      "selectedTime": ""
    },
    "listOptions": [
      {
        "optionId": "A",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a8",
        "content": "Start with any suggested habits that are simple and I'm confident to try"
      },
      {
        "optionId": "B",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a8",
        "content": "Browse through kickstarter to find innovative eco-friendly products"
      },
      {
        "optionId": "C",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a8",
        "content": "See if I can repurpose any items and find alternatives for everyday products"
      }
    ]
  },
  {
    "questions": {
      "questionId": "24441703-e235-4edf-954d-1212ff16d612",
      "questionText": "While scrolling through social media, you were intrigued by a post on Keto diets. What would be your response?",
      "selectedOption": "",
      "selectedTime": ""
    },
    "listOptions": [
      {
        "optionId": "A",
        "questionId": "24441703-e235-4edf-954d-1212ff16d612",
        "content": "I think it's difficult to switch my diet entirely but I would try to have more plant-based foods over animal-based ones wherever possible."
      },
      {
        "optionId": "B",
        "questionId": "24441703-e235-4edf-954d-1212ff16d612",
        "content": "I've tried similar diets before and this won't be too difficult!"
      },
      {
        "optionId": "C",
        "questionId": "24441703-e235-4edf-954d-1212ff16d612",
        "content": "I'd love to swap out my meat with plant-based alternatives but it's kinda pricey so I might do it only a few times a week."
      }
    ]
  },
  {
    "questions": {
      "questionId": "24441703-e235-4edf-954d-1212ff16d611",
      "questionText": "While clearing your house, you notice many used Infocomm technology equipment (i.e desktop, laptop, mobile phones, printers) and appliances lying around. What would you do?",
      "selectedOption": "",
      "selectedTime": ""
    },
    "listOptions": [
      {
        "optionId": "A",
        "questionId": "24441703-e235-4edf-954d-1212ff16d611",
        "content": "See if any are in repairable condition else throw them all away in the bin"
      },
      {
        "optionId": "B",
        "questionId": "24441703-e235-4edf-954d-1212ff16d611",
        "content": "Search and drop them off at nearby e-waste recycling points"
      },
      {
        "optionId": "C",
        "questionId": "24441703-e235-4edf-954d-1212ff16d611",
        "content": "Donate them to 2nd hand shops or non-profit organisations"
      }
    ]
  },
  {
    "questions": {
      "questionId": "24441703-e235-4edf-954d-1212ff16d6a6",
      "questionText": "A busy week is ahead of you and you wish to plan your time with a to-do list. What do you do?",
      "selectedOption": "",
      "selectedTime": ""
    },
    "listOptions": [
      {
        "optionId": "A",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a6",
        "content": "Let me see if I can find my used notebook else I'll get a new one"
      },
      {
        "optionId": "B",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a6",
        "content": "It's so convenient to use my go-to planner on my mobile app"
      },
      {
        "optionId": "C",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a6",
        "content": "I'd pen them down on recycled or scrap paper."
      }
    ]
  },
  {
    "questions": {
      "questionId": "24441703-e235-4edf-954d-1212ff16d6a4",
      "questionText": "You've made plans with your best friend at the museum a short distance from your home. How would you get there?",
      "selectedOption": "",
      "selectedTime": ""
    },
    "listOptions": [
      {
        "optionId": "A",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a4",
        "content": "Public transport is always the best!"
      },
      {
        "optionId": "B",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a4",
        "content": "This is a good chance to try the new electric car sharing since I always book a taxi"
      },
      {
        "optionId": "C",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a4",
        "content": "Cycling is a great idea- I get to enjoy the scenery while saving a little."
      }
    ]
  },
  {
    "questions": {
      "questionId": "24441703-e235-4edf-954d-1212ff16d6a5",
      "questionText": "It's grocery shopping day! You're about to leave house, will you bring your own bag?",
      "selectedOption": "",
      "selectedTime": ""
    },
    "listOptions": [
      {
        "optionId": "A",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a5",
        "content": "I would love to but that's if I remember to bring one"
      },
      {
        "optionId": "B",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a5",
        "content": "It won't hurt to use a few plastic bags"
      },
      {
        "optionId": "C",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a5",
        "content": "Definitely, what's more there's a small discount if I bring a reusable bag"
      }
    ]
  },
  {
    "questions": {
      "questionId": "24441703-e235-4edf-954d-1212ff16d6a7",
      "questionText": "The weather has been sweltering hot lately. Would you...",
      "selectedOption": "",
      "selectedTime": ""
    },
    "listOptions": [
      {
        "optionId": "A",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a7",
        "content": "It's not ideal to always turn on the air conditioner, but I'll just turn it on for today"
      },
      {
        "optionId": "B",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a7",
        "content": "Thankfully, I've my new energy-efficient air conditioner which makes me feel less guilty"
      },
      {
        "optionId": "C",
        "questionId": "24441703-e235-4edf-954d-1212ff16d6a7",
        "content": "I'll just increase my fan speed, it's as cooling as the air conditioner anyway"
      }
    ]
  }
]

const mockGetQuestions = (): Promise<IQuestion[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(questions), 1000)
  })
}

export { mockGetQuestions };