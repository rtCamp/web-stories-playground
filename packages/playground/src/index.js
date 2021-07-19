/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export { default as isPlayground } from './utils/isPlayground';
export { default as savePlaygroundStory } from './utils/savePlaygroundStory';
export { default as getCurrentUrl } from './utils/getCurrentUrl';
export { default as getDummyMedia } from './utils/getDummyMedia';
export {
  getDataFromSessionStorage,
  saveDataOnSessionStorage,
  removeSessionStorage,
} from './utils/sessionStorage';
export { default as useSessionStorage } from './effects/useSessionStorage';
export { default as appConfig } from './appConfig';
