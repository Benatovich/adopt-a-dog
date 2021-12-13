/* eslint-disable no-useless-escape */
// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('time to test renderDogDetail', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class=\"dog-detail\"><p class=\"name\">korra</p><img src=\"../assets/husky.jpeg\"><div class=\"age-and-breed\"><p class=\"age\">undefined years old</p><p class=\"breed\">husky</p></div><p class=\"description\"></p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    let dog = {
        name: 'korra',
        id: 1,
        breed: 'husky',
    };

    const actual = renderDogDetail(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'should return <div> for korra details');
});
test('time to test a renderDogCard', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href=\"./detail/?id=1\"><div class=\"dog-card\"><p>korra</p><img src=\"./assets/husky.jpeg\"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    let dog = {
        name: 'korra',
        id: 1,
        breed: 'husky',
    };

    const actual = renderDogCard(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'should return <a> tag for korra card');
});
