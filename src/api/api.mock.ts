interface SchemaTask {
  description: string,
  value: number,
  checked: boolean
}

interface ApiSchema {
  name: string;
  tasks: Array<SchemaTask>
}

const apiMock: Array<ApiSchema> = [
  {
    "name": "General Info",
    "tasks": [
      {
        'checked': true,
        "description": "Add name and surname",
        "value": 10
      },
      {
        "checked": false,
        "description": "Add email",
        "value": 15
      },
      {
        "checked": false,
        "description": "Add linkedin profile",
        "value": 8
      },
      {
        "checked": true,
        "description": "Provide websites page url",
        "value": 5
      }
    ]
  },
  {
    "name": "Accomplishments",
    "tasks": [
      {
        "checked": false,
        "description": "Wrote a small poem about the birthday",
        "value": 23
      },
      {
        "checked": true,
        "description": "Jump three times with one leg",
        "value": 32
      },
      {
        "checked": false,
        "description": "Avoid the annoying neighbor",
        "value": 2
      },
      {
        "checked": false,
        "description": "Say hello to a random person",
        "value": 21
      },
      {
        "checked": true,
        "description": "Fill the description in at least 3 places",
        "value": 12
      }
    ]
  },
  {
    "name": "Personal retrospective",
    "tasks": [
      {
        "checked": true,
        "description": "Remember a dream",
        "value": 15
      },
      {
        "checked": true,
        "description": "Have a crush",
        "value": 7
      }
    ]
  },
  {
    "name": "Things before leaving",
    "tasks": [
      {
        "checked": false,
        "description": "Say what you feel to all the people you know",
        "value": 42
      },
      {
        "checked": false,
        "description": "Get a pet",
        "value": 23
      },
      {
        "checked": false,
        "description": "Buy a fashion shirt",
        "value": 12
      }
    ]
  }
];

export default apiMock;
