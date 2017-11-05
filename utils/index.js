'use strict'
import Promise from '../lib/promise'
import config from './config'
import * as Mock from './mock'

let util = {
  isDEV: config.isDev,
  log() {
    this.isDEV && console.log('..arguments');
  }
}
export default util