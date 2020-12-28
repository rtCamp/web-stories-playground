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
import PropTypes from 'prop-types';
/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { updateViewSettings } from '../../utils';

/**
 * Toggle component for TinyMCE popup.
 *
 * @param fieldObj.fieldObj
 * @param fieldObj
 * @param field
 * @param fieldObj.field
 * @return {JSX.Element}
 * @class
 */
const TinyMCEToggle = ({ fieldObj, field }) => {
  const { show, readonly: isReadonly, label } = fieldObj;

  return (
    <ToggleControl
      label={!isReadonly ? label : label + __(' (Readonly)', 'web-stories')}
      checked={show}
      onChange={() => {
        updateViewSettings({
          fieldObj: fieldObj,
          field: field,
          isReadonly: isReadonly,
        });
      }}
      readonly={isReadonly}
    />
  );
};

TinyMCEToggle.propTypes = {
  fieldObj: PropTypes.shape({
    show: PropTypes.bool,
    label: PropTypes.string,
    readonly: PropTypes.bool,
  }),
  field: PropTypes.string,
};

export default TinyMCEToggle;