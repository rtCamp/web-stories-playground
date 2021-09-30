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
 * External dependencies
 */
import { __ } from '@web-stories-wp/i18n';
import styled from 'styled-components';
import { removeSessionStorage } from '@web-stories-wp/playground';
import {
  Button,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
  Icons,
} from '@web-stories-wp/design-system';
import { useCallback } from 'react';

/**
 * Internal dependencies
 */
import { useHistory, useStory } from '../../../app';
import Tooltip from '../../tooltip';
import getPlaygroundInitialState from '../../../utils/getPlaygroundInitialState';

const ButtonContainer = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

// @todo To be moved to playground package.
function Reset() {
  const {
    internal: { restore },
  } = useStory();

  const {
    actions: { clearHistory },
  } = useHistory();

  /**
   * Reset story handler.
   */
  const resetStory = useCallback(() => {
    if (
      !window.confirm(
        __('Are you sure you want to reset all changes?', 'web-stories')
      )
    ) {
      return;
    }

    removeSessionStorage();
    clearHistory();

    restore(getPlaygroundInitialState());
  }, [clearHistory, restore]);

  const label = __('Reset', 'web-stories');

  return (
    <ButtonContainer>
      <Tooltip title={label} hasTail>
        <Button
          variant={BUTTON_VARIANTS.SQUARE}
          type={BUTTON_TYPES.QUATERNARY}
          size={BUTTON_SIZES.SMALL}
          onClick={resetStory}
          disabled={false}
          aria-label={label}
        >
          <Icons.ArrowCircle />
        </Button>
      </Tooltip>
    </ButtonContainer>
  );
}

export default Reset;
