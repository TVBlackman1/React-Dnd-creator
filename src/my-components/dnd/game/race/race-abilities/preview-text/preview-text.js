import React from "react";
import './preview-text.css'

class PreviewText extends React.Component {
    constructor(props) {
        super(props)
        this.pointsMax = this.props.pointsMax
        this.points = this.props.points
        this.text = "Раса не предоставляет самостоятельного выбора характеристик"
        this.state = {
            secondStyle: "",
            showStyle: "shown"
        }
        this.setText()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.pointsMax = this.props.pointsMax
        this.points = this.props.points
        this.setText()
    }

    setText() {
        if(this.pointsMax !== 0) {
            this.text = "Нераспределено очков: " + this.points + ". Нажмите на нужную характеристику"
            if(this.points !== 0) {
                // this.show()
                this.blink()
            } else {
                this.text = "Расовые очки распределены"
                this.stopBlink()

            }
        }else {
            this.text = "Раса не предоставляет самостоятельного выбора характеристик"
            this.stopBlink()

        }
    }

    hide() {
        this.state.showStyle = "hidden"
    }

    show() {
        this.state.showStyle = "shown"
    }

    blink() {
        this.state.secondStyle = "blink"
    }

    stopBlink() {
        this.state.secondStyle = ""
    }

    render() {
        return (
            <div className={
                "preview-text " +
                this.state.secondStyle + " " +
                this.state.showStyle
            }>{this.text}</div>
        );
    }
}

export default PreviewText