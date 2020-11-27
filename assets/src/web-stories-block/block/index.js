/*
 * Copyright 2020 Google LLC
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
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { ReactComponent as icon } from './icon.svg';
import metadata from './block';
import edit from './edit';
import save from './save';

const { name, category, attributes } = metadata;

const settings = {
  title: __('Web Stories 2', 'web-stories'),
  description: __('Embed visual stories.', 'web-stories'),
  category,
  icon,
  keywords: [
    /* translators: block keyword. */
    __('latest', 'web-stories'),
    /* translators: block keyword. */
    __('selected', 'web-stories'),
    /* translators: block keyword. */
    __('web', 'web-stories'),
    /* translators: block keyword. */
    __('embed', 'web-stories'),
    /* translators: block keyword. */
    __('story', 'web-stories'),
  ],
  attributes,
  example: {
    // @todo: Add example that suits all three types of block
    attributes: {},
  },
  supports: {
    align: ['wide', 'full'],
  },
  edit,
  save,
  // @todo: Add transformer
};

export { metadata, name, icon, settings };
