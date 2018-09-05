import {readFileSync, writeFileSync} from 'fs';
import CallbackList from '../common/callback-list';

const SETTINGS_FILE_NAME = 'settings.json';
const SETTINGS_SCHEMA_VERSION = 1;

let _cache;

export let saveAll = function(settings) {
  settings.version = SETTINGS_SCHEMA_VERSION;
  _cache = settings;
  writeFileSync(SETTINGS_FILE_NAME, _cache, 'json');

  onUpdated.invoke();
};

export let readAll = function() {
  if (_cache) {
    return _cache;
  }

  try {
    _cache = readFileSync(SETTINGS_FILE_NAME, 'json');
    if (_cache.version !== SETTINGS_SCHEMA_VERSION) {
      return undefined;
    }
  } catch (_err) {
    // error is ok if file does not exist - only way to know
    return undefined;
  }
  
  return _cache;
};

export let onUpdated = new CallbackList();

export default {
  saveAll,
  readAll,
  onUpdated
};