from datetime import datetime
import pytz

def convert_time_zone(time_to_convert, from_tz, to_tz):
    """
    Convert a datetime from one time zone to another.

    :param time_to_convert: The datetime object to convert.
    :param from_tz: The source time zone as a string (e.g., 'UTC', 'America/New_York').
    :param to_tz: The target time zone as a string.
    :return: The converted datetime object.
    """
    # Define the source and target time zones
    from_zone = pytz.timezone(from_tz)
    to_zone = pytz.timezone(to_tz)
    
    # Localize the input datetime to the source time zone
    localized_time = from_zone.localize(time_to_convert)
    
    # Convert to the target time zone
    converted_time = localized_time.astimezone(to_zone)
    
    return converted_time
