import React, { Component } from "react";
import "../styles/DateAndTime.css";

class DateAndTime extends Component {
  constructor(props) {
    super(props);
    this.state = { time: Date.now() };
  }

  dateBuilder = (d) => {
    var offset = this.props.timezone / 3600;
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * offset);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[nd.getDay()];
    let date = nd.getDate();
    let month = months[nd.getMonth()];
    let year = nd.getFullYear();

    return `${day} ${month} ${date}, ${year}`;
  };

  timeBuilder = (d) => {
    var offset = this.props.timezone / 3600;
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * offset);

    let hours = nd.getHours();
    let minutes = (nd.getMinutes() < 10 ? "0" : "") + nd.getMinutes();
    let seconds = (nd.getSeconds() < 10 ? "0" : "") + nd.getSeconds();

    return `${hours}:${minutes}:${seconds} Local Time (UTC ${offset})`;
  };

  render() {
    return (
      <div>
        <div className="date">{this.dateBuilder(new Date())}</div>
        <div className="time">{this.timeBuilder(new Date())}</div>;
      </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default DateAndTime;
