from datetime import datetime
import pytz
import unittest

def convert_time_zone(time_to_convert, from_tz, to_tz):
    """
    Convert a datetime from one time zone to another.

    :param time_to_convert: The datetime object to convert.
    :param from_tz: The source time zone as a string (e.g., 'UTC', 'America/New_York').
    :param to_tz: The target time zone as a string.
    :return: The converted datetime object.
    """
    if time_to_convert.tzinfo is None:
        raise ValueError("Naive datetime object provided. Please use an aware datetime.")

    from_zone = pytz.timezone(from_tz)
    to_zone = pytz.timezone(to_tz)
    
    # Ensure datetime is localized before converting
    localized_time = from_zone.localize(time_to_convert) if time_to_convert.tzinfo is None else time_to_convert
    
    return localized_time.astimezone(to_zone)


class TestConvertTimeZone(unittest.TestCase):
    def test_basic_conversion(self):
        time_now = datetime(2025, 3, 17, 12, 0)
        result = convert_time_zone(time_now, 'UTC', 'America/New_York')
        self.assertEqual(result.strftime('%Y-%m-%d %H:%M'), '2025-03-17 08:00')  # EDT (UTC-4)
    
    def test_same_time_zone(self):
        time_now = datetime(2025, 3, 17, 12, 0)
        result = convert_time_zone(time_now, 'UTC', 'UTC')
        self.assertEqual(result.strftime('%Y-%m-%d %H:%M'), '2025-03-17 12:00')
    
    def test_dst_start(self):
        time_now = datetime(2025, 3, 9, 1, 30)
        result = convert_time_zone(time_now, 'America/New_York', 'UTC')
        self.assertEqual(result.strftime('%Y-%m-%d %H:%M'), '2025-03-09 06:30')  # Before DST shift
    
    def test_dst_end(self):
        time_now = datetime(2025, 11, 2, 1, 30)
        result = convert_time_zone(time_now, 'America/New_York', 'UTC')
        self.assertEqual(result.strftime('%Y-%m-%d %H:%M'), '2025-11-02 06:30')  # After DST shift
    
    def test_far_apart_time_zones(self):
        time_now = datetime(2025, 3, 17, 12, 0)
        result = convert_time_zone(time_now, 'UTC', 'Asia/Tokyo')
        self.assertEqual(result.strftime('%Y-%m-%d %H:%M'), '2025-03-17 21:00')  # JST (UTC+9)
    
    def test_west_africa_time(self):
        time_now = datetime(2025, 3, 17, 12, 0)
        result = convert_time_zone(time_now, 'UTC', 'Africa/Lagos')
        self.assertEqual(result.strftime('%Y-%m-%d %H:%M'), '2025-03-17 13:00')  # WAT (UTC+1)
    
    def test_invalid_time_zone(self):
        time_now = datetime(2025, 3, 17, 12, 0)
        with self.assertRaises(pytz.UnknownTimeZoneError):
            convert_time_zone(time_now, 'UTC', 'INVALID_TIMEZONE')
    
    def test_non_datetime_input(self):
        with self.assertRaises(AttributeError):
            convert_time_zone("2025-03-17 12:00", 'UTC', 'America/New_York')
    
    def test_naive_datetime(self):
        naive_time = datetime(2025, 3, 17, 12, 0)
        with self.assertRaises(ValueError):
            convert_time_zone(naive_time, 'UTC', 'America/New_York')

if __name__ == '__main__':
    unittest.main()
