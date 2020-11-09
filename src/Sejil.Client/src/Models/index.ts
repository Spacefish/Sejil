import dayjs from 'dayjs'

export type LogEntry = {
    id: string;
    message: string;
    messageTemplate: string;
    level: string;
    timestamp: string;
    exception?: string;
    properties: LogEntryProperty[];
}

export type LogEntryProperty = {
    id: number;
    logId: string;
    name: string;
    value: string;
}

export type LogQueryFilter = {
    queryText?: string;
    dateFilter?: string;
    dateRangeFilter?: [dayjs.Dayjs, dayjs.Dayjs];
    levelFilter?: string;
    exceptionsOnly: boolean;
}

export type LogQuery = {
    name: string;
    query: string;
}