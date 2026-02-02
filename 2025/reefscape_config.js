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
      "defaultValue": "",
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
        "Depot": "Close to Depot<br>",
        "Middle": "Middle<br>",
        "Outpost": "Close to Outpost"
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
    { "name": "Passes from Far",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Bump Crosses",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Trench Crosses",
      "code": "aps",
      "type": "counter"
    }
  ],
  "ACTIVATED": [
    { "name": "# Scores",
      "code": "bc1",
      "type": "counter"
    }, 
    { "name": "Passes from Middle",
      "code": "bc2",
      "type": "counter"
    },
    { "name": "Passes from Far",
      "code": "bc3",
      "type": "counter"
    },
    { "name": "Bump Crosses",
      "code": "bc4",
      "type": "counter"
    },
    { "name": "Trench Crosses",
      "code": "bps",
      "type": "counter"
    },
    { "name": "Defended at: BUMP?",
      "code": "actbump",
      "type": "checkbox",
    },
    { "name": "Defended at: TRENCH?",
      "code": "acttrench",
      "type": "checkbox",
    },
    { "name": "Defended at: NEUTRAL ZONE?",
      "code": "actneutral",
      "type": "checkbox",
    },
    { "name": "TAREGETTED by defense?",
      "code": "acttarget",
      "type": "checkbox",
    }
  ],
    "DEACTIVATED": [
    { "name": "Passes from Middle",
      "code": "cc2",
      "type": "counter"
    },
    { "name": "Passes from Far",
      "code": "cc3",
      "type": "counter"
    },
    { "name": "Played defense at: BUMP?",
      "code": "inactbump",
      "type": "checkbox",
    },
    { "name": "Played defense at: TRENCH?",
      "code": "inacttrench",
      "type": "checkbox",
    },
    { "name": "Played defense at: NEUTRAL ZONE?",
      "code": "inactneutral",
      "type": "checkbox",
    },
    { "name": "TAREGETING specfic bot?",
      "code": "inacttarget",
      "type": "checkbox",
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
      "code": "as",
      "type": "radio",
      "choices": {
        "Low": "Low<br>",
        "Average": "Average<br>",
        "High": "High"
    },
    { "name": "Accuracy (1-5)",
      "code": "ds",
      "type": "number",
      "min": 1,
      "max": 5,
      "defaultValue": 1,
      "required": "true"
    },
    { "name": "SCORING LOCATION: Hub?",
      "code": "hub",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "SCORING LOCATION: Tower?",
      "code": "tower",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "SCORING LOCATION: Far Corner?",
      "code": "corner",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "SCORING LOCATION: Other",
      "code": "locother",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "PLAYSTYLE: Cleanup Bot?",
      "code": "clean",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "PLAYSTYLE: Passing Bot?",
      "code": "passing",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "PLAYSTYLE: Full Field Cycler?",
      "code": "fullfield",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "PLAYSTYLE: Other",
      "code": "playother",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "What did they do in auto?",
      "code": "wda",
      "type": "text",
      "size": 25,
      "maxSize": 100,
      "required": "true"
    },
    { "name": "Playstyle",
      "tooltip": "preferred intaking locations, preferred scoring locations, driving paths, etc.",
      "code": "wdt",
      "type": "text",
      "size": 25,
      "maxSize": 100,
      "required": "true"
    },
    { "name": "Reliability",
      "tooltip": "Describe what broke, nothing broke but looked shaky, very solid, etc. PLUS opnions on the effectiveness of their mechanisms.",
      "code": "reli",
      "type": "text",
      "size": 25,
      "maxSize": 100,
      "required": "true"
    },
    { "name": "Drive Quality",
      "tooltip": "Beached? Quality of Defense? Penalties?",
      "code": "driveq",
      "type": "text",
      "size": 25,
      "maxSize": 100,
      "required": "true"
    },
    { "name": "Silly Comments",
      "code": "co",
      "type": "text",
      "size": 30,
      "maxSize": 1000
    }
  ]
}`;
