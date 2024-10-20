// Imports used in cssHandlers
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// Import used in password handlers
import bcrypt from "bcryptjs";
// Import used in Image resizing
import Resizer from "react-image-file-resizer";

/* Merges class names using Tailwind CSS and classnames.
 * @param {...ClassValue[]} inputs - Class names or conditional expressions.
 * @returns {string} - The merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// PASSWORD HANDLERS

/* Hashes a string.
 * @param plaintext - String to be hashed.
 * @returns corresponding hash value.
 */
export async function hash(plaintext: string): Promise<string> {
  const saltRounds = Number(process.env.BCRYPT_SALTROUNDS);
  if (!saltRounds) throw new Error("env variable missing: BCRYPT_SALTROUNDS");
  const hash = await bcrypt.hash(plaintext, saltRounds);
  return hash;
}

/* Compares plaintext to hash.
 * @param input - plaintext.
 * @param hash - hash value to be compared against.
 * @returns `true` if hash is hashed input, otherwise `false`.
 */
export async function compareHash(
  input: string,
  hash: string
): Promise<boolean> {
  const isValid = await bcrypt.compare(input, hash);
  return isValid;
}

/* Parses Date object to human readable format
 * @param _date - Date object to be parsed.
 * @returns string representation of the input new Date() object
 */
export function dateShort(_date: Date): string {
  return new Intl.DateTimeFormat("en-GB").format(_date);
}

// DATE HANDLERS

/**Checks if Date has passed
 * @param _date - Date object to be checked.
 * @returns `true` if Date has passed, otherwise `false`.
 */
export function isDatePassed(_date: Date): boolean {
  if (new Date() > _date) return true;
  else return false;
}

/**Calculates the difference in hours between two Date objects.
 * @param _dateA - The first Date object.
 * @param _dateB - The second Date object to be subtracted.
 * @returns The difference in hours (positive if _dateA is later than _dateB, negative otherwise).
 */
export function hoursDifference(_dateA: Date, _dateB: Date): number {
  return (_dateA.getTime() - _dateB.getTime()) / 3600000;
}

// INPUT VALIDATORS

/**Validates an email address using a regular expression.
 * @param email - The email address to validate.
 * @returns Returns "invalid email" if the email is invalid, otherwise returns null.
 */
export function emailValidator(email: string): string | null {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) return "invalid email";
  else return null;
}

/**Validates password
 * @param password - The password to validate.
 * @returns Returns validation error if the password is invalid, otherwise returns null.
 */
export function passwordValidator(password: string, confirmPassword?: string) {
  if (!password) {
    return "Password can't be empty";
  } else if (password.length < 5) {
    return "Password must be at least 5 characters long";
  } else if (confirmPassword && password !== confirmPassword) {
    return "Passwords do not match";
  } else return "";
}

/**Validates an name.
 * @param name - The string to validate.
 * @returns Returns validation error if the name is invalid, otherwise returns null.
 */
export function nameValidator(name: string) {
  const re = /[a-zA-Z]/;
  if (!name) {
    return "Name field can't be empty";
  } else if (name.length < 3) {
    return "Name too short";
  } else if (!re.test(name)) {
    return "Names should contain alphabets only";
  } else return "";
}

/**Camel case a string.
 * @param str - The string to camel case.
 * @returns string in camel case.
 */
export function camelCase(str: string) {
  // Using replace method with regEx
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

/**Trancates prose to given limit
 * @param _prose - string to truncate
 * @param limit - charater limit after which truncation will occur
 * @returns truncated prose if prose exceeds limit, otherwise prose
 */
export function truncateStr(_prose: string, limit: number) {
  if (_prose.length <= limit) return _prose;
  let sliceIndex = limit;
  while (sliceIndex < _prose.length && /\b/.test(_prose[sliceIndex]))
    sliceIndex++;
  return _prose.slice(0, sliceIndex) + " ...";
}

/**Capitalizes the first letter of every word in a given sentence.
 *
 * This function splits the input sentence into individual words, capitalizes the
 * first letter of each word, ensures the rest of the word is in lowercase, and
 * then joins the words back into a single sentence.
 *
 * @param sentence - The input sentence that you want to transform.
 * @returns {string} - A new string where the first letter of each word is capitalized,
 *                     and the remaining letters are in lowercase.
 *
 * @example
 * // Capitalizes the first letter of every word in the sentence
 * capitalizeInitialLetters("hello world from JavaScript");
 * // Returns: "Hello World From Javascript"
 *
 * @example
 * // Handles mixed case and extra spaces
 * capitalizeInitialLetters("hElLo    WOrLd");
 * // Returns: "Hello World"
 *
 * @example
 * // Works with a single word
 * capitalizeInitialLetters("javascript");
 * // Returns: "Javascript"
 */
export function titleCase(sentence: string): string {
  return sentence
    .split(" ") // Split the sentence into an array of words using spaces
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter, lowercase the rest
    )
    .join(" "); // Join the transformed words back into a single string with spaces
}

// URL HANDLERS

/**Returns the canonical URL based on the current environment.
 * @returns {string} The canonical URL.
 */
export function getCanonicalURL(): string {
  const nodeEnv = process.env.NODE_ENV || "development";

  if (nodeEnv === "production") {
    return "https://aaron-phi.vercel.app"; // live server
  } else if (nodeEnv === "development") {
    return "http://localhost:3000"; // development server
  } else {
    return "http://localhost:3000"; //other environments (e.g., staging, testing) as needed
  }
}

// FILE HANDLERS

/**Resizes an image file to the specified dimensions and format.
 *
 * This function uses the `Resizer.imageFileResizer` utility to resize the input image file to
 * a width and height of 600px, converting the image to the PNG format. The quality of the
 * resized image is set to 100 (the highest quality), and no rotation is applied.
 *
 * @param {File} file - The original image file to be resized.
 * @returns {Promise<any>} - A promise that resolves to the resized image. The resized image
 *                            can be returned as a file, blob, or base64-encoded string depending
 *                            on the specified encoding type (in this case, "file").
 *
 * Example usage:
 * ```typescript
 * const resizedImage = await resizeImageFile(file);
 * console.log(resizedImage); // Logs the resized image file.
 * ```
 *
 * The function internally does the following:
 * 1. Sets the target dimensions to 600px by 600px.
 * 2. Converts the image to PNG format.
 * 3. Adjusts the image quality to 100%.
 * 4. Applies no rotation to the image (0 degrees).
 * 5. Returns the resized image as a `File` object.
 */
export function resizeImageFile(file: File): Promise<any> {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      600, // Desired width
      600, // Desired height
      "png", // Output format
      80, // Image quality (0 to 100)
      0, // Rotation angle (in degrees)
      (uri) => {
        resolve(uri); // Resolves the resized image
      },
      "file" // Encoding type: base64 | blob | file
    );
  });
}
