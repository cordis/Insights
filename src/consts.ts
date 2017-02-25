export class PERIOD {
    public static SO_FAR_TODAY: string = "so_far_today";
    public static LAST_1_HOUR = "last_1_hour";
    public static LAST_6_HOURS = "last_6_hours";
    public static LAST_12_HOURS = "last_12_hours";
    public static LAST_24_HOURS = "last_24_hours";
    public static YESTERDAY = "yesterday";
    public static LAST_7_DAYS = "last_7_days";
    public static LAST_30_DAYS = "last_30_days";

    public static ALL: Array<string> = [
        PERIOD.SO_FAR_TODAY,
        PERIOD.LAST_1_HOUR,
        PERIOD.LAST_6_HOURS,
        PERIOD.LAST_12_HOURS,
        PERIOD.LAST_24_HOURS,
        PERIOD.YESTERDAY,
        PERIOD.LAST_7_DAYS,
        PERIOD.LAST_30_DAYS,
    ];
}
