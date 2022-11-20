// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
/*
Four tests for isPhoneNumber()
*/

test('tests valid phone number without parentheses (should return true)', () => {
    expect(functions.isPhoneNumber('619-805-2919')).toBe(true);
});

test('tests valid phone number with parentheses (should return true)', () => {
    expect(functions.isPhoneNumber('(619)-805-2919')).toBe(true);
});

test('tests empty string (should return false)', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
});

test('tests long number without dashes (should return false)', () => {
    expect(functions.isPhoneNumber('1232323423423423')).toBe(false);
});

/*
Four tests for isPhoneNumber()
*/

test('tests valid email (should return true)', () => {
    expect(functions.isEmail('alvalenc@ucsd.edu')).toBe(true);
});

test('test long, yet valid email (should return true)', () => {
    expect(functions.isEmail('albertovalenciaaaaaknldkfnoskdnfobsndofigbosad@gmail.com')).toBe(true);
});

test('tests empty string (should return false)', () => {
    expect(functions.isEmail('')).toBe(false);
});

test('tests email with no @ tag (should return false)', () => {
    expect(functions.isEmail('joe.mama')).toBe(false);
});

/*
Four tests for isStrongPassword()
*/

test('tests password using letters,numbers, and underscores (should return true)', () => {
    expect(functions.isStrongPassword('joe123_duhhsjd1')).toBe(true);
});

test('tests minimum length password (should return true)', () => {
    expect(functions.isStrongPassword('j123')).toBe(true);
});

test('tests outside of the range (should return false)', () => {
    expect(functions.isStrongPassword('joe')).toBe(false);
});

test('tests invalid character (should return false)', () => {
    expect(functions.isStrongPassword('joemama!')).toBe(false);
});

/*
Four tests for isDate()
*/

test('tests valid date with two digits (should return true)', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
});

test('tests valid date with 1 digit (should return true)', () => {
    expect(functions.isDate('1/20/2022')).toBe(true);
});

test('tests empty string (should return false)', () => {
    expect(functions.isDate('')).toBe(false);
});

test('tests longer than four digit year (should return false)', () => {
    expect(functions.isDate('11/20/20233')).toBe(false);
});

/*
Four tests for isColor()
*/

test('valid six length hex code color (should return true)',() =>{
    expect(functions.isHexColor('#FF5733')).toBe(true);
});

test('valid three length hex code color (should return true)',() =>{
    expect(functions.isHexColor('#f0f')).toBe(true);
});

test('invalid hex code--empty string (should returnt false)' ,() =>{
    expect(functions.isHexColor('')).toBe(false);
});

test('random hex code with four numbers (should returnt false)',() =>{
    expect(functions.isHexColor('#f0f2')).toBe(false);
});
