import React, { Component } from 'react'

import AddOption from './components/AddOption';
import Options from './components/Options';
import Header from './components/Header';
import Action from './components/Action';

import OptionModal from './components/OptionModal'

export default class IndecisionApp extends React.Component {

    state = {
        title: 'Indecision',
        subtitle: 'Put your life in the hands of a computer',
        options: [],
        selectedOption: undefined
    }

    handleAddOption = option => {

        if (!option) {
            return 'Enter a valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: [...prevState.options, option] }));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = option => {
        this.setState(prevState => ({ options: prevState.options.filter(o => o !== option) }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    componentWillMount() {

    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {

        }

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div>
                <Header
                    subtitle={this.state.subtitle}
                />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className="widget">
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption} />
                    <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                    
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        )
    }
}