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
import { render } from '@wordpress/element';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import '../../../node_modules/@wordpress/components/build-style/style.css';
import name from './store/name';
import WebStoryMCEStore from './store';
import WebStoriesModal from './containers/Modal';
import { webStoriesData } from './utils/globals';
import { setFields } from './utils/';

const { _ } = window;

/**
 * Add button to tinyMCE editor.
 */
(function () {
  // eslint-disable-next-line no-prototype-builtins
  if (!_.hasOwnProperty('pluck')) {
    _.pluck = _.map;
  }

  /**
   * Render tinyMCE settings modal.
   *
   * @class
   */
  const RenderModal = () => {
    const target = document.getElementById('web-stories-tinymce');

    if (target) {
      render(<WebStoriesModal />, target);
    }
  };

  /**
   * Subscribe to state change in store.
   */
  WebStoryMCEStore.subscribe(() => RenderModal());
  //eslint-disable-next-line no-undef
  tinymce.PluginManager.add('web_stories', function (editor) {
    editor.addButton('web_stories', {
      text: __('Web Stories', 'web-stories'),
      image: webStoriesData.icon,
      onclick: function () {
        dispatch(name).setEditor(editor);
        dispatch(name).toggleModal(true);
      },
    });
  });
})();
