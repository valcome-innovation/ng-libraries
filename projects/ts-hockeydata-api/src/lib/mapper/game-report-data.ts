import { JsUtils } from '@valcome/ts-core';

export const getGameReportData = () => {
  return JsUtils.immute(gameReportData);
};

const gameReportData = {
  statusId: 1,
  statusMsg: 'Ok',
  data: {
    gameData: {
      id: '9d2fd55b-985d-470d-94f5-449a73a9e147',
      divisionId: 7818,
      divisionLongname: 'Phase 2',
      divisionShortname: null,
      scheduledDate: {
        formattedShort: '16.01.21',
        formattedLong: '16. January 2021',
        timestamp: 1610825400000,
        value: '2021-01-16',
        diffToNow: -3114743.0298872
      },
      scheduledTime: '20:30',
      startTime: '20:29',
      endTime: '22:34',
      isOvertime: 0,
      isShootOut: 0,
      homeTeamId: 3326,
      homeTeamLongname: 'HC Gherdeina valgardena.it',
      homeTeamShortname: 'GHE',
      homeTeamFlavourname: '',
      homeTeamScore: 1,
      awayTeamId: 3328,
      awayTeamLongname: 'HDD SIJ Acroni Jesenice',
      awayTeamShortname: 'JES',
      awayTeamFlavourname: '',
      awayTeamScore: 6,
      gameStatus: 4,
      gameExtendedStatus: 0,
      gameExtendedStatusInfoText: '',
      gameName: '182',
      gameDay: 40,
      gameRound: 23,
      location: {
        longname: 'Pranives Wolkenstein',
        shortname: 'Wolkenstein',
        coordinates: {
          lat: 48.208174,
          lng: 16.373819
        }
      },
      attendance: 0,
      liveTime: 3600,
      liveTimeFormatted: '60:00',
      liveTimePeriod: '3',
      periodStats: [
        {
          period: '1',
          startTime: '',
          endTime: '',
          homeScore: 0,
          awayScore: 1,
          homeShotsOnGoal: 4,
          awayShotsOnGoal: 19
        },
        {
          period: '2',
          startTime: '',
          endTime: '',
          homeScore: 1,
          awayScore: 2,
          homeShotsOnGoal: 20,
          awayShotsOnGoal: 12
        },
        {
          period: '3',
          startTime: '',
          endTime: '',
          homeScore: 0,
          awayScore: 3,
          homeShotsOnGoal: 8,
          awayShotsOnGoal: 14
        },
        {
          period: 'OT',
          startTime: '',
          endTime: '',
          homeScore: 0,
          awayScore: 0,
          homeShotsOnGoal: 0,
          awayShotsOnGoal: 0
        }
      ],
      gameOfficials: {
        ref1: {
          lastname: 'EGGER',
          firstname: 'Thomas'
        },
        ref2: {
          lastname: 'LAZZERI',
          firstname: 'Alex'
        },
        linesman1: {
          lastname: 'DE ZORDO',
          firstname: 'Mauro'
        },
        linesman2: {
          lastname: 'MANTOVANI',
          firstname: 'DAVIDE'
        }
      },
      teamOfficials: {
        headcoachhome: {
          lastname: 'MATIKAINEN',
          firstname: 'Santeri'
        },
        headcoachaway: {
          lastname: 'SIVIC',
          firstname: 'Mitja'
        }
      },
      liveTimePeriodBar: null,
      youTubeLink: null,
      numberOfPeriods: 3,
      lengthOfPeriod: 1200,
      numberOfOvertimes: 1,
      lengthOfOvertime: 300,
      shootoutShots: 3,
      images: {
        homeTeamLogo: 'https://api.hockeydata.net//img/icehockey/ebel/team-logos/3326.png',
        awayTeamLogo: 'https://api.hockeydata.net//img/icehockey/ebel/team-logos/3328.png'
      },
      streams: [
        '{"targetUrl":"https://www.alps.hockey/videos-en/highlights","target":"_blank","label":"HIGHLIGHTS","imgUrl":"","style":"","html":""}'
      ]
    },
    homeGoals: [
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-1:1',
        gameTime: 1581,
        gameTimeFormatted: '26:21',
        gameTimePeriod: '2',
        scoredBy: {
          id: 40251,
          playerLastname: 'Sullmann Pilser',
          playerFirstname: 'Michael Peter',
          playerJerseyNr: 7
        },
        assistBy: {
          id: 77981,
          playerLastname: 'Wilkins',
          playerFirstname: 'Mathew Mark',
          playerJerseyNr: 91
        },
        assist2By: {
          id: 77977,
          playerLastname: 'McGowan',
          playerFirstname: 'Bradley Jamey',
          playerJerseyNr: 77
        },
        newScore: '1:1',
        goalNr: 1,
        gameStrength: 'EQ',
        isEmptyNet: false,
        isPenaltyShot: false,
        isAwardedGoal: false,
        isGameWinningGoal: false,
        isGameTieingGoal: false,
        homePlayersOnIce: [
          {
            id: 40251,
            playerLastname: 'Sullmann Pilser',
            playerFirstname: 'Michael Peter',
            playerJerseyNr: 7
          },
          {
            id: 77981,
            playerLastname: 'Wilkins',
            playerFirstname: 'Mathew Mark',
            playerJerseyNr: 91
          },
          {
            id: 77977,
            playerLastname: 'McGowan',
            playerFirstname: 'Bradley Jamey',
            playerJerseyNr: 77
          },
          {
            id: 15673,
            playerLastname: 'Nedved',
            playerFirstname: 'Ondrej',
            playerJerseyNr: 27
          },
          {
            id: 55927,
            playerLastname: 'Senoner',
            playerFirstname: 'Julian',
            playerJerseyNr: 29
          },
          {
            id: 15345,
            playerLastname: 'Smith',
            playerFirstname: 'Jacob Wesley',
            playerJerseyNr: 1
          }
        ],
        awayPlayersOnIce: [
          {
            id: 1648,
            playerLastname: 'Sirovnik',
            playerFirstname: 'Nik',
            playerJerseyNr: 6
          },
          {
            id: 11126,
            playerLastname: 'Urukalo',
            playerFirstname: 'Ziga',
            playerJerseyNr: 8
          },
          {
            id: 1593,
            playerLastname: 'Sodja',
            playerFirstname: 'Jaka',
            playerJerseyNr: 23
          },
          {
            id: 2170,
            playerLastname: 'Tomazevic',
            playerFirstname: 'Blaz',
            playerJerseyNr: 98
          },
          {
            id: 26022,
            playerLastname: 'Masic',
            playerFirstname: 'Bine',
            playerJerseyNr: 14
          },
          {
            id: 3074,
            playerLastname: 'Us',
            playerFirstname: 'Zan',
            playerJerseyNr: 33
          }
        ],
        youTubeLink: null
      }
    ],
    homePenalties: [
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-H-1',
        gameTime: 959,
        gameTimeFormatted: '15:59',
        gameTimePeriod: '1',
        startTime: 959,
        startTimeFormatted: '15:59',
        startTimePeriod: '1',
        endTime: 1079,
        endTimeFormatted: '17:59',
        endTimePeriod: '1',
        offender: {
          id: 77981,
          playerLastname: 'Wilkins',
          playerFirstname: 'Mathew Mark',
          playerJerseyNr: 91
        },
        servedBy: null,
        offence: 'CROSS',
        offenceReason: null,
        penaltyLength: 120
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-H-2',
        gameTime: 2273,
        gameTimeFormatted: '37:53',
        gameTimePeriod: '2',
        startTime: 2273,
        startTimeFormatted: '37:53',
        startTimePeriod: '2',
        endTime: 2393,
        endTimeFormatted: '39:53',
        endTimePeriod: '2',
        offender: {
          id: 35878,
          playerLastname: 'Linder',
          playerFirstname: 'Tim',
          playerJerseyNr: 5
        },
        servedBy: null,
        offence: 'SLASH',
        offenceReason: null,
        penaltyLength: 120
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-H-3',
        gameTime: 2844,
        gameTimeFormatted: '47:24',
        gameTimePeriod: '3',
        startTime: 2844,
        startTimeFormatted: '47:24',
        startTimePeriod: '3',
        endTime: 2964,
        endTimeFormatted: '49:24',
        endTimePeriod: '3',
        offender: {
          id: 79561,
          playerLastname: 'Harrison',
          playerFirstname: 'Ryan LEslie',
          playerJerseyNr: 50
        },
        servedBy: null,
        offence: 'ROUGH',
        offenceReason: null,
        penaltyLength: 120
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-H-4',
        gameTime: 3041,
        gameTimeFormatted: '50:41',
        gameTimePeriod: '3',
        startTime: 3041,
        startTimeFormatted: '50:41',
        startTimePeriod: '3',
        endTime: 3064,
        endTimeFormatted: '51:04',
        endTimePeriod: '3',
        offender: {
          id: 40251,
          playerLastname: 'Sullmann Pilser',
          playerFirstname: 'Michael Peter',
          playerJerseyNr: 7
        },
        servedBy: null,
        offence: 'ROUGH',
        offenceReason: null,
        penaltyLength: 120
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-H-5',
        gameTime: 3318,
        gameTimeFormatted: '55:18',
        gameTimePeriod: '3',
        startTime: 3318,
        startTimeFormatted: '55:18',
        startTimePeriod: '3',
        endTime: 3438,
        endTimeFormatted: '57:18',
        endTimePeriod: '3',
        offender: {
          id: 77981,
          playerLastname: 'Wilkins',
          playerFirstname: 'Mathew Mark',
          playerJerseyNr: 91
        },
        servedBy: null,
        offence: 'TRIP',
        offenceReason: null,
        penaltyLength: 120
      }
    ],
    homeFieldPlayers: [
      {
        id: 35878,
        playerLastname: 'Linder',
        playerFirstname: 'Tim',
        playerJerseyNr: '5',
        playerBirthdate: {
          formattedShort: '22.07.01',
          formattedLong: '22. July 2001',
          timestamp: 995752800000,
          value: '2001-07-22',
          diffToNow: -618183743.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 2,
        plusMinus: -2,
        points: 0,
        position: 'RD',
        lineupLine: 3,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 40251,
        playerLastname: 'Sullmann Pilser',
        playerFirstname: 'Michael Peter',
        playerJerseyNr: '7',
        playerBirthdate: {
          formattedShort: '23.04.93',
          formattedLong: '23. April 1993',
          timestamp: 735516000000,
          value: '1993-04-23',
          diffToNow: -878420543.09241688
        },
        assists: 0,
        goals: 1,
        penaltyMinutes: 2,
        plusMinus: 0,
        points: 1,
        position: 'LF',
        lineupLine: 1,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 2,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 66535,
        playerLastname: 'Tomasini',
        playerFirstname: 'Patrick',
        playerJerseyNr: '9',
        playerBirthdate: {
          formattedShort: '14.08.00',
          formattedLong: '14. August 2000',
          timestamp: 966204000000,
          value: '2000-08-14',
          diffToNow: -647732543.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: -3,
        points: 0,
        position: 'C',
        lineupLine: 3,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 11117,
        playerLastname: 'Glück',
        playerFirstname: 'Diego',
        playerJerseyNr: '13',
        playerBirthdate: {
          formattedShort: '29.08.99',
          formattedLong: '29. August 1999',
          timestamp: 935877600000,
          value: '1999-08-29',
          diffToNow: -678058943.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'C',
        lineupLine: 2,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 77982,
        playerLastname: 'Willeit',
        playerFirstname: 'Christian',
        playerJerseyNr: '14',
        playerBirthdate: {
          formattedShort: '22.02.93',
          formattedLong: '22. February 1993',
          timestamp: 730335600000,
          value: '1993-02-22',
          diffToNow: -883604543.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: -2,
        points: 0,
        position: 'LD',
        lineupLine: 1,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 840,
        playerLastname: 'Galassiti',
        playerFirstname: 'David',
        playerJerseyNr: '16',
        playerBirthdate: {
          formattedShort: '16.02.99',
          formattedLong: '16. February 1999',
          timestamp: 919119600000,
          value: '1999-02-16',
          diffToNow: -694820543.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: -2,
        points: 0,
        position: 'RF',
        lineupLine: 3,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 66512,
        playerLastname: 'Paratoni',
        playerFirstname: 'Nikolas',
        playerJerseyNr: '18',
        playerBirthdate: {
          formattedShort: '11.04.02',
          formattedLong: '11. April 2002',
          timestamp: 1018476000000,
          value: '2002-04-11',
          diffToNow: -595460543.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'LF',
        lineupLine: 4,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 15673,
        playerLastname: 'Nedved',
        playerFirstname: 'Ondrej',
        playerJerseyNr: '27',
        playerBirthdate: {
          formattedShort: '27.07.92',
          formattedLong: '27. July 1992',
          timestamp: 712188000000,
          value: '1992-07-27',
          diffToNow: -901748543.09241676
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: -3,
        points: 0,
        position: 'LD',
        lineupLine: 2,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'CZE',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 55927,
        playerLastname: 'Senoner',
        playerFirstname: 'Julian',
        playerJerseyNr: '29',
        playerBirthdate: {
          formattedShort: '04.09.02',
          formattedLong: '04. September 2002',
          timestamp: 1031090400000,
          value: '2002-09-04',
          diffToNow: -582846143.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'RD',
        lineupLine: 2,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 15669,
        playerLastname: 'Costa',
        playerFirstname: 'Daniel',
        playerJerseyNr: '47',
        playerBirthdate: {
          formattedShort: '15.05.95',
          formattedLong: '15. May 1995',
          timestamp: 800488800000,
          value: '1995-05-15',
          diffToNow: -813447743.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'RD',
        lineupLine: 1,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 79561,
        playerLastname: 'Harrison',
        playerFirstname: 'Ryan LEslie',
        playerJerseyNr: '50',
        playerBirthdate: {
          formattedShort: '31.03.92',
          formattedLong: '31. March 1992',
          timestamp: 701992800000,
          value: '1992-03-31',
          diffToNow: -911943743.09241676
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 2,
        plusMinus: 0,
        points: 0,
        position: 'RF',
        lineupLine: 2,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'GBR',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 40249,
        playerLastname: 'Moroder',
        playerFirstname: 'Tobias',
        playerJerseyNr: '67',
        playerBirthdate: {
          formattedShort: '05.04.02',
          formattedLong: '05. April 2002',
          timestamp: 1017957600000,
          value: '2002-04-05',
          diffToNow: -595978943.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'RF',
        lineupLine: 4,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 15664,
        playerLastname: 'Moroder',
        playerFirstname: 'Samuel',
        playerJerseyNr: '71',
        playerBirthdate: {
          formattedShort: '28.03.97',
          formattedLong: '28. March 1997',
          timestamp: 859503600000,
          value: '1997-03-28',
          diffToNow: -754436543.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: -1,
        points: 0,
        position: 'C',
        lineupLine: 4,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 77980,
        playerLastname: 'Sölva',
        playerFirstname: 'Michael',
        playerJerseyNr: '72',
        playerBirthdate: {
          formattedShort: '15.10.00',
          formattedLong: '15. October 2000',
          timestamp: 971560800000,
          value: '2000-10-15',
          diffToNow: -642375743.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: -1,
        points: 0,
        position: 'LD',
        lineupLine: 3,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 77977,
        playerLastname: 'McGowan',
        playerFirstname: 'Bradley Jamey',
        playerJerseyNr: '77',
        playerBirthdate: {
          formattedShort: '09.04.90',
          formattedLong: '09. April 1990',
          timestamp: 639612000000,
          value: '1990-04-09',
          diffToNow: -974324543.09241676
        },
        assists: 1,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: -1,
        points: 1,
        position: 'C',
        lineupLine: 1,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'CAN',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 55926,
        playerLastname: 'Messner',
        playerFirstname: 'Leo',
        playerJerseyNr: '86',
        playerBirthdate: {
          formattedShort: '22.01.03',
          formattedLong: '22. January 2003',
          timestamp: 1043190000000,
          value: '2003-01-22',
          diffToNow: -570750143.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'LF',
        lineupLine: 2,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 77979,
        playerLastname: 'Sölva',
        playerFirstname: 'Maximilian',
        playerJerseyNr: '88',
        playerBirthdate: {
          formattedShort: '24.05.02',
          formattedLong: '24. May 2002',
          timestamp: 1022191200000,
          value: '2002-05-24',
          diffToNow: -591745343.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: -2,
        points: 0,
        position: 'LF',
        lineupLine: 3,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 77981,
        playerLastname: 'Wilkins',
        playerFirstname: 'Mathew Mark',
        playerJerseyNr: '91',
        playerBirthdate: {
          formattedShort: '26.01.91',
          formattedLong: '26. January 1991',
          timestamp: 664844400000,
          value: '1991-01-26',
          diffToNow: -949095743.09241676
        },
        assists: 1,
        goals: 0,
        penaltyMinutes: 4,
        plusMinus: -2,
        points: 1,
        position: 'RF',
        lineupLine: 1,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'CAN',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      }
    ],
    homeGoalKeepers: [
      {
        id: 15345,
        playerLastname: 'Smith',
        playerFirstname: 'Jacob Wesley',
        playerJerseyNr: '1',
        playerBirthdate: {
          formattedShort: '01.05.95',
          formattedLong: '01. May 1995',
          timestamp: 799279200000,
          value: '1995-05-01',
          diffToNow: -814657343.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'G',
        goalsAgainstAverage: '6.00',
        playingTime: 3600,
        goalsAgainst: 6,
        shotsAgainst: 45,
        savePercentage: '86.7',
        saves: 39,
        isStartingPlayer: 1,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 26769,
        playerLastname: 'Kostner',
        playerFirstname: 'Leo',
        playerJerseyNr: '31',
        playerBirthdate: {
          formattedShort: '04.11.99',
          formattedLong: '04. November 1999',
          timestamp: 941670000000,
          value: '1999-11-04',
          diffToNow: -672270143.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'G',
        goalsAgainstAverage: '0.00',
        playingTime: 0,
        goalsAgainst: 0,
        shotsAgainst: 0,
        savePercentage: '0',
        saves: 0,
        isStartingPlayer: null,
        nation: 'ITA',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      }
    ],
    homeTeamStats: {
      faceoffsWon: 0,
      faceoffsTotal: 0,
      shotsOnGoal: 32,
      shotsBlocked: 0,
      penaltyMinutes: 10,
      powerplayGoals: 0,
      powerplayOpportunities: 3,
      penaltykillSuccesses: 3,
      penaltykillSituations: 4,
      timeValues: {
        leading: 0,
        tied: 1227,
        trailing: 2373,
        timeGameStrengthEven: null,
        timeGameStrengthPlusOne: null,
        timeGameStrengthPlusTwo: null,
        timeGameStrengthMinusOne: null,
        timeGameStrengthMinusTwo: null,
        timeOnPowerplay: null,
        timeWhileShorthanded: null
      }
    },
    awayGoals: [
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-0:1',
        gameTime: 621,
        gameTimeFormatted: '10:21',
        gameTimePeriod: '1',
        scoredBy: {
          id: 3198,
          playerLastname: 'Jezovsek',
          playerFirstname: 'Zan',
          playerJerseyNr: 91
        },
        assistBy: {
          id: 2170,
          playerLastname: 'Tomazevic',
          playerFirstname: 'Blaz',
          playerJerseyNr: 98
        },
        assist2By: {
          id: 1593,
          playerLastname: 'Sodja',
          playerFirstname: 'Jaka',
          playerJerseyNr: 23
        },
        newScore: '0:1',
        goalNr: 1,
        gameStrength: 'EQ',
        isEmptyNet: false,
        isPenaltyShot: false,
        isAwardedGoal: false,
        isGameWinningGoal: false,
        isGameTieingGoal: false,
        homePlayersOnIce: [
          {
            id: 840,
            playerLastname: 'Galassiti',
            playerFirstname: 'David',
            playerJerseyNr: 16
          },
          {
            id: 15664,
            playerLastname: 'Moroder',
            playerFirstname: 'Samuel',
            playerJerseyNr: 71
          },
          {
            id: 66535,
            playerLastname: 'Tomasini',
            playerFirstname: 'Patrick',
            playerJerseyNr: 9
          },
          {
            id: 35878,
            playerLastname: 'Linder',
            playerFirstname: 'Tim',
            playerJerseyNr: 5
          },
          {
            id: 77980,
            playerLastname: 'Sölva',
            playerFirstname: 'Michael',
            playerJerseyNr: 72
          },
          {
            id: 15345,
            playerLastname: 'Smith',
            playerFirstname: 'Jacob Wesley',
            playerJerseyNr: 1
          }
        ],
        awayPlayersOnIce: [
          {
            id: 3198,
            playerLastname: 'Jezovsek',
            playerFirstname: 'Zan',
            playerJerseyNr: 91
          },
          {
            id: 2170,
            playerLastname: 'Tomazevic',
            playerFirstname: 'Blaz',
            playerJerseyNr: 98
          },
          {
            id: 11126,
            playerLastname: 'Urukalo',
            playerFirstname: 'Ziga',
            playerJerseyNr: 8
          },
          {
            id: 3137,
            playerLastname: 'Scap',
            playerFirstname: 'Luka',
            playerJerseyNr: 17
          },
          {
            id: 1593,
            playerLastname: 'Sodja',
            playerFirstname: 'Jaka',
            playerJerseyNr: 23
          },
          {
            id: 3074,
            playerLastname: 'Us',
            playerFirstname: 'Zan',
            playerJerseyNr: 33
          }
        ],
        youTubeLink: null
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-1:2',
        gameTime: 2187,
        gameTimeFormatted: '36:27',
        gameTimePeriod: '2',
        scoredBy: {
          id: 3091,
          playerLastname: 'Rajsar',
          playerFirstname: 'Saso',
          playerJerseyNr: 81
        },
        assistBy: {
          id: 2710,
          playerLastname: 'Hebar',
          playerFirstname: 'Andrej',
          playerJerseyNr: 84
        },
        assist2By: {
          id: 11126,
          playerLastname: 'Urukalo',
          playerFirstname: 'Ziga',
          playerJerseyNr: 8
        },
        newScore: '1:2',
        goalNr: 2,
        gameStrength: 'EQ',
        isEmptyNet: false,
        isPenaltyShot: false,
        isAwardedGoal: false,
        isGameWinningGoal: true,
        isGameTieingGoal: false,
        homePlayersOnIce: [
          {
            id: 77979,
            playerLastname: 'Sölva',
            playerFirstname: 'Maximilian',
            playerJerseyNr: 88
          },
          {
            id: 77981,
            playerLastname: 'Wilkins',
            playerFirstname: 'Mathew Mark',
            playerJerseyNr: 91
          },
          {
            id: 15673,
            playerLastname: 'Nedved',
            playerFirstname: 'Ondrej',
            playerJerseyNr: 27
          },
          {
            id: 55927,
            playerLastname: 'Senoner',
            playerFirstname: 'Julian',
            playerJerseyNr: 29
          },
          {
            id: 77977,
            playerLastname: 'McGowan',
            playerFirstname: 'Bradley Jamey',
            playerJerseyNr: 77
          },
          {
            id: 15345,
            playerLastname: 'Smith',
            playerFirstname: 'Jacob Wesley',
            playerJerseyNr: 1
          }
        ],
        awayPlayersOnIce: [
          {
            id: 3091,
            playerLastname: 'Rajsar',
            playerFirstname: 'Saso',
            playerJerseyNr: 81
          },
          {
            id: 2710,
            playerLastname: 'Hebar',
            playerFirstname: 'Andrej',
            playerJerseyNr: 84
          },
          {
            id: 11126,
            playerLastname: 'Urukalo',
            playerFirstname: 'Ziga',
            playerJerseyNr: 8
          },
          {
            id: 3137,
            playerLastname: 'Scap',
            playerFirstname: 'Luka',
            playerJerseyNr: 17
          },
          {
            id: 77941,
            playerLastname: 'Sturm',
            playerFirstname: 'Jaka',
            playerJerseyNr: 24
          },
          {
            id: 3074,
            playerLastname: 'Us',
            playerFirstname: 'Zan',
            playerJerseyNr: 33
          }
        ],
        youTubeLink: null
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-1:3',
        gameTime: 2393,
        gameTimeFormatted: '39:53',
        gameTimePeriod: '2',
        scoredBy: {
          id: 77942,
          playerLastname: 'Svetina',
          playerFirstname: 'Erik',
          playerJerseyNr: 22
        },
        assistBy: {
          id: 1593,
          playerLastname: 'Sodja',
          playerFirstname: 'Jaka',
          playerJerseyNr: 23
        },
        assist2By: {
          id: 1597,
          playerLastname: 'Crnovic',
          playerFirstname: 'Aljosa',
          playerJerseyNr: 13
        },
        newScore: '1:3',
        goalNr: 3,
        gameStrength: 'EQ',
        isEmptyNet: false,
        isPenaltyShot: false,
        isAwardedGoal: false,
        isGameWinningGoal: false,
        isGameTieingGoal: false,
        homePlayersOnIce: [
          {
            id: 77981,
            playerLastname: 'Wilkins',
            playerFirstname: 'Mathew Mark',
            playerJerseyNr: 91
          },
          {
            id: 15673,
            playerLastname: 'Nedved',
            playerFirstname: 'Ondrej',
            playerJerseyNr: 27
          },
          {
            id: 66535,
            playerLastname: 'Tomasini',
            playerFirstname: 'Patrick',
            playerJerseyNr: 9
          },
          {
            id: 77982,
            playerLastname: 'Willeit',
            playerFirstname: 'Christian',
            playerJerseyNr: 14
          },
          {
            id: 35878,
            playerLastname: 'Linder',
            playerFirstname: 'Tim',
            playerJerseyNr: 5
          },
          {
            id: 15345,
            playerLastname: 'Smith',
            playerFirstname: 'Jacob Wesley',
            playerJerseyNr: 1
          }
        ],
        awayPlayersOnIce: [
          {
            id: 77942,
            playerLastname: 'Svetina',
            playerFirstname: 'Erik',
            playerJerseyNr: 22
          },
          {
            id: 1597,
            playerLastname: 'Crnovic',
            playerFirstname: 'Aljosa',
            playerJerseyNr: 13
          },
          {
            id: 2710,
            playerLastname: 'Hebar',
            playerFirstname: 'Andrej',
            playerJerseyNr: 84
          },
          {
            id: 1593,
            playerLastname: 'Sodja',
            playerFirstname: 'Jaka',
            playerJerseyNr: 23
          },
          {
            id: 15154,
            playerLastname: 'Stojan',
            playerFirstname: 'Nejc',
            playerJerseyNr: 46
          },
          {
            id: 3074,
            playerLastname: 'Us',
            playerFirstname: 'Zan',
            playerJerseyNr: 33
          }
        ],
        youTubeLink: null
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-1:4',
        gameTime: 2783,
        gameTimeFormatted: '46:23',
        gameTimePeriod: '3',
        scoredBy: {
          id: 3198,
          playerLastname: 'Jezovsek',
          playerFirstname: 'Zan',
          playerJerseyNr: 91
        },
        assistBy: {
          id: 2170,
          playerLastname: 'Tomazevic',
          playerFirstname: 'Blaz',
          playerJerseyNr: 98
        },
        assist2By: null,
        newScore: '1:4',
        goalNr: 4,
        gameStrength: 'EQ',
        isEmptyNet: false,
        isPenaltyShot: false,
        isAwardedGoal: false,
        isGameWinningGoal: false,
        isGameTieingGoal: false,
        homePlayersOnIce: [
          {
            id: 840,
            playerLastname: 'Galassiti',
            playerFirstname: 'David',
            playerJerseyNr: 16
          },
          {
            id: 77982,
            playerLastname: 'Willeit',
            playerFirstname: 'Christian',
            playerJerseyNr: 14
          },
          {
            id: 15673,
            playerLastname: 'Nedved',
            playerFirstname: 'Ondrej',
            playerJerseyNr: 27
          },
          {
            id: 77979,
            playerLastname: 'Sölva',
            playerFirstname: 'Maximilian',
            playerJerseyNr: 88
          },
          {
            id: 66535,
            playerLastname: 'Tomasini',
            playerFirstname: 'Patrick',
            playerJerseyNr: 9
          },
          {
            id: 15345,
            playerLastname: 'Smith',
            playerFirstname: 'Jacob Wesley',
            playerJerseyNr: 1
          }
        ],
        awayPlayersOnIce: [
          {
            id: 3198,
            playerLastname: 'Jezovsek',
            playerFirstname: 'Zan',
            playerJerseyNr: 91
          },
          {
            id: 2170,
            playerLastname: 'Tomazevic',
            playerFirstname: 'Blaz',
            playerJerseyNr: 98
          },
          {
            id: 11126,
            playerLastname: 'Urukalo',
            playerFirstname: 'Ziga',
            playerJerseyNr: 8
          },
          {
            id: 3137,
            playerLastname: 'Scap',
            playerFirstname: 'Luka',
            playerJerseyNr: 17
          },
          {
            id: 1593,
            playerLastname: 'Sodja',
            playerFirstname: 'Jaka',
            playerJerseyNr: 23
          },
          {
            id: 3074,
            playerLastname: 'Us',
            playerFirstname: 'Zan',
            playerJerseyNr: 33
          }
        ],
        youTubeLink: null
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-1:5',
        gameTime: 2912,
        gameTimeFormatted: '48:32',
        gameTimePeriod: '3',
        scoredBy: {
          id: 3198,
          playerLastname: 'Jezovsek',
          playerFirstname: 'Zan',
          playerJerseyNr: 91
        },
        assistBy: {
          id: 2170,
          playerLastname: 'Tomazevic',
          playerFirstname: 'Blaz',
          playerJerseyNr: 98
        },
        assist2By: {
          id: 3137,
          playerLastname: 'Scap',
          playerFirstname: 'Luka',
          playerJerseyNr: 17
        },
        newScore: '1:5',
        goalNr: 5,
        gameStrength: 'EQ',
        isEmptyNet: false,
        isPenaltyShot: false,
        isAwardedGoal: false,
        isGameWinningGoal: false,
        isGameTieingGoal: false,
        homePlayersOnIce: [
          {
            id: 40251,
            playerLastname: 'Sullmann Pilser',
            playerFirstname: 'Michael Peter',
            playerJerseyNr: 7
          },
          {
            id: 77981,
            playerLastname: 'Wilkins',
            playerFirstname: 'Mathew Mark',
            playerJerseyNr: 91
          },
          {
            id: 15673,
            playerLastname: 'Nedved',
            playerFirstname: 'Ondrej',
            playerJerseyNr: 27
          },
          {
            id: 77977,
            playerLastname: 'McGowan',
            playerFirstname: 'Bradley Jamey',
            playerJerseyNr: 77
          },
          {
            id: 15345,
            playerLastname: 'Smith',
            playerFirstname: 'Jacob Wesley',
            playerJerseyNr: 1
          }
        ],
        awayPlayersOnIce: [
          {
            id: 3198,
            playerLastname: 'Jezovsek',
            playerFirstname: 'Zan',
            playerJerseyNr: 91
          },
          {
            id: 2170,
            playerLastname: 'Tomazevic',
            playerFirstname: 'Blaz',
            playerJerseyNr: 98
          },
          {
            id: 3137,
            playerLastname: 'Scap',
            playerFirstname: 'Luka',
            playerJerseyNr: 17
          },
          {
            id: 11126,
            playerLastname: 'Urukalo',
            playerFirstname: 'Ziga',
            playerJerseyNr: 8
          },
          {
            id: 3074,
            playerLastname: 'Us',
            playerFirstname: 'Zan',
            playerJerseyNr: 33
          }
        ],
        youTubeLink: null
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-1:6',
        gameTime: 3064,
        gameTimeFormatted: '51:04',
        gameTimePeriod: '3',
        scoredBy: {
          id: 77935,
          playerLastname: 'Dumic',
          playerFirstname: 'Mirko',
          playerJerseyNr: 93
        },
        assistBy: {
          id: 3198,
          playerLastname: 'Jezovsek',
          playerFirstname: 'Zan',
          playerJerseyNr: 91
        },
        assist2By: {
          id: 26022,
          playerLastname: 'Masic',
          playerFirstname: 'Bine',
          playerJerseyNr: 14
        },
        newScore: '1:6',
        goalNr: 6,
        gameStrength: 'PP1',
        isEmptyNet: false,
        isPenaltyShot: false,
        isAwardedGoal: false,
        isGameWinningGoal: false,
        isGameTieingGoal: false,
        homePlayersOnIce: [
          {
            id: 77982,
            playerLastname: 'Willeit',
            playerFirstname: 'Christian',
            playerJerseyNr: 14
          },
          {
            id: 11117,
            playerLastname: 'Glück',
            playerFirstname: 'Diego',
            playerJerseyNr: 13
          },
          {
            id: 79561,
            playerLastname: 'Harrison',
            playerFirstname: 'Ryan LEslie',
            playerJerseyNr: 50
          },
          {
            id: 15673,
            playerLastname: 'Nedved',
            playerFirstname: 'Ondrej',
            playerJerseyNr: 27
          },
          {
            id: 15345,
            playerLastname: 'Smith',
            playerFirstname: 'Jacob Wesley',
            playerJerseyNr: 1
          }
        ],
        awayPlayersOnIce: [
          {
            id: 77935,
            playerLastname: 'Dumic',
            playerFirstname: 'Mirko',
            playerJerseyNr: 93
          },
          {
            id: 3198,
            playerLastname: 'Jezovsek',
            playerFirstname: 'Zan',
            playerJerseyNr: 91
          },
          {
            id: 26022,
            playerLastname: 'Masic',
            playerFirstname: 'Bine',
            playerJerseyNr: 14
          },
          {
            id: 2170,
            playerLastname: 'Tomazevic',
            playerFirstname: 'Blaz',
            playerJerseyNr: 98
          },
          {
            id: 1597,
            playerLastname: 'Crnovic',
            playerFirstname: 'Aljosa',
            playerJerseyNr: 13
          },
          {
            id: 3074,
            playerLastname: 'Us',
            playerFirstname: 'Zan',
            playerJerseyNr: 33
          }
        ],
        youTubeLink: null
      }
    ],
    awayPenalties: [
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-A-1',
        gameTime: 1455,
        gameTimeFormatted: '24:15',
        gameTimePeriod: '2',
        startTime: 1455,
        startTimeFormatted: '24:15',
        startTimePeriod: '2',
        endTime: 1575,
        endTimeFormatted: '26:15',
        endTimePeriod: '2',
        offender: {
          id: 1648,
          playerLastname: 'Sirovnik',
          playerFirstname: 'Nik',
          playerJerseyNr: 6
        },
        servedBy: null,
        offence: 'TRIP',
        offenceReason: null,
        penaltyLength: 120
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-A-2',
        gameTime: 2844,
        gameTimeFormatted: '47:24',
        gameTimePeriod: '3',
        startTime: 2844,
        startTimeFormatted: '47:24',
        startTimePeriod: '3',
        endTime: 2964,
        endTimeFormatted: '49:24',
        endTimePeriod: '3',
        offender: {
          id: 26022,
          playerLastname: 'Masic',
          playerFirstname: 'Bine',
          playerJerseyNr: 14
        },
        servedBy: null,
        offence: 'ROUGH',
        offenceReason: null,
        penaltyLength: 120
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-A-3',
        gameTime: 3286,
        gameTimeFormatted: '54:46',
        gameTimePeriod: '3',
        startTime: 3286,
        startTimeFormatted: '54:46',
        startTimePeriod: '3',
        endTime: 3406,
        endTimeFormatted: '56:46',
        endTimePeriod: '3',
        offender: {
          id: 1597,
          playerLastname: 'Crnovic',
          playerFirstname: 'Aljosa',
          playerJerseyNr: 13
        },
        servedBy: null,
        offence: 'SLASH',
        offenceReason: null,
        penaltyLength: 120
      },
      {
        guid: '9d2fd55b-985d-470d-94f5-449a73a9e147-A-4',
        gameTime: 3502,
        gameTimeFormatted: '58:22',
        gameTimePeriod: '3',
        startTime: 3502,
        startTimeFormatted: '58:22',
        startTimePeriod: '3',
        endTime: 3600,
        endTimeFormatted: '60:00',
        endTimePeriod: 'OT',
        offender: {
          id: 1602,
          playerLastname: 'Sersen',
          playerFirstname: 'Gasper',
          playerJerseyNr: 19
        },
        servedBy: null,
        offence: 'TRIP',
        offenceReason: null,
        penaltyLength: 120
      }
    ],
    awayFieldPlayers: [
      {
        id: 1648,
        playerLastname: 'Sirovnik',
        playerFirstname: 'Nik',
        playerJerseyNr: '6',
        playerBirthdate: {
          formattedShort: '12.02.01',
          formattedLong: '12. February 2001',
          timestamp: 981932400000,
          value: '2001-02-12',
          diffToNow: -632007743.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 2,
        plusMinus: -1,
        points: 0,
        position: 'LD',
        lineupLine: 3,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 11126,
        playerLastname: 'Urukalo',
        playerFirstname: 'Ziga',
        playerJerseyNr: '8',
        playerBirthdate: {
          formattedShort: '12.03.99',
          formattedLong: '12. March 1999',
          timestamp: 921193200000,
          value: '1999-03-12',
          diffToNow: -692746943.09241688
        },
        assists: 1,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 3,
        points: 1,
        position: 'LD',
        lineupLine: 2,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 1598,
        playerLastname: 'Rajsar',
        playerFirstname: 'Patrik',
        playerJerseyNr: '9',
        playerBirthdate: {
          formattedShort: '05.05.98',
          formattedLong: '05. May 1998',
          timestamp: 894319200000,
          value: '1998-05-05',
          diffToNow: -719617343.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'C',
        lineupLine: 4,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 79540,
        playerLastname: 'Percic',
        playerFirstname: 'Maks',
        playerJerseyNr: '10',
        playerBirthdate: {
          formattedShort: '02.04.04',
          formattedLong: '02. April 2004',
          timestamp: 1080856800000,
          value: '2004-04-02',
          diffToNow: -533079743.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'LD',
        lineupLine: 4,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 1597,
        playerLastname: 'Crnovic',
        playerFirstname: 'Aljosa',
        playerJerseyNr: '13',
        playerBirthdate: {
          formattedShort: '16.04.99',
          formattedLong: '16. April 1999',
          timestamp: 924213600000,
          value: '1999-04-16',
          diffToNow: -689722943.09241688
        },
        assists: 1,
        goals: 0,
        penaltyMinutes: 2,
        plusMinus: 1,
        points: 1,
        position: 'RD',
        lineupLine: 1,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 26022,
        playerLastname: 'Masic',
        playerFirstname: 'Bine',
        playerJerseyNr: '14',
        playerBirthdate: {
          formattedShort: '14.11.02',
          formattedLong: '14. November 2002',
          timestamp: 1037228400000,
          value: '2002-11-14',
          diffToNow: -576711743.09241688
        },
        assists: 1,
        goals: 0,
        penaltyMinutes: 2,
        plusMinus: -1,
        points: 1,
        position: 'RD',
        lineupLine: 3,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 3137,
        playerLastname: 'Scap',
        playerFirstname: 'Luka',
        playerJerseyNr: '17',
        playerBirthdate: {
          formattedShort: '27.12.91',
          formattedLong: '27. December 1991',
          timestamp: 693788400000,
          value: '1991-12-27',
          diffToNow: -920151743.09241676
        },
        assists: 1,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 4,
        points: 1,
        position: 'RD',
        lineupLine: 2,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 1602,
        playerLastname: 'Sersen',
        playerFirstname: 'Gasper',
        playerJerseyNr: '19',
        playerBirthdate: {
          formattedShort: '22.10.99',
          formattedLong: '22. October 1999',
          timestamp: 940543200000,
          value: '1999-10-22',
          diffToNow: -673393343.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 2,
        plusMinus: 0,
        points: 0,
        position: 'C',
        lineupLine: 3,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 77942,
        playerLastname: 'Svetina',
        playerFirstname: 'Erik',
        playerJerseyNr: '22',
        playerBirthdate: {
          formattedShort: '20.04.99',
          formattedLong: '20. April 1999',
          timestamp: 924559200000,
          value: '1999-04-20',
          diffToNow: -689377343.09241688
        },
        assists: 0,
        goals: 1,
        penaltyMinutes: 0,
        plusMinus: 1,
        points: 1,
        position: 'RF',
        lineupLine: 3,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 2,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 1593,
        playerLastname: 'Sodja',
        playerFirstname: 'Jaka',
        playerJerseyNr: '23',
        playerBirthdate: {
          formattedShort: '17.12.99',
          formattedLong: '17. December 1999',
          timestamp: 945385200000,
          value: '1999-12-17',
          diffToNow: -668554943.09241688
        },
        assists: 2,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 2,
        points: 2,
        position: 'RF',
        lineupLine: 1,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 77941,
        playerLastname: 'Sturm',
        playerFirstname: 'Jaka',
        playerJerseyNr: '24',
        playerBirthdate: {
          formattedShort: '21.04.99',
          formattedLong: '21. April 1999',
          timestamp: 924645600000,
          value: '1999-04-21',
          diffToNow: -689290943.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 1,
        points: 0,
        position: 'RF',
        lineupLine: 2,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 15154,
        playerLastname: 'Stojan',
        playerFirstname: 'Nejc',
        playerJerseyNr: '46',
        playerBirthdate: {
          formattedShort: '30.08.99',
          formattedLong: '30. August 1999',
          timestamp: 935964000000,
          value: '1999-08-30',
          diffToNow: -677972543.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 1,
        points: 0,
        position: 'LD',
        lineupLine: 1,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 3086,
        playerLastname: 'Glavic',
        playerFirstname: 'Gasper',
        playerJerseyNr: '47',
        playerBirthdate: {
          formattedShort: '29.04.97',
          formattedLong: '29. April 1997',
          timestamp: 862264800000,
          value: '1997-04-29',
          diffToNow: -751671743.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'LF',
        lineupLine: 3,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 3091,
        playerLastname: 'Rajsar',
        playerFirstname: 'Saso',
        playerJerseyNr: '81',
        playerBirthdate: {
          formattedShort: '18.08.88',
          formattedLong: '18. August 1988',
          timestamp: 587858400000,
          value: '1988-08-18',
          diffToNow: -1026078143.0924168
        },
        assists: 0,
        goals: 1,
        penaltyMinutes: 0,
        plusMinus: 1,
        points: 1,
        position: 'C',
        lineupLine: 2,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 2,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 2710,
        playerLastname: 'Hebar',
        playerFirstname: 'Andrej',
        playerJerseyNr: '84',
        playerBirthdate: {
          formattedShort: '07.09.84',
          formattedLong: '07. September 1984',
          timestamp: 463356000000,
          value: '1984-09-07',
          diffToNow: -1150580543.0924168
        },
        assists: 1,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 2,
        points: 1,
        position: 'LF',
        lineupLine: 2,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 66560,
        playerLastname: 'Kocar',
        playerFirstname: 'Timotej',
        playerJerseyNr: '86',
        playerBirthdate: {
          formattedShort: '12.09.95',
          formattedLong: '12. September 1995',
          timestamp: 810856800000,
          value: '1995-09-12',
          diffToNow: -803079743.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'RF',
        lineupLine: 4,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 3198,
        playerLastname: 'Jezovsek',
        playerFirstname: 'Zan',
        playerJerseyNr: '91',
        playerBirthdate: {
          formattedShort: '22.04.97',
          formattedLong: '22. April 1997',
          timestamp: 861660000000,
          value: '1997-04-22',
          diffToNow: -752276543.09241688
        },
        assists: 1,
        goals: 3,
        penaltyMinutes: 0,
        plusMinus: 3,
        points: 4,
        position: 'LF',
        lineupLine: 1,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 6,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 77935,
        playerLastname: 'Dumic',
        playerFirstname: 'Mirko',
        playerJerseyNr: '93',
        playerBirthdate: {
          formattedShort: '19.01.99',
          formattedLong: '19. January 1999',
          timestamp: 916700400000,
          value: '1999-01-19',
          diffToNow: -697239743.09241688
        },
        assists: 0,
        goals: 1,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 1,
        position: 'LF',
        lineupLine: 4,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 2,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SRB',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 67497,
        playerLastname: 'Primozic',
        playerFirstname: 'Zan',
        playerJerseyNr: '97',
        playerBirthdate: {
          formattedShort: '17.07.01',
          formattedLong: '17. July 2001',
          timestamp: 995320800000,
          value: '2001-07-17',
          diffToNow: -618615743.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'RD',
        lineupLine: 4,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 2170,
        playerLastname: 'Tomazevic',
        playerFirstname: 'Blaz',
        playerJerseyNr: '98',
        playerBirthdate: {
          formattedShort: '14.10.97',
          formattedLong: '14. October 1997',
          timestamp: 876780000000,
          value: '1997-10-14',
          diffToNow: -737156543.09241688
        },
        assists: 3,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 2,
        points: 3,
        position: 'C',
        lineupLine: 1,
        shotsBlocked: 0,
        shotsOnGoal: 0,
        shotsTaken: 0,
        faceoffsWon: 0,
        faceoffsTotal: 0,
        isStartingPlayer: false,
        timeOnIce: 0,
        shifts: 0,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      }
    ],
    awayGoalKeepers: [
      {
        id: 794,
        playerLastname: 'Avsenik',
        playerFirstname: 'Urban',
        playerJerseyNr: '31',
        playerBirthdate: {
          formattedShort: '03.11.97',
          formattedLong: '03. November 1997',
          timestamp: 878511600000,
          value: '1997-11-03',
          diffToNow: -735428543.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'G',
        goalsAgainstAverage: '0.00',
        playingTime: 0,
        goalsAgainst: 0,
        shotsAgainst: 0,
        savePercentage: '0',
        saves: 0,
        isStartingPlayer: null,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      },
      {
        id: 3074,
        playerLastname: 'Us',
        playerFirstname: 'Zan',
        playerJerseyNr: '33',
        playerBirthdate: {
          formattedShort: '10.06.96',
          formattedLong: '10. June 1996',
          timestamp: 834357600000,
          value: '1996-06-10',
          diffToNow: -779578943.09241688
        },
        assists: 0,
        goals: 0,
        penaltyMinutes: 0,
        plusMinus: 0,
        points: 0,
        position: 'G',
        goalsAgainstAverage: '1.00',
        playingTime: 3600,
        goalsAgainst: 1,
        shotsAgainst: 32,
        savePercentage: '96.9',
        saves: 31,
        isStartingPlayer: 1,
        nation: 'SLO',
        countsAsResidentialPlayer: false,
        countsAsResidentialPlayerEU: false
      }
    ],
    awayTeamStats: {
      faceoffsWon: 0,
      faceoffsTotal: 0,
      shotsOnGoal: 45,
      shotsBlocked: 0,
      penaltyMinutes: 8,
      powerplayGoals: 1,
      powerplayOpportunities: 4,
      penaltykillSuccesses: 3,
      penaltykillSituations: 3,
      timeValues: {
        leading: 2373,
        tied: 1227,
        trailing: 0,
        timeGameStrengthEven: null,
        timeGameStrengthPlusOne: null,
        timeGameStrengthPlusTwo: null,
        timeGameStrengthMinusOne: null,
        timeGameStrengthMinusTwo: null,
        timeOnPowerplay: null,
        timeWhileShorthanded: null
      }
    },
    homeGoalKeeperChanges: [
      {
        gametime: 0,
        gameTimeFormatted: '00:00',
        gameTimePeriod: '1',
        player: {
          id: 15345,
          playerLastname: 'Smith',
          playerFirstname: 'Jacob Wesley',
          playerJerseyNr: 1
        },
        action: 'on'
      },
      {
        gametime: 3600,
        gameTimeFormatted: '60:00',
        gameTimePeriod: '3',
        player: {
          id: 15345,
          playerLastname: 'Smith',
          playerFirstname: 'Jacob Wesley',
          playerJerseyNr: 1
        },
        action: 'off'
      }
    ],
    awayGoalKeeperChanges: [
      {
        gametime: 0,
        gameTimeFormatted: '00:00',
        gameTimePeriod: '1',
        player: {
          id: 3074,
          playerLastname: 'Us',
          playerFirstname: 'Zan',
          playerJerseyNr: 33
        },
        action: 'on'
      },
      {
        gametime: 3600,
        gameTimeFormatted: '60:00',
        gameTimePeriod: '3',
        player: {
          id: 3074,
          playerLastname: 'Us',
          playerFirstname: 'Zan',
          playerJerseyNr: 33
        },
        action: 'off'
      }
    ],
    gameActions: [],
    faceoffsHeadToHead: [],
    faceoffsIndividual: [],
    gameSituations: [
      {
        timeFrom: 0,
        timeUntil: 959,
        gameSituationForHome: 0,
        duration: 959
      },
      {
        timeFrom: 959,
        timeUntil: 1079,
        gameSituationForHome: -1,
        duration: 120
      },
      {
        timeFrom: 1079,
        timeUntil: 1455,
        gameSituationForHome: 0,
        duration: 376
      },
      {
        timeFrom: 1455,
        timeUntil: 1575,
        gameSituationForHome: 1,
        duration: 120
      },
      {
        timeFrom: 1575,
        timeUntil: 2273,
        gameSituationForHome: 0,
        duration: 698
      },
      {
        timeFrom: 2273,
        timeUntil: 2393,
        gameSituationForHome: -1,
        duration: 120
      },
      {
        timeFrom: 2393,
        timeUntil: 3041,
        gameSituationForHome: 0,
        duration: 648
      },
      {
        timeFrom: 3041,
        timeUntil: 3064,
        gameSituationForHome: -1,
        duration: 23
      },
      {
        timeFrom: 3064,
        timeUntil: 3286,
        gameSituationForHome: 0,
        duration: 222
      },
      {
        timeFrom: 3286,
        timeUntil: 3318,
        gameSituationForHome: 1,
        duration: 32
      },
      {
        timeFrom: 3318,
        timeUntil: 3406,
        gameSituationForHome: 0,
        duration: 88
      },
      {
        timeFrom: 3406,
        timeUntil: 3438,
        gameSituationForHome: -1,
        duration: 32
      },
      {
        timeFrom: 3438,
        timeUntil: 3502,
        gameSituationForHome: 0,
        duration: 64
      },
      {
        timeFrom: 3502,
        timeUntil: 3600,
        gameSituationForHome: 1,
        duration: 98
      }
    ]
  },
  calcTime: 203.1369,
  lastUpdate: {
    formattedShort: '21.02.21 21:42',
    formattedLong: '21.February 2021 21:42',
    timestamp: 1613940143139,
    value: '2021-02-21 21:42'
  },
  servedByServer: 'cloud01'
};
