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
function savePlaygroundStory(storyPropsToSave) {
  const { content } = storyPropsToSave;
  localStorage.setItem('preview_markup', content);

  // Delay because, sometimes when the preview button is immediately clicked after adding a heavy media, the
  // media doesn't appear in preview.
  return new Promise((resolve) => setTimeout(resolve, 500));
}

export default savePlaygroundStory;
