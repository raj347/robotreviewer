# RobotReviewer
Automatic extraction of data from clinical trial reports

A simple webserver written in Python which accepts a clinical trial (in plain text/JSON), and returns risk of bias judgements.

## Dependencies

RobotReviewer requires the following libraries:

    sklearn
    numpy
    scipy
    hickle
    nltk

`nltk` and `sklearn` are not used much, and will be removed in time

## Running

`python robot.py` will start a flask server running on Localhost

## Input/output

This will change soon to the input/output by the Vortext PDF viewer, but I've not had time to do this yet!

Send some JSON by POST to /annotate such as:

    {
        "text": "Put the full text of a clinical trial in here"
    }

and it will return something like:

    {  
       'domain':'Random sequence generation',
       'justification':[  
          u'They were randomly assigned,
          in a double-blind manner,
          to receive a bolus and infusion of either eptifibatide or placebo,
          in addition to standard therapy,
          for up to 72 hours (or up to 96 hours,
          if coronary intervention was performed near the end of the 72-hour period).',
          u'Randomization and Treatment\nRandomization was performed,
          in a double-blind manner,
          by coordinating centers in the United States or the Netherlands.',
          u'RESULTS\nPatients\nA total of 10,
          948      patients were randomly assigned to the study groups between November 1995 and January 1997:1487      patients to the low-dose eptifibatide group,
          4722      to the high-dose eptifibatide group,
          and 4739 to the placebo group.'
       ],
       'bias level':'LOW'
    }

All the domains in the Cochrane Risk of Bias tool are possible, but I've just not coded the loop yet. Defaults to Randomization Sequence to start with.
 
