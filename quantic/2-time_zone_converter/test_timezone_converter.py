import unittest
from datetime import datetime
import pytz
from timezone_converter import convert_time_zone

class TestConvertTimeZone(unittest.TestCase):
    def setUp(self):
        """Set up a timezone-aware datetime object for testing."""
        utc_zone = pytz.timezone('UTC')
        naive_time = datetime(2025, 3, 17, 12, 0, 0)  # Naive datetime (no timezone)
        self.time_now = utc_zone.localize(naive_time)  # Convert to aware datetime
    
    def test_basic_conversion(self):
        """Test conversion from UTC to New York Time."""
        result = convert_time_zone(self.time_now, 'UTC', 'America/New_York')
        self.assertEqual(result.tzinfo.zone, 'America/New_York')

    def test_same_time_zone(self):
        """Test conversion within the same time zone."""
        result = convert_time_zone(self.time_now, 'UTC', 'UTC')
        self.assertEqual(result, self.time_now)

    def test_dst_start(self):
        """Test conversion at the start of daylight saving time."""
        new_york_tz = pytz.timezone('America/New_York')
        dst_start = new_york_tz.localize(datetime(2025, 3, 9, 2, 30, 0))  # DST starts
        result = convert_time_zone(dst_start, 'America/New_York', 'UTC')
        self.assertEqual(result.tzinfo.zone, 'UTC')

    def test_dst_end(self):
        """Test conversion at the end of daylight saving time."""
        new_york_tz = pytz.timezone('America/New_York')
        dst_end = new_york_tz.localize(datetime(2025, 11, 2, 1, 30, 0))  # DST ends
        result = convert_time_zone(dst_end, 'America/New_York', 'UTC')
        self.assertEqual(result.tzinfo.zone, 'UTC')

    def test_far_apart_time_zones(self):
        """Test conversion between far-apart time zones (UTC to Tokyo)."""
        result = convert_time_zone(self.time_now, 'UTC', 'Asia/Tokyo')
        self.assertEqual(result.tzinfo.zone, 'Asia/Tokyo')

    def test_west_africa_time(self):
        """Test conversion from UTC to West Africa Time (WAT)."""
        result = convert_time_zone(self.time_now, 'UTC', 'Africa/Lagos')
        self.assertEqual(result.tzinfo.zone, 'Africa/Lagos')

    def test_invalid_time_zone(self):
        """Test handling of an invalid time zone."""
        with self.assertRaises(pytz.UnknownTimeZoneError):
            convert_time_zone(self.time_now, 'UTC', 'INVALID_TIMEZONE')

    def test_naive_datetime(self):
        """Test that a naive datetime raises ValueError."""
        naive_time = datetime(2025, 3, 17, 12, 0, 0)  # No timezone info
        with self.assertRaises(ValueError):
            convert_time_zone(naive_time, 'UTC', 'America/New_York')

if __name__ == '__main__':
    unittest.main()
