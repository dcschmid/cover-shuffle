import { shuffleArray } from "@utils/share/shuffleArray";

/**
 * Function to get a random question from the given array of albums.
 * @param {object[]} albums - An array of albums
 * @returns {object} An object containing a random question and the album it belongs to
 */
export function getRandomQuestion(albums: any[]) {
  // Shuffle the albums array to randomize the questions order
  const shuffledAlbums = shuffleArray(albums);

  // Get the first element of the shuffled array (the random album)
  const randomAlbum = shuffledAlbums[0];

  // Get a random question from the questions array of the random album
  const randomQuestionIndex = Math.floor(
    Math.random() * randomAlbum.questions.length,
  );
  const randomQuestion = randomAlbum.questions[randomQuestionIndex];

  // Return the random question and the random album
  return { randomQuestion, randomAlbum };
}
