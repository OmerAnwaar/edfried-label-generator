import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationActions } from 'react-navigation'; 
import { Question } from './Question.js';
import { Price } from './Price.js';
import { rootAnswers, getAnswerQuestions, getRecordCode } from '../questions';

export class CreateRecordScreenComponent extends React.Component {
  static propTypes = {
    navigation: PropTypes.any.isRequired,
    createRecord: PropTypes.func.isRequired,
  };

  static navigationOptions = {
    title: 'Product Label Generator',
  };

  state = {
    question: null,
    questions: [],
    answers: [],
    price: 0,
  };

  handleAnswer = (answer) => {
    const answers = [...this.state.answers, answer];
    const [question, ...questions] = [...this.state.questions, ...getAnswerQuestions(answer)];
    this.setState({ answers, question, questions });
  };

  handlePriceChange = (price) => {
    this.setState({ price });
  };

  handleSubmit = () => {
    this.props.createRecord(this.state.answers, this.state.price);
    this.props.navigation.dispatch(NavigationActions.back()); 
  };

  componentDidMount() {
    const answer = rootAnswers[0];
    const answers = [answer];
    const [question, ...questions] = getAnswerQuestions(answer);
    this.setState({ answers, question, questions });
  }

  render() {
    console.log('ProductLabelScreen', this.state);
    const { question, price } = this.state;
    return question ? (
      <Question question={question} onAnswer={this.handleAnswer}/>
    ) : (
      <Price price={price} onChange={this.handlePriceChange} onSubmit={this.handleSubmit}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});