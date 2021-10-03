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

const mockFetch = () => Promise.resolve({});

export default {
  getStoryById: mockFetch,
  getDemoStoryById: mockFetch,
  saveStoryById: mockFetch,
  autoSaveById: mockFetch,
  getMedia: mockFetch,
  uploadMedia: mockFetch,
  updateMedia: mockFetch,
  deleteMedia: mockFetch,
  getLinkMetadata: mockFetch,
  getAuthors: mockFetch,
  getCurrentUser: mockFetch,
  updateCurrentUser: mockFetch,
  getCustomPageTemplates: mockFetch,
  addPageTemplate: mockFetch,
  deletePageTemplate: mockFetch,
  getHotlinkInfo: mockFetch,
  getTaxonomies: mockFetch,
  getTaxonomyTerm: mockFetch,
  createTaxonomyTerm: mockFetch,
};
