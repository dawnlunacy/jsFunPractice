const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(kitten => kitten.color === 'orange').map(kitten => kitten.name);
    return result;

    // Annotation:
    // Go through the array - map will return an array
    // Look at the property of color 
    // if it is oarnge return it
    
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a,b) =>  b.age - a.age);
    return result;
  
    // Annotation:
    // This question wants you to return oldest to youngest. 
    // sort by the property of age 
    // high to low is b - a 
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(kitty => {
      kitty.age = kitty.age + 2;
      return kitty;
    });
    return result;

    // annotations: 
    //map through all of the kitties 
    // isolate age and add 2 years
    // return the entire kitty object  

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, currentClub) => {
      currentClub.members.forEach(member => {
        if (!acc[member]) {
          acc[member] = [currentClub.club];
        }
        else {
          acc[member].push(currentClub.club);
        }
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // The original data is an array of objects with a key of club to a string
    // and a key of members to an array of name of members
    // so I would like to reduce the original data since I want an object back
    // I need to see if there is a key for each persons name - 
    // the first time we see the persons name we know there will not be a key since
    // at that time our initial value will just be an empty object
    // if there is not a key that is their name, we need to make it and set it 
    // to an array with the club that they are inside
    // otherwise push the name of the club where their name also appears in the members
    // into the array that is associated with the key of their name 

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(mod => {
      return {
        mod: mod.mod,
        studentsPerInstructor: mod.students / mod.instructors
      };
    });
    return result;

    // Annotation:
    // We need to return an array that is the same length as our original array 
    // so I am thinking map through and return an object 
    // that includes the mod - this info is already provied - 
    // we need to return a second key of studentsPerInstructor
    // which means we will need to divide the students key 
    // by the instructors key 
    // and this will be our value for studentsPerInstructor
    // we will then return that entire object. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(cake => { 
      return {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      };
    });
    return result;

    // Annotation:
    // We want an array that is the same length as the original
    // so we can use map 
    // we want to return an object back for each
    // that includes only the flavor key and the inStock key
    // note that in the original data set the key is 
    // cakeFlavor vs just flavor

  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
    return result;

    // Annotation:
    // Notice that when stock in 0 , the cakes will not be in stock
    // So we know we want an array that is a smaller length than an original 
    // so we can use filter to filter out the cakes that have a property of 
    // inStock greater than 0 
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, currentCake) => {
      acc += currentCake.inStock;

      return acc;
    }, 0);
    return result;

    // Annotation:
    // For total inventory of how many cakes are in stock 
    // Go through every object in the array 
    // and add up the totals

  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, currentCake) => {
      currentCake.toppings.forEach(topping => {
        if(!acc.includes(topping)) {
          acc.push(topping);
        } else {
          return;
        }
      }); 

      return acc;
    }, []);
    return result;

    // Annotation:
    // Iterate over every cake
    // iterate over the toppings
    // Start with an empty array
    // if the array does not include the topping
    // then push it into the array
    // otherwise ignore it
    
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((acc, currentCake) => {
      currentCake.toppings.forEach(topping => {
        if(!acc[topping]) {
          acc[topping] = 1;
        } else {
          acc[topping] +=1;
        }
      });

      return acc;
    }, {});
    return result;

    // Annotation:
    // Iterate over each cake
    // iterate over each topping
    // start with an empty object
    // if the empty does not have a key for the topping
    // then make it and asign it to 1 
    // otherwise add one to the key that is that topping
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => classroom.program === 'FE');
    return result;

    // Annotation:
    // filter through the array and return only the FE program
    // check program and ensure it is equal to 'FE'
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((acc, currentClassroom) => {
      if (currentClassroom.program === 'FE') {
        acc.feCapacity += currentClassroom.capacity;
      } else if (currentClassroom.program === 'BE') {
        acc.beCapacity += currentClassroom.capacity;
      }
      return acc;
    }, {
      feCapacity: 0,
      beCapacity: 0
    });

    return result;

    // Annotation:
    // we will need an obect for a starting value
    // we can start with feCapacity as a key assigned to 0
    // and we can start with beCapacity as a key assign to 0
    // we should then interate over each classroom and check each program
    // if it is equal to 'FE' then find feCapacity and add the current value
    // with the current classrooms capacity
    // repeat for be

  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a,b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // sort through each classroom 
    // organize least to great (a-b) for the capacity of classroom
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.filter(book => book.genre !== 'Horror' && book.genre !== 'True Crime').map(book => book.title);
    return result;

    // Annotation:
    // Iterate over each book 
    // the length of the returning array should not be the same as the starting array
    // if the genre is not 'Horror' or 'True Crime'
    // note that it need to be an && operator and not an or operator
    // if it is an or operator, then it will always pass as true for the genre
    // note here that filter returns the entire current element
    // this is why we must map over the books and return only the titles
    // then return the title

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:
    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce((acc, currentBook) => {
      if (currentBook.published >= 1990) {
        acc.push({
          title: currentBook.title,
          year: currentBook.published
        });
      }
      
      return acc;
    }, []);
    return result;

    // Annotation:
    // answer will need to be an array of unique objects
    // Iterate over each book
    // Final Array will not be the same length as starting array
    // if the book was published between 1990 or above
    // then return an obect
    // with a key of title
    // and a key of year (which is a unique property not in the original info)
    // push this object into the array which is your final answer
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.map(place => {
      let totalTemp = place.temperature.high + place.temperature.low;
      return totalTemp / 2;
    });
    return result;

    // Annotation:
    // For this we will need to iterate over every location
    // to find the avg temp we willl need to 
    // dig into the temperature property
    // and add high to low and then divide by 2
    // our final answer is an array that is the same lenght as the original
    // so we can map over the original data and
    // return only the avg temp
    
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.reduce((acc, currentPlace) => {
      if(currentPlace.type.includes('sunny')) {
        let sentence = `${currentPlace.location} is ${currentPlace.type}.`;
        acc.push(sentence);
      }
      return acc;
    }, []);

    return result;
    

    // Annotation:
    // The original array is a different length than the array we will be returning
    // because we want a custom array back
    // reduce will be easiest
    // with the initial value being an empty array
    // iterate over each location
    // check if the type of weather is equal to 'sunny'
    //if it is then push in a custom sentence by
    // concatenating the location with is 'type' which will be 'sunny or mostly sunny'
    // return the array
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.reduce((acc, currentPlace) => {
      if (currentPlace.humidity > acc.humidity) {
        acc = currentPlace;
      } else {
        return acc;
      }
      return acc;
    }, {humidity:0});
    return result;

    // Annotation:
    // Iterate over each day
    // our return value will be a singular object
    // we will need to be able to compare a high humidity point to 
    // each day we iterate over
    // if that humidity is higher
    // then replace the high humidity point 
    // at the end return the singular object with the highest humidity point
    

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = nationalParks.reduce((acc, currentPark) => {
      if (currentPark.visited) {
        acc.parksVisited.push(currentPark.name);
      } else {
        acc.parksToVisit.push(currentPark.name);
      }

      return acc;
    }, {
      parksToVisit: [],
      parksVisited: []
    });
    return result;

    // Annotation:
    // The original data is an array of objects 
    // The final answer is a single object
    // We can use reduce to create this final object
    // we can start the object with 
    // parksToVisit and parksVisited and the keys
    // and empty arrays as their values
    // when we reduce over the original dataset
    // we will check the key of visited
    // if true then push the name of that park
    // into parksVisited array 
    // else push the name of the park 
    // into parksToVisit array
    // return the final object

  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = nationalParks.map(currentPark => {
      return {
        [currentPark.location]: currentPark.name
      };
    });
    return result;

    // Annotation:
    // The original dataset is an array of objects
    // the answer we want back in also an array of objects the same length, 
    // we can map over the original dataset
    // and we can return an object with 
    // the key as the current iteratation's location 
    // assighed to the current iteration's name

    // if you are having issues with this one 
    // console.log the result 
    // for the key if it is not it brackets it will look for a variable since
    // the key needs to be a string and it is not
    // but if we put the value as bracket notation
    // the it will interpret that we want the datatype to be
    // an array
    
    


  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((acc, currentPark) => {
      currentPark.activities.forEach(activity => {
        if (!acc.includes(activity)) {
          acc.push(activity);
        } else {
          return;
        }
      });

      return acc;
    }, []);
    return result;

    // Annotation:
    // The original dataset is an array of objects
    // we want make an array that is a different length
    // we can reduce over the data and set our initialValue to
    // an empty array
    // for every current iteration we will need to 
    // target the activities key which is an array
    // and forEach over each activity
    // we can check if our acc/initialValue includes this key
    // and if not we can push it into our acc/initialValue
    // be sure to return the acc 
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((totalBeers, currentBrewery) => {
      totalBeers += currentBrewery.beers.length;
      return totalBeers;
    }, 0);
    return result;



    // Annotation:
    // We want to return the total count of breweries 
    // we have an array of objects with a key a beers
    // which is an array of all the beers
    // We need to iterate over each brewery and look at the beers property
    // then take the length of each and add it together 
    // which means reduce could be a great option to get the total
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map(currentBrewery => {
      return {
        name: currentBrewery.name,
        beerCount: currentBrewery.beers.length
      };
    });
    return result;

    // Annotation:
    // We start with an array of objects and want to 
    // get back an array of objects the same length
    // each object is a custom object with the name of the brewery
    // which can be found at the key of name
    // and the beerCount which we can custom make and 
    // assign it to beers.length for each brewery
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((acc, currentBrewery) => {
      if(acc === 0) {
        acc = currentBrewery.beers[0];
      }
      currentBrewery.beers.forEach(beer => {
        if(beer.abv > acc.abv) {
          acc = beer;
        }
      });
      return acc;
    },0);
    return result;

    // Annotation:
    // Our original data is an array of objects
    // We want to return a single object (reduce)
    // we want to iterate over each beer is the beers array for
    // each brewery
    // we want to compare the abv and if it higher that the one we have 
    // set for the acc in our reduce (we will want to assign our acc to 0 to start)
    // then if the acc is 0 assign it to our first beer in the first brewery for comparison
    // if it is higher then replace the acc
    // otherwise skip over it 
    // return the acc 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map(instructor => {
      return {
        name: instructor.name,
        studentCount: cohorts.find(cohort => cohort.module === instructor.module).studentCount
      };
    });
    return result;
    // cohort.module === instructors.module).studentCount
    // Annotation:
    // We want to return an array the same length as the instructors array
    // We want to return a unique object
    // the link between the datasets is the module 
    // we will map over the instructors dataset
    // we can access the name right there 
    // for the key of studentCount we will look at the module then loop over the cohorts module to 
    // (NOTE: FILTER CREATES A NEW ARRAY SO WE JUST NEED FIND)
    // find a match for the module
    // this is where you will be able to access the studentCount 
    // return an object with the info you want

  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((acc, currentInstructor) => {
      if(!acc[currentInstructor.name]) {
        acc[currentInstructor.name] = [currentInstructor.module];
      }
      currentInstructor.teaches.forEach(topic => {
        cohorts.forEach(currentCohort => {
          if(currentCohort.curriculum.includes(topic) && !acc[currentInstructor.name].includes(currentCohort.module)) {
            acc[currentInstructor.name].push(currentCohort.module);
            acc[currentInstructor.name].sort((a,b) => a - b);
          } 
        });
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // So we want to return ONE object which makes me think reduce
    // iterate over all the instructors first to make a key of their names
    // and assign it to an array with the module number that is already given to you
    // then while you are still on that instructor
    // loop through the teaches array and for each one
    // compare that key to a loop through the cohorts where
    // you loop through the curriculum and if if there is a match
    // then push the number for the module from cohorts into that key of 
    // the current teacher you are on
    // ensure there are no duplicates
    // and sort my lowest mod number to highest mod number
    // return the acc 
    // 
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = instructors.reduce((acc, currentInstructor) => {
      currentInstructor.teaches.forEach(topic => {
        if(!acc[topic]) {
          acc[topic] = [currentInstructor.name];
        } else {
          acc[topic].push(currentInstructor.name);
        }
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // We want to return a singular object with a key of curriculum topic
    // so we can reduce over the instructors
    // we can then forEach over teaches
    // check to see if there is a key for that topic 
    // and if not make one and assign it to an array with the name of the current teacher in it
    // if it does exist then push the name of the teacher
    // check for duplicate names before pushing
    // return the object
    // note: I don't even think you will need the second data-type for this one. 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
