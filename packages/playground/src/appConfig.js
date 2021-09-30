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
 * Internal dependencies
 */
import getCurrentUrl from './utils/getCurrentUrl';

const url = getCurrentUrl();

export default {
  id: 'web-stories-editor',
  config: {
    autoSaveInterval: 60,
    isRTL: false,
    locale: {
      locale: 'en-US',
      dateFormat: 'F j, Y',
      timeFormat: 'g:i a',
      gmtOffset: '0',
      timezone: '',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      weekdays: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdaysInitials: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      weekStartsOn: 1,
    },
    allowedFileTypes: [
      'gif',
      'jpe',
      'jpeg',
      'jpg',
      'm4v',
      'mp4',
      'png',
      'webm',
    ],
    allowedTranscodableMimeTypes: [
      'video/3gpp',
      'video/3gpp2',
      'video/MP2T',
      'video/mp4',
      'video/mpeg',
      'video/ogg',
      'video/quicktime',
      'video/webm',
      'video/x-flv',
      'video/x-h261',
      'video/x-h263',
      'video/x-m4v',
      'video/x-matroska',
      'video/x-mjpeg',
      'video/x-ms-asf',
      'video/x-msvideo',
      'video/x-nut',
    ],
    allowedImageFileTypes: ['gif', 'jpe', 'jpeg', 'jpg', 'png'],
    allowedImageMimeTypes: ['image/png', 'image/jpeg', 'image/gif'],
    allowedMimeTypes: {
      image: ['image/png', 'image/jpeg', 'image/gif'],
      audio: [],
      video: ['video/mp4', 'video/webm'],
    },
    postType: 'web-story',
    storyId: 145,
    dashboardLink: '',
    dashboardSettingsLink: '',
    assetsURL: `${url}assets/`,
    cdnURL: 'https://wp.stories.google/static/main/',
    maxUpload: 536870912,
    isDemo: false,
    capabilities: {
      hasPublishAction: false,
      hasAssignAuthorAction: false,
      hasUploadMediaAction: false,
    },
    api: {
      users: '',
      currentUser: '',
      stories: '',
      pageTemplates: '',
      media: '',
      link: '',
      statusCheck: '',
      metaBoxes: '',
      storyLocking: '',
    },
    metadata: {
      publisher: {
        name: 'WordPress',
        logo: null,
      },
    },
    postLock: {
      interval: 150,
      showLockedDialog: true,
    },
    version: '1.9.0-alpha.0',
    nonce: '15d9ae5db7',
    encodeMarkup: true,
    metaBoxes: {
      normal: [],
      advanced: [],
      side: [],
    },
    ffmpegCoreUrl:
      'https://wp.stories.google/static/main/js/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js',
  },
  flags: {
    enableSVG: false,
    enablePostLocking: false,
    enableBulkVideoOptimization: false,
    enableChecklistCompanion: true,
    enableRightClickMenus: false,
    enableQuickActionMenus: false,
    enableStickers: false,
    enableExperimentalAnimationEffects: false,
    showTextAndShapesSearchInput: false,
    showElementsTab: false,
    incrementalSearchDebounceMedia: false,
  },
  publicPath: `${url}`,
};
