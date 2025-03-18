from datetime import datetime
import pytz

def convert_time_zone(time_to_convert, from_zone_str, to_zone_str):
    """
    Convert a datetime object from one timezone to another.
    
    :param time_to_convert: The datetime object to convert.
    :param from_zone_str: The original timezone as a string (e.g., 'UTC').
    :param to_zone_str: The target timezone as a string (e.g., 'America/New_York').
    :return: The converted datetime object.
    """
    from_zone = pytz.timezone(from_zone_str)
    to_zone = pytz.timezone(to_zone_str)

    # Ensure the datetime object is timezone-aware
    if time_to_convert.tzinfo is None or time_to_convert.tzinfo.utcoffset(time_to_convert) is None:
        # If naive, localize it to the source timezone
        time_to_convert = from_zone.localize(time_to_convert)
    else:
        # If already timezone-aware, convert it directly
        time_to_convert = time_to_convert.astimezone(from_zone)

    # Convert to target timezone
    return time_to_convert.astimezone(to_zone)
