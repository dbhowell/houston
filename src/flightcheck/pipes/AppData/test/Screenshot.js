/**
 * flightcheck/pipes/AppData/test/screenshot.js
 * Checks appdata has screenshot key
 * @flow
 *
 * @exports {Pipe} - Checks appdata has screenshot key
 */

import Parseable from 'flightcheck/file/parsable'
import Pipe from 'flightcheck/pipes/pipe'

/**
 * AppDataChangelog
 * Checks appdata has screenshot key
 *
 * @extends Pipe
 */
export default class AppDataScreenshot extends Pipe {

  /**
   * code
   * Checks appdata has screenshot key
   *
   * @param {Parseable} f - The AppData file
   * @returns {Void}
   */
  async code (f: Parseable) {
    const file = await f.parse()

    console.log(file.component);
  }
}
