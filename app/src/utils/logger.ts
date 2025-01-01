export enum LogLevels {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

enum LogColors {
  RED     = 1,
  GREEN   = 2,
  YELLOW  = 3,
  BLUE    = 4,
  MAGENTA = 5,
  CYAN    = 6,
  WHITE   = 7,
}

export interface LogMsg {
  level: LogLevels;
  message: string;
}

export class Logger {
  private static logLevel: LogLevels = LogLevels.INFO;

  public static setLogLevel(level: LogLevels) {
    this.logLevel = level;
  }

  public static log(logLevel: LogLevels, message: string) {
    if (logLevel > this.logLevel) {
      return;
    }

    let level: string;
    let color: LogColors;

    switch (logLevel) {
      case LogLevels.DEBUG:
        level = "DEBUG";
        color = LogColors.BLUE;
        break;

      case LogLevels.INFO:
        level = "INFO";
        color = LogColors.GREEN;
        break;

      case LogLevels.WARN:
        level = "WARN";
        color = LogColors.YELLOW;
        break;

      case LogLevels.ERROR:
        level = "ERROR";
        color = LogColors.RED;
        break;
    }

    const timestamp = new Date().toLocaleString();
    const label = `${timestamp} - [${level}]:`;

    console.log(`\x1b[3${color}m%s\x1b[0m %s`, label, message);
  }
}
