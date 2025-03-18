from datetime import datetime
import pytz

def convert_time_zone(time_to_convert, from_zone_str, to_zone_str):
    """
    Convert a datetime object from one timezone to another.
    
    :param time_to_convert: The datetime object to convert.
    :param from_zone_str: The original timezone as a string (e.g., 'UTC').
    :param to_zone_str: The target timezone as a string (e.g., 'America/New_York').
    :return: The converted datetime object.
    :raises ValueError: If the input datetime is naive.
    """
    from_zone = pytz.timezone(from_zone_str)
    to_zone = pytz.timezone(to_zone_str)

    # Check if the datetime is naive
    if time_to_convert.tzinfo is None or time_to_convert.tzinfo.utcoffset(time_to_convert) is None:
        raise ValueError("Naive datetime objects are not allowed. Please provide a timezone-aware datetime.")

    # Convert to the source timezone if it's different
    time_to_convert = time_to_convert.astimezone(from_zone)

    # Convert to target timezone
    return time_to_convert.astimezone(to_zone)
