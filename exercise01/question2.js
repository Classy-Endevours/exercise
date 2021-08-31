'use strict';
/**
 * ===== Question 2 [8 points] =====
 * The variable colorMap contains a Map
 * - the keys in the folder are names of colours,
 * - the values are strings containing the hexadecimal code of the colour.
 *
 * The hexadecimal code of a colour is as follows: '#rrggbb',
 * where rr, gg, bb are two hexadecimal digits that represent the red, green and blue component respectively.
 * contain the red, green and blue component of a colour.
 *
 * The variable colorObject is a small object that represents a colour.
 *
 * The variable colorName contains the name of a colour.
 *
 * Solve subquestions 2.1 to 2.3 below.
 */

const colorMap = new Map([
  ['Aqua', '#00FFFF'],
  ['DarkGreen', '#006400'],
  ['Maroon', '#800000'],
  ['LawnGreen', '#7C7C00'],
  ['Fuchsia', '#FF00FF']
]);

const colorObject = {
  name: 'FloralWhite',
  hexCode: '#FFFAF0'
};

const colorName = 'Aqua';

// 2.1 Add the colour as defined in colorObject to colorMap

/* 2.1 Solution */

// 2.2 Change colorObject so that the object's properties contain the
// data for the colour with the name from the variable colorName.
// Get the data from colorMap. You may assume that the colour is present in the colorMap.

/* 2.2 Solution */

// 2.3 The giveNamesOfColorsWithGreenComponent(colorMap) function should return an
// array with the names of all colours from colorMap that have a green component.
// component, i.e. the digits for the green component are different from '00'.

/* 2.3 Solution */
function giveNamesOfColorsWithGreenComponent(colorMap) {}

/****** Example of output ******/
console.log(colorMap);
// {"Aqua" => "#00FFFF", "DarkGreen" => "#006400", "Maroon" => "#800000", "LawnGreen" => "#7C7C00", "Fuchsia" => "#FF00FF", "FloralWhite" => "#FFFAF0"}
console.log(colorObject);
// {name: "Aqua", hexCode: "#00FFFF"}
console.log(
  `Colors with a touch of green: ${giveNamesOfColorsWithGreenComponent(
    colorMap
  ).join(' - ')}`
);
// Colors with a touch of green: Aqua - DarkGreen - LawnGreen - FloralWhite
