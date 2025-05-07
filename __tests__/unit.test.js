// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number (with area code)', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number (without area code)', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});

test('invalid phone number (missing digits)', () => {
  expect(isPhoneNumber('123-45-678')).toBe(false);
});

test('invalid phone number (letters included)', () => {
  expect(isPhoneNumber('(123) abc-4567')).toBe(false);
});

test('valid email (simple)', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email (underscore in domain)', () => {
  expect(isEmail('user@domain_name.com')).toBe(true);
});

test('invalid email (missing @)', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

test('invalid email (invalid domain)', () => {
  expect(isEmail('user@domain.c')).toBe(false);
});

test('valid strong password (letters and numbers)', () => {
  expect(isStrongPassword('Abc1234')).toBe(true);
});

test('valid strong password (includes underscore)', () => {
  expect(isStrongPassword('A_bc1234')).toBe(true);
});

test('invalid strong password (too short)', () => {
  expect(isStrongPassword('A1_')).toBe(false);
});

test('invalid strong password (contains special character)', () => {
  expect(isStrongPassword('A@bc1234')).toBe(false);
});

test('valid date (MM/DD/YYYY)', () => {
  expect(isDate('12/25/2025')).toBe(true);
});

test('valid date (single-digit month and day)', () => {
  expect(isDate('1/1/2025')).toBe(true);
});

test('invalid date (missing year)', () => {
  expect(isDate('12/25/25')).toBe(false);
});

test('invalid date (invalid separators)', () => {
  expect(isDate('12-25-2025')).toBe(false);
});

test('valid hex color (3 characters)', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('valid hex color (6 characters)', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});

test('invalid hex color (non-hex characters)', () => {
  expect(isHexColor('#ghijkl')).toBe(false);
});

test('invalid hex color (missing # and starting with non-hex)', () => {
  expect(isHexColor('zbc123')).toBe(false);
});