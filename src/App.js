import React from "react";
import { Remarkable } from "remarkable";


class MarkDownEditor extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {value: "Hello World!",}
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    getRawMarkUp() {
        const md = new Remarkable()
        return {__html: md.render(this.state.value)};
    }

    render() {
        return (
            <div className="MarkdownEditor">
                <h3>Входные данные</h3>
                <label htmlFor="markdown-contect">
                    Введите что-то в формате markdown
                </label>
                <textarea
                    id="markdown-contect"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <h3>Вывод</h3>
                <div className="content" dangerouslySetInnerHTML={this.getRawMarkUp()}/>
            </div>
        )
    }
}


export default MarkDownEditor;