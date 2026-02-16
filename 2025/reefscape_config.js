var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025ONCMP2",
      "required": "true"
    },
    { "name": "Scouter Name",
      "code": "s",
      "type": "scouter",
      "size": 15,
      "maxSize": 30,
      "required": "true"
    },
      { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
        { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
        { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999,
      "required": "true"
    }
  ],
  "auton": [
    { "name": "Auto Start Position",
      "code": "as",
      "type": "radio",
      "choices": {
        "Processor": "Close to Depot<br>",
        "Middle": "Middle<br>",
        "Far": "Close to Outpost"
      },
      "defaultValue": "Middle",
      "required": "true"
    },
    { "name": "# Scores",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Passes from Middle",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Bump Crosses",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Trench Crosses",
      "code": "ac4",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "ACTIVE scores",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "ACTIVE passes from middle",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "ACTIVE passes from far",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "ACTIVE bump crosses",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "ACTIVE trench crosses",
      "code": "tc5",
      "type": "counter"
    },
    { "name": "INACTIVE passes from middle",
      "code": "tc6",
      "type": "counter"
    },
    { "name": "INACTIVE passes from far",
      "code": "tc7",
      "type": "counter"
    }
    { "name": "INACTIVE bump crosses",
      "code": "tc8",
      "type": "counter"
    },
    { "name": "INACTIVE trench crosses",
      "code": "tc9",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Vibes Power Index",
      "code": "vpi",
      "type": "number",
      "min": 1,
      "max": 100,
      "defaultValue": 50,
      "required": "true"
    },
    { "name": "Intake Quality",
      "code": "is",
      "type": "radio",
      "choices": {
        "Low": "Low<br>",
        "Average": "Average<br>",
        "High": "High"
    },
    { "name": "Accuracy",
      "code": "acy",
      "type": "number",
      "min": 1,
      "max": 5,
      "defaultValue": 1,
      "required": "true"
    },
    { "name": "SCORING LOCATION Tower?",
      "code": "tow",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "SCORING LOCATION Far Corner?",
      "code": "cor",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "SCORING LOCATION Other?",
      "code": "oth",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "PLAYSTYLE Cleanup Bot?",
      "code": "clean",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "PLAYSTYLE Passing Bot?",
      "code": "passing",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "PLAYSTYLE Full Field Cycler?",
      "code": "fullfield",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "What did they do in auto?",
      "code": "wdi",
      "type": "text",
      "size": 25,
      "maxSize": 100,
      "required": "true"
    },
    { "name": "Teleop Playstyle",
      "tooltip": "preferred intaking locations, preferred scoring locations, driving paths, etc.",
      "code": "wdt",
      "type": "text",
      "size": 25,
      "maxSize": 100,
      "required": "true"
    },
    { "name": "Reliability",
      "tooltip": "Describe what broke, nothing broke but looked shaky, very solid, etc.",
      "code": "rel",
      "type": "text",
      "size": 25,
      "maxSize": 100,
      "required": "true"
    },
    { "name": "Drive Quality",
      "tooltip": "Beached? Quality of Defense? Penalties?",
      "code": "drq",
      "type": "text",
      "size": 25,
      "maxSize": 100,
      "required": "true"
    },
    { "name": "Silly Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 100
    }
  ]
}`;