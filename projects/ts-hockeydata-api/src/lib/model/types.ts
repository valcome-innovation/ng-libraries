export type HockeyDataSport = 'icehockey' | 'americanfootball';
export type HockeyDataLeague = 'ebel' | 'afboe';
export type HockeyDataApiCall = 'GetGameReport' | 'Standings' | 'Schedule';
export type ApiParams = Record<string, string | number>;

export interface GameReportParams {
  gameId: string;
}

export const sports: Record<HockeyDataLeague, HockeyDataSport> = {
  ebel: 'icehockey',
  afboe: 'americanfootball'
};
