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

const title = _x('Play Button', 'sticker name', 'web-stories');

function PlayButton({ style }) {
  return (
    <svg
      style={style}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.5 99C77.2858 99 99 77.2858 99 50.5C99 23.7142 77.2858 2 50.5 2C23.7142 2 2 23.7142 2 50.5C2 77.2858 23.7142 99 50.5 99ZM50.5 101C78.3904 101 101 78.3904 101 50.5C101 22.6096 78.3904 0 50.5 0C22.6096 0 0 22.6096 0 50.5C0 78.3904 22.6096 101 50.5 101Z"
        fill="#264156"
      />
      <path d="M62 50.5L44.75 60.4593V40.5407L62 50.5Z" fill="#264156" />
    </svg>
  );
}

PlayButton.propTypes = {
  style: PropTypes.object,
};

export default {
  aspectRatio: 101 / 101,
  svg: PlayButton,
  title,
};
