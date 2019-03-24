import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {recordsSelectors, questionariesSelectors} from '../state';
import {HomeScreenComponent} from './HomeScreen.component';

export const HomeScreenContainer = connect(
  (state) => ({
    lastRecord: recordsSelectors.lastRecord(state),
    lastReplies: recordsSelectors.lastReplies(state),
    questionary: questionariesSelectors.questionary(state),
  }),
  (dispatch) => bindActionCreators({

  }, dispatch)
) (HomeScreenComponent);
