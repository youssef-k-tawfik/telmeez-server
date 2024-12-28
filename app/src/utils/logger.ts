export enum LogLevels{
    ERROR,
    WARN,
    INFO,
    DEBUG
}

export interface LogMsg {
    level: LogLevels,
    message: string,
}

export class Logger {
    private static logLevel: LogLevels = LogLevels.INFO;

    public static setLogLevel(level: LogLevels){
        this.logLevel = level;
    }

    public static log(logLevel: LogLevels, message: string){
        if(logLevel > this.logLevel){
            return;
        }

        let level: string;

        switch (logLevel){
            case LogLevels.DEBUG:
                level = "DEBUG";
                break;

            case LogLevels.INFO:
                level = "INFO";
                break;

            case LogLevels.WARN:
                level = "WARN";
                break;

            case LogLevels.ERROR:
                level = "ERROR";
                break;
        }

        const timestamp = new Date().toLocaleString();
        const formattedMsg = `${timestamp} - [${level}]: ${message}`;

        console.log(formattedMsg);
    }
}
