var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "ONCMP1",
      "required": "true"
    },
    { "name": "Scouter Name",
      "code": "s",
      "type": "scouter",
      "size": 15,
      "maxSize": 30,
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999,
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
    }
  ],
  "auton": [
    { "name": "Auto Start Position",
      "code": "as",
      "type": "radio",
      "choices": {
        "Processor": "Close to Processor<br>",
        "Middle": "Middle<br>",
        "Far": "Far from Processor"
      },
      "defaultValue": "m",
      "required": "true"
    },
    { "name": "Coral L1",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Processor Score",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Net Score",
      "code": "ans",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Coral L1",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "Processor Score",
      "code": "tps",
      "type": "counter"
    },
    { "name": "Net Score",
      "code": "tns",
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
    { "name": "Driver Skill",
      "code": "ds",
      "type": "number",
      "min": 1,
      "max": 10,
      "defaultValue": 5,
      "required": "true"
    },
    { "name": "Minor Breakdowns",
      "code": "mb",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "Major Breakdowns",
      "code": "mjb",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "Played Defense",
      "code": "pd",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "Was defended",
      "code": "wd",
      "type": "checkbox",
      "required": "true"
    },
    { "name": "Quality of Defense/Quality Against Defense",
      "code": "qdqad",
      "type": "text",
      "size": 25,
      "maxSize": 100
    },
    { "name": "What did they do in auto?",
      "code": "wda",
      "type": "text",
      "size": 25,
      "maxSize": 100,
      "required": "true"
    },
    { "name": "Teleop Playstyle",
      "tooltip": "preferred intaking locations, preferred scoring locations, driving paths, etc.",
      "code": "wda",
      "type": "text",
      "size": 25,
      "maxSize": 100,
      "required": "true"
    },
    { "name": "Reliability",
      "tooltip": "Describe what broke, nothing broke but looked shaky, very solid, etc.",
      "code": "reli",
      "type": "text",
      "size": 25,
      "maxSize": 100,
      "required": "true"
    },
    { "name": "Other Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 100
    }
  ]
}`;
