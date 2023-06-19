import React, { useState } from 'react';

// import DateTimePretty from './components/DateTimePretty'

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function DateTimePretty(Component) {
    return function (props) {
        let result;
        const date = new Date(props.date);
        const now = new Date();
        const difference = now - date;
        if (difference / (60 * 1000) >= 1) {
            result = Math.round(difference / (60 * 1000)) + ' минут назад'
        }
        if (difference / (60 * 60 * 1000) >= 1) {
            result = Math.round(difference / (60 * 60 * 1000)) + ' часов назад'
        }
        if (difference / (24 * 60 * 60 * 1000) >= 1) {
            result = Math.round(difference / (24 * 60 * 60 * 1000)) + ' дней назад'
        }

        return <Component date={result} />;
    }
}
const PrettyDateTime = DateTimePretty(DateTime);

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <PrettyDateTime date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-06-18 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}