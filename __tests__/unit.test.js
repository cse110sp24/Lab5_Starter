// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('check email true', () => {
  expect(isEmail("bmdunn@ucsd.edu")).toBe(true);
});

test('check email false', () => {
  expect(isEmail("bmdunn@ucsd")).toBe(false);
});

test('check date true', () => {
  expect(isDate("12/2/2004")).toBe(true);
});

test('check date false', () => {
  expect(isDate("12/2/204")).toBe(false);
});