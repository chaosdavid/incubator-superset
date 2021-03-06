/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/translation';
import { nonEmpty } from '../validators';

export default {
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['series'],
        ['metric'],
        ['adhoc_filters'],
        ['row_limit', null],
      ],
    },
    {
      label: t('Options'),
      expanded: true,
      controlSetRows: [
        ['size_from', 'size_to'],
        ['rotation'],
        ['color_scheme', 'label_colors'],
      ],
    },
  ],
  controlOverrides: {
    series: {
      validators: [nonEmpty],
      clearable: false,
    },
    row_limit: {
      default: 100,
    },
    size_from: {
      default: 10,
    },
    size_to: {
      default: 70,
    },
  },
};
