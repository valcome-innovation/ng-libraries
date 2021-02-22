export type HockeyDataSport = 'icehockey' | 'americanfootball';
export type HockeyDataLeague = 'ebel' | 'afboe';
export type HockeyDataApiCall = 'GetGameReport' | 'Standings' | 'Schedule';
export type ApiParams = Record<string, string | number>;

export const sports: Record<HockeyDataLeague, HockeyDataSport> = {
  ebel: 'icehockey',
  afboe: 'americanfootball'
};

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

export interface IHockeyDataGameReport {
  statusId: number;
  statusMsg: string;
  data: IHockeyDataGameReportData;
  calcTime: number;
  lastUpdate: IHockeyDataDate;
  servedByServer: string;
}
