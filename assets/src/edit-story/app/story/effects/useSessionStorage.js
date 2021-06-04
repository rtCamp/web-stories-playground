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
import { useCallback, useEffect } from 'react';
/**
 * Internal dependencies
 */
import { saveDataOnSessionStorage } from '../utils/sessionStore';

function useSessionStorage({ current, selection, story, pages }) {
  const setSessionStorage = useCallback(() => {
    const activePage = pages.length ? pages[0] : {};

    if (!story.globalStoryStyles) {
      return;
    }

    const storyDataForSession = {
      current,
      selection,
      story: { ...story },
      pages: [activePage],
    };

    if (current) {
      saveDataOnSessionStorage(storyDataForSession);
    }
  }, [current, selection, story, pages]);

  useEffect(() => {
    setSessionStorage();
  }, [setSessionStorage]);
}

export default useSessionStorage;
