import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ExperimentCardList from './index';
import LayoutWrapper from '../LayoutWrapper';

const experiments = [{
  title: 'Sample experiment',
  description: 'This is an example experiment',
  subtitle: '',
  slug: 'snooze-tabs',
  survey_url: 'https://example.com',
  created: '2010-06-21T12:12:12Z',
  modified: '2010-06-21T12:12:12Z'
}, {
  title: 'Another sample',
  description: 'This is a different experiment',
  subtitle: 'A subtitle',
  slug: 'pulse',
  survey_url: 'https://example.com',
  created: '2010-06-21T12:12:12Z',
  modified: '2010-06-21T12:12:12Z'
}];

const baseProps = {
  experiments,
  hasAddon: false,
  enabled: false,
  isFirefox: true,
  isMinFirefox: true,
  eventCategory: 'storybook',
  getExperimentLastSeen: () => Date.now(),
  isAfterCompletedDate: () => false,
  isExperimentEnabled: () => false,
  sendToGA: action('sendToGA'),
  navigateTo: action('navigateTo'),
  installed: {},
  clientUUID: '867-5309'
};

storiesOf('ExperimentCardList', module)
  .addDecorator(story =>
    <div className="blue" style={{ padding: 10 }} onClick={action('click')}>
      <div className="stars" />
      <LayoutWrapper flexModifier="card-list">
        {story()}
      </LayoutWrapper>
    </div>
  )
  .add('base state', () =>
    <ExperimentCardList
      {...baseProps}
    />
  );