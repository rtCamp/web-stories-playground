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
import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('../../../utils/globals', () => ({
  forEach: jest.fn(),
  isEmpty: jest.fn(),
}));

/**
 * Internal dependencies
 */
import TinyMCEToggle from '../../../components/controls/Toggle';

describe('compare TinyMCEToggle snapshots', () => {
  it('tinyMCEToggle control with readonly attrs true', () => {
    const props = {
      fieldObj: {
        show: true,
        readonly: true,
        label: 'Test Control',
      },
      field: '',
    };

    const tree = renderer.create(<TinyMCEToggle {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('tinyMCEToggle control with readonly attr false', () => {
    const props = {
      fieldObj: {
        show: true,
        readonly: false,
        label: 'Test Control',
      },
      field: '',
    };

    const tree = renderer.create(<TinyMCEToggle {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});