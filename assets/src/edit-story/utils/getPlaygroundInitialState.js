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
/**
 * External dependencies
 */
import { migrate } from '@web-stories-wp/migration/src/migrate';

/**
 * Internal dependencies
 */
import { getDataFromSessionStorage } from '@web-stories-wp/playground';
import { createPage } from '../elements';
import getUniquePresets from './getUniquePresets';

// @todo Move to playground package.
function getInitialPlaygroundInitialState() {
  const sessionStorageState = getDataFromSessionStorage();

  if (sessionStorageState) {
    return sessionStorageState;
  }

  // If there are no pages, create empty page.
  const storyData = migrate([], 0);
  const pages = storyData?.pages?.length > 0 ? storyData.pages : [createPage()];

  const story = {
    storyId: 1,
    title: '',
    currentStoryStyles: {
      colors: storyData?.currentStoryStyles?.colors
        ? getUniquePresets(storyData.currentStoryStyles.colors)
        : [],
    },
    globalStoryStyles: {
      colors: [],
      textStyles: [],
    },
    autoAdvance: storyData?.autoAdvance,
    defaultPageDuration: storyData?.defaultPageDuration,
    featuredMedia: {
      id: 0,
      height: 0,
      width: 0,
      url: '',
    },
  };

  return {
    pages,
    story,
    selection: [],
    current: null, // will be set to first page by `restore`
  };
}

export default getInitialPlaygroundInitialState;
