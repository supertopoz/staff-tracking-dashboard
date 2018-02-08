# Reminder-Tracker-All-Centers
Collect all data from reminder usage and check it against what is needed. 

![image](https://user-images.githubusercontent.com/13721960/35964176-46c784ea-0cfa-11e8-99fa-d932afff9c88.png)

# Purpose
* To provide TA managers and ILA HO insight to the usage for lack of usage of the Reminder App.  
* This tool displays actions that are missing, by calculating actions have been completed vs should have been completed.


# Life cycle

- Reminder documents are created automatically in Moodle when a class first begins. 
- A [ Microservice ](https://github.com/ilavietnam/Constantly-Iterate-All-Reminder-to-collect-changes) files itterator  constantly checks for edits in the users documents and records them for analytics purposes.
- A [Mircoservice ](https://github.com/ilavietnam/Post-reminder-creation-processing) adds meta data to user documents after creation to register the Reminder in Firebase and attach meta data. 
- The Tracking App collects clicks from while the app is in use based on the user and the document title. 
- The data is stored in Firebase for rapid access and in a google sheet as a back up - The Google sheet. 

## Usage and data flow

![image](https://user-images.githubusercontent.com/13721960/35964117-18171066-0cfa-11e8-8691-cb24cda17d43.png)

## Getting Started

- Owner: jason@ilavietnam.edu.vn
- [Master code](https://script.google.com/a/ilamail.edu.vn/d/12aGlZQqpd9UlBmo_Du6Ix8Zl2aOK6EQiZqm0zJAa6ZCMF6FNwov3y6ou/edit?usp=drive_web);
- [User Interface](https://script.google.com/a/ilamail.edu.vn/macros/s/AKfycbzvTUIRjULTcxeFe1jlIOM-_ZSsWWDwmfbeiFITXN6fDV_cRFA/exec)
- Note: A production version of this app is held in the [product site.](https://sites.google.com/a/ilavietnam.edu.vn/products/general/information) 


### Prerequisites

[Add Google appscript Github assistant tool to chrome.](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo?hl=en)


### Installing

1) Fork code. 
2) Install chrome addon. 
3) Sign in using Github account
4) Pull down fork. 
5) Do some work.
6) Push new work back to fork. 
7) Make a pull request when wanting to add to mast branch. 

## Running the tests

Comming soon.

## Deployment

Only mast branch code should be deployed to ILA's internal app store. 
Deployment requires an admin account and to be carried out from root deployment document or appscript. 


## Built With

Javascript 
JQuery

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Jason Allshorn** - *Initial work* - [Supertopoz](https://github.com/Supertopoz)

## License

This app and code strictly belongs to ILA Vietnam - It is not licenced for reuse


