export interface HockeyDataApiConfig {
  apiKey: string;
  referer: string;
}

export type HockeyDataSport = 'icehockey' | 'americanfootball';
export type HockeyDataLeague = 'ebel' | 'afboe';
export type HockeyDataApiCall = 'GetGameReport' | 'Standings' | 'Schedule' | 'KnockoutStage';
export type ApiParams = Record<string, string | number | boolean>;

export const sports: Record<HockeyDataLeague, HockeyDataSport> = {
  ebel: 'icehockey',
  afboe: 'americanfootball'
};

export type HockeyDataLabel = 'LIVE' | 'FINISHED';

export interface IHockeyDataDate {
  formattedShort: string;
  formattedLong: string;
  timestamp: number;
  value: string;
  diffToNow?: number;
}

export interface IHockeyDataLocation {
  longname: string;
  shortname: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface IHockeyDataPeriodStats {
  period: string;
  startTime: string;
  endTime: string;
  homeScore: number;
  awayScore: number;
  homeShotsOnGoal: number;
  awayShotsOnGoal: number;
}

export interface IHockeyDataGameReportGameData {
  id: string;
  divisionId: number;
  divisionLongname: string;
  scheduledDate: IHockeyDataDate;
  scheduledTime: string;
  startTime: string;
  endTime: string;
  isOvertime: number;
  isShootOut: number;
  homeTeamId: number;
  homeTeamLongname: string;
  homeTeamShortname: string;
  homeTeamScore: number;
  awayTeamId: number;
  awayTeamLongname: string;
  awayTeamShortname: string;
  awayTeamScore: number;
  gameName: string;
  gameRound: number;
  location: IHockeyDataLocation;
  liveTime: number;
  liveTimeFormatted: string;
  liveTimePeriod: string;
  periodStats: IHockeyDataPeriodStats[];
  numberOfPeriods: number;
  lengthOfPeriod: number;
  numberOfOvertimes: number;
  lengthOfOvertime: number;
  shootoutShots: number;
}

export interface IHockeyDataGameReportData {
  gameData: IHockeyDataGameReportGameData;
  homeGoals: any[];
  homePenalties: any[];
  homeFieldPlayers: any[];
  homeGoalKeepers: any[];
  homeTeamStats: any;
  awayGoals: any[];
  awayPenalties: any[];
  awayFieldPlayers: any[];
  awayGoalKeepers: any[];
  awayTeamStats: any;
  homeGoalKeeperChanges: any[];
  awayGoalKeeperChanges: any[];
  gameActions: any[];
  faceoffsHeadToHead: any[];
  faceoffsIndividual: any[];
  gameSituations: any[];
}

export interface IHockeyDataApiResponse {
  statusId: number;
  statusMsg: string;
  data: any | any[];
  calcTime?: number;
  lastUpdate: IHockeyDataDate;
  servedByServer?: string;
}

export interface IHockeyDataGameReport extends IHockeyDataApiResponse {
  data: IHockeyDataGameReportData;
}

export interface IHockeyDataStandings extends IHockeyDataApiResponse {
  data: {
    rows: IHockeyDataTeamStanding[]
  };
}

export interface IHockeyDataTeamStanding {
  id: number;
  tableRank: number;
  tableRankImprovement: number;
  teamLongname: string;
  teamShortname: string;
  gamesPlayed: number;
  gamesWon: number;
  gamesWonInOt: number;
  gamesTied: number;
  gamesLostInOt: number;
  gamesLost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: string;
  points: number;
  bonusPoints: number;
  labels: HockeyDataLabel[];
  pointsPerGame: number;
  goalsForPerGame: number;
  goalDifferencePerGame: number;
  gamesPlayedPercentage: number;
}

export interface IHockeyDataKnockOutStage extends IHockeyDataApiResponse {
  data: IHockeyDataKnockOutStageData;
}

export interface IHockeyDataKnockOutStageData {
  divisionId: number;
  divisionName: string;
  phases: IHockeyDataKnockOutPhase[];
}

export interface IHockeyDataKnockOutPhase {
  divisionId: number;
  divisionName: string;
  divisionType: number;
  encounters: IHockeyDataPhaseEncounter[];
  phaseTeams: IHockeyDataPhaseTeam[];
  positionX: number;
  positionY: number;
}

export interface IHockeyDataPhaseTeam {
  teamId: number;
  divisionId: number;
  isGhost: boolean;
  qualifyState: number;
}

export interface IHockeyDataPhaseEncounter {
  id: number;
  longname: string;
  shortname: string | null;
  isDecided: boolean;
  labels: any[];
  bestOf: number;
  gamesNeeded: number;
  teams: [IHockeyDataPhaseEncounterTeam, IHockeyDataPhaseEncounterTeam];
  games: IHockeyDataKnockoutPhaseGame[];
}

export interface IHockeyDataPhaseEncounterTeam {
  id: number;
  longname: string;
  shortname: string;
  gamesWon: number;
  encounterTeamStatus: number;
}

export interface IHockeyDataKnockoutPhaseGame {
  id: string;
  scheduledDate: {
    sortValue: number;
    value: string;
    shortValue: string;
    longValue: string;
  };
  scheduledTime: string;
  gameName: string;
  gameDay: any;
  gameRound: number | null;
  gameUtcTimestamp: number;
  awayTeamId: number;
  awayTeamLongName: string;
  awayTeamShortName: string;
  awayTeamFlavourname: string;
  awayTeamScore: number;
  homeTeamId: number;
  homeTeamLongName: string;
  homeTeamShortName: string;
  homeTeamFlavourname: string;
  homeTeamScore: number;
  gameStatus: number;
  extendedStatus: number;
  dateIsToBeDetermined: boolean;
  timeIsToBeDetermined: boolean;
  isOvertime: boolean;
  isShootOut: boolean;
  liveTime: number;
  gameHasEnded: boolean;
  labels: any[];
  youTubeLink: string | null;
  seriesStandings: any;
}
