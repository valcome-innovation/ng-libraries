export interface HockeyDataApiConfig {
  apiKey: string;
  referer: string;
  displayPointsPerGame: boolean;
}

export type HdSport = 'icehockey' | 'americanfootball';
export type HdLeagueSlug = 'ebel' | 'afboe';

export type HockeyDataApiCall = 'GetGameReport'
  | 'GetSports'
  | 'GetLeagues'
  | 'GetSeasons'
  | 'GetDivisionInfo'
  | 'Standings'
  | 'Schedule'
  | 'KnockoutStage';

export type ApiParams = Record<string, string | number | boolean>;

export const sports: Record<HdLeagueSlug, HdSport> = {
  ebel: 'icehockey',
  afboe: 'americanfootball'
};

export type HockeyDataLabel = 'LIVE' | 'FINISHED';

interface HdApiCommonResponse {
  statusId: number;
  statusMsg: string;
  calcTime?: number;
  lastUpdate?: HdDate;
  servedByServer?: string;
}

export type HdApiResponse<K extends 'data' | 'rows', T> = HdApiCommonResponse
  & { [key in K]: T };

export interface HdKeyValue<K extends string> {
  key: K;
  name: string;
}

export type IHockeyDataSchedule = HdApiResponse<'rows', IHockeyDataScheduledGame[]>;
export type IHockeyDataGameReport = HdApiResponse<'data', IHockeyDataGameReportData>;
export type IHockeyDataStandings = HdApiResponse<'data', { rows: IHockeyDataTeamStanding[] }>;
export type IHockeyDataKnockOutStage = HdApiResponse<'data', IHockeyDataKnockOutStageData>;

export type HdLeague = {
  leagueCode: unknown,
  leagueId: number,
  leagueName: string,
};

export type HdSeason = {
  seasonId: number,
  seasonName: string,
};

export type HdDate = {
  formattedShort: string,
  formattedLong: string,
  timestamp: number,
  value: string,
  diffToNow?: number,
};

export type HdDivisionResponse = {
  divisionInfo: HdDivisionInfo;
  divisions: HdDivisions[];
  teams: HdTeams[];
};

export type HdDivisionInfo = {
  id: number;
  divisionName: string;
  divisionType: number;
  durationFrom: HdDate;
  durationUntil: HdDate;
  minRound: number;
  maxRound: number;
  currentRound: number;
  teams: number[];
  isCalculated: boolean;
  permalinks: string[];
};

export type HdDivisions = {
  id: number;
  divisionName: string;
  divisionType: number;
  teams: number[];
  isCalculated: boolean;
  permalinks: string[];
};

export type HdTeams = {
  id: number;
  shortname: string;
  longname: string;
  clubCode: null | string;
  teamCode: null | string;
  leagueCode: null | string;
};

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

export interface IHockeyDataBaseGameData {
  id: string;
  divisionId: number;
  divisionLongname: string;
  scheduledDate: HdDate;
  scheduledTime: string;
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
}

export interface IHockeyDataGameReportGameData extends IHockeyDataBaseGameData {
  startTime: string;
  endTime: string;
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
  games: IHockeyDataScheduledGame[];
}

export interface IHockeyDataPhaseEncounterTeam {
  id: number;
  longname: string;
  shortname: string;
  gamesWon: number;
  encounterTeamStatus: number;
}

export interface IHockeyDataScheduledGame {
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
