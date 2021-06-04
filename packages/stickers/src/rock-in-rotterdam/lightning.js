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
import { _x } from '@web-stories-wp/i18n';
import PropTypes from 'prop-types';

const title = _x('Lightning', 'sticker name', 'web-stories');

function Lightning({ style }) {
  return (
    <svg
      style={style}
      viewBox="0 0 56 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M25.7504 24.4411L4.88948 41.6947L28.8145 14.2799L30.8932 20.0431L31.1337 20.7099L31.6811 20.2597L51.3673 4.07143L28.1283 31.0716L26.5544 24.7064L26.3635 23.934L25.7504 24.4411Z"
        stroke="#F8754C"
      />
    </svg>
  );
}

Lightning.propTypes = {
  style: PropTypes.object,
};

export default {
  aspectRatio: 56 / 46,
  svg: Lightning,
  title,
};
